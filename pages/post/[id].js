import Link from 'next/link'
import Head from 'next/head'

export async function getStaticPaths() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts?_page=1'
  )
  const postList = await response.json()
  return {
    paths: postList.map((post) => {
      return {
        params: {
          id: `${post.id}`,
        },
      }
    }),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  // fetch single post detail
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  )
  const post = await response.json()
  return {
    props: post,
  }
}

export default function Post({ title, body }) {
  return (
    <main className="bg-white mx-auto max-w-xl rounded-xl shadow-md p-6 mt-6">
      <Head>
        <title>{title}</title>
      </Head>

      <h1>{title}</h1>

      <p className="mb-3">{body}</p>

      <Link href="/">
        <a className="text-sm text-blue-600 hover:underline">Go back to home</a>
      </Link>
    </main>
  )
}