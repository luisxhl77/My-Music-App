import { useSelector } from "react-redux";
import { DescriptionsList, IconsPlaylist, SongRow } from "../../molecules";
import imageFavorite from '../../../img/favorite.png';
import { Spinner } from "../../atoms";
import './mySavedTrack.scss';

export const MySavedTrack = () => {
  
  const { mySavedTracks } = useSelector( state => state.mySavedTracks );
  const { user } = useSelector( state => state.user );

  if( !mySavedTracks ){
    return (
      <Spinner/>
    )
  }

  return (
    <main className="mySavedTracks">

      <DescriptionsList 
        name={"Songs you like"} 
        tracks={ mySavedTracks?.total } 
        owner={ user?.display_name }
        images={ imageFavorite }
      />

      <section className="mySavedTracks__songs">
        <IconsPlaylist mySavedTracks={ true }/>
        <div className="mySavedTracks__list-songs">
          {
            mySavedTracks?.items.map(( item ) => (
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