import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import { UserRouter } from "../../../routers/UserRouter"
import { FooterReproduce } from "../../organisms/Footer.reproduce/Footer.reproduce"
import { Header } from "../../organisms/header/Header"
import { Sidebar } from "../../organisms/Sidebar/Sidebar"

export const Player = () => {
  return (
    <SpotifyBody>
      <Header/>
      <Sidebar/>
      <UserRouter/>
      <FooterReproduce/>
    </SpotifyBody>
  )
}
const SpotifyBody = styled.div`
  width: 100%;
  display: flex;
`

