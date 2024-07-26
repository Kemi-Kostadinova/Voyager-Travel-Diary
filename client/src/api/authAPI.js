import * as request from './requester'

const BASE_URL = 'http://localhost:3030/users';

export const login = (email, password) => request.post(`${BASE_URL}/login`, { email, password });

export const register = (email, username, profileImage, password) => request.post(`${BASE_URL}/register`, { email, username, profileImage, password });

export const logout = () => request.get(`${BASE_URL}/logout`);