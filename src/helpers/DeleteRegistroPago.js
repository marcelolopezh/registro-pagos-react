export const deleteRegistroPago = async (id) => {
  const url = `http://localhost:4001/api/v1/delete-registro-pago/${id}`;
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
