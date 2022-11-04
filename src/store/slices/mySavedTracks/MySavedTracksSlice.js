import { createSlice } from "@reduxjs/toolkit";

export const mySavedTracksSlice = createSlice({
    name: 'mySavedTracks',
    initialState: {
        mySavedTracks: null,
        stateTracks: []
    },
    reducers: {
        setMySavedTracks: (state, action) => {
            state.mySavedTracks = action.payload.mySavedTracks;
        },
        getStateTracks: (state, action) => {
            state.stateTracks = [...state, action.payload.stateTracks];
        }
    }
});

export const { setMySavedTracks, getStateTracks } = mySavedTracksSlice.actions;
