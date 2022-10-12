import { Favorite, Home, LibraryMusic, Search } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { SiderbarChoice } from "../../molecules/sidebarChoise/SidebarChoise"
import logoMyMusicApp from '../../../img/MyMusicApp.png'
import './sidebar.scss';

export const Sidebar = () => {
  
  return (
    <nav className="nav">
      <Link to="/home">
        <figure className="nav__logo">
          <img src={ logoMyMusicApp } alt="logo"/>
        </figure>
      </Link>

      <SiderbarChoice title="Home" Icon={ Home } nav="/home" />

      <SiderbarChoice title="search" Icon={ Search } nav="/search" />

      <SiderbarChoice title="your library" Icon={ LibraryMusic } nav="/library" />

      <hr className="nav__line"/>

      <SiderbarChoice title="I like you" Icon={ Favorite } nav="/playlist/:id" />
    </nav>
  )
}