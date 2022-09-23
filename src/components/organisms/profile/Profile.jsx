import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { selectUser } from "../../../store/slices/UserSlice";
import { BodyContainer } from "../body/Body";
export const Profile = () => {
  const user = useSelector(selectUser);
  console.log(user);
  const {followers, display_name, images, id} = user.user;
  return (
    <BodyContainer>
      <ProfileContainer>
        <Avatar src={ images[0].url } alt={ id } className="Nino"/>
        <label htmlFor="name">nombre</label>
        <input type="text" name="" id="name" placeholder={display_name}/>
        <label htmlFor="followers">seguidores</label>
        <input type="text" name="" id="followers" placeholder={followers.total}/>
      </ProfileContainer>
    </BodyContainer>
  )
}

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  & .Nino{
    width: 200px;
    height: 200px;
    }
  & input{
    text-align: center;
  }
`