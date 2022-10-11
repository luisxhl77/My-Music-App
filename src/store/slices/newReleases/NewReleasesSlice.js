import { createSlice } from "@reduxjs/toolkit";

export const newReleasesSlices = createSlice({
    name: 'newReleases',
    initialState: {
        newReleases: null,
    },
    reducers: {
        setNewreleases: (state, action) => {
            state.newReleases = action.payload.newReleases;
        }
    }
});

export const { setNewreleases } = newReleasesSlices.actions;
