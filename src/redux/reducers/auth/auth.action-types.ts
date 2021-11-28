import { IUser } from '../../../api/auth/auth.service';
import {
    AUTH_INIT,
    AUTH_LOGOUT,
    AUTH_REQUEST_ERROR,
    AUTH_REQUEST_SUCCESS,
    AUTH_SET_IS_FETCHING,
} from './auth.constant';
export type AuthInitAction = {
    type: typeof AUTH_INIT;
    payload: {
        user: IUser;
    };
};

export type AuthLogoutAction = {
    type: typeof AUTH_LOGOUT;
};

export type AuthRequestAction = {
    type: typeof AUTH_SET_IS_FETCHING;
    payload: {
        isFetching: boolean;
    };
};

export type AuthRequestErrorAction = {
    type: typeof AUTH_REQUEST_ERROR;
    payload: {
        message: string;
    };
};

export type AuthRequestSuccessAction = {
    type: typeof AUTH_REQUEST_SUCCESS;
    payload: {
        user: IUser;
    };
};

export type AuthAction =
    | AuthInitAction
    | AuthLogoutAction
    | AuthRequestAction
    | AuthRequestErrorAction
    | AuthRequestSuccessAction;
