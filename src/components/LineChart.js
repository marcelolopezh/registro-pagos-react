import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getRegistroPagos } from "../helpers/GetRegistroPagos";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const LineChart = ({ option, registroPagos, setRegistroPagos }) => {
  useEffect(() => {
    getRegistroPagos(option).then((res) => {
      setRegistroPagos(res);
    });
  // eslint-disable-next-line
  }, [option]);

  function getDaysInMonth(year) {
    return new Date(year, option, 0).getDate();
  }

  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth() + 1;

  const labels = [];
  for (let i = 1; i <= getDaysInMonth(currentYear, currentMonth); i++)
    labels.push(i);

  const data = {
    labels,
    datasets: [
      {
        label: "Ingresos / Egresos",
        data: registroPagos,
        borderColor: "rgba(8, 185, 229, 0.5)",
        backgroundColor: "rgba(30, 204, 242, 0.5)",
        tension: 0.5,
      },
    ],

    scaleOptions: {
      ticks: {
        beginAtZero: true,
      },
    },
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Gráfico de Ingresos",
      },
    },
  };
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};
