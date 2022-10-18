import { createSlice } from '@reduxjs/toolkit';

export const searchPlaylistSlice = createSlice({
    name: 'searchPlaylist',
    initialState: {
        searchPlaylist: [],
    },
    reducers: {
        searchMyPlaylists: ( state, action ) => {
            state.searchPlaylist = action.payload.searchPlaylist;
        },
    }
});
// Action creators are generated for each case reducer function
export const { searchMyPlaylists } = searchPlaylistSlice.actions;