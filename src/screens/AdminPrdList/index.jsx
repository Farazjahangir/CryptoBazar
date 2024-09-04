import { Box, display } from "@mui/system";
import { Avatar } from "@mui/material";

import Button from "../../Components/Button";
import AdminDataGrid from "../../Components/AdminDataGrid";
import Select from "../../Components/Select";
import shoe from "../../assets/images/shoe.jpg";
import styles from "./style.module.scss";

const AdminPrdList = () => {
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
      field: "cat",
      headerName: "Category",
      minWidth: 100,
      flex: 1,
      display: "flex",
    },
    {
      field: "subCat",
      headerName: "Sub Category",
      minWidth: 100,
      flex: 1,
      display: "flex",
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
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 100,
      flex: 1,
      display: "flex",
    },
    
    {
      field: "qty",
      headerName: "Quantity",
      type: "number",
      minWidth: 100,
      flex: 1,
      display: "flex",
    },
  ];

  const data = [
    {
      id: 1,
      name: "Shoe",
      price: 100,
      stock: 3,
      image: shoe,
      qty: 2,
      cat: 'Footwear',
      subCat: 'casual'
    },
    {
      id: 2,
      name: "Shoe",
      price: 100,
      stock: 1,
      image: shoe,
      qty: 2,
      cat: 'Footwear',
      subCat: 'casual'
    },
    {
      id: 3,
      name: "Shoe",
      price: 250,
      stock: 5,
      image: shoe,
      qty: 2,
      cat: 'Footwear',
      subCat: 'casual'
    },
  ];

  return (
    <div className={styles.container}>
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
      <AdminDataGrid columns={columns} rows={data} />
    </div>
  );
};

export default AdminPrdList;
