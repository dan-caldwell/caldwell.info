import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXSource } from './types';
import marked from 'marked';
import dirTree from 'directory-tree';
import { PROJECTS_DIR } from './constants';

export default class PostUtils {

    static getPostList = ({ getHTML = false, getContent = false, flat = false } = {}) => {

        const tree = dirTree(path.join(PROJECTS_DIR), { extensions: /\.mdx$/ });

        // Map through the structure tree and get metadata from each post
        const flatOutput = [];
        const mapTree = tree => {
            if (!tree.children) return;
            tree.children.forEach((child, index) => {
                if (child.name.endsWith('.mdx')) {
                    const slug = child.name.replace('.mdx', '');
                    // Get meta
                    const mdWithMeta = fs.readFileSync(path.join(child.path), 'utf8');
                    const { data: meta, content } = matter(mdWithMeta);
                    tree.children[index] = {
                        ...child,
                        ...meta,
                        html: getHTML ? marked(content) : null,
                        content: getContent ? content : null,
                        slug,
                    }
                    if (flat) flatOutput.push(tree.children[index]);
                }
                mapTree(child);
            });
        }
        mapTree(tree);
        if (flat) return flatOutput;
        return tree;
    }

    static getMdxSource = async ({ slug, altPath }: MDXSource) => {
        const mdxWithMeta = fs.readFileSync(altPath || path.join(slug + '.mdx'), 'utf-8');
        const { content, data: meta } = matter(mdxWithMeta);
        return {
            source: await serialize(content, { scope: meta }),
            meta,
            content,
            mdxWithMeta
        }
    }

}