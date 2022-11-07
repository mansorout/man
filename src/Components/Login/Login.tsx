
import { Divider, InputAdornment } from "@mui/material";
import {
  Box,
  TextField,
  Typography,
} from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import "./Login.css";
import ContinueWithMobile from "../../Modules/Buttons/ContinueWithMobile";
import ConnectWithGoogle from "../../Modules/Buttons/ConnectWithGoogle";
import React, { useState } from "react";
import { AMFI, ContactError, IRDA, MonoLogo } from "../../Assets";
import { useSelector } from "react-redux";


export const Login = () => {

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
      width: "120px",
      margin: "30px 0px"
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
    } as React.CSSProperties
  }

  const error : string[] = useSelector((state : any) => state.error)

  const [focus, setFocus] = useState<boolean>(false);
  const [number, setNumber] = useState<string>("")

  const handleMobile = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setNumber(e.target.value)
  }

  return (
    <>
      <Box className="background" style={style.background}>
        <NavigationBar />
        <Box style={style.container}>
          <img alt="Success Logo" src="../../Assets/success.png" style={style.logo} />
          <Typography variant="h5" align="center">
            You've now connected SprintMoney with your Google Account
          </Typography>
          
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

