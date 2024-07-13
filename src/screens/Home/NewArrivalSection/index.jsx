import clsx from "clsx";

import shoe from "../../../assets/images/shoe.jpg";
import maleIcon from "../../../assets/icons/maleIcon.png";
import femaleIcon from "../../../assets/icons/femaleIcon.png";
import { Tooltip } from "@mui/material";
import styles from "./style.module.scss";

const NewArrivalSection = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>New Arrival</p>
      <h1>Discover the Latest Additions</h1>
      <div className={styles.box}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
          return (
            <div className={styles.productBox}>
              <img src={shoe} className={styles.productImg} />
              <div className={styles.detailsBox}>
                <div className={styles.miniBox}>
                  <p className={styles.productTypeText}>product Type</p>
                  <p className={styles.price}>50$</p>
                </div>
                <div className={styles.miniBox}>
                  <p className={styles.productName}>Shoe Name</p>
                  <Tooltip title="Male" placement="top">
                    <img src={maleIcon} className={styles.genderIcon} />
                  </Tooltip>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewArrivalSection;
