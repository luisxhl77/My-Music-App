import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategorie } from "../../../store/slices/categories/thunks";
import { getFeaturedPlaylist } from "../../../store/slices/featuredPlaylists/thunks";
import { getNewrelease } from "../../../store/slices/newReleases/thunks";
import { getUserPlaylist } from "../../../store/slices/userPlaylist/thunks";
import { Card } from "../../molecules/card/Card";
import './home.scss';

export const Home = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);
  const { featuredPlaylists } = useSelector(state => state.featuredPlaylists);
  const { userPlaylists } = useSelector(state => state.userPlaylists);
  const { newReleases } = useSelector(state => state.newReleases);
  
  useEffect(() => {
    dispatch( getCategorie());
    dispatch( getFeaturedPlaylist());
    dispatch( getUserPlaylist());
    dispatch( getNewrelease());
  }, [])

  return (
    <main className="main">

      <h1 className="main__recommended-title">Listas de reproducción de usuario</h1>
      <section className="main__recommended-list">
        {
          userPlaylists?.map((item) => (
            <Card name={item.name} image={item.images[0].url} description={item.description} type={item?.type} key={item.id} />
          ))
        }
      </section>

      <h1 className="main__recommended-title">Nuevos lanzamientos</h1>
      <section className="main__recommended-list">
        {
          newReleases?.map((item) => (
            <Card name={item.name} image={item.images[0].url} description={item.artists[0].name} type={item?.type} key={item.id} />
          ))
        }
      </section>

      <h1 className="main__recommended-title">Listas de reproducción destacadas</h1>
      <section className="main__recommended-list">
        {
          featuredPlaylists?.map((item) => (
            <Card name={item.name} image={item.images[0].url} description={item.description} type={item?.type} key={item.id} />
          ))
        }
      </section>

      <h1 className="main__recommended-title">Categorias</h1>
      <section className="main__recommended-list">
        {
          categories?.map((item) => (
            <Card name={item.name} image={item.icons[0].url} type={item?.name} key={item?.id}/>
          ))
        }
      </section>

    </main>
  )
}