
import { Button, Typography } from "@mui/material";



const ChooseButton = () => {

  const style = {
    button_b : {
          height: "48px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
          backgroundColor: "#23db7b",
          margin: "15px",
          width:"90%",
          maxWidth:"400px",
      } as React.CSSProperties,
      text_t : {
          color: "white",
          fontSize:"16px",
          fontWeight: "500",
          width: "34px",
          height: "19px"
          
          
      }
  }

  return (
      <Button variant="contained" style={style.button_b} fullWidth>
          <Typography component="span" style={style.text_t}>Save</Typography>
      </Button> 
  )
};

export default ChooseButton;
