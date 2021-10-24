import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';
import YouTube from 'react-youtube';
import PostUtils from '../../utils/PostUtils';
import PageWithSidebar from '../../components/templates/pageWithSidebar';
import ContainerCard from '../../components/cards/containerCard';
import { PostContext } from '../../components/context/PostContext';
import { useContext, useEffect } from 'react';

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
            postList: PostUtils.getPostList(),
            slug,
        }
    }
}

export { getStaticPaths, getStaticProps };

const mdxComponents = {
    YouTube
}

const Post = ({ source, meta: { title, thumbnail }, postList, slug }) => {
    const { currentPost } = useContext(PostContext);
    useEffect(() => {
        currentPost.set(slug);
        return () => currentPost.set(null);
    }, [currentPost, slug]);
    return (
        <PageWithSidebar postList={postList}>
            <ContainerCard className="my-8">
                <h1>{title}</h1>
                <div className="mb-4 post-content">
                    <MDXRemote {...source} components={mdxComponents} />
                </div>
                <Link href="/">
                    <a className="text-sm">Go back to home</a>
                </Link>
            </ContainerCard>
        </PageWithSidebar>
    );
}
export default Post;