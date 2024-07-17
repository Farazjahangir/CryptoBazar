import { Drawer as MUIDrawer } from "@mui/material";

const Drawer = ({ anchor = "right", open, onClose = () => {}, children, minWidth=250 }) => {
  return (
    <MUIDrawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { minWidth: minWidth } }}
    >
      {children}
    </MUIDrawer>
  );
};

export default Drawer;
