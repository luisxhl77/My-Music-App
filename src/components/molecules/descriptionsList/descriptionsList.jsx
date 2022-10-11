import styled from "styled-components";
import './descriptionsList.scss';

export const DescriptionsList = ({name, images, owner, followers, tracks}) => {
    return (
        <div className="DescriptionsList">
            <figure className="DescriptionsList__image">
                <img src={ images[0]?.url } alt="" />
            </figure>
            <InfoText>
                <h5> LISTA </h5>
                <p className="DescriptionsList__name-list">
                    { name }
                </p>
                <p className="DescriptionsList__descrip-list">
                    { owner?.display_name } . { followers?.total } "me gusta" { tracks?.total } canciones
                </p>
            </InfoText>
        </div>
    )
}

const InfoText = styled.div`
    flex: 1;
    & h1{
        margin-bottom: 10px;
    }
`;