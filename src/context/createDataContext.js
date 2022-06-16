import React, { useReducer } from 'react';
// Context is a special type of object that allows you to share data between components of a single component tree. It's a way to share data between components without having to pass data down from one component to another.
export default (reducer, actions, initialState) => {
    const Context = React.createContext();

    const Provider = ({ children }) => { 
        const [state, dispatch] = useReducer(reducer, initialState);

        // actions === { addBlogPost: addBlogPost (dispatch) => {return () => {}} }
        const boundActions = {};
        for (let key in actions) {
            // key === first 'addBlogPost'
            boundActions[key] = actions[key](dispatch);
        }

        return ( <Context.Provider value={{ state, ...boundActions }}>
                    {children}
                </Context.Provider>
        );
    }

    return { Context, Provider };
}
