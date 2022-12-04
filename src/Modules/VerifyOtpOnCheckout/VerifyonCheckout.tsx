import { Box, Breadcrumbs, Grid, Toolbar, Typography } from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import OtpInput from "react-otp-input";
import React, { useRef, useState } from "react";
import { VerifyOtpLogo, SBICON } from "../../Assets";
import "..//VerifyOtpOnCheckout/VerifyonCheckout.css";
import { useSelector } from "react-redux";
import Footer from "../../Modules/Footer/Footer";
import VerifySecButton from "../../Modules/Buttons/VerifySecButton";
import Navbar from "../../Components/CommonComponents/Navbar";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";
import Sidebar from "../../Components/CommonComponents/Sidebar";
import { VerifySec } from "../../Components/VerifySecOTP/VerifySec";




export const VerifyonCheckout = () => {
    const refContainer = useRef();

    const [OTP, setOTP] = useState<string>("")

    const handleOtpChange = (otp: any) => {
        setOTP(otp)
    }

    const error: string[] = useSelector((state: any) => state.error)

    const style = {
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
            borderRadius: "8px",
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


    const number: string = useSelector((state: any) => state.contact)
    const dispatch = useDispatch()
    const { addError, removeError } = bindActionCreators(ActionCreators, dispatch)
    const navigate = useNavigate()

    const validateOTP = () => {

        if (OTP.length != 4) {
            addError("Login_OTP")
        } else if (OTP != "1234") {
            addError("Login_OTP")
        } else {
            removeError("Login_OTP")
            navigate('/redemptiondone')

        }

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

                        <Grid sx={{ padding: 2 }} item xs={12}>
                            <Toolbar />
                            {/* <Box role="presentation" sx={{ margin: "27px 0px 21px 25px" }} >
                                <Breadcrumbs aria-label="breadcrumb">
                                    <Link color="#6495ED" underline="always" href="/home">
                                        <Typography className='burgerText'> Home</Typography>
                                    </Link>
                                    <Link
                                        underline="always"
                                        color="#6495ED"
                                    // href="/home"
                                    >
                                        <Typography className='burgerText'> Investment</Typography>

                                    </Link>
                                    <Link
                                        underline="always"
                                        color="#6495ED"
                                        // href="/"
                                        href="/investnow"

                                    >
                                        <Typography className='burgerText'> Monthly Investment</Typography>

                                    </Link>
                                    <Link
                                        underline="always"
                                        color="#6495ED"

                                        aria-current="page"
                                    >
                                        <Typography className='burgerText'> Mutual Fund Recommendation</Typography>

                                    </Link>
                                    <Link
                                        underline="always"
                                        color="#6495ED"
                                        // href="/material-ui/react-breadcrumbs/"
                                        aria-current="page"
                                    >
                                        <Typography className='burgerText'>  Customize Plan</Typography>

                                    </Link>
                                    <Link
                                        underline="always"
                                        color="#6495ED"
                                        // href="/"
                                        aria-current="page"
                                    >
                                        <Typography className='burgerText'>   Choose Fund to Replace</Typography>

                                    </Link>
                                    <Link
                                        underline='none'
                                        color="#8787a2"
                                        // href="/"
                                        aria-current="page"

                                    >
                                        <Typography className='burgerText'>   Axis Small Cap Fund Regular Growth</Typography>

                                    </Link>
                                </Breadcrumbs>
                            </Box> */}

                            <Box style={style.background}>
                                <NavigationBar />
                                <Box style={style.container}>
                                    <img alt="Money Sprint" src={VerifyOtpLogo} style={style.logo} />
                                    <Typography mb={1} variant="h1" align="center">
                                        Verify OTP
                                    </Typography>
                                    <Typography mb={2} style={{ maxWidth: "70%" }} className="VerificationOtp" align="center">
                                        Enter the 4 digit verification code we sent you on your mobile number (xxxxxx9087) and email address (xxxxxxtra@gmail.com)
                                    </Typography>
                                    <OtpInput
                                        value={OTP}
                                        onChange={handleOtpChange}
                                        numInputs={4}
                                        shouldAutoFocus={true}
                                        hasErrored={error?.includes("Login_OTP")}
                                        containerStyle={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            margin: "10px",
                                            color: "black"
                                        }}
                                        inputStyle={{
                                            border: "1px solid #dddfe2",
                                            borderRadius: "4px",
                                            padding: "10px",
                                            margin: "10px",
                                            width: "30px",
                                            height: "30px",
                                            color: "black",
                                            boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)"
                                        }}
                                        errorStyle={{
                                            border: "1px solid red",
                                        }}
                                    />
                                    <Button onClick={validateOTP} variant="contained" style={style.button} fullWidth>
                                        <Typography component="span" style={style.text} className="largeButtonText">Verify</Typography>
                                    </Button>
                                    <Typography mt={2} sx={{ fontSize: "14px", color: " #7b7b9d" }}>Not received the code yet?
                                        <span className="textLink" style={{ cursor: "pointer" }} > Resend</span></Typography>

                                </Box>
                            </Box>

                        </Grid>

                    </Grid>
                </Box>
                <img alt="logo" src={SBICON} width="275" height="275" style={{
                    position: "absolute",
                    right: "0px",
                    top: "65px"
                }}
                />
            </Box>

        </>
    );
};


