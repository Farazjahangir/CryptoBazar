import { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useLocation } from "react-router-dom";

import { DRAWER_ROUTES } from "../../../constants";
import styles from "./style.module.scss";
import { fontSize } from "@mui/system";

const listItemBtnStyle = {
    marginTop: 1,
    padding: 0,
    "&:hover": {
      background: "none",
    },
}

const NavList = () => {
  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState(null);

  const location = useLocation()
  const onExpand = (route) => {
    if (activeKey === route.key) {
        setActiveKey(null)
        return;
    }
    setActiveKey(route.key)
  }

  const renderNormalList = (route) => (
    <ListItemButton
      sx={listItemBtnStyle}
    >
      <ListItemText
        primary={route.name}
        primaryTypographyProps={{
          color: "black",
        }}
      />
    </ListItemButton>
  );

  const renderCollapseList = (route) => {
    return (
      <>
        <ListItemButton
          sx={listItemBtnStyle}
          onClick={() => onExpand(route)}
        >
          <ListItemText
            primary={route.name}
            primaryTypographyProps={{
              color: "black",
            }}
          />
          {activeKey === route.key  ? <ExpandLess /> : <ExpandMore />}
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
                >
                  <ListItemText primary={subMenu.name} />
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
