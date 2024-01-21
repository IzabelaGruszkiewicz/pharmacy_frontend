import {FlexContainer} from "../../components/FlexContainer/FlexContainer.jsx";
import {ExpandableMenu} from "../../components/ExpandableMenu/ExpandableMenu.jsx";
import {BreadCrumbs} from "../../components/BreadCrumbs/BreadCrumbs.jsx";
import {Photos} from "../../components/Photos/Photos.jsx";
import {Details} from "../../components/Details/Details.jsx";
import {useLoaderData} from "react-router-dom";

export function ProductDetails(){
    const product = useLoaderData();
    return (
        <>
            <FlexContainer>
                <ExpandableMenu></ExpandableMenu>
                <div style={{width: "100%"}}>
                    <BreadCrumbs></BreadCrumbs>
                    <FlexContainer>
                        <Photos product={product}/>
                        <Details product={product}/>
                    </FlexContainer>
                </div>
            </FlexContainer>
        </>
    );
}