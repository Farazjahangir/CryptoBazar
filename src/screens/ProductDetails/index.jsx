import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { CheckCircle } from "@mui/icons-material";
import { Box, Container } from "@mui/system";

import Rating from "../../Components/Rating";
import Counter from "../../Components/Counter";
import shoe from "../../assets/images/shoe.jpg";
import Button from "../../Components/Button";
import ReviewSection from "./ReviewSection";
import styles from "./style.module.scss";

const ProductDetails = () => {
  const [count, setCount] = useState(0);

  const onAdd = () => {
    setCount(count + 1);
  };

  const onMinus = () => {
    if (count) {
      setCount(count - 1);
    }
  };

  const onInputChange = (val) => {
    setCount(val);
  };

  return (
    <Container sx={{ marginTop: 10 }}>
      <Grid container spacing={2}>
        <Grid item sm={6} xs={12}>
          <img src={shoe} className={styles.image} />
        </Grid>
        <Grid
          item
          // lg={6}
          sm={6}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p className={styles.categoryName}>Category</p>
          <p className={styles.productName}>Product Name</p>
          <div className={styles.priceBox}>
            <p className={styles.price}>50$</p>
            <Rating readonly={true} />
          </div>
          <p className={styles.productAbout}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className={styles.counterBox}>
            <Counter
              value={count}
              onAdd={onAdd}
              onMinus={onMinus}
              onInputChange={onInputChange}
              containerClass={styles.counterContainer}
            />
            <div className={styles.btnBox}>
              <Button value="Add to Cart" />
            </div>
          </div>
          <div className={styles.borderLine1} />
          <div className={styles.info}>
            <div className={styles.checkMarks}>
              <CheckCircle fontSize="small" sx={{ color: "#05c46b" }} />
              <p className={styles.text}>No-Risk Money Back Guarantee!</p>
            </div>
            <div className={styles.checkMarks}>
              <CheckCircle fontSize="small" sx={{ color: "#05c46b" }} />
              <p className={styles.text}>No Hassle Refunds</p>
            </div>
            <div className={styles.checkMarks}>
              <CheckCircle fontSize="small" sx={{ color: "#05c46b" }} />
              <p className={styles.text}>Secure Payments</p>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className={styles.reviewSection}>
        <ReviewSection />
      </div>
    </Container>
  );
};

export default ProductDetails;
