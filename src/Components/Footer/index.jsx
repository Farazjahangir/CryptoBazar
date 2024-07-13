import { useLocation } from "react-router-dom";
import clsx from "clsx";

import styles from "./style.module.scss";

const Footer = () => {
  const location = useLocation()
  const pathName = location.pathname

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.appName}>Crypto Bazar</h3>
        <p className={styles.text}>
          Welcome to Cryptobazar, your gateway to secure and innovative shopping
          on the blockchain. Discover our unique story, our dedication to
          technology, and our commitment to a seamless and secure shopping
          experience.
        </p>
      </div>
      <div>
        <h3 className={styles.linksHead}>Links</h3>
        <div className={styles.linkBox}>
          <p className={clsx(styles.links, pathName === '/' && styles.activeLink)}>Home</p>
          <p className={clsx(styles.links, pathName === '/shop' && styles.activeLink)}>Shop</p>
          <p className={clsx(styles.links, pathName === '/about' && styles.activeLink)}>About</p>
          <p className={clsx(styles.links, pathName === '/contact' && styles.activeLink)}>Contact</p>
        </div>
      </div>
      <div>
        <h3 className={styles.contactHead}>Contact Us</h3>
        <p className={styles.contactDetails}>
          Address: lorem ipsum lorem ipsum
        </p>
        <p className={styles.contactDetails}>
          Email: jahangirfaraz98@gmail.com
        </p>
        <p className={styles.contactDetails}>Contact: 0333333333</p>
      </div>
    </div>
  );
};

export default Footer;
