import { createSelector } from "@reduxjs/toolkit"

export const selectUserLoading = state => state.auth.isLoading;
export const selectUserError = state => state.auth.error;
export const selectUserUserData = state => state.auth.userData;
export const selectUserToken = state => state.auth.token;
export const selectUserAuth = state => state.auth.autentificated;

export const selectorContacts = state => state.contacts.contacts;
export const selectorIsLoading = state => state.contacts.isLoading;
export const selectorError = state => state.contacts.error;
export const selectorFilter = state => state.contacts.filter;

export const choiceVisibleArray = createSelector(
    [selectorContacts, selectorFilter],
    (contacts, filter) => {
        if(filter !== ''){
            return contacts.filter(contact =>
                contact.name.toLowerCase().includes(filter.toLowerCase())
              ); 
        }
        return contacts;
    }

)
