import * as request from './requester'

const BASE_URL = 'http://localhost:3030/data/comments';

export const create = (travelEntryId, text) => request.post(BASE_URL, {travelEntryId, text});