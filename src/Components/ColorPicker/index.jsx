import React, { useState, useCallback } from "react";
import { ChromePicker } from "react-color";
import { Box, ClickAwayListener } from "@mui/material";

import Button from "../Button";

const ColorPicker = ({ initialColor = "#ffffff", onColorSelect = () => {} }) => {
  const [color, setColor] = useState(initialColor);
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  // Handle color change but don't finalize yet
  const handleColorChange = useCallback((color) => {
    setColor(color.hex);
  }, []);

  // Finalize the color
  const handleColorSelect = () => {
    onColorSelect(color);
    setDisplayColorPicker(false); // Close the picker
  };

  // Toggle the color picker display
  const toggleColorPicker = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  return (
    <Box position="relative">
      {/* Color circle */}
      <Box
        onClick={toggleColorPicker}
        width={36}
        height={36}
        borderRadius={"50%"}
        backgroundColor={color}
        border={"1px solid #ccc"}
        sx={{ cursor: "pointer" }}
      />

      {/* Color picker and button */}
      {displayColorPicker ? (
        <ClickAwayListener onClickAway={() => setDisplayColorPicker(false)}>
          <Box
            position="absolute"
            zIndex={2}
            mt={2} // Adds margin between circle and color picker
            p={2}
            borderRadius={1}
            boxShadow={3}
            bgcolor="white"
          >
            <ChromePicker
              color={color}
              onChange={handleColorChange}
              disableAlpha={true}
            />
            <Box mt={2}>
              <Button onClick={handleColorSelect} value="Set Color" />
            </Box>
          </Box>
        </ClickAwayListener>
      ) : null}
    </Box>
  );
};

export default ColorPicker;
