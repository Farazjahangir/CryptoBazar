import Header from "../../Components/Header";
import Slider from "./ImageSlider";
import deliveryIcon from "../../assets/icons/delivery.png";
import supportIcon from "../../assets/icons/support.png";
import returnIcon from "../../assets/icons/return.png";
import paymentIcon from "../../assets/icons/payment.png";
import ServiceBox from "./ServiceBox";
import NewArrivalSection from "./NewArrivalSection";
import styles from "./style.module.scss";
import { Box } from "@mui/system";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      {/* <Slider /> */}
      <h1 className={styles.head1}>Why Choose Us</h1>
      <div className={styles.borderLine} />
      <div className={styles.servicesBox}>
        <ServiceBox image={deliveryIcon} text="Free Delivery" />
        <ServiceBox image={supportIcon} text="24/7 Support" />
        <ServiceBox image={returnIcon} text="Retrun Policy" />
        <ServiceBox image={paymentIcon} text="Secure Payment" />
      </div>
      <div className={styles.newArrivalSection}>
        <NewArrivalSection />
      </div>
    </div>
  );
};

export default Home;
