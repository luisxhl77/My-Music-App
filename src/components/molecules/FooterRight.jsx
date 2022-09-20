import { CreateOutlined, PhonelinkOutlined, PlaylistPlay, VolumeUpOutlined } from "@mui/icons-material";
import { Grid, Slider } from "@mui/material";
import styled from "styled-components";


export const FooterRight = () => {
  return (
    <FRight>
        <Grid container spacing={2}>
            <Grid item><CreateOutlined/></Grid>
            <Grid item><PlaylistPlay /></Grid>
            <Grid item><PhonelinkOutlined/></Grid>
            <Grid item><VolumeUpOutlined /></Grid>
            <Grid item><Slider /></Grid>
        </Grid>
    </FRight>
    )
}

export const FRight = styled.div`
    flex: 0.3;
    display: flex;
    & .MuiSlider-root{
        min-width: 90px;
        font-size: 1px;
        color: #fff;
        margin: 0px 20px 0px -10px;
        margin-right: 20px;
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
    & .MuiSvgIcon-root{
        font-size: 22px;
        cursor: pointer;
        color: #b2b2b2;
        margin: -3px;
        padding: 0px;
        &:hover{
            color: #fff;
            transition: 300ms color ease-in;
        }
    }
    & .MuiGrid-root{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
    }
`