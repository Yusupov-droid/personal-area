import axios from 'axios';
import { AuthService } from './auth/auth.service';

export const client = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        'Content-Type': 'application/json',
    },
});

client.interceptors.request.use((req) => {
    (req.headers as any).Authorization = 'Bearer ' + AuthService.getToken();
    return req;
});
