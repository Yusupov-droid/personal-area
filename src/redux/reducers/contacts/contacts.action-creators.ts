import {
    CREATE_CONTACT,
    DELETE_CONTACT,
    SET_IS_LOADING,
    SET_ITEMS,
    UPDATE_CONTACT,
} from './contacts.constant';
import {
    CreateContactAction,
    DeleteContactAction,
    SetIsLoadingAction,
    SetItemsAction,
    UpdateContactAction,
} from './contacts.action-types';
import { IContactDTO } from '../../../api/contacts/contact.service';

export const setItemsAction = (contacts: IContactDTO[]): SetItemsAction => {
    return {
        type: SET_ITEMS,
        payload: {
            items: contacts,
        },
    };
};
export const setIsLoadingAction = (value: boolean): SetIsLoadingAction => {
    return {
        type: SET_IS_LOADING,
        payload: {
            isLoading: value,
        },
    };
};
export const createContactAction = (contact: IContactDTO): CreateContactAction => {
    return {
        type: CREATE_CONTACT,
        payload: {
            item: contact,
        },
    };
};
export const deleteContactAction = (id: string): DeleteContactAction => {
    return {
        type: DELETE_CONTACT,
        payload: {
            id: id,
        },
    };
};
export const updateContactAction = (id: string, contact: IContactDTO): UpdateContactAction => {
    return {
        type: UPDATE_CONTACT,
        payload: {
            id: id,
            item: contact,
        },
    };
};