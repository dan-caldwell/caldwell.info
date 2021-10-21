import Link from 'next/link';
import { PostMeta } from '../utils/types';

const PostCard: React.FC<PostMeta> = ({ slug, title }) => {
    return (
        <article className="max-w-xl mx-auto mb-6 flex-shrink-0 bg-white rounded-xl shadow-md flex p-6 flex-col">
            <h2 className="text-xl font-bold mb-3">{title}</h2>
            <Link href={`/post/${slug}`}>
                <a className="text-sm text-blue-600 hover:underline">Read more...</a>
            </Link>
        </article>
    )
}
export default PostCard;