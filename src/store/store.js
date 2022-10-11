import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import tokenReducer from "./slices/TokenSlice";
import playlistReducer from "./slices/PlaylistSlice";
import mySavedTracksReducer from "./slices/MySavedTracksSlice";
import { featuredPlaylistsSlice } from "./slices/featuredPlaylists/FeaturedPlaylistsSlice";
import { categoriesSlice } from "./slices/categories/CategoriesSlice";
import { userPlaylistsSlice } from "./slices/userPlaylist/UserPlaylistsSlice";
import { newReleasesSlices } from "./slices/newReleases/NewReleasesSlice";

export default configureStore({
    reducer:{
        user: userReducer,
        token: tokenReducer,
        playlist: playlistReducer,
        userPlaylists: userPlaylistsSlice.reducer,
        mySavedTracks: mySavedTracksReducer,
        featuredPlaylists: featuredPlaylistsSlice.reducer,
        newReleases: newReleasesSlices.reducer,
        categories: categoriesSlice.reducer,
    }
})