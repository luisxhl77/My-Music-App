import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../components/pages/login/Login"
import { Player } from "../components/pages/player/Player"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={ <Player/> }/>
                <Route path="/login" element={ <Login/> }/>

                <Route path="/" element={ <Navigate to= "/*"/> }/>
            </Routes>
        </>
    )
}
