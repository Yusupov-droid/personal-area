import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { getAuthUser } from '../redux/reducers/auth/auth.selectors';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { IUser } from '../api/auth/auth.service';

type Mode = 'private' | 'guest';

export const withAuthGuard = (redirect: string, mode: Mode, Component: React.FC) => {
    return () => {
        const user = useSelector(getAuthUser);
        const navigate = useNavigate();

        useEffect(() => {
            check(user, mode, navigate);
        }, [user, navigate]);

        const check = (user: IUser | null, mode: Mode, navigate: NavigateFunction) => {
            if ((mode === 'guest' && user) || (mode === 'private' && !user)) {
                navigate(redirect);
            }
        };

        return <Component />;
    };
};
