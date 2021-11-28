import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { authInit } from './redux/reducers/auth/auth.reducer';

import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import Contacts from './pages/contacts/Contacts';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(authInit());
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Contacts />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
