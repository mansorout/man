import Typography from "@mui/joy/Typography/Typography";
import {
  Avatar,
    Box, Grid, ListItem, ListItemAvatar, ListItemButton, ListItemText,

  
  } from "@mui/material";
  import { minInvest} from "../../Assets";
  import {schemeDoc } from "../../Assets";
 
  
  
  
  
  const FundInvest = () => {
  
  
    return (
      <Box
        
        sx={{
          // backgroundColor:"green",
          // padding: "1rem",
          // fontFamily: "Roboto",
          // borderRadius: "0.5rem",
          // boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
          // backgroundColor: "white",
          margin: "1rem",
          height: "justify",
          // margin: "24px 32px",
          padding:" 12px 12px 21px 16px",
          borderRadius: "8px",
          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
         boxSizing: "border-box",
          backgroundColor: "white",
        }}
      >
        
        <Grid container>
          <Grid item>
          <ListItemAvatar sx={{
  width: "32px",
  height: "32px",

  
}}>

  <Avatar
    alt=""
    src={minInvest}
    // style={style.ca}
    sx={{width:"20px",
    height:"20px",
    padding:"10px",
    opacity:"0.9",
    backgroundColor: "#64dbff"

    }}
  />

</ListItemAvatar>
          </Grid>
          <Grid item xs sx={{marginTop:"7px"}}>
          <Typography className='risko_meter'>Min. Investment:</Typography>
                      <Typography className='Level-of-Risk-in-the-Scheme'>Monthly SIP</Typography>
                      <Typography className='Level-of-Risk-in-the-Scheme'>500</Typography>
          </Grid>
          <Grid item xs sx={{marginTop:"27px"}}>
            <Typography className='Level-of-Risk-in-the-Scheme'>One-time Lumpsum</Typography>
            <Typography>₹5,000</Typography>
          </Grid>
        </Grid>
     
     {/* <ListItem>

<ListItemAvatar sx={{
  width: "32px",
  height: "32px",

  
}}>

  <Avatar
    alt=""
    src={schemeDoc}
    // style={style.ca}
    sx={{width:"20px",
    height:"20px",
    padding:"10px",
    opacity:"0.9",
    backgroundColor: "#64dbff"

    }}
  />

</ListItemAvatar>
<ListItemText
  primary={
    <span><Typography className='risko_meter'>Min. Investment:</Typography>
    <Typography className='Level-of-Risk-in-the-Scheme'>Monthly SIP</Typography></span>
    }

    secondary={
      <Typography>₹5,000</Typography>
    }

/>

</ListItem> */}

      </Box>
    );
  };
  
  export default FundInvest;
  