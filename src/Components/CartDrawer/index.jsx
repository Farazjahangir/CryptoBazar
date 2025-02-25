import { useState } from "react";
import { Close } from "@mui/icons-material";
import { Divider, Typography } from "@mui/material";
import Counter from "../Counter";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useDrawer } from "../../ContextApi/DrawerContext";
import Button from "../Button";
import shoe from "../../assets/images/shoe.jpg";
import Drawer from "../Drawer";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/cartSlice";
import styles from "./style.module.scss";
import { calculateTotal } from "../../utils/globalHelpers";
import { SCREEN_PATHS } from "../../constants";

const CartDrawer = ({ open }) => {
  const [counter, setCounter] = useState(1);
  const { drawerState, setDrawerState } = useDrawer();
  const dispatch = useDispatch();
  const [account, setAccount] = useState(null);

  const navigate = useNavigate()
  const cart = useSelector((state) => state.cart.cart);

  const toggleDrawer = () => {
    setDrawerState(!drawerState);
  };

  const onAdd = (item) => {
    dispatch(incrementQuantity(item.item.id));
  };

  const onMinus = (item) => {
    dispatch(decrementQuantity(item.item.id));
  };

  const onRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };


  const goToCheckout = () => {
    navigate(SCREEN_PATHS.PAYMENT)
    setDrawerState(false)
  }

  return (
    <Drawer open={drawerState} minWidth={380} onClose={toggleDrawer}>
      <div className={styles.container}>
        <div className={styles.pad18}>
          <div className={styles.header}>
            <div className={styles.headerLeftSection}>
              <h2>Cart</h2>
              {!cart.length && (
                <h2 className={styles.itemCount}>{cart.length}</h2>
              )}
            </div>
            <Close
              fontSize="large"
              className={styles.closeIcon}
              onClick={toggleDrawer}
            />
          </div>
        </div>
        <Divider />
        <div
          className={clsx(
            styles.productContainer,
            !cart.length && styles.emptyCartMessage
          )}
        >
          {!cart.length && (
            <Typography fontSize={19}>You have 0 items in cart</Typography>
          )}
          {cart.map((cartItem) => (
            <>
              <div className={styles.pad18}>
                <div className={styles.productBox}>
                  <div
                    style={{ backgroundImage: `url(${cartItem.item.image})` }}
                    className={styles.productImg}
                  />
                  <div className={styles.productDetailsBox}>
                    <div className={styles.productNameBox}>
                      <p className={styles.productName}>{cartItem.item.name}</p>
                      <Close
                        className={styles.closeIcon}
                        onClick={() => onRemoveFromCart(cartItem.item.id)}
                      />
                    </div>
                    <div className={styles.counterBox}>
                      <Counter
                        value={cartItem.quantity}
                        onAdd={() => onAdd(cartItem)}
                        onMinus={() => onMinus(cartItem)}
                      />
                    </div>
                    <p className={styles.price}>
                      {cartItem.item.price * cartItem.quantity} ETH
                    </p>
                  </div>
                </div>
              </div>
              <Divider />
            </>
          ))}
        </div>
        {!!cart.length && (
          <div className={clsx(styles.footer, styles.pad18)}>
            <div className={styles.totalBox}>
              <p>Subtotal</p>
              <p>{calculateTotal(cart)}</p>
            </div>
            <Button value="Checkout" onClick={goToCheckout} />
          </div>
        )}
      </div>
    </Drawer>
  );
};

export default CartDrawer;
