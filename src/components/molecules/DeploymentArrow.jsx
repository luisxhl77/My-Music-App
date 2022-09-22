import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

export const DeploymentArrow = () => {
  return (
        <ArrowContainer>
            <ArrowBackIos/>
            <ArrowForwardIos/>
        </ArrowContainer>
    )
}
const ArrowContainer = styled.div`
    margin-left: 30px;
    width: 127px;
    display: flex;
    justify-content: space-evenly;
`;
