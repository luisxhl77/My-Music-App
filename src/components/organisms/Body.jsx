import { FavoriteBorder, MoreHoriz, PlayCircleFilled } from "@mui/icons-material";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectPlaylist } from "../../features/PlaylistSlice";
import { SongRow } from "../molecules/SongRow";

export const Body = () => {
  const playlist = useSelector(selectPlaylist);
  console.log(playlist);
  return (
    <BodyContainer>
      <Info>
        <div className="contInfo">
          <img src={playlist?.images[0]?.url} alt="" />
          <InfoText>
            <h5>LISTA</h5>
            <p className="nameList">{playlist?.name}</p>
            <p className="descripList">{playlist?.owner?.display_name}. {playlist?.followers?.total} "me gusta" {playlist?.tracks?.total} canciones</p>
          </InfoText>
        </div>
      </Info>
      <Songs>
        <div className="contIcons">
          <Icons>
            <PlayCircleFilled className="playIcon"/>
            <FavoriteBorder className="favoriteIcon"/>
            <MoreHoriz fontSize="large"/>
          </Icons>
        </div>
        <ListSong>
          {
            playlist?.tracks?.items.map((item, index) => (
              <SongRow track={item.track} key={index} />
            ))
          }
        </ListSong>
      </Songs>
    </BodyContainer>
  )
}


export const BodyContainer = styled.div`
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
const Info = styled.div`
  & .contInfo{
    display: flex;
    align-items: flex-end;
    padding: 20px 10% 0px 10%;
  }
  & img{
    width: 25vw;
    margin: 0px 25px 0px 20px;
    box-shadow: 0 2px 30px #000;
  }
  & .nameList{
    font-size: 5vw;
  }
  & .descripList{
    color: #a1a1a1;
  }

`;
const InfoText = styled.div`
  flex: 1;
  & h1{
    margin-bottom: 10px;
  }
`;
const Songs = styled.div`
  background-color: #1f1e1e29;
  margin: 20px 0px;
  width: 100%;
  & .contIcons{
    padding: 20px 10% 0px 10% ;
  }
`;

const ListSong = styled.div`
  padding: 20px 10% 0px 10% ;
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 0px 0px 15px;
  & .playIcon{
    color: #00ff22;
    font-size: 70px;
    margin: 0px 10px 0px 0px;
    cursor: pointer;
  }
  & .favoriteIcon{
    font-size: 40px;
    margin: 0px 10px 0px 0px;
    cursor: pointer;
    &:hover{
      color: #a1a1a1;
    }
  }
`;
