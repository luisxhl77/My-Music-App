import { PlayCircleFilled } from "@mui/icons-material"
import { Link } from "react-router-dom";
import './card.scss';
import iconSpotify from '../../../img/iconSpotify.jpg'

export const Card = ({ name, description, image, type, id }) => {

    return (
        <div className="card">
            <Link to={ `/playlist/${id}` } className="card__textLink"> 
                <div className="card__play-music">
                    <div className="card__image">
                        <img src={ ( image ) ? image : iconSpotify } alt="cover" className="card__img" id="disk1"/>
                    </div>
                    <PlayCircleFilled fontSize="large" className="btnPlay"/>
                </div>   
                <h5 className="card__name-playlist">{ name }</h5>
                <p className="card__description-playlist">{ description }</p>
                <p className="card__description-playlist">{ type }</p>
            </Link>
        </div>
    )
}