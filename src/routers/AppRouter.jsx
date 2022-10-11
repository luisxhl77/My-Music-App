import { Navigate, Route, Routes } from "react-router-dom"
import { Player } from "../components/pages/player/Player"

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/*" element={ <Player/> }/>

                <Route path="/" element={ <Navigate to= "/*"/> }/>
            </Routes>
        </>
    )
}
