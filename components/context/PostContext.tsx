import React, { createContext, useEffect, useState } from "react";

type ContextProps = {
    currentPost: string | null,
    setCurrentPost: React.Dispatch<React.SetStateAction<string | null>>,
    menuOpen: boolean,
    setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const PostContext = createContext<ContextProps>({} as ContextProps);

const PostProvider: React.FC = ({ children }) => {
    const [currentPost, setCurrentPost] = useState<string | null>(null);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        setMenuOpen(false);
        return () => setMenuOpen(false);
    }, [currentPost]);

    return (
        <PostContext.Provider
            value={{
                currentPost,
                setCurrentPost,
                menuOpen,
                setMenuOpen
            }}
        >
            {children}
        </PostContext.Provider>
    )
}

export default PostProvider;