import SpotifyWebApi from "spotify-web-api-js";
import { setCategories } from "./CategoriesSlice";

const spotify = new SpotifyWebApi();

export const getCategorie = () => {
    return async( dispatch ) => {
        const data = await spotify.getCategories()
        dispatch(setCategories({categories: data.categories.items}))
    }
}