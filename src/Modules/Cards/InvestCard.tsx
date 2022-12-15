import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { InvestButton } from "../Buttons/InvestButton";
import Stack from "@mui/material/Stack";
import { Grid, TextField } from "@mui/material";
import List from "@mui/material/List";
import { globalConstant } from "../../Utils/globalConstant";
import './style.css'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const style = {
  containertwo: {
    backgroundColor: "#fff",
    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
    borderRadius: "8px",
    padding: "21px 40px",
  },
  dividerBox: {
    width: "470px",
    height: "1px",
    margin: "13.5% 0 17.5%",
    opacity: "0.2",
    backgroundColor: "#acb4bf",
  },

  cameraIcon: {
    width: "448px",
    height: " 67px",
    margin: "0 0 14px",
    objectFit: "contain",
  },

  emailIcon: {
    borderRadius: "170px 175px 175px 163px",
    backgroundColor: "#64dbff",
    width: "80px",
    height: "80px",
    margin: "0 54px 22px 34px",
    padding: "20px",
    boxShadow: "0 0 10px 0 rgb(0 0 0 / 8%)",
    border: "solid 1px rgba(0, 0, 0, 0.08)",
  },
  button: {
    height: "48px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
    backgroundColor: "#23db7b",
    margin: "16px",
    width: "90%",
    maxWidth: "400px",
    transform: "translate(8px, -23px)",
  },
  Axisstyle: {
    width: "14px",
    height: "14px",
    // margin: "8px 67px 0 0",
    fontFamily: "Roboto",
    fontSize: "12px",
    fontWeight: "normal",
    letterSpacing: "normal",
    textAlign: "left",
    color: "#7b7b9d",
  },
  ca: {
    backgroundColor: "#64dbff",
    width: "20px",
    height: "20px",
    padding: "10px",

  } as React.CSSProperties,
  text: {
    color: "white",
  },
};

type IProps = {
  cardType: string;
  heading: string;
};

export default function InvestCard(props: IProps) {
  return (
    <>

      <Card sx={{ minWidth: 275, borderRadius: "8px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", backgroundColor: "#ffffff" }}>
        <CardContent>
          <Stack m={2} spacing={6}>
            <b
              style={{
                width: "100%",
                margin: "-4% 303px 25px 0",

                textAlign: "left",
                color: "#3c3e42"
              }}
            >
              {props?.heading}
            </b>

            <List>
              <TextField
                label="I want to invest"
                name="middleName"
                fullWidth
                placeholder="₹1,00,000"
                sx={{
                  margin: " -55px 0 20px",
                  boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)",
                  backgroundColor: " #fff",
                }}
              ></TextField>
              <Typography
                sx={{
                  width: "304px",
                  height: "14px",
                  margin: "-8px 135px 0 1px",
                  fontSize: "12px",
                  fontWeight: "normal",
                  fontStretch: "normal",
                  fontStyle: "normal",
                  lineHeight: " 1.33",
                  letterSpacing: "normal",
                  textAlign: " left",
                  color: "#8787a2",
                }}
              >
                You can start small, starting from ₹5,000
              </Typography>
              <Stack direction="row" spacing={4} sx={{ marginTop: "14px" }} className="ButtonStyleInvest">
                <Button
                  variant="contained"
                  disabled
                  sx={{
                    BackgroundColor: "#6c63ff",
                    borderRadius: "2px",

                    width: "60px",
                    height: "33px",
                    margin: " 2.2 12px 0 0",
                    padding: "10px 12px 9px",
                  }}
                >
                  <b style={{ color: "#6c63ff" }}>+1000</b>
                </Button>
                <Button variant="contained" disabled
                  sx={{
                    BackgroundColor: "#6c63ff",
                    borderRadius: "2px",
                    color: "#6c63ff",
                    width: "64px",
                    height: "35px",
                    margin: " 2.2 12px 0 0",
                    padding: "10px 12px 9px",
                  }}
                >
                  <b style={{ color: "#6c63ff" }}>+5000</b>
                </Button>
                <Button variant="contained" href="#contained-buttons" disabled
                  sx={{
                    BackgroundColor: "#6c63ff",
                    borderRadius: "2px",
                    color: "#6c63ff",
                    width: "75px",
                    height: "35px",
                  }}
                > <b style={{ color: "#6c63ff" }}>  +10,000</b>
                </Button>
              </Stack>
              <InvestButton cardType={props?.cardType} />
              <Grid container spacing={2} textAlign="center">
                <Grid item xs={12} md={12}>
              
                 <Typography sx={{ fontSize: "11px",  fontWeight: "500", textAlign:"center",color:"#6c63ff"}}>
                <b style={{marginTop:"2%",transform: "translate(10px, 20px)",color:"#6c63ff"}}><HelpOutlineIcon/></b>  
                  KNOW MORE ABOUT INVESTMENT</Typography>
                </Grid>
              </Grid>
             

           
        
          </List>
        </Stack>
      </CardContent>
    </Card>

    </>
  );
}
