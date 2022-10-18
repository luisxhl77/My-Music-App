import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlaylists } from "../../../store/slices/playlists/thunks";
import { Spinner } from "../../atoms/spinner/Spinner";
import { DescriptionsList } from "../../molecules/descriptionsList/DescriptionsList";
import { IconsPlaylist } from "../../molecules/iconsPlaylist/iconsPlaylist";
import { SongRow } from "../../molecules/songRow/SongRow";
import './playlist.scss';

export const Playlist = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const { playlist } = useSelector(state => state.playlist);

  useEffect(()=>{
    dispatch( getPlaylists(id) );
  },[])

  if( !playlist ){
    return (
      <Spinner/>
    )
  }

  return (
    <main className="playlist">
      <DescriptionsList 
        name={ playlist?.name } 
        images={ playlist.images[0]?.url} 
        owner={ playlist?.owner?.display_name } 
        followers={ playlist?.followers?.total} 
        tracks={ playlist?.tracks?.total }
      />
      <section className="playlist__songs">
        <IconsPlaylist/>
        <div className="playlist__list-songs">
          {
            playlist?.tracks?.items.map(( item ) => (
              <SongRow track={item.track} key={item.track.id}/>
            ))
          }
        </div>
      </section>
    </main>
  )
}