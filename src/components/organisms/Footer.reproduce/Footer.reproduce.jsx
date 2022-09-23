import styled from "styled-components"
import { FooterCenter } from "../../molecules/FooterCenter"
import { FooterLeft } from "../../molecules/FooterLeft"
import { FooterRight } from "../../molecules/FooterRight"

export const FooterReproduce = () => {
  return (
    <Footer>
      <FooterLeft/>
      <FooterCenter/>
      <FooterRight/>    
    </Footer>
  )
}

const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  height: 90px;
  width: 100%;
  background-color: #181818;
  z-index: 2;
  color: #fff;
`
