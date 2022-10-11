import { Favorite, Home, LibraryMusic, Search } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { SiderbarChoice } from "../../molecules/SidebarChoise"
import './sidebar.scss';

export const Sidebar = () => {
  
  return (
    <nav className="nav">
      <Link to="/Home">
        <figure className="nav__logo">
          <img src="../../../public/MyMusicApp.png" alt="logo"/>
        </figure>
      </Link>
      <Link to="/Home">
        <SiderbarChoice title="Home" Icon={ Home } />
      </Link>
      <Link to="/">
        <SiderbarChoice title="search" Icon={ Search } />
      </Link>
      <Link to="/Playlist">
        <SiderbarChoice title="your library" Icon={ LibraryMusic } />
      </Link>
      <hr className="nav__line"/>
      <Link to="/Playlist">
        <SiderbarChoice title="I like you" Icon={ Favorite } />
      </Link>
    </nav>
  )
}