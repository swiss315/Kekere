import axios, { AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import { useAuth } from '../Store/AuthContext'; // Importing the useAuth hook from your React context global store

interface ErrorResponse {
    response: {
        status: number;
    };
}

export const unauthorized = axios.create();
export const authorized = axios.create();

authorized.interceptors.request.use(
    async (config: InternalAxiosRequestConfig<any>) => {
        const { state} = useAuth();
        const token = state.token;

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error: ErrorResponse) => {
        return Promise.reject(error);
    }
);

authorized.interceptors.response.use(
    (response: AxiosResponse<any>) => {
        return response;
    },
    (error: ErrorResponse) => {
        const { logout } = useAuth();

        if (error.response && error.response.status === 401) {
            logout();
        }
        return Promise.reject(error);
    }
);


