import { useSelector } from "react-redux";
import { selectCategories } from "../../../store/slices/CategoriesSlice";
import { selectFeaturedPlayLists } from "../../../store/slices/FeaturedPlaylistsSlice";
import { selectNewReleases } from "../../../store/slices/NewReleasesSlice";
import { selectUserPlaylists } from "../../../store/slices/UserPlaylistsSlice";
import { Card } from "../../molecules/card/Card";
import './home.scss';

export const Home = () => {
  const userPlaylists = useSelector(selectUserPlaylists);
  const featuredPlayLists = useSelector(selectFeaturedPlayLists);
  const newReleases = useSelector(selectNewReleases);
  const categories = useSelector(selectCategories);

  return (
    <main className="main">
      <h1 className="main__recommended-title">PLAYLIST FAVORITAS</h1>
      <section className="main__recommended-list">
        { userPlaylists?.items.map((item) => (
          <Card name={item.name} description={item.description} image={item.images[0].url} type={item.type} key={item.id} />
          ))
        }
      </section>
      <h1 className="main__recommended-title">Listas de reproducción destacadas</h1>
      <section className="main__recommended-list">
        { featuredPlayLists?.playlists?.items.map((item,index) => (
          <Card name={item.name} description={item.description} image={item.images[0].url} type={item.type} key={index} />
          ))
        }
      </section>
      <h1 className="main__recommended-title">nuevos lanzamientos</h1>
      <section className="main__recommended-list">
        {
          newReleases?.albums?.items?.map((item,index) => (
            <Card name={item.name} description={item.artists[0].name} image={item.images[0].url} type={item.album_type} key={index}/>
          ))
        }
      </section>
      <h1 className="main__recommended-title">CATEGORIAS</h1>
      <section className="main__recommended-list">
        {
          categories?.categories?.items?.map((item,index) => (
            <Card  name={item.name} image={item.icons[0].url} type={item?.name} key={index}/>
          ))
        }
      </section>

    </main>
  )
}