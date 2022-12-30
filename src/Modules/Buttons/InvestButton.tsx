import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalInvestNow from "../../Components/InvestNowScreen/ModalInvestNow";
import { globalConstant } from "../../Utils/globalConstant";
import { Button, Grid, Typography } from "@mui/material";
import { setInvestmentCardTypeAction } from "../../Store/Investment/actions/investment-action";
import siteConfig from "../../Utils/siteConfig";
import { customParseJSON } from "../../Utils/globalFunctions";

type IProps = {
  cardType: string;
};

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

export const InvestButton = (props: IProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const g_investment: any = useSelector(
    (state: any) => state?.investmentReducer?.investment
  );

  const [showLogin, setShowLogin] = useState(false);
  const [investamount, setInvestAmount] = useState("");

  const handleClick = async () => {
    if (props?.cardType === globalConstant.SIP_INVESTMENT) {
      dispatch(setInvestmentCardTypeAction(globalConstant.SIP_INVESTMENT));
    } else if (props?.cardType === globalConstant.LUMPSUM_INVESTMENT) {
      dispatch(setInvestmentCardTypeAction(globalConstant.LUMPSUM_INVESTMENT));
    }

    let status: boolean = false;
    let objUserInfo: any = await customParseJSON(localStorage.getItem(siteConfig.USER_INFO));
    await ['firstname', 'lastname', 'emailaddress', 'dateofbirth'].forEach((key: string) => {
      if (!objUserInfo?.userdetails[key]) {
        status = true;
      }
    })

    if (status) {
      setShowLogin(status);
    } else {
      if (g_investment.type === globalConstant.SIP_INVESTMENT) {
        navigate("/mflist", {});
      } else if (g_investment.type === globalConstant.LUMPSUM_INVESTMENT) {
        navigate("/onetimemutualfundrecommendation", {});
      }
    }
  };

  const handleChangecontinue = (e: any) => {
    const getinvest = e.target.value
    setInvestAmount(getinvest);
  }

  return (
    <>
      <Button
        variant="contained"
        style={style.button}
        fullWidth

        onClick={() => {
          handleClick();
        }}
        onChange={(e) => handleChangecontinue(e)}
      >
        <Grid container spacing={2} textAlign="center">
          <Grid item xs={12} md={12}>
            <Typography
              component="span"
              style={style.text}
              className="largeButtonText"

            >
              Continue
            </Typography>
          </Grid>
        </Grid>
      </Button>
      <ModalInvestNow open={showLogin} close={() => setShowLogin(false)} />
    </>
  );
};
