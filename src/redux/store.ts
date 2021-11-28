import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { AuthReducer } from './reducers/auth/auth.reducer';
import { ContactsReducer } from './reducers/contacts/contacts.reducer';

const middlewares = [thunk, logger];

const RootReducer = combineReducers({
    auth: AuthReducer,
    contacts: ContactsReducer,
});

export const store = createStore(RootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

export type RootState = ReturnType<typeof RootReducer>;
