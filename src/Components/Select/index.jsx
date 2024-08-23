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
}) => {
  return (
    <FormControl fullWidth size={size}>
      <InputLabel>{label}</InputLabel>
      <MUISelect
        value={value || 'all'}
        label={label}
        onChange={handleChange}
        //   placeholder="Please Select"
        sx={{ backgroundColor: "#ffffff" }}
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
