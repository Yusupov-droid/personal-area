import { Dispatch } from 'redux';
import { AxiosError } from 'axios';

import {
    AUTH_INIT,
    AUTH_LOGOUT,
    AUTH_REQUEST_ERROR,
    AUTH_REQUEST_SUCCESS,
    AUTH_SET_IS_FETCHING,
} from './auth.constant';

import { AuthAction } from './auth.action-types';
import { AuthService, ILoginCredentials, IRegisterCredentials, IUser } from '../../../api/auth/auth.service';
import { authLogout, authRequestError, authRequestSuccess, authSetIsFetching, setUser } from './auth.action-creators';

export type AuthState = {
    user: IUser | null;
    isFetching: boolean;
    error: boolean;
    errorMessage: string;
};

const InitialState: AuthState = {
    user: null,
    isFetching: false,
    error: false,
    errorMessage: '',
};

export const AuthReducer = (state: AuthState = InitialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AUTH_INIT:
            return {
                ...state,
                user: action.payload.user,
            };
        case AUTH_LOGOUT:
            return {
                ...state,
                user: null,
            };
        case AUTH_SET_IS_FETCHING:
            return {
                ...state,
                isFetching: action.payload.isFetching,
            };
        case AUTH_REQUEST_ERROR:
            return {
                ...state,
                error: true,
                errorMessage: action.payload.message,
            };
        case AUTH_REQUEST_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
            };
        default:
            return state;
    }
};

export const signIn = (credentials: ILoginCredentials) => {
    return async (dispatch: Dispatch<AuthAction>) => {
        dispatch(authSetIsFetching(true));
        AuthService.signIn(credentials)
            .then((res) => {
                AuthService.setToken(res.data.token);
                dispatch(authRequestSuccess(res.data.user));
                dispatch(authSetIsFetching(false));
            })
            .catch((error: AxiosError) => {
                dispatch(authRequestError(error.response?.data));
                dispatch(authSetIsFetching(false));
            });
    };
};
export const signUp = (credentials: IRegisterCredentials) => {
    return (dispatch: Dispatch<AuthAction>) => {
        dispatch(authSetIsFetching(true));
        AuthService.singUp(credentials)
            .then((res) => {
                AuthService.setToken(res.data.token);
                dispatch(authRequestSuccess(res.data.user));
                dispatch(authSetIsFetching(false));
            })
            .catch((error: AxiosError) => {
                dispatch(authRequestError(error.response?.data));
                dispatch(authSetIsFetching(false));
            });
    };
};

export const signOut = () => (dispatch: Dispatch) => {
    AuthService.delToken();
    dispatch(authLogout());
};

export const authInit = () => {
    return (dispatch: Dispatch<AuthAction>) => {
        dispatch(authSetIsFetching(true));

        AuthService.getUser()
            .then((res) => {
                dispatch(setUser(res.data));
                dispatch(authSetIsFetching(false));
            })
            .catch((error: AxiosError) => {
                dispatch(authRequestError(error.response?.data));
                dispatch(authSetIsFetching(false));
            });
    };
};
