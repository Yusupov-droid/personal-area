import { RootState } from '../../store';


export const getContactsItems = (state: RootState) => state.contacts.items;
export const getContactsIsLoading = (state: RootState) => state.contacts.isLoading;

