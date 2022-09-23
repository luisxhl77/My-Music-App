import styled from "styled-components"
import { DeploymentArrow } from "../molecules/DeploymentArrow";
import { ProfileOptions } from "../molecules/ProfileOptions";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <DeploymentArrow/>
      </HeaderLeft>
      <ProfileOptions/>
    </HeaderContainer>
  )
}


const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 65px;
  color: white;
  background-color: #181818;
`
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;
