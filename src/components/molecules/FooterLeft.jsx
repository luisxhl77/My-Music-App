import { AspectRatio, FavoriteBorder } from "@mui/icons-material";
import styled from "styled-components";

export const FooterLeft = () => {
    return (
        <Left>
            <img src="https://scontent.feoh1-1.fna.fbcdn.net/v/t31.18172-8/13173123_1561642394136585_4647316164601525701_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=19026a&_nc_ohc=OVmK4BrLnEkAX_CR3Ya&_nc_ht=scontent.feoh1-1.fna&oh=00_AT_A_Ty8_gLaOxjhTE8DdUxtPXy4EvdQbFe3tWM7W0684Q&oe=63501913" alt="cover" className="disk1" id="disk1"/>
            <div>
                <h4>Levels - Radio Edit</h4>
                <p>Avicii</p>
            </div>
            <FavoriteBorder className="icon"/>
            <AspectRatio className="icon"/>
        </Left>
    )
}
export const Left = styled.div`
    width: 30%;
    min-width: 280px;
    display: flex;
    align-items: center;
    color: #b2b2b2;
    transition: 300ms color ease-in;

    & .icon{
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
        font-size: 1.3vh;
        color: #fff;
        margin: 3px 0px 5px;
    }
    & p{
        font-size: 1.1vh;
    }
    & img{
        width: 56px;
        margin: 0px 20px 0px 16px;
        border-radius: 3px;
    }
`;