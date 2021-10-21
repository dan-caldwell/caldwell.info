import { PostMeta } from "../../utils/types";

export type SidebarListItemProps = {
    post: PostMeta
}

const SidebarListItem: React.FC<SidebarListItemProps> = ({ post }) => {
    const { title, slug } = post;
    return (
        <a href={`/post/${slug}`}>
            <div>
                <div>
                    {title}
                </div>
            </div>
        </a>
    )
}

export default SidebarListItem;