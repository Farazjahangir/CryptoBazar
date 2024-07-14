import { Tooltip } from "@mui/material";

import shoe from "../../assets/images/shoe.jpg";
import maleIcon from "../../assets/icons/maleIcon.png";
import femaleIcon from "../../assets/icons/femaleIcon.png";
import Rating from "../../Components/Rating";
import styles from "./styles.module.scss";

const ProductDisplay = () => {
  return (
    <div className={styles.productBox}>
      <div className={styles.imageDiv}>
        <img src={shoe} className={styles.productImg} />
        <div className={styles.ratingDiv}>
          <Rating value={3} readonly={true} />
        </div>
      </div>
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
};

export default ProductDisplay;
