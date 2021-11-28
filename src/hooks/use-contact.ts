import { IContactCreateDTO, IContactDTO } from '../api/contacts/contact.service';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact, deleteContact, getContacts, updateContact } from '../redux/reducers/contacts/contacts.reducer';
import { RootState } from '../redux/store';
import { getContactsItems } from '../redux/reducers/contacts/contacts.selectors';

export const useContact = () => {

    const dispatch = useDispatch();

    const list = useSelector(getContactsItems);

    const getAll = useCallback(() => {
            const action = getContacts();
            dispatch(action);
        }, [dispatch],
    );

    const remove = useCallback(
        (id: string) => {
            const action = deleteContact(id);
            dispatch(action);
        },
        [dispatch],
    );

    const create = useCallback(
        (contact: IContactCreateDTO) => {
            const action = createContact(contact);
            dispatch(action);
        },
        [dispatch],
    );
    const update = useCallback(
        (id: string, contact: IContactCreateDTO) => {
            dispatch(updateContact(id, contact));
        },
        [dispatch],
    );

    return {
        list,
        remove,
        create,
        update,
        getAll,
    };
};
