import React from "react";
import { Paper } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  const info = {
    labels: data.labels,
    datasets: [
      {
        label: "Frequency",
        data: data.frequency,
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: data.title,
      },
    },
  };

  return (
    <Paper elevation={4} sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
      <Bar data={info} options={options} />
    </Paper>
  );
};

export default BarChart;
