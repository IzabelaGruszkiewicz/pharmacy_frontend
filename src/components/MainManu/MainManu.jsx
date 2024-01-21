import styles from "./MainMenu.module.css";
import {NavLink} from "react-router-dom";
import {CATEGORIES} from "../../constants/categories.js";

export function MainManu(){
    return (
        <ul className={styles.mainMenu}>
            {CATEGORIES.map(category=> {
            return (
                <li key={category.path}>
                    <NavLink to={category.path}>
                        {category.categoryName}
                    </NavLink>
                </li>
            );
        })}
    </ul>
    );
}