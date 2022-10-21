import { createSlice } from "@reduxjs/toolkit";

export const mySavedTracksSlice = createSlice({
    name: 'mySavedTracks',
    initialState: {
        mySavedTracks: null,
        loaded: false,
    },
    reducers: {
        startLoadingTracks:( state )=>{
            state.loaded = true;
        },
        setMySavedTracks: (state, action) => {
            state.mySavedTracks = action.payload.mySavedTracks;
            state.loaded = false;
        }
    }
});

export const { setMySavedTracks, startLoadingTracks } = mySavedTracksSlice.actions;
