import React, { createContext, useState } from "react";
import useContextState from '../../hooks/useContextState';
import useSlideshow from "../../hooks/useSlideshow";

type ContextState<T> = {
    get: T,
    set: React.Dispatch<React.SetStateAction<T>>
}

type ContextProps = {
    currentPost: ContextState<string | null>,
    currentSlide: ContextState<number>,
    numSlides: ContextState<number>
    postLoaded: ({ newCurrentPost, newNumSlides }: { newCurrentPost: string | null, newNumSlides: number }) => void,
    resetPostContext: () => void
}

export const PostContext = createContext<ContextProps>({} as ContextProps);

const PostProvider: React.FC = ({children}) => {
    const { getNumSlides } = useSlideshow();
    const currentPost = useContextState<string | null>(null);
    const currentSlide = useContextState<number>(1);
    const numSlides = useContextState<number>(0);

    const postLoaded = ({ newCurrentPost, newNumSlides }) => {
        currentPost.set(newCurrentPost);
        currentSlide.set(1);
        numSlides.set(getNumSlides);
    }

    const resetPostContext = () => {
        currentPost.set(null);
        currentSlide.set(1);
        numSlides.set(0);
    }

    return (
        <PostContext.Provider
            value={{
                currentPost,
                currentSlide,
                numSlides,
                postLoaded,
                resetPostContext,
            }}
        >
            {children}
        </PostContext.Provider>
    )
}

export default PostProvider;