import {
  Select as MUISelect,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
const Select = ({
  handleChange,
  label,
  menus = [],
  value = "",
  size = "small",
  hasAll = true,
  variant = "outlined",
  sx = {},
  placeholder = ''
}) => {
  return (
    <FormControl fullWidth size={size}>
      <InputLabel>{label}</InputLabel>
      <MUISelect
        value={value}
        label={label}
        onChange={handleChange}
        sx={{
          backgroundColor: "#ffffff",
          color: value ? "#000000" : "#0009", // 👈 Change text color
          "& .MuiSelect-select": {
            color: value ? "000000" : "#0009", // 👈 Placeholder color red
          },
          ...sx,
        }}
        variant={variant}
        displayEmpty={!!placeholder}
      >
        {placeholder && <MenuItem value="" disabled selected>
          {placeholder}
        </MenuItem>}
        {hasAll && <MenuItem value="all">All</MenuItem>}
        {menus.map((item) => (
          <MenuItem value={item.value}>{item.name}</MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
