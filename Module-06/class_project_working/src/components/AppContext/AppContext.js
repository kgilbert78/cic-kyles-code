import { createContext, useContext } from "react";

// guidline for what type of data shape to expect (object) ... and initialStore is object
const Context = createContext({});
const initialStore = {
    username: "Kyle",
    theme: "light",
};
const AppContextProvider = Context.Provider;

// EXPORTS
export const AppStore = (props) => {
    return (
        <AppContextProvider value={initialStore}>
            {/* any children from App down can access these props AppContextProvider & AppContextConsumer */}
            {props.children}
        </AppContextProvider>
    )
};

export const AppStoreConsumer = Context.Consumer;

export const useAppStore = () => {
    return useContext(Context);
};
