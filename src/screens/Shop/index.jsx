import CollapseList from "../../Components/CollapseList";
import { categories } from "../../constants/dummy";
import ProductDisplay from "../../Components/ProductDisplay";
import styles from "./style.module.scss";

const Shop = () => {
  const handleClick = (item) => {
    console.log("ITEM", item);
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        {/* <p className={styles.heading}>Categories</p> */}
        <CollapseList
          data={categories}
          subListName="subCategories"
          subListOnClick={handleClick}
        />
      </div>
      <div className={styles.rightContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <ProductDisplay />
        ))}
      </div>
    </div>
  );
};

export default Shop;
