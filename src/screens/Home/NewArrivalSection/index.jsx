import clsx from "clsx";

import ProductDisplay from "../../../Components/ProductDisplay";
import styles from "./style.module.scss";

const NewArrivalSection = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>New Arrival</p>
      <h1>Discover the Latest Additions</h1>
      <div className={styles.box}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
          return (
           <ProductDisplay />
          );
        })}
      </div>
    </div>
  );
};

export default NewArrivalSection;
