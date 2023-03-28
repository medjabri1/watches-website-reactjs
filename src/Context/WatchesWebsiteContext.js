import { createContext, useReducer } from "react";

export const GLOBAL_CONTEXT = createContext();

export const GLOBAL_ACTIONS = {
    SET_PHONES: "SET_PHONES",
    ADD_PHONE: "ADD_PHONE",
    EDIT_PHONE: "EDIT_PHONE",
    DELETE_PHONE: "DELETE_PHONE",
}

const INIT_STATE = {
    phones: [],
}

export function GlobalProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    function reducer(state, action) {

        switch (action.type) {
            default: {
                return {
                    ...state
                }
            }
        }

    }

    return (
        <GLOBAL_CONTEXT.Provider value={{ state, dispatch }}>
            {children}
        </GLOBAL_CONTEXT.Provider>
    )

}