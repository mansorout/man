
import { Box, Button, Divider, Typography } from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import React from "react";
import { AMFI, IRDA, SuccessLogo, SBIcon, Profile } from "../../Assets"
import { useNavigate } from "react-router-dom";


export const AccountCreatedWithGoogle = () => {

  const style = {
    background : {
      height : "100vh",
      backgroundColor: '#f9f9f9',
      width :"100vw"
    } as React.CSSProperties,

    container : {
      backgroundColor: "white",
      boxSizing: "border-box",
      margin: "auto",
      width: "100%",
      maxWidth: "550px",
      padding: "30px 20px",
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
      margin: "10px 0px",
    } as React.CSSProperties,

    contactInput : {
      width:"100%",
      maxWidth:"400px",
      marginTop: "30px"
    } as React.CSSProperties,

    profile : {
      width: "30px",
      height: "30px",
      borderRadius: "50%"
    },

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

  const navigate = useNavigate();

  return (
    <>
      <Box style={style.background}>
        <NavigationBar />
        
        <Box style={style.container}>
          <img alt="Success Logo" src={ SuccessLogo } style={style.logo} />
          <Typography style={{margin: "10px 0px",}} align="center" component="h4">
            You've now connected SprintMoney with your Google Account
          </Typography>
          <Box sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 15px',
                borderRadius: '40px',
                margin: "10px 0px 50px 0px",
                backgroundColor: '#99e7ff',
          }}>
            <img src={Profile} alt="image" style={style.profile} />
            <Box sx={{ marginLeft: '5px' }}>
                <Typography className="mediumButtonText" >Puneet Malhotra</Typography>
                <Typography className="body2" >puneet.malhotra@gmail.com</Typography>
            </Box>
            
            
          </Box>
          <Button onClick={()=>navigate("/login")} variant="contained" style={style.button} fullWidth>
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
              <Typography onClick={()=>navigate("/TermsandCondition")} component="span" style={{cursor:"pointer"}} className="textLink">Terms and conditions</Typography>
              <Typography component="span" className="body1"> and </Typography>
              <Typography component="span" style={{cursor:"pointer"}} className="textLink">Privacy policy</Typography>
            </Box>
        </Box>
      </Box>
      <img alt="logo" src={ SBIcon } width="275" height="275" style={{
            position: "absolute",
            right: "0px",
            top: "65px"
            }}/>
    </>
  );
};

