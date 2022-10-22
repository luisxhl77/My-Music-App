import { createSlice } from "@reduxjs/toolkit";

export const mySavedTracksSlice = createSlice({
    name: 'mySavedTracks',
    initialState: {
        mySavedTracks: null,
    },
    reducers: {
        setMySavedTracks: (state, action) => {
            state.mySavedTracks = action.payload.mySavedTracks;
            state.loaded = false;
        }
    }
});

export const { setMySavedTracks, startLoadingTracks } = mySavedTracksSlice.actions;
