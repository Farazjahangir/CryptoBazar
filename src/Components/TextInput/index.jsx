import { TextField } from "@mui/material";

import styles from "./style.module.scss"


const TextInput = ({
  variant = "standard",
  label,
  fullWidth = true,
  type = "text",
  margin = "dense",
  onChange,
  required= false,
  value,
  size='small',
  sx,
  multiline = false,
  maxRows = 8,
  minRows = 4
}) => {
  
  const handleChange = (e) => {
    onChange(e, e.target.value)
  }

  return (
    <TextField
      variant={variant}
      fullWidth={fullWidth}
      label={label}
      type={type}
      margin={margin}
      onChange={handleChange}
      required={required}
      value={value}
      classes={{
        MuiTextFieldRoot: styles.input,
      }}
      size={size}
      sx={sx}
      multiline={multiline}
      maxRows={maxRows}
      minRows={minRows}
    />
  );
};

export default TextInput;
