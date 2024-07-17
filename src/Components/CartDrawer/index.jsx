import { useState } from "react";
import { Close } from "@mui/icons-material";
import { Divider } from "@mui/material";
import Counter from "../Counter";
import clsx from "clsx";

import Button from "../Button";
import shoe from "../../assets/images/shoe.jpg";
import Drawer from "../Drawer";
import styles from "./style.module.scss";

const CartDrawer = () => {
  const [counter, setCounter] = useState(1);
  return (
    <Drawer open={true} minWidth={380}>
      <div className={styles.container}>
        <div className={styles.pad18}>
          <div className={styles.header}>
            <div className={styles.headerLeftSection}>
              <h2>Cart</h2>
              <h2 className={styles.itemCount}>3</h2>
            </div>
            <Close fontSize="large" className={styles.closeIcon} />
          </div>
        </div>
        <Divider />
        <div className={styles.productContainer}>
          {[1, 2, 3, 4].map((item) => (
            <>
              <div className={styles.pad18}>
                <div className={styles.productBox}>
                  <div className={styles.productImg} />
                  <div className={styles.productDetailsBox}>
                    <div className={styles.productNameBox}>
                      <p className={styles.productName}>Shoe</p>
                      <Close className={styles.closeIcon} />
                    </div>
                    <div className={styles.counterBox}>
                      <Counter value={counter} />
                      <p className={styles.price}>50$</p>
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
            </>
          ))}
        </div>
        <div className={clsx(styles.footer, styles.pad18)}>
          <div className={styles.totalBox}>
            <p>Subtotal</p>
            <p>100$</p>
          </div>
          <Button value="Checkout" />
        </div>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
