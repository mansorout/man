import Typography from "@mui/joy/Typography/Typography";
import {
  Avatar,
  Box, Grid, ListItem, ListItemAvatar, ListItemButton, ListItemText,


} from "@mui/material";
import { minInvest } from "../../Assets";
import { schemeDoc } from "../../Assets";

type IProps = {
  sipminamount: number,
  lumpsumminamount: number
}

const FundInvest = (props: IProps) => {
  return (
    <Box
      sx={{
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
            fontSize:{xs:"14px",sm:"16px"}, color: "#3c3e42", fontWeight: "500"
          }} >Min. Investment:</Typography>
          <Box sx={{borderRight:"2px solid #8380801c", marginRight:{xs:"5px" , sm:"40px"}}}>
          <Typography sx={{
            fontFamily: "Roboto",
            fontSize: "12px", color: "#7b7b9d", fontWeight: "500"
          }}>Monthly SIP</Typography>
          <Typography sx={{
            fontFamily: "Roboto",
            fontSize: "14px", color: "#3c3e42", fontWeight: "500"
          }}>₹{props?.sipminamount}</Typography>
          </Box>
        </Grid>
        <Grid item xs sx={{ marginTop: "21px" }}>
          <Typography sx={{
            fontFamily: "Roboto",
            fontSize: "12px", color: "#7b7b9d", fontWeight: "500"
          }}>One-time Lumpsum</Typography>
          <Typography sx={{
            fontFamily: "Roboto",
            fontSize: "14px", color: "#3c3e42", fontWeight: "500"
          }}>₹{props?.lumpsumminamount}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FundInvest;
