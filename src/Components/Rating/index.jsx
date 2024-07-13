import { Rating as MUIRating } from "@mui/material";

const Rating = ({ readonly = false, value, onChange }) => {
  return <MUIRating readOnly={readonly} value={4} onChange={onChange} />;
};

export default Rating;
