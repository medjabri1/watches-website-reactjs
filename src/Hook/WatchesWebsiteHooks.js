import { useContext } from "react";
import { GLOBAL_CONTEXT } from "../Context/PhonesWebsiteContext";

export function usePhonesWebsite() {
    const { state, dispatch } = useContext(GLOBAL_CONTEXT);
    return [state, dispatch];
}