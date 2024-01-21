import {Link} from "react-router-dom";
import HEART_ICON from "../../assets/heart.svg";
import CART_ICON from "../../assets/cart.svg";
import ADMIN_ICON from "../../assets/admin.svg";
import LOCATION_ICON from "../../assets/location.svg";
import styles from "./IconMenu.module.css";
import {useEffect, useState} from "react";
import Logout from "../Authentication/Logout.jsx";

export function IconMenu(){
    const [cartItem, setCartItem] = useState(0);

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cart_products")) || [];
        const totalItems = cartData.length;

        setCartItem(totalItems);
    }, []);

    return (
        <ul className={styles.iconMenu}>
            <li>
                <Link to="/ulubione">
                    <img className={styles.heart} src={HEART_ICON}/>
                </Link>
            </li>
            <li>
                <Link to="/koszyk">
                    <img src={CART_ICON}/>
                    <div className={styles.numberOfProducts}>{cartItem}</div>
                </Link>
            </li>
            <li>
                <Link to="/panel">
                    <img src={ADMIN_ICON}/>
                </Link>
            </li>
            <li>
                <Link to="/lokalizacja">
                    <img src={LOCATION_ICON}/>
                </Link>
            </li>
            <li>
                <Logout/>
            </li>
        </ul>
    )
}