
import { Button, Typography } from "@mui/material";


const SaveAndAddButton = () => {

  const style = {
      button : {
          
          // padding:'15px 361px 17px 355px',
          // margin:'0 0 24px 73px',
          marginTop:"17px",
          height: "48px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
          backgroundColor: "#23db7b",
        //   width:"788px"
      } as React.CSSProperties,
      text : {
          color: "white"
      }
  }



  return (
      <Button variant="contained" style={style.button} fullWidth>
          <Typography component="span" style={style.text} className="largeButtonText">Save & Add</Typography>
      </Button> 
  )
};

export default SaveAndAddButton;