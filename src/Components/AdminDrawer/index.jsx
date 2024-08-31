import { Box, display } from "@mui/system";
import { Menu } from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/system";

import IconButton from "../IconButton";
import Drawer from "../Drawer";
import NavList from "./NavList";
import styles from "./style.module.scss";

const AdminDrawer = ({ open, onClose }) => {
  const theme = useTheme();
  const isSmallerThanMedium = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>

      <Drawer
        variant={isSmallerThanMedium ? "temporary" : "permanent"}
        anchor="left"
        open={open}
        onClose={onClose}
      >
        <Box pl={2} pr={2}>
          <Box mt={3}>
            <h2>Crypto Bazar</h2>
          </Box>
          <NavList />
        </Box>
      </Drawer>
    </>
  );
};

export default AdminDrawer;
