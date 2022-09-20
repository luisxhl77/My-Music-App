import styled from "styled-components";
import { Footer } from "../organisms/Footer";
import { Sidebar } from "../organisms/Sidebar";

export const Player = () => {
  return (
    <>
      <SpotifyBody>
        <Sidebar/>
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

