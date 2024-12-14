import { useEffect, useState } from "react";
import { Box, display, minWidth } from "@mui/system";
import { Avatar, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

import Button from "../../Components/Button";
import AdminDataGrid from "../../Components/AdminDataGrid";
import Select from "../../Components/Select";
import styles from "./style.module.scss";
import shoe from "../../assets/images/shoe.jpg";
import cloth from "../../assets/images/jacket.png";
import AdminCategoryForm from "./AdminCategoryForm";
import { getProducts } from "../../firebase";

const INITIAL_STATE = {
  name: "",
  image: null,
  desxription: "",
}
const AdminCatList = () => {
  const [categoryFormShow, setCategoryFormShow] = useState(false);
  const [data, setData] = useState(INITIAL_STATE);

  const toggleCategoryForm = () => {
    setCategoryFormShow(!categoryFormShow);
    if (categoryFormShow) {
      setData(INITIAL_STATE)
    }
  };

  const renderTableHeader = () => (
    <Box width={180}>
      <Button value="Add Category" onClick={toggleCategoryForm} />
    </Box>
  );

  const onDropFile = (file) => {
    const image = URL.createObjectURL(file[0]);
    setData({ ...data, image });
  };

  const handleChange = (value, key) => {
    setData({ ...data, [key]: value });
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      display: "flex",
      flex: 1,
      minWidth: 480,
      renderCell: (param) => (
        <Box display="flex" alignItems="center" p={1}>
          <Avatar
            src={param.row.image}
            sx={{ width: 54, height: 54, marginRight: 2 }}
            variant="square"
          />
          <Box>
            <p>{param.row.name}</p>
            <p className={styles.helperText}>
              Choose from wide range of {param.row.name} from popular brands
            </p>
          </Box>
        </Box>
      ),
    },
    {
      field: "totalPrd",
      headerName: "Products",
      type: "number",
      minWidth: 130,
      display: "flex",
      flex: 1
    },
    {
      field: "totalSubCat",
      headerName: "Sub Categories",
      type: "number",
      minWidth: 130,
      display: "flex",
      flex: 1
    },
    {
      field: "startPrice",
      headerName: "Starting Price",
      type: "number",
      minWidth: 130,
      flex: 1,
      display: "flex",
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 120,
      display: "flex",
      renderCell: (param) => (
        <Box
          display="flex"
          alignItems="center"
          p={1}
          justifyContent="space-evenly"
          flex={1}
        >
          <Tooltip title="Edit">
            <Edit onClick={() => console.log("pressed")} />
          </Tooltip>
          <Tooltip title="Delete">
            <Delete />
          </Tooltip>
        </Box>
      ),
    },
  ];

  const DUMMY_DATA = [
    {
      id: 1,
      name: "Footwear",
      totalPrd: 100,
      totalSubCat: 2,
      image: shoe,
      startPrice: 3,
    },
    {
      id: 2,
      name: "Clothing",
      totalPrd: 1,
      totalSubCat: 4,
      image: cloth,
      startPrice: 3,
    },
  ];

  return (
    <div className={styles.container}>
      <AdminCategoryForm
        open={categoryFormShow}
        onClose={toggleCategoryForm}
        data={data}
        onDropFile={onDropFile}
        handleChange={handleChange}
      />
      <h2>Filters</h2>
      <Box maxWidth="800px" mb={4} mt={3}>
        <Box display="flex" mt={1} width="100%">
          <Box flex={1} mr={1}>
            <Select
              label="Select Category"
              menus={[
                {
                  name: "Shoes",
                  value: "shoe",
                },
              ]}
            />
          </Box>
          <Box flex={1}>
            <Select
              label="Select Rating"
              menus={[
                {
                  name: "5",
                  value: "5",
                },
              ]}
            />
          </Box>
        </Box>
        <p className={styles.clearText}>Clear filter</p>
      </Box>
      <AdminDataGrid
        columns={columns}
        rows={DUMMY_DATA}
        renderHeader={renderTableHeader}
      />
    </div>
  );
};

export default AdminCatList;
