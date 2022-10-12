import './descriptionsList.scss';
import icon from '../../../img/favorite.png'

export const DescriptionsList = ({name, images, owner, followers, tracks}) => {
    return (
        <div className="DescriptionsList">
            <figure className="DescriptionsList__image">
                <img src={ (images) ? images : icon } alt="" />
            </figure>
            <div className="DescriptionsList__infoText">
                <h5> LIST </h5>
                <p className="DescriptionsList__name-list">
                    { name }
                </p>
                <ul className="DescriptionsList__descrip-list">
                    <li className="DescriptionsList__list"> { owner } - </li>
                    <li className="DescriptionsList__list"> { followers } { (followers) ? '" I like it " - ' : "" } </li>
                    <li className="DescriptionsList__list"> { tracks } songs </li>
                </ul>
            </div>
        </div>
    )
}
