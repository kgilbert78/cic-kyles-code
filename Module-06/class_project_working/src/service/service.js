import { createContext, useContext, useReducer } from "react";
import * as Actions from "./actions";

const SERVICE_CONTEXT = createContext([{}, () => {}]);

const initialState = {
    username: "Kyle",
    theme: "light",
};

const reducer = (state, action) => {
    switch (action.type) { 
        case Actions.UPDATE_USERNAME:
            return {
                ...state,
                username: action.payload,
            }
        case Actions.TOGGLE_THEME:
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