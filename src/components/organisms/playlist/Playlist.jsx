import { useSelector } from "react-redux";
import { DescriptionsList } from "../../molecules/descriptionsList/DescriptionsList";
import { IconsPlaylist } from "../../molecules/iconsPlaylist/iconsPlaylist";
import { SongRow } from "../../molecules/songRow/SongRow";
import './playlist.scss';

export const Playlist = () => {
  const {playlist} = useSelector(state => state.playlist)

  return (
    <main className="playlist">
      <DescriptionsList {...playlist}/> 
      <div className="playlist__songs">
        <IconsPlaylist/>
        <div className="playlist__list-songs">
          {
            playlist?.tracks?.items.map((item ,index) => (
              <SongRow track={item.track} key={index}/>
            ))
          }
        </div>
      </div>
    </main>
  )
}