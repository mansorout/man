import React, { useEffect, useMemo, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/joy';
import { chart } from '../../Assets';
import { Button } from '@mui/material';
import { Doughnut } from "react-chartjs-2";

type IProps = {
  progressData: any
  activeTab: string
}




export default function MarketCap(props: IProps) {


  // const keys: any[] = useMemo(() => { return props?.progressData ? Object.keys(props?.progressData) : [] }, [props?.progressData, props?.activeTab]);
  // const values: any[] = useMemo(() => { return props?.progressData ? Object.values(props?.progressData) : [] }, [props?.progressData, props?.activeTab]);

  const [keys, setKeys] = useState<any[]>([]);
  const [values, setValues] = useState<any[]>([]);

  const data = useMemo(() => {
    return {
      labels: props?.activeTab === "marketcap" ? keys : [],
      datasets: [
        {
          data: props?.activeTab === "marketcap" ? values : [],
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
    let marketCapData: any = props?.progressData[props?.activeTab];
    if (marketCapData) {
      if (props?.activeTab === "marketcap") {
        setKeys(Object.keys(marketCapData))
        setValues(Object.values(marketCapData));
      }
    }
  }, [props?.progressData])
  const options = {
    legend: {
      display: false,
    },
    elements: {
      
    }
  };
  
  return (
    <>
    
      <Box sx={{ width: '100%' }}>
        {/* <Grid container rowSpacing={0} columnSpacing={20} sx={{ display: "flex", paddingLeft: "40px", paddingTop: "7.5px" }}> */}
        <Grid container rowSpacing={0} columnSpacing={2} >
          {/* <Grid item xs={5} sx={{ paddingLeft: "25px" }} > */}
          <Grid item xs={8} sm={8}>
            <Doughnut
              data={data}
              options={options}
            />
          </Grid>
          {/* <Grid item xs={7} sx={{ paddingLeft: "50px", alignItems: "right" }}> */}
          <Grid item xs={4} sm={4} >
            {
              keys && keys.length && keys.map((item, index) => {
                return (
                  <Grid key={index}>
                    {/* <Box style={{ padding: "6px", backgroundColor: "#23db7b", borderRadius: "50%", height: "2px", width: "2px" }}></Box> */}
                    <Typography style={{ color: "#7b7b9d", fontSize: "14px" }}>{item ? item : ""}</Typography><br />
                    <Typography sx={{ fontWeight: "500", fontSize: "16" }}>{values[index] ? values[index] : "0"}%</Typography>
                    {/* <Box style={{ padding: "6px", backgroundColor: "#fdc100", borderRadius: "50%", height: "2px", width: "2px" }}></Box> */}
                  </Grid>
                )
              })
            }

          </Grid>
        </Grid>
      </Box>
    </>
  );
  // }
}
