import {FullWidthButton} from "../FullWidthButton/FullWidthButton.jsx";
import CAR_ICON from "../../assets/car.svg";
import styles from "./CartSummary.module.css";
import {Link} from "react-router-dom";

export function CartSummary({products}){
    const deliveryCost = 12.50;
    const minSumForFreeDelivery=129;
    let sum=0;
    products.forEach((product)=>{
        sum+=product.price;
    });
    const totalCost = sum > minSumForFreeDelivery ? sum : sum + deliveryCost;

    return (
        <div className={styles.cartSummary}>
            <h2>Podsumowanie</h2>
            <div className={styles.cartRow}>
                <p>Wartość produktów</p>
                <p>{sum.toFixed(2)} zł</p>
            </div>
            <div className={styles.cartRow}>
                <p>Koszt dostawy</p>
                <p>{sum > minSumForFreeDelivery ? 0 : deliveryCost.toFixed(2)} zł</p>
            </div>
            <div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
                <p>Do zapłaty</p>
                <p>{totalCost.toFixed(2)} zł</p>
            </div>
            <Link to="/podsumowanie">
                <FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
            </Link>
            <div className={styles.deliveryInfo}>
                <img src={CAR_ICON}/>
                <p>Darmowa dostawa od {minSumForFreeDelivery} zł</p>
            </div>
        </div>

    );
}