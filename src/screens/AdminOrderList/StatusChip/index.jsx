import { Chip } from "@mui/material";

const StatusChip = ({ label }) => {
  const getColor = () => {
    let bgColor = '#fff3d6'
    let color = '#ffb400'

    if (label === 'out for delivery') {
        bgColor = '#ede4ff'
        color = '#8c57ff'
    }
 
    else if (label === 'delivered') {
        bgColor = '#e4f7d6'
        color = '#56ca00'
    }
    return {
        bgColor,
        color
    };
  };
  return (
    <Chip
      label={label}
      sx={{ backgroundColor: getColor().bgColor, color: getColor().color, minWidth: 80, fontWeight: 'bold' }}
      size="small"
    />
  );
};

export default StatusChip;
