import React, { Fragment, useContext, useState } from "react";
import LogoHeader from './LogoHeader';
import SidebarListItem from "./SidebarListItem";
import { PostContext } from "../context/PostContext";
import Link from "next/link";
import Footer from "./Footer";
import SidebarGroup from "./SidebarGroup";

export type SidebarProps = {
    lists: any[],
}

const Sidebar: React.FC<SidebarProps> = ({ lists }) => {
    const [hiddenSections, setHiddenSections] = useState([]);
    const { currentPost, menuOpen, setMenuOpen } = useContext(PostContext);

    const handleClickHamburger = () => {
        setMenuOpen(!menuOpen);
    }

    // Show/hide section when clicking on the section label
    const handleClickSection = (sectionName: string) => {
        setHiddenSections(oldHiddenSections => {
            const newHiddenSections = [...oldHiddenSections];
            const indexInHidden = newHiddenSections.indexOf(sectionName);
            if (indexInHidden === -1) {
                newHiddenSections.push(sectionName);
            } else {
                newHiddenSections.splice(indexInHidden, 1);
            }
            return newHiddenSections;
        });
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
                    {lists.map(list => (
                        <Fragment
                            key={list.name}
                        >
                            <div
                                onClick={() => handleClickSection(list.name)}
                                className="cursor-pointer"
                            >{list.name}</div>
                            <div
                                className={`overscroll-contain xl:overflow-y-scroll flex-col flex-grow flex bg-white
                                ${hiddenSections.includes(list.name) ? 'hidden' : ''}
                                `}
                            >
                                {list.children.map((post: any) => {
                                    if (!post.slug) {
                                        return <SidebarGroup key={post.name} name={post.name} list={post.children} />
                                    } else {
                                        return <SidebarListItem currentPost={currentPost} key={post.slug} post={post} />
                                    }
                                })}
                            </div>
                        </Fragment>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Sidebar;