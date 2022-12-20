
import {
  Button,
  Box,
  Typography,
} from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import "./OtpSuccess.css";
import React from "react";
import { SuccessFullOtp, SBICON } from "../../Assets";
import OtpSuccessButton from "../../Modules/Buttons/OtpSuccessButton";
import Footer from "../../Modules/Footer/Footer";
import { useNavigate } from "react-router-dom";

const style = {
  background: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    justifyContent: "flex-end",
    alignItems: "center",
  } as React.CSSProperties,

  container: {
    backgroundColor: "white",
    width: "96%",
    maxWidth: "500px",
    padding: "10px 0px",
    borderRadius: "20px 20px 0px 0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.2)',
    transform: "translate(-50%, 0%)",
    left: "50%",
    bottom: "0px",
    position: "absolute"
  } as React.CSSProperties,

  logo: {
    width: "90px",
    margin: '30px 0px',
  } as React.CSSProperties
}

export const OtpSuccess = () => {
  const navigate = useNavigate()

  return (
    <>
      <Box style={style.background}>
        <NavigationBar />
        <Box style={style.container}>
          <img alt="Money Sprint" src={SuccessFullOtp} style={style.logo} />
          <Typography mb={1} variant="h1" align="center" className="OtpSuccessfullTitle">
            Your Mobile Number Is Verified
          </Typography>
          <Typography mb={2} style={{ maxWidth: "90%" }} className="VerificationOtp" align="center">
            You are ready to setup quick access Set this up for faster access to your SprintMoney App
          </Typography>
          <OtpSuccessButton />
          <Button onClick={() => navigate("/home")}>
            <Typography style={{ textTransform: "none" }}> I'll do it later</Typography>
          </Button>
          <Footer />
        </Box>
      </Box>
      <img alt="logo" src={require("../../Assets/MainLogo.svg").default} width="275" height="275" style={{
        position: "absolute",
        right: "0px",
        top: "65px"
      }}
      />
    </>
  );
};

