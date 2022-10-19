import { ButtonLink } from "../../atoms/a-loginButton/buttonLink";
import { loginURL } from "../../../SpotifyLogin";
import './login.scss';
import logoMyMusicApp from '../../../img/MyMusicApp.png'

export const Login = () => {
  
  return (
    <div className="login">
      <figure className="login__figure">
        <img src={logoMyMusicApp} alt="logo" className="login__img"/>
      </figure>
      <ButtonLink name= 'Iniciar Sesion' link={loginURL}/>
    </div>
  )
}