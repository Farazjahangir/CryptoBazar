import { Box } from "@mui/system";

import Drawer from "../Drawer";
import NavList from "./NavList";
import styles from "./style.module.scss";

const AdminDrawer = () => {
  return (
    <Drawer variant="permanent" anchor="left" minWidth={200}>
      <Box pl={2} pr={2}>
        <h2 className={styles.logo}>Crypto Bazar</h2>
        <NavList />
      </Box>
    </Drawer>
  );
};

export default AdminDrawer;
