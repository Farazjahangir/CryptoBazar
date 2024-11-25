import { Chip as MUIChip } from "@mui/material";

const Chip = ({ label, sx, onClick, clickable = true, selected }) => {
  return (
    <MUIChip
      label={label}
      sx={{
        backgroundColor: selected ? "#ff6348" : "#dfe4e5",
        color: selected ? "#ffffff" : "black",
        "&:hover": {
            backgroundColor: '#ff6348',
            color: '#ffffff'
        },
        ...sx,
      }}
      clickable={clickable}
      onClick={onClick}
      size="medium"
    />
  );
};

export default Chip;
