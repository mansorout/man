import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/system";
import {
  Breadcrumbs,
  Button,
  Checkbox,
  CircularProgress,
  Grid,
  Modal,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import {
  closelogo,
  Logo,
  MonoLogo,
  Profile,
  SIP,
  sipiclogo,
  SuccessLogo,
  thumb,
} from "../../Assets/index";
import { useDispatch, useSelector } from "react-redux";
import SaveSipDetailsButton from "../../Modules/Buttons/SaveSipDetailsButton";
import { useForm, Controller } from "react-hook-form";
import set from "date-fns/fp/set/index.js";
import { Navigate, useNavigate } from "react-router-dom";
import "./insurance.css";
import { CheckBox } from "@mui/icons-material";

function ThanksModal(props: any) {
  const navigate = useNavigate();
  return (
    <>
      <Modal open={props.open}>
        <Box
          style={{
            maxWidth: "30%",
            minWidth: "20%",
            borderRadius: " 8px 8px 8px 8px",
            boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.2)",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
            position: "absolute",
            top: "50%",
            left: "50%",
            padding: "48px",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={12} textAlign="center">
              <Box
                sx={{ backgroundColor: "var(--marigold)" }}
                textAlign="center"
              >
                <div style={{ paddingTop: "15%" }}>
                  <img
                    src={thumb}
                    alt="sprint-money"
                    style={{
                      width: "95.8px",
                      height: "95.8px",
                    }}
                  />
                </div>
              </Box>
              <Box sx={{ marginTop: "50px" }}>
                <b style={{ fontSize: "23px",color:"#3c3e42",fontWeight:"500" }}>Thank you for the details</b>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Box>
                  <Typography sx={{color:"#7b7b9d",fontSize:"16px"}}>
                    Please wait while we bring together best
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{color:"#7b7b9d",fontSize:"16px"}}>recommendations for you .</Typography>
                </Box>
              </Box>
              <Box sx={{marginTop:"28px"}}>
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress size={20} />
                </div>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}

export default ThanksModal;
