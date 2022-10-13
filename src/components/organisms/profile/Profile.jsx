import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import './profile.scss';

export const Profile = () => {
  const { user } = useSelector(state => state.user);
  const {followers, display_name, images, id, email} = user;
  
  return (
    <main className="profile">
      <Avatar src={ images[0]?.url } alt={ id } className="profile__image"/>
      <h2 className="profile__name-data">Nombre</h2>
      <p className="profile__data">{display_name}</p>
      <h2 className="profile__name-data">seguidores</h2>
      <p className="profile__data"> {followers?.total} </p>
      <h2 className="profile__name-data">E-mail</h2>
      <p className="profile__data">{email}</p>
    </main>
  )
}
