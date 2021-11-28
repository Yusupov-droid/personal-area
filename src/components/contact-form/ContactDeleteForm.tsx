import React from 'react';
import { useContact } from '../../hooks/use-contact';
import { IContactDTO } from '../../api/contacts/contact.service';
import { Form, FormGroup } from '../form/Form';
import Button from '../UI/button/Button';

type Props = {
    closeHandler: () => void
    contactForDelete: IContactDTO
}
const ContactDeleteForm: React.FC<Props> = (props) => {
    const { remove } = useContact();

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        remove(props.contactForDelete.id);
        props.closeHandler();
    };


    return (
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Button role={'danger'}>Удалить</Button>
            </FormGroup>
        </Form>
    );
};

export default ContactDeleteForm;