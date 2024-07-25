import { useState } from "react";
import { Grid, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import DataGrid from "../../Components/DataGrid";
import Button from "../../Components/Button";
import TextInput from "../../Components/TextInput";
import ImageUploader from "../../Components/ImageUploader";
import styles from "./style.module.scss";
import { minWidth } from "@mui/system";

const Profile = () => {
  const columns = [
    {
      field: "orderId",
      headerName: "Order Id",
      minWidth: 100,
    },
    {
      field: "date",
      headerName: "Date",
      minWidth: 100,
    },
    {
      field: "pStatus",
      headerName: "Payment Status",
      minWidth: 180,
    },
    {
      field: "fStatus",
      headerName: "Fulfillment Status",
      minWidth: 220,
    },
    {
      field: "total",
      headerName: "Total",
      type: "number",
      minWidth: 150
    },
  ];

  const data = [
    {
      id: 1,
      orderId: "123",
      date: "1-1-2024",
      pStatus: "Paid",
      fStatus: "Fulfilled",
      total: 3200,
    },
    {
      id: 2,
      orderId: "221",
      date: "1-1-2024",
      pStatus: "Paid",
      fStatus: "Fulfilled",
      total: 2600,
    },
    {
      id: 3,
      orderId: "1121",
      date: "1-1-2024",
      pStatus: "Paid",
      fStatus: "Fulfilled",
      total: 29000,
    },
  ];
  const [file, setFile] = useState(null);

  const navigate = useNavigate()

  const onDropFile = (file) => {
    const image = URL.createObjectURL(file[0]);
    setFile(image);
  };

  const onDropRejectedError = (err) => {
    console.log("ERR", err);
  };

  const onRowClick = (row) => {
    navigate(`/order-details/${row.row.id}`)
  }

  return (
    <Container className={styles.container}>
      <Box
        sx={{ backgroundColor: "#e2e7e84d", borderRadius: 3, paddingBottom: 3 }}
      >
        <Grid container justifyContent="center" alignItems={"center"}>
          <Grid
            item
            md={5}
            xs={12}
            justifyContent="center"
            flex={1}
            display="flex"
            marginTop={2}
            marginBottom={2}
          >
            <ImageUploader
              onDropFile={onDropFile}
              file={file}
              onDropRejectedError={onDropRejectedError}
            />
          </Grid>
          <Grid item md={7} xs={12}>
            <div className={styles.inputGroup}>
              <div className={styles.inputBox}>
                <TextInput label="First Name" />
              </div>
              <div className={styles.inputBox}>
                <TextInput label="Last Name" />
              </div>
            </div>
            <div className={styles.inputBox}>
              <TextInput label="Address" />
            </div>
            <div className={styles.inputGroup}>
              <div className={styles.inputBox}>
                <TextInput label="City" />
              </div>
              <div className={styles.inputBox}>
                <TextInput label="Postal Code" />
              </div>
            </div>
            <div className={styles.inputBox}>
              <TextInput label="Contact Number" />
            </div>
            <div className={styles.btnBox}>
              <Button value="Submit" containerClass={styles.buttonContainer} />
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginTop: 7, marginBottom: 7 }}>
        <h2 className={styles.orderTableTitle}>Order History</h2>
        <DataGrid columns={columns} rows={data} onRowClick={onRowClick} />
      </Box>
    </Container>
  );
};

export default Profile;
