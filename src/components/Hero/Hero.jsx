import {CenteredContent} from "../CenteredContent/CenteredContent.jsx";
import styles from "./Hero.module.css";
import {FullWidthButton} from "../FullWidthButton/FullWidthButton.jsx";
import {Link} from "react-router-dom";

export function Hero({heroImage}) {
    return (
        <div className={styles.hero} style={{backgroundImage: `url(${heroImage})`}}>
            <CenteredContent>
                <div className={styles.contentWrapper}>
                    <h2>Zobacz zimowe promocje</h2>
                    <p>Darmowa dostawa powyżej 129 zł</p>
                    <Link to={"/promocje"}>
                        <FullWidthButton>
                            Sprawdź
                        </FullWidthButton>
                    </Link>
                </div>
            </CenteredContent>
        </div>
    );
}
