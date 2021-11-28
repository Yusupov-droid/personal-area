import { useAuth } from '../../hooks/use-auth';

import { Form, FormErrorMessage, FormGroup } from '../form/Form';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import { Link } from 'react-router-dom';

import { useFormik } from 'formik';
import { RegisterSchema } from '../../validation-schemas';
import React from 'react';


const RegisterForm = () => {
    const { register } = useAuth();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: RegisterSchema,
        onSubmit: ({ name, email, password }) => {
            register({ name, email, password });
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
                <Input
                    placeholder='Введите полное имя.'
                    name='name'
                    type='text'
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                <FormErrorMessage touched={formik.touched.name} message={formik.errors.name} />
            </FormGroup>
            <FormGroup>
                <Input
                    placeholder='Введите э-почту.'
                    name='email'
                    type='text'
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                <FormErrorMessage touched={formik.touched.email} message={formik.errors.email} />
            </FormGroup>
            <FormGroup>
                <Input
                    placeholder='Введите пароль.'
                    name='password'
                    type='password'
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                <FormErrorMessage touched={formik.touched.password} message={formik.errors.password} />
            </FormGroup>
            <FormGroup>
                <Button type='submit' role={'primary'}>
                    Регистрация
                </Button>
            </FormGroup>
            <FormGroup>
                <Link to={'/sign-in'}>Войти</Link>
            </FormGroup>
        </Form>
    );
};

export default RegisterForm;
