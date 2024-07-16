import { Rating as MUIRating } from "@mui/material";

const Rating = ({ readonly = false, value = 4, onChange, size= 'medium' }) => {
  return <MUIRating readOnly={readonly} value={value} onChange={onChange} size={size} />;
};

export default Rating;
