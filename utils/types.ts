export type MDXSource = {
    slug: string
}

export type PostMeta = {
    slug: string,
    title?: string,
    date?: string,
    excerpt?: string
    thumbnail?: string
    html?: string
    content?: string,
    filePath: string
}