import clsx from "clsx";

import shoe from "../../../assets/images/shoe.jpg";
import styles from "./style.module.scss";

const NewArrivalSection = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>New Arrival</p>
      <h1>Discover the Latest Additions</h1>
      <div className={styles.box}>
        {[1, 2, 3, 4, 5, 6, 7, 8,9,10].map((i) => {
          return (
            <div className={styles.productBox}>
              <img src={shoe} className={styles.productImg} />
              <div className={styles.detailsBox}>
              <p className={styles.genderType}>product Type</p>
                <p className={styles.productName}>Shoe Name</p>
                <p className={styles.genderType}>Men</p>
                <p className={styles.price}>50$</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewArrivalSection;
