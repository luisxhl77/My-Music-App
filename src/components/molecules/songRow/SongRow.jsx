import { FavoriteBorder, PlayCircleFilled } from "@mui/icons-material";
import './songRow.scss';

export const SongRow = ({track, mySavedTracks}) => {
    return (
        <section className="songRow">
            <div className="songRow__info-music">
                <div className="songRow__play-music">
                    <figure className="songRow__image">
                        <img src={ (track) ? track?.album?.images[0]?.url : mySavedTracks?.album?.images[0]?.url} alt="album"/>
                        <span className="songRow__play">
                            <PlayCircleFilled fontSize="large"/>
                        </span>
                    </figure>
                </div>
                <div className="songRow__song-info">
                    <h4>{(track) ? track?.name : mySavedTracks?.name}</h4>
                    <p>
                        {(track) ? track.artists.map(artist => artist.name).join(', ') : mySavedTracks.artists.map(artist => artist.name).join(', ')}
                    </p>
                </div> 
            </div>
            <FavoriteBorder className="songRow__icon-favorite"/>
        </section>
    )
}