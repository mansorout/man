import React, { useEffect, useState } from 'react';

import {  Theme } from "@mui/material";
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import ProgressBar from "@ramonak/react-progress-bar";
import { isArray } from 'underscore';

// const Consumerstaples = styled(LinearProgress)(({ theme }) => ({
//   height: 10,
//   borderRadius: 5,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: theme.palette.mode === 'light' ? '#4749ab' : '#308fe8',
//   },
// }));
// const GovernmentSecurities = styled(LinearProgress)(({ theme }) => ({
//   height: 10,
//   borderRadius: 5,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: theme.palette.mode === 'light' ? "#64dbff" : '#308fe8',
//   },
// }));
// const Energy = styled(LinearProgress)(({ theme }) => ({
//   height: 10,
//   borderRadius: 5,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: theme.palette.mode === 'light' ? '#4b7bec' : '#308fe8',
//   },
// }));
// const FixedDeposits = styled(LinearProgress)(({ theme }) => ({
//   height: 10,
//   borderRadius: 5,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: theme.palette.mode === 'light' ? '#eaa221' : '#308fe8',
//   },
// }));
// const Consumerstaples2 = styled(LinearProgress)(({ theme }) => ({
//   height: 10,
//   borderRadius: 5,
//   [`&.${linearProgressClasses.colorPrimary}`]: {
//     backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
//   },
//   [`& .${linearProgressClasses.bar}`]: {
//     borderRadius: 5,
//     backgroundColor: theme.palette.mode === 'light' ? '#6495ED' : '#308fe8',
//   },
// }));


const useStyles: any = makeStyles((theme: Theme) => ({
  lowRisk: {

    bgColor: "#5deb00"
  },
  moderateLow: {

    bgColor: "#d2eb00"
  },
  moderateHigh: {

    bgColor: "#ff7800"
  },
  highRisk: {

    bgColor:  "#ef0200"
  },
}));



type IProps = {
  progressData: any
  activeTab: string
}
const ProgressBars = (props: IProps) => {

  const [progressData, setProgressData] = useState<any[]>([]);
  const classes = useStyles();

  useEffect(() => {
    if (props?.progressData) {
      if (Array.isArray(props?.progressData)) {
        if (props?.activeTab === "companies") {
          //@ts-ignore
          setProgressData(props?.progressData && props?.progressData.length && props?.progressData.map((item: any) => { return { title: item?.company, percentage: parseFloat(item?.weight ? item?.weight : "0") } }))
        }
      } else {
        if (props?.activeTab === "sectors") {
          // let arrkeys: any[] = props?.progressData && props?.progressData.length ? Object.keys(props?.progressData) : [];
          let arrkeys: any[] = Object.keys(props?.progressData) || [];
          if (arrkeys && arrkeys.length) {
            setProgressData(arrkeys.map((item: any) => { return { title: item, percentage: parseFloat(props?.progressData[item] ? props?.progressData[item] : "0") } }))
          }
        }
      }
    }
  }, [props?.progressData, props?.activeTab])

  console.log()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box className="large-2">
        {
          progressData &&
          progressData.length &&
          progressData.map((item: any, index: number) => {
            return (
              <div key={index}>
                <Grid container spacing={3}>
                  <Grid item xs={8}>
                    <Typography className='ProgressTitle'>{item?.title}</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography sx={{ alignItems: "right" }} className='percentageValue'>{item?.percentage}%</Typography>
                  </Grid>
                </Grid>
                <ProgressBar completed={item?.percentage} bgColor={ item?.percentage <=25 ? "#5deb00" : item?.percentage <=50 ?" #d2eb00" : item?.percentage <=75 ? "#ff7800" : item?.percentage <=100 ? "#ef0200" : ""     }  isLabelVisible={false} height="8px" />
                <br />
              </div>
            )
          })
        }
      </Box>


      <Grid container sx={{ padding: " 11px 78px" }} >
        <Grid xs={12}>
          <Typography sx={{ fontSize: "14px", fontWeight: "500", color: "#6c63ff", textAlign: "center", }}>VIEW MORE</Typography>
        </Grid>
      </Grid>

    </Box>
  );
}

export default ProgressBars

{/* <Consumerstaples variant="determinate" value={18.88} />
<Grid container spacing={3}>
  <Grid item xs={8}>
    <Typography className='ProgressTitle'>Government Securities</Typography>
  </Grid>
  <Grid item xs={4}>
    <Typography sx={{ alignItems: "right" }} className='percentageValue'>22.8%</Typography>
  </Grid>
</Grid>
<GovernmentSecurities variant="determinate" value={22.8} />
<br />
<Grid container spacing={3}>
  <Grid item xs={8}>
    <Typography className='ProgressTitle'>Energy</Typography>
  </Grid>
  <Grid item xs={4}>
    <Typography sx={{ alignItems: "right" }} className='percentageValue'>7%</Typography>
  </Grid>
</Grid>
<Energy variant="determinate" value={7} />
<br />
<Grid container spacing={3}>
  <Grid item xs={8}>
    <Typography className='ProgressTitle'>Fixed Deposits</Typography>
  </Grid>
  <Grid item xs={4}>
    <Typography sx={{ alignItems: "right" }} className='percentageValue'>16.1%</Typography>
  </Grid>
</Grid>
<FixedDeposits variant="determinate" value={16.1} />
<br />
<Grid container spacing={3}>
  <Grid item xs={8}>
    <Typography className='ProgressTitle'>Consumer staples</Typography>
  </Grid>
  <Grid item xs={4}>
    <Typography sx={{ alignItems: "right" }} className='percentageValue'>5.8%</Typography>
  </Grid>
</Grid>
<Consumerstaples2 variant="determinate" value={5.8} /> */}
