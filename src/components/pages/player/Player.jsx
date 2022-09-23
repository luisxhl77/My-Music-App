import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import { Body } from "../../organisms/Body"
import { FooterReproduce } from "../../organisms/Footer.reproduce/Footer.reproduce"
import { Header } from "../../organisms/Header"
import { Profile } from "../../organisms/profile/Profile"
import { Sidebar } from "../../organisms/Sidebar/Sidebar"

export const Player = () => {
  return (
    <SpotifyBody>
      <Header/>
      <Sidebar/>
      <Routes>
        <Route path="/Playlist" element={ <Body/> }/>
        <Route path="/Profile" element={ <Profile/> }/>
      </Routes>
      <FooterReproduce/>
    </SpotifyBody>
  )
}
const SpotifyBody = styled.div`
  width: 100%;
  display: flex;
`

