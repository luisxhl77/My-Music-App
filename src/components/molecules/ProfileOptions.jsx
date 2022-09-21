import { ArrowDropDown } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { selectUser } from "../../features/UserSlice";

export const ProfileOptions = () => {
  const user = useSelector(selectUser);
  const {display_name, images, id} = user.user;

  return (
    <ProfileContainer>
      <Avatar src={ images[0].url } alt={ id }/>
      <h4>{ display_name }</h4>
      <ArrowDropDown/>
    </ProfileContainer>
  )
}

const ProfileContainer = styled.div`
  padding: 0px 5px;
  display: flex;
  align-items: center;
  color: #fff;
  border-radius: 12px;
  &:hover{
    background-color: #b3b3b3;
    cursor: pointer;
  }
  & h4{
    margin: auto 10px;
  }
`
