import React, { ReactNode, useEffect, useRef, useState } from "react";
import Sidebar from "../sidebar/sidebar";
import PostList from '../../json/post-list.json';
import { PostMeta } from "../../utils/types";

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
    const [menuOpen, setMenuOpen] = useState(false);
    const mainRef = useRef(null);

    useEffect(() => {
        mainRef.current.scrollTo(0, 0);
    });

    return (
        <div className="flex flex-col xl:flex-row h-screen">
            <Sidebar list={postList} onClickHamburger={setMenuOpen} />
            <main ref={mainRef} className={`flex-col flex-1 min-h-screen overflow-y-scroll ${menuOpen ? 'hidden xl:flex' : 'flex'}`}>
                {children}
            </main>
        </div>
    )
}

export default PageWithSidebar;