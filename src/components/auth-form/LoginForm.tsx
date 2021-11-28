import { useAuth } from '../../hooks/use-auth';
import React from 'react';

import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import { Form, FormErrorMessage, FormGroup } from '../form/Form';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { LoginSchema } from '../../validation-schemas';

const LoginForm = () => {
    const { login } = useAuth();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: LoginSchema,
        onSubmit: ({ email, password }) => {
            login({ email, password });
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
                <Input
                    type='text'
                    name='email'
                    value={formik.values.email}
                    placeholder='example@email.com'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                <FormErrorMessage touched={formik.touched.email} message={formik.errors.email} />
            </FormGroup>
            <FormGroup>
                <Input
                    type='password'
                    name='password'
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                <FormErrorMessage touched={formik.touched.password} message={formik.errors.password} />
            </FormGroup>
            <FormGroup>
                <Button type='submit' role={'primary'}>
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
