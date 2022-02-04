import { createContext, useContext } from "react";

// guidline for what type of data shape to expect (object) ... and initialContextService is object
const Context = createContext({}); // ** could export this to avoid custom hook at bottom
const initialContextService = {
    username: "Kyle",
    theme: "light",
};
const AppContextProvider = Context.Provider;

// DON'T NEED THIS ONCE YOU ADD USEREDUCER
// EXPORTS
// export const ContextService = (props) => {
//     return (
//         <AppContextProvider value={initialContextService}>
//             {/* any children from App down can access these props AppContextProvider & AppContextConsumer */}
//             {props.children}
//         </AppContextProvider>
//     )
// };

// DON'T NEED THIS ONCE YOU ADD USEREDUCER
// export const ContextServiceConsumer = Context.Consumer;



// ** instead of exporting custom hook here you could export the Context object on line 4, and see ** code in Header.js for corresponding changes there. custom hook simplifies what you need to do in Header.js
export const useContextService = () => {
    return useContext(Context);
};
