import { Box, display } from "@mui/system";
import IconButton from "../IconButton";
import { Menu } from "@mui/icons-material";

import styles from "./style.module.scss";
import dummyDp from "../../assets/images/dummyDp.jpg";

const AdminHeader = ({ toggleDrawer }) => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Box display='flex' alignItems='center'>
          <IconButton sx={{ display: { md: 'none' }, marginRight: 2 }} onClick={toggleDrawer}>
            <Menu fontSize="large" />
          </IconButton>
          <h1>Welcome</h1>
        </Box>
        <div
          style={{ backgroundImage: `url(${dummyDp})` }}
          className={styles.profilePic}
        />
      </div>
    </div>
  );
};

export default AdminHeader;
