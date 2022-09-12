import React from "react";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
export const FormPago = ({ dataForm, setDataForm }) => {
  const metodoPago = [
    { id: 1, value: "Transferencia", name: "metodoPago" },
    { id: 2, value: "Depósito", name: "metodoPago" },
    { id: 3, value: "Efectivo", name: "metodoPago" },
  ];

  const tipo = [
    { id: 1, value: "Transferencia", name: "tipoPago" },
    { id: 2, value: "Abono", name: "tipoPago" },
  ];

  const handleChangeForm = (event) => {
    if (event) {
      setDataForm({
        ...dataForm,
        [event.target.name]: event.target.value,
      });
    }
  };
  return (
    <>
      <FormControl required sx={{ m: 1, minWidth: 150 }} size={"small"}>
        <InputLabel style={{ marginTop: "0.1rem" }}> Método Pago</InputLabel>
        <Select
          defaultValue={""}
          label="Método de Pago"
          onChange={handleChangeForm}
          name="metodoPago"
          value={dataForm.metodoPago}
        >
          {metodoPago.map((tipo) => {
            return (
              <MenuItem value={tipo.value} key={tipo.value}>
                {tipo.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <FormControl required sx={{ m: 1, minWidth: 150 }} size={"small"}>
        <InputLabel style={{ marginTop: "0.1rem" }}> Tipo Pago</InputLabel>
        <Select
          defaultValue={""}
          label="Tipo de Pago"
          onChange={handleChangeForm}
          name="tipo"
          value={dataForm.tipo}
        >
          {tipo.map((tipo) => {
            return (
              <MenuItem value={tipo.value} key={tipo.value}>
                {tipo.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <br></br>
      <FormControl required sx={{ m: 1, minWidth: 150 }} size={"small"}>
        <TextField
          style={{ marginTop: "0.1rem" }}
          required
          id="outlined-required"
          label="Destino"
          size={"small"}
          onChange={handleChangeForm}
          name={"destino"}
          value={dataForm.destino}
        />
      </FormControl>
      <FormControl required sx={{ m: 1, minWidth: 150 }} size={"small"}>
        <TextField
          style={{ marginTop: "0.1rem" }}
          required
          id="outlined-required"
          label="Valor"
          size="small"
          onChange={handleChangeForm}
          name={"valor"}
          value={dataForm.valor}
          type="number"
          min={1}
          max={1000000}
        />
      </FormControl>
    </>
  );
};
