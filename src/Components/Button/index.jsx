import clsx from "clsx"

import styles from "./styles.module.scss"

const Button = ({
    value,
    onClick,
    containerClass
}) => {
    return (
        <div className={clsx(styles.container, containerClass)} onClick={onClick}>
            <p className={styles.text}>{value}</p>
        </div>
    )
}

export default Button