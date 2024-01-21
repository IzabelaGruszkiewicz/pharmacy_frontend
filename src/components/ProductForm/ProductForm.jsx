import {useState} from "react";
import styles from "./ProductForm.module.css"
import {BACK_END_URL} from "../../constants/api.js";
import toast from "react-hot-toast";

export function ProductForm() {

    const [formData, setFormData] = useState({
        brand: '',
        name: '',
        price: 0,
        amountToAdd: 0,
        photoPath: '',
        description: '',
        categoryId: 0,
        subcategoryId: 0,
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({...prevData, [name]: value}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${BACK_END_URL}/product/add`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Dodano produkt")
                console.log('Produkt został dodany pomyślnie.');
            } else {
                toast.error("Spróbuj ponownie")
                console.error('Wystąpił błąd podczas dodawania produktu.');
            }
        } catch (error) {
            console.error('Wystąpił błąd:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.productForm}>
            <label>
                Brand:
                <input type="text" name="brand" value={formData.brand} onChange={handleChange} required/>
            </label>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>

            <label>
                Price:
                <input type="number" name="price" value={formData.price} onChange={handleChange} required />
            </label>

            <label>
                Amount to Add:
                <input type="number" name="amountToAdd" value={formData.amountToAdd} onChange={handleChange} required />
            </label>

            <label>
                Photo Path:
                <input type="text" name="photoPath" value={formData.photoPath} onChange={handleChange} required />
            </label>

            <label>
                Description:
                <input type="text" name="description" value={formData.description} onChange={handleChange} required />
            </label>

            <label>
                Category ID:
                <input type="number" name="categoryId" value={formData.categoryId} onChange={handleChange} required />
            </label>

            <label>
                Subcategory ID:
                <input type="number" name="subcategoryId" value={formData.subcategoryId} onChange={handleChange} required />
            </label>

            <button className={styles.myButton} type="submit">Dodaj produkt</button>
        </form>
    );
}