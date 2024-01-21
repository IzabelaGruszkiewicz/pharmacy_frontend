import {useState} from "react";
import {useLogin} from "../../api/useLogin.js";
import styles from "../ProductForm/ProductForm.module.css"

export function LoginForm() {
    const [email, setEmail] = useState("izabela@example.com");
    const [password, setPassword] = useState("lekolandia");
    const {login, isLoading} = useLogin();

    function handleSubmit(e) {
        e.preventDefault();
        if (!email || !password) return;
        login({email, password},
            {
                onSettled: () => {
                    setEmail("");
                    setPassword("");
                },
            }
        );
    }

    return (
        <form onSubmit={handleSubmit} className={styles.productForm}>
            <label>
                Email address:
                <input type="email" id="email" autoComplete="username" value={email}
                       onChange={(e) => setEmail(e.target.value)} disabled={isLoading}/>
            </label>

            <label>
                Password:
                <input type="password" id="password" autoComplete="current-password" value={password}
                       onChange={(e) => setPassword(e.target.value)} disabled={isLoading}/>
            </label>
            <button type="submit" disabled={isLoading} className={styles.myButton}>Login</button>
        </form>
    );
}