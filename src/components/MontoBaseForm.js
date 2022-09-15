import React, { useState } from "react";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import moment from "moment";

export const MontoBaseForm = ({ setExisteMontoBase }) => {
  const [montoBase, setMontoBase] = useState(0);
  const handleChangeMontoBase = (event) => {
    setMontoBase(event.target.value);
  };
  const handleSetInLocalStorage = () => {
    if (!isNaN(montoBase) && montoBase > 0) {
      localStorage.setItem("montoBase", montoBase);
      localStorage.setItem(
        "fechaIngresoMontoBase",
        moment().format("DD/MM")
      );
      setExisteMontoBase(true);
    }
  };
  return (
    <div>
      <div>Ingrese Monto Base</div>
      <FormControl required sx={{ m: 1, minWidth: 150 }} size={"small"}>
        <TextField
          size="small"
          onChange={handleChangeMontoBase}
          value={montoBase}
          type="number"
          min={1}
          max={1000000}
        />
      </FormControl>
      <br></br>
      <FormControl>
        <Button onClick={handleSetInLocalStorage} variant="contained">
          Ingresar Monto Base
        </Button>
      </FormControl>
    </div>
  );
};
