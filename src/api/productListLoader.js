import {BACK_END_URL} from "../constants/api.js";

//import {useLoaderData} from "react-router-dom";

export function productListLoader({params: {category, subcategory}, request}) {
    let url = `${BACK_END_URL}/product?category=${category}&subcategory=${subcategory}`;
    const pageUrl = new URL(request.url);
    const page = pageUrl.searchParams.get("page")||1;
    url = `${url}&_limit=8&_page=${page}`;
    return (
        fetch(url).then((response) => {
            return response.json().then((products)=> {
                let totalElements = products[0]?.totalElements || 1;
                const numberOfPages = Math.ceil(totalElements / 8);
                return {
                    products, numberOfPages,
                };
            });
        })
    );
}