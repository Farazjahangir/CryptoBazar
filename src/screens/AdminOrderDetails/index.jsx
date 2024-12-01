import { Card, CardContent, Grid, Box, Avatar } from "@mui/material";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

import AdminDataGrid from "../../Components/AdminDataGrid";
import shoe from "../../assets/images/shoe.jpg";
import cloth from "../../assets/images/jacket.png";
import Button from "../../Components/Button";
import userDummy from "../../assets/icons/userColored.png";
import cartIcon from "../../assets/icons/cartColored.png";
import styles from "./style.module.scss";
import Timeline from "../../Components/Timeline";

const AdminOrderDetails = () => {
  const { state } = useLocation();
  console.log("STATE ==>", state);

  const renderTableHeader = () => (
    <Box width={180}>
      <h3>Order Details</h3>
    </Box>
  );

  const columns = [
    {
      field: "product",
      headerName: "Products",
      display: "flex",
      flex: 1,
      minWidth: 220,
      renderCell: (param) => (
        <Box display="flex" alignItems="center" p={1}>
          <Avatar
            src={param.row.image}
            sx={{ width: 54, height: 54, marginRight: 2 }}
            variant="square"
          />
          <Box>
            <p>{param.row.product}</p>
          </Box>
        </Box>
      ),
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      minWidth: 100,
      display: "flex",
      flex: 1,
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      minWidth: 100,
      display: "flex",
      flex: 1,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 100,
      flex: 1,
      display: "flex",
    },
  ];

  const DUMMY_DATA = [
    {
      id: 1,
      product: "Footwear",
      price: 100,
      quantity: 2,
      image: shoe,
      total: 3,
    },
    {
      id: 2,
      product: "Clothing",
      price: 1,
      quantity: 4,
      image: cloth,
      total: 3,
    },
    {
      id: 3,
      product: "Clothing",
      price: 1,
      quantity: 4,
      image: cloth,
      total: 3,
    },
    {
      id: 4,
      product: "Clothing",
      price: 1,
      quantity: 4,
      image: cloth,
      total: 3,
    },
    {
        id: 5,
        product: "Clothing",
        price: 1,
        quantity: 4,
        image: cloth,
        total: 3,
      },
  ];

  return (
    <Box mt={2}>
      <Grid container spacing={3}>
        <Grid item lg={8} md={7} xs={12}>
          <Card>
            <CardContent>
              <h3>Order Details</h3>
              <AdminDataGrid
                columns={columns}
                rows={DUMMY_DATA}
                pageSize={3}
                // renderHeader={renderTableHeader}
              />
            </CardContent>
          </Card>
          <Box mt={2}>
            <Card>
              <CardContent>
                <h4>Shipping Activity</h4>
                <Timeline />
              </CardContent>
            </Card>
          </Box>
        </Grid>
        <Grid lg={4} md={5} xs={12} item>
          <Card>
            <CardContent>
              <h3>Customer Details</h3>
              <Box display="flex" alignItems="center">
                <Avatar
                  src={userDummy}
                  sx={{ width: 40, height: 40 }}
                  variant="rounded"
                />
                <Box ml={2}>
                  <p>Faraz Jahangir</p>
                  <p className={styles.textGrey}>Customer ID: #1001</p>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" mt={3}>
                <Avatar
                  src={cartIcon}
                  sx={{ width: 40, height: 40 }}
                  variant="rounded"
                />
                <Box ml={2}>
                  <p>12 Orders</p>
                </Box>
              </Box>
              <Box mt={3}>
                <h4>Contact Info</h4>
                <p className={clsx(styles.textGrey, styles.mt5)}>
                  jahangirfaraz98@gmail.com
                </p>
                <p className={clsx(styles.textGrey, styles.mt5)}>03442778759</p>
              </Box>
            </CardContent>
          </Card>
          <Box mt={2}>
            <Card>
              <CardContent>
                <h4>Shipping Address</h4>
                <p className={clsx(styles.textGrey, styles.mt5)}>
                  House no D22 Sheet no 26 Model Colony Malir Karachi
                </p>
                <h4 className={styles.mt25}>Billing Address</h4>
                <p className={clsx(styles.textGrey, styles.mt5)}>
                  House no D22 Sheet no 26 Model Colony Malir Karachi
                </p>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminOrderDetails;
