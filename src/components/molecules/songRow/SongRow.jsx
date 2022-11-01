import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { addInMySavedTracks, setAccessTokenUser } from '../../../store/slices';
import { FavoriteBorder, PlayCircleFilled } from "@mui/icons-material";
import './songRow.scss';

export const SongRow = ({ id, name, image, artist }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( setAccessTokenUser(window.localStorage.getItem("token")) );
        dispatch( addInMySavedTracks( id ) ); 
    }, [])

    return (
        <div className="songRow">
            <div className="songRow__info-music">
                
                <div className="songRow__play-music">
                
                    <figure className="songRow__image">

                        <img src={ image } alt={id} aria-label='imageSong'/>
                        <span className="songRow__play" >
                            <PlayCircleFilled fontSize="large"/>
                        </span>

                    </figure>
                
                </div>
                <div className="songRow__song-info" >

                    <h4 className="songRow__titleSong" aria-label='titleSong'> { name } </h4>
                    <p className="songRow__description" aria-label='artisSong'> { artist } </p>
               
                </div> 
            
            </div>
            <FavoriteBorder className="songRow__icon-favorite" onClick={ () => dispatch( addInMySavedTracks( id ) ) }/>
        </div>
    )
}

SongRow.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    artist: PropTypes.string,
}

SongRow.defaultProps = {
    id: 'no title',
    name: 'no name',
    image: '../../../img/iconSpotify.jpg',
    artist: 'no artist',
}