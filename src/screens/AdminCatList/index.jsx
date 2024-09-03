import { Box, display } from "@mui/system";
import { Avatar } from "@mui/material";

import Button from "../../Components/Button";
import AdminDataGrid from "../../Components/AdminDataGrid";
import Select from "../../Components/Select";
import styles from "./style.module.scss";
import shoe from "../../assets/images/shoe.jpg";
import cloth from "../../assets/images/jacket.png";

const AdminCatList = () => {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      minWidth: 340,
      renderCell: (param) => (
        <Box display="flex" alignItems="center" p={1}>
          <Avatar
            src={param.row.image}
            sx={{ width: 54, height: 54, marginRight: 2 }}
            variant="square"
          />
          <Box>
          <p>{param.row.name}</p>
          <p className={styles.helperText}>Choose from wide range of {param.row.name} from popular brands</p>
          </Box>
        </Box>
      ),
    },
    {
      field: "totalPrd",
      headerName: "Products",
      type: "number",
      minWidth: 100,
      noFlex: true,
      display: 'flex',
    },
    {
      field: "totalSubCat",
      headerName: "Sub Categories",
      type: "number",
      minWidth: 130,
      noFlex: true,
      display: 'flex',
    },
    {
      field: "startPrice",
      headerName: "Starting Price",
      type: "number",
      minWidth: 130,
      noFlex: true,
      display: 'flex',
    },
  ];

  const data = [
    {
      id: 1,
      name: "Footwear",
      totalPrd: 100,
      totalSubCat: 2,
      image: shoe,
      startPrice: 3
    },
    {
      id: 2,
      name: "Clothing",
      totalPrd: 1,
      totalSubCat: 4,
      image: cloth,
      startPrice: 3
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
      </Box>
      <AdminDataGrid columns={columns} rows={data} />
    </div>
  );
};

export default AdminCatList;
