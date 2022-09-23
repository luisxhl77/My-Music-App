import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectPlaylist } from "../../../store/slices/PlaylistSlice";
import { DescriptionsList } from "../../molecules/descriptionsList/descriptionsList";
import { IconsPlaylist } from "../../molecules/iconsPlaylist";
import { SongRow } from "../../molecules/SongRow";

export const Body = () => {
  const playlist = useSelector(selectPlaylist);
  const {tracks} = playlist

  return (
    <BodyContainer>
      <DescriptionsList playlist ={playlist}/> 
      <Songs>
        <IconsPlaylist/>
        <ListSong>
          {
            tracks?.items.map((item) => (
              <SongRow track={item.track} />
            ))
          }
        </ListSong>
      </Songs>
    </BodyContainer>
  )
}


export const BodyContainer = styled.main`
  width: 100%;
  background: linear-gradient( #466d82 1%,#000 72%);
  margin-top: 6.7vh;
  color: #fff;
  height: 80vh;
  padding: 60px 0px 0px 0px;
  overflow: auto;
  &::-webkit-scrollbar{
    background-color: #000000a0;
    width: 1vh;
  }
  &::-webkit-scrollbar-thumb{            /*Diseño del scroll*/
    background-color: rgb(255, 255, 255);
  }
  &::-webkit-scrollbar-thumb:hover{      /*Reaccion del scroll*/
    background-color: rgb(139, 248, 50);
  }
`;
const Songs = styled.div`
  background-color: #1f1e1e29;
  margin: 20px 0px;
  width: 100%;
`;
const ListSong = styled.div`
  padding: 20px 10% 0px 10% ;
`;

