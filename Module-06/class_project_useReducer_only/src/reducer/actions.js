export const UPDATE_USERNAME = "UPDATE_USERNAME";
export const TOGGLE_THEME = "TOGGLE_THEME";

export const updateUserName = (text) => {
    return {
        type: UPDATE_USERNAME,
        payload: text,
    }
};

export const toggleTheme = () => {
    return {
        type: TOGGLE_THEME,
    }
};