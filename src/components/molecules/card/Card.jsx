import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PlayCircleFilled } from '@mui/icons-material';
import iconSpotify from '../../../img/iconSpotify.jpg';
import './card.scss';

export const Card = ({ name, description, image, type, id }) => {

    return (
        <div className="card">
            <Link to={ `/playlist/${id}` } className="card__textLink"> 
                <div className="card__play-music">
                    <div className="card__image">
                        <img src={ image } alt="cover" className="card__img" id="disk1"/>
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

Card.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
}

Card.defaultProps = {
    name: 'no title',
    description: 'No description',
    image: iconSpotify,
    type: 'no type',
}