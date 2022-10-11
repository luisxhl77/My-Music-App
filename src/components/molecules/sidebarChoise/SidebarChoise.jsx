import { NavLink } from "react-router-dom";
import "./sidebarChoise.scss";

export const SiderbarChoice = ({title, Icon, nav}) => {
    return (
        <li>
            <NavLink to={nav} className={ ({ isActive }) => `choiceOptions ${ isActive ? 'activeLink' : ''} `}>
                {/*Si existe Icon agreguelo*/}
                { Icon && <Icon/> }
                { Icon ? <h4>{title}</h4> : <h5>{title}</h5> }
                {/*Si existe Icon agreguelo de lo contrario no */}
            </NavLink>
        </li>
    )
};