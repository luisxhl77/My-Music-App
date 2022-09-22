import { PlayCircle, Repeat, Shuffle, SkipNext, SkipPrevious } from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";
import styled from "styled-components";

export const FooterCenter = () => {
    return (
        <FCenter>
            <OptionsPlay>
                <Shuffle className="iconPlayer"/>
                <SkipPrevious className="iconPlayer"/>
                <PlayCircle className="btnPlay"/>
                <SkipNext className="iconPlayer"/>
                <Repeat className="iconPlayer"/>
            </OptionsPlay>
            <Grid container spacing={2}>
                <p>2:32</p>
                <Slider/>
                <p>1:28</p>
            </Grid>
        </FCenter>
    )
}
//style
const FCenter = styled.div`
    width: 40%;
    min-width: 300px;
    max-width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #b2b2b2;
    & .MuiGrid-root{
        padding-top: 12px;
        display: flex;
        max-width: 300px;
        min-width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        & p{
            font-size: 1.2vh;
            margin: 0px 7px;
        }
    }
    & .MuiSlider-root{
        width: 70%;
        height: 14%;
        color: #fff;
        & .MuiSlider-thumb{
            height: 0px;       
            width: 0px;
            color: #fff;
        }
        &:hover{
            color: #00ff00;
            & .MuiSlider-thumb{
                height: 10px;
                width: 10px;
            }
        }
    }

`;
const OptionsPlay = styled.div`
    padding: 1px 0px;
    display: flex;
    min-width: 40%;
    justify-content: space-evenly;
    align-items: center;
    & .iconPlayer{
        font-size: 29px;
        cursor: pointer;
        &:hover{
            color: #fff;
            transition: 300ms color ease-in;
        }
        &:active{
            color: #b2b2b2;
            transition: none;
        }
    }
    & .btnPlay{
        font-size: 42px;
        color: #fff;
        cursor: pointer;
    }
`;