import {Link, useFetcher} from "react-router-dom";
import styles from "./Product.module.css";


export function Product({product}) {
    const {Form} = useFetcher();
    return (
        <Link
            to={`/${product.category}/${product.subcategory}/${product.id}`}
            className={styles.product}>
            <img src={product.photoPath}/>
            <h3>{product.brand}</h3>
            <h4>{product.name}</h4>
            <p>{product.price.toFixed(2)} zł</p>
            <Form onClick={(e)=> e.stopPropagation() }
                method="POST"
                action={`/add-to-favourites/${product.id}`}>
                <button>
                    <div className={styles.heart}></div>
                </button>
            </Form>
        </Link>
    );
}