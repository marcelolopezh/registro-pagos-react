import React, { useEffect } from "react";
import { getRegistroPagosDetalle } from "../helpers/GetRegistroPagosDetalle";
import { getRegistroPagos } from "../helpers/GetRegistroPagos";
import { formatNumber } from "../helpers/Util";
import { deleteRegistroPago } from "../helpers/DeleteRegistroPago";

import moment from "moment";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export const RegistroPago = ({
  option,
  registroPagosDetalle,
  setRegistroPagosDetalle,
  setRegistroPagos,
}) => {
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 10;
  useEffect(() => {
    getRegistroPagosDetalle(option).then((res) => {
      setRegistroPagosDetalle(res);
    });
    // eslint-disable-next-line
  }, [option]);

  const handleDeletePago = (id) => {
    deleteRegistroPago(id).then(() => {
      getRegistroPagos(option).then((res) => {
        setRegistroPagos(res);
      });
      getRegistroPagosDetalle(option).then((res) => {
        setRegistroPagosDetalle(res);
      });
    });
  };

  const getColor = ({ tipo, valor }) => {
    if (!valor) return "blue";
    return tipo === "Transferencia" || tipo === "Depósito" ? "red" : "green";
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow style={{ backgroundColor: "black" }}>
              <TableCell style={{ color: "white" }} align="center">
                Fecha
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Destino
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                {" "}
                Método Pago
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Tipo
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Valor
              </TableCell>
              <TableCell style={{ color: "white" }} align="center">
                Acción
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {registroPagosDetalle.registroPagos
              ? registroPagosDetalle.registroPagos
                  .slice()
                  .sort()
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        style={{ fontSize: "0.7rem" }}
                        component="th"
                        scope="row"
                      >
                        {moment(row.fechaDate).format("DD-MM")}
                      </TableCell>
                      <TableCell style={{ fontSize: "0.7rem" }}>
                        {row.destino}
                      </TableCell>
                      <TableCell style={{ fontSize: "0.7rem" }}>
                        {row.metodoPago}
                      </TableCell>
                      <TableCell style={{ fontSize: "0.7rem" }}>
                        {row.tipo}
                      </TableCell>
                      <TableCell
                        style={{ fontSize: "0.7rem", color: getColor(row) }}
                      >
                        ${formatNumber(row.valor)}
                      </TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => handleDeletePago(row._id)}
                          size="small"
                        >
                          <DeleteIcon color="primary" />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
              : null}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={
          registroPagosDetalle.registroPagos
            ? registroPagosDetalle.registroPagos.length
            : 0
        }
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </>
  );
};
