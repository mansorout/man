import { Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";

const LoginButtonContinuue = ({number} : {number : string}) => {

    const style = {
        button : {
            height: "48px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
            backgroundColor: "#23db7b",
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
            navigate("/home")
        }
        
    }

    return (
        <Button variant="contained" style={style.button} fullWidth onClick={() => validateNumber(number)}>
            <Typography style={style.text} className="largeButtonText">Continue</Typography>
        </Button>            
    )
};

export default LoginButtonContinuue;

