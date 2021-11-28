import React from 'react';
import { useContact } from '../../hooks/use-contact';

import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import { Form, FormGroup } from '../form/Form';
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
                {formik.errors.name && formik.touched.name ? <div>{formik.errors.name}</div> : null}
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
                {formik.errors.phone && formik.touched.phone ? <div>{formik.errors.phone}</div> : null}
            </FormGroup>
            <FormGroup>
                <Button type='submit' role={'primary'}>Создать</Button>
            </FormGroup>
        </Form>
    );
};

export default ContactCreateForm;