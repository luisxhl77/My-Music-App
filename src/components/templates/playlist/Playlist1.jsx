import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlaylists } from "../../../store/slices";
import { Spinner } from "../../atoms";
import { DescriptionsList, IconsPlaylist, SongRow } from "../../molecules";
import imageFavorite from '../../../img/favorite.png'
import './playlist.scss';


export const Playlist = () => {

  const dispatch = useDispatch();
  const { id } = useParams();
  const { playlist } = useSelector( state => state.playlist );
  const { mySavedTracks } = useSelector( state => state.mySavedTracks );
  const { user } = useSelector( state => state.user );

  useEffect(()=>{
    dispatch( getPlaylists( id ) );
  },[])

  if( !playlist || !mySavedTracks ){
    return (
      <Spinner/>
    )
  }

  return (
    <main className="playlist">

      <DescriptionsList
        name      = { playlist ? playlist?.name                : "Songs you like"    } 
        images    = { playlist ? playlist?.images[0]?.url      : imageFavorite       } 
        owner     = { playlist ? playlist?.owner?.display_name : user?.display_name  } 
        followers = { playlist ? playlist?.followers?.total    : null                } 
        tracks    = { playlist ? playlist?.tracks?.total       : mySavedTracks?.total}
      />

      <section className="playlist__songs">
        <IconsPlaylist/>
        <div className="playlist__list-songs">
        { playlist ?
            playlist?.tracks?.items.map(( item ) => (
              <SongRow 
                track = { item?.track } 
                key   = { item?.track?.id }
              />
            ))
            :
            mySavedTracks?.items.map(( item ) => (
              <SongRow 
                track = { item?.track } 
                key   = { item?.track?.id }
              />
            ))
          }
        </div>
      </section>

    </main>
  )
}