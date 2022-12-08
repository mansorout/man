
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";



  const SaveSipDetailsButton = ({otp} : {otp : string}) => {

    const style = {
        button : {
            height: "48px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
            backgroundColor: "#23db7b",
            margin: "20px",
            width:"90%",
            maxWidth:"400px",
        } as React.CSSProperties,
        text : {
            color: "white"
        }
    }

    const dispatch = useDispatch()
    const { addError, removeError } = bindActionCreators(ActionCreators, dispatch)
    const navigate = useNavigate()

    const validateOTP = (otp : string) => {

        if(otp.length != 4){
            addError("Log_PIN")
        }else if(otp != localStorage.getItem("mpin")){
            addError("Log_PIN")
        }else {
            removeError("Login_OTP")
            localStorage.setItem("loggedin","true")
            localStorage.removeItem("mpin")
            navigate("/home")
        }
        
    }



    return (
        <Button variant="contained" style={style.button} fullWidth>
            <Typography component="span" style={style.text} className="largeButtonText">Save Details</Typography>
        </Button> 
    )
};

export default SaveSipDetailsButton;
