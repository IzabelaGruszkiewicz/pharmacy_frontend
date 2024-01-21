import {useLoaderData} from "react-router-dom";
import {FlexContainer} from "../../components/FlexContainer/FlexContainer.jsx";
import {Products} from "../../components/Products/Products.jsx";

export function SearchedProducts(){
    const {products} = useLoaderData();

    return(
        <FlexContainer>
            <div>
                <Products headerText={"Znalezione produkty"} products={products}/>
            </div>
        </FlexContainer>
    );
}