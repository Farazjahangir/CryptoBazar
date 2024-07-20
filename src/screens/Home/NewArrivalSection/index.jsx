import clsx from "clsx";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

import ProductDisplay from "../../../Components/ProductDisplay";
import styles from "./style.module.scss";

const NewArrivalSection = () => {
  const navigate = useNavigate()

  const navigateTo = (path) => {
    navigate(path)
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>New Arrival</p>
      <h1 className={styles.title2}>Discover the Latest Additions</h1>
      <div className={styles.box}>
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => {
            return (
              <Grid xs={6} md={4} lg={3} item>
                <ProductDisplay onClick={() => navigateTo('/product-details')} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default NewArrivalSection;
