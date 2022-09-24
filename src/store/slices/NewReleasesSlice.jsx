import { createSlice } from "@reduxjs/toolkit";

export const newReleasesSlices = createSlice({
    name: 'newReleases',
    initialState: {
        newReleases: null,
    },
    reducers: {
        SET_NEWRELEASES: (state, action) => {
            state.newReleases = action.payload;
        }
    }
});

export const { SET_NEWRELEASES } = newReleasesSlices.actions;
export const selectNewReleases = state => state.newReleases.newReleases;
export default newReleasesSlices.reducer;
