import { Box, Button, Divider, Toolbar, Typography } from "@mui/material";

import { SBIcon } from "../../Assets"
import { FC } from 'react';

import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import { useNavigate } from "react-router-dom";




const TermsandCondition: FC<Props> = (props: Props) => {

    const navigate = useNavigate();

const style = {
        background : {
          height : "100vh",
          backgroundColor: '#f9f9f9',
          width : "100vw"
        } as React.CSSProperties,
        container : {
            width: "90%",
            maxWidth : "850px",
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "20px 30px",
            margin: " 20px auto"
        }as React.CSSProperties,

        lowerContainer:{
            gap: "20px",
            width: "90%",
            maxWidth : "850px",
            borderRadius: "8px",
            padding: "20px 30px",
            margin: " 20px auto",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "space-between"
        }as React.CSSProperties,
        button : {
            height: "48px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
            backgroundColor: "#23db7b",
            width:"90%",
            maxWidth:"300px",
        } as React.CSSProperties,
        text : {
            color: "white"
        },
        wrapper : {
        }
}

    return (
        <Box style={style.background}>
            <NavigationBar />
            <Toolbar/>
            <Box style={style.wrapper}>
                <Box style={style.container}>
                    <Typography component="h4" style={{margin:"10px 0px"}}>Terms and Conditions</Typography>
                    <Divider style={{margin:"10px 0px"}}/>
                    <Typography className="body1" style={{margin:"10px 0px"}}>
                        Wildflower Consulting and Business Solutions Private Limited is a company registered with the Securities and Exchange Board of India as an Investment Advisor under SEBI (Investment Advisers) Regulations, 2013 vide registration no. INAXXXXXXXXX dated December 17, 2018 having its registered office at B-1408, Flr-14, Aster Apts, Dosti Acres Shaikh Misree Road, New Uphill Link Antop Hill, Wadala,mumbai Mumbai City MH In 400037
                    </Typography>
                    <Typography className="body1" style={{margin:"10px 0px"}}>
                        Wildflower Consulting and Business Solutions Private Limited operate mobile application under brand names SprintMoney enables you to track, save and earn extra by automatically bringing your entire financial life across investments, loans, credit cards & taxes, all in one app. SprintMoney is committed to operating its mobile application with the highest ethical standards and appropriate internal controls.
                    </Typography>
                    <Typography className="body1" style={{margin:"10px 0px"}}>
                        Please note that your visit, use of or access to our mobile application (collectively referred to as “Services” or “Application”) are subject to the following terms; if you do not agree to all of the following, you may not use or access the Services in any manner.
                    </Typography>
                    <Typography component="h4" style={{margin:"30px 0px 10px 0px"}}>Terms of Use</Typography>
                    <Divider style={{margin:"10px 0px"}}/>
                    <Typography className="body1" style={{margin:"10px 0px"}}>
                        Please read on to learn the rules and restrictions that govern your use of our Services. These Terms and Conditions (the “Terms”) are a binding contract between you and SprintMoney. If you have any questions, comments, or concerns regarding these terms or the Services, please contact us at <Typography component="span" style={{cursor:"pointer",textDecoration:"underline"}} className="textLink">support@sprintmoney.in</Typography>, <Typography component="span" style={{cursor:"pointer",textDecoration:"underline"}} className="textLink">support@sprintmoney.com</Typography>
                    </Typography>
                    <Typography className="body1" style={{margin:"10px 0px"}}>
                        You must agree to and accept all of the Terms, or you don’t have the right to use the Services. Your using the Services in any way means that you agree to all of Terms, and these Terms will remain in effect while you use the Services.
                    </Typography>
                </Box>
                <Box style={style.lowerContainer}>
                    <Typography className="body1">
                        By continuing, I agreeing to SprintMoney<sup style={{fontSize: "6px", color:"#7b7b9d"}}>TM</sup>
                    </Typography>
                    <Button variant="contained" style={style.button} fullWidth onClick={() => navigate('/otpverify')}>
                        <Typography style={style.text} className="largeButtonText">Accept</Typography>
                    </Button>
                </Box>
            </Box>
            <img alt="logo" src={ SBIcon } width="275" height="275" style={{
            position: "absolute",
            right: "0px",
            top: "65px"
            }}/>
        </Box>
    )
};

export default TermsandCondition;
