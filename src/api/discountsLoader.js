import {BACK_END_URL} from "../constants/api.js";

export function discountsLoader() {
    let url = `${BACK_END_URL}/product/discounts/10`;
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