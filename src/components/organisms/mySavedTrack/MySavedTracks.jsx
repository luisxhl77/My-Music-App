import { useSelector } from "react-redux";
import { DescriptionsList, IconsPlaylist, SongRow } from "../../molecules";
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
      <DescriptionsList name={"Songs you like"} tracks={ mySavedTracks?.total } owner={ user?.display_name }/>
      <div className="mySavedTracks__songs">
        <IconsPlaylist mySavedTracks={ true }/>
        <div className="mySavedTracks__list-songs">
          {
            mySavedTracks?.items.map(( item ) => (
              <SongRow 
                track = { item?.track } 
                key   = { item?.track?.id }
              />
            ))
          }
        </div>
      </div>
    </main>
  )
}