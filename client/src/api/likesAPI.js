import * as request from './requester'

const BASE_URL = 'http://localhost:3030/data/likes';

export const create = async (travelEntryId) => request.post(BASE_URL, { travelEntryId });

export const getAll = (travelEntryId) => {
    const params = new URLSearchParams({
        where: `travelEntryId="${travelEntryId}"`,
    });

    return request.get(`${BASE_URL}?${params.toString()}`);
};

export const del = async (travelEntryId, userId) => {
    const allLikes = await request.get(BASE_URL);

    const likeToDelete = allLikes.find(
        like => like._ownerId === userId && like.travelEntryId === travelEntryId
    );

    return request.del(`${BASE_URL}/${likeToDelete._id}`);
};