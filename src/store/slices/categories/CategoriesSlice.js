import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name:'categories',
    initialState: {
        categories: null,
    },
    reducers: {
        setCategories: (state, action) => {
            state.categories = action.payload.categories;
        }
    }
});

export const { setCategories } = categoriesSlice.actions;