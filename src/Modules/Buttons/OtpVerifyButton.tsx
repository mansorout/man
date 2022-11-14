
import { Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";
import { verifycxotp } from "../../Store/Reducers/action";
import {store} from "../../Store/Store";



 export const OtpVerifyButton = ({otp, number} : {otp : string, number : string}) => {
    const [otpResponse,setOtpResponse]=useState<null | string>()

  
    const style = {
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

    const dispatch = useDispatch()
    const { addError, removeError } = bindActionCreators(ActionCreators, dispatch)
    const navigate = useNavigate()
    const response:any=useSelector((state)=>state)
    useEffect(()=>{
        setTimeout(()=>{
            store.dispatch(verifycxotp({'otp': otp,'number':number}))
        },0)
        setOtpResponse(response.otpResponse.error)

        
    },[otpResponse])
     
   
    console.log(response.otpResponse)
    console.log(otpResponse)
      
     
     
    const validateOTP = (otp : string) => {
        
        
        setOtpResponse(response.otpResponse.error)
        if(otp.length != 4){
            addError("Login_OTP")
        }else {
            removeError("Login_OTP")
            store.dispatch(verifycxotp({'otp': otp,'number':number})) 
            localStorage.setItem("loggedin","true")
            if( otpResponse !== "OTP has been Expired!" && otpResponse !== "Invalid OTP!" && otpResponse !== "Invalid Request Object!"){
                  navigate("/otpverified")
            }else{
                addError("Login_OTP")
                }
        }
        
    }
   

return (
        <Button onClick={()=>validateOTP(otp)} variant="contained" style={style.button} fullWidth>
            <Typography component="span" style={style.text} className="largeButtonText">Verify</Typography>
        </Button> 
    )
};

 


    
