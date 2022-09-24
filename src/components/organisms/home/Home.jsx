import { useSelector } from "react-redux";
import styled from "styled-components"
import { selectCategories } from "../../../store/slices/CategoriesSlice";
import { selectFeaturedPlayLists } from "../../../store/slices/FeaturedPlaylistsSlice";
import { selectNewReleases } from "../../../store/slices/NewReleasesSlice";
import { selectUserPlaylists } from "../../../store/slices/UserPlaylistsSlice";
import { Card } from "../../molecules/m-card"

export const Home = () => {
  const userPlaylists = useSelector(selectUserPlaylists);
  const featuredPlayLists = useSelector(selectFeaturedPlayLists);
  const newReleases = useSelector(selectNewReleases);
  const categories = useSelector(selectCategories);

  return (
    <HomeContainer>
      <h1>PLAYLIST FAVORITAS</h1>
      <div>
        { userPlaylists?.items.map((item,index) => (
          <Card name={item.name} description={item.description} image={item.images[0].url} type={item.type} key={index} />
          ))
        }
      </div>
      <h1>Listas de reproducción destacadas</h1>
      <div>
        { featuredPlayLists?.playlists?.items.map((item,index) => (
          <Card name={item.name} description={item.description} image={item.images[0].url} type={item.type} key={index} />
          ))
        }
      </div>
      <h1>nuevos lanzamientos</h1>
      <div>
        {
          newReleases?.albums?.items?.map((item,index) => (
            <Card name={item.name} description={item.artists[0].name} image={item.images[0].url} type={item.album_type} key={index}/>
          ))
        }
      </div>
      <h1>CATEGORIAS</h1>
      <div>
        {
          categories?.categories?.items?.map((item,index) => (
            <Card  name={item.name} image={item.icons[0].url} type={item?.name} key={index}/>
          ))
        }
      </div>

    </HomeContainer>
  )
}

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  background: linear-gradient( #4c4682 1%,#000 72%);
  color: #fff;
  height: 70vh;
  padding: 15vh 7% 15vh 10%;
  overflow: auto;
  &::-webkit-scrollbar{
    background-color: #000000a0;
    width: 1vh;
  }
  &::-webkit-scrollbar-thumb{            /*Diseño del scroll*/
    background-color: rgb(255, 255, 255);
  }
  &::-webkit-scrollbar-thumb:hover{      /*Reaccion del scroll*/
    background-color: rgb(139, 248, 50);
  }
  & h1{
    text-align: center;
    text-shadow: 4px 10px 10px black;
    margin: 50px 0px 10px 20px;
  }
  & div{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: auto;
  }
`