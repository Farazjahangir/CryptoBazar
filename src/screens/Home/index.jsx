import Header from "../../Components/Header";
import Slider from "./ImageSlider";
import deliveryIcon from "../../assets/icons/delivery.png";
import supportIcon from "../../assets/icons/support.png";
import returnIcon from "../../assets/icons/return.png";
import paymentIcon from "../../assets/icons/payment.png";
import ServiceBox from "./ServiceBox";
import styles from "./style.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      <Slider />
      <div className={styles.servicesBox}>
        <ServiceBox image={deliveryIcon} text="Free Delivery" />
        <ServiceBox image={supportIcon} text="24/7 Support" />
        <ServiceBox image={returnIcon} text="Retrun Policy" />
        <ServiceBox image={paymentIcon} text="Secure Payment" />
      </div>
    </div>
  );
};

export default Home;
