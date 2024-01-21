import {FlexContainer} from "../../components/FlexContainer/FlexContainer.jsx";
import {ExpandableMenu} from "../../components/ExpandableMenu/ExpandableMenu.jsx";
import {BreadCrumbs} from "../../components/BreadCrumbs/BreadCrumbs.jsx";
import {Products} from "../../components/Products/Products.jsx";
import {Pagination} from "../../components/Pagination/Pagination.jsx";
import {useLoaderData, useParams} from "react-router-dom";
import {COSMETICS_CATEGORIES, MEDICINES_CATEGORIES, SUPPLEMENTS_CATEGORIES} from "../../constants/categories.js";

export function ProductList(){
    const {products, numberOfPages} = useLoaderData();
    const params = useParams();
    const categories = getCategoriesByPath(params.category);
    const foundCategory = categories.find(c => c.path === params.subcategory)
    return(
            <FlexContainer>
                <ExpandableMenu/>
                <div>
                    <BreadCrumbs/>
                    <Products headerText={foundCategory.subcategory} products={products}/>
                    <Pagination numberOfPages={numberOfPages}/>
                </div>
            </FlexContainer>
    );
}

function getCategoriesByPath(path) {
    switch (path) {
        case 'leki':
            return MEDICINES_CATEGORIES;
        case 'suplementy':
            return SUPPLEMENTS_CATEGORIES;
        case 'drogeria':
            return COSMETICS_CATEGORIES;
    }
}