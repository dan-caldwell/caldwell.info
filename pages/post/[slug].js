import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';
import YouTube from 'react-youtube';
import Sidebar from '../../components/sidebar/sidebar';

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map(fileName => ({
    params: {
      slug: fileName.replace('.mdx', '')
    }
  }));

  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
  const mdxWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8');
  const { content, data } = matter(mdxWithMeta);
  const mdxSource = await serialize(content, { scope: data });

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  }
}

const mdxComponents = {
  YouTube
}

export default function Post({ source, frontMatter }) {
  return (
    <>
      <Sidebar />
      <main className="m-sidebar flex flex-1 min-h-screen">
        <div className="mx-auto w-200 my-8">
          <div className="p-8 rounded-lg border border-gray-200 bg-white flex flex-col">
            <h1>{frontMatter.title}</h1>
            <div className="mb-4 post-content">
              <MDXRemote {...source} components={mdxComponents} />
            </div>
            <Link href="/">
              <a className="text-sm">Go back to home</a>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}