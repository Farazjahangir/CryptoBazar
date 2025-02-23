import { useState } from "react";
import { Box, display } from "@mui/system";
import IconButton from "../IconButton";
import { Menu } from "@mui/icons-material";

import styles from "./style.module.scss";
import dummyDp from "../../assets/images/dummyDp.jpg";
import Button from "../Button";
import { Divider, Popover, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";
import { SCREEN_PATHS } from "../../constants";

const AdminHeader = ({ toggleDrawer }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const openMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    dispatch(logoutUser())
    navigate(SCREEN_PATHS.Login)
  }

  const goToCustomerView = () => {
    navigate(SCREEN_PATHS.HOME)
  }
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <Box display="flex" alignItems="center">
          <IconButton
            sx={{ display: { md: "none" }, marginRight: 2 }}
            onClick={toggleDrawer}
          >
            <Menu fontSize="large" />
          </IconButton>
          <h1>Welcome</h1>
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <Button value="Customer View" onClick={goToCustomerView} />
          <div
            style={{ backgroundImage: `url(${dummyDp})`, cursor: "pointer" }}
            className={styles.profilePic}
            onClick={openMenu}
          />
          <Popover
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            slotProps={{
              paper: {
                sx: {
                  minWidth: 190,
                  marginTop: 1,
                  borderRadius: 3,
                },
              },
            }}
          >
            <Box padding={1}>
              <Typography fontSize={18}>{user?.name}</Typography>
              <Typography color="#808080" variant="body2">
                {user?.email}
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography
                
                padding={1}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#e2e7e84d",
                  },
                }}
              >
                Account
              </Typography>
              <Typography
                
                padding={1}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#e2e7e84d",
                  },
                }}
              >
                Settings
              </Typography>
              <Typography
                
                padding={1}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#e2e7e84d",
                  },
                }}
                onClick={onLogout}
              >
                Logout
              </Typography>
            </Box>
          </Popover>
        </Box>
      </div>
    </div>
  );
};

export default AdminHeader;
