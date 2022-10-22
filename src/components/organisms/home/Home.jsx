import { useSelector } from "react-redux";
import { Card } from "../../molecules";
import { Spinner } from "../../atoms";
import './home.scss';

export const Home = () => {
  const {    categories     } = useSelector(     state => state.categories    );
  const {    newReleases    } = useSelector(    state => state.newReleases    );
  const {   userPlaylists   } = useSelector(   state => state.userPlaylists   );
  const { featuredPlaylists } = useSelector( state => state.featuredPlaylists );

  if (!categories, !userPlaylists, !newReleases, !featuredPlaylists) {
    return (
      <Spinner/>
    );
  }

  return (
    <main className="main">

      <h1 className="main__recommended-title">User playlists</h1>
      <section className="main__recommended-list">
        {
          userPlaylists?.map((item) => (
            <Card 
              name        = { item?.name } 
              image       = { item?.images[0]?.url } 
              description = { item?.description } 
              type        = { item?.type } 
              id          = { item?.id } 
              key         = { item?.id } 
            />
          ))
        }
      </section>

      <h1 className="main__recommended-title">Featured Playlists</h1>
      <section className="main__recommended-list">
        {
          featuredPlaylists?.map((item) => (
            <Card 
              name        = { item?.name } 
              image       = { item?.images[0]?.url } 
              description = { item?.description } 
              type        = { item?.type } 
              id          = { item?.id } 
              key         = { item?.id } 
            />
          ))
        }
      </section>

      <h1 className="main__recommended-title">New releases</h1>
      <section className="main__recommended-list">
        {
          newReleases?.map((item) => (
            <Card 
              name        = { item?.name } 
              image       = { item?.images[0].url } 
              description = { item?.artists[0]?.name } 
              type        = { item?.type } 
              id          = { item?.id } 
              key         = { item?.id } 
            />
          ))
        }
      </section>

      <h1 className="main__recommended-title">Categories</h1>
      <section className="main__recommended-list">
        {
          categories?.map((item) => (
            <Card 
              name  = { item?.name } 
              image = { item?.icons[0]?.url } 
              type  = { item?.name } 
              id    = { item?.id } 
              key   = { item?.id }
            />
          ))
        }
      </section>

    </main>
  )
}