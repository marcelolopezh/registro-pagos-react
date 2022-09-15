import moment from "moment";
export const getRegistroPagos = async (option) => {
  const url = `http://localhost:4001/api/v1/registro-pago`;
  try {
    const body = {
      mes: option,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    let array = [];
    let fondo = parseInt(localStorage.getItem("montoBase"), 10);
    let fechaFondo = localStorage.getItem("fechaIngresoMontoBase");
    array[fechaFondo.split("/")[0] - 1] = fondo;
    /* Transformar Datos a Array Diario */
    data.registroPagos.forEach((element) => {
      let date = moment(element.fechaDate).format("D");

      if (element.tipo === "Transferencia" || element.tipo === "Depósito") {
        if (element.valor) {
          fondo = fondo - element.valor;
        }
        array[date - 1] = fondo;
      } else {
        if (element.valor) {
          fondo = fondo + element.valor;
        }
        array[date - 1] = fondo;
      }
    });
    return array;
  } catch (error) {
    console.log(error);
    return error;
  }
};
