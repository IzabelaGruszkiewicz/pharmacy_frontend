import {Footer} from "../Footer/Footer.jsx";
import {MainManu} from "../MainManu/MainManu.jsx";
import {Logo} from "../Logo/Logo.jsx";
import {IconMenu} from "../IconMenu/IconMenu.jsx";
import {TopBar} from "../TopBar/TopBar.jsx";
import {CategoryMenu} from "../CategoryMenu/CategoryMenu.jsx";
import {MainContent} from "../MainContent/MainContent.jsx";
import {Outlet} from "react-router-dom";
import {CartContext} from "../../context/CartContext.js";
import {useLocalStorage} from "../../hooks/useLocalStorage.jsx";
import LottieAnimation from "lottie-react";
import LOGO from "../../assets/Logo.json";
import styles from "../Logo/Logo.module.css";
import toast, {Toaster} from "react-hot-toast";

export function Layout() {

    const [cartItems, setCartItems] = useLocalStorage("cart_products", [])

    function addProductToCart(product) {
        const newState = [...cartItems, product];
        setCartItems(newState);
        // toast.success("SUPER");
        toast('Dodano do koszyka!', {
            icon: '🛒',
        });
    }

    function removeProductFromCart(product) {
        // usuwa tylko jeden produkt
        const indexToRemove = cartItems.findIndex((productInCart) => productInCart.id === product.id);
        if (indexToRemove !== -1) {
            const newState = [...cartItems];
            newState.splice(indexToRemove, 1);
            setCartItems(newState);
        }

        // usuwa wszystkie produkty o tym samym id
        // const newState = cartItems.filter((productInCart) => productInCart.id !== product.id);
        // setCartItems(newState);
    }

    return (<>
        <CartContext.Provider value={[cartItems, addProductToCart, removeProductFromCart]}>
            <MainContent>
                <div><Toaster/></div>
                <TopBar>
                    <MainManu/>
                    <div className={styles.logo}>
                        <Logo/>
                        <LottieAnimation style={{width: "100px"}} animationData={LOGO}/>
                    </div>
                    <div>
                        <IconMenu/>
                    </div>
                </TopBar>
                <CategoryMenu/>
                <Outlet/>
            </MainContent>
            <Footer/>
        </CartContext.Provider>
    </>);
}