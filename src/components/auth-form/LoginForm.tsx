import { useAuth } from '../../hooks/use-auth';
import React, { ChangeEvent, useState } from 'react';

import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import { Form, FormGroup } from '../form/Form';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const auth = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        auth.login({ email, password });
    };

    return (
        <Form  onSubmit={handleSubmit}>
            <FormGroup >
                <Input
                    type="text"
                    value={email}
                    placeholder="example@email.com"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="password"
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Button type="submit" role={'primary'}>
                    Войти
                </Button>
            </FormGroup>
            <FormGroup>
                <Link to={'/sign-up'}>Регистрация</Link>
            </FormGroup>
        </Form>
    );
};

export default LoginForm;
