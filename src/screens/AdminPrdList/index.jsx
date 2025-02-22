import { useState } from "react";
import { Box, display } from "@mui/system";
import { Avatar, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

import Button from "../../Components/Button";
import AdminDataGrid from "../../Components/AdminDataGrid";
import Select from "../../Components/Select";
import shoe from "../../assets/images/shoe.jpg";
import AdminProductForm from "./AdminProductForm";
import styles from "./style.module.scss";
import { useGetProducts } from "../../hooks/reactQuery/useGetProducts";
import Chip from "../../Components/Chip";

const AdminPrdList = () => {
  const [productFormShow, setProductFormShow] = useState(false);

  const { data: products = [], isFetching: prdLoading } = useGetProducts();
  const toggleProductForm = () => {
    setProductFormShow(!productFormShow);
  };

  const renderTableHeader = () => (
    <Box width={180}>
      <Button value="Add Product" onClick={toggleProductForm} />
    </Box>
  );

  const columns = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 180,
      flex: 1,
      display: "flex",
      renderCell: (param) => (
        <Box display="flex" alignItems="center" p={1}>
          <Avatar
            src={param.row.image}
            sx={{ width: 54, height: 54, marginRight: 2 }}
            variant="square"
          />
          <p>{param.row.name}</p>
        </Box>
      ),
    },
    {
      field: "category",
      headerName: "Category",
      minWidth: 100,
      flex: 1,
      display: "flex",
      renderCell: (param) => param.value.name,
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 100,
      flex: 1,
      display: "flex",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      minWidth: 100,
      flex: 1,
      display: "flex",
    },
    {
      field: "colors",
      headerName: "Colors",
      minWidth: 100,
      flex: 1,
      display: "flex",
      renderCell: (params) => (
        <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
          {params.value.map((item) => (
            <Box width={20} height={20} borderRadius={10} sx={{ backgroundColor: item }} />
          ))}
        </Box>
      ),
    },
    {
      field: "sizes",
      headerName: "Sizes",
      minWidth: 100,
      flex: 1,
      display: "flex",
      renderCell: (params) => (
        <Box display="flex" alignItems="center" gap={1} flexWrap="wrap">
          {params.value.map((item) => (
            <Chip label={item} size="small" />
          ))}
        </Box>
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 120,
      flex: 1,
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

  return (
    <div className={styles.container}>
      <AdminProductForm open={productFormShow} onClose={toggleProductForm} />
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
        {/* <Box display="flex" justifyContent="flex-end" mt={1}>
          <Box width={120} mr={2}>
            <Button value="Filter" />
          </Box>
          <Box width={120}>
            <Button value="Clear Filter" />
          </Box>
        </Box> */}
      </Box>
      <AdminDataGrid
        columns={columns}
        rows={products}
        renderHeader={renderTableHeader}
        loading={prdLoading}
      />
    </div>
  );
};

export default AdminPrdList;
