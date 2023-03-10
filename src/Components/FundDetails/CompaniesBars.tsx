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
    backgroundColor: theme.palette.mode === 'light' ? "#4749ab" : '#308fe8',
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
    backgroundColor: theme.palette.mode === 'light' ? '#4749ab' : '#308fe8',
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
    backgroundColor: theme.palette.mode === 'light' ? '#4749ab' : '#308fe8',
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
    backgroundColor: theme.palette.mode === 'light' ? '#4749ab' : '#308fe8',
  },
}));



export default function Companies() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    
      


          <Grid container spacing={3}>
            <Grid item xs={8}>
            <Typography className='ProgressTitle'>Reliance Industries</Typography>
            </Grid>
            <Grid item xs={4}>
            <Typography sx={{alignItems:"right"}} className='percentageValue'>11.19%</Typography>
            </Grid>
          </Grid>


      <Consumerstaples variant="determinate" value={11.19} />
      <br/>
      <Grid container spacing={3}>
            <Grid item xs={8}>
            <Typography className='ProgressTitle'>TATA steel</Typography>
            </Grid>
            <Grid item xs={4}>
            <Typography sx={{alignItems:"right"}} className='percentageValue'>7.66%</Typography>
            </Grid>
          </Grid>
      <GovernmentSecurities variant="determinate" value={7.66} />
      <br/>
      <Grid container spacing={3}>
            <Grid item xs={8}>
            <Typography className='ProgressTitle'>HDFC Finance</Typography>
            </Grid>
            <Grid item xs={4}>
            <Typography sx={{alignItems:"right"}} className='percentageValue'>5%</Typography>
            </Grid>
          </Grid>
      <Energy variant="determinate" value={5} />
      <br/>
      <Grid container spacing={3}>
            <Grid item xs={8}>
            <Typography className='ProgressTitle'>Power finance corp</Typography>
            </Grid>
            <Grid item xs={4}>
            <Typography sx={{alignItems:"right"}} className='percentageValue'>4.45%</Typography>
            </Grid>
          </Grid>
      <FixedDeposits variant="determinate" value={4.45} />
      <br/>
      <Grid container spacing={3}>
            <Grid item xs={8}>
            <Typography className='ProgressTitle'>Bajaj auto</Typography>
            </Grid>
            <Grid item xs={4}>
            <Typography sx={{alignItems:"right"}} className='percentageValue'>3.90%</Typography>
            </Grid>
          </Grid>
      <Consumerstaples2 variant="determinate" value={3.90} />
      
      
        
         <Grid container sx={{padding:" 11px 78px"}}> 
        <Grid xs={12}>
          <Typography sx={{fontSize:"14px",fontWeight:"500",color:"#6c63ff",textAlign:"center",}}>VIEW MORE</Typography>
        </Grid>
      </Grid>
       
    </Box>
  );
}
