import { ArrowDropDown } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import styled from "styled-components"

export const ProfileOptions = () => {
  return (
    <ProfileContainer>
        <Avatar/>
        <h4>LUCHO LOPEZ</h4>
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
