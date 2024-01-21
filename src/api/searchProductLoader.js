import {BACK_END_URL} from "../constants/api.js";

export function searchProductLoader({params: {productBrand}}){
    let url = `${BACK_END_URL}/product/search/${productBrand}`;

    return (
        fetch(url).then((response) => {
            return response.json().then((products)=> {
                return {
                    products
                };
            });
        })
    );
}