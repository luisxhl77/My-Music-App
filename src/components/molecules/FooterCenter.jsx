import { PlayCircle, Repeat, Shuffle, SkipNext, SkipPrevious } from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";
import styled from "styled-components";

export const FooterCenter = () => {
    return (
        <FCenter>
            <OptionsPlay>
                <Shuffle/>
                <SkipPrevious id="buttonSkip"/>
                <PlayCircle id="buttonPlay"/>
                <SkipNext id="buttonReturn"/>
                <Repeat/>
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
    flex: 0.4;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    min-width: 300px;
    max-width: 100%;
    color: #b2b2b2;
    & .MuiGrid-root{
        padding-top: 12px;
        display: flex;
        max-width: 300px;
        min-width: 100%;
        justify-content: space-evenly;
        display: flex;
        align-items: center;
        & p{
            font-size: 12px;
        }
    }
    & .MuiSlider-root{
        width: 80%;
        font-size: 1px;
        margin: auto 0px;
        color: #fff;
        &:hover{
            color: #00ff00;
            & .MuiSlider-thumb{
                height: 10px;
                width: 10px;
                color: #fff;
                display: block;
            }
        }
    }
`;
const OptionsPlay = styled.div`
    padding: 12px 0px 0px;
    display: flex;
    max-width: 300px;
    min-width: 40%;
    justify-content: space-evenly;
    align-items: center;
    & .MuiSvgIcon-root{
        margin: 0px -10px;
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
`;