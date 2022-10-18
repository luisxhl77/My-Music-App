import { useLocation, useNavigate } from "react-router-dom";
import querySting from 'query-string';
import { useForm } from "../../../hooks/useForm";
import { Card } from "../../molecules/card/Card";
import { Search } from "@mui/icons-material";
import "./searchPlaylist.scss";

export const SearchPlaylist = () => {

  const navigae = useNavigate()
  const location = useLocation();

  const { q = '' } = querySting.parse( location.search );
  console.log("vamos",query);

  const { searchtext, onInputChange } = useForm({
    searchtext: ""
  })

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchtext.trim().length > 0) {
      console.log({searchtext})
      navigae( `?q=${searchtext}` )
    }
  }

  return (
    <main className="main">
      <form autoComplete="off" onSubmit={ onSearchSubmit }>
        <div className="main__search">
          <Search className="main__iconSearch"/>
          <input 
            type="search" 
            name="searchtext" 
            id="" 
            className="main__searchInput" 
            placeholder={"¿What do you want to hear?"}
            value= {searchtext}
            onChange={onInputChange}
          />
        </div>
      </form>
      <div>
        <Card/>
      </div>
    </main>
  )
}
