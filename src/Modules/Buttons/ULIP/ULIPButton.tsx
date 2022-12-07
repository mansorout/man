import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface ULIPButtonProp {
    text: string;
    navigateTo: string;
}

  const ULIPButton = (props: ULIPButtonProp) => {

    const style = {
        button : {
            height: "48px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
            backgroundColor: "#23db7b",
            width:"90%",
            maxWidth:"400px"
        } as React.CSSProperties,
        text : {
            color: "white"
        }
    }

    const navigate = useNavigate();

    return (
        <Button variant="contained" style={style.button} fullWidth onClick={() => navigate(props.navigateTo)}>
            <Typography component="span" style={style.text} className="largeButtonText">{ props.text }</Typography>
        </Button> 
    )
};

export default ULIPButton;
