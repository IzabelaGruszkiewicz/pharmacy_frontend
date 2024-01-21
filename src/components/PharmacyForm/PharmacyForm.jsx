import {useState} from "react";
import {BACK_END_URL} from "../../constants/api.js";
import styles from "../PharmacyForm/PharmacyForm.module.css"
import toast from "react-hot-toast";

export function PharmacyForm(){
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        openingHour: '',
        closingHour: '',
        phoneNumber: '',
        x: '',
        y: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${BACK_END_URL}/pharmacy/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Dodano aptekę")
                console.log('Apteka została dodana pomyślnie.');
            } else {
                toast.error("Spróbuj ponownie")
                console.error('Wystąpił błąd podczas dodawania apyeki.');
            }
        } catch (error) {
            console.error('Wystąpił błąd:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.pharmacyForm}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required/>
            </label>
            <label>
                Location:
                <input type="text" name="location" value={formData.location} onChange={handleChange} required />
            </label>

            <label>
                OpeningHour:
                <input type="text" name="openingHour" value={formData.openingHour} onChange={handleChange} required />
            </label>

            <label>
                ClosingHour:
                <input type="text" name="closingHour" value={formData.closingHour} onChange={handleChange} required />
            </label>

            <label>
                PhoneNumber:
                <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
            </label>

            <label>
                X:
                <input type="text" name="x" value={formData.x} onChange={handleChange} required/>
            </label>

            <label>
                Y:
                <input type="text" name="y" value={formData.y} onChange={handleChange} required />
            </label>


            <button className={styles.myButton} type="submit">Dodaj aptekę</button>
        </form>
    );
}