import { useState, useEffect } from "react";
import * as likesAPI from "../api/likesAPI";

export function useAddLike() {
    const LikeAddHandler = (travelEntryId) => likesAPI.create(travelEntryId);

    return LikeAddHandler
}

export function useGetAllLikes(travelEntryId) {
    const [likes, setLikes] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await likesAPI.getAll(travelEntryId);

            setLikes(result);
        })();
    }, []);

    return likes;
}

export function useDeleteLike() {
    const LikeDeleteHandler = (travelEntryId, userId) => likesAPI.del(travelEntryId, userId);

    return LikeDeleteHandler
}