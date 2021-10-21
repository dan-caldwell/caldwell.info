import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';
import YouTube from 'react-youtube';
import Sidebar from '../../components/sidebar/sidebar';
import PostUtils from '../../utils/PostUtils';
import PageWithSidebar from '../../components/templates/pageWithSidebar';

const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts'));

    const paths = files.map(fileName => ({
        params: {
            slug: fileName.replace('.mdx', '')
        }
    }));

    return { paths, fallback: false }
}

const getStaticProps = async ({ params: { slug } }) => {
    const { source, meta } = await PostUtils.getMdxSource({ slug })

    return {
        props: {
            source,
            meta,
            postList: PostUtils.getPostList()
        }
    }
}

export { getStaticPaths, getStaticProps };

const mdxComponents = {
    YouTube
}

const Post = ({ source, meta: { title }, postList }) => {
    return (
        <PageWithSidebar postList={postList}>
            <div className="mx-auto w-200 my-8">
                <div className="p-8 rounded-lg border border-gray-200 bg-white flex flex-col">
                    <h1>{title}</h1>
                    <div className="mb-4 post-content">
                        <MDXRemote {...source} components={mdxComponents} />
                    </div>
                    <Link href="/">
                        <a className="text-sm">Go back to home</a>
                    </Link>
                </div>
            </div>
        </PageWithSidebar>
    );
}
export default Post;