import { createSlice } from "@reduxjs/toolkit";

export const featuredPlaylistsSlice = createSlice({
    name: 'featuredPlaylists',
    initialState: {
        featuredPlaylists: null,
    },
    reducers: {
        SET_FEATUREDPLAYLISTS: (state, action) => {
            state.featuredPlaylists = action.payload;
        }
    }
});

export const { SET_FEATUREDPLAYLISTS } = featuredPlaylistsSlice.actions;
export const selectPlaylist = state => state.featuredPlaylists.featuredPlaylists;
export default featuredPlaylistsSlice.reducer;
