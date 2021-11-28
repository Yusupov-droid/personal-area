import React from 'react';
import { IContactDTO } from '../../api/contacts/contact.service';
import { useContact } from '../../hooks/use-contact';
import { Form, FormGroup } from '../form/Form';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import { useFormik } from 'formik';
import { ContactUpdateAndCreateSchema } from '../../validation-schemas';

type Props = {
    closeHandler: () => void
    contactForUpdate: IContactDTO
}
const ContactUpdateForm: React.FC<Props> = (props) => {
    const { update } = useContact();

    const formik = useFormik({
        initialValues: {
            name: props.contactForUpdate.name,
            phone: props.contactForUpdate.phone,
        },
        validationSchema: ContactUpdateAndCreateSchema,
        onSubmit: ({ name, phone }) => {
            update(props.contactForUpdate.id, { name, phone });
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
                <Button type='submit' role={'primary'}>Обновить</Button>
            </FormGroup>
        </Form>
    );
};

export default ContactUpdateForm;