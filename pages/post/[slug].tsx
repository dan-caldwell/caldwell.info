import { useContext, useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';
import YouTube from 'react-youtube';
import PostUtils from '../../utils/PostUtils';
import { PostContext } from '../../components/context/PostContext';
import PageWithSidebar from '../../components/templates/pageWithSidebar';
import ContainerCard from '../../components/cards/containerCard';
import Slideshow from '../../components/slideshow/slideshow';
import Slide from '../../components/slideshow/slide';
import useSlideshow from '../../hooks/useSlideshow';

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
    YouTube,
    Slide
}

const Post = ({ source, meta: { title, thumbnail }, postList, slug }) => {
    const { getNumSlides } = useSlideshow();
    const { currentPost, resetPostContext, postLoaded } = useContext(PostContext);
    useEffect(() => {
        postLoaded({
            newNumSlides: getNumSlides(),
            newCurrentPost: slug
        });
        return () => resetPostContext();
    }, [currentPost.get, slug]);
    return (
        <PageWithSidebar postList={postList}>
            <ContainerCard className="my-8">
                <h1>{title}</h1>
                <Slideshow>
                    <MDXRemote {...source} components={mdxComponents} />
                </Slideshow>
                <Link href="/">
                    <a className="text-sm">Go back to home</a>
                </Link>
            </ContainerCard>
        </PageWithSidebar>
    );
}
export default Post;