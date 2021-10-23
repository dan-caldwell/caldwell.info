import { PostMeta } from "../../utils/types";

export type SidebarListItemProps = {
    post: PostMeta,
    currentPost: string | null
}

const SidebarListItem: React.FC<SidebarListItemProps> = ({ post, currentPost }) => {
    const { title, slug } = post;
    
    const containerClass = `
        ${currentPost === slug ? 'bg-blue-200' : 'hover:bg-blue-50'}
        px-4 py-2
    `;

    return (
        <a href={`/post/${slug}`} className="hover:no-underline">
            <div className={containerClass}>
                <div>
                    {title}
                </div>
            </div>
        </a>
    )
}

export default SidebarListItem;