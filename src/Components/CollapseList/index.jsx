import { useState } from "react";
import {
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
  Collapse,
} from "@mui/material";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

const CollapseList = ({ data, subListName, subListOnClick }) => {
  const [collapsedId, setCollapsedId] = useState(null)
  const handleClick = (list) => {
    if (list.id === collapsedId) {
      setCollapsedId(null)
      return
    } 
    setCollapsedId(list.id)
  }
  return (
    <List
      // aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          sx={{ fontSize: 20, color: "black" }}
        >
          Categories
        </ListSubheader>
      }
    >
      {data.map((item) => (
        <div key={item.id}>
          <ListItemButton sx={{ bgcolor: "none", minWidth: 180 }} onClick={() => handleClick(item)}>
            <ListItemText primary={item.name} sx={{ bgcolor: "none" }} />
            {item.id === collapsedId ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={item.id === collapsedId} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item[subListName].map((subList) => (
                <div key={subList.id}>
                  <ListItemButton sx={{ pl: 4, paddingY: 0 }} onClick={() => subListOnClick(subList)}>
                    <ListItemText primary={subList.name} />
                  </ListItemButton>
                </div>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
};

export default CollapseList;
