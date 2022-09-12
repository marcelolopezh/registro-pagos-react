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
    let fondo = 1125000;
    array[0] = fondo;

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

    for (let i = 0; i < array.length; i++) {
      if (array[i] == null) array[i] = array[i - 1];
    }

    return array;
  } catch (error) {
    console.log(error);
    return error;
  }
};
