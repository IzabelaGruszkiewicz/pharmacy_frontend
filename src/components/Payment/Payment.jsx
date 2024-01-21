import {useEffect, useState} from "react";
import {BACK_END_URL} from "../../constants/api.js";

export function Payment() {
    const [payments, setPayments] = useState([]);
    const [selectedPayment, setSelectedPayment] = useState('');

    useEffect(() => {
        const fetchPayments = async () => {
            try {
                const response = await fetch(`${BACK_END_URL}/payment`);
                if (response.ok) {
                    const data = await response.json();
                    setPayments(data);
                } else {
                    console.error('Błąd pobierania danych dostawy:', response.statusText);
                }
            } catch (error) {
                console.error('Błąd pobierania danych dostawy:', error.message);
            }
        };

        fetchPayments();
    }, []);
    const handlePaymentChange = (e) => {
        setSelectedPayment(e.target.value);
    };

    return (
        <div>
            <h2>Wybierz sposób płatności:</h2>
            <select value={selectedPayment} onChange={handlePaymentChange}>
                <option value="">Kliknij, aby rozwinąć listę</option>
                {payments.map((payment) => (
                    <option key={payment.name} value={payment.name}>
                        {payment.name}
                    </option>
                ))}
            </select>
            {selectedPayment && (
                <p>Wybrano: {selectedPayment}</p>
            )}
        </div>
    );
}