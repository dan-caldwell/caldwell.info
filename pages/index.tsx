import Head from 'next/head';
import PostUtils from '../utils/PostUtils';
import Post from '../components/postCard';
import PageWithSidebar from '../components/templates/pageWithSidebar';
import { PostMeta } from '../utils/types';

export const getStaticProps = async () => ({
    props: {
        postList: PostUtils.getPostList(),
    },
});

export default function IndexPage({ postList }) {
    return (
        <PageWithSidebar postList={postList}>
            <Head>
                <title>Home page</title>
            </Head>

            <h1 className="mx-auto max-w-xl text-3xl font-bold mt-4 mb-8">List of posts</h1>

            <section>
                {postList.map((post: PostMeta) => (
                    <Post {...post} key={post.slug} />
                ))}
            </section>
        </PageWithSidebar>
    );
}