import Grid from "@mui/material/Grid";
import { Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";

import CollapseList from "../../Components/CollapseList";
import { categories } from "../../constants/dummy";
import ProductDisplay from "../../Components/ProductDisplay";
import styles from "./style.module.scss";
import { margin, maxWidth } from "@mui/system";

const Shop = () => {
  const navigate = useNavigate();

  const handleClick = (item) => {
    console.log("ITEM", item);
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <CollapseList
          data={categories}
          subListName="subCategories"
          subListOnClick={handleClick}
        />
      </div>
      <div className={styles.rightContainer}>
        <Grid container spacing={2}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
            <Grid xs={12} sm={6} md={4} lg={3} item>
              <ProductDisplay onClick={() => navigateTo("/product-details")} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Shop;
