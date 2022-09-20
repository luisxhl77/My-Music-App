import styled from "styled-components";
import { Body } from "../organisms/Body";
import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";
import { Sidebar } from "../organisms/Sidebar";

export const Player = () => {
  return (
    <>
      <SpotifyBody>
        <Sidebar/>
        <MainContainer>
          <Header/>
          <Body/>
        </MainContainer>
      </SpotifyBody>
      <Footer/>
    </>
  )
}

//style
const SpotifyBody = styled.div`
  display: flex;
  background-color: #131313;
`;
const MainContainer = styled.div`
  flex: 0.9;
  flex-direction: column;
`

