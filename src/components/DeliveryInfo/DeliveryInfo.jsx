import {useState} from "react";

export function DeliveryInfo() {
    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const deliveryInfoData = {
            fullName: fullName,
            address: address,
        };
        onSubmit(deliveryInfoData);
    };

    return (
        <div>
            <h2>Informacje o dostawie</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Imię i nazwisko:
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                    />
                </label>
                <br />

                <label>
                    Adres dostawy:
                    <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </label>
                <br />
            </form>
        </div>
    );

}