import { createContext, useContext } from "react";

const Context = createContext({});
const initialContextService = {
    username: "Kyle",
    theme: "light",
};
const AppContextProvider = Context.Provider;

export const useContextService = () => {
    return useContext(Context);
};
