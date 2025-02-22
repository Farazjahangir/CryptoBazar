import { useState, useMemo, useEffect } from "react";
import { Box, Container } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import ImageDropzone from "../../../Components/ImageDropzone";
import TextInput from "../../../Components/TextInput";
import Select from "../../../Components/Select";
import ColorPicker from "../../../Components/ColorPicker";
import Button from "../../../Components/Button";
import dummyPic from "../../../assets/images/dummyPic.jpg";
import SizeChips from "./SizeChips";
import { queryKeys, SIZES } from "../../../constants";
import Drawer from "../../../Components/Drawer";
import styles from "./style.module.scss";
import { useCreateDoc } from "../../../hooks/reactQuery/useCreateDoc";
import { useUploadFile } from "../../../hooks/reactQuery/useUploadFile";
import { useQueryClient } from "@tanstack/react-query";

const DEFAULT_STATE = {
  name: "",
  category: "",
  image: "",
  sizes: [],
}

const AdminProductForm = ({ open, onClose }) => {
  const categories = useSelector((state) => state.category.data);
  const queryClient = useQueryClient()

  const createDocMut = useCreateDoc();
  const uploadFileMut = useUploadFile();
  const [data, setData] = useState(DEFAULT_STATE);
  const [colors, setColors] = useState([]);

  const onDropFile = async (file) => {
    try {
      const res = await uploadFileMut.mutateAsync({
        file: file[0],
        folderName: "products",
      });
      setData((prev) => ({
        ...prev,
        image: res,
      }));      
    } catch (e) {
      console.log("onDropFile Cat ERRRR", e);
    }
  };

  const handleChange = (value, key) => {
    setData((prev) => ({
      ...prev,
      [key]: value,
    })); 
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

  const categoryOptions = useMemo(
    () =>
      categories.reduce((acc, item) => {
        const payload = {
          value: item.id,
          name: item.name,
        };
        acc.push(payload);
        return acc;
      }, []),
    [categories]
  );

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
        <Select
          hasAll={false}
          menus={categoryOptions}
          value={data.category}
          placeholder="Select Category"
          handleChange={(e) => handleChange(e.target.value, "category")}
        />
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
        {colors.map((item, index) => {
          console.log("item", item);
          return (
            <Box ml={2}>
              <ColorPicker
                value={item}
                onColorSelect={(color) => handleChangeColor(color, index)}
              />
            </Box>
          );
        })}
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
    setColors([...colors, "#ef0e0e"]);
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

  const addProduct = async () => {
    try {
      await createDocMut.mutateAsync({
        payload: { ...data, colors, isActive: true },
        collectionName: "Products",
      });
  
      onClose();
      toast.success("Product added");
      queryClient.invalidateQueries({queryKey: [queryKeys.USE_GET_PRODUCTS]})
    } catch (e) {
      toast.error("Error occured ");
      console.log("onSubmit Errr", e);
    }
  };

  useEffect(() => {
    if (!open) {
      setData({...DEFAULT_STATE, sizes: []});
      setColors([]);
    }
  }, [open]);

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
          <ImageDropzone onDropFile={onDropFile} loading={uploadFileMut.isPending} />
        </Box>
        {renderInputs()}
        <Box display="flex" justifyContent="flex-end">
          <Box width={100} mt={2}>
            <Button
              value="Submit"
              onClick={addProduct}
              loading={createDocMut.isPending}
              disabled={uploadFileMut.isPending}
            />
          </Box>
        </Box>
      </Container>
    </Drawer>
  );
};

export default AdminProductForm;
