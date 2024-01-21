import {BACK_END_URL} from "../constants/api.js";
import toast from "react-hot-toast";

export function addProductToFavouritesAction({params: {productId}}){
    toast.success("Dodano do ulubionych");
    return(
        fetch(`${BACK_END_URL}/favourites`,{
            method: "POST", body: JSON.stringify({
                productId: Number(productId),
            }),
            headers: {
                "Content-Type": "application/json",
            }
        })
    );
}