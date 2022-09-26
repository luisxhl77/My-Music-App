import { ArrowDropDown } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { selectUser } from "../../../store/slices/UserSlice";
import { Link } from "react-router-dom";
import './profileOptions.scss';

export const ProfileOptions = () => {
  const user = useSelector(selectUser);
  const {display_name, images, id} = user.user;

  return (
    <div className="profileOptions">
      <Avatar src={ images[0].url } alt={ id }/>
      <h4 className="profileOptions__name"> { display_name } </h4>
      <ArrowDropDown/>
      <div className="profileOptions__options">
        <Link to="/Profile">
          <button>perfil</button>
        </Link>
        <button>salir</button>
      </div>
    </div>
  )
}
