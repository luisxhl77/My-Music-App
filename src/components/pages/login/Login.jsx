import { loginURL } from "../../../SpotifyLogin";
import { ButtonLink } from "../../atoms";
import logoMyMusicApp from '../../../img/MyMusicApp.png'
import './login.scss';

export const Login = () => {
  
  return (
    <div className="login">
      <figure className="login__figure">
        <img src={ logoMyMusicApp } alt="logo" className="login__img"/>
      </figure>
      <ButtonLink 
        name= 'Iniciar Sesion' 
        link={loginURL}
      />
    </div>
  )
}