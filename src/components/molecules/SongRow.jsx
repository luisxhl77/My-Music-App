import styled from "styled-components";

export const SongRow = ({track}) => {
    console.log(track.length)
  return (
    <SongRowContainer>
        <img src={track.album.images[0].url} alt="album"/>
        <SongInfo>
            <h4>{track.name}</h4>
            <p>
                {
                    track.artists.map(artist => artist.name).join(', ')
                }
                {
                    track.album.name
                }
            </p>
        </SongInfo>
    </SongRowContainer>
  )
}

const SongRowContainer = styled.div`
    padding: 10px 0px;
    display: flex;
    margin-left: 25px;
    align-items: center;
    z-index: 90;
    color: #fff;
    &:hover{
        cursor: pointer;
        background-color: #000000;
        opacity: 0.8;
    }
    & img{
        height: 50px;
        width: 50px;
        object-fit: contain;
    }
`
const SongInfo = styled.div`
    
`