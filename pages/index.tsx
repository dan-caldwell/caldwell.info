import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';

import Post from '../components/post';

export async function getStaticProps() {
    // Get files from the posts director
    const files = fs.readdirSync(path.join('posts'));

    // Get slugs
    const postList = files.map(fileName => {
        const slug = fileName.replace('.mdx', '');

        // Get meta
        const mdWithMeta = fs.readFileSync(path.join('posts', fileName), 'utf8');

        const { data: meta } = matter(mdWithMeta);
        return { slug, meta }
    });

    return {
        props: {
            postList,
        },
    }
}

export default function IndexPage({ postList }) {
    return (
        <main className="IndexPage">
            <Head>
                <title>Home page</title>
            </Head>

            <h1 className="mx-auto max-w-xl text-3xl font-bold mt-4 mb-8">List of posts</h1>

            <section>
                {postList.map((post) => (
                    <Post {...post} key={post.slug} />
                ))}
            </section>
        </main>
    )
}