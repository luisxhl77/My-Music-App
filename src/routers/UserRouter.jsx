import { Navigate, Route, Routes } from "react-router-dom";
import { Home, MySavedTrack, Playlist, Profile, SearchPlaylist } from "../components/organisms";

export const UserRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={ <Home/> }/>
                <Route path="/playlist/:id" element={ <Playlist/> }/>z
                <Route path="/profile" element={ <Profile/> }/>
                <Route path="/collectionTrack" element={ <MySavedTrack/> }/>
                <Route path="/search" element={ <SearchPlaylist/> }/>

                <Route path="/*" element={ <Navigate to= "/home"/> }/>

            </Routes>
        </>
    )
}
