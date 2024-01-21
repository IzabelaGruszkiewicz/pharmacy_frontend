import {FlexContainer} from "../../components/FlexContainer/FlexContainer.jsx";
import {Products} from "../../components/Products/Products.jsx";
import {useLoaderData} from "react-router-dom";

export function Discounts(){
    const {products} = useLoaderData();

    return(
        <FlexContainer>
            <div>
                <Products headerText={"Promocje"} products={products}/>
            </div>
        </FlexContainer>
    );
}