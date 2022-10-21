import { AspectRatio, FavoriteBorder } from "@mui/icons-material";
import './footerleft.scss';
import iconSpotify from '../../../img/iconSpotify.jpg'

export const FooterLeft = () => {
    return (
        <div className="footerLeft">
            <figure className="footerLeft__image">
                <img src={ iconSpotify } alt="cover" className="disk1" id="disk1"/>
            </figure>
            <article className="footerLeft__info-song">
                <h4 className="footerLeft__info-tittle"> Levels - Radio Edit </h4>
                <p className="footerLeft__info-text"> Avicii </p>
            </article>
            <FavoriteBorder className="footerLeft__icon"/>
            <AspectRatio className="footerLeft__icon"/>
        </div>
    )
}