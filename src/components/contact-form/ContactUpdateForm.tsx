import React, { useState } from 'react';
import { IContactDTO } from '../../api/contacts/contact.service';
import { useContact } from '../../hooks/use-contact';
import { Form, FormGroup } from '../form/Form';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';

type Props = {
    closeHandler: () => void
    contactForUpdate: IContactDTO
}
const ContactUpdateForm: React.FC<Props> = (props) => {
    const { update } = useContact();

    const [name, setName] = useState(props.contactForUpdate.name);
    const [phone, setPhone] = useState(props.contactForUpdate.phone);



    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        update(props.contactForUpdate.id, { name, phone });
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
                <Button role={'primary'}>Обновить</Button>
            </FormGroup>
        </Form>
    );
};

export default ContactUpdateForm;