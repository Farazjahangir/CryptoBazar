import { Popover, Box, Typography, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import { useDrawer } from "../../ContextApi/DrawerContext";
import userIcon from "../../assets/icons/user.png"
import cartIcon from "../../assets/icons/cart.png"
import styles from "./style.module.scss"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logoutUser } from "../../redux/userSlice";
import { SCREEN_PATHS } from "../../constants";


const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const { setDrawerState, drawerState } = useDrawer();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user.user)
  const fullScreenLoader = useSelector(state => state.fullScreenLoader.loading)

  const navigateTo = (path) => {
    navigate(path)
  }

  const toggleDrawer = () => {
    setDrawerState(!drawerState)
  }
  
  const onClickUser = (e) => {
    if (!user) {
      navigate(SCREEN_PATHS.Login)
      return
    }
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    dispatch(logoutUser())
    setAnchorEl(null);
  }

  return (
    <div className={clsx(styles.container, fullScreenLoader && styles.negZIndex)}>
      <div className={styles.leftContainer}>
        <p onClick={() => navigateTo("/")}>CryptoBazar</p>
        <div className={styles.linkBox}>
            <p className={styles.link} onClick={() => navigateTo('/shop')}>Shop</p>
            <p className={styles.link}>About</p>
            <p className={styles.link}>Contact</p>
        </div>
      </div>
      <div>
        <img src={userIcon} className={styles.userIcon} onClick={onClickUser} />
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
            {user.role === 'admin' && <Typography
                
                padding={1}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#e2e7e84d",
                  },
                }}
                onClick={() => navigateTo(SCREEN_PATHS.ADM_DASHBOARD)}
              >
                Admin Dashboard
              </Typography>}
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
        <img src={cartIcon} className={styles.cartIcon} onClick={toggleDrawer} />
      </div>
    </div>
  );
};

export default Header;
