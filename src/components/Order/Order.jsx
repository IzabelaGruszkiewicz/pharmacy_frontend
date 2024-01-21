import {format} from "date-fns";

export function Order({order, counter}) {
    const orderDate = new Date(order.date);
    const formattedOrderDate = format(orderDate, 'dd.MM.yyyy HH:mm:ss');
    return (
        <div style={{marginBottom: "1rem", marginTop: "2rem", textAlign: "center"}}>
            <p style={{fontWeight: "700"}}>Zamówienie {counter}:</p>
            <p>
                <span>Data zamówienia: </span>
                {formattedOrderDate}
            </p>
            <p>
                <span>Status zamówienia: </span>
                {order.status}
            </p>
            <p>
                <span>Cena zamówienia: </span>
                {order.totalCost}
            </p>
        </div>);
}