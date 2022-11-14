
import { Divider } from "@mui/material";
import { Box, Typography } from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import OtpInput from "react-otp-input";
import React, { useState } from "react";
import { AMFI, IRDA, MonoLogosetpin, SBICON } from "../../Assets";
import SetNewButton from "../../Modules/Buttons/SetNewButton";
import "./SetNew.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export const Setpin = () => {

    const [OTP, setOTP] = useState<string>("")

    const handleOtpChange = (otp: any) => {
        setOTP(otp)
    }

    const error: string[] = useSelector((state: any) => state.error)

    const style = {
        background: {
            backgroundColor: '#f9f9f9',
            height: "100vh",
            width: "100vw"
        } as React.CSSProperties,

        container: {
            boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.2)',
            backgroundColor: "#fff",
            margin: "auto",
            width: "100%",
            maxWidth: "550px",
            padding: "30px 0px",
            transform: "translate(-50%, 0%)",
            left: "50%",
            bottom: "0px",
            borderRadius: "8px 8px 0px 0px",
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
        } as React.CSSProperties,

        logo: {
            width: "72px",
            margin: "30px 0px"
        } as React.CSSProperties,

        footer: {
            marginTop: "50px",
        },

        footerLogos: {
            display: "flex",
            gap: "15px"
        },

        IRDAnAMFI: {
            display: "flex",
            alignItem: "center"
        },

    }

    const navigate = useNavigate()
    return (
        <>
            <Box style={style.background}>
                <NavigationBar />
                <Box style={style.container}>
                    <img alt="Money Sprint" src={MonoLogosetpin} style={style.logo} />
                    <Typography variant="h1" align="center" sx={{fontSize:"22px"}}>
                        Set New PIN
                    </Typography>
                    <Typography className="VerificationOtp" align="center">
                        In case the biometric doesn’t work, you
                        can quickly access the app via PIN to unlock
                    </Typography>

                    <OtpInput
                        value={OTP}
                        onChange={handleOtpChange}
                        numInputs={4}
                        shouldAutoFocus={true}
                        hasErrored={error.includes("Login_OTP")}
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
                    <SetNewButton otp={OTP} />
                    <Box style={style.footer}>
                        <Box style={style.footerLogos}>
                            <Box style={style.IRDAnAMFI}>
                                <img src={IRDA} width="32px" alt="IRDA" />
                                <Box>
                                    <Typography className="caption">IRDA</Typography>
                                    <Typography style={{ fontWeight: 500 }} className="caption">0777</Typography>
                                </Box>
                                <Divider style={{ marginLeft: "15px" }} orientation="vertical" />
                            </Box>
                            <Box style={style.IRDAnAMFI}>
                                <img src={AMFI} width="32px" alt="IRDA" />
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
                        <Typography component="span" onClick={() => navigate("/TermsandCondition")} style={{ cursor: "pointer" }} className="textLink">Terms and conditions</Typography>
                        <Typography component="span" className="body1"> and </Typography>
                        <Typography component="span" style={{ cursor: "pointer" }} className="textLink">Privacy policy</Typography>
                    </Box>
                </Box>
            </Box>
            <img alt="logo" src={SBICON} width="275" height="275" style={{
                position: "absolute",
                right: "0px",
                top: "65px"
            }} />
        </>
    );
};
