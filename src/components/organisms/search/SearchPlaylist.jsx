import { Search } from "@mui/icons-material";
import "./searchPlaylist.scss";

export const SearchPlaylist = () => {
  return (
    <main className="main">
      <form action="">
        <div className="main__search">
          <Search className="main__iconSearch"/>
          <input type="search" name="" id="" className="main__searchInput" placeholder={"¿What do you want to hear?"}/>
        </div>
      </form>
    </main>
  )
}
