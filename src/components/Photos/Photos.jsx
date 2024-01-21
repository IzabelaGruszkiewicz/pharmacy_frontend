import {FlexContainer} from "../FlexContainer/FlexContainer.jsx";
import styles from "./Photos.module.css"

export function Photos({product}){
    return (
        <FlexContainer>
            <img className={styles.mainPhoto} src ={product.photoPath}/>
        </FlexContainer>
    );
}