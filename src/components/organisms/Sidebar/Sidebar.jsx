import { AddBox, Favorite, Home, LibraryMusic, Search } from "@mui/icons-material"
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
        <SiderbarChoice title="Inicio" Icon={ Home } />
      </Link>
      <Link to="/">
        <SiderbarChoice title="Buscar" Icon={ Search } />
      </Link>
      <Link to="/Playlist">
        <SiderbarChoice title="Tu Biblioteca" Icon={ LibraryMusic } />
      </Link>
      <hr className="nav__line"/>
      <Link to="/">
        <SiderbarChoice title="Crear Playlist" Icon={ AddBox } />
      </Link>
      <Link to="/Playlist">
        <SiderbarChoice title="Tus me gusta" Icon={ Favorite } />
      </Link>
    </nav>
  )
}