import { useState } from "react";
import { Box, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Close } from "@mui/icons-material";

import ImageDropzone from "../../../Components/ImageDropzone";
import TextInput from "../../../Components/TextInput";
import Select from "../../../Components/Select";
import ColorPicker from "../../../Components/ColorPicker";
import Button from "../../../Components/Button";
import dummyPic from "../../../assets/images/dummyPic.jpg";
import SizeChips from "./SizeChips";
import { SIZES } from "../../../constants";
import Drawer from "../../../Components/Drawer";
import styles from "./style.module.scss";

const AdminProductForm = ({ open, onClose }) => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    sizes: [],
  });
  const [colors, setColors] = useState([]);

  const onDropFile = (file) => {
    const image = URL.createObjectURL(file[0]);
    setData({ ...data, image });
  };

  const handleChange = (value, key) => {
    setData({ ...data, [key]: value });
  };

  const onSizeChipClick = (size) => {
    const newData = { ...data };

    if (newData.sizes.includes(size)) {
      newData.sizes = newData.sizes.filter((s) => s !== size);
    } else {
      newData.sizes.push(size);
    }
    setData(newData);
  };

  const renderInputs = () => (
    <Box>
      <Box mt={2}>
        <TextInput
          label="Product Title"
          variant="outlined"
          sx={{ backgroundColor: "#ffffff" }}
          onChange={(_, value) => handleChange(value, "name")}
        />
      </Box>
      <Box mt={2}>
        <Select hasAll={false} />
      </Box>
      <Box mt={2}>
        <TextInput
          label="Price"
          variant="outlined"
          sx={{ backgroundColor: "#ffffff" }}
          onChange={(_, value) => handleChange(value, "price")}
        />
      </Box>
      <Box mt={2}>
        <TextInput
          label="Quantity"
          variant="outlined"
          sx={{ backgroundColor: "#ffffff" }}
          onChange={(_, value) => handleChange(value, "quantity")}
        />
      </Box>
      <Box display="flex" alignItems={"center"} flexWrap={"wrap"} mt={2}>
        <Box>
          <Button value="Add Color" onClick={addColor} />
        </Box>
        {colors.map((item, index) => (
          <Box ml={2}>
            <ColorPicker
              value={item}
              onColorSelect={(color) => handleChangeColor(color, index)}
            />
          </Box>
        ))}
      </Box>
      <Box display="flex" alignItems="center" marginTop={2}>
        <p>Sizes:</p>
        {SIZES.map((size, index) => (
          <Box ml={2} key={size}>
            <SizeChips
              label={size}
              onClick={() => onSizeChipClick(size)}
              selected={data.sizes.includes(size)}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );

  const addColor = () => {
    setColors([...colors, ""]);
  };

  const handleChangeColor = (value, index) => {
    const updatedColors = [...colors];
    updatedColors[index] = value;
    setColors(updatedColors);
  };

  const renderDrawerHeader = () => (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={2}
    >
      <p className={styles.title}>Add Product</p>
      <Close fontSize="large" className={styles.closeIcon} onClick={onClose} />
    </Box>
  );

  return (
    <Drawer
      variant={"temporary"}
      anchor="right"
      open={open}
      minWidth={490}
      onClose={onClose}
      renderHeader={renderDrawerHeader}
    >
      <Container
        sx={{
          width: "100%",
          height: "100%",
          paddingTop: 5,
          paddingBottom: 5,
          overflowX: "auto",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div
          style={{ backgroundImage: `url(${data?.image || dummyPic})` }}
          className={styles.image}
        />
        <Box mt={2}>
          <ImageDropzone onDropFile={onDropFile} />
        </Box>
        {renderInputs()}
        <Box display="flex" justifyContent="flex-end">
          <Box width={100} mt={2}>
            <Button value="Submit" />
          </Box>
        </Box>
      </Container>
    </Drawer>
  );
};

export default AdminProductForm;
