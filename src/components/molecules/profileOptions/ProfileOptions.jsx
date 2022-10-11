import { ArrowDropDown } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import './profileOptions.scss';

export const ProfileOptions = () => {

  const navigate = useNavigate()

  const { user } = useSelector(state => state.user);
  const {display_name, images, id} = user;

  const onLogout = () => {  
    navigate('/Login', {
      replace: true,
    })
  }



  return (
    <div className="profileOptions">
      <Avatar src={ images[0].url } alt={ id }/>
      <h4 className="profileOptions__name"> { display_name } </h4>
      <ArrowDropDown/>
      <div className="profileOptions__options">
        <Link to="/Profile">
          <button>perfil</button>
        </Link>
        <button onClick={onLogout}>salir</button>
      </div>
    </div>
  )
}
