import { createContext, useReducer } from "react";

export const IndcardContext = createContext()

export const indcardReducer = (state, action) => {
    switch (action.type) {
        case 'SET_INDCARDS':
            return {
                cards: action.payload
            }
        case 'CREATE_INDCARD':
            return {
                cards: [action.payload, ...state.cards]
            }
        case 'EDIT_INDCARD':
            return {
                cards: state.card.push(card => card._id, ...state.cards)
            }
        case 'DELETE_INDCARD':
            return {
                cards: state.cards.filter(card => card._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const IndcardContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(indcardReducer, {
        cards:null
    })

    return (
        <IndcardContext.Provider value={{...state, dispatch}}>
            {children}
        </IndcardContext.Provider>
    )
}