import {NavLink, useParams} from "react-router-dom";
import ARROW_ICON from "../../assets/arrow.svg"
import styles from "./BreadCrumbs.module.css"
import {
    CATEGORIES,
    COSMETICS_CATEGORIES,
    MEDICINES_CATEGORIES,
    SUPPLEMENTS_CATEGORIES
} from "../../constants/categories.js";

export function BreadCrumbs(){
    const {category, subcategory}= useParams();

    const foundCategory = CATEGORIES.find(c => c.path === category);
    const subcategories = getCategoriesByPath(category);
    const foundSubcategory = subcategories.find(c => c.path === subcategory)

    const breadcrumbs =[
        {
            categoryName: foundCategory.categoryName, path: `/${foundCategory.path}`
        },
        {
            categoryName: foundSubcategory.subcategory, path: `/${foundCategory.path}/${foundSubcategory.path}`
        }
    ]
    return (
        <ul className={styles.breadcrumbs}>
        {
            breadcrumbs.map((breadcrumbs) =>{
                return <li key={breadcrumbs.path}>
                    <NavLink end to={breadcrumbs.path}>
                        {breadcrumbs.categoryName}
                        <img src={ARROW_ICON}/>
                    </NavLink>
                </li>
            })
        }
    </ul>);
}
function getCategoriesByPath(path) {
    switch (path) {
        case 'leki':
            return MEDICINES_CATEGORIES;
        case 'suplementy':
            return SUPPLEMENTS_CATEGORIES;
        case 'drogeria':
            return COSMETICS_CATEGORIES;
        default:
            return MEDICINES_CATEGORIES;
    }
}