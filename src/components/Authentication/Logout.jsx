import LOGOUT_ICON from "../../assets/logout.svg"
import {UseLogout} from "../../api/useLogout.js"
import styles from "./Logout.module.css"

function Logout(){
    const {logout, isLoading} = UseLogout();
    return(
        <button className={styles.button} disabled={isLoading} onClick={logout}>
            <img src={LOGOUT_ICON}/>
        </button>
    );
}
export default Logout;