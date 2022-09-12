import React from "react";
import Fab from "@mui/material/Fab";

export const PlusButton = ({handleOpenClose}) => {

  return (
    <Fab
      color="primary"
      size="small"
      aria-label="add"
      style={{ marginTop: "1rem" }}
      onClick={handleOpenClose}
    >
      +
    </Fab>
  );
};
