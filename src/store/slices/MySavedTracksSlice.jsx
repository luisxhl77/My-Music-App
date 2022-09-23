import { createSlice } from "@reduxjs/toolkit";

export const mySavedTracksSlice = createSlice({
    name: 'mySavedTracks',
    initialState: {
        mySavedTracks: null,
    },
    reducers: {
        SET_MYSAVEDTRACKS: (state, action) => {
            state.mySavedTracks = action.payload;
        }
    }
});

export const { SET_MYSAVEDTRACKS } = mySavedTracksSlice.actions;
export const selectPlaylist = state => state.mySavedTracks.mySavedTracks;
export default mySavedTracksSlice.reducer;
