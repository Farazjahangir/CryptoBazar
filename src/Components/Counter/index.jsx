import clsx from "clsx"

import plusIcon from "../../assets/icons/plus.png"
import minusIcon from "../../assets/icons/minus.png"
import styles from "./styles.module.scss"

const Counter = ({
    onAdd,
    onMinus,
    value,
    onInputChange,
    containerClass
}) => {

    const onChange = (e) => {
        if (isNaN(e.target.value)) return
        onInputChange(Number(e.target.value), e)
    }

    return (
        <div className={clsx(styles.container, containerClass)}>
            <div className={styles.iconBox} onClick={onMinus}>
                <img src={minusIcon} className={styles.icon} />
            </div>
            <div>
                <input className={styles.input} value={value} onChange={onChange} />
            </div>
            <div className={styles.iconBox} onClick={onAdd}>
                <img src={plusIcon} className={styles.icon} />
            </div>
        </div>
    )
}

export default Counter