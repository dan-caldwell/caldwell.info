import Link from "next/link";
import React, { useEffect, useRef, useState, useContext } from "react";
import { PostMeta } from "../../utils/types";
import { PostContext } from "../context/PostContext";

export type SidebarListItemProps = {
    post: PostMeta,
    currentPost: string | null
}

const SidebarListItem: React.FC<SidebarListItemProps> = ({ post, currentPost }) => {
    const [loaded, setLoaded] = useState(false);
    const { title, slug, thumbnail } = post;
    const container = useRef(null);
    const { menuOpen } = useContext(PostContext);

    const containerClass = `
        ${currentPost === slug ? 'bg-purple-100' : 'xl:hover:bg-purple-50'}
        flex p-4 w-full
    `;

    // Scroll to the element if it's not in view
    useEffect(() => {
        const parentBox = container.current.parentElement.getBoundingClientRect();
        const containerBox = container.current.getBoundingClientRect();
        const inView = containerBox.bottom >= parentBox.top && containerBox.top <= parentBox.bottom;
        if (currentPost === slug && (!inView || !loaded || window.innerWidth <= 1184)) {
            container.current.scrollIntoView({
                block: "center"
            });
        }
        if (!loaded && currentPost) setLoaded(true);
    }, [currentPost, loaded, slug, menuOpen]);

    return (
        <div className="flex border-b border-gray-200 last:border-0" ref={container}>
            <Link href={`/post/${slug}`} prefetch={false} scroll={currentPost !== slug}>
                <a className="hover:no-underline w-full break-normal">
                    <div className={containerClass}>
                        <img src={thumbnail} className="w-16 h-16 mr-2" alt={`${title} thumbnail`} />
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