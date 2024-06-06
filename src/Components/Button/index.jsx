import styles from "./styles.module.scss"

const Button = ({
    value,
    onClick
}) => {
    return (
        <div className={styles.container} onClick={onClick}>
            <p className={styles.text}>{value}</p>
        </div>
    )
}

export default Button