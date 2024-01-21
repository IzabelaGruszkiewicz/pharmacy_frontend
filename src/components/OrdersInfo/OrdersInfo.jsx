import {CenteredContent} from "../CenteredContent/CenteredContent.jsx";
import {Order} from "../Order/Order.jsx";

export function OrdersInfo({orders}) {
    console.log(orders)
    let counter = 1;
    return (
        <CenteredContent>
            <div>
                {orders.map((order) => {
                    return (
                        <Order key={order.customerHash} order={order} counter={counter++}/>
                    );
                })}
            </div>
        </CenteredContent>
    );
}