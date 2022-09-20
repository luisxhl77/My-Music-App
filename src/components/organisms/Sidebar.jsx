import { AddBox, Favorite, Home, LibraryMusic, Search } from "@mui/icons-material";
import { Line } from "../atoms/líne";
import { LogoLink } from "../molecules/logoLink";
import { SiderbarChoice } from "../molecules/SidebarChoise";
import styled from "styled-components";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <LogoLink/>
      <SiderbarChoice title="Inicio" Icon={Home} />
      <SiderbarChoice title="Buscar" Icon={Search} />
      <SiderbarChoice title="Tu Biblioteca" Icon={LibraryMusic} />
      <Line />
      <SiderbarChoice title="Crear Playlist" Icon={AddBox} />
      <SiderbarChoice title="Tus me gusta" Icon={Favorite} />
      <Line/>
      <SiderbarChoice title="Reggeton" />
      <SiderbarChoice title="DanceHall" />
    </SidebarContainer>
  )
};

//estyle
export const SidebarContainer = styled.div`
  font-size: 0.875rem;
  flex: 0.1;
  height: 100vh;
  background-color: #000000;
  min-width: 240px;
  color: #fff;
`;
