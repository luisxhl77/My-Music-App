import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./slices/user/UserSlice";
import { tokenSlice } from "./slices/token/TokenSlice";
import { playlistSlice } from "./slices/playlists/PlaylistSlice";
import { mySavedTracksSlice } from "./slices/mySavedTracks/MySavedTracksSlice";
import { featuredPlaylistsSlice } from "./slices/featuredPlaylists/FeaturedPlaylistsSlice";
import { categoriesSlice } from "./slices/categories/CategoriesSlice";
import { userPlaylistsSlice } from "./slices/userPlaylist/UserPlaylistsSlice";
import { newReleasesSlices } from "./slices/newReleases/NewReleasesSlice";

export default configureStore({
    reducer:{
        user: userSlice.reducer,
        token: tokenSlice.reducer,
        playlist: playlistSlice.reducer,
        userPlaylists: userPlaylistsSlice.reducer,
        mySavedTracks: mySavedTracksSlice.reducer,
        featuredPlaylists: featuredPlaylistsSlice.reducer,
        newReleases: newReleasesSlices.reducer,
        categories: categoriesSlice.reducer,
    }
})