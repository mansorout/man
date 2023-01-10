import React from "react";
import { Button, Typography } from "@mui/material";
import { Checkcirclelogo } from "../../Assets/index";
import { arrowForwedlogo } from "../../Assets/index";
import "./styleButton.css";

export const VerificationpendingButton = () => {
  const style = {
    button_B: {
      height: "48px",
      borderRadius: " 8px",
      backgroundColor: "rgb(255, 195, 0, 0.3)",
      marginTop: "3%",
      width: " 100%",
      // maxWidth: "444px",
      // marginLeft:"-14px"
    } as React.CSSProperties,
    text_T: {
      color: "black",
      fontSize: "12px",
      fontWeight: "500",
      lineHeight: "22px",
      opacity: "0.74",
      textTransform: "capitalize",
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      alignContent: "center",
      justifyContent: "center",
      alignItems: "flex-end",
    } as React.CSSProperties,
  };
  // color: "black",
  // fontSize: "12px",
  // fontWeight:"500",
  // lineHeight: "2",
  // opacity:" 0.74",
  // textTransform:"capitalize",
  // transform: "translate(-43%, -7.9%)"

  return (
    <Button
  
      style={style.button_B}
      fullWidth
      sx={{
        display: "flex",
        justifyContent: "space-between",
       
      }}
      // className="KYCpendingStyleButton"
    >
      

      <Typography
        component="span"
        style={style.text_T}
        sx={{fontSize:{sm:"12px"}}}
        className="textFontKyc"
      >
        <img
        src={Checkcirclelogo}
        width="24"
        // height="24"
        alt="Google Logo"
      />
        <span className="textKyc" style={{marginLeft:"20px"}}>KYC Verification is pending</span>
      </Typography>
      <img
        className="imgVarification"
        src={arrowForwedlogo}
        alt="smallarrow Logo"
        style={{
          width: "24px",
          height: "24px",
          backgroundColor: "#ffc300",
          borderRadius: "12px",
          marginLeft: "62px",
         
        }}
      />
    </Button>
  );
};

// padding:" 6px 5px 6px 7px";
// background-color: "var(--marigold)";
// width: 22.6px;
// height: 22.6px;
// margin: 2px 4.2px 0 0;
// object-fit: contain;
// opacity: 0.87;
