import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { requestContactsThunk, addContactThunk, deleteContactThunk } from './contactsServices';

const initialState = {
    contacts: null,
    isLoading: false,
    error: null,
    filter: "",
  }

const handlePanding = (state) => {
    state.isLoading = true;
    state.error = null;
}

const handleFulfilledGet = (state,{ payload }) => {
    state.isLoading = false;
    state.contacts = payload;
}

const handleRejected = (state,{ payload }) => {
    state.isLoading = false;
    state.error = payload;
}

const handleFulfilledAdd = (state,{ payload }) => {
    state.isLoading = false;
    state.contacts.push(payload);
}

const handleFulfilledDelete = (state,{ payload }) => {
    state.isLoading = false;
    state.contacts = state.contacts.filter(el => el.id !== payload.id)
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers:{
        filterContact:(state, action) =>{
        state.filter = action.payload;
        },
    },
    extraReducers:(builder) => {
        builder.addCase(requestContactsThunk.fulfilled, handleFulfilledGet)
           .addCase(addContactThunk.fulfilled, handleFulfilledAdd)
        .addCase(deleteContactThunk.fulfilled, handleFulfilledDelete)
        .addMatcher(
            isAnyOf(
                requestContactsThunk.pending,
                addContactThunk.pending,
                deleteContactThunk.pending
            ),handlePanding)
        .addMatcher(
            isAnyOf(
                requestContactsThunk.rejected,
                addContactThunk.rejected,
                deleteContactThunk.rejected
            ),handleRejected)
    }
})

export const contactsReducer = contactsSlice.reducer;
export const {filterContact} = contactsSlice.actions;
