import React, { MouseEvent, ReactElement, useRef, useState } from 'react'
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
import { getDatasetAtEvent, getElementsAtEvent, Line, getElementAtEvent } from 'react-chartjs-2';
import { CategoryScale, Chart as ChartJS, InteractionItem, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js';
import { Box } from '@mui/system'
import {  Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import './chart.css'
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
const useStyles: any = makeStyles((theme: Theme) => ({
  chartWrapper:{
    '& canvas':{
      minHeight: '243px',
    height: 'auto',
    maxHeight: '410px',
    width: '100%',
    minWidth: '350px',
    }
  }
}))

interface LineChartProps {
  optionsValues: any;
  dataValues: any;
  onClick?: (val: any) => void,
}

const LineChart = (props: LineChartProps) => {
  const [graphlinechart,setGraphLineChart] = useState()
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const chartRef: any = useRef(null);

  const printElementAtEvent = (element: InteractionItem[]) => {
    if (!element.length) return;

    const { datasetIndex, index } = element[0];

    console.log("kp ", props.dataValues.labels[index], props.dataValues.datasets[datasetIndex], props?.dataValues?.datasets[datasetIndex]?.label);

    if (props?.onClick) props?.onClick({ label: props?.dataValues?.labels[index], value: props?.dataValues?.datasets[datasetIndex]?.data[index], lineLabel: props?.dataValues?.datasets[datasetIndex]?.label })
  };

  const handleOnClick = (event: MouseEvent<HTMLCanvasElement>) => {
  
   
    if (!chartRef.current) return;
    printElementAtEvent(getElementAtEvent(chartRef.current, event));

  }

  return (
    <Box>
      
      <Line
        ref={chartRef}
        options={props.optionsValues}
        data={props.dataValues}
        onClick={handleOnClick}
      />
    </Box>
  )
}

export default LineChart