import * as request from './requester'

const BASE_URL = 'http://localhost:3030/jsonstore/travelEntries';

export const getAll = async() => {
    const result = await request.get(BASE_URL);

    const travelEntries = Object.values(result);

    return travelEntries;
};

export const getOne = (travelEntryId) => request.get(`${BASE_URL}/${travelEntryId}`);
