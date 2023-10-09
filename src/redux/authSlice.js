import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { registerUserThunk, loginUserThunk, refreshUserThunk, logoutUserThunk } from "./authServices";

const initialState = {
    isLoading: false,
    error: null,
    userData: null,
    token: null,
    autentificated: false,
}

const handleAuthPanding = (state) => {
    state.isLoading = true;
    state.error = null;
}

const handleAuthRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

const handleAuthFulfilledRegister = (state, action) => {
    state.isLoading = false;
    state.autentificated = true;
    state.userData = action.payload.user;
    state.token = action.payload.token;
}

const handleAuthFulfilledLogin = (state, action) => {
    state.isLoading = false;
    state.autentificated = true;
    state.userData = action.payload.user;
    state.token = action.payload.token;
}

const handleAuthFulfilledRefresh = (state, action) => {
    state.isLoading = false;
    state.autentificated = true;
    state.userData = action.payload;
}

const handleAuthFulfilledLogout = (state) => {
    state.isLoading = false;
    state.autentificated = false;
    state.userData = null;
    state.token = null;
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) =>
       builder.addCase(registerUserThunk.fulfilled, handleAuthFulfilledRegister)
           .addCase(loginUserThunk.fulfilled, handleAuthFulfilledLogin)
           .addCase(refreshUserThunk.fulfilled, handleAuthFulfilledRefresh)
           .addCase(logoutUserThunk.fulfilled, handleAuthFulfilledLogout)
       .addMatcher(
            isAnyOf(
                registerUserThunk.pending,
                loginUserThunk.pending,
                refreshUserThunk.pending,
                logoutUserThunk.pending,
            ),handleAuthPanding
       )
       .addMatcher(
            isAnyOf(
                registerUserThunk.rejected,
                loginUserThunk.rejected,
                refreshUserThunk.rejected,
                logoutUserThunk.rejected,
            ),handleAuthRejected
       )
})


export const authReducer = authSlice.reducer;
