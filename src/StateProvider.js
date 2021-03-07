//setup data layer
//we need this to track basket
import  { useContext,createContext,useReducer } from "react";

//this is the data layer
export const StateContext=createContext();

//build provider
export const StateProvider=({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
    {children}
    </StateContext.Provider>
)


//this is how wwe use it inside the component
export const useStateValue=()=>useContext(StateContext);