import { ButtonLink } from "../../atoms/a-loginButton/buttonLink";
import { loginURL } from "../../../SpotifyLogin";
import './login.scss';

export const Login = () => {
  return (
    <>
      <figure>
        <img src="../../../../public/MyMusicApp.PNG" alt="logo"/>
      </figure>
      <ButtonLink name= 'Iniciar Sesion' link={loginURL}/>
    </>
  )
}