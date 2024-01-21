import {Hero} from "../../components/Hero/Hero.jsx";
import {Products} from "../../components/Products/Products.jsx";
import {useLoaderData, useParams} from "react-router-dom";
import HERO from "../../assets/hero_cosmetics.jpg"
import HERO1 from "../../assets/hero1.jpg"
import HERO2 from "../../assets/hero23.jpg"

export function MainPage(){
    const { category } = useParams();
    const heroPhoto = getPhotoByPath(category);

    const {bestsellers} = useLoaderData();
    return (
        <>
        <Hero heroImage={heroPhoto}/>
        <Products headerText="Sprawdź nasze bestsellery!" products={bestsellers}/>
        </>
    );
}

function getPhotoByPath(path) {
    switch (path) {
        case 'leki':
            return HERO;
        case 'suplementy':
            return HERO2;
        case 'drogeria':
            return HERO1;
        default:
            return HERO;
    }
}