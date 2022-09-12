
export const getRegistroPagosDetalle = async (option) => {
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
    return data
  } catch (error) {
    console.log(error);
    return error;
  }
};
