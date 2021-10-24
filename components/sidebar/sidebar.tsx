import React, { useContext } from "react";
import { PostMeta } from "../../utils/types";
import LogoHeader from './logoHeader';
import SidebarListItem from "./sidebarListItem";
import { PostContext } from "../context/PostContext";
import Link from "next/link";

export type SidebarProps = {
    list: PostMeta[]
}

const Sidebar: React.FC<SidebarProps> = ({ list }) => {
    const { currentPost } = useContext(PostContext);

    return (
        <div className="Sidebar fixed w-sidebar bg-white h-full border-r border-gray-200 flex flex-col">
            <LogoHeader title="Dan Caldwell" href="/" />
            <Link href="/about">
                <a>About</a>
            </Link>
            <div className="overflow-y-scroll flex flex-col">
                {list.map(post => <SidebarListItem currentPost={currentPost.get} key={post.slug} post={post} />)}
            </div>
        </div>
    )
}

export default Sidebar;