
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import './stylesss.css'


const SelectUlipDateButton = (props: any) => {

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

    const navigate = useNavigate();

    const handleClick = () => {
        if (props?.openModal) {
            props?.openModal();
        }
    }

    return (
       
           <Button
    
        variant="contained" style={style.button} fullWidth onClick={() => handleClick()} sx={{ marginLeft: { xs: '17%', sm: "0%",} }}>
            <Typography component="span" style={style.text} className="largeButtonText"  >Select ULIP Date</Typography>
        </Button>
     
     
    )
};

export default SelectUlipDateButton;
