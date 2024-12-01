import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";

import Button from "../Button";

const AdminDataGrid = ({
  columns,
  rows,
  loading,
  onRowClick,
  onRowSelect,
  onEdit,
  onDelete,
  checkboxSelection= false,
  renderHeader,
  pageSize = 10
}) => {
  const [cols, setCols] = useState(columns || []);

  const putDefaultValues = () => {
    const updatedCols = cols.map((item) => {
      if (item.noFlex) {
        return item;
      }
      return {
        ...item,
        flex: 1,
      };
    });
    setCols(updatedCols);
  };

  useEffect(() => {
    putDefaultValues();
  }, [columns]);

  return (
    <Box sx={{ height: "100%", border: "" }}>
      <Box sx={{ backgroundColor: "#ffffff", borderRadius: 2 }} padding={2}>
        {!!renderHeader && renderHeader()}
        {/* <Box display="flex">
          <Box width={100} mr={2}>
            <Button value="Edit" onClick={onEdit} />
          </Box>
          <Box width={100}>
            <Button value="Delete" onClick={onDelete} />
          </Box>
        </Box> */}
      </Box>
      <DataGrid
        loading={loading}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: pageSize,
            },
          },
        }}
        columns={cols}
        rows={rows}
        onRowClick={onRowClick}
        getRowClassName={() => "tableRow"}
        getCellClassName={() => "tableCell"}
        getRowHeight={(a) => 'auto'}
        disableColumnResize={true}
        disableRowSelectionOnClick
        checkboxSelection={checkboxSelection}
        onRowSelectionModelChange={(selectedRowIds, details) => {
          const rows = selectedRowIds.map((item) => {
            return details.api.getRow(item);
          });
          onRowSelect?.(rows);
        }}
        sx={{
          border: "none",
          flexGrow: 1,
          backgroundColor: "#ffffff",
          "& .tableRow": {
            fontSize: 15,
            backgroundColor: "#ffffff",
            "&:hover": {
              backgroundColor: "#e2e7e84d",
              cursor: "pointer",
            },
            "&.Mui-selected": {
              backgroundColor: "#e2e7e84d",
              "&:hover": {
                backgroundColor: "#e2e7e84d",
              },
            },
          },
        }}
      />
    </Box>
  );
};

export default AdminDataGrid;
