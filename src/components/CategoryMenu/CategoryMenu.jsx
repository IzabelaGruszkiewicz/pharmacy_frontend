import {COSMETICS_CATEGORIES, MEDICINES_CATEGORIES, SUPPLEMENTS_CATEGORIES} from "../../constants/categories.js";
import {NavLink, useParams} from "react-router-dom";
import styles from "./CategoryMenu.module.css";
import {SearchField} from "../SearchFeild/SearchField.jsx";

export function CategoryMenu(){
    const params = useParams();
    const foundCategory = params.category ?? "leki";

    const foundSubcategory = getSubcategoryByCategoryName(foundCategory);

    return (
        <div className={styles.categoryMenu}>
            <ul style={{display:"flex", justifyContent:"space-between", alignItems: "center"}}>
                {foundSubcategory.map((subcategory) => {
                    return (
                        <li key={subcategory.path}>
                            <NavLink to={`/${foundCategory}/${subcategory.path}`}>
                                {subcategory.subcategory}
                            </NavLink>
                        </li>
                    );
                })}
                <li>
                    <SearchField></SearchField>
                </li>
            </ul>
        </div>
    );
}

function getSubcategoryByCategoryName(path) {
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