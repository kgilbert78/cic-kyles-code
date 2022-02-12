import { useReducer } from "react";
import * as Actions from "./actions";

export const initialState = {
    username: "Kyle",
    theme: "light",
};

export const reducer = (state, action) => {
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

