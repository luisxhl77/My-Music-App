import { createSlice } from "@reduxjs/toolkit";

export const featuredPlaylistsSlice = createSlice({
    name: 'featuredPlaylists',
    initialState: {
        featuredPlaylists: null,
    },
    reducers: {
        setFeaturedPlaylist: (state, action) => {
            state.featuredPlaylists = action.payload.featuredPlaylists;
        },
    }
});

export const { setFeaturedPlaylist } = featuredPlaylistsSlice.actions;