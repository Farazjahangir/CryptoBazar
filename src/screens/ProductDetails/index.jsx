import { useState, useEffect, useMemo } from "react";
import Grid from "@mui/material/Grid";
import { CheckCircle } from "@mui/icons-material";
import { Box, Container } from "@mui/system";
import { useNavigate, useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery, useTheme } from "@mui/system";

import Rating from "../../Components/Rating";
import Counter from "../../Components/Counter";
import shoe from "../../assets/images/shoe.jpg";
import Button from "../../Components/Button";
import ReviewSection from "./ReviewSection";
import styles from "./style.module.scss";
import { useGetProductById } from "../../hooks/reactQuery/useGetProductById";
import { SCREEN_PATHS } from "../../constants";
import Chip from "../../Components/Chip";
import { Typography } from "@mui/material";
import { toggleLoader } from "../../redux/fullScreenLoaderSlice";
import { addToCart } from "../../redux/cartSlice";
import { useDrawer } from "../../ContextApi/DrawerContext";

const ProductDetails = () => {
  const [count, setCount] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isSmallerThanMedium = useMediaQuery(theme.breakpoints.down("md"));
  const { setDrawerState } = useDrawer();
  const cart = useSelector(state => state.cart.cart)

  const { data, isFetching } = useGetProductById({
    params: {
      id,
    },
    options: {
      enabled: !!id,
    },
  });

  useEffect(() => {
    if (!id) {
      navigate(SCREEN_PATHS.HOME);
    }
  }, []);

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

  const onAddToCart = () => {
    dispatch(
      addToCart({
        item: data,
        quantity: count,
      })
    );
    setDrawerState(true)
  };

  useEffect(() => {
    dispatch(toggleLoader(isFetching));
  }, [isFetching]);

  const fromCart = useMemo(() => {
    if (data && cart.length) {
      const foundItem = cart.find(item => item.item.id === data.id)
      if (foundItem) {
        setCount(foundItem.quantity)
        return foundItem
      }
      return null
    }
    return null
  }, [data, cart])

  return (
    <Container sx={{ marginTop: 10 }}>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          {/* <img src={shoe} className={styles.image} /> */}
          <Box
            width="100%"
            height={isSmallerThanMedium ? 500 : "100%"}
            sx={{
              backgroundImage: `url(${data?.image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Grid>
        <Grid
          item
          // lg={6}
          md={6}
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p className={styles.categoryName}>{data?.category?.name}</p>
          <p className={styles.productName}>{data?.name}</p>
          {data?.sizes && Array.isArray(data.sizes) && data?.sizes.length && (
            <Box display="flex" alignItems="center" gap={1.4} mb={2}>
              <Typography>Sizes:</Typography>
              {data.sizes.map((item) => (
                <Chip label={item} size="small" selected />
              ))}
            </Box>
          )}
          {data?.colors &&
            Array.isArray(data.colors) &&
            data?.colors.length && (
              <Box display="flex" alignItems="center" gap={1.4} mb={2}>
                <Typography>Colors:</Typography>
                {data.colors.map((item) => (
                  <Box
                    sx={{ backgroundColor: item }}
                    width={20}
                    height={20}
                    borderRadius={10}
                  />
                ))}
              </Box>
            )}
          <div className={styles.priceBox}>
            <p className={styles.price}>{data?.price} ETH</p>
            <Rating readonly={true} />
          </div>
          <p className={styles.productAbout}>{data?.description}</p>
          <div className={styles.counterBox}>
            <Counter
              value={count}
              onAdd={onAdd}
              onMinus={onMinus}
              onInputChange={onInputChange}
              containerClass={styles.counterContainer}
            />
            <div className={styles.btnBox}>
              <Button
                value={fromCart ? "Update cart" : "Add to cart"}
                onClick={onAddToCart}
                disabled={count <= 0}
              />
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
