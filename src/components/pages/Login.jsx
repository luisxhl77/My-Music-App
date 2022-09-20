import styled from "styled-components";
import { LoginButton } from "../atoms/buttons";
import { loginURL } from "../../SpotifyLogin";

export const Login = () => {
  return (
    <LoginContainer>
      <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="logo" />
      <LoginButton href={loginURL}>Iniciar sesion</LoginButton>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #000;
  & img{
    width: 100%;
  }
`;
