import {COSMETICS_CATEGORIES, MEDICINES_CATEGORIES, SUPPLEMENTS_CATEGORIES} from "../../constants/categories.js";
import {NavLink, useParams} from "react-router-dom";
import styles from "./ExpandableMenu.module.css"


const PATH_TO_CATEGORY_NAME = {
    leki : "Leki",
    suplementy : "Suplementy",
    drogeria : "Drogeria"
}
export function ExpandableMenu() {
    const params = useParams();
    const categories = getCategoriesByPath(params.category);

    const activePath = params.category;
    return (
        <div className={styles.expandableMenu}>
            <p>{PATH_TO_CATEGORY_NAME[params.category]}</p>
            <ul>
                {categories.map((category) => {
                    return (
                        <li key={category.path}>
                            <NavLink to={`/${params.category}/${category.path}`}>
                                {category.subcategory}{" "}
                                {/*<img*/}
                                {/*    src={ARROW_ICON}*/}
                                {/*    className={*/}
                                {/*        activePath === category.path*/}
                                {/*            ? styles.expanded*/}
                                {/*            : ""*/}
                                {/*    }*/}
                                {/*/>*/}
                            </NavLink>
                            {activePath === category.path && (
                                <ul>
                                    {category.subcategories.map(
                                        (subcategory) => {
                                            return (
                                                <li key={subcategory.path}>
                                                    <NavLink
                                                        to={subcategory.path}
                                                    >
                                                        {
                                                            subcategory.categoryName
                                                        }
                                                    </NavLink>
                                                </li>
                                            );
                                        }
                                    )}
                                </ul>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
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