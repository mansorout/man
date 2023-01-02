import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { accountboxlogo } from "../../Assets/index";
import { familyrestroomlogo } from "../../Assets/index";
import { paymentslogo } from "../../Assets/index";
import { AccountBalancelogo } from "../../Assets/index";
import { arrowlogo } from "../../Assets/index";
import { Locklogo } from "../../Assets/index";
import { Logoici } from "../../Assets/index";
import Switch from "@mui/material/Switch";
import { chequelogo } from "../../Assets/index";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { VerificationpendingButton } from "../Buttons/VerificationpendingButton";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import "./style.css";

function VviewprofileCard() {
  const [panCardNo, setPanCardNo] = useState("");
  const handlePanCard = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPanCardNo(e.target.value);

  const style = {
    containertwo: {
      backgroundColor: "#fff",
      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
      borderRadius: "8px",
      padding: "21px 40px",
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
    ca: {
      // borderRadius: "170px 175px 175px 163px",
      backgroundColor: "rgba(100, 219, 255, 0.3)",
      width: "20px",
      height: "20px",
      padding: "10px",
    } as React.CSSProperties,
    // ellipse:{
    //     width:" 40px",
    //     height:" 40px",
    //     margin: "0 16px 0 0",
    //     padding: "10px",
    //     opacity: "0.3",
    //     background-color:" #64dbff",

    // } as React.CSSProperties,
  };

  const navigate = useNavigate();
  function handleSubmit() {
    navigate("/panUpdate");
    // navigate('/nominee')
  }

  function handleSubmits() {
    // navigate('/pan_update');
    navigate("/nominee");
  }
  function handleSubmitss() {
    navigate("/uploadsignature");
  }
  function handleSubmitsss() {
    navigate("/bad");
  }

  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <>
      <Box
        sx={{
          p: 1,

          width: "1",
          bgcolor: "background.paper",
          marginTop: "30px",
          borderRadius: "4px",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        }}
        className="thirdboxstyle"
      >
        <List>
          <ListItem
            secondaryAction={
              <Typography
                sx={{
                  backgroundColor: "#ffc300",
                  color: "#000",
                  fontSize: "12px",
                  fontWeight: "bold",
                  borderRadius: " 20px",
                  padding: "2px 21px 2px 23px",
                }}
                className="IncompleteStyle_View"
              >
                Incomplete
              </Typography>
            }
          ></ListItem>
          <Box sx={{ marginTop: "-3%",marginLeft:"2%" }} 
            className="HeadingStyleKycWhole"
          >
            <Typography sx={{ fontWeight: "500", fontSize: "14px" }} 
          
            >
              KYC Details
            </Typography>
            <Typography sx={{ color: "#7b7b9d", fontSize: "12px" }}>
              Details once saved cannot be edited
            </Typography>
          </Box>

          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => navigate("/panUpdate")}
              >
                <Typography
                  sx={{ color: "#6c63ff", fontSize: "14px" }}
                  onClick={handleSubmit}
                >
                  ADD{" "}
                </Typography>

                <Avatar
                  alt=""
                  src={arrowlogo}
                  sx={{ width: "24px", height: "24px" }}
                />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar alt="" src={accountboxlogo} style={style.ca} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  sx={{ fontSize: "14px", color: "#3c3e42" }}
                  className="CommonStyle"
                >
                  PAN Number
                  <img
                    src={Logoici}
                    alt="smallarrow Logo"
                    style={{
                      width: "22px",
                      height: "22px",
                      position: "relative",
                      top: "7px",
                    }}
                  />
                </Typography>
              }
            />
          </ListItem>

          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => navigate("/nominee")}
              >
                <Typography
                  sx={{ color: "#6c63ff", fontSize: "14px" }}
                  onClick={handleSubmits}
                >
                  ADD{" "}
                </Typography>

                <Avatar
                  alt=""
                  src={arrowlogo}
                  sx={{ width: "24px", height: "24px" }}
                />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar alt="" src={familyrestroomlogo} style={style.ca} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography sx={{ fontSize: "14px", color: "#3c3e42" }}>
                  Nominee & Declarations
                  <img
                    src={Logoici}
                    alt="smallarrow Logo"
                    style={{
                      width: "22px",
                      height: "22px",
                      position: "relative",
                      top: "7px",
                    }}
                  />
                </Typography>
              }
            />
          </ListItem>

          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => navigate("/uploadsignature")}
              >
                <Typography sx={{ color: "#6c63ff", fontSize: "14px" }}>
                  ADD{" "}
                </Typography>

                <Avatar
                  alt=""
                  src={arrowlogo}
                  sx={{ width: "24px", height: "24px" }}
                />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar alt="" src={paymentslogo} style={style.ca} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography sx={{ fontSize: "14px", color: "#3c3e42" }}>
                  Account Holder Signature
                  <img
                    src={Logoici}
                    alt="smallarrow Logo"
                    style={{
                      width: "22px",
                      height: "22px",
                      position: "relative",
                      top: "7px",
                    }}
                  />
                </Typography>
              }
            />
          </ListItem>

          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => navigate("/bad")}
              >
                <Typography
                  sx={{ color: "#6c63ff", fontSize: "14px" }}
                  onClick={handleSubmitsss}
                >
                  ADD{" "}
                </Typography>

                <Avatar
                  alt=""
                  src={arrowlogo}
                  sx={{ width: "24px", height: "24px" }}
                />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar alt="" src={AccountBalancelogo} style={style.ca} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography sx={{ fontSize: "14px", color: "#3c3e42" }}>
                  Bank Account
                  <img
                    src={Logoici}
                    alt="smallarrow Logo"
                    style={{
                      width: "22px",
                      height: "22px",
                      position: "relative",
                      top: "7px",
                    }}
                  />
                </Typography>
              }
            />
          </ListItem>
          <Grid
            container
            spacing={1}
            textAlign="center"
            sx={{ paddingLeft: "32px" }}
          >
            <Grid item xs={12} md={12}>
              <VerificationpendingButton />
            </Grid>
          </Grid>
        </List>
      </Box>

      <Box
        sx={{
          p: 1,

          width: "1",
          borderRadius: "4px",
          bgcolor: "background.paper",
          marginTop: "30px",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        }}
        className="thirdboxstyle"
      >
        <List>
          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => navigate("/uploadcheque")}
              >
                <Typography sx={{ color: "#6c63ff", fontSize: "14px" }}>
                  ADD{" "}
                </Typography>

                <Avatar
                  alt=""
                  src={arrowlogo}
                  sx={{ width: "24px", height: "24px" }}
                />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar alt="" src={chequelogo} style={style.ca} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography sx={{ fontSize: "14px", color: "#3c3e42" }}>
                  Cancelled Cheque
                  <img
                    src={Logoici}
                    alt="smallarrow Logo"
                    style={{
                      width: "22px",
                      height: "22px",
                      position: "relative",
                      top: "7px",
                    }}
                  />
                </Typography>
              }
            />
          </ListItem>
        </List>
      </Box>

      <Box
        sx={{
          p: 1,
          borderRadius: "4px",
          width: "1",
          bgcolor: "background.paper",
          marginTop: "30px",
          boxShadow:
            "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        }}
        className="thirdboxstyle"
      >
        <List>
          {/* 
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                          Security Preferences
                        </ListSubheader>
                      }
                    > */}
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <Switch {...label} />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar alt="" src={Locklogo} style={style.ca} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography sx={{ fontSize: "14px", color: "#7b7b9d" }}>
                  Quick Access Options
                </Typography>
              }
              secondary="PIN"
            />
          </ListItem>
        </List>
      </Box>
    </>
  );
}

export default VviewprofileCard;
