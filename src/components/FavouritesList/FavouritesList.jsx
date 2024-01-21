import {CenteredContent} from "../CenteredContent/CenteredContent.jsx";
import {FavouriteProduct} from "../FavouriteProduct/FavouriteProduct.jsx";
import styles from "./FavouritesList.module.css";

export function FavouritesList({favourites}){
    return (
        <CenteredContent>
            <div className={styles.favouriteList}>
                <h2>Ulubione</h2>
                <div>
                    {favourites.map((favourite) => {
                        return (
                            <FavouriteProduct key={favourite.id} favourite={favourite}/>
                        );
                    })}
                </div>
            </div>
        </CenteredContent>
    );
}