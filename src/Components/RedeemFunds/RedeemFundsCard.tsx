import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
import { axislogoredeem, morningsteologo, starratelogo } from '../../Assets'
import RedeemFunds from './RedeemFunds'
import { Button } from '@mui/material';
import Stack from '@mui/material/Stack';
function RedeemFundsCard() {

    const style = {
        containerfundcard: {
            backgroundColor: "#6c63ff",
            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
            borderRadius: { xs: "0px", sm: "16px" },
            padding: "60px 30px",
        },
        Axislogo: {
            width: "76.5px",
            height: "76.5px",
            border: " solid 1px #d1d6dd",
            backgroundColor: "#fff",
            borderRadius: '37px',


        },
        RedeemTextStyle: {
            width: "91px",
            opacity: " 0.74",
            fontSize: "14px",
            fontWeight: "normal",
            textAlign: "center",
            color: "#fff",
            marginTop: "15%",
            marginLeft: "25%"

        },
        RedeemAmount: {
            width: " 88px",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: " normal",
            letterSpacing: "normal",
            textAlign: "center",
            color: " #fff",
            marginTop: "3%",
            marginLeft: "25%",
           
        },
        moninglogo: {
            width: "76px",
            height: "22px",
            margin: "10px 0 60px 8px",
            objectFit: " contain",
            opacity: "0.7",
            // mixBlendMode: "luminosity"
        }
    }
    return (
        <Box sx={style.containerfundcard}>
            <Box>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Typography>
                            <img src={axislogoredeem} alt="Sprint__Money" style={style.Axislogo} />
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: "right" }}>
                        <Typography>
                            <Typography sx={{
                                width: " 47px",
                                height: "21px",
                                margin: "0.8% 8px 61px 70%",
                                padding: "1px 4px 1px 2px",
                                borderRadius: "2px",
                                backgroundColor: "#ffc300"
                            }}>
                                <img src={starratelogo} alt="Sprint__Money" style={{
                                    width: "16px",
                                    height: "16px",
                                    margin: " 2px 59% 1px 5%",

                               }} />
                               <Typography sx={{
                                  width:" 23px",
                                  height: "19px",
                                  margin: " -56% -6% 1px 42%",
                              
                                  fontSize:" 16px",
                                  fontWeight:" 500",
                             
                                  textAlign: "right",
                                  color: "#fff"
                                
                               }}>3.8</Typography>
                                   <img src={morningsteologo} alt="Sprint__Money" style={{
                                width: "76px",
                                height: "22px",
                                margin: "-15% 0 60px 120%",
                                alignItems: "right",
                                opacity: "0.7",
                             

                            }} />
                            </Typography>

                        

                        </Typography>

                    </Grid>
                </Grid>

                <Typography sx={{ color: "#fff", fontSize: "24px", fontWeight: "500" }}>Axis Small Cap Fund Regular Growth</Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={6} >
                    <Stack direction="row" spacing={3} sx={{ marginTop: "4%" }}>

                        <Button variant="outlined" sx={{ backgroundColor: " rgba(255, 255, 255, 0.54)", color: "#544ec8", fontSize: "16px", fontWeight: "500" }}>
                            Large Cap
                        </Button>
                        <Button variant="outlined" sx={{ backgroundColor: " rgba(255, 255, 255, 0.54)", color: "#544ec8", fontSize: "16px", fontWeight: "500" }} href="#outlined-buttons">
                            Equity
                        </Button>
                    </Stack>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Typography sx={style.RedeemTextStyle}>Invested Value</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={style.RedeemTextStyle}>Current Value</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={style.RedeemTextStyle}>Total Units</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={style.RedeemTextStyle}> Absolute Return</Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={3} sx={{
                    color: "#ffffff"
                }}>
                    <Typography sx={style.RedeemAmount}>  ₹1,25,000</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={style.RedeemAmount}>   ₹1,46,625</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={style.RedeemAmount}>    272750</Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography sx={style.RedeemAmount}>   ₹21,625 (18.75%)</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default RedeemFundsCard
// width: "30px",
// height:" 19px",
// opacity: "0.87",

// fonSize: "16px",
// fontWeight:" 500",

// letterSpacing: "0.48px",
// textAlign: "left",
// color: "#544ec8"

// -Redeem Funds-partial Amount
// Invest Now for Monthly Investment
// 06-Redemptoion 