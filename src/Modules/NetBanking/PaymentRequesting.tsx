import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Link,
  makeStyles,
  Paper,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { blueCalender, SBICON, SuccessFullOtp } from "../../Assets";
import Navbar from "../../Components/CommonComponents/Navbar";
import Sidebar from "../../Components/CommonComponents/Sidebar";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import CircularProgress from "@mui/joy/CircularProgress";
import TimerLoader from "./TimerLoader";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import SipLastScreen from "../../Components/CommonComponents/sipLastscreen";
import { globalConstant } from "../../Utils/globalConstant";
import "./styles.css";


const style = {
  deducted: {
    width: "384px",
    height: "50px",
    margin: " 42px 4px 29px 0,",
    padding: " 13px 44px 13px 42px",
    opacity: " 0.3",
    bordeRadius: " 40px",
    backgroundColor: " #64dbff",
  } as React.CSSProperties,

  deductedtext: {
    fontFamily: " Roboto",
    fontSize: "11px",

    color: "#3c3e42",
  } as React.CSSProperties,

  buttons: {
    height: "48px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
    backgroundColor: "#626468",
    margin: "15px",
    width: "90%",
    maxWidth: "400px",
    transform: "translate(0px, -6px)",
  } as React.CSSProperties,
  main: {
    boxSizing: "border-box",
    backgroundColor: "#f9f9f9",
    height: "100vh",
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

  buttonfirst: {
    margin: "27px 4px 20px 0",
    padding: "15px",
    borderRadius: "40px",
    fontSize: "11px",
    boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
    backgroundColor: "#64dbff",

    maxWidth: "80%",
    transform: "translate(0px, -6px)",
  } as React.CSSProperties,

  text: {
    color: "white",
  } as React.CSSProperties,

  container: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: "500px",
    padding: "10px 0px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.2)",
    transform: "translate(-50%, 0%)",
    left: "57%",
    bottom: "8%",
    position: "absolute",
  } as React.CSSProperties,

  container2: {
    backgroundColor: "white",
    width: "26%",
    maxWidth: "500px",
    padding: "10px 0px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.2)",
    transform: "translate(-50%, 0%)",
    left: "57%",
    bottom: "31%",
    position: "absolute",
  } as React.CSSProperties,

  logo: {
    width: "72px",
  } as React.CSSProperties,
};

const timerProps = {
  isPlaying: true,
  size: 120,
  strokeWidth: 6,
};

const enumType = {
  ONE_TIME_LUMSOM: 1,
  MONTHLY_INCOME: 2,
  TRANSACTION_FLOW: 3,
};

function PaymentRequesting() {
  const navigate: any = useNavigate();
  const location: any = useLocation();
  const refContainer = useRef();
  const counterRef = useRef<any>(null);

  const [timer, setTimer] = useState<number>(9);
  const [activeScreen, setActiveScreen] = useState<number>(
    enumType.TRANSACTION_FLOW
  );
  const [processing, setProcessing] = useState<boolean>(false);
  const error: string[] = useSelector((state: any) => state.error);
  const number: string = useSelector((state: any) => state.contact);
  const [showSuccessScreen, setShowSuccessScreen] = useState<boolean>(true);

  const cardType = location?.state?.cardType;

  const memoizedFunc = useCallback(() => {
    startTimer();
  }, []);

  useEffect(() => {
    memoizedFunc();
    return () => {
      clearTimeout(counterRef.current);
    };
  }, []);

  const startTimer = () => {
    counterRef.current = setTimeout(() => {
      if (cardType === globalConstant.SIP_INVESTMENT) {
        navigate("/sipLastScreen");
        return;
      } else if (cardType === globalConstant.LUMPSUM_INVESTMENT) {
        navigate("/sipsuccessscreen");
        return;
      }
      setProcessing(true);
    }, timer * 1000);
  };

  return (
    <>
      <Box style={{ width: "100vw" }} ref={refContainer}>
        <Navbar />
        <Box sx={style.main}>
          <Grid container spacing={0} sx={{ height: "100vh" }}>
            <Grid item xs={0} sm={1} md={2}>
              <Toolbar />
              <Sidebar />
            </Grid>

            <Grid container xs={13} sm={11} md={10}>
              <Grid sx={{ padding: 2 }} item xs={12}>
                <Toolbar />

                <Grid
                  sx={{
                    padding: 0,
                    boxSizing: "border-box",
                    overflow: "scroll",
                  }}
                  item
                  xs={12}
                  sm={10}
                  md={10}
                >
                  <Toolbar />
                  <Grid container sx={{ display: "flex" }} wrap="nowrap">
                    {/* <Grid item xs={6} sx={{ padding: { xs: 0, sm: 3 } }} >

                <InvestNowScreenCard/>
              </Grid> */}
                  </Grid>

                  <Box
                    textAlign="center"
                    sx={{
                      margin: "auto",
                      width: "304px",
                    }}
                  ></Box>

                  {processing ? (
                    <Box className="requestpaymentbody" style={style.container}>
                      <img
                        alt="Money Sprint"
                        src={SuccessFullOtp}
                        style={style.logo}
                      />
                      <Typography
                        sx={{ width: "57% " }}
                        mb={1}
                        align="center"
                        className="redemptionDone"
                      >
                        Success! Your transaction request is submitted to RTA
                      </Typography>
                      <Typography
                        style={{
                          maxWidth: "80%",
                          paddingBottom: "10px",
                          color: " #7b7b9d",
                        }}
                        align="center"
                      >
                        We will notify you via email in 1 or 2 working days once
                        the units are allotted. You can track status under{" "}
                        <b style={{ color: "#6c63ff" }}>transactions </b>tab of
                        your portfolio.
                      </Typography>

                      <Button
                        onClick={() => navigate("/portfolio")}
                        variant="contained"
                        style={style.buttonfirst}
                        fullWidth
                      >
                        <Typography
                          component="span"
                          style={style.deductedtext}
                          className="mediumButtonTextlightblack"
                        >
                          <img
                            style={{
                              marginBottom: "-6px",
                              paddingRight: "10px",
                              width: " 20px",
                              height: "20px",
                            }}
                            src={blueCalender}
                            alt="calender"
                          />
                          Your SIP will be deducted on <b>8th</b> of every month
                        </Typography>
                      </Button>
                      <Button
                        onClick={() => navigate("/portfolio")}
                        variant="contained"
                        style={style.button}
                        fullWidth
                      >
                        <Typography
                          component="span"
                          style={style.text}
                          className="largeButtonText"
                        >
                          Back to Home
                        </Typography>
                      </Button>

                      <Button
                        onClick={() => navigate("/transactions")}
                        variant="contained"
                        style={style.buttons}
                        fullWidth
                      >
                        <Typography
                          component="span"
                          style={style.text}
                          className="largeButtonText"
                        >
                          Track Transactions
                        </Typography>
                      </Button>
                    </Box>
                  ) : (
                    <Box className="requestpaymentbody" style={style.container2}>
                      
                        <Grid item container sx={{paddingBottom: "20px"}}>
                          <Grid item xs={2} />
                          <Grid  

                            xs={8}
                            sx={{
                              paddingTop: "20px",
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Typography
                              sx={{
                                // margin: "0 59px 33px 108px",
                                display: "flex",
                                justifyContent: "center",
                                fontSize: "16px",
                                fontWeight: "500",
                                color: "#3c3e42",
                              }}
                            >
                              Request Sent for Payment
                            </Typography>
                          </Grid>
                          <Grid item xs={2} />
                        </Grid>
                        <Grid item container>
                          <Grid item xs={1} />
                          <Grid
                            xs={10}
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Typography
                              sx={{
                                // margin: "0 59px 33px 74px",
                                display: "flex",
                                justifyContent: "center",
                                fontSize: "14px",
                                fontWeight: " 500",
                                color: "#7b7b9d",
                                textAlign: "center",
                               
                              }}
                            >
                              Please accept the payment collect request from
                              SprintMoney in your UPI app.
                            </Typography>
                          </Grid>
                          <Grid item xs={1} />
                        </Grid>
                        <Grid
                          item
                          container
                          sx={{
                            marginTop: "5%",
                            marginBottom: "5%",
                          }}
                        >
                          <Grid item xs={3} />
                          <Grid
                            xs={6}
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <CountdownCircleTimer
                              {...timerProps}
                              rotation="counterclockwise"
                              colors="#23db7b"
                              duration={timer}
                            >
                              {({ remainingTime }) => remainingTime}
                            </CountdownCircleTimer>
                          </Grid>
                          <Grid item xs={3} />
                        </Grid>
                      
                    </Box>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default PaymentRequesting;
