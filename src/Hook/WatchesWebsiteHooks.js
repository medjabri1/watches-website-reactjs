import { useContext } from "react";
import { GLOBAL_CONTEXT } from "../Context/WatchesWebsiteContext";

export function useWatchesWebsite() {
    const { state, dispatch } = useContext(GLOBAL_CONTEXT);
    return [state, dispatch];
}