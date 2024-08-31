import { IconButton as MUIIconButton } from "@mui/material";

const IconButton = ({ children, disableRipple = true, sx, onClick }) => {
  return (
    <MUIIconButton
      disableRipple={disableRipple}
      color="inherit"
      sx={{ ...sx }}
      onClick={onClick}
    >
      {children}
    </MUIIconButton>
  );
};

export default IconButton;
