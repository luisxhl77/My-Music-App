import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../components/organisms/home/Home"
import { MySavedTrack } from "../components/organisms/mySavedTrack/MySavedTracks"
import { Playlist } from "../components/organisms/playlist/Playlist"
import { Profile } from "../components/organisms/profile/Profile"
import { SearchPlaylist } from "../components/organisms/search/SearchPlaylist"

export const UserRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={ <Home/> }/>
                <Route path="/playlist/:id" element={ <Playlist/> }/>
                <Route path="/profile" element={ <Profile/> }/>
                <Route path="/collectionTrack" element={ <MySavedTrack/> }/>
                <Route path="/search" element={ <SearchPlaylist/> }/>

                <Route path="/*" element={ <Navigate to= "/home"/> }/>

            </Routes>
        </>
    )
}
