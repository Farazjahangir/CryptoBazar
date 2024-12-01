import { Box } from "@mui/system";
import { Avatar } from "@mui/material";
import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";

import PaymentChip from "./PaymentChip";
import AdminDataGrid from "../../Components/AdminDataGrid";
import Select from "../../Components/Select";
import dummyDp from "../../assets/images/profileDummy.png";
import StatusChip from "./StatusChip";
import { SCREEN_PATHS } from "../../constants";
import styles from "./style.module.scss";

const AdminOrderList = ({ navigation }) => {
  const navigate = useNavigate();

  const navigateToOrderDetails = (data) => {
    navigate(SCREEN_PATHS.ADM_ORDER_DETAILS, { state: data });
  };

  const columns = [
    {
      field: "orderNo",
      headerName: "Order No",
      minWidth: 90,
      display: "flex",
    },
    {
      field: "date",
      headerName: "Date",
      minWidth: 200,
      display: "flex",
    },
    {
      field: "customer",
      headerName: "Customer",
      minWidth: 270,
      display: "flex",
      renderCell: (param) => (
        <Box display="flex" alignItems="center" p={1}>
          <Avatar src={param.row.customer.picture} variant="circle" />
          <Box ml={1}>
            <p>{param.row.customer.name}</p>
            <p className={styles.custEmail}>{param.row.customer.email}</p>
          </Box>
        </Box>
      ),
    },
    {
      field: "payment",
      headerName: "Payment",
      minWidth: 140,
      display: "flex",
      renderCell: (param) => <PaymentChip label={param.row.payment} />,
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 140,
      display: "flex",
      renderCell: (param) => <StatusChip label={param.row.status} />,
    },
  ];

  const data = [
    {
      id: 1,
      orderNo: 123,
      date: DateTime.now().toFormat("yyyy-MM-dd h:mm:ss a"),
      customer: {
        name: "Faraz",
        email: "jahangirfaraz98@gmail.com",
        picture: dummyDp,
      },
      payment: "cancelled",
      status: "delivered",
    },
    {
      id: 2,
      orderNo: 124,
      date: DateTime.now().toFormat("yyyy-MM-dd h:mm:ss a"),
      customer: {
        name: "Ashar",
        email: "ashar@gmail.com",
        picture: dummyDp,
      },
      payment: "paid",
      status: "out for delivery",
    },
    {
      id: 3,
      orderNo: 124,
      date: DateTime.now().toFormat("yyyy-MM-dd h:mm:ss a"),
      customer: {
        name: "Ezan",
        email: "Ezan@gmail.com",
        picture: dummyDp,
      },
      payment: "failed",
      status: "dispatch",
    },
    {
      id: 4,
      orderNo: 125,
      date: DateTime.now().toFormat("yyyy-MM-dd h:mm:ss a"),
      customer: {
        name: "laiba",
        email: "laiba@gmail.com",
        picture: dummyDp,
      },
      payment: "pending",
      status: "delivered",
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
      <AdminDataGrid
        columns={columns}
        rows={data}
        checkboxSelection={false}
        onRowClick={(data) => navigateToOrderDetails(data.row)}
      />
    </div>
  );
};

export default AdminOrderList;
