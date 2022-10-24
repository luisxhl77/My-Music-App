import { useSelector } from "react-redux";
import { Avatar } from "@mui/material";
import './profile.scss';

export const Profile = () => {
  const { user } = useSelector(state => state.user);
  
  return (
    <main className="profile">
      <Avatar src={ user?.images[0]?.url } alt={ user?.id } className="profile__image"/>
      <h2 className="profile__name-data">Nombre</h2>
      <p className="profile__data">{ user?.display_name }</p>
      <h2 className="profile__name-data">seguidores</h2>
      <p className="profile__data"> { user?.followers?.total } </p>
      <h2 className="profile__name-data">E-mail</h2>
      <p className="profile__data">{ user?.email }</p>
    </main>
  )
}
