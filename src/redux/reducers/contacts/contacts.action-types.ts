import {
    CREATE_CONTACT,
    DELETE_CONTACT,
    SET_IS_LOADING,
    SET_ITEMS,
    UPDATE_CONTACT,
} from './contacts.constant';
import { IContactDTO } from '../../../api/contacts/contact.service';

export type SetItemsAction = {
    type: typeof SET_ITEMS;
    payload: {
        items: IContactDTO[];
    };
};

export type SetIsLoadingAction = {
    type: typeof SET_IS_LOADING;
    payload: {
        isLoading: boolean;
    };
};
export type CreateContactAction = {
    type: typeof CREATE_CONTACT;
    payload: {
        item: IContactDTO;
    };
};
export type DeleteContactAction = {
    type: typeof DELETE_CONTACT;
    payload: {
        id: string;
    };
};
export type UpdateContactAction = {
    type: typeof UPDATE_CONTACT;
    payload: {
        id: string;
        item: IContactDTO;
    };
};


export type ContactsAction =
    | SetItemsAction
    | SetIsLoadingAction
    | CreateContactAction
    | DeleteContactAction
    | UpdateContactAction
