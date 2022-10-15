import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMySavedTrack } from "../../../store/slices/mySavedTracks/thunks";
import { getUser } from "../../../store/slices/user/thunks";
import { Spinner } from "../../atoms/spinner/Spinner";
import { DescriptionsList } from "../../molecules/descriptionsList/DescriptionsList";
import { IconsPlaylist } from "../../molecules/iconsPlaylist/iconsPlaylist";
import { SongRow } from "../../molecules/songRow/SongRow";
import './mySavedTrack.scss';

export const MySavedTrack = () => {
  const dispatch = useDispatch();
  const { mySavedTracks } = useSelector(state => state.mySavedTracks);
  const { user } = useSelector(state => state.user);

  useEffect(() => {
    dispatch( getMySavedTrack() );
    dispatch(getUser());
  }, [])

  if( !mySavedTracks ){
    return (
      <Spinner/>
    )
  }

  return (
    <main className="mySavedTracks">
      <DescriptionsList name={"Songs you like"} tracks={mySavedTracks.total} owner={user.display_name}/>
      <div className="mySavedTracks__songs">
        <IconsPlaylist mySavedTracks={true}/>
        <div className="mySavedTracks__list-songs">
          {
            mySavedTracks?.items.map(( item ) => (
              <SongRow track={item?.track} key={item?.track?.id}/>
            ))
          }
        </div>
      </div>
    </main>
  )
}