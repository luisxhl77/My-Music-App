import { useSelector } from "react-redux";
import { selectPlaylist } from "../../../store/slices/PlaylistSlice";
import { DescriptionsList } from "../../molecules/descriptionsList/DescriptionsList";
import { IconsPlaylist } from "../../molecules/iconsPlaylist/iconsPlaylist";
import { SongRow } from "../../molecules/songRow/SongRow";
import './playlist.scss';

export const Playlist = () => {
  const playlist = useSelector(selectPlaylist);
  const {tracks} = playlist;

  return (
    <main className="playlist">
      <DescriptionsList playlist ={playlist}/> 
      <div className="playlist__songs">
        <IconsPlaylist/>
        <div className="playlist__list-songs">
          {
            tracks?.items.map((item ,index) => (
              <SongRow track={item.track} key={index}/>
            ))
          }
        </div>
      </div>
    </main>
  )
}