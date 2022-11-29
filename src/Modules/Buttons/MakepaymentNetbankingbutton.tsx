
import { Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


  const MakepaymentNetbankingbutton = () => {

    const style = {
        buttonnetbank : {
            
            
            boxShadow: "0 0 16px 0 rgba(0, 0, 0, 0.16)",
            backgroundColor: "#3c3e42",
            width:"90%",
            maxWidth:"400px",
    
            height:" 56px",
            padding: "10.5px 14px 10.5px 16px"
        } as React.CSSProperties,
        text : {
            color: "white"
        },
        texttwo:{
            color:"#ffffff",
            fontSize:"11px",
            
        
        }
    }

    const navigate = useNavigate()

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} textAlign="center" sx={{marginTop:"50%"}}>
            <Button variant="contained" style={style.buttonnetbank} fullWidth>
            <Grid container spacing={7}>
                <Grid item xs={4}>
                <Typography component="span" style={style.text} className="largeButtonText">Pay ₹5,000</Typography>
                </Grid>
                <Grid item xs={8} >
                <Button sx={{
                 width: "116px",
                 height: "35px",
                 marginTop:"4%",
                 marginLeft:"40%",
             
               
                //  padding:" 10px 8px 9px 8px",
                 borderRadius: "4px",
                 boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                 backgroundColor: "#23db7b"
            }}  style={style.texttwo}>Make Payments</Button>
                </Grid>
           
            </Grid>
        
        </Button> 
            </Grid>
        </Grid>
       
    )
};

export default MakepaymentNetbankingbutton;






// MakepaymentNetbankingbutton