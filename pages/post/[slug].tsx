import React, { useContext, useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import YouTube from 'react-youtube';
import PostUtils from '../../utils/PostUtils';
import { PostContext } from '../../components/context/PostContext';
import ContentContainer from '../../components/contentContainer';
import Header from '../../components/text/header';
import Image from '../../components/basic/Image';
import AnimatedScroll from '../../components/scroll/animatedScroll';
import TitleCard from '../../components/cards/titleCard';

const mdxComponents = {
    YouTube,
    Image,
    AnimatedScroll,
    TitleCard
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
        <ContentContainer className={!hideTitle ? `my-8` : ''}>
            {!hideTitle &&
                <Header title={title} />
            }
            <MDXRemote {...source} components={mdxComponents} />
        </ContentContainer>
    );
}
export default Post;