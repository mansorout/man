import { Box, Grid, Toolbar, Typography } from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import OtpInput from "react-otp-input";
import React, { useRef, useState } from "react";
import { VerifyOtpLogo, SBICON, SuccessFullOtp } from "../../Assets";
// import "..//VerifyOtpOnCheckout/VerifyonCheckout.css";
import "./RedemptionDone.css"
import { useSelector } from "react-redux";
import Footer from "../../Modules/Footer/Footer";
import Navbar from "../../Components/CommonComponents/Navbar";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";
import Sidebar from "../../Components/CommonComponents/Sidebar";
import IInvestNowScreenCard from "../../Modules/Cards/IIvestNowScreenCard";





export const RedemptionDone = () => {


  const number: string = useSelector((state: any) => state.contact)
  const dispatch = useDispatch()
  const { addError, removeError } = bindActionCreators(ActionCreators, dispatch)
  const navigate = useNavigate()

  const refContainer = useRef();
const error: string[] = useSelector((state: any) => state.error)
const style = {
    buttons: {
      height: "48px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
      backgroundColor: "#626468",
      margin: "15px",
      width: "90%",
      maxWidth: "400px",
      transform: "translate(0px, -6px)"
    } as React.CSSProperties,
    main: {
      boxSizing: "border-box",
      backgroundColor: "#f9f9f9",
      height: "100vh"
    } as React.CSSProperties,
    background: {
      backgroundColor: "#f9f9f9",
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      justifyContent: "flex-end",
      alignItems: "center",
    } as React.CSSProperties,
    button: {
      height: "48px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
      backgroundColor: "#23db7b",
      width: "90%",
      maxWidth: "400px",
    } as React.CSSProperties,




    text: {
      color: "white"
    } as React.CSSProperties,


    container: {
      backgroundColor: "white",
      width: "100%",
      maxWidth: "500px",
      padding: "10px 0px",
      borderRadius: "20px 20px 0px 0px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.2)',
      transform: "translate(-50%, 0%)",
      left: "57%",
      bottom: "8%",
      position: "absolute"
    } as React.CSSProperties,

    logo: {
      width: "72px",
      margin: "20px 0px"
    } as React.CSSProperties,
  }





  return (


    <>

      <Box style={{ width: "100vw" }} ref={refContainer}>
        <Navbar />
        <Box sx={style.main}>
          <Grid
            container
            spacing={0}
            sx={{ height: "100vh" }}
          >

            <Grid
              item
              xs={0}
              sm={1}
              md={2}
            >
              <Toolbar />
              <Sidebar />
            </Grid>
            <Grid
              container
              xs={13}
              sm={11}
              md={10}
            >
              <Grid sx={{ padding: 2 }} item xs={12}>
                <Toolbar />

                <Grid sx={{ height: "100vh", padding: 0, boxSizing: "border-box", overflow: "scroll" }} item xs={12} sm={10} md={10}>
                  <Toolbar />
                  <Grid container sx={{ display: "flex" }} wrap='nowrap'>
                    {/* <Grid item xs={6} sx={{ padding: { xs: 0, sm: 3 } }} >

                <InvestNowScreenCard/>
              </Grid> */}
                    <Grid item xs={6} sx={{ padding: { xs: 0, sm: 3 } }} >
                      <IInvestNowScreenCard />
                    </Grid>


                  </Grid>

                  <Box
                    textAlign="center"
                    sx={{
                      margin: "auto",
                      width: "304px",
                    }}
                  >


                  </Box>
                  <Box  style={style.container} className="redemptiondonecard">
                    <img alt="Money Sprint" src={SuccessFullOtp} style={style.logo} />
                    <Typography mb={1}  align="center" className="redemptionDone">
                      Success! Your account is verified & redemption has been submitted
                    </Typography>
                    <Typography mb={2} style={{ maxWidth: "90%" ,marginBottom:"40px" }} className="redemptionmsg" align="center">
                      The redemption amount will be credited to your registered bank account within 4 to 5 working days.  You can track status under transactions tab of your portfolio.
                    </Typography>



                    <Button onClick={() => navigate("/portfolio")} variant="contained" style={style.button} fullWidth>
                      <Typography component="span" style={style.text} className="largeButtonText">Back to Home</Typography>
                    </Button>

                    <Button onClick={() => navigate("/transactions")} variant="contained" style={style.buttons} fullWidth>
                      <Typography component="span" style={style.text} className="largeButtonText">Track Transactions</Typography>
                    </Button>
                  </Box>

                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </Box>
        <img alt="logo" src={ SBICON } width="275" height="275" style={{
            position: "absolute",
            right: "0px",
            top: "65px" }}
      />
      </Box>

    </>
  )


}