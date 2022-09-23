import { AddBox, Favorite, Home, LibraryMusic, Menu, Search } from "@mui/icons-material"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { Images } from "../../atoms/images/images"
import { Line } from "../../atoms/line/line"
import { SiderbarChoice } from "../../molecules/SidebarChoise"

export const Sidebar = () => {
  
  return (
    <SidebarContainer>
      <Images src="../../../public/MyMusicApp.png" alt="logo"/>
      <Link to="/Playlist">
        <SiderbarChoice title="Inicio" Icon={Home} />
      </Link>
      <SiderbarChoice title="Buscar" Icon={Search} />
      <SiderbarChoice title="Tu Biblioteca" Icon={LibraryMusic} />
      <Line/>
      <SiderbarChoice title="Crear Playlist" Icon={AddBox} />
      <SiderbarChoice title="Tus me gusta" Icon={Favorite} />
    </SidebarContainer>
  )
}

const SidebarContainer = styled.div`
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
