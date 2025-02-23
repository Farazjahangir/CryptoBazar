import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import {
  Drawer,
  Typography,
  Box,
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import ClipLoader from "react-spinners/ClipLoader";

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import CollapseList from "../../Components/CollapseList";
// import { categories } from "../../constants/dummy";
import ProductDisplay from "../../Components/ProductDisplay";
import { useGetProducts } from "../../hooks/reactQuery/useGetProducts";
import styles from "./style.module.scss";
import { SCREEN_PATHS } from "../../constants";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const navigate = useNavigate();
  const { data: categoryRes } = useSelector((state) => state.category);
  const { data: productRes, isFetching } = useGetProducts({
    params: {
      categoryId: selectedCategory,
    },
    options: {
      enabled: !!selectedCategory,
    },
  });

  const products = productRes ?? [];
  const categories = categoryRes ?? [];

  const handleClickCategory = (id) => {
    setSelectedCategory(id);
  };

  const navigateTo = (path) => {
    navigate(path);
  };

  useEffect(() => {
    if (categories.length) {
      setSelectedCategory(categories[0].id)
    }
  }, [categories])
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <List
          subheader={
            <ListSubheader
              component="div"
              id="nested-list-subheader"
              sx={{ fontSize: 20, color: "black" }}
            >
              Categories
            </ListSubheader>
          }
        >
          {categories.map((item) => (
            <ListItemButton
              sx={{ pl: 4, paddingY: 0 }}
              onClick={() => handleClickCategory(item.id)}
            >
              <ListItemText
                primary={item.name}
                sx={{
                  color: selectedCategory === item.id ? "#ff6348" : "#000000",
                }}
              />
            </ListItemButton>
          ))}
        </List>
      </div>
     {isFetching && <Box width='100%' display='flex' justifyContent='center' alignItems='center'>
        <ClipLoader />
      </Box>}
      {!isFetching && (
        <div className={styles.rightContainer}>
          <Grid container spacing={2}>
            {!products.length && (
              <Box display='flex' width='100%' justifyContent='center' mt={2}>
                <Typography mt={3} variant="h5">
                  No Data
                </Typography>
              </Box>
            )}
            {products.map((item) => (
              <Grid xs={12} sm={6} md={4} lg={3} item>
                <ProductDisplay
                  onClick={() => navigateTo(`${SCREEN_PATHS.PRODUCT_DETAILS}/${item.id}`)}
                  data={item}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Shop;
