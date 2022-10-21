import { NavLink } from "react-router-dom";
import "./sidebarChoise.scss";

export const SiderbarChoice = ({title, Icon, nav}) => {
    return (
        <li>
            <NavLink to={nav} className={ ({ isActive }) => `choiceOptions ${ isActive ? 'activeLink' : ''} `}>
                { Icon && <Icon/> }
                { Icon ? <h4>{ title }</h4> : <h5 className="choiceOptions__title">{ title }</h5> }
            </NavLink>
        </li>
    )
};