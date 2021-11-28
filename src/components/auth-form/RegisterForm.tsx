import { useAuth } from '../../hooks/use-auth';

import { Form, FormGroup } from '../form/Form';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import { Link } from 'react-router-dom';

import { useFormik } from 'formik';
import { RegisterSchema } from '../../validation-schemas';


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
                {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}
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
                {formik.errors.email && formik.touched.email ? <div>{formik.errors.email}</div> : null}
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
                {formik.errors.password && formik.touched.password ? <div>{formik.errors.password}</div> : null}
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
