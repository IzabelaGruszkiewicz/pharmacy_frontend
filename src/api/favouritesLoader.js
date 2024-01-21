import {BACK_END_URL} from "../constants/api.js";

export function favouritesLoader(){

    return(
        fetch(`${BACK_END_URL}/favourites`)
    );

}