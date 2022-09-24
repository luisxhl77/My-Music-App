import styled from "styled-components"
import { PlayCircleFilled } from "@mui/icons-material"

export const Card = ({name, description, image, type}) => {
    return (
        <CardContainer>
            <PlayMusicContainer>
                <img src={image} alt="cover" className="disk1" id="disk1"/>
                <PlayCircleFilled fontSize="large" className="btnPlay"/>
            </PlayMusicContainer>   
            <h5>{name}</h5>
            <p>{description}</p>
            <p>{type}</p>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    display: inline-block;
    padding: 20px 10px;
    height: 28vh;
    min-width: 16vh;
    max-width: 17vh;
    margin: 20px;
    background-color: #171717;
    border-radius: 10px;
    transition: 300ms background-color ease-in, 300ms color ease-in, 300ms display ease-in; 
    cursor: pointer;
    & h5{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 100%;
        height: 17px;
        margin: 15px 0px 5px;
    }
    & p{
        overflow: hidden;
        white-space: wrap;
        text-overflow: ellipsis;
        font-size: 14px;
        height: 35px;
        color: #b2b2b2;
        margin: 0px 0px 20px 0px;
    }
    &:hover{
        background-color: #3a3a3a8a;
        & .btnPlay{
            display: inherit;
        }
    }
`
const PlayMusicContainer = styled.div`
    position: relative;

    & .btnPlay{
        position: absolute;
        bottom: 3px;
        right: 3px;
        display: none;
    }
    & img{
        height: 160px;
        width: 100%;
        object-fit: contain;
        border-radius: 10px;
    }
`