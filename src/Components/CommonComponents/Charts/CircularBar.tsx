import React, { useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

type IProps = {
  progressData: any
}

const options = {
  legend: {
    display: false,
  },
  elements: {

  }
};

export const CircularBar = (props: IProps) => {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );


  const [keys, setKeys] = useState<any[]>([]);
  const [values, setValues] = useState<any[]>([]);

  const data = useMemo(() => {
    return {
      labels: keys && keys.length ? keys : [],
      datasets: [
        {
          data: values && values.length ? values : [],
          backgroundColor: [
            "rgb(242,165,152)",
            "rgb(255,232,157)",
            "rgb(236,107,109)",
            "rgb(122,231,125)",
            "rgb(195,233,151)"
          ],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ],

      plugins: {
        labels: {
          render: "percentage",
          fontColor: ["green", "white", "red"],
          precision: 2
        },
      },
      text: "23%",
    }
  }, [keys, values])

  useEffect(() => {
    if (props?.progressData) {
      setKeys(Object.keys(props?.progressData))
      setValues(Object.values(props?.progressData));
    }
  }, [props?.progressData])

  return (
    <>

      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={0} columnSpacing={2} >
          <Grid item xs={12} sm={8}>
            <Doughnut
              data={data}
              options={options}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
  // }
}
