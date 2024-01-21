import {FavouritesList} from "../../components/FavouritesList/FavouritesList.jsx";
import {useLoaderData} from "react-router-dom";

export function Favourites() {
    const favouriteProducts = useLoaderData();
    return (
        <FavouritesList favourites={favouriteProducts}/>
    );
}