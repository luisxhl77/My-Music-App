import { ArrowBackIos, Search } from "@mui/icons-material"
import styled from "styled-components"

export const Seeker = () => {
  return (
    <Seekercontainer>
      <Search/>
      <input type="text" name="" id="" placeholder=" ¿Qué te apetece escuchar ?"/>
    </Seekercontainer>
  )
}
const Seekercontainer = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  min-width: 340px;
  padding: 10px;
  background-color: #fff;
  color: #181818;
  border-radius: 30px;
  & input{
      outline: none;
      border: none;
      width: 100%;
      padding: 6px 20px 6px 10px;
  }
`
