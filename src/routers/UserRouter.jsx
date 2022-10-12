import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from "../components/organisms/home/Home"
import { Playlist } from "../components/organisms/playlist/Playlist"
import { Profile } from "../components/organisms/profile/Profile"

export const UserRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={ <Home/> }/>
                <Route path="/playlist/:id" element={ <Playlist/> }/>
                <Route path="/profile" element={ <Profile/> }/>

                <Route path="/*" element={ <Navigate to= "/home"/> }/>

            </Routes>
        </>
    )
}
