import {useLoaderData} from "react-router-dom";
import {OrdersInfo} from "../../components/OrdersInfo/OrdersInfo.jsx";

export function UserPage() {
    const orders = useLoaderData();

    const customerTable = JSON.parse(localStorage.getItem('sb-fpcfzrevqqlgeikifvkr-auth-token'));
    const customerEmail = customerTable.user.email;
    const customerFullname = customerTable.user.user_metadata.fullName;

    return (
        <div>
            <h1 style={{textAlign: "center", marginTop: "1rem"}}>Panel użytkownika</h1>
            <h3 style={{marginBottom: "1rem", marginTop: "2rem", textAlign: "center"}}>Informacje o użytkowniku</h3>
            <ul style={{textAlign:"center"}}>
                <li>
                    Imię i naziwsko: {customerFullname}
                </li>
                <li>
                    Adres email: {customerEmail}
                </li>
            </ul>
            <h3 style={{marginBottom: "1rem", marginTop: "2rem", textAlign: "center"}}>Złożone zamówienia:</h3>
            <OrdersInfo orders={orders}></OrdersInfo>
        </div>
    );
}