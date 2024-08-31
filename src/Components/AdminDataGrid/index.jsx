import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";

import Button from "../Button";

const AdminDataGrid = ({ columns, rows, loading, onRowClick, onRowSelect, onEdit, onDelete }) => {
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
    <Box sx={{ height: "100%", border: '' }}>
      <Box sx={{ backgroundColor: '#ffffff', borderRadius: 2 }} padding={2}>
        <Box display="flex">
          <Box width={100} mr={2}>
            <Button value="Edit" onClick={onEdit} />
          </Box>
          <Box width={100}>
            <Button value="Delete" onClick={onDelete} />
          </Box>
        </Box>
      </Box>
      <DataGrid
        loading={loading}
        columns={cols}
        rows={rows}
        onRowClick={onRowClick}
        getRowClassName={() => "tableRow"}
        disableColumnResize={true}
        disableRowSelectionOnClick
        checkboxSelection
        onRowSelectionModelChange={(selectedRowIds, details) => {
          const rows = selectedRowIds.map((item) => {
            return details.api.getRow(item);
          });
          onRowSelect?.(rows);
        }}
        sx={{
          border: 'none',
          flexGrow: 1,
          backgroundColor: "#ffffff",
          "& .tableRow": {
            fontSize: 15,
            backgroundColor: "#ffffff",
            "&:hover": {
              backgroundColor: "#ff7a63",
              color: "#ffffff",
              cursor: "pointer",
            },
            "&.Mui-selected": {
              backgroundColor: "#ff7a63",
              color: "#ffffff",
              "&:hover": {
                backgroundColor: "#ff7a63",
                color: "#ffffff",
              },
            },
          },
        }}
      />
    </Box>
  );
};

export default AdminDataGrid;
