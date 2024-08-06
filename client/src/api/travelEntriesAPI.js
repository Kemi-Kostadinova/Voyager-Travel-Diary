import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/travelEntries';

export const getAllWithOwner = async () => {
    const params = new URLSearchParams({
        load: `owner=_ownerId:users`
    });

    return request.get(`${BASE_URL}?${params.toString()}`);
};

export const getLatest = async () => {
    const params = new URLSearchParams({
        sortBy: '_createdOn desc',
        pageSize: 3
    });

    const queryString = params.toString().replace(/\+/g, '%20');

    return request.get(`${BASE_URL}?${queryString}`);
};


export const getOne = async (travelEntryId) => {
    const params = new URLSearchParams({
        load: `owner=_ownerId:users`
    });

    return request.get(`${BASE_URL}/${travelEntryId}?${params.toString()}`);
};

export const create = (travelEntryData) => request.post(BASE_URL, travelEntryData);

export const update = (travelEntryId, travelEntryData) => request.put(`${BASE_URL}/${travelEntryId}`, travelEntryData);

export const del = (travelEntryId) => request.del(`${BASE_URL}/${travelEntryId}`);