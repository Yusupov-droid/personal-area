import { client } from '../axios';

export interface IUser {
    id: string;
    name: string;
    email: string;
}

export interface ILoginCredentials {
    email: string;
    password: string;
}

export interface IRegisterCredentials extends ILoginCredentials {
    name: string;
}

interface LoginOrRegisterResponse {
    user: IUser;
    token: string;
}

export class AuthService {
    public static signIn(credentials: ILoginCredentials) {
        const data = JSON.stringify(credentials);
        return client.post<LoginOrRegisterResponse>('/auth/login', data);
    }

    public static singUp(credentials: IRegisterCredentials) {
        const data = JSON.stringify(credentials);
        return client.post<LoginOrRegisterResponse>('/auth/register', data);
    }

    public static async getUser() {
        return await client.get<IUser>(`/auth/me`);
    }

    public static getToken() {
        return localStorage.getItem('id_token');
    }
    public static delToken() {
        return localStorage.removeItem('id_token');
    }
    public static setToken(token: string) {
        return localStorage.setItem('id_token', token);
    }
}
