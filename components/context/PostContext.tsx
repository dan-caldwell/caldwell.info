import React, { createContext, useEffect } from "react";
import useContextState from '../../hooks/useContextState';
import { PostMeta } from "../../utils/types";
import PageWithSidebar from "../templates/pageWithSidebar";
import PostList from '../../json/post-list.json';

type ContextState<T> = {
    get: T,
    set: React.Dispatch<React.SetStateAction<T>>
}

type ContextProps = {
    currentPost: ContextState<string | null>,
}

export const PostContext = createContext<ContextProps>({} as ContextProps);

const PostProvider: React.FC = ({children}) => {
    const currentPost = useContextState<string | null>(null);
    const postList = useContextState<PostMeta[]>([]);

    useEffect(() => {
        postList.set(JSON.parse(PostList));
    }, []);

    return (
        <PostContext.Provider
            value={{
                currentPost,
            }}
        >
            <PageWithSidebar postList={postList.get}>
                {children}
            </PageWithSidebar>
        </PostContext.Provider>
    )
}

export default PostProvider;