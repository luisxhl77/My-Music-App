import { AspectRatio, FavoriteBorder } from "@mui/icons-material";
import styled from "styled-components";

export const FooterLeft = () => {
    return (
        <Left>
            <img src="https://scontent.feoh1-1.fna.fbcdn.net/v/t31.18172-8/13173123_1561642394136585_4647316164601525701_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=19026a&_nc_ohc=OVmK4BrLnEkAX_CR3Ya&_nc_ht=scontent.feoh1-1.fna&oh=00_AT_A_Ty8_gLaOxjhTE8DdUxtPXy4EvdQbFe3tWM7W0684Q&oe=63501913" alt="cover" className="disk1" id="disk1"/>
            <div>
                <h4>Levels -Radio Edit</h4>
                <p>Avicii</p>
            </div>
            <FavoriteBorder/>
            <AspectRatio/>
        </Left>
    )
}
export const Left = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    min-width: 300px;
    color: #b2b2b2;
    transition: 300ms color ease-in;

    & .MuiSvgIcon-root{
        margin: auto 8px;
        font-size: 18px;
        cursor: pointer;
        &:hover{
            color: #fff;
        }
    }
    & div{
        margin-right: 17px;
    }
    & h4{
        color: #fff;
    }
    & img{
        width: 56px;
        margin: 0px 16px;
        border-radius: 3px;
    }
`;