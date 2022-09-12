import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { FormPago } from "./FormPago";
import { createRegistroPago } from "../helpers/CreateRegistroPago";
import { getRegistroPagos } from "../helpers/GetRegistroPagos";
import { getRegistroPagosDetalle } from "../helpers/GetRegistroPagosDetalle";
export const FormDialog = ({
  openDialog,
  handleOpenClose,
  option,
  registroPago,
  setRegistroPagos,
  setRegistroPagosDetalle,
}) => {
  const [dataForm, setDataForm] = useState({
    metodoPago: "",
    tipo: "",
    destino: "",
    valor: "",
  });
  const handleSendDataForm = () => {
    //validar datos
    createRegistroPago(dataForm, option).then((res) => {
      getRegistroPagos(option).then((resp) => {
        setRegistroPagos(resp);
      });
      getRegistroPagosDetalle(option).then((resp) => {
        setRegistroPagosDetalle(resp);
      })
    });
  };

  return (
    <>
      <Dialog
        open={openDialog}
        onClose={handleOpenClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Formulario de Ingreso de Pago
        </DialogTitle>
        <DialogContent>
          <FormPago
            dataForm={dataForm}
            setDataForm={setDataForm}
            registroPago={registroPago}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpenClose} style={{ color: "red" }}>
            Cerrar
          </Button>
          <Button onClick={handleSendDataForm} style={{ color: "green" }}>
            Ingresar Pago
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
