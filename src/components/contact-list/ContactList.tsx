import './ContactList.scss';
import 'simplebar/dist/simplebar.min.css';
import { IContactDTO } from '../../api/contacts/contact.service';

import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { useContact } from '../../hooks/use-contact';
import SimpleBar from 'simplebar-react';

import Modal from '../modal/Modal';
import Input from '../UI/input/Input';
import Button from '../UI/button/Button';
import ContactItem from '../contact-item/ContactItem';
import ContactCreateForm from '../contact-form/ContactCreateForm';
import ContactDeleteForm from '../contact-form/ContactDeleteForm';
import ContactUpdateForm from '../contact-form/ContactUpdateForm';

type Props = {
    list: IContactDTO[];
    searchQuery: string;
    deleteAction: (contact: IContactDTO) => void;
    updateAction: (contact: IContactDTO) => void;
};
const ContactListItems: React.FC<Props> = React.memo((props) => {
    return (
        <Fragment>
            {props.list
                .filter((contact) => {
                    return (
                        contact.name.toLocaleLowerCase().includes(props.searchQuery.toLocaleLowerCase()) ||
                        contact.phone.toLocaleLowerCase().includes(props.searchQuery.toLocaleLowerCase())
                    );
                })
                .map((contact) => {
                    return (
                        <div className="contact-list__item" key={contact.id}>
                            <ContactItem
                                contact={contact}
                                deleteAction={props.deleteAction}
                                updateAction={props.updateAction}
                            />
                        </div>
                    );
                })}
        </Fragment>
    );
});

const ContactList: React.FC = (props) => {
    const { getAll, list } = useContact();
    const [searchQuery, setSearchQuery] = useState('');

    const [createForm, setCreateForm] = useState({ isOpen: false });
    const [updateForm, setUpdateForm] = useState({ isOpen: false, selected: {} });
    const [deleteForm, setDeleteForm] = useState({ isOpen: false, selected: {} });

    const openCreateForm = useCallback(() => {
        setCreateForm({ isOpen: true });
    }, []);

    const openDeleteForm = useCallback((contact: IContactDTO) => {
        setDeleteForm({ isOpen: true, selected: contact });
    }, []);

    const openUpdateForm = useCallback((contact: IContactDTO) => {
        setUpdateForm({ isOpen: true, selected: contact });
    }, []);

    const closeCreateForm = useCallback(() => {
        setCreateForm({ isOpen: false });
    }, []);

    const closeDeleteForm = useCallback(() => {
        setDeleteForm({ isOpen: false, selected: {} });
    }, []);

    const closeUpdateForm = useCallback(() => {
        setUpdateForm({ isOpen: false, selected: {} });
    }, []);

    useEffect(() => {
        getAll();
    }, []);

    return (
        <Fragment>
            <div className="contact-list">
                <div className="contact-list__inner">
                    <div className="contact-list__toolbox">
                        <div className="contact-list__tool">
                            <Input
                                placeholder="Пойск"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="contact-list__tool">
                            <Button role="secondary" width="40px" height="40px" onClick={openCreateForm}>
                                <svg width="20" height="20" viewBox="0 0 448 512">
                                    <path
                                        fill="currentColor"
                                        d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                                    />
                                </svg>
                            </Button>
                        </div>
                    </div>
                    <div className="contact-list__content">
                        <SimpleBar style={{ maxHeight: 300, padding: 15, minHeight: 300 }}>
                            <ContactListItems
                                list={list}
                                deleteAction={openDeleteForm}
                                updateAction={openUpdateForm}
                                searchQuery={searchQuery}
                            />
                        </SimpleBar>
                    </div>
                </div>
            </div>

            <Modal isOpen={createForm.isOpen} onRequestClose={closeCreateForm}>
                <ContactCreateForm closeHandler={closeCreateForm} />
            </Modal>

            <Modal isOpen={deleteForm.isOpen} onRequestClose={closeDeleteForm}>
                <ContactDeleteForm
                    contactForDelete={deleteForm.selected as IContactDTO}
                    closeHandler={closeDeleteForm}
                />
            </Modal>

            <Modal isOpen={updateForm.isOpen} onRequestClose={closeUpdateForm}>
                <ContactUpdateForm
                    contactForUpdate={updateForm.selected as IContactDTO}
                    closeHandler={closeUpdateForm}
                />
            </Modal>
        </Fragment>
    );
};

export default ContactList;
