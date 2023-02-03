
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const TrackTransButton = () => {

    const style = {
        buttons: {
            height: "48px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
            backgroundColor: "#626468",
            margin: "15px",
            width: "90%",
            maxWidth: "400px",
            transform: "translate(0px, -6px)"
        } as React.CSSProperties,
        text: {
            color: "white"
        }
    }

    const navigate = useNavigate()

    return (
        <Button onClick={() => navigate("/transactions")} variant="contained" style={style.buttons} fullWidth>
            <Typography component="span" style={style.text} className="largeButtonText">Track Transactions</Typography>
        </Button>

    )
};

export default TrackTransButton;
