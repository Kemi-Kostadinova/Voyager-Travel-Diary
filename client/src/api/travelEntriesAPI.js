import * as request from './requester'

const BASE_URL = 'http://localhost:3030/data/travelEntries';

export const getAll = async() => {
    const result = await request.get(BASE_URL);

    const travelEntries = Object.values(result);

    return travelEntries;
};

export const getAllWithOwner = async() => {
    const result = await request.get(`${BASE_URL}/?load=owner%3D_ownerId%3Ausers`);
    
    const travelEntries = Object.values(result);

    return travelEntries;
};

export const getOne = (travelEntryId) => request.get(`${BASE_URL}/${travelEntryId}`);

export const create = (travelEntryData) => request.post(`${BASE_URL}`, travelEntryData);