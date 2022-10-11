import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import { getPlaylists } from "../../../store/slices/playlists/thunks";
import { DescriptionsList } from "../../molecules/descriptionsList/DescriptionsList";
import { IconsPlaylist } from "../../molecules/iconsPlaylist/iconsPlaylist";
import { SongRow } from "../../molecules/songRow/SongRow";
import './playlist.scss';

export const Playlist = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const { playlist } = useSelector(state => state.playlist)
  
  useEffect(()=>{
    dispatch( getPlaylists(id) );
  },[])

  if( !playlist ){
    return <Navigate to= "/Home"/>
  }

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