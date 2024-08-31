import { Box } from "@mui/system";

import Button from "../../Components/Button";
import AdminDataGrid from "../../Components/AdminDataGrid";
import Select from "../../Components/Select";
import styles from "./style.module.scss";

const AdminPrdList = () => {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 100,
      flex: 1,
    },
    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      minWidth: 100,
      flex: 1,
    },
  ];

  const data = [
    {
      id: 1,
      name: "Shoe",
      price: 100,
      stock: 3,
    },
    {
      id: 2,
      name: "Shoe",
      price: 100,
      stock: 1,
    },
    {
      id: 3,
      name: "Shoe",
      price: 250,
      stock: 5,
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
