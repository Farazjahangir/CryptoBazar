import { useState } from "react";
import {
  Grid,
  Box,
  ImageList,
  ImageListItem,
  Container,
  Chip,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import ImageDropzone from "../../Components/ImageDropzone";
import TextInput from "../../Components/TextInput";
import Select from "../../Components/Select";
import ColorPicker from "../../Components/ColorPicker";
import Button from "../../Components/Button";
import dummyPic from "../../assets/images/dummyPic.jpg";
import SizeChips from "./SizeChips";
import { SIZES } from "../../constants";
import styles from "./style.module.scss";

const AdminAddProduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    sizes: [],
  });
  const [colors, setColors] = useState([]);
  const theme = useTheme();

  const isSmallerThanSM = useMediaQuery(theme.breakpoints.down("sm"));

  const onDropFile = (file) => {
    console.log("onDropFile");
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
    <Grid
      container
      display={"flex"}
      alignItems="center"
      columnSpacing={3}
      mt={2}
    >
      <Grid xs={12} sm={6} item>
        <TextInput
          label="Product Title"
          variant="outlined"
          sx={{ backgroundColor: "#ffffff" }}
          onChange={(_, value) => handleChange(value, "name")}
        />
      </Grid>
      <Grid xs={12} sm={6} item>
        <Select hasAll={false} />
      </Grid>
      <Grid xs={12} sm={6} item>
        <TextInput
          label="Price"
          variant="outlined"
          sx={{ backgroundColor: "#ffffff" }}
          onChange={(_, value) => handleChange(value, "price")}
        />
      </Grid>
      <Grid xs={12} sm={6} item>
        <TextInput
          label="Quantity"
          variant="outlined"
          sx={{ backgroundColor: "#ffffff" }}
          onChange={(_, value) => handleChange(value, "quantity")}
        />
      </Grid>
      <Grid xs={12} item>
        <Box display="flex" alignItems={"center"} flexWrap={"wrap"}>
          <Box mt={2}>
            <Button value="Add Color" onClick={addColor} />
          </Box>
          {colors.map((item, index) => (
            <Box ml={2} mt={2}>
              <ColorPicker
                value={item}
                onColorSelect={(color) => handleChangeColor(color, index)}
              />
            </Box>
          ))}
        </Box>
      </Grid>
      <Grid xs={12} item display="flex" mt={2} alignItems="center">
        Sizes:
        {SIZES.map((size, index) => (
          <Box ml={2} key={size}>
            <SizeChips
              label={size}
              onClick={() => onSizeChipClick(size)}
              selected={data.sizes.includes(size)}
            />
          </Box>
        ))}
      </Grid>
    </Grid>
  );

  const addColor = () => {
    setColors([...colors, ""]);
  };

  const handleChangeColor = (value, index) => {
    const updatedColors = [...colors];
    updatedColors[index] = value;
    setColors(updatedColors);
  };

  return (
    <Container sx={{ width: "100%", height: "100%", marginTop: 8 }}>
      <div
        style={{ backgroundImage: `url(${data?.image || dummyPic})` }}
        className={styles.image}
      />
      <Box mt={2}>
        <ImageDropzone onDropFile={onDropFile} />
      </Box>
      {renderInputs()}
      <Box
        display="flex"
        justifyContent="flex-end"
      >
        <Box width={100}>
          <Button value="Submit" />
        </Box>
      </Box>
    </Container>
  );
};

export default AdminAddProduct;
