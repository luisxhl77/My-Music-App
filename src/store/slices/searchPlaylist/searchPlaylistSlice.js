import { createSlice } from '@reduxjs/toolkit';

export const searchPlaylistSlice = createSlice({
    name: 'searchPlaylist',
    initialState: {
        searchPlaylist: [],
        loaded: false,
    },
    reducers: {
        startLoadingPlaylists:( state )=>{
            state.loaded = true;
        },
        searchMyPlaylists: ( state, action ) => {
            state.searchPlaylist = action.payload.searchPlaylist;
            state.loaded = false;
        },
    }
});
// Action creators are generated for each case reducer function
export const { searchMyPlaylists, startLoadingPlaylists } = searchPlaylistSlice.actions;