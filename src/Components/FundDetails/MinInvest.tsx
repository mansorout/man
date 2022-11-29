import Typography from "@mui/joy/Typography/Typography";
import {
  Avatar,
    Box, Grid, ListItemAvatar, ListItemButton, ListItemText,

  
  } from "@mui/material";
  //import { minInvest, schemeDoc } from "../../Assets";
  import './FundTable.css'
  
  
  
  
  const FundInvest = () => {
  
  
    return (
      <Box
        id="CoCard"
        sx={{
          // backgroundColor:"green",
          // padding: "1rem",
          // fontFamily: "Roboto",
          // borderRadius: "0.5rem",
          // boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
          // backgroundColor: "white",
          margin: "1rem",
          height: "84px",
          // margin: "24px 32px",
          padding:" 12px 12px 21px 16px",
          borderRadius: "8px",
          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
         boxSizing: "border-box",
          backgroundColor: "white",
        }}
      >
        
        <Grid container  spacing={2}>
          <Grid item>
{/*          {<Avatar alt="star" src={minInvest} sx={{
                        backgroundColor: "#64dbff", height: "30px",
                        width: "30px"
                      }} />}
                    */}          </Grid>
          <Grid item xs>
          <Typography className='risko_meter'>Min. Investment:</Typography>
                      <Typography className='Level-of-Risk-in-the-Scheme'>Monthly SIP</Typography>
                      <Typography className='Level-of-Risk-in-the-Scheme'>500</Typography>
          </Grid>
          <Grid item xs>
            <Typography>One-time Lumpsum</Typography>
            <Typography>₹5,000</Typography>
          </Grid>
        </Grid>
     
      </Box>
    );
  };
  
  export default FundInvest;
  