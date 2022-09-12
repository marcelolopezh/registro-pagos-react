import { useState } from "react";
import "./App.css";
import { InputSearch } from "./components/InputSearch";
import { LineChart } from "./components/LineChart";
import { RegistroPago } from "./components/RegistroPago";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { PlusButton } from "./components/PlusButton";
import { FormDialog } from "./components/FormDialog";

export default function App() {
  const [option, setOption] = useState(1);
  const [openDialog, setOpenDialog] = useState(false);
  const [registroPagos, setRegistroPagos] = useState({});
  const [registroPagosDetalle, setRegistroPagosDetalle] = useState({});

  const handleOpenClose = () => {
    setOpenDialog(!openDialog);
  };

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }} style={{ padding: "1rem" }}>
        <FormDialog
          openDialog={openDialog}
          handleOpenClose={handleOpenClose}
          option={option}
          registroPagos={registroPagos}
          setRegistroPagos={setRegistroPagos}
          registroPagosDetalle={registroPagosDetalle}
          setRegistroPagosDetalle={setRegistroPagosDetalle}
        />
        <Grid container spacing={2}></Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <InputSearch option={option} setOption={setOption} />
            <LineChart
              option={option}
              registroPagos={registroPagos}
              setRegistroPagos={setRegistroPagos}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <RegistroPago
              option={option}
              registroPagosDetalle={registroPagosDetalle}
              setRegistroPagosDetalle={setRegistroPagosDetalle}
              registroPagos={registroPagos}
              setRegistroPagos={setRegistroPagos}
            />
            <PlusButton handleOpenClose={handleOpenClose} />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
