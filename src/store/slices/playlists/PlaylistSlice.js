import { createSlice } from "@reduxjs/toolkit";

export const playlistSlice = createSlice({
    name: 'playlist',
    initialState: {
        playlist: null,
    },
    reducers: {
        setPlaylist: (state, action) => {
            state.playlist = action.payload.playlist;
        }
    }
});

export const { setPlaylist } = playlistSlice.actions;
