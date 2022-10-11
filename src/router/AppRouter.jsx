import { Route, Routes } from "react-router-dom"
import { Home } from "../components/organisms/home/Home"
import { Playlist } from "../components/organisms/playlist/Playlist"
import { Profile } from "../components/organisms/profile/Profile"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={ <Home/> }/>
                <Route path="/Home" element={ <Home/> }/>
                <Route path="/Playlist" element={ <Playlist/> }/>
                <Route path="/Profile" element={ <Profile/> }/>
            </Routes>
        </>
    )
}
