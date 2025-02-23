import clsx from "clsx";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { Box } from "@mui/system";

import ProductDisplay from "../../../Components/ProductDisplay";
import { useGetProducts } from "../../../hooks/reactQuery/useGetProducts";
import styles from "./style.module.scss";
import { Typography } from "@mui/material";
import { SCREEN_PATHS } from "../../../constants";

const NewArrivalSection = () => {
  const navigate = useNavigate();
  const { data: productsRes, isFetching } = useGetProducts({
    params: {
      limitCount: 6,
    },
  });

  const products = productsRes ?? [];
  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>New Arrival</p>
      <h1 className={styles.title2}>Discover the Latest Additions</h1>
      <div className={styles.box}>
        <Grid container spacing={2}>
          {isFetching && (
            <Box display="flex" justifyContent="center" width="100%" mt={3}>
              <ClipLoader />
            </Box>
          )}
          {!isFetching &&
            products.length &&
            products.map((item) => {
              return (
                <Grid xs={6} md={4} lg={3} item>
                  <ProductDisplay
                    onClick={() =>
                      navigateTo(`${SCREEN_PATHS.PRODUCT_DETAILS}/${item.id}`)
                    }
                    data={item}
                  />
                </Grid>
              );
            })}
          {!isFetching && !products.length && <Typography>No Data</Typography>}
        </Grid>
      </div>
    </div>
  );
};

export default NewArrivalSection;
