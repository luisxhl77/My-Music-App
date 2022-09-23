import styled from "styled-components";

export const SiderbarChoice = ({title,Icon}) => {
    return (
        <ChoiceOptions>
            {/*Si existe Icon agreguelo*/}
            { Icon && <Icon/> } 
            { Icon ? <h4>{title}</h4> : <h5>{title}</h5> }
            {/*Si existe Icon agreguelo de lo contrario no */}
        </ChoiceOptions>
    )
};

const ChoiceOptions = styled.li`
    display: flex;
    align-items: center;
    color: #b2b2b2;
    height: 41px;
    transition: 300ms color ease-in;
    cursor: pointer;
    padding: 0px 0px 0px 5px;
    &:hover{
        color: #fff;
    }
    & h5{
        margin: 10px 0px 0px 5px;
    }
    & .MuiSvgIcon-root{
        font-size: 31px;
        padding: 0px 10px 0px 0px;
    }
`;