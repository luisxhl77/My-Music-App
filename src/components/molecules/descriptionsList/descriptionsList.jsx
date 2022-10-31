import PropTypes from 'prop-types';
// import imageFavorite from '../../../img/favorite.png';
import './descriptionsList.scss';

export const DescriptionsList = ({ name, images, owner, followers, tracks }) => {

    return (
        <section className="DescriptionsList">
            <figure className="DescriptionsList__image">
                <img src={ images } alt="coverList" className="DescriptionsList__img" aria-label='imageDescription'/>
            </figure>
            <article className="DescriptionsList__infoText">
                <h5> LIST </h5>
                <p className="DescriptionsList__name-list" aria-label='nameList'>
                    { name }
                </p>
                <ul className="DescriptionsList__descrip-list">
                    <li className="DescriptionsList__owner" aria-label='ownerList' >{ owner }</li>
                    <li className="DescriptionsList__list"  aria-label='followersList' >{ followers }<p> " I like it " </p></li>
                    <li className="DescriptionsList__list"  aria-label='tracksList' >{ tracks }<p> songs </p></li>
                </ul>
            </article>
        </section>
    )

}

DescriptionsList.propTypes = {
    name: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    tracks: PropTypes.number.isRequired,
}

DescriptionsList.defaultProps = {
    name: 'no title',
    images: '../../../img/favorite.png',
    owner: 'no owner',
    followers: 0,
    tracks: 0,
}
