import { useEffect, useState } from "react";
import { Player } from "./components/pages/Player";
import { Login } from "./components/pages/Login";
import { getTokenFromURL } from "./spotifyLogin";

export function App() {
    const [token, setToken] = useState()
  
    useEffect(()=>{
        const data = getTokenFromURL();
        //window.location.hash= "";
        const _token = data.access_token;
        setToken(_token)
        console.log("token => ",_token)
    },[])

    return (
        <>
            { 
                token ? <Player/> : <Login/>
            }
        </>
    )
}