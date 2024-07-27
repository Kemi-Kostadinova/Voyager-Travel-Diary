import { useState, useEffect } from "react";
import * as commentsAPI from "../api/commentsAPI";

export function useCreateComment() {
    const commentCreateHandler = (travelEntryId, comment) => commentsAPI.create(travelEntryId, comment);

    return commentCreateHandler
}

export function useGetAllComments(travelEntryId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(travelEntryId);

            setComments(result);
        })();
    }, [travelEntryId]);

    return [comments, setComments];
}