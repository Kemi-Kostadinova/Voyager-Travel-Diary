import * as request from './requester';

const BASE_URL = 'http://localhost:3030';

export const getCurrentUser = () => request.get(`${BASE_URL}/users/me`);

export const getUserEntries = (userId) => {
    const params = new URLSearchParams({
        where: `_ownerId="${userId}"`,
        load: `owner=_ownerId:users`
    });

    return request.get(`${BASE_URL}/data/travelEntries?${params.toString()}`);
}
