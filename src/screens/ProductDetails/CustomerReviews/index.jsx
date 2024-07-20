import { LinearProgress, Grid, Divider } from "@mui/material";

import Rating from "../../../Components/Rating";
import { reviews } from "../../../constants/dummy";
import styles from "./style.module.scss";

const CustomerReviews = () => {
  return (
    <div>
      <Grid container alignItems="center" spacing={3} sx={{ minHeight: 280 }}>
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: '100%'
          }}
        >
          <div className={styles.avgRatingBox}>
            <Rating value={4} />
            <p className={styles.avgRatingCount}>4.00 out 5</p>
          </div>
          <p className={styles.text}>Based on 10 Reviews</p>
        </Grid>
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: '100%'
          }}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <div className={styles.ratingsProgress}>
              <Rating value={item} />
              <div className={styles.barBox}>
                <LinearProgress
                  value={50}
                  variant="determinate"
                  classes={{
                    bar1Determinate: styles.innerBar,
                    determinate: styles.bar,
                  }}
                />
              </div>
              <p className={styles.ratingCount}>22</p>
            </div>
          ))}
        </Grid>
      </Grid>
      <Divider />
      {reviews.map((item) => (
        <>
          <div className={styles.reviewsBox}>
            <div className={styles.img} />
            <div className={styles.nameBox}>
              <p>Faraz Jahangir</p>
              <Rating value={item.rating} size="small" />
            </div>
          </div>
          <p className={styles.review}>{item.review}</p>
          <Divider />
        </>
      ))}
    </div>
  );
};

export default CustomerReviews;
