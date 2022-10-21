import './descriptionsList.scss';
import imageFavorite from '../../../img/favorite.png'

export const DescriptionsList = ({name, images, owner, followers, tracks}) => {


    return (
        <section className="DescriptionsList">
            <figure className="DescriptionsList__image">
                <img src={ (images) ? images : imageFavorite } alt="" className="DescriptionsList__img"/>
            </figure>
            <article className="DescriptionsList__infoText">
                <h5> LIST </h5>
                <p className="DescriptionsList__name-list">
                    { name }
                </p>
                <ul className="DescriptionsList__descrip-list">
                    <li className="DescriptionsList__owner"> { owner } - </li>
                    <li className="DescriptionsList__list"> { followers } { (followers) ? '" I like it " - ' : "" } </li>
                    <li className="DescriptionsList__list"> { tracks } songs </li>
                </ul>
            </article>
        </section>
    )
}
