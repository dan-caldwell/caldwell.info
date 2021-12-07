import React, { ReactNode, useContext, useEffect, useRef } from "react";
import Sidebar from "../sidebar/Sidebar";
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
            window.scrollTo(0, 0);
        }, 50);
    }, [currentPost]);

    return (
        <div className="flex flex-col xl:flex-row w-outer-container mx-auto justify-between border-r border-gray-300 h-screen bg-white">
            <Sidebar list={postList} />
            <main ref={mainRef} className={`
                flex-col px-4 mt-16 w-container m-sidebar overflow-y-hidden
                xl:min-h-full xl:px-0 xl:mt-0 ${menuOpen ? 'hidden xl:flex' : 'flex'}`}
            >
                {children}
            </main>
        </div>
    )
}

export default PageWithSidebar;