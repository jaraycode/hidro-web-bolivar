"use client";

import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const BarChart = () => {
  const dataset = {
    labels: ["Positive Reviews", "Neutral Reviews", "Negative Reviews"],
    datasets: [
      {
        label: "Number Of Reviews",
        data: [10, 20, 30],
        barPercentage: 0.5,
        barThickness: 150,
        maxBarThickness: 200,
        minBarLength: 10,
        backgroundColor: ["#ff6666", "#ffff80", "#5cd65c"],
        borderColor: ["#0d0d0d", "#0d0d0d", "#0d0d0d"],
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={dataset} />;
};

export default BarChart;
