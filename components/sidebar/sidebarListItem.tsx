import Link from "next/link";
import React from "react";
import { PostMeta } from "../../utils/types";

export type SidebarListItemProps = {
    post: PostMeta,
    currentPost: string | null
}

const SidebarListItem: React.FC<SidebarListItemProps> = ({ post, currentPost }) => {
    const { title, slug, thumbnail } = post;

    const containerClass = `
        ${currentPost === slug ? 'bg-purple-100' : 'hover:bg-purple-50'}
        flex p-4 w-full
    `;

    return (
        <div className="flex">
            <Link href={`/post/${slug}`} prefetch={false}>
                <a className="hover:no-underline w-full">
                    <div className={containerClass}>
                        <img className="w-16 h-16 mr-2" src={thumbnail} />
                        <div>
                            {title}
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default SidebarListItem;