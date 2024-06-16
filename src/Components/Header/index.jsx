import userIcon from "../../assets/icons/user.png"
import cartIcon from "../../assets/icons/cart.png"
import styles from "./style.module.scss"


const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <p>CryptoBazar</p>
        <div className={styles.linkBox}>
            <p className={styles.link}>Shop</p>
            <p className={styles.link}>About</p>
            <p className={styles.link}>Contact</p>
        </div>
      </div>
      <div>
        <img src={userIcon} className={styles.userIcon} />
        <img src={cartIcon} className={styles.cartIcon} />
      </div>
    </div>
  );
};

export default Header;
