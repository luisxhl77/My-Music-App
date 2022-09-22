import { Route, Routes } from "react-router-dom"
import styled from "styled-components"
import { DeploymentArrow } from "../molecules/DeploymentArrow"
import { ProfileOptions } from "../molecules/ProfileOptions"
import { Seeker } from "../molecules/Seeker"

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <DeploymentArrow/>
        <Routes>
          <Route path="/Shearch" element={ <Seeker/> }/>
        </Routes>
      </HeaderLeft>
      <ProfileOptions/>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  position: fixed;
  width: 87.5%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  color: white;
`
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
