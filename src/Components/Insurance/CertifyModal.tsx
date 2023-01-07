import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/system";
import moment from "moment";
import {
  Breadcrumbs,
  Button,
  CardHeader,
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
import "./ModalGotit.css";
import ClearIcon from "@mui/icons-material/Clear";
import HdfcModal from "./HdfcModal";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
const CertifyModal = (props: any) => {
    const [open, setOpen] = React.useState(false);
    const [count, setCount] = React.useState(1);
    const [showLogin, setShowLogin] = useState(false);
    const [openConfirmationModal, setOpenConfirmationModal] = React.useState(false);
   
    const [openCompleteModal, setOpenCompleteModal] = React.useState(false);
    const [openHdfcModal, setOpenHdfcModal] = React.useState(false);
    const [openTakeItEasyModal, setOpenTakeItEasyModal] = React.useState(false);
  const navigate = useNavigate();
  const handleProceedBuyButton=()=>{

     setOpenConfirmationModal(true)
  }

  useEffect(() => {
   setTimeout(()=>{setCount(2)},5000)
  }, [])
  return (
    <div>
      <Modal open={props.open}>
        <Box
          style={{
            maxWidth: "30%",
            minWidth: "20%",
            borderRadius: "10px",
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
            // padding: "11px",
            transform: "translate(-50%,-50%)",
          }}
          className="smallmodal"
        >
          <div className="investInsidePading">
            <Grid
              container
              style={{ backgroundColor: "white", display: "flex" }}
            >
              <Grid item xs={12}>
                <CardHeader
                  avatar={
                    <Box sx={{ paddingTop: "0%" }} textAlign="left">
                      <b
                        style={{
                          textAlign: "left",
                          paddingBottom: "1%",
                        }}
                      >
                        Certify your Information
                      </b>
                    </Box>
                  }
                  action={""}
                  title=""
                  subheader=""
                  sx={{ fontSize: "14px", fontWeight: "500", color: "#3c3e42" }}
                />
              </Grid>

              <Box>
                <Grid container>
                  <Grid item xs={1} md={1} sx={{ marginTop: "10px" }}>
                    <Box>
                      <Checkbox
                        id="topping"
                        name="topping"
                        {...label}
                        defaultChecked={false}
                        sx={{
                          color: "#3D70B2"[800],
                          "&.Mui-checked": {
                            color: "#09b85d",
                          },
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={11} md={11} sx={{ marginTop: "4%" }}>
                    <Typography sx={{ color: "#3c3e42", fontSize: "16px" }}>
                      I hereby certify that the information provided by me is
                      complete, true and correct to the best of my knowledge.
                    </Typography>
                  </Grid>

                  <Grid
                    xs={12}
                    md={12}
                    textAlign="left"
                    sx={{ paddingLeft: "12px", marginTop: "4%" }}
                  >
                    <Typography
                      sx={{
                        color: "#7b7b9d",
                        fontSize: "14px",
                        fontWeight: "normal",
                      }}
                    >
                      You will now be redirected to partner site to complete the
                      payment process.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
        
            </Grid>
            <Box textAlign="center">
            <Button
              // disabled={showSubmit}
              fullWidth
              onClick={handleProceedBuyButton}
            
              sx={{
            
                width: "158px",
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
            <HdfcModal  open={openConfirmationModal}   close={() => setOpenConfirmationModal(true)}  setOpen={setOpenConfirmationModal} onBtnPress={()=>{setOpenConfirmationModal(false);setOpenHdfcModal(true);setTimeout(()=>{setOpenCompleteModal(true)},2000)}}/>
        

          </Box>
          </div>
       
          <Grid item xs={2}>
            <Box
              onClick={props.close}
              sx={{
                margin: "12px 0px 8px 81px",
                opacity: " 0.54 ",
                position: "absolute",
                top: "1px",
                right: "15px",
              }}
              className="closeIconStyle"
            >
              <ClearIcon />
            </Box>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default CertifyModal;
