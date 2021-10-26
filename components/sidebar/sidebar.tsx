import React, { useContext } from "react";
import { PostMeta } from "../../utils/types";
import LogoHeader from './logoHeader';
import SidebarListItem from "./sidebarListItem";
import { PostContext } from "../context/PostContext";
import Link from "next/link";
import Footer from "./footer";

export type SidebarProps = {
    list: PostMeta[]
}

const Sidebar: React.FC<SidebarProps> = ({ list }) => {
    const { currentPost } = useContext(PostContext);

    return (
        <div className="w-sidebar bg-white h-full border-r border-gray-200 flex flex-col justify-between">
            <div className="flex flex-col flex-grow  overflow-hidden">
                <LogoHeader title="Dan Caldwell" href="/" />
                <div className="w-full flex">
                    <Link href="/about">
                        <a className="px-4 py-2 w-full border-b border-gray-200 hover:no-underline hover:bg-purple-50">About</a>
                    </Link>
                </div>
                <div className="overflow-y-scroll flex flex-col flex-grow">
                    {list.map(post => <SidebarListItem currentPost={currentPost.get} key={post.slug} post={post} />)}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Sidebar;