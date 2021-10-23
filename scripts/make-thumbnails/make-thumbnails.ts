// This CLI will generate thumbnails from post images
import PostUtils from '../../utils/PostUtils';
import dotenv from 'dotenv';
import AWS from 'aws-sdk';

dotenv.config();

const postList = PostUtils.getPostList();
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
});

const init = async () => {
    const obj = await s3.getObject({
        Bucket: 'caldwell.info',
        Key: 'images/ultracss-home.png'
    }).promise();
    console.log(obj);
}
init();

console.log(postList);