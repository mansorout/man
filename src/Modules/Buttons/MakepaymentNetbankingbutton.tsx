
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
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
            // width:"100px",
            // height:"16px"
          
            
        
        }
    }

    const navigate = useNavigate()

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} textAlign="center" sx={{marginTop:"47%"}}>
            <Button variant="contained" style={style.buttonnetbank} fullWidth>
                <Box sx={{display:"flex",justifyContent:'space-between',alignItems:"center"}}>
                    <Typography sx={{fontSize:"11px",width:"111px"}}>Pay ₹5,000</Typography>
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
                    &nbsp;  &nbsp;  &nbsp;  &nbsp;
                    <Typography sx={{
                 width: "114px",
                 height: "35px",
              
                 marginLeft:"25%",
             
               
                //  padding:" 10px 8px 9px 8px",
                 borderRadius: "4px",
                 boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                 backgroundColor: "#23db7b"
            }}  style={style.texttwo}>Make Payments</Typography>
                </Box>
            {/* <Grid container spacing={7}>
                <Grid item xs={4}>
                <Typography component="span" style={style.text} className="largeButtonText">Pay ₹5,000</Typography>
                </Grid>
                <Grid item xs={8} >
                <Typography sx={{
                 width: "114px",
                 height: "35px",
                 marginTop:"4%",
                 marginLeft:"22%",
             
               
                //  padding:" 10px 8px 9px 8px",
                 borderRadius: "4px",
                 boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
                 backgroundColor: "#23db7b"
            }}  style={style.texttwo}>Make Payments</Typography>
                </Grid>
           
            </Grid> */}
        
        </Button> 
            </Grid>
        </Grid>
       
    )
};

export default MakepaymentNetbankingbutton;





