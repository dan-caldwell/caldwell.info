import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXSource, PostMeta } from './types';
import marked from 'marked';

export default class PostUtils {

    static getPostList = ({ getHTML = false, getContent = false } = {}): PostMeta[] => {
        // Get files from the posts director
        const files = fs.readdirSync(path.join('posts')).filter(fileName => !fileName.includes('.DS_Store'));

        // Get slugs
        const postList = files.map(fileName => {
            const slug = fileName.replace('.mdx', '');

            // Get meta
            const mdWithMeta = fs.readFileSync(path.join('posts', fileName), 'utf8');

            const { data: meta, content } = matter(mdWithMeta);
            const { title, date, excerpt, thumbnail } = meta;
            return { 
                slug, 
                title,
                date,
                thumbnail: thumbnail || null,
                excerpt,
                html: getHTML ? marked(content) : null,
                content: getContent ? content : null,
                filePath: path.join(__dirname, '../posts', fileName)
            }
        });

        return postList;
    }

    static getMdxSource = async ({ slug, altPath }: MDXSource) => {
        const mdxWithMeta = fs.readFileSync(altPath || path.join('posts', slug + '.mdx'), 'utf-8');
        const { content, data: meta } = matter(mdxWithMeta);
        return {
            source: await serialize(content, { scope: meta }),
            meta,
            content,
            mdxWithMeta
        }
    }

}