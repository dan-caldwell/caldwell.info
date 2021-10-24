import Link from 'next/link';
import { PostMeta } from '../../utils/types';
import ContainerCard from './containerCard';

const PostCard: React.FC<PostMeta> = ({ slug, title }) => {
    return (
        <ContainerCard className="my-4">
            <h2 className="text-xl font-bold mb-3">{title}</h2>
            <Link href={`/post/${slug}`}>
                <a className="text-sm text-blue-600 hover:underline">Read more...</a>
            </Link>
        </ContainerCard>
    )
}
export default PostCard;