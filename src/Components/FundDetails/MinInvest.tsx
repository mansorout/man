import Typography from "@mui/joy/Typography/Typography";
import {
  Avatar,
  Box, Grid, ListItem, ListItemAvatar, ListItemButton, ListItemText,


} from "@mui/material";
import { minInvest } from "../../Assets";
import { schemeDoc } from "../../Assets";





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
        // margin: "1rem",

        // margin: "24px 32px",
        padding: " 12px 12px 21px 16px",
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
              sx={{
                width: "20px",
                height: "20px",
                padding: "10px",
                opacity: "0.9",
                backgroundColor: "#C1F0FF"

              }}
            />

          </ListItemAvatar>
        </Grid>
        <Grid item xs sx={{ marginTop: "7px 0px" }}>
          <Typography sx={{
            fontFamily: "Roboto",
            fontSize: "16px", color: "#3c3e42",fontWeight:"500"
          }} >Min. Investment:</Typography>
          <Typography sx={{
            fontFamily: "Roboto",
            fontSize: "12px", color: "#7b7b9d", fontWeight: "500"
          }}>Monthly SIP</Typography>
          <Typography sx={{
            fontFamily: "Roboto",
            fontSize: "14px", color: "#3c3e42", fontWeight: "500"
          }}>₹500</Typography>
        </Grid>
        <Grid item xs sx={{ marginTop: "21px" }}>
          <Typography sx={{
            fontFamily: "Roboto",
            fontSize: "12px", color: "#7b7b9d", fontWeight: "500"
          }}>One-time Lumpsum</Typography>
          <Typography sx={{
            fontFamily: "Roboto",
            fontSize: "14px", color: "#3c3e42", fontWeight: "500"
          }}>₹5,000</Typography>
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
