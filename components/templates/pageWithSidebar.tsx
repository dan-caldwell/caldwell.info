import React, { ReactNode } from "react";
import { PostMeta } from "../../utils/types";
import Sidebar from "../sidebar/sidebar";

export type PageWithSidebarProps = {
    children: ReactNode,
    postList: PostMeta[],
}

const PageWithSidebar: React.FC<PageWithSidebarProps> = ({ children, postList }) => {
    return (
        <>
            <Sidebar list={postList} />
            <main className="m-sidebar flex flex-col flex-1 min-h-screen">
                {children}
            </main>
        </>
    )
}

export default PageWithSidebar;