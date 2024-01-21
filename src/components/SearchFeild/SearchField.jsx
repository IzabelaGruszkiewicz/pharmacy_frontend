import {NavLink} from "react-router-dom";
import styles from "./SearchField.module.css"
import {useState} from "react";

export function SearchField() {
    const [productBrand, setProductBrand] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setProductBrand("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className={styles.formContainer}>
                <label className={styles.label}>
                    <input
                        type="text"
                        value={productBrand}
                        onChange={(e) => setProductBrand(e.target.value)}
                        className={styles.input}
                        placeholder="Wyszukaj markę"
                    />
                </label>
                <NavLink to={`/szukaj/${productBrand}`}>
                    <button type="submit" className={styles.myButton}>Szukaj</button>
                </NavLink>
            </form>
        </div>
    );
}

