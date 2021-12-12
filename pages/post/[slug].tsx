import React, { useContext, useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import YouTube from '../../components/content/YouTubeWrap';
import PostUtils from '../../utils/PostUtils';
import { PostContext } from '../../components/context/PostContext';
import ContentContainer from '../../components/ContentContainer';
import Image from '../../components/basic/Image';
import SpinScroll from '../../components/scroll/spinScroll';
import TitleCard from '../../components/cards/TitleCard';
import PrintPageContainer from '../../components/content/PrintPageContainer';
import Md from '../../components/content/Md';
import Header from '../../components/text/Header';
import Anchor from '../../components/basic/Anchor';

const mdxComponents = {
    YouTube,
    Image,
    SpinScroll,
    TitleCard,
    PrintPageContainer,
    Md,
    Anchor
}

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
    const { source, meta } = await PostUtils.getMdxSource({ slug });

    return {
        props: {
            source,
            meta,
            slug,
        }
    }
}

const Post = ({ source, meta: { title }, slug }) => {
    const { setCurrentPost } = useContext(PostContext);

    useEffect(() => {
        setCurrentPost(slug);
        return () => setCurrentPost(null);
    }, [setCurrentPost, slug]);

    return (
        <ContentContainer>
            <Header title={title} />
            <MDXRemote {...source} components={mdxComponents} />
        </ContentContainer>
    );
}
export default Post;