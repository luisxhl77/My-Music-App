import styled from "styled-components";
import { FooterCenter } from "../molecules/FooterCenter";
import { FooterLeft } from "../molecules/FooterLeft";
import { FooterRight } from "../molecules/FooterRight";

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterLeft/>
            <FooterCenter/>
            <FooterRight/>
        </FooterContainer>
    )
}
const FooterContainer = styled.div`
    position: fixed;
    display: flex;
    justify-content: space-between;
    bottom: 0;
    height: 90px;
    width: 100vw;
    background-color: #181818;
    color: #fff;
    & .MuiSlider-thumb{
        display: none;
    }
`;