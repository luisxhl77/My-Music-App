import styled from "styled-components";
import './descriptionsList.scss';

export const DescriptionsList = ({playlist}) => {
    const {name, images, owner, followers, tracks} = playlist;
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

const Info = styled.div`
    & .contInfo{
        display: flex;
        align-items: flex-end;
        padding: 20px 10% 0px 10%;
    }
    & img{
        width: 25vw;
        margin: 0px 25px 0px 20px;
        box-shadow: 0 2px 30px #000;
    }
    & .nameList{
        font-size: 5vw;
    }
    & .descripList{
        color: #a1a1a1;
    }
`;
const InfoText = styled.div`
    flex: 1;
    & h1{
        margin-bottom: 10px;
    }
`;