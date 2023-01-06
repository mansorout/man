import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/system";
import moment from "moment";
import {
  Breadcrumbs,
  Button,
  Checkbox,
  Grid,
  Modal,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import {
  closelogo,
  GroupSaf,
  iciclogoiclogo,
  iclogoplus,
  Logo,
  MonoLogo,
  Profile,
  SIP,
  sipiclogo,
} from "../../Assets/index";
import { Navigate, useNavigate } from "react-router-dom";
import { globalConstant } from "../../Utils/globalConstant";
import ClearIcon from "@mui/icons-material/Clear";
import "./ModalGotit.css";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CertifyModal = (props: any) => {
  const navigate = useNavigate();
  return (
    <div>
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
            padding: "20px",
            transform: "translate(-50%,-50%)",
          }}
        
        >
          <Grid container>
            <Grid item xs={12} md={12} textAlign="center">
              <Box sx={{ backgroundColor: "var(--marigold)" }} textAlign="left">
                Certify your Information
              </Box>
              <Box textAlign="right" sx={{ marginTop: "-6%" }}>
                <ClearIcon />
              </Box>
              <Grid container spacing={1}>
                <Grid item xs={1}  textAlign="left">
                  <Box sx={{transform: "translate(-23%,22px)"}}>
                  <Checkbox
              id="topping" name="topping"
              {...label}
              defaultChecked
              sx={{
                color: "#3D70B2"[800],
                "&.Mui-checked": {
                  color: "#09b85d"
                }
              }}
            />
                  </Box>
                </Grid>

                <Grid item xs={11}  textAlign="right">
                  <Box sx={{ marginTop: "7%" }}>
                    <Typography sx={{ fontSize: "19px",color:"#3c3e42" }}>
                      I hereby certify that the information provided by
                      me is complete, true and correct to the best of
                  
                    </Typography>
                    <Typography  sx={{ fontSize: "19px",marginLeft:"5%",color:"#3c3e42" }} textAlign="left"> my knowledge.</Typography>
            
                  </Box>
                </Grid>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={12} textAlign="left" sx={{marginTop:"5%" }} >
                        <Typography sx={{ fontSize: "14px",color:"#7b7b9d" }}>You will now be redirected to partner site to complete the </Typography>
                        <Typography  sx={{ fontSize: "14px",color:"#7b7b9d"} }>payment process.</Typography>
                    </Grid>
                </Grid>
              </Grid>

            
           
              <Box>
                <Button
                  // disabled={showSubmit}
                  fullWidth
                  onClick={() => {
                    navigate("/healthInsurance/findInsurance");
                  }}
                  sx={{
                    width: "232px",
                    height: "42px",
                    backgroundColor: "#23db7b",
                    marginTop: "9%",
                    ml: 1,
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#23db7b",
                    },
                    boxShadow: " 0 4px 8px 0 rgba(35, 219, 123, 0.4)",
                  }}
                >
                  <Typography
                    sx={{ fonSize: "14px", fontWeight: "500", color: "white" }}
                  >
                    {" "}
                    Proceed to Buy{" "}
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default CertifyModal;
