import React, { useContext, useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import YouTube from 'react-youtube';
import PostUtils from '../../utils/PostUtils';
import { PostContext } from '../../components/context/PostContext';
import ContentContainer from '../../components/contentContainer';
import Header from '../../components/text/header';

export const getStaticPaths = async () => {
    const files = fs.readdirSync(path.join('posts')).filter(fileName => !fileName.includes('.DS_Store'));

    const paths = files.map(fileName => ({
        params: {
            slug: fileName.replace('.mdx', '')
        }
    }));

    return { paths, fallback: false }
}

export const getStaticProps = async ({ params: { slug } }) => {
    const { source, meta } = await PostUtils.getMdxSource({ slug })

    return {
        props: {
            source,
            meta,
            slug,
        }
    }
}

const mdxComponents = {
    YouTube
}

const Post = ({ source, meta: { title }, slug }) => {
    const { currentPost } = useContext(PostContext);

    useEffect(() => {
        currentPost.set(slug);
        return () => currentPost.set(null);
    }, [currentPost.get, slug]);

    return (
        <ContentContainer className="my-8">
            <Header title={title} />
            <MDXRemote {...source} components={mdxComponents} />
        </ContentContainer>
    );
}
export default Post;