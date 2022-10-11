import { Favorite, Home, LibraryMusic, Search } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { SiderbarChoice } from "../../molecules/sidebarChoise/SidebarChoise"
import './sidebar.scss';

export const Sidebar = () => {
  
  return (
    <nav className="nav">
      <Link to="/Home">
        <figure className="nav__logo">
          <img src="../../../public/MyMusicApp.png" alt="logo"/>
        </figure>
      </Link>

      <SiderbarChoice title="Home" Icon={ Home } nav="/Home" />

      <SiderbarChoice title="search" Icon={ Search } nav="/Search" />

      <SiderbarChoice title="your library" Icon={ LibraryMusic } nav="/Library" />

      <hr className="nav__line"/>

      <SiderbarChoice title="I like you" Icon={ Favorite } nav="/Playlist" />
    </nav>
  )
}