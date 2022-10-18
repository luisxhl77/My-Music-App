import { UserRouter } from "../../../routers/UserRouter"
import { FooterReproduce } from "../../organisms/Footer.reproduce/Footer.reproduce"
import { Header } from "../../organisms/header/Header"
import { Sidebar } from "../../organisms/Sidebar/Sidebar"

export const Player = () => {
  return (
    <>
      <Header/>
      <Sidebar/>
      <UserRouter/>
      <FooterReproduce/>
    </>
  )
}
