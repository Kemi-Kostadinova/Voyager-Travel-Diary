import * as request from './requester'

const BASE_URL = 'http://localhost:3030/data/comments';

export const create = (travelEntryId, text) => request.post(BASE_URL, {travelEntryId, text});

export const getAll = (travelEntryId) => {
    const params = new URLSearchParams({
        where: `travelEntryId="${travelEntryId}"`,
        load: `author=_ownerId:users`
    });

    return request.get(`${BASE_URL}?${params.toString()}`);
}