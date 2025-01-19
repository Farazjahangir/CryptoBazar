import clsx from "clsx";
import ClipLoader from "react-spinners/ClipLoader";

import styles from "./styles.module.scss";

const Button = ({ value, onClick, containerClass, loading }) => {
  const handleClick = () => {
    if (loading) return;
    onClick?.();
  };
  return (
    <div className={clsx(styles.container, containerClass)} onClick={handleClick}>
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
