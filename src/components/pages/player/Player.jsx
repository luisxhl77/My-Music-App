import { Header } from "../../organisms/header/Header"
import { Sidebar } from "../../organisms/Sidebar/Sidebar"
import { FooterReproduce } from "../../organisms/Footer.reproduce/Footer.reproduce"
import { UserRouter } from "../../../routers/UserRouter"

export const Player = () => {
  return (
    <>
      <Header/>
      <Sidebar/>
      <UserRouter/>
      <FooterReproduce/>Ñ
    </>
  )
}
