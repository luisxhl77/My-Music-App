import { FavoriteBorder, MoreHoriz, PlayCircleFilled } from "@mui/icons-material";
import './iconsPlaylist.scss';

export const IconsPlaylist = ({mySavedTracks}) => {
  return (
    <div className="iconsPlaylist">
      <PlayCircleFilled className="play-icon"/>
      {
        (!mySavedTracks) ?
        <FavoriteBorder className="favorite-icon"/> : <></>
      }
      {
        (!mySavedTracks) ?
        <MoreHoriz fontSize="large" className="option-Icon"/> : <></>
      }
    </div>
  )
}