import { FavoriteBorder, PlayCircleFilled } from "@mui/icons-material";
import './songRow.scss';

export const SongRow = ({track}) => {
    return (
        <section className="songRow">
            <div className="songRow__info-music">
                
                <div className="songRow__play-music">
                
                    <figure className="songRow__image">

                        <img src={ track?.album?.images[0]?.url } alt="album"/>
                        <span className="songRow__play">
                            <PlayCircleFilled fontSize="large"/>
                        </span>

                    </figure>
                
                </div>
                <div className="songRow__song-info">

                    <h4 className="songRow__titleSong"> { track?.name } </h4>
                    <p className="songRow__description"> { track.artists.map(artist => artist.name).join(', ')} </p>
               
                </div> 
            
            </div>
            <FavoriteBorder className="songRow__icon-favorite"/>
        </section>
    )
}