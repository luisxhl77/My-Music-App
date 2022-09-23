import { Favorite, FavoriteBorder, PlayCircleFilled } from "@mui/icons-material";
import styled from "styled-components";

export const SongRow = ({track}) => {
    return (
        <SongRowContainer>
            <div className="musicConten">
                <PlayMusic>
                    <img src={track.album.images[0].url} alt="album"/>
                    <div className="play">
                        <PlayCircleFilled fontSize="large"/>
                    </div>
                </PlayMusic>
                <SongInfo>
                    <h4>{track.name}</h4>
                    <p>
                        {track.artists.map(artist => artist.name).join(', ')}
                    </p>
                </SongInfo>
            </div>
            <FavoriteBorder className="iconSongFavorite"/>
        </SongRowContainer>
    )
}
const PlayMusic = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    & .play{
        display: none;
    }
    &.play{
        color: white;
    }
    & img{
        height: 50px;
        width: 50px;
        margin: 0px 15px 0px 0px;
        object-fit: contain;
    }
`
const SongRowContainer = styled.div`
    height: 60px;
    padding: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    overflow: hidden;
    &:hover{
        cursor: pointer;
        background-color: #8f8f8f49;
        & .play{
            display: inherit;
            position: absolute;
            left: 7px;
            color: #ffffff;
        }
    }
    & .musicConten{
        display: flex;
        margin-left: 25px;
        align-items: center;
    }
    & .iconSongFavorite{
        width: 20px;
        margin: 0px 10px;
        &:hover{
            color: #a1a1a1;
        }
    }
`
const SongInfo = styled.div`
    & p{
        min-width: 60px;
        height: 19px;
        overflow: hidden;
    }
    & h4{
        min-width: 100px;
        height: 19px;
        overflow: hidden;
        margin-bottom: 2px;
    }
`