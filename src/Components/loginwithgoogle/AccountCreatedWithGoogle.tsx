
import { Box, Button, Divider, Typography } from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import React from "react";
import { AMFI, IRDA, SuccessLogo, SBIcon } from "../../Assets";


export const AccountCreatedWithGoogle = () => {

  const style = {
    background : {
      height : "100vh"
    } as React.CSSProperties,

    container : {
      backgroundColor: "white",
      margin: "auto",
      width: "100%",
      maxWidth: "550px",
      padding: "30px 0px",
      transform: "translate(-50%, 0%)",
      left: "50%",
      bottom: "0px",
      borderRadius: "20px 20px 0px 0px",
      position: "absolute",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    } as React.CSSProperties,

    logo : {
      width: "60px",
      margin: 0,
    } as React.CSSProperties,

    contactInput : {
      width:"100%",
      maxWidth:"400px",
      marginTop: "30px"
    } as React.CSSProperties,

    divider : {
      width : "90%",
      maxWidth : "400px",
      margin : "auto",
      color : "#7b7b9d",
    },

    footer : {
      marginTop : "50px",
    },

    footerLogos : {
      display : "flex",
      gap : "15px"
    },

    IRDAnAMFI : {
      display: "flex",
      alignItem : "center"
    },

    errorText : {
      width:"100%",
      maxWidth:"400px",
      height: "15px",
    } as React.CSSProperties,

    button : {
        height: "48px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
        backgroundColor: "#23db7b",
        margin: "15px",
        width:"90%",
        maxWidth:"400px",
    } as React.CSSProperties,

    text : {
        color: "white"
    }
  }

  return (
    <>
      <Box style={style.background} sx={{ 
        backgroundColor: '#f9f9f9'
      }}>
        <NavigationBar />
        <img alt="sb icon logo" src={ SBIcon } width="275" height="275" style={{
          float: 'right'
        }}/>
        <Box style={style.container}>
          <img alt="Success Logo" src={ SuccessLogo } style={style.logo} />
          <Typography align="center" sx={{
            width: '360px',
            height: '55px',
            padding: 0,
            margin: '10px 14px 24px',
            fontSize: '22px',
            fontWeight: 500,
            color: '#3c3e42'
          }}>
            You've now connected SprintMoney with your Google Account
          </Typography>
          <Box sx={{ 
                width: '215px', 
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                margin: '12px 0 50px',
                padding: '5px 24px 5px 6px',
                
                borderRadius: '40px',
                backgroundColor: '#99e7ff',
          }}>
            <img src="" alt="" width="30" height="30" style={{ margin: '0 5px' }} />
            <Box sx={{ marginLeft: '5px' }}>
                <Typography sx={{
                    width: '139px',
                    height: '16px',
                    margin: '5px 40px 3px 6px',
                    fontFamily: 'Roboto',
                    fontSize: '14px',
                    fontWeight: 500,
                    lineHeight: 1.5,
                    letterSpacing: '0.34px',
                    textAlign: 'left',
                    color: '#3c3e42'
                }}>Puneet Malhotra</Typography>
                <Typography sx={{
                    width: '139px',
                    height: '13px',
                    margin: '3px 0 3px 6px',
                    fontFamily: 'Roboto',
                    fontSize: '11px',
                    lineHeight: 1.91,
                    letterSpacing: '0.26px',
                    textAlign: 'left',
                    color: '#7b7b9d'
                }}>puneet.malhotra@gmail.com</Typography>
            </Box>
            
            
          </Box>
          <Button variant="contained" style={style.button} fullWidth>
            <Typography style={style.text} className="largeButtonText">Continue</Typography>
          </Button> 


          <Box style={style.footer}>
            <Box style={style.footerLogos}>
                <Box style={style.IRDAnAMFI}>
                  <img src={IRDA} width="32px" alt="IRDA" />
                  <Box>
                    <Typography className="caption">IRDA</Typography>
                    <Typography style={{fontWeight:500}} className="caption">0777</Typography>
                  </Box>
                  <Divider style={{marginLeft:"15px"}} orientation="vertical"/>
                </Box>
                <Box style={style.IRDAnAMFI}>
                  <img src={AMFI} width="32px" alt="IRDA" />
                  <Box>
                    <Typography className="caption">AMFI</Typography>
                    <Typography style={{fontWeight:500}} className="caption">150601</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Divider style={{margin:"5px 0px"}}/>
              <Typography component="span" className="body1">By continuing, you're agreeing to SprintMoney</Typography>
              <sup style={{fontSize: "6px", color:"#7b7b9d"}}>TM</sup>
              <br/>
              <Typography component="span" style={{cursor:"pointer"}} className="textLink">Terms and conditions</Typography>
              <Typography component="span" className="body1"> and </Typography>
              <Typography component="span" style={{cursor:"pointer"}} className="textLink">Privacy policy</Typography>
            </Box>
        </Box>
      </Box>
    </>
  );
};

