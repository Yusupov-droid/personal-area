import { client } from '../axios';

export interface IContactDTO {
    id: string;
    name: string;
    phone: string;
}

export interface IContactCreateDTO {
    name: string;
    phone: string;
}




export class ContactService {

    static getContacts = () => {
        return client.get<IContactDTO[]>('/contacts');
    };
    static createContact = (contact: IContactCreateDTO) => {
        return client.post<IContactDTO>('/contacts', contact);
    };
    static deleteContact = (contactId: string) => {
        return client.delete<IContactDTO>(`/contacts/${contactId}`);
    };
    static updateContact = (contactId: string, data: IContactCreateDTO) => {
        return client.patch<IContactDTO>(`/contacts/${contactId}`, data);
    };
}
