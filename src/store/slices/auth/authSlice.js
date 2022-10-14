import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        access_token: null,
        expires_in: null,
        logged: false
    },
    reducers: {
        login: (state, action) => {
            state.access_token = action.payload.access_token;
            state.expires_in = action.payload.expires_in;
            state.logged = true;
        },
        logout: (state, action) => {
            state.access_token = null;
            state.expires_in = null;
            state.logged = false;
        }
    }
});

export const { login, logout } = authSlice.actions;
