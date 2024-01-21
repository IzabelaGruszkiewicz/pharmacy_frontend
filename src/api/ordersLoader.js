import {BACK_END_URL} from "../constants/api.js";

export function ordersLoader() {
    const customerTable = JSON.parse(localStorage.getItem('sb-fpcfzrevqqlgeikifvkr-auth-token'));
    const customerHash = customerTable.user.id;

    return(
        fetch(`${BACK_END_URL}/customer/orders/${customerHash}`)
    );
}