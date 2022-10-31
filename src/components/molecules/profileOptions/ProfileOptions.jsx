import { NavLink, useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';
import { ArrowDropDown } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import './profileOptions.scss';

export const ProfileOptions = ({ name, image, id }) => {

  const navigate = useNavigate()
  
  const onLogout = () => {
    window.localStorage.clear();
    navigate('/Login', {
      replace: true,
    })
  }

  return (
    <div className="profileOptions">

      <NavLink to="/Profile" className={ ({ isActive }) => `profileOptions ${ isActive ? 'profileOptionsActive' : ''} `}>
        
        <Avatar src={ image } alt={ id } aria-label="imageUser"/>
        <h4 className="profileOptions__name" aria-label="nameUser"> { name } </h4>
        <ArrowDropDown/>
      
      </NavLink>
      
      <div className="profileOptions__options">
        
        <NavLink to="/Profile" className={ ({ isActive }) => `profileOptions__option ${ isActive ? 'activeoption' : ''} `}>
          <p> profile </p>
        </NavLink>
        
        <p className="profileOptions__option" onClick={onLogout} aria-label='funtionOnLogout'> onlogout </p>
      </div> 

    </div>
  )
}

ProfileOptions.propTypes = {
  name: PropTypes.string, 
  image: PropTypes.string, 
  id: PropTypes.string
}