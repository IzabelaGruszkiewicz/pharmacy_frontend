import {BACK_END_URL} from "../constants/api.js";

export function productLoader({params: {productId}}){
    return (
        fetch(`${BACK_END_URL}/product/${productId}`)
    );
}