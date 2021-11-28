import {
    AUTH_INIT,
    AUTH_LOGOUT,
    AUTH_REQUEST_ERROR,
    AUTH_REQUEST_SUCCESS,
    AUTH_SET_IS_FETCHING,
} from './auth.constant';

import {
    AuthInitAction,
    AuthLogoutAction,
    AuthRequestAction,
    AuthRequestErrorAction,
    AuthRequestSuccessAction,
} from './auth.action-types';

import { IUser } from '../../../api/auth/auth.service';

export const setUser = (user: IUser): AuthInitAction => {
    return {
        type: AUTH_INIT,
        payload: {
            user: user,
        },
    };
};

export const authLogout = (): AuthLogoutAction => {
    return {
        type: AUTH_LOGOUT,
    };
};

export const authRequestError = (message: string): AuthRequestErrorAction => {
    return {
        type: AUTH_REQUEST_ERROR,
        payload: {
            message: message,
        },
    };
};
export const authRequestSuccess = (user: IUser): AuthRequestSuccessAction => {
    return {
        type: AUTH_REQUEST_SUCCESS,
        payload: {
            user: user,
        },
    };
};

export const authSetIsFetching = (status: boolean): AuthRequestAction => {
    return {
        type: AUTH_SET_IS_FETCHING,
        payload: {
            isFetching: status,
        },
    };
};
