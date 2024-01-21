import styles from "./Footer.module.css";
import ADMIN_ICON from "../../assets/admin.svg";
import {Link} from "react-router-dom";

export function Footer() {
    return (<div className={styles.footer}>
            <p>
                Lekoladnia Kraków 537-249-29-24
            </p>
            <ul style={{marginLeft: "15px"}}>
                <li>
                    <Link to="/admin">
                        <img src={ADMIN_ICON}/>
                    </Link>
                </li>
            </ul>
        </div>
    )
}