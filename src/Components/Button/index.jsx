import clsx from "clsx";
import ClipLoader from "react-spinners/ClipLoader";

import styles from "./styles.module.scss";

const Button = ({ value, onClick, containerClass, loading, disabled }) => {
  console.log("disabled", disabled)
  const handleClick = () => {
    if (loading || disabled) return;
    onClick?.();
  };
  return (
    <div className={clsx(styles.container, containerClass, disabled && styles.disable)} onClick={handleClick}>
      {loading && (
        <ClipLoader
          color={"#ff7a63"}
          loading={loading}
          size={17}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
      {!loading && <p className={styles.text}>{value}</p>}
    </div>
  );
};

export default Button;
