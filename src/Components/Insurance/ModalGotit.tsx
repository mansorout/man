import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/system";
import moment from "moment";
import {
  Breadcrumbs,
  Button,
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
import "./ModalGotit.css";
const ModalGotit = (props: any) => {
const navigate=useNavigate()
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
          className="smallmodal"
        >
          <Grid container>
            <Grid item xs={12} md={12} textAlign="center" >
              <Box
                sx={{ backgroundColor: "var(--marigold)" }}
                textAlign="center"
              >
                <div style={{paddingTop:"7%"}}>
                <img
                  src={iciclogoiclogo}
                  alt="sprint-money"
                  style={{
                    width: "95.8px",
                    height: "95.8px",
                    backgroundColor:"var(--marigold)",
                    border: "20px solid  #ffc300",
                    borderRadius:'50%'
                  }}
                />
                </div>
            
              </Box>
              <Box sx={{}}>
                <Typography sx={{ fontSize: " 14px" }}>
                  As you already have your base plan,
                </Typography>
                <Typography sx={{ fontSize: " 14px" }}>
                  recommend you best top-up plans to manage your
                </Typography>
                <Typography sx={{ fontSize: " 14px" }}>
                  we will medical expenses better.
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "266px",
                  height: "70px",
                  textAlign: "center",
                  // padding:"20px 56px 1px",
                  opacity: "0.7",
                  borderRadius: "8px",
                  backgroundColor: "#99e7ff",
                  marginLeft: "8%",
                  marginTop: "4%",
                }}
              >
              <Box sx={{paddingLeft:"10%",paddingTop:'5%'}}>
              <Box textAlign="left" >
                  <b style={{color:"#544ec8",fontSize:"12px"}}>Existing Plan</b>
                </Box>
                <Box textAlign="left">
                  <b style={{color:"#3c3e42",fontSize:"14px"}}>₹5 Lacs</b>
                </Box>
              </Box>
              <img src={iclogoplus} alt="Sprint__money" style={{transform: "translate(0px,-29px)"}}/>
            <Box sx={{marginTop:'-25.5%',paddingRight:"8%"}}>
        
            <Box textAlign="right">
                  <b style={{color:"#544ec8",fontSize:"12px"}}>Top-up Plan</b>
                </Box>
                <Box textAlign="right">
                  <b style={{color:"#3c3e42",fontSize:"14px"}}>₹10 Lacs</b>
                </Box>
            </Box>
                
           
              </Box>
              <Box sx={{ paddingTop: "20px" }}>
                <b
                  style={{
                    fontSize: "15px",
                    fontWeight: "500",
                    color: "#363636",
                  }}
                >
                  Total Sum Insured ₹15 Lacs
                </b>
              </Box>
              <Box>
                <Button
                  // disabled={showSubmit}
                  fullWidth
                  onClick={() => { navigate('/healthInsurance/findInsurance')}}
                  sx={{
                    width:"158px",
                    height:"42px",
                    backgroundColor: "#23db7b",
                    marginTop: "9%",
                    ml: 1,
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#23db7b",
                    },
                    boxShadow:" 0 4px 8px 0 rgba(35, 219, 123, 0.4)"
                  }}
                >
                  <Typography sx={{ fonSize: "14px",fontWeight:"500", color: "white" }}>
                    {" "}
                    OK, Got it{" "}
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

export default ModalGotit;
