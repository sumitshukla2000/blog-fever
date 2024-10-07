import { useContext , createContext, useState } from "react";


export const BlogContext = createContext({
    red : 0 ,
    updateRen : (re) => {}
})

export const BlogProvider = BlogContext.Provider


export const useBlog = () => {
    return useContext(BlogContext);
}