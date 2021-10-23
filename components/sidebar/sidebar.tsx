import React, { useContext } from "react";
import { PostMeta } from "../../utils/types";
import LogoHeader from './logoHeader';
import SidebarListItem from "./sidebarListItem";
import { PostContext } from "../context/PostContext";

export type SidebarProps = {
    list: PostMeta[]
}

const Sidebar: React.FC<SidebarProps> = ({ list }) => {
    const { currentPost } = useContext(PostContext);
    return (
        <div className="Sidebar fixed w-sidebar bg-white h-full border-r border-gray-200">
            <LogoHeader title="Dan Caldwell" href="/" />
            {list.map(post => <SidebarListItem currentPost={currentPost.get} key={post.slug} post={post} />)}
        </div>
    )
}

export default Sidebar;