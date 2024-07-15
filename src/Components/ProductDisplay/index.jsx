import {
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";

import shoe from "../../assets/images/shoe.jpg";
import maleIcon from "../../assets/icons/maleIcon.png";
import femaleIcon from "../../assets/icons/femaleIcon.png";
import Rating from "../../Components/Rating";
import styles from "./styles.module.scss";

const ProductDisplay = () => {
  return (
    <div>
      <Card sx={{ borderRadius: 3 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          image={shoe}
        />
        <CardContent>
          <div className={styles.detailsBox}>
            <p className={styles.productName}>Shoe Name</p>
            <p className={styles.productTypeText}>Product Type</p>
            <div className={styles.miniBox}>
              <p className={styles.price}>50$</p>
              <Rating value={3} readonly={true} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductDisplay;
