import {ProductForm} from "../../components/ProductForm/ProductForm.jsx";
import {PharmacyForm} from "../../components/PharmacyForm/PharmacyForm.jsx";
import {Toaster} from "react-hot-toast";

export function AdminPage(){
    return (
        <div>
            <div><Toaster/></div>
            <h1 style={{textAlign: "center"}}>Panel administratora apteki</h1>
            <h3 style={{marginBottom: "1rem", marginTop: "2rem", textAlign: "center"}}>Dodawanie produktów:</h3>
            <ProductForm/>
            <h3 style={{marginBottom: "1rem", marginTop: "2rem", textAlign: "center"}}>Dodawanie aptek:</h3>
            <PharmacyForm/>
        </div>
    );
}