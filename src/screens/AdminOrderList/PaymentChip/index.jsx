import { Chip } from "@mui/material";

const PaymentChip = ({ label }) => {
  const getColor = () => {
    let bgColor = '#fff3d6'
    let color = '#ffb400'
    if (label === 'cancelled') {
        bgColor = '#b1b3b766'
        color = '#000000'
    }
    else if (label === 'failed') {
        bgColor = '#f34b5070'
        color = '#ff4c51'
    }
    else if (label === 'paid') {
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

export default PaymentChip;
