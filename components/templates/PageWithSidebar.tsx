import React, { ReactNode, useContext, useEffect, useRef } from "react";
import Sidebar from "../sidebar/Sidebar";
import PostList from '../../json/post-list.json';
import { PostContext } from "../context/PostContext";

export type PageWithSidebarProps = {
    children: ReactNode,
}

const postList = JSON.parse(PostList);

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

    const appHeight = async () => {
        await timeout(100);
        document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    }

    const timeout = (ms: number) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Fix screen sizing on mobile
    useEffect(() => {
        window.addEventListener('resize', appHeight);
        appHeight();
        return () => window.removeEventListener('resize', appHeight);
    });

    return (
        <div className="flex flex-col xl:flex-row w-outer-container mx-auto xl:justify-between border-r border-gray-300 bg-white">
            <Sidebar list={postList} />
            <main ref={mainRef} className={`
                flex-col px-4 mt-16 w-container m-sidebar overflow-y-hidden h-full
                xl:min-h-full xl:px-0 xl:mt-0 ${menuOpen ? 'hidden xl:flex' : 'flex'}`}
            >
                {children}
            </main>
        </div>
    )
}

export default PageWithSidebar;