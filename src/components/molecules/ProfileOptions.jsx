import { ArrowDropDown } from "@mui/icons-material"
import { Avatar } from "@mui/material"
import styled from "styled-components"
import { useSelector } from "react-redux"
import { selectUser } from "../../store/slices/UserSlice";
import { Link } from "react-router-dom";

export const ProfileOptions = () => {
  const user = useSelector(selectUser);
  const {display_name, images, id} = user.user;

  return (
    <ProfileContainer>
      <Avatar src={ images[0].url } alt={ id }/>
      <h4>{ display_name }</h4>
      <ArrowDropDown/>
      <div className="aquifue">
        <div>
        <Link to="/Profile">
          <button>perfil</button>
        </Link>
          <button>salir</button>
        </div>
      </div>
    </ProfileContainer>
  )
}

const ProfileContainer = styled.div`
  padding: 0px 0px;
  display: flex;
  align-items: center;
  color: #fff;
  border-radius: 30px;
  &:hover{
    background-color: #b3b3b3;
    cursor: pointer;
    & .aquifue{
      display: inherit;
    }
  }
  & h4{
    margin: auto 10px;
  }
  & .aquifue{
    display: flex;
    justify-content: center;
    z-index: -1;
    top: 0;
    right: 0;
    position: absolute;
    padding-top: 65px;
    height: 100px;
    width: 20vh;
    color: white;
    background-color: #181818;
    display: none;
    & div{
      background-color: red;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
    }
  }
`
