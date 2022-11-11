
import { Box, Button, Typography } from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import React from "react";
import { SuccessLogo, SBIcon, Profile } from "../../Assets"
import { useNavigate } from "react-router-dom";
import Footer from "../../Modules/Footer/Footer";


export const AccountCreatedWithGoogle = () => {

  const style = {
    background : {
      height : "100vh",
      width: "100vw",
      display:"flex",
      flexDirection:"column",
      boxSizing:"border-box",
      justifyContent:"flex-end",
      alignItems:"center",
    } as React.CSSProperties,

    container : {
      backgroundColor: "white",
      width: "100%",
      maxWidth: "500px",
      padding: "10px 0px",
      borderRadius: "20px 20px 0px 0px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow:'0 1px 5px 0 rgba(0, 0, 0, 0.2)',
      transform: "translate(-50%, 0%)",
      left: "50%",
      bottom: "0px",
      position: "absolute"
    } as React.CSSProperties,

    logo : {
      width: "90px",
      margin: "20px 0px",
    } as React.CSSProperties,

    profile : {
      width: "30px",
      height: "30px",
      borderRadius: "50%"
    },

    button : {
        height: "48px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
        backgroundColor: "#23db7b",
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
          <Typography style={{maxWidth:"90%"}} align="center" component="h4">
            You've now connected SprintMoney with your Google Account
          </Typography>
          <Box sx={{
                display: 'flex',
                alignItems: 'center',
                padding: '10px 20px',
                borderRadius: '40px',
                margin: "10px 0px 40px 0px",
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
          <Footer/>
        </Box>
      </Box>
      <img alt="logo" src={ SBIcon } width="275" height="275" style={{
            position: "absolute",
            right: "0px",
            top: "65px" }}
      />
    </>
  );
};

