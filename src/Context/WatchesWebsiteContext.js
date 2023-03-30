import { createContext, useReducer } from "react";

export const GLOBAL_CONTEXT = createContext();

export const GLOBAL_ACTIONS = {
    SET_WATCHES: "SET_WATCHES",
    SET_CART: "SET_CART",
    ADD_CART: "ADD_CART",
    REMOVE_CART: "REMOVE_CART",
}

const INIT_STATE = {
    watches: [],
    cart: [],
}

export function GlobalProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    function reducer(state, action) {

        switch (action.type) {
            case GLOBAL_ACTIONS.SET_WATCHES: {
                console.log("set watches action:");
                return {
                    ...state, 
                    watches: action.payload
                }
            }

            case GLOBAL_ACTIONS.SET_CART: {
                return {
                    ...state, 
                    cart: action.payload
                }
            }

            case GLOBAL_ACTIONS.ADD_CART: {
                return {
                    ...state, 
                    cart: [...state.cart, action.payload]
                }
            }

            case GLOBAL_ACTIONS.UPDATE_ITEM_CART: {
                return {
                    ...state, 
                    cart: state.cart.map((item) => {
                        if(item.id === action.payload.id) {
                            return action.payload
                        } else {
                            return item;
                        }
                    })
                }
            }

            case GLOBAL_ACTIONS.REMOVE_CART: {
                return {
                    ...state, 
                    cart: state.cart.filter(item => item.id !== action.payload)
                }
            }

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