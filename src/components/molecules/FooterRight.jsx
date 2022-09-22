import { CreateOutlined, PhonelinkOutlined, PlaylistPlay, VolumeUpOutlined } from "@mui/icons-material";
import { Slider } from "@mui/material";
import styled from "styled-components";


export const FooterRight = () => {
  return (
    <FRight >
        <CreateOutlined className="icon"/>
        <PlaylistPlay  className="icon"/>
        <PhonelinkOutlined className="icon"/>
        <Volume>
            <VolumeUpOutlined />
            <Slider className="Slider"/>
        </Volume>
    </FRight>
    )
}

export const FRight = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    & .icon{
        margin: 0px 5px;
    }
`
const Volume = styled.div`
    display: flex;
    padding:0px 15px 0px 5px;
    align-items: center;
    & .Slider{
        margin-left: 5px;
        min-width: 80px;
        font-size: 1px;
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
`