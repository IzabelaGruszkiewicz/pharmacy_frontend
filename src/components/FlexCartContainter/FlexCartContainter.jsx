import styles from "./FlexCartContainer.module.css";

export function FlexCartContainer({children}){
    return (
        <div className={styles.flexCartContainer}>{children}</div>
    );
}