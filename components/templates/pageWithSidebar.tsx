import React, { ReactNode, useContext, useEffect, useRef, useState } from "react";
import Sidebar from "../sidebar/sidebar";
import PostList from '../../json/post-list.json';
import { PostMeta } from "../../utils/types";
import { PostContext } from "../context/PostContext";

export type PageWithSidebarProps = {
    children: ReactNode,
}

const postList = JSON.parse(PostList);
postList.sort((a: PostMeta, b: PostMeta) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return bDate.getTime() - aDate.getTime();
});

const PageWithSidebar: React.FC<PageWithSidebarProps> = ({ children }) => {
    const { menuOpen, currentPost } = useContext(PostContext);
    const mainRef = useRef(null);

    useEffect(() => {
        // Scroll to the top of the main element
        setTimeout(() => {
            mainRef.current.scrollTo(0, 0);
        }, 50);
    }, [currentPost]);

    return (
        <div className="flex flex-col xl:flex-row h-screen overflow-hidden">
            <Sidebar list={postList} />
            <main ref={mainRef} className={`flex-col flex-grow xl:min-h-full overflow-y-scroll xl:px-0 px-8 ${menuOpen ? 'hidden xl:flex' : 'flex'}`}>
                {children}
            </main>
        </div>
    )
}

export default PageWithSidebar;