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
  value,
  size = "small",
  hasAll = true,
  variant='outlined',
  sx={}
}) => {
  return (
    <FormControl fullWidth size={size}>
      <InputLabel>{label}</InputLabel>
      <MUISelect
        value={value || 'all'}
        label={label}
        onChange={handleChange}
        sx={{ backgroundColor: "#ffffff", ...sx }}
        variant={variant}
      >
        {hasAll && (
          <MenuItem value="all">
            All
          </MenuItem>
        )}
        {menus.map((item) => (
          <MenuItem value={item.value}>{item.name}</MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};

export default Select;
