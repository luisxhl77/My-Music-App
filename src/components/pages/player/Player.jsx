import { UserRouter } from "../../../routers"
import { Header, Sidebar, FooterReproduce } from "../../organisms"

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
