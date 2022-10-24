import PropTypes from 'prop-types';
import imageFavorite from '../../../img/favorite.png';
import './descriptionsList.scss';

export const DescriptionsList = ({ name, images, owner, followers, tracks }) => {

    return (
        <section className="DescriptionsList">
            <figure className="DescriptionsList__image">
                <img src={ images } alt="" className="DescriptionsList__img"/>
            </figure>
            <article className="DescriptionsList__infoText">
                <h5> LIST </h5>
                <p className="DescriptionsList__name-list">
                    { name }
                </p>
                <ul className="DescriptionsList__descrip-list">
                    <li className="DescriptionsList__owner"> { owner } - </li>
                    <li className="DescriptionsList__list"> { followers } " I like it " </li>
                    <li className="DescriptionsList__list"> { tracks } songs </li>
                </ul>
            </article>
        </section>
    )

}

DescriptionsList.propTypes = {
    name: PropTypes.string.isRequired,
    images: PropTypes.string,
    owner: PropTypes.string,
    followers: PropTypes.number,
    tracks: PropTypes.number,
}

DescriptionsList.defaultProps = {
    name: 'no title',
    images: imageFavorite,
    owner: 'no owner',
    followers: 0,
    tracks: 0,
}
