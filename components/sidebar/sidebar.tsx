import React from "react";
import { PostMeta } from "../../utils/types";
import LogoHeader from './logoHeader';
import SidebarListItem from "./sidebarListItem";

export type SidebarProps = {
    list: PostMeta[]
}

const Sidebar: React.FC<SidebarProps> = ({ list }) => {
    return (
        <div className="Sidebar fixed w-sidebar bg-white h-full border-r border-gray-200 p-4">
            <LogoHeader title="Dan Caldwell" href="/" />
            {list.map(post => <SidebarListItem key={post.slug} post={post} />)}
        </div>
    )
}

export default Sidebar;