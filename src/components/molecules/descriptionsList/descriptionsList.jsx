import styled from "styled-components";

export const DescriptionsList = ({playlist}) => {
    const {name, images, owner, followers, tracks} = playlist;
    return (
        <Info>
            <div className="contInfo">
                <img src={ images[0]?.url } alt="" />
                <InfoText>
                    <h5> LISTA </h5>
                    <p className="nameList">
                        { name }
                    </p>
                    <p className="descripList">
                        { owner?.display_name } . { followers?.total } "me gusta" { tracks?.total } canciones
                    </p>
                </InfoText>
            </div>
        </Info>
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