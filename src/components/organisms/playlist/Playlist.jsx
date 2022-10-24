import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlaylists } from "../../../store/slices";
import { Spinner } from "../../atoms";
import { DescriptionsList, IconsPlaylist, SongRow } from "../../molecules";
import './playlist.scss';

export const Playlist = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const { playlist } = useSelector( state => state.playlist );

  useEffect(()=>{
    dispatch( getPlaylists( id ) );
  },[])

  if( !playlist ){
    return (
      <Spinner/>
    )
  }

  return (
    <main className="playlist">

      <DescriptionsList 
        name      = { playlist?.name } 
        tracks    = { playlist?.tracks?.total }
        images    = { playlist?.images[0]?.url } 
        followers = { playlist?.followers?.total } 
        owner     = { playlist?.owner?.display_name }
      />

      <section className="playlist__songs">
        <IconsPlaylist/>
        <div className="playlist__list-songs">
          {
            playlist?.tracks?.items.map(( item ) => (
              <SongRow 
                id     = { item?.track?.id }
                key    = { item?.track?.id }
                name   = { item?.track?.name }
                image  = { item?.track?.album?.images[0]?.url }
                artist = { item?.track?.artists.map(artist => artist.name).join(', ') } 
              />
            ))
          }
        </div>
      </section>

    </main>
  )
}