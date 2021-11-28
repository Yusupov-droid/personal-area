import { Dispatch } from 'redux';
import { CREATE_CONTACT, DELETE_CONTACT, SET_IS_LOADING, SET_ITEMS, UPDATE_CONTACT } from './contacts.constant';

import { ContactsAction } from './contacts.action-types';
import {
    createContactAction,
    deleteContactAction,
    setIsLoadingAction,
    setItemsAction,
    updateContactAction,
} from './contacts.action-creators';
import { ContactService, IContactCreateDTO, IContactDTO } from '../../../api/contacts/contact.service';

type ContactsState = {
    items: IContactDTO[];
    isLoading: boolean;
};

const InitialState: ContactsState = {
    items: [],
    isLoading: false,
};
export const ContactsReducer = (state: ContactsState = InitialState, action: ContactsAction): ContactsState => {
    switch (action.type) {
        case SET_ITEMS:
            return {
                ...state,
                items: action.payload.items,
            };
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload.isLoading,
            };
        case CREATE_CONTACT:
            return {
                ...state,
                items: [...state.items, action.payload.item],
            };
        case DELETE_CONTACT:
            return {
                ...state,
                items: [...state.items].filter((contact) => {
                    return contact.id === action.payload.id ? null : contact;
                }),
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                items: [...state.items].map((contact) => {
                    return contact.id === action.payload.id ? { ...contact, ...action.payload.item } : contact;
                }),
            };
        default:
            return state;
    }
};

export const getContacts = () => {
    return (dispatch: Dispatch<ContactsAction>) => {
        dispatch(setIsLoadingAction(true));

        ContactService.getContacts()
            .then((res) => {
                dispatch(setItemsAction(res.data));
                dispatch(setIsLoadingAction(false));
            })
            .catch((reason) => {
                dispatch(setIsLoadingAction(false));
            });
    };
};

export const createContact = (contact: IContactCreateDTO) => {
    return (dispatch: Dispatch<ContactsAction>) => {
        dispatch(setIsLoadingAction(true));
        ContactService.createContact(contact)
            .then(res => {
                dispatch(createContactAction(res.data));
                dispatch(setIsLoadingAction(false));
            })
            .catch(reason => {
                dispatch(setIsLoadingAction(false));
            });
    };
};
export const deleteContact = (contactId: string) => {
    return (dispatch: Dispatch<ContactsAction>) => {
        dispatch(setIsLoadingAction(true));
        ContactService.deleteContact(contactId)
            .then(() => {
                dispatch(deleteContactAction(contactId));
                dispatch(setIsLoadingAction(true));
            })
            .catch(reason => {
                dispatch(setIsLoadingAction(false));
            });
    };
};
export const updateContact = (contactId: string, contact: IContactCreateDTO) => {
    return (dispatch: Dispatch<ContactsAction>) => {
        dispatch(setIsLoadingAction(true));
        ContactService.updateContact(contactId, contact)
            .then(res => {
                dispatch(updateContactAction(contactId, res.data));
                dispatch(setIsLoadingAction(false));
            })
            .catch(reason => {
                dispatch(setIsLoadingAction(false));
            });
    };
};
