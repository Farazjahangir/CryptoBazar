import { TextField } from "@mui/material";

const TextInput = ({
  variant = "standard",
  label,
  fullWidth = true,
  type = "text",
  margin = "dense",
  onChange,
  required= false,
  value
}) => {
  return (
    <TextField
      variant={variant}
      fullWidth={fullWidth}
      label={label}
      type={type}
      margin={margin}
      onChange={onChange}
      required={required}
      value={value}
    />
  );
};

export default TextInput;
