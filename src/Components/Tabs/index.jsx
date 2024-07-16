import { Tab, Tabs as ReactTabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import styles from "./styles.module.scss";

const Tabs = ({ children, tabList }) => {
  return (
    <ReactTabs
      className={styles.container}
      selectedTabClassName={styles.selectedTab}
    >
      <TabList className={styles.tabHeader}>
        {tabList.map((item) => (
          <Tab>{item}</Tab>
        ))}
      </TabList>
      {children}
    </ReactTabs>
  );
};

export { Tabs, TabPanel };
