import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Cart} from "./views/Cart/Cart";
import {Favourites} from "./views/Favourites/Favourites";
import {Layout} from "./components/Layout/Layout";
import {MainPage} from "./views/MainPage/MainPage.jsx";
import {mainPageLoader} from "./api/mainPageLoader.js";
import {ProductList} from "./views/ProductList/ProductList.jsx";
import {productListLoader} from "./api/productListLoader.js";
import {ProductDetails} from "./views/ProductDetails/ProductDetails.jsx";
import {productLoader} from "./api/productLoader.js";
import {addProductToFavouritesAction} from "./api/addProductToFavouritesAction.js";
import {favouritesLoader} from "./api/favouritesLoader.js";
import {deleteFavouriteAction} from "./api/deleteFavouriteAction.js";
import {AdminPage} from "./views/AdminPage/AdminPage.jsx";
import {Discounts} from "./views/Discounts/Discounts.jsx";
import {discountsLoader} from "./api/discountsLoader.js";
import {Login} from "./views/Login/Login.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx";
import Users from "./views/Users/Users.jsx";
import {searchProductLoader} from "./api/searchProductLoader.js";
import {SearchedProducts} from "./views/SearchedProducts/SearchedProducts.jsx";
import {mapLoader} from "./api/mapLoader.js";
import "./styles/global.css";
import "./styles/theme.css";
import {LocationPage} from "./views/LocationPage/LocationPage.jsx";
import {Summary} from "./views/Summary/Summary.jsx";
import {UserPage} from "./views/UserPage/UserPage.jsx";
import {ordersLoader} from "./api/ordersLoader.js";


const queryClient = new QueryClient()

const router = createBrowserRouter([
    {
        path: "/add-to-favourites/:productId",
        action: addProductToFavouritesAction,
    },
    {
        path: "/delete-from-favourites/:favouriteId",
        action: deleteFavouriteAction,
    },
    {
        path: "/admin",
        element: <AdminPage/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/rejestracja",
        element: <Users/>,
    },
    {
        path: "",
        element: <ProtectedRoute>
            <Layout/>
        </ProtectedRoute>,
        children: [
            {
                path: "/lokalizacja",
                element: <LocationPage/>,
                loader: mapLoader,
            },
            {
                path: "/panel",
                element: <UserPage/>,
                loader: ordersLoader,
            },
            {
                path: "/koszyk",
                element: <Cart/>,
            },
            {
                path: "/podsumowanie",
                element: <Summary/>,
            },
            {
                path: "/ulubione",
                element: <Favourites/>,
                loader: favouritesLoader,
            },
            {
                path: "/:category?",
                element: <MainPage/>,
                loader: mainPageLoader
            },
            {
                path: "/:category/:subcategory",
                element: <ProductList/>,
                loader: productListLoader,
            },
            {
                path: "/:category/:subcategory/:productId",
                element: <ProductDetails/>,
                loader: productLoader,
            },
            {
                path: "/szukaj/:productBrand",
                element: <SearchedProducts/>,
                loader: searchProductLoader,
            },
            {
                path: "/promocje",
                element: <Discounts/>,
                loader: discountsLoader,
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider contextSharing={true} client={queryClient}>
            <RouterProvider router={router}></RouterProvider>

        </QueryClientProvider>

        {/*<RouterProvider router={router}></RouterProvider>*/}
    </React.StrictMode>
);