import {CenteredContent} from "../CenteredContent/CenteredContent.jsx";
import styles from "./CartProductsList.module.css";
import {CartProduct} from "../CartProduct/CartProduct.jsx";

export function CartProductsList({products}){
    return (
        <CenteredContent>
            <div className={styles.cartProductsList}>
                <h2>Koszyk</h2>
                <div>
                    {products.map((product) => {
                        return (
                            <CartProduct key={product.name} product={product}/>
                        );
                    })}
                </div>
            </div>
        </CenteredContent>
    );
}