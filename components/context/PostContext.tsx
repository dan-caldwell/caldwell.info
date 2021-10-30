import React, { createContext, useState } from "react";

type ContextProps = {
    currentPost: string | null,
    setCurrentPost: React.Dispatch<React.SetStateAction<string | null>>
}

export const PostContext = createContext<ContextProps>({} as ContextProps);

const PostProvider: React.FC = ({ children }) => {
    const [currentPost, setCurrentPost] = useState<string | null>(null);

    return (
        <PostContext.Provider
            value={{
                currentPost,
                setCurrentPost
            }}
        >
            {children}
        </PostContext.Provider>
    )
}

export default PostProvider;