import React, { useState, useReducer } from "react";
// Context is a special type of object that allows you to share data between components of a single component tree. It's a way to share data between components without having to pass data down from one component to another.
const BlogContext = React.createContext();
// children is a prop that is passed to the provider
export const BlogProvider = ({ children }) => {
    // State is managed by useState not by useContext
    const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = () => {
        setBlogPosts([...blogPosts, { title: `Blog Post ${blogPosts.length + 1}` }]);
    }


    return  <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
                {children}
            </BlogContext.Provider>
};

export default BlogContext;