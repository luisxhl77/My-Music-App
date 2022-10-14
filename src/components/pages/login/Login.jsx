import { ButtonLink } from "../../atoms/a-loginButton/buttonLink";
import { loginURL } from "../../../SpotifyLogin";
import './login.scss';
import logoMyMusicApp from '../../../img/MyMusicApp.png'

export const Login = () => {
  
  return (
    <>
      <figure>
        <img src={logoMyMusicApp} alt="logo"/>
      </figure>
      <ButtonLink name= 'Iniciar Sesion' link={loginURL}/>
    </>
  )
}