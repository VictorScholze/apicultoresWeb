import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function GraficoLinha({ dadosGrafico }) {
  return <Line data={dadosGrafico} />;
}

export default GraficoLinha;