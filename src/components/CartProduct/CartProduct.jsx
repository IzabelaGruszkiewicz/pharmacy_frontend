import REMOVE_ICON from "../../assets/remove.svg";
import styles from "./CartProduct.module.css";
import {useContext} from "react";
import {CartContext} from "../../context/CartContext.js";

export function CartProduct({product}) {
    const [, , removeProductFromCart] = useContext(CartContext);

    return (
        <div className={styles.cartProduct}>
            <img src={product.photoPath}/>
            <div className={styles.cartProductInfo}>
                <div className={styles.topRow}>
                    <h3>
                        {product.name}
                    </h3>
                    <p>
                        {product.price.toFixed(2)} zł
                    </p>
                </div>
                <p className={styles.priceRow}>
                    <span>Cena: </span>
                    {product.price.toFixed(2)} zł
                </p>
                <div className={styles.buttonRow}>
                    <button
                        onClick={() => {
                            removeProductFromCart(product);
                        }}
                    >
                        <img src={REMOVE_ICON}/>
                        Usuń
                    </button>
                </div>
            </div>
        </div>
    );
}