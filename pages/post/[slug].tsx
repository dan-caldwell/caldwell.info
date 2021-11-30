import React, { useContext, useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import YouTube from 'react-youtube';
import PostUtils from '../../utils/PostUtils';
import { PostContext } from '../../components/context/PostContext';
import ContentContainer from '../../components/contentContainer';
import Image from '../../components/basic/Image';
import SpinScroll from '../../components/scroll/spinScroll';
import TitleCard from '../../components/cards/titleCard';
import PrintPageContainer from '../../components/content/PrintPageContainer';
import Md from '../../components/content/Md';

const mdxComponents = {
    YouTube,
    Image,
    SpinScroll,
    TitleCard,
    PrintPageContainer,
    Md
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

const Post = ({ source, meta: { title, hideTitle }, slug }) => {
    const { setCurrentPost } = useContext(PostContext);

    useEffect(() => {
        setCurrentPost(slug);
        return () => setCurrentPost(null);
    }, [setCurrentPost, slug]);

    return (
        <ContentContainer>
            <MDXRemote {...source} components={mdxComponents} />
        </ContentContainer>
    );
}
export default Post;