import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { ILoginCredentials, IRegisterCredentials } from '../api/auth/auth.service';
import { signIn, signOut, signUp } from '../redux/reducers/auth/auth.reducer';
import { getAuthUser } from '../redux/reducers/auth/auth.selectors';




export const useAuth = () => {
    const dispatch = useDispatch();
    const user = useSelector(getAuthUser);

    const login = useCallback(
        (credentials: ILoginCredentials) => {
            const action = signIn(credentials);
            dispatch(action);
        },
        [dispatch],
    );

    const logout = useCallback(() => {
        const action = signOut();
        dispatch(action);
    }, [dispatch]);

    const register = useCallback(
        (credentials: IRegisterCredentials) => {
            const action = signUp(credentials);
            dispatch(action);
        },
        [dispatch],
    );

    return {
        user,
        login,
        logout,
        register,
    };
};
