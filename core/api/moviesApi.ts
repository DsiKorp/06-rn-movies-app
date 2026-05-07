import axios from 'axios';

export const moviesApi = axios.create({
    baseURL: process.env.EXPO_PUBLIC_MOVIES_API_URL,
    params: {
        language: 'en', // es-ES
        api_key: process.env.EXPO_PUBLIC_MOVIES_API_KEY,
    },
});

