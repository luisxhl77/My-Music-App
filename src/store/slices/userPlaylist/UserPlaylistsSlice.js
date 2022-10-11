import { createSlice } from "@reduxjs/toolkit";

export const userPlaylistsSlice = createSlice({
    name: 'userPlaylists',
    initialState: {
        userPlaylists: null,
    },
    reducers: {
        setUserPlaylist: (state, action) => {
            state.userPlaylists = action.payload.userPlaylists;
        }
    }
});

export const { setUserPlaylist } = userPlaylistsSlice.actions;