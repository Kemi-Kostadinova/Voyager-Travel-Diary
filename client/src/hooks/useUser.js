import { useEffect, useState } from "react";

import * as usersAPI from "../api/userAPI";

export function useGetCurrentUser() {
    const [currentUser, setCurrentUser] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await usersAPI.getCurrentUser();

            setCurrentUser(result);
        })();
    }, []);

    return currentUser;
}

export function useGetUserEntries(userId) {
    const [userEntries, setUserEntries] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await usersAPI.getUserEntries(userId);

            setUserEntries(result);
        })();
    }, [userId]);

    return userEntries;
}