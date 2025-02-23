import { Card, CardContent, CardMedia } from "@mui/material";

import shoe from "../../assets/images/shoe.jpg";
import maleIcon from "../../assets/icons/maleIcon.png";
import femaleIcon from "../../assets/icons/femaleIcon.png";
import Rating from "../../Components/Rating";
import styles from "./styles.module.scss";

const ProductDisplay = ({ onClick = () => {}, data = {} }) => {
  return (
    <Card sx={{ borderRadius: 3, cursor: "pointer" }} onClick={onClick}>
      <CardMedia component="img" alt="green iguana" image={data?.image} width={300} height={300} />
      <CardContent>
        <div className={styles.detailsBox}>
          <p className={styles.productName}>{data.name}</p>
          <p className={styles.productTypeText}>{data.category.name}</p>
          <div className={styles.miniBox}>
            <p className={styles.price}>{data.price} ETH</p>
            <Rating value={3} readonly={true} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductDisplay;
