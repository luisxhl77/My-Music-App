import styled from "styled-components";

export const Body = () => {
  return (
    <BodyContainer>
    </BodyContainer>
  )
}

const BodyContainer = styled.div`
  width: 100%;
  background: linear-gradient( #466d82 1%,#000 62%);
  color: #fff;
  height: 100vh;
  padding: 110px 0px 70px;
  overflow-y: overlay;
  &::-webkit-scrollbar{
    display: none;
  }
`