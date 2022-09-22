import styled from "styled-components"
import { Body } from "../../organisms/Body"
import { FooterReproduce } from "../../organisms/Footer.reproduce/Footer.reproduce"
import { Header } from "../../organisms/Header"
import { Sidebar } from "../../organisms/Sidebar/Sidebar"

export const Player = () => {
  return (
    <SpotifyBody>
      <Sidebar/>
      <MainContainer>
        <Body/>
        <Header/>
      </MainContainer>
        <FooterReproduce/>
    </SpotifyBody>
  )
}
const SpotifyBody = styled.div`
  width: 100%;
  display: flex;
  background-color: #ffffff;
`
const MainContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
`

