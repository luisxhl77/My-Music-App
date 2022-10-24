import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Search } from "@mui/icons-material";
import querySting from 'query-string';
import { getSearchMyPlaylist } from "../../../store/slices";
import { useForm } from "../../../hooks";
import { Card } from "../../molecules";
import { Spinner } from "../../atoms";
import "./searchPlaylist.scss";

export const SearchPlaylist = () => {

  const dispatch = useDispatch();
  const navigae = useNavigate();
  const location = useLocation();
  const { searchPlaylist, loaded } = useSelector( state => state.searchPlaylist );

  const { q = '' } = querySting.parse( location.search );
  const { searchtext, onInputChange } = useForm({
    searchtext: ""
  })

  const onSearchSubmit = ( event ) => {
    event.preventDefault();
    if ( searchtext.trim().length > 0 ) {
      navigae( `?q=${ searchtext }` )
    }
  }

  useEffect(()=>{
    dispatch( getSearchMyPlaylist( q ) );
  },[ q ])

  if( loaded ){
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
            value= { searchtext }
            onChange={ onInputChange }
          />
        </div>
      </form>
      <section className="main__results">
        {
          searchPlaylist?.map(( item ) => (
            <Card 
              id          = { item?.id } 
              key         = { item?.id } 
              name        = { item?.name } 
              type        = { item?.type } 
              description = { item?.description } 
              image       = { item?.images[0]?.url } 
            />
          ))
        }
      </section>
    </main>
  )
}
