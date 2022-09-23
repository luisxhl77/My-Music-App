import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import tokenReducer from "./slices/TokenSlice";
import playlistReducer from "./slices/PlaylistSlice";
import userPlaylistsReducer from "./slices/UserPlaylistsSlice";
import mySavedTracksReducer from "./slices/MySavedTracksSlice";
import featuredPlaylistsSliceReducer from "./slices/FeaturedPlaylistsSlice";
import newReleasesSliceReducer from "./slices/NewReleasesSlice";
import categoriesSliceReducer from "./slices/CategoriesSlice";


export default configureStore({
    reducer:{
        user: userReducer,
        token: tokenReducer,
        playlist: playlistReducer,
        userPlaylists: userPlaylistsReducer,
        mySavedTracks: mySavedTracksReducer,
        featuredPlaylists: featuredPlaylistsSliceReducer,
        newReleases: newReleasesSliceReducer,
        categories: categoriesSliceReducer,

    }
})