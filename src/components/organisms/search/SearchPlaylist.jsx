import { useLocation, useNavigate } from "react-router-dom";
import querySting from 'query-string';
import { useForm } from "../../../hooks/useForm";
import { Card } from "../../molecules/card/Card";
import { Search } from "@mui/icons-material";
import "./searchPlaylist.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSearchMyPlaylist } from "../../../store/slices/searchPlaylist/thunks";

export const SearchPlaylist = () => {

  const dispatch = useDispatch();
  const navigae = useNavigate();
  const location = useLocation();
  const { searchPlaylist } = useSelector( state => state.searchPlaylist );

  const { q = '' } = querySting.parse( location.search );
  const { searchtext, onInputChange } = useForm({
    searchtext: ""
  })

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchtext.trim().length > 0) {
      navigae( `?q=${searchtext}` )
    }
  }

  useEffect(()=>{
    dispatch( getSearchMyPlaylist(q) );
  },[q])

  if( !searchPlaylist ){
    return (
      <Spinner/>
    )
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
            placeholder={"¿What playlist do you want to listen to?"}
            value= {searchtext}
            onChange={onInputChange}
          />
        </div>
      </form>
      <section className="main__results">
        {
          searchPlaylist?.map((item) => (
            <Card name={item.name} image={item.images[0].url} description={item.description} type={item?.type} id={item.id} key={item.id} />
          ))
        }
      </section>
    </main>
  )
}
