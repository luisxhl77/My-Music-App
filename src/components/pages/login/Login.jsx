import styled from "styled-components";
import { LoginButton } from "../../atoms/buttons";
import { loginURL } from "../../../SpotifyLogin";

export const Login = () => {
  return (
    <LoginContainer>
      <img src="../../../../public/MyMusicApp.PNG" alt="logo"/>
      <LoginButton href={loginURL}>Iniciar sesion</LoginButton>
    </LoginContainer>
  )
}

const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: #000000;
  & img{
    width: 100%;
  }
`;
