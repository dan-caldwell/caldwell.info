// This CLI will generate thumbnails from post images and automatically upload images from the public/images folder to S3
// It will then replace the post images with the new S3 URLs
import PostUtils from '../../utils/PostUtils';
import dotenv from 'dotenv';
import AWS from 'aws-sdk';
import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import { PostMeta } from '../../utils/types';
import sharp from 'sharp';

dotenv.config();

export class HandleImages {

    static pushToImagesToBeUploaded = ({ output, src, slug, filePath, isThumbnail }) => {
        try {
            const buffer = fs.readFileSync(path.join(__dirname, `../../public`, src));
            output.push({
                src,
                slug,
                buffer,
                mdFilePath: filePath,
                isThumbnail
            });
        } catch (err) {
            console.log('Image file not found', src);
            console.log(err);
        }
    }

    // Loop through postList to find non-uploaded images
    static findNonUploadedImages = ({ postList }: { postList: PostMeta[] }) => {
        const output = [];
        postList.forEach(({ html, slug, filePath, thumbnail }) => {
            // Use JSDOM to get all image elements
            const { document } = (new JSDOM(html)).window;
            const images = [...document.querySelectorAll('img')];
            const srcs = images.map(img => img.src);
            // Check if we should add the thumbnail
            if (thumbnail) srcs.push(thumbnail);
            srcs.forEach(src => {
                const isThumbnail = src.startsWith('images/thumbnails/');
                if (src.startsWith('images/')) {
                    this.pushToImagesToBeUploaded({
                        output,
                        src,
                        slug,
                        filePath,
                        isThumbnail
                    });
                }
            });
        });
        return output;
    }

    // Create a thumbnail
    static createThumbnail = async ({ buffer, src }) => {
        try {
            return await sharp(buffer)
                .resize({
                    width: 200,
                    height: 200,
                    fit: sharp.fit.cover,
                    position: 'center'
                })
                .jpeg({
                    quality: 75
                })
                .toBuffer();
        } catch (err) {
            console.log('Could not resize thumbnail', src);
            console.log(err);
            return buffer;
        }
    }

    // Compress an image and conver to JPG
    static compressImage = async ({ buffer, src }) => {
        try {
            return await sharp(buffer)
                .jpeg({
                    quality: 75
                })
                .toBuffer();
        } catch (err) {
            console.log('Could not compress image', src);
            console.log(err);
            return buffer;
        }
    }

    // General conversion of image
    static convertImage = async ({ buffer, isThumbnail, src }) => {
        if (isThumbnail) {
            return await this.createThumbnail({ buffer, src });
        } else {
            return await this.compressImage({ buffer, src });
        }
    }

    static newFileName = ({ src, isThumbnail, slug }) => {
        const fileName = src.split('/').pop();
        const extension = fileName.split('.').pop();
        return isThumbnail ? `images/thumbnails/${slug}-thumbnail.jpg` : src.replace(extension, 'jpg');
    }

    static replaceImageSrc = ({ mdFilePath, newSrc, oldSrc }) => {
        try {
            // Replace the local MDX file contents
            const mdFile = fs.readFileSync(mdFilePath, 'utf-8');
            const newImgUrl = `https://s3.amazonaws.com/caldwell.info/${newSrc}`;
            const newMdFileContents = mdFile.replace(oldSrc, newImgUrl);
            fs.writeFileSync(mdFilePath, newMdFileContents);
            console.log('Replaced image url in MD file', newImgUrl);
        } catch (err) {
            console.log('Error replacing image src', oldSrc);
            console.log(err);
        }
    }

    static doesObjectExist = async ({ s3, key }) => {
        try {
            return await s3.getHeadObject({
                Bucket: process.env.AWS_BUCKET,
                Key: key
            });
        } catch (err) {
            return false;
        }
    }

}



const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
});

const init = async () => {
    const postList = PostUtils.getPostList({ getHTML: true });
    const imagesToUpload = HandleImages.findNonUploadedImages({ postList });
    for (const { src, buffer, isThumbnail, mdFilePath, slug } of imagesToUpload) {
        // Resize images, convert to jpg
        const newImageBuffer = await HandleImages.convertImage({ buffer, src, isThumbnail });
        const newKey = HandleImages.newFileName({ src, isThumbnail, slug });
        try {
            // Upload the image
            await s3.putObject({
                Bucket: process.env.AWS_BUCKET,
                Key: newKey,
                Body: newImageBuffer
            }).promise();
            console.log('Uploaded image', newKey);
        } catch (err) {
            console.log('Error uploading image \n', newKey, err);
        }
        HandleImages.replaceImageSrc({ mdFilePath, newSrc: newKey, oldSrc: src });
    }
}
init();