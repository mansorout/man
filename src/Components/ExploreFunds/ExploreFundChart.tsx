import React from "react";

import { Line } from "react-chartjs-2";

const data = {
  labels: ["18Jan", "28Feb", "5Mar", "13Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: false,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    
  ]
};

export default function App() {
  return (
    <div className="App">
      <Line data={data} />
    </div>
  );
}
