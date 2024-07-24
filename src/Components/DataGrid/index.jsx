import { useEffect, useState } from "react";

import { DataGrid as MUIDataGrid } from "@mui/x-data-grid";

const DataGrid = ({ columns, rows, loading, onCellClick }) => {
  const [cols, setCols] = useState(columns || []);

  const putDefaultValues = () => {
    const updatedCols = cols.map((item) => ({
      ...item,
      flex: 1,
    }));
    setCols(updatedCols);
  };

  useEffect(() => {
    putDefaultValues();
  }, [columns]);

  return (
    <MUIDataGrid
      loading={loading}
      columns={cols}
      rows={rows}
      onCellClick={onCellClick}
      getRowClassName={() => ("tableRow")}
      sx={{
        "& .tableRow": {
          fontSize: 15,
          "&:hover": {
            backgroundColor: "#ff7a63",
            color: "#ffffff",
            cursor: "pointer",
          },
          "&.Mui-selected": {
            backgroundColor: "#ff6348",
            color: "#ffffff",
            "&:hover": {
              backgroundColor: "#ff6348",
              color: "#ffffff",
            },
          },
        },
      }}
    />
  );
};

export default DataGrid;
