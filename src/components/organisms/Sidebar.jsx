import { AddBox, Favorite, Home, LibraryMusic, Search } from "@mui/icons-material";
import { Line } from "../atoms/líne";
import { LogoLink } from "../molecules/logoLink";
import { SiderbarChoice } from "../molecules/SidebarChoise";
import styled from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import { Logo } from "../atoms/Logo";

const Prueba = () => {
  return (<h1>PRUEBA 1</h1>)
}
const Prueba2 = () => {
  return (<h1>PRUEBA 2</h1>)
}

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <Link to="/">
        <LogoLink/>
        <Logo/>
      </Link>
      <Link to="/">
        <SiderbarChoice title="Inicio" Icon={Home} />
      </Link>
      <Link to="/Shearch">
        <SiderbarChoice title="Buscar" Icon={Search} />
      </Link>
      <Link to="/Prueba">
        <SiderbarChoice title="Tu Biblioteca" Icon={LibraryMusic} />
      </Link>
      <Line />
      <Link to="/Prueba2">
        <SiderbarChoice title="Crear Playlist" Icon={AddBox} />
      </Link>
      <Link to="/Prueba">
        <SiderbarChoice title="Tus me gusta" Icon={Favorite} />
      </Link>
      <Line/>
      <SiderbarChoice title="Reggeton" />
      <SiderbarChoice title="DanceHall" />

      <Routes>
        <Route path="/Prueba" element={ <Prueba/> }/>
        <Route path="/Prueba2" element={ <Prueba2/> }/>
      </Routes>
    </SidebarContainer>
  )
};

//estyle
const SidebarContainer = styled.div`

  font-size: 0.875rem;
  flex: 0.1;
  height: 100vh;
  background-color: #000000;
  min-width: 240px;
  color: #fff;
`;
