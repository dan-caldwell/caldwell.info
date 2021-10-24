import { useContext, useEffect } from 'react';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import YouTube from 'react-youtube';
import PostUtils from '../../utils/PostUtils';
import { PostContext } from '../../components/context/PostContext';
import ContainerCard from '../../components/cards/containerCard';

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
            slug,
        }
    }
}

export { getStaticPaths, getStaticProps };

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
        <ContainerCard className="my-8">
            <h1>{title}</h1>
            <MDXRemote {...source} components={mdxComponents} />
        </ContainerCard>
    );
}
export default Post;