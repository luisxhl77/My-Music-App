import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { PlayCircleFilled } from '@mui/icons-material';
import './card.scss';

export const Card = ({ name, description, image, type, id }) => {

    return (
        <div className="card">
            <Link to={ `/playlist/${id}` } className="card__textLink"> 
                <div className="card__play-music">
                    <div className="card__image">
                        <img src={ image } alt="cover" className="card__img" id="disk1" aria-label='imageCard'/>
                    </div>
                    <PlayCircleFilled fontSize="large" className="btnPlay"/>
                </div>
                <h5 className="card__name-playlist" aria-label='nameCard'>{ name }</h5>
                <p className="card__description-playlist" aria-label='descriptionCard'>{ description }</p>
                <p className="card__description-playlist" aria-label='typeCard'>{ type }</p>
            </Link>
        </div>
    )
}

Card.propTypes = {
    id          : PropTypes.string.isRequired,
    name        : PropTypes.string.isRequired,
    type        : PropTypes.string,
    image       : PropTypes.string,
    description : PropTypes.string.isRequired,
}

Card.defaultProps = {
    name        : 'no title',
    type        : 'no type',
    image       : '../../../img/iconSpotify.jpg',
    description : 'No description',
}