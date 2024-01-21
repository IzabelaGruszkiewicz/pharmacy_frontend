import {useEffect, useState} from "react";
import {BACK_END_URL} from "../../constants/api.js";
import toast from "react-hot-toast";
import {FlexCartContainer} from "../../components/FlexCartContainter/FlexCartContainter.jsx";
import styles from "../../components/FlexCartContainter/FlexCartContainer.module.css"

export function Summary() {
    const [delivery, setDelivery] = useState([]);
    const [selectedDelivery, setSelectedDelivery] = useState('');
    const [payments, setPayments] = useState([]);
    const [selectedPayment, setSelectedPayment] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const cartProducts = JSON.parse(localStorage.getItem('cart_products'));
    const pricesArray = cartProducts.map(product => product.price);
    const totalPrice = pricesArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    const deliveryCost = 12;
    const minSumForFreeDelivery= 129;
    const totalCostWithDelivery = (totalPrice > minSumForFreeDelivery ? totalPrice : totalPrice + deliveryCost).toFixed(2);

    const customerTable = JSON.parse(localStorage.getItem('sb-fpcfzrevqqlgeikifvkr-auth-token'));
    const customerHash = customerTable.user.id;
    const customerEmail = customerTable.user.email;
    const customerFullname = customerTable.user.user_metadata.fullName;


    useEffect(() => {
        const fetchDelivery = async () => {
            try {
                const response = await fetch(`${BACK_END_URL}/delivery`);
                if (response.ok) {
                    const data = await response.json();
                    setDelivery(data);
                } else {
                    console.error('Błąd pobierania danych dostawy:', response.statusText);
                }
            } catch (error) {
                console.error('Błąd pobierania danych dostawy:', error.message);
            }
        };

        fetchDelivery();
    }, []);
    const handleDeliveryChange = (e) => {
        setSelectedDelivery(e.target.value);
    };


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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData={
            fullName: customerFullname,
            email: customerEmail,
            city: city,
            address: address,
            postalCode: postalCode,
            phoneNumber: phoneNumber,
            selectedDelivery: selectedDelivery,
            selectedPayment: selectedPayment,
            totalCost: totalCostWithDelivery,
            customerHash: customerHash,
        };

        try {
            const response = await fetch(`${BACK_END_URL}/order/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Dodano zamówienie")
            } else {
                toast.error("Spróbuj ponownie")
            }
        } catch (error) {
            console.error('Wystąpił błąd:', error);
        }

        setCity('');
        setAddress('');
        setPostalCode('');
        setPhoneNumber('');
        setSelectedDelivery('');
        setSelectedPayment('');
    };


    return (
        <form onSubmit={handleSubmit}>
            <FlexCartContainer>
                <div>
                    <h2>Informacje o dostawie:</h2>

                    <label>
                        Miasto:
                        <textarea
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </label>
                    <br/>
                    <label>
                        Adres:
                        <textarea
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </label>
                    <br/>
                    <label>
                        Kod pocztowy:
                        <textarea
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                    </label>
                    <br/>
                    <label>
                        Numer telefonu:
                        <textarea
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </label>
                    <br/>
                </div>
                <div>
                    <h2>Wybierz sposób dostawy:</h2>
                    <select value={selectedDelivery} onChange={handleDeliveryChange}>
                        <option value="">Kliknij, aby rozwinąć listę</option>
                        {delivery.map((delivery) => (
                            <option key={delivery.name} value={delivery.name}>
                                {delivery.name}
                            </option>
                        ))}
                    </select>
                    {selectedDelivery && (
                        <p>Wybrano: {selectedDelivery}</p>
                    )}
                </div>
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
                <button type="submit" className={styles.myButton}>Złóż zamówienie</button>
            </FlexCartContainer>
        </form>
    )
}