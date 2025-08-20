import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ChartView() {
  const data = {
    labels: ["A", "B", "C", "D"],
    datasets: [
      {
        label: "Sample Data",
        data: [12, 19, 3, 5],
        backgroundColor: "rgba(75, 192, 192, 0.7)"
      }
    ]
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto" }}>
      <h2>Sample Chart</h2>
      <Bar data={data} />
    </div>
  );
}

export default ChartView;
