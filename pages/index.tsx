import Head from 'next/head';
import PostUtils from '../utils/PostUtils';
import PostCard from '../components/cards/postCard';
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

            <div className="mx-auto flex mt-8 mb-4 w-200 items-center">
                <img src="static/memoji.png" className="h-36 mr-8" />
                <h1 className="text-3xl font-bold leading-9 mb-0">
                    Hello — my name is Dan Caldwell. I’m a software engineer. This is a selection of my personal and professional work.
                </h1>
            </div>

            <section>
                {postList.map((post: PostMeta) => (
                    <PostCard {...post} key={post.slug} />
                ))}
            </section>
        </PageWithSidebar>
    );
}