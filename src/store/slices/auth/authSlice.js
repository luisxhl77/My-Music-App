import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        access_token: null,
        expires_in: null,
        stateUser: false
    },
    reducers: {
        setAuth: (state, action) => {
            state.auth = action.payload.access_token;
            state.auth = action.payload.expires_in;
            state.auth = action.payload.stateUser;
        }
    }
});

export const { setAuth } = authSlice.actions;
