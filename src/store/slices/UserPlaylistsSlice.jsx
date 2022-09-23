import { createSlice } from "@reduxjs/toolkit";

export const userPlaylistsSlice = createSlice({
    name: 'userPlaylists',
    initialState: {
        userPlaylists: null,
    },
    reducers: {
        SET_USERPLAYLIST: (state, action) => {
            state.userPlaylists = action.payload;
        }
    }
});

export const { SET_USERPLAYLIST } = userPlaylistsSlice.actions;
export const selectUserPlaylists = state => state.userPlaylists.userPlaylists;
export default userPlaylistsSlice.reducer;