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
        <img src={playlist?.images[1]?.url} alt="" />
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
      <h1>Body</h1>
    </BodyContainer>
  )
}

const BodyContainer = styled.div`
  flex: 1;
  background: linear-gradient(#340034, #000);
  color: #fff;
  height: 100vh;
  padding: 50px 30px;
  overflow-y: overlay;
  &::-webkit-scrollbar{
    display: none;
  }
`
const Info = styled.div`
  display: flex;
  align-items: flex-end;
  padding: 10px;
  & img{
    width: 20vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px #000;
  }
`
const InfoText = styled.div`
  flex: 1;
  & h1{
    margin-bottom: 10px;
  }
`;
const Songs = styled.div`
  margin: 20px 10px;
`;
const Icons = styled.div`

`;

