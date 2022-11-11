import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";
import {login} from "../../Store/Reducers/action"
import {store} from "../../Store/Store"
const ContWithMobile = ({number} : {number : string}) => {

    const style = {
        button : {
            height: "48px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
            backgroundColor: "#23db7b",
            marginBottm: "10px",
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

    const validateNumber = (number : string) => {

        if(number.length != 10){
            addError("Login_Contact")
        }else{
            removeError("Login_Contact")
            navigate("/otpverify")
           store.dispatch(login({'number': number})) 
        }
       
    }

    return (
        <Button variant="contained" style={style.button} fullWidth onClick={() => validateNumber(number)}>
            <Typography style={style.text} className="largeButtonText">Continue with Mobile Number</Typography>
        </Button>            
    )
};

export default ContWithMobile;

