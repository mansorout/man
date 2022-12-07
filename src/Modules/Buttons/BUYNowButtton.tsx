
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const BUYNowButton = () => {

    const style = {
        button: {
            height: "48px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
            backgroundColor: "#23db7b",
            width: "90%",
            maxWidth: "400px"
        } as React.CSSProperties,
        text: {
            color: "white"
        }
    }

    const navigate = useNavigate()

    return (
        <Button variant="contained" style={style.button} fullWidth sx={{ marginLeft: { xs: '17%', sm: "0%" } }}>
            {/* <Typography component="span" style={style.text} className="largeButtonText"     onClick={()=>navigate('/under')} >BUY NOW</Typography> */}
            < Typography component="span" style={style.text} className="largeButtonText">BUY NOW</Typography>
        </Button >
    )
};

export default BUYNowButton;
