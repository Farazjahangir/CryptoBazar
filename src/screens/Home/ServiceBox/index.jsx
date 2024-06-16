import styles from "./style.module.scss"

const ServiceBox = ({
    image,
    text
}) => {
  return (
    <div className={styles.container}>
      <img src={image} className={styles.icon} />
      <p className={styles.text}>{text}</p>
    </div>
  );
};


export default ServiceBox