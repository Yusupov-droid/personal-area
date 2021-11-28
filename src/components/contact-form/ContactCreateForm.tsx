import React, { useState } from 'react';
import { useContact } from '../../hooks/use-contact';

import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import { Form, FormGroup } from '../form/Form';

type Props = {
    closeHandler: () => void
}
const ContactCreateForm: React.FC<Props> = (props) => {
    const { create } = useContact();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        create({ name, phone });
        props.closeHandler();
    };

    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Input
                    value={name}
                    placeholder={'Введите имя.'}
                    onChange={(e) => setName(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    value={phone}
                    placeholder={'Введите номер телефона.'}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </FormGroup>
            <FormGroup>
                <Button role={'primary'}>СОЗДАТЬ</Button>
            </FormGroup>
        </Form>
    );
};

export default ContactCreateForm;