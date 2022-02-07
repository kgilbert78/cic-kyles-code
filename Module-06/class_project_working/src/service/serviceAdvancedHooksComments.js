import { createContext, useContext, useReducer } from "react";
import { UPDATE_USERNAME, TOGGLE_THEME } from "./actions"; // these are variables of the TYPES, passed to reducer through dispatch when the eponymous functions that contain them are called in the onClicks.

// didn't capitalize file name because Service is not the default export. also exporting useContextDispatchService & SERVICE_CONTEXT. not only a component, more stuff in here. alternatively you could put these into their own files and then capitalize Service.js

// guidline for what type of data shape to expect... array containing an object and a function. similar format to definition of useState with destructured array, for example [data, setData]. this will be filled with state object and dispatch function.
const SERVICE_CONTEXT = createContext([{}, () => {}]);
                                    // ^ the context object 
                                    // gives you a Provider and a Consumer
                                    // use below for export of Service

// UPPERCASE variables here and in actions.js are a convention to indicate const variables whose value is not changed/updated by the program ever (don't push to the array or pop from it etc). in contrast for example initialState is a const that the reference to it in memory doesn't change, but the content within the object may change, so it's not capitalized. (with let the reference to it in memory may change)
// incidently, CapitalCamelCase for components is so React sees initial capital letter & knows it's something the developer has created, not a native html element such as <div> etc.

const initialState = { // passed to useReducer below as state. then state gets edited with actions called in reducer below.
    username: "Kyle",
    theme: "light",
};

// this whole function gets passed to useReducer below
const reducer = (state, action) => {
    // about switch statements - https://www.w3schools.com/js/js_switch.asp
    switch (action.type) { // conditional logic on action that came in through paramater, on value paired with "type" key
        case UPDATE_USERNAME: // don't want string here because if you (the developer) want to change it in your code you would have to update the string in multiple places. this way you can just update the string once in action.js where the variable is declared & exported.
            return {
                ...state, // spreader to load current data, 
                username: action.payload, // then update the specific data to change: the data from the action coming in (value with the key of payload)
                // without spread statement you lose the rest of the current data...
            }
        case TOGGLE_THEME:
            return {
                ...state, // ...for example without this here you lose display of the username when you toggle the theme
                theme: state.theme === "light" ? "dark" : "light"
                // order is important. if you spread state after changing the theme it will overwrite your changes. "last in wins"
            }
        default: // do this if none of the "cases" match
            return state; // (just return the same current state)
    };
};

export const Service = (props) => {
    // dispatch is the function that allows state to eventually be updated in the components (with import of useContextDispatchService in the component) by dispatching actions that it gets from the second parameter of the reducer function above, passed here as first parameter. action is like the intention assigned by the dispatcher to the technician, and reducer is like the technician, doing the action and reporting back when complete.
    const [state, dispatch] = useReducer(reducer, initialState);
    // when dispatch updates state, it causes Service to rerender. Then .Provider below passes the new state to props.children through the value, and they all rerender. Because you've wrapped it around the whole App component, this means the whole app and all its children components will rerender.

    return ( 
        // the context object gives you a Provider and a Consumer. value will be an array, to follow the shape in createContext() above. state will be an object, dispatch is a function.
        <SERVICE_CONTEXT.Provider value={[state, dispatch]}> 
            {props.children} {/* must pass down to all children to avoid "drilling" props by passing them repeatedly, making it necessary to update them in many places and causing bugs */}
        </SERVICE_CONTEXT.Provider>
        // this is the wrapper component for the entire <App /> in App.js (<Service> </Service>)
    )
};


// for use in Header.js, deconstructed as const [service, dispatch] = useContextDispatchService(); (same format - [context object, function])
export const useContextDispatchService = () => useContext(SERVICE_CONTEXT);