import {CartProductsList} from "../../components/CartProductsList/CartProductsList.jsx";
import {FlexContainer} from "../../components/FlexContainer/FlexContainer.jsx";
import {CartSummary} from "../../components/CartSummary/CartSummary.jsx";
import {useContext} from "react";
import {CartContext} from "../../context/CartContext.js";

export function Cart() {
    const [cartItems] = useContext(CartContext);

    return (
        <FlexContainer>
            <CartProductsList products={cartItems}/>
            <CartSummary products={cartItems}/>
        </FlexContainer>
    );

}