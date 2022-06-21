import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer";

// Create a reducer function that takes in the current state and an action.
// is called using dispatch.
const blogReducer = (state, action) => {
    switch (action.type) {
        // Not needed anymore with json server.
        // case "add_blogpost":
        //     return [...state, 
        //         {
        //             id: generateKey(), 
        //             title: action.payload.title,
        //             content: action.payload.content
        //         }
        //     ];
        case "delete_blogpost":
            return state.filter(blogPost => blogPost.id !== action.payload.id);
        case "edit_blogpost":
            return state.map(blogPost => {  
                return blogPost.id === action.payload.id ? action.payload : blogPost;
            });
        case "get_blogposts":
            return action.payload;
        default:
            return state;
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts');
        // response.data is the array of blog posts. [{}, {}, {}]
        dispatch({ type: 'get_blogposts', payload: response.data });
    }
}

const addBlogPost = () => {
    return async (title, content, callback) => {
        await jsonServer.post('/blogposts', { id: generateKey() ,title, content });

        // dispatch({ 
        //     type: 'add_blogpost', 
        //     payload: { title, content } });
        if (callback){
            callback();
        }
    };
};

const deleteBlogPost = dispatch => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'delete_blogpost', 
                    payload: { id } });
    };
};
// dipatch requires type and payload.
const editBlogPost = dispatch => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content });
        dispatch({ 
            type: 'edit_blogpost', 
            payload: { id, title, content } 
        });
        if (callback){
            callback();
        }
    }
}

// I used Date.getTime() and the length of the state array to generate a unique id.
const generateKey = (num = 0) => {
    return `${num}_${new Date().getTime()}`;
}

export const { Context, Provider } = 
        createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts }, []);