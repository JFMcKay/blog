import createDataContext from "./createDataContext";

// Create a reducer function that takes in the current state and an action.
const blogReducer = (state, action) => {
    switch (action.type) {
        case "add_blogpost":
            return [...state, 
                {
                    id: generateKey(), 
                    title: action.payload.title,
                    content: action.payload.content
                }
            ];
        case "delete_blogpost":
            return state.filter(blogPost => blogPost.id !== action.id);
        default:
            return state;
    }
}
const addBlogPost = dispatch => {
    return (title, content) => {
        dispatch({ type: 'add_blogpost', payload: { title, content } });
    };
};

const deleteBlogPost = dispatch => {
    return (id) => {
        dispatch({ type: 'delete_blogpost', id: id });
    };
};

// I used Date.getTime() and the length of the state array to generate a unique id.
const generateKey = () => {
    return `${new Date().getTime()}`;
}

export const { Context, Provider } = 
        createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, []);