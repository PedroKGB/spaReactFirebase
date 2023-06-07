import { createContext, useReducer, useContext,} from "react";

const Statecontext = createContext();


export const Stateprovider = ({reducer, initialState, children}) => {

    return(
        <Statecontext.Provider value={useReducer(reducer, initialState)}> 
            {children}
        </Statecontext.Provider>
    )

}


export const useStateValue = () => useContext(Statecontext)