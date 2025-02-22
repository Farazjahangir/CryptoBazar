import React, { useState } from "react";
import { Popover, Typography } from "@mui/material";
import { Box } from "@mui/system";

import Button from "../Button";
import styles from "./styles.module.scss"

const ConfirmationPopper = ({
  children,
  onConfirm,
  message = "Are you sure?",
  color = "error",
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleConfirm = () => {
    onConfirm?.();
    handleClose();
  };

  return (
    <>
      <Box component="span" onClick={handleOpen}>
        {children}
      </Box>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            sx: {
              padding: 1.3,
              borderRadius: 4
            },
          },
        }}
      >
        <Typography fontSize='18px'>{message}</Typography>
        <Box display='flex' gap={1} mt={1}>
          <Button value="Cancel" onClick={handleClose} containerClass={styles.cancelBtn} />
          <Button value="Confirm" onClick={handleConfirm} containerClass={styles.confirmBtn} />
        </Box>
      </Popover>
    </>
  );
};

export default ConfirmationPopper;
