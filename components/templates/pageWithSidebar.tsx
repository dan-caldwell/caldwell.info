import React, { ReactNode, useEffect, useState } from "react";
import Sidebar from "../sidebar/sidebar";
import PostList from '../../json/post-list.json';

export type PageWithSidebarProps = {
    children: ReactNode,
}

const PageWithSidebar: React.FC<PageWithSidebarProps> = ({ children }) => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        setPostList(JSON.parse(PostList));
    }, []);
    
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