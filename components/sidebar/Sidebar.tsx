import React, { useContext, useEffect } from "react";
import { PostMeta } from "../../utils/types";
import LogoHeader from './LogoHeader';
import SidebarListItem from "./SidebarListItem";
import { PostContext } from "../context/PostContext";
import Link from "next/link";
import Footer from "./Footer";

export type SidebarProps = {
    list: PostMeta[],
}

const Sidebar: React.FC<SidebarProps> = ({ list }) => {
    const { currentPost, menuOpen, setMenuOpen } = useContext(PostContext);

    const handleClickHamburger = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div className={`Sidebar xl:fixed top-0 w-sidebar xl:mr-4 xl:border-r xl:border-l xl:border-gray-300 flex-col justify-between flex flex-shrink-0 xl:h-full ${menuOpen ? 'h-full' : ''}`}>
            <div className="flex-col flex-grow xl:overflow-hidden flex">
                <LogoHeader title="Dan Caldwell" href="/" onClickHamburger={handleClickHamburger} hamburgerVisible={!menuOpen} />
                <div className={`flex-col xl:overflow-hidden xl:flex xl:mt-0 mt-16 ${menuOpen ? "flex" : "hidden"}`}>
                    <div className="w-full flex">
                        <Link href="/about">
                            <a className="px-4 py-2 w-full border-b border-gray-300 hover:no-underline hover:bg-purple-50">About</a>
                        </Link>
                    </div>
                    <div className="overscroll-contain xl:overflow-y-scroll flex-col flex-grow flex bg-white">
                        {list.map(post => <SidebarListItem currentPost={currentPost} key={post.slug} post={post} />)}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Sidebar;