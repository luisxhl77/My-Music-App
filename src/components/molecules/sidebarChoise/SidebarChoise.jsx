import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import "./sidebarChoise.scss";

export const SiderbarChoice = ({ title, Icon, nav }) => {

    return (
        <li>
            <NavLink to={nav} className={ ({ isActive }) => `choiceOptions ${ isActive ? 'activeLink' : ''} `}>
                { Icon && <Icon/> }
                { Icon ? <h4 aria-label="title4">{ title }</h4> : <h5 aria-label="title5" className="choiceOptions__title">{ title }</h5> }
            </NavLink>
        </li>
    )

};

SiderbarChoice.propTypes = {
    title: PropTypes.string.isRequired, 
    nav: PropTypes.string.isRequired
}