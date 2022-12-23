import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const Consumerstaples = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#4749ab' : '#308fe8',
  },
}));
const GovernmentSecurities = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? "#64dbff" : '#308fe8',
  },
}));
const Energy = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#4b7bec' : '#308fe8',
  },
}));
const FixedDeposits = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#eaa221' : '#308fe8',
  },
}));
const Consumerstaples2 = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#6495ED' : '#308fe8',
  },
}));



export default function ProgressBars() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    
      


          <Grid container spacing={3}>
            <Grid item xs={8}>
            <Typography className='ProgressTitle'>Consumer staples</Typography>
            </Grid>
            <Grid item xs={4}>
            <Typography sx={{alignItems:"right"}} className='percentageValue'>18.88%</Typography>
            </Grid>
          </Grid>


      <Consumerstaples variant="determinate" value={18.88} />
      <br/>
      <Grid container spacing={3}>
            <Grid item xs={8}>
            <Typography className='ProgressTitle'>Government Securities</Typography>
            </Grid>
            <Grid item xs={4}>
            <Typography sx={{alignItems:"right"}} className='percentageValue'>22.8%</Typography>
            </Grid>
          </Grid>
      <GovernmentSecurities variant="determinate" value={22.8} />
      <br/>
      <Grid container spacing={3}>
            <Grid item xs={8}>
            <Typography className='ProgressTitle'>Energy</Typography>
            </Grid>
            <Grid item xs={4}>
            <Typography sx={{alignItems:"right"}} className='percentageValue'>7%</Typography>
            </Grid>
          </Grid>
      <Energy variant="determinate" value={7} />
      <br/>
      <Grid container spacing={3}>
            <Grid item xs={8}>
            <Typography className='ProgressTitle'>Fixed Deposits</Typography>
            </Grid>
            <Grid item xs={4}>
            <Typography sx={{alignItems:"right"}} className='percentageValue'>16.1%</Typography>
            </Grid>
          </Grid>
      <FixedDeposits variant="determinate" value={16.1} />
      <br/>
      <Grid container spacing={3}>
            <Grid item xs={8}>
            <Typography className='ProgressTitle'>Consumer staples</Typography>
            </Grid>
            <Grid item xs={4}>
            <Typography sx={{alignItems:"right"}} className='percentageValue'>5.8%</Typography>
            </Grid>
          </Grid>
      <Consumerstaples2 variant="determinate" value={5.8} />
      
      <Box sx={{padding:" 11px 78px"}}>
         <Typography className='viewmoretext'>VIEW MORE</Typography>
         </Box>
       
    </Box>
  );
}
