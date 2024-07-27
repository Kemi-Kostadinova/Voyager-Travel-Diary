import * as commentsAPI from "../api/commentsAPI";

export function useCreateComment() {
    const commentCreateHandler = (travelEntryId, comment) =>  commentsAPI.create(travelEntryId, comment);

    return commentCreateHandler
}