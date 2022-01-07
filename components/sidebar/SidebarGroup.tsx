import React from "react";
import SidebarListItem from "./SidebarListItem";

const SidebarGroup = ({
    name = '',
    list = [],
    currentPost = ''
}) => {
    return (
        <div>
            <div
                className="text-xs"
            >{name}</div>
            <div>
                {list.map(post => <SidebarListItem currentPost={currentPost} key={post.slug} post={post} />)}
            </div>
        </div>
    )
}

export default SidebarGroup;