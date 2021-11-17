import React, { useContext, useState } from "react";
import { PostMeta } from "../../utils/types";
import LogoHeader from './logoHeader';
import SidebarListItem from "./sidebarListItem";
import { PostContext } from "../context/PostContext";
import Link from "next/link";
import Footer from "./footer";

export type SidebarProps = {
    list: PostMeta[],
    onClickHamburger?: (menuOpen: boolean) => void
}

const Sidebar: React.FC<SidebarProps> = ({ list, onClickHamburger }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { currentPost } = useContext(PostContext);

    const handleClickHamburger = () => {
        setMenuOpen(!menuOpen);
        onClickHamburger(!menuOpen);
    }

    return (
        <div className="w-sidebar bg-white h-full border-r border-gray-200 flex-col justify-between flex">
            <div className="flex-col flex-grow overflow-hidden flex">
                <LogoHeader title="Dan Caldwell" href="/" onClickHamburger={handleClickHamburger} hamburgerVisible={!menuOpen} />
                <div className={`flex-col overflow-hidden xl:flex ${menuOpen ? "flex" : "hidden"}`}>
                    <div className="w-full flex">
                        <Link href="/about">
                            <a className="px-4 py-2 w-full border-b border-gray-200 hover:no-underline hover:bg-purple-50">About</a>
                        </Link>
                    </div>
                    <div className="overflow-y-scroll flex-col flex-grow flex">
                        {list.map(post => <SidebarListItem currentPost={currentPost} key={post.slug} post={post} />)}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Sidebar;