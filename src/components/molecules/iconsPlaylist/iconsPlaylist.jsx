import { FavoriteBorder, MoreHoriz, PlayCircleFilled } from "@mui/icons-material";
import './iconsPlaylist.scss';

export const IconsPlaylist = () => {
  return (
    <div className="iconsPlaylist">
      <PlayCircleFilled className="play-icon"/>
      <FavoriteBorder className="favorite-icon"/>
      <MoreHoriz fontSize="large" className="option-Icon"/>
    </div>
  )
}