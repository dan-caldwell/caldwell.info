import React, { createContext, useState } from "react";
import useContextState from '../../hooks/useContextState';

type ContextState<T> = {
    get: T,
    set: React.Dispatch<React.SetStateAction<T>>
}

type ContextProps = {
    currentPost: ContextState<string | null>
}

export const PostContext = createContext<ContextProps>({} as ContextProps);

const PostProvider: React.FC = ({children}) => {
    const currentPost = useContextState<string | null>(null);
    return (
        <PostContext.Provider
            value={{
                currentPost
            }}
        >
            {children}
        </PostContext.Provider>
    )
}

export default PostProvider;