import { IndcardContext } from "../context/IndcardContext";
import { useContext } from "react";

export const useIndcardContext = () => {
    const context = useContext(IndcardContext)
    if(!IndcardContext) {
        throw Error('useIndcardContext must be in IndcardContextProvider')
    }
    return context
}