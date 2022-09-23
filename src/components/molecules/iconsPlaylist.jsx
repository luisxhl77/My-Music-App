import { FavoriteBorder, MoreHoriz, PlayCircleFilled } from "@mui/icons-material";
import styled from "styled-components"

export const IconsPlaylist = () => {
    return (
        <ContIcons>
            <Icons>
                <PlayCircleFilled className="playIcon"/>
                <FavoriteBorder className="favoriteIcon"/>
                <MoreHoriz fontSize="large"/>
            </Icons>
        </ContIcons>
    )
}

const ContIcons = styled.div`
    padding: 20px 10% 0px 10% ;
`
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