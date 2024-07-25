import { Container } from "@mui/system";
import { useParams } from "react-router-dom";

import DataGrid from "../../Components/DataGrid";
import styles from "./style.module.scss";

const OrderDetails = () => {
  const columns = [
    {
      field: "product",
      headerName: "Product",
      minWidth: 100,
    },
    {
      field: "price",
      headerName: "Price",
      minWidth: 100,
      type: "number",
    },
    {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 100,
    },
    {
      field: "total",
      headerName: "Total",
      minWidth: 220,
      type: "number",
      renderCell: (row) => row.row.price * row.row.quantity,
    },
  ];

  const data = [
    {
      id: 1,
      product: "Shoe",
      price: 100,
      quantity: 3,
    },
    {
      id: 2,
      product: "Shoe",
      price: 100,
      quantity: 1,
    },
    {
      id: 3,
      product: "Shoe",
      price: 250,
      quantity: 5,
    },
  ];
  const { orderId } = useParams();
  return (
    <Container>
      <div className={styles.container}>
        <h2>Order Details (OrderId)</h2>
        <div className={styles.group}>
          <p>Name:</p>
          <p>Faraz Jahangir</p>
        </div>
        <div className={styles.group}>
          <p>Email:</p>
          <p>jahangirfaraz98@gmail.com</p>
        </div>
        <div className={styles.group}>
          <p>Address:</p>
          <p>
            lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
            ipsum
          </p>
        </div>
        <div className={styles.group}>
          <p>Contact No:</p>
          <p>0344-2778759</p>
        </div>
        <div className={styles.group}>
          <p>Order Placed:</p>
          <p>22-04-2024</p>
        </div>
        <div className={styles.group}>
          <p>Status:</p>
          <p>Delivered</p>
        </div>
        <div className={styles.group}>
          <p>Delivered On:</p>
          <p>23-04-2024</p>
        </div>
        <div className={styles.group}>
          <p>Total:</p>
          <p>2100</p>
        </div>
      </div>
      <div className={styles.dataGridBox}>
        <DataGrid columns={columns} rows={data} />
      </div>
    </Container>
  );
};

export default OrderDetails;
