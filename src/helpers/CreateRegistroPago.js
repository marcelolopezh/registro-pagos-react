export const createRegistroPago = async (dataForm, option) => {
  const url = `http://localhost:4001/api/v1/create-registro-pago`;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(dataForm),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
