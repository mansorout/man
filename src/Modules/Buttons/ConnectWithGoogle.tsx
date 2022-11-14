
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GoogleLogo } from "../../Assets";


  const ConnectWithGoogle = () => {

    const style = {
        button : {
            height: "48px",
            borderRadius: "8px",
            backgroundColor: "white",
            border: "1px solid #23db7b",
            boxShadow: "0 4px 8px 0 white",
            width:"90%",
            maxWidth:"400px",
        } as React.CSSProperties,
        text : {
            marginLeft: "10px",
            color : "#23db7b"
        }
    }

    const navigate = useNavigate()

    return (
        <Button onClick={()=>navigate("/account_created_with_google")} variant="contained" style={style.button} fullWidth>
            <img src={GoogleLogo} width="16px" alt="Google Logo" />
            <Typography component="span" style={style.text} className="largeButtonText">Continue with Google</Typography>
        </Button>           
    )
};

export default ConnectWithGoogle;
