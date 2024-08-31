import { Drawer as MUIDrawer } from "@mui/material";

const Drawer = ({
  anchor = "right",
  open,
  onClose = () => {},
  children,
  minWidth = 250,
  variant,
  sx
}) => {
  return (
    <MUIDrawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      PaperProps={{ sx: { minWidth: minWidth } }}
      variant={variant}
      sx={{
        width: minWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: minWidth,
          boxSizing: "border-box",
        },
        ...sx
      }}
    >
      {children}
    </MUIDrawer>
  );
};

export default Drawer;
