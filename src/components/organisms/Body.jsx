import { Favorite, MoreHoriz, PlayCircleFilled } from "@mui/icons-material";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectPlaylist } from "../../features/PlaylistSlice";
import { SongRow } from "../molecules/SongRow";

export const Body = () => {
  const playlist = useSelector(selectPlaylist);
  return (
    <BodyContainer>
      <Info>
        <img src={playlist?.images[0]?.url} alt="" />
        <InfoText>
          <h4>PLAYLIST</h4>
          <p>{playlist?.name}</p>
        </InfoText>
      </Info>
      <Songs>
        <Icons>
          <PlayCircleFilled fontSize="large"/>
          <Favorite fontSize="large"/>
          <MoreHoriz fontSize="large"/>
        </Icons>
        {
          playlist?.tracks?.items.map((item, index) => (
            <SongRow track={item.track} key={index} />
          ))
        }
      </Songs>
    </BodyContainer>
  )
}

const BodyContainer = styled.div`
  flex: 1;
  background: linear-gradient( #466d82 1%,#000 62%);
  color: #fff;
  height: 100vh;
  padding: 110px 0px 70px;
  overflow-y: overlay;
  &::-webkit-scrollbar{
    display: none;
  }
`
const Info = styled.div`
margin: 0px 0px 0px 20px;
  display: flex;
  align-items: flex-end;
  padding: 10px;
  & img{
    width: 20vw;
    margin: 0px 25px 0px -15px;
    box-shadow: 0 2px 30px #000;
  }
`
const InfoText = styled.div`
  flex: 1;
  & h1{
    margin-bottom: 10px;
  }
`;
const Songs = styled.div`
  background: linear-gradient( #00000029 1%,#000 17%);
  margin: 20px 0px;
`;
const Icons = styled.div`

`;

