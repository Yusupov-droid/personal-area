import React from 'react';
import { useContact } from '../../hooks/use-contact';

import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import { Form, FormErrorMessage, FormGroup } from '../form/Form';
import { useFormik } from 'formik';
import { ContactUpdateAndCreateSchema } from '../../validation-schemas';

type Props = {
    closeHandler: () => void
}
const ContactCreateForm: React.FC<Props> = (props) => {
    const { create } = useContact();

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
        },
        validationSchema: ContactUpdateAndCreateSchema,
        onSubmit: ({ name, phone }) => {
            create({ name, phone });
            props.closeHandler();
        },
    });
    return (
        <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
                <Input
                    type='text'
                    name='name'
                    value={formik.values.name}
                    placeholder={'Введите имя.'}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                <FormErrorMessage touched={formik.touched.name} message={formik.errors.name} />
            </FormGroup>
            <FormGroup>
                <Input
                    type='text'
                    name='phone'
                    value={formik.values.phone}
                    placeholder={'Введите номер телефона.'}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                />
                <FormErrorMessage touched={formik.touched.phone} message={formik.errors.phone} />
            </FormGroup>
            <FormGroup>
                <Button type='submit' role={'primary'}>Создать</Button>
            </FormGroup>
        </Form>
    );
};

export default ContactCreateForm;