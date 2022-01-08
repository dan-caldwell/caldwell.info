import React from "react";
import SidebarListItem from "./SidebarListItem";

const SidebarGroup = ({
    title = '',
    list = [],
    currentPost = ''
}) => {
    return (
        <div>
            <div
                className="text-xs"
            >{title}</div>
            <div>
                {list.map(post => <SidebarListItem currentPost={currentPost} key={post.slug} post={post} />)}
            </div>
        </div>
    )
}

export default SidebarGroup;