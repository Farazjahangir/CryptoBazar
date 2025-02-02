import { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

import { DRAWER_ROUTES } from "../../../constants";
import styles from "./style.module.scss";
import { fontSize } from "@mui/system";

const listItemBtnStyle = {
  marginTop: 1,
  padding: 0,
  "&:hover": {
    background: "none",
  },
};

const NavList = () => {
  const [activeKey, setActiveKey] = useState(null);

  const location = useLocation();
  const pathnameArray = location.pathname.split("/");
  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  const onExpand = (route) => {
    if (activeKey === route.key) {
      setActiveKey(null);
      return;
    }
    navigateTo(route.subMenu[0].path);
    setActiveKey(route.key);
  };

  const onRouteClick = (route) => {
    setActiveKey(route.key);
  };

  const onSubmenuClick = (path) => {
    navigateTo(path);
  };

  const renderNormalList = (route) => (
    <ListItemButton sx={listItemBtnStyle} onClick={() => onRouteClick(route)}>
      <ListItemText
        primary={route.name}
        primaryTypographyProps={{
          color: pathnameArray.at(-1) === route.key ? "#ff6348" : "black",
        }}
      />
    </ListItemButton>
  );

  const renderCollapseList = (route) => {
    return (
      <>
        <ListItemButton sx={listItemBtnStyle} onClick={() => onExpand(route)}>
          <ListItemText
            primary={route.name}
            primaryTypographyProps={{
              color: pathnameArray.at(-2) === route.key ? "#ff6348" : "black",
            }}
          />
          {activeKey === route.key ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {route.subMenu.map((subMenu) => {
          return (
            <Collapse in={activeKey === route.key} key={subMenu.key}>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{
                    padding: 0,
                    paddingLeft: 2,
                    "&:hover": {
                      background: "none",
                    },
                  }}
                  onClick={() => onSubmenuClick(subMenu.path)}
                >
                  <ListItemText
                    primary={subMenu.name}
                    primaryTypographyProps={{
                      color: subMenu.key.includes(pathnameArray.at(-1))
                        ? "#ff6348"
                        : "black",
                    }}
                  />
                </ListItemButton>
              </List>
            </Collapse>
          );
        })}
      </>
    );
  };

  return (
    <List sx={{ marginTop: 5 }}>
      {DRAWER_ROUTES.map((route) => {
        return (
          <div key={route.key}>
            {route.subMenu && route.subMenu.length
              ? renderCollapseList(route)
              : renderNormalList(route)}
          </div>
        );
      })}
    </List>
  );
};

export default NavList;
