import REMOVE_ICON from "../../assets/remove.svg";
import BAG_ICON from "../../assets/cart.svg";
import styles from "./FavouriteProduct.module.css";
import {useFetcher} from "react-router-dom";
import {useContext} from "react";
import {CartContext} from "../../context/CartContext.js";

export function FavouriteProduct({favourite}) {
    const product = favourite.product;
    const {Form} = useFetcher();

    const [, addProductToCart] = useContext(CartContext);
    return (
        <div className={styles.favouriteProduct}>
            <img src={product.photoPath}/>
            <div className={styles.favouriteProductInfo}>
                <div className={styles.topRow}>
                    <h3>
                        {product.brand} {product.name}
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
                    <Form
                        action={`/delete-from-favourites/${favourite.id}`}
                        method="DELETE"
                    >
                    <button>
                        <img src={REMOVE_ICON}/>
                        Usuń
                    </button>
                    </Form>
                    <button
                        onClick={()=>{
                            addProductToCart(product);
                        }}
                    >
                        <img src={BAG_ICON}/>Dodaj do koszyka</button>
                </div>
            </div>
        </div>
    );
}