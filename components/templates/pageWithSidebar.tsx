import React, { ReactNode, useEffect, useState } from "react";
import Sidebar from "../sidebar/sidebar";
import PostList from '../../json/post-list.json';

export type PageWithSidebarProps = {
    children: ReactNode,
}

const postList = JSON.parse(PostList);

const PageWithSidebar: React.FC<PageWithSidebarProps> = ({ children }) => {
    return (
        <div className="flex h-screen">
            <Sidebar list={postList} />
            <main className="flex flex-col flex-1 min-h-screen overflow-y-scroll">
                {children}
            </main>
        </div>
    )
}

export default PageWithSidebar;