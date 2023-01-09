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
  hdfcErgo,
  hdfclogo,
  Logo,
  MonoLogo,
  Profile,
  SIP,
  sipiclogo,
  SuccessLogo,
} from "../../Assets/index";
import { useDispatch, useSelector } from "react-redux";
import SaveSipDetailsButton from "../../Modules/Buttons/SaveSipDetailsButton";
import { useForm, Controller } from "react-hook-form";
import set from "date-fns/fp/set/index.js";
import { Navigate, useNavigate } from "react-router-dom";
import "./insurance.css";
import { CheckBox } from "@mui/icons-material";
import ClearIcon from "@mui/icons-material/Clear";
import CongratsModal from "./CongratsModal";

function HdfcModal(props: any) {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const handleCongrates = () => {
    setShowLogin(true);
  };
  return (
    <>
   

      {/* <Modal
        sx={{
          backdropFilter: "blur(10px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        keepMounted
        open={props.open}
        onClose={() => {
          props.setOpen(false);
        }}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
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
    
            transform: "translate(-50%,-50%)",
          }}
        >
          <Grid container  sx={{marginLeft:"-3%",marginTop:"3%"}}>
            <Grid item xs={12} md={12} >
              <Box textAlign="right">
                <ClearIcon />
              </Box>
            </Grid>
          </Grid>
          <div
            className="modalContainer"
            style={{ width: "100%" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop:"39px"
              }}
            >
              <img
                src={hdfcErgo}
                alt="S__M"
                style={{ height: "148px", width: "148px" }}
              />
              <p style={{ fontWeight: "500",cursor:"pointer" }} 
              onClick={handleCongrates}
              >Loading...
              </p>
                <CongratsModal open={showLogin} close={() => setShowLogin(false)} />
            </div>
          </div>
        </Box>


      </Modal> */}
    </>
  );
}

export default HdfcModal;
