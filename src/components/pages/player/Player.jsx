import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import { AppRouter } from "../../../router/AppRouter"
import { FooterReproduce } from "../../organisms/Footer.reproduce/Footer.reproduce"
import { Header } from "../../organisms/header/Header"
import { Sidebar } from "../../organisms/Sidebar/Sidebar"

export const Player = () => {
  return (
    <SpotifyBody>
      <Header/>
      <Sidebar/>
      <AppRouter/>
      <FooterReproduce/>
    </SpotifyBody>
  )
}
const SpotifyBody = styled.div`
  width: 100%;
  display: flex;
`

