import { useState } from "react";
import { Box, Container } from "@mui/material";
import { Close } from "@mui/icons-material";

import ImageDropzone from "../../../Components/ImageDropzone";
import TextInput from "../../../Components/TextInput";
import Button from "../../../Components/Button";
import dummyPic from "../../../assets/images/dummyPic.jpg";
import Drawer from "../../../Components/Drawer";
import styles from "./style.module.scss";

const AdminCategoryForm = ({ open, onClose, data, handleChange, onDropFile }) => {

  const renderDrawerHeader = () => (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding={2}
    >
      <p className={styles.title}>Add Category</p>
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
        <Box mt={2}>
          <TextInput
            label="Name"
            variant="outlined"
            sx={{ backgroundColor: "#ffffff" }}
            onChange={(_, value) => handleChange(value, "name")}
            value={data.name}
          />
        </Box>
        <Box mt={2}>
          <TextInput
            label="Description"
            variant="outlined"
            sx={{ backgroundColor: "#ffffff" }}
            onChange={(_, value) => handleChange(value, "description")}
            value={data.description}
            multiline
          />
        </Box>
        <Box display="flex" justifyContent="flex-end">
          <Box width={100} mt={2}>
            <Button value="Submit" />
          </Box>
        </Box>
      </Container>
    </Drawer>
  );
};

export default AdminCategoryForm;
