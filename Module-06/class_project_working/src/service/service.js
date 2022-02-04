import { createContext, useContext, useReducer } from "react";
import { UPDATE_USERNAME, TOGGLE_THEME } from "./actions";

const SERVICE_CONTEXT = createContext([{}, () => {}]);

const initialState = {
    username: "Kyle",
    theme: "light",
};

const reducer = (state, action) => {
    switch (action.type) { 
        case UPDATE_USERNAME:
            return {
                ...state,
                username: action.payload,
            }
        case TOGGLE_THEME:
            return {
                ...state,
                theme: state.theme === "light" ? "dark" : "light"
            }
        default:
            return state;
    };
};

export const Service = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return ( 
        <SERVICE_CONTEXT.Provider value={[state, dispatch]}> 
            {props.children}
        </SERVICE_CONTEXT.Provider>
    )
};

export const useContextDispatchService = () => useContext(SERVICE_CONTEXT);