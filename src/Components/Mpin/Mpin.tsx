import React from "react";
import "./Mpin.css"
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import { Box, Stack, Typography, Divider, TextField } from '@mui/material'
import Grid from '@mui/material/Grid';
import { SBICONIMAGE } from '../../Assets/index';
import { IRDAIMAGE, AMFIIMAGE, Group6803 } from '../../Assets/index';
import Mobile from '../ClickButton/Mobile';
import { margin } from '@mui/system';
export const Mpin = () => {
    const style = {
        background: {
            height: "100%",
            backgroundColor: "#f9f9f9",
        } as React.CSSProperties,

        container: {
            backgroundColor: "#fff",
            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.2)",   // margin: "auto",
            marginTop: '-158px',
            width: "100%",
            maxWidth: "550px",
            padding: "30px 0px",
            transform: "translate(-50%, 0%)",
            left: "52%",
            bottom: "0px",
            borderRadius: "4px 4px 0px 2px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        } as React.CSSProperties,

        logo: {
            width: "60px",
            margin: "30px 0px"
        } as React.CSSProperties,

        contactInput: {
            width: "100%",
            maxWidth: "400px",
            marginTop: "30px"
        } as React.CSSProperties,

        divider: {
            width: "90%",
            maxWidth: "400px",
            margin: "auto",
            color: "#7b7b9d",

        },

        footer: {
            marginTop: "50px",
        },

        footerLogos: {
            display: "flex",
            gap: "15px",
            margin: "20px",
            marginLeft: "51px"
        },

         IRDAnAMFI: {
            display: "flex",
            alignItem: "center"
        },
           errorText: {
            width: "100%",
            maxWidth: "400px",
            height: "15px",
        } as React.CSSProperties
    }

    return (
        <>
            <Box className=".Main_Box_style" style={style.background}>
                <NavigationBar />
                   <img className="SB_icon" src={SBICONIMAGE} />
                   <Box style={style.container} className="Wholecontent">
                    <img src={Group6803} />
                    <Typography variant="h3" align="center" color="#7b7b9" marginTop="24px">Verify OTP</Typography>
                    <p className='p' >Enter the 4 digit verification code we sent you on your mobile number (xxxxxx9087) and email address (xxxxxxtra@gmail.com)</p>
                    <Box>
                        <TextField className='inputBox' sx={{ margin: "9px" }}></TextField>
                        <TextField className='inputBox' sx={{ margin: "9px" }}></TextField>
                        <TextField className='inputBox' sx={{ margin: "9px" }}></TextField>
                        <TextField className='inputBox' sx={{ margin: "9px" }}></TextField>
                    </Box>
                    <Stack sx={{ marginTop: "1px" }}><Mobile /></Stack>
                    <Typography className='Resend'>
                        <Typography sx={{ fontSize: "14px", color: " #7b7b9d" }}>Not received the code yet?
                            <Box sx={{ color: "#6c63ff", fontWeight: "500", marginLeft: "168px", marginTop: "-21px" }}>Resend</Box>
                        </Typography>
                    </Typography>
                    <Typography className='stylefooter'>
                        <Box style={style.footer} sx={{ marginTop: "58%" }}>
                            <Box style={style.footerLogos}>
                                <Box style={style.IRDAnAMFI}>
                                    <img src={IRDAIMAGE} width="32px" alt="IRDA" />
                                    <Box>
                                        <Typography className="caption">IRDA</Typography>
                                        <Typography style={{ fontWeight: 500 }} className="caption">0777</Typography>
                                    </Box>
                                    <Divider style={{ marginLeft: "15px" }} orientation="vertical" />
                                </Box>
                                <Box style={style.IRDAnAMFI}>
                                    <img src={AMFIIMAGE} width="32px" alt="IRDA" />
                                    <Box>
                                        <Typography className="caption">AMFI</Typography>
                                        <Typography style={{ fontWeight: 500 }} className="caption">150601</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box>
                            <Divider style={{ margin: "5px 0px" }} />
                            <Typography component="span" className="body1">By continuing, you're agreeing to SprintMoney</Typography>
                            <sup style={{ fontSize: "6px", color: "#7b7b9d" }}>TM</sup>
                            <br />
                            <Typography component="span" style={{ cursor: "pointer" }} className="textLink">Terms and conditions</Typography>
                            <Typography component="span" className="body1"> and </Typography>
                            <Typography component="span" style={{ cursor: "pointer" }} className="textLink">Privacy policy</Typography>
                        </Box>
                    </Typography>
                 </Box>
           </Box>
        </>
    )
}

{/* <Stack sx={{alignItems:'center'}}> </Stack> */ }
