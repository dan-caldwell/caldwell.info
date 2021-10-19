import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Link from 'next/link';
import Test from '../../components/test';

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

export default function Post({ source, frontMatter }) {
  return (
    <main className="bg-white mx-auto max-w-xl rounded-xl shadow-md p-6 mt-6">

      <h1>{frontMatter.title}</h1>

      <p className="mb-3">
        <MDXRemote {...source} components={{ Test }} />
      </p>

      <Link href="/">
        <a className="text-sm text-blue-600 hover:underline">Go back to home</a>
      </Link>
    </main>
  )
}