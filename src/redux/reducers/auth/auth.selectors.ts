import { RootState } from '../../store';

export const getAuthUser = (state: RootState) => state.auth.user;
export const getAuthError = (state: RootState) => state.auth.error;
export const getAuthIsFetching = (state: RootState) => state.auth.isFetching;
export const getAuthErrorMessage = (state: RootState) => state.auth.errorMessage;
