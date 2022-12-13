import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import ModalInvestNow from "../../Components/InvestNowScreen/ModalInvestNow";
import { setInvestmentCardTypeAction } from "../../Store/Action-Creators";
import { globalConstant } from "../../Utils/globalConstant";
import { Button, Typography } from "@mui/material";

type IProps = {
  cardType: string;
};

export const InvestButton = (props: IProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(false);
  const style = {
    button: {
      height: "48px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
      backgroundColor: "#23db7b",
      margin: "15px",
      width: "90%",
      maxWidth: "400px",
    } as React.CSSProperties,
    text: {
      color: "white",
    },
  };

  const handleClick = () => {
    if (props?.cardType === globalConstant.SIP_INVESTMENT) {
      dispatch(setInvestmentCardTypeAction(globalConstant.SIP_INVESTMENT));
    } else if (props?.cardType === globalConstant.LUMPSUM_INVESTMENT) {
      dispatch(setInvestmentCardTypeAction(globalConstant.LUMPSUM_INVESTMENT));
    }

    setShowLogin(true);
  };

  return (
    <>
      <Button
        variant="contained"
        style={style.button}
        fullWidth
        onClick={() => {
          handleClick();
        }}
      >
        <Typography
          component="span"
          style={style.text}
          className="largeButtonText"
        >
          Continue
        </Typography>
      </Button>
      <ModalInvestNow open={showLogin} close={() => setShowLogin(false)} />
    </>
  );
};
