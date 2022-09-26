import { AspectRatio, FavoriteBorder } from "@mui/icons-material";
import './footerleft.scss';

export const FooterLeft = () => {
    return (
        <div className="footerLeft">
            <figure className="footerLeft__image">
                <img src="https://scontent.feoh1-1.fna.fbcdn.net/v/t31.18172-8/13173123_1561642394136585_4647316164601525701_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=19026a&_nc_ohc=OVmK4BrLnEkAX_CR3Ya&_nc_ht=scontent.feoh1-1.fna&oh=00_AT_A_Ty8_gLaOxjhTE8DdUxtPXy4EvdQbFe3tWM7W0684Q&oe=63501913" alt="cover" className="disk1" id="disk1"/>
            </figure>
            <article className="footerLeft__info-song">
                <h4>Levels - Radio Edit</h4>
                <p>Avicii</p>
            </article>
            <FavoriteBorder className="footerLeft__icon"/>
            <AspectRatio className="footerLeft__icon"/>
        </div>
    )
}