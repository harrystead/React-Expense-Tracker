import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

const initialState = {
    transactions: [
        {id: 1, text: "Flowers", amount: -20},
        {id: 2, text: "Salary", amount: 400},
        {id: 3, text: "Books", amount: -10},
        {id: 4, text: "Camera", amount: -150},
    ]
}

//global
export const GlobalContext = createContext(initialState);

//provider 
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id,
        })
    }


    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction
    }}>
    {children}
    </GlobalContext.Provider>)
}