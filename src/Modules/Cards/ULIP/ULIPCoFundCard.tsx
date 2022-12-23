import { Box, Button, Chip, FormControl, FormControlLabel, Grid, Radio, Typography } from "@mui/material";
//import { formatter } from '../../../Assets';
import { questionMarkIcon, fileDownloadIcon } from "../../../Assets";
import { useState } from "react";

export interface ULIPProp {
  logo: string,
  title: string,
  projectedAmount: number,
  topPerformingFundReturn: number,
  lifeCoverAmount: number,
  investedValueAmount: number,
  taxSavings: number
}

const formatter1 = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

const formatter2 = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 2,
});

const ULIPCoFundCard = (props: ULIPProp) => {

  const [checked, setChecked] = useState(false);

  const style = {
    returns: {
      fontSize: '14px',
      color: '#7b7b9d',
    },
    amount: {
      fontSize: '18px',
      color: '#3c3e42',
    },
    growthRed: {
      color: '#db2323'
    },
    growthGreen: {
      color: '#23db7b'
    },
    buttons: {
      width: '210px',
      height: '36px',
      padding: '10px 26px',
      borderRadius: '8px',
      border:"0px"
    },
    buttonText: {
      fontSize: '11px',
      fontWeight: 500,
      letterSpacing: '0.55px',
    }
  }

  return (

    <Box 
     sx={{
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      borderRadius: '0.625vw',
      boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
      backgroundColor: '#fff',
      fontFamily: 'Roboto',
      gap: '20px',
      marginBottom: '10px',
    }}>
      <Box sx={{
        display: 'flex',
        justifyContent: {xs:"center", sm:'space-between'},
        flexWrap:"wrap",
        gap:"20px"
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '20px',
          alignItems:"center",
        }}>
          <Box
          sx={{border:"1px solid #d1d6dd", borderRadius:"50%", width: '50px',
          height: '50px', display:"flex", alignItems:"center", justifyContent:"center"}}
          >
            <img src={props.logo} alt="Company Logo" style={{
              width:"50px",
              height:"50px",

              objectFit: 'contain',
            }} />
          </Box>
          <Box>
            <Typography sx={{
              fontSize: '20px',
              fontWeight: 500,
              color: '#3c3e42',
            }}>
              {props.title}
            </Typography>
          </Box>
        </Box>
        <Box sx={{
          display: 'flex',
          justifyContent: {xs:"center", sm:'flex-end'},
          gap: '10px',
        }}>
          <Box sx={{
            display: 'flex',
            alignItems:'center',
            gap:"10px",
            flexDirection: {xs:'row', sm:"column"},
          }}>
            <Chip label={formatter2.format(props.projectedAmount) + ' Lacs'} sx={{
              borderRadius: '2px',
              backgroundColor: 'rgba(108, 99, 255, 0.2)',
              padding: '0.2vw 0.3vw',
              fontSize: '12px',
              fontWeight: 500,
              color: '#6c63ff',
              opacity: 0.87,
            }} />
            <Typography sx={{
              fontSize: '14px',
              color: '#7b7b9d',
            }}>Projected Amt</Typography>
          </Box>
          <FormControl>
            <FormControlLabel value={checked} control={<Radio />} label="" />
          </FormControl>
        </Box>

      </Box>

      <Grid container sx={{
        display: 'flex',
        justifyContent: 'center',
        gap:{xs:"20px", sm:"0px"}
      }}>
        <Grid item xs={12} md={6} sx={{ 
          display: 'flex',
          justifyContent: 'space-around',
        }}>
          <Box>
            <Typography style={style.returns}>Top Performing Fund (10 Years)*</Typography>
            <Typography style={style.amount}>{props.topPerformingFundReturn}% Return</Typography>
          </Box>
          <Box>
            <Typography style={style.returns}>Life Cover</Typography>
            <Typography style={style.amount}>₹{props.lifeCoverAmount} Lac</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ 
          display: 'flex',
          justifyContent: 'space-around',
        }}>
          <Box>
            <Typography style={style.returns}>Invested Value</Typography>
            <Typography style={style.amount}>₹{props.investedValueAmount} Lac</Typography>
          </Box>
          <Box>
            <Typography style={style.returns}>Tax Saving on Investment</Typography>
            <Typography style={style.amount}>{formatter1.format(props.taxSavings)} Every Year</Typography>
          </Box>
        </Grid>
      </Grid>


      <Box sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '20px',
      }}>
        <Button variant='outlined' style={style.buttons} sx={{
          backgroundColor: '#f3fdf8',
          color: '#23db7b',
          gap: '5px',
        }}>
          <img src={questionMarkIcon} />
          <Typography style={ style.buttonText }>KNOW MORE</Typography>
        </Button>
        <Button variant="outlined" style={style.buttons} sx={{
          backgroundColor: 'rgba(123, 123, 157, 0.05)',
          color: '#7b7b9d',
          gap: '5px',
        }}>
          <img src={fileDownloadIcon} />
          <Typography style={ style.buttonText }>DOWNLOAD BROCHURE</Typography>
        </Button>
      </Box>


    </Box>
  )
};

export default ULIPCoFundCard;
