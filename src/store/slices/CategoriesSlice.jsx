import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name:'categories',
    initialState: {
        categories: null,
    },
    reducers: {
        SET_CATEGORIES: (state, action) => {
            state.categories = action.payload;
        }
    }
});

export const { SET_CATEGORIES } = categoriesSlice.actions;
export const selectPlaylist = state => state.categories.categories;
export default categoriesSlice.reducer;
