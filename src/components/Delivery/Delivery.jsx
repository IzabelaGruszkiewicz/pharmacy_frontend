import {useEffect, useState} from "react";
import {BACK_END_URL} from "../../constants/api.js";

export function Delivery() {
    const [delivery, setDelivery] = useState([]);
    const [selectedDelivery, setSelectedDelivery] = useState('');

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

    return (
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
    );

}