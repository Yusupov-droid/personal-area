import { useAuth } from '../../hooks/use-auth';
import React, { useState } from 'react';

import { Form, FormGroup } from '../form/Form';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
    const { register } = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        register({ name, email, password });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <Input
                    placeholder="Введите полное имя."
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    placeholder="Введите э-почту."
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    placeholder="Введите пароль."
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Button role={'primary'}>Регистрация</Button>
            </FormGroup>
            <FormGroup>
                <Link to={'/sign-in'}>Войти</Link>
            </FormGroup>
        </Form>
    );
};

export default RegisterForm;
