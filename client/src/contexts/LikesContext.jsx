import { createContext, useState } from "react";

export const LikesContext = createContext();

export function LikesContextProvider(props) {
    const [likesState, setLikesState] = useState({});

    const toggleLike = (travelEntryId) => {
        setLikesState(prevState => ({
            ...prevState,
            [travelEntryId]: !prevState[travelEntryId]
        }));
    };

    return (
        <LikesContext.Provider value={{ likesState, toggleLike }}>
            {props.children}
        </LikesContext.Provider>
    )
}