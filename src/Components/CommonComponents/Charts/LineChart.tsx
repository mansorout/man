import React from 'react'
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     Filler
// } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box } from '@mui/system'
// import faker from 'faker';
//   import { faker } from '@faker-js/faker';


//   ChartJS.register(
//     Filler,
//     CategoryScale,
//     LinearScale,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend
//   );
  
//   export const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: 'top' as const,
//         display: false,
//       },
//       title: {
//         display: false,
//         text: 'Chart.js Line Chart',
//       },
//     },
//   };
  
//   const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  
// const data = {
//     labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 'july', "Aug"],
//     datasets: [
//       {
//         label: "First dataset",
//         data: [33, 530, 85, 120, 440, 65, 300, 700],
//         fill: true,
//         backgroundColor: "rgba(75,192,192,0.2)",
//         borderColor: "rgba(75,192,192,1)"
//       },
//     ]
//   };

  interface LineChartProps{
    optionsValues : any;
    dataValues:any;

  }

const LineChart = (props:LineChartProps) => {
  return (
    <Box>
    <Line  options={props.optionsValues} data={props.dataValues} />
    </Box>
  )
}

export default LineChart