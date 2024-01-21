import {FullWidthButton} from "../FullWidthButton/FullWidthButton.jsx";
import CAR_ICON from "../../assets/car.svg"
import styles from "./Details.module.css"
import {useContext} from "react";
import {CartContext} from "../../context/CartContext.js";
import {Accordion} from "../Accordion/Accordion.jsx";
import {useFetcher} from "react-router-dom";

export function Details({product}) {
    const {Form} = useFetcher();

    const [, addProductToCart] = useContext(CartContext);

    const accordionContent = [
        {
            title: "Opis produktu",
            content: product.description,
        }
    ]

    return (
        <div className={styles.details}>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h2 className={styles.productName}>{product.brand}</h2>
                <Form onClick={(e) => e.stopPropagation()}
                      method="POST"
                      action={`/add-to-favourites/${product.id}`}>
                    <button className={styles.buttonHeartStyle}>
                        <div className={styles.heart}></div>
                    </button>
                </Form>
            </div>
            <p className={styles.productName}>{product.name}</p>
            <p className={styles.price}>{product.price.toFixed(2)} zł</p>
            <FullWidthButton
                onClick={() => {
                    addProductToCart(product);
                }}
                isBlack={true}>Dodaj do koszyka</FullWidthButton>
            <ul className={styles.extraInfo}>

                <li>
                    <img src={CAR_ICON}/>
                    Dostawa do 24h
                </li>
            </ul>
            <Accordion items={accordionContent}/>
        </div>

    );
}