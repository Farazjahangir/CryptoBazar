import Grid from "@mui/material/Grid";

import CollapseList from "../../Components/CollapseList";
import { categories } from "../../constants/dummy";
import ProductDisplay from "../../Components/ProductDisplay";
import styles from "./style.module.scss";
import { margin, maxWidth } from "@mui/system";

const Shop = () => {
  const handleClick = (item) => {
    console.log("ITEM", item);
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        {/* <p className={styles.heading}>Categories</p> */}
        <CollapseList
          data={categories}
          subListName="subCategories"
          subListOnClick={handleClick}
        />
      </div>
      <div className={styles.rightContainer}>
        <Grid container spacing={2}>
          {[1,2,3,4,5,6,7,8,9].map((item) => (
            <Grid xs={12} sm={6} md={4} lg={3} item>
              <ProductDisplay />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Shop;
