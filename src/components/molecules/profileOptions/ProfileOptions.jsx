import { ArrowDropDown } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import './profileOptions.scss';

export const ProfileOptions = () => {
  const { user } = useSelector(state => state.user);

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
        <Avatar src={ user?.images[0]?.url } alt={ user?.id }/>
        <h4 className="profileOptions__name"> { user?.display_name } </h4>
        <ArrowDropDown/>
      </NavLink>
      <div className="profileOptions__options">
        <NavLink to="/Profile" className={ ({ isActive }) => `profileOptions__option ${ isActive ? 'activeoption' : ''} `}>
          <p> profile </p>
        </NavLink>
        <p className="profileOptions__option" onClick={onLogout} > onlogout </p>
      </div> 
    </div>
  )
}
