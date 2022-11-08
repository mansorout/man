
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


  const OtpSuccessButton = () => {

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

    const navigate = useNavigate()

    return (
        <Button onClick={()=>navigate("/choosepin")} variant="contained" style={style.button} fullWidth>
            <Typography component="span" style={style.text} className="largeButtonText">Do it now</Typography>
        </Button> 
    )
};

export default OtpSuccessButton;
