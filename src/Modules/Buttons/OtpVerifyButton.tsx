
import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";



  const OtpVerifyButton = ({otp} : {otp : string}) => {

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

    const validateOTP = (otp : string) => {

        console.log(otp)

        if(otp.length != 4){
            addError("Login_OTP")
        }else if(otp != "1234"){
            addError("Login_OTP")
        }else {
            removeError("Login_OTP")
            navigate("/otpverified")
        }
        
    }

    console.log("Loaded")


    return (
        <Button onClick={()=>validateOTP(otp)} variant="contained" style={style.button} fullWidth>
            <Typography component="span" style={style.text} className="largeButtonText">Verify</Typography>
        </Button> 
    )
};

export default OtpVerifyButton;
