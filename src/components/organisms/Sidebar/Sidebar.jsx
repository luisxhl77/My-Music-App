import { AddBox, Favorite, Home, LibraryMusic, Menu, Search } from "@mui/icons-material"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Images } from "../../atoms/images/images"
import { Line } from "../../atoms/line/line"
import { SiderbarChoice } from "../../molecules/SidebarChoise"

export const Sidebar = () => {
  
  return (
    <SidebarContainer>
      <Link to="/Home">
        <Images src="../../../public/MyMusicApp.png" alt="logo"/>
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

      <Line/>

      <Link to="/">
        <SiderbarChoice title="Crear Playlist" Icon={ AddBox } />
      </Link>

      <Link to="/Playlist">
        <SiderbarChoice title="Tus me gusta" Icon={ Favorite } />
      </Link>

    </SidebarContainer>
  )
}

const SidebarContainer = styled.nav`
  position: fixed;
  width: 45px;
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #000000;
  color: #fff;
  overflow: hidden;
  z-index: 1;
  :hover{
    width: 200px;
  }
`
