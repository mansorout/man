import React from "react";
import { Container } from "@mui/material";
import {
  Box,
  TextField,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import Header from "../../Components/Header";
import "../Auth/Login.css";
import ContWithMobile from "../Buttons/ContWithMobile";
import ConnectWithGoogle from "../Buttons/ConnectWithGoogle";
import { FooterBox } from "../FooterBox";
import Image from "../../Assets/Group 6673@2x.png";

export const Login = () => {
  return (
    <>
      <Box className="Main_Box">
        <Header />
        <Box className="Grid_Box">
          <Grid
            sx={{
              alignItems: "center",
              justifyContent: "center",
              direction: "row",
              display: "flex",
            }}
          >
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
              <div
                style={{
                  marginTop: "48.3px",
                  display: "flex",
                  textAlign: "center",
                  //  width: '60px',
                  //  height:'59.7px',
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  component="img"
                  alt="The house from the offer."
                  src={Image}
                />
              </div>

              <Typography component='h1' variant="h1" align="center">
                Login With Mobile
              </Typography>
              <Typography variant="h6" align="center">
                Enter your mobile number to continue
              </Typography>
              <TextField
                className="text_field"
                margin="normal"
                label="Mobile number"
              />
            </Grid>

            <Grid item xs={3}></Grid>
          </Grid>
          <Stack>
            <ContWithMobile />
          </Stack>
          <Stack>
            <ConnectWithGoogle />
          </Stack>
          <FooterBox />
        </Box>
      </Box>
    </>
  );
};

