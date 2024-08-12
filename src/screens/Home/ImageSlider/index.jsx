import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import mens from "../../../assets/images/bannerMensImage.jpg";
import styles from "./style.module.scss";

const Slider = () => {
  const images = [mens, mens];
  return (
    <div className={styles.container}>
      <Slide>
        {images.map((item) => (
          <div
            className={styles.banner}
            style={{ backgroundImage: `url(${item})` }}
          >
            {/* <img src={item} /> */}
            <div className={styles.textBox}>
              <h1>Men's Winter Collection</h1>
              <p className={styles.details}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                tempore ipsa esse commodi architecto rerum quaerat a delectus
              </p>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
