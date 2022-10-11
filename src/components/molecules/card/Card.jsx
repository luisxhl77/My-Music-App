import { PlayCircleFilled } from "@mui/icons-material"
import { Link } from "react-router-dom";
import './card.scss';

export const Card = ({name, description, image, type, id}) => {

    return (
                <Link to={`/Playlist/${id}`} className="card__textLink"> 
        <div className="card">
                <div className="card__play-music">
                    <figure className="card__image">
                        <img src={image} alt="cover" className="disk1" id="disk1"/>
                    </figure>
                    <PlayCircleFilled fontSize="large" className="btnPlay"/>
                </div>   
                <h5 className="card__name-playlist">{name}</h5>
                <p className="card__description-playlist">{description}</p>
                <p className="card__description-playlist">{type}</p>
            </div>
        </Link>
    )
}