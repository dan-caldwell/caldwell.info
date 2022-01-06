import React from "react";
import SidebarListItem from "./SidebarListItem";

const SidebarGroup = ({
    name = '',
    children = [],
    currentPost = ''
}) => {
    return (
        <div>
            <div>{name}</div>
            <div>
                {children.map(post => <SidebarListItem currentPost={currentPost} key={post.slug} post={post} />)}
            </div>
        </div>
    )
}

export default SidebarGroup;