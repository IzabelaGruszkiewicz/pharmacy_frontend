import {LoginForm} from "../../components/LoginForm/LoginForm.jsx";
import {Link} from "react-router-dom";
import styles from "../../components/ProductForm/ProductForm.module.css"

export function Login() {
    return (
        <>
            <h2 style={{textAlign: "center", margin: "20px 0"}}>Logowanie</h2>
            <div>
                <LoginForm/>
                <Link to={"/rejestracja"}>
                    <button className={styles.myButtonRegister}>Zarejestruj się</button>
                </Link>
            </div>

        </>
    );
}