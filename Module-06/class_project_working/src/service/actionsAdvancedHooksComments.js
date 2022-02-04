export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const TOGGLE_THEME = "TOGGLE_THEME";

// functions to return the "actions". convention is to name them after the type of action you're going to dispatch.
export const updateUserName = (text) => {
    // actions are objects with properties of type (like a descriptive name to refer to them by), and the data to update
    return {
        type: UPDATE_USERNAME, // variable from above, also exported to service.js
        payload: text, // "payload" key is commonly used here to refer to the data. passing a variable from a parameter makes it more reusable. pass the username to the function when calling it.
    }
}; // this action is dispatched to the reducer (in service.js). handle what to do with it in that function.

export const toggleTheme = () => {
    return {
        type: TOGGLE_THEME,
        // no "payload"/data needed because it's just going to be changed to the opposite of what the current one is, in service.js in the switch statement case's code. still need to return it in the object format though.
    }
};