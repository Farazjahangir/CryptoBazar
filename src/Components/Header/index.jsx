import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { useDrawer } from "../../ContextApi/DrawerContext";
import userIcon from "../../assets/icons/user.png"
import cartIcon from "../../assets/icons/cart.png"
import styles from "./style.module.scss"


const Header = () => {
  const { setDrawerState, drawerState } = useDrawer();
  const navigate = useNavigate()

  const navigateTo = (path) => {
    navigate(path)
  }

  const toggleDrawer = () => {
    setDrawerState(!drawerState)
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <p onClick={() => navigateTo("/")}>CryptoBazar</p>
        <div className={styles.linkBox}>
            <p className={styles.link} onClick={() => navigateTo('/shop')}>Shop</p>
            <p className={styles.link}>About</p>
            <p className={styles.link}>Contact</p>
        </div>
      </div>
      <div>
        <img src={userIcon} className={styles.userIcon} onClick={() => navigateTo('/profile')} />
        <img src={cartIcon} className={styles.cartIcon} onClick={toggleDrawer} />
      </div>
    </div>
  );
};

export default Header;
