// Generates a JSON file of the list of posts
import fs from 'fs-extra';
import path from 'path';
import PostUtils from "../../utils/PostUtils";

const postList = PostUtils.getPostList();
const location = path.join(__dirname, '../../json/post-list.json');
fs.ensureFileSync(location);
fs.writeJson(location, JSON.stringify(postList));
console.log('Created static post list');