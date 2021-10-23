import { HandleImages } from '../scripts/handle-images/handle-images';
import PostUtils from '../utils/PostUtils';

test("convertImage", async () => {
    const postList = PostUtils.getPostList({ getHTML: true });
    const imagesToUpload = await HandleImages.findNonUploadedImages({ postList });
    for (const { src, buffer, isThumbnail, mdFilePath, slug } of imagesToUpload) {
        // Resize images, convert to jpg
        await HandleImages.convertImage({ buffer, src, isThumbnail });
    }
});

test("newFileName", () => {

    const newThumbnailName = HandleImages.newFileName({ 
        src: 'images/thumbnails/ultracss-logo-img-2.png', 
        isThumbnail: true, 
        slug: 'ultracss'
    });
    expect(newThumbnailName).toEqual(`images/thumbnails/ultracss-thumbnail.jpg`);

    const newImageName = HandleImages.newFileName({ 
        src: 'images/ultracss-home.png',
        isThumbnail: false,
        slug: 'ultracss'
    });

    expect(newImageName).toEqual('images/ultracss-home.jpg');
});