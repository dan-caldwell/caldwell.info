import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXSource, PostMeta } from './types';

export default class PostsUtils {

    static getPostList = (): PostMeta[] => {
        // Get files from the posts director
        const files = fs.readdirSync(path.join('posts'));

        // Get slugs
        const postList = files.map(fileName => {
            const slug = fileName.replace('.mdx', '');

            // Get meta
            const mdWithMeta = fs.readFileSync(path.join('posts', fileName), 'utf8');

            const { data: meta } = matter(mdWithMeta);
            const { title, date, excerpt } = meta;
            return { 
                slug, 
                title,
                date,
                excerpt
            }
        });

        return postList;
    }

    static getMdxSource = async ({ slug }: MDXSource) => {
        const mdxWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8');
        const { content, data: meta } = matter(mdxWithMeta);
        return {
            source: await serialize(content, { scope: meta }),
            meta,
            content,
            mdxWithMeta
        }
    }

}