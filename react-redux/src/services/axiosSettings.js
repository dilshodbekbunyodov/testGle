import axios from 'axios';
import { getToken, removeToken } from './jwtService';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BACKEND,
});

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    console.error('Unauthorized access. Redirecting to login...');
                    removeToken();
                    window.location.href = '/login';
                    break;
                case 403:
                    console.error('Forbidden access.');
                    break;
                case 404:
                    console.error('Resource not found.');
                    break;
                case 500:
                    console.error('Server error.');
                    break;
                default:
                    console.error('An error occurred:', error.message);
            }
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Request setup error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;