import styles from "./style.module.scss";
import dummyDp from "../../assets/images/dummyDp.jpg"

const AdminHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <h1>Welcome</h1>
        <div style={{ backgroundImage: `url(${dummyDp})` }} className={styles.profilePic} />
      </div>
    </div>
  );
};

export default AdminHeader;
