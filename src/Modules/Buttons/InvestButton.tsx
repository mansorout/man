import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ModalInvestNow from "../../Components/InvestNowScreen/ModalInvestNow";
import { globalConstant } from "../../Utils/globalConstant";
import { Button, Grid, Typography } from "@mui/material";
import { setInvestmentCardTypeAction } from "../../Store/Recommendations/actions/recommendations-action";
import siteConfig from "../../Utils/siteConfig";
import { customParseJSON } from "../../Utils/globalFunctions";
import { onetimeLumpsumamount } from "../../Store/Duck/InvestmentType";

type IProps = {
  cardType: string;
  saveMutualFundGenerate?: (id: number, path: string) => void | undefined;
  lumpsumPrice?: any;
};

const style = {
  button: {
    height: "48px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
    backgroundColor: "#23db7b",
    marginTop: "15px",
    width: "100%",
  } as React.CSSProperties,
  text: {
    color: "white",
  },
};

export const InvestButton = (props: IProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const g_investment: any = useSelector(
    (state: any) => state?.recommendationsReducer?.investment
  );

  const [showLogin, setShowLogin] = useState(false);
  const [investamount, setInvestAmount] = useState("");

  const handleClick = async () => {
    console.log(props.lumpsumPrice)
    dispatch(onetimeLumpsumamount(props.lumpsumPrice))
    if (props?.cardType === globalConstant.SIP_INVESTMENT) {
      dispatch(setInvestmentCardTypeAction(globalConstant.SIP_INVESTMENT));
      // navigate("/SipComparison", {});
    } else if (props?.cardType === globalConstant.LUMPSUM_INVESTMENT) {
      dispatch(setInvestmentCardTypeAction(globalConstant.LUMPSUM_INVESTMENT));
    }

    let status: boolean = false;
    let objUserInfo: any = await customParseJSON(localStorage.getItem(siteConfig.USER_INFO));
    await ['firstname', 'lastname', 'emailaddress', 'dateofbirth'].forEach((key: string) => {
      if (!objUserInfo?.userdetails[key]) {
        status = true;
      }
      if (key === "dateofbirth") {
        if (!parseInt(objUserInfo?.userdetails[key])) {
          status = true;
        } else {
          status = false

        }
      }
    })

    if (status) {
      setShowLogin(status);
    } else {
      if (g_investment.type === globalConstant.SIP_INVESTMENT) {
        // props?.saveMutualFundGenerate(12, "/mflist");
        // navigate("/mflist", {});
        if (props?.saveMutualFundGenerate) props?.saveMutualFundGenerate(12, "/SipComparison");
        // navigate("/SipComparison", {});
      } else if (g_investment.type === globalConstant.LUMPSUM_INVESTMENT) {
        if (props?.saveMutualFundGenerate) props?.saveMutualFundGenerate(11, "/onetimemutualfundrecommendation");
        // navigate("/onetimemutualfundrecommendation", {});
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
      <ModalInvestNow
        open={showLogin}
        close={() => setShowLogin(false)}
      />
    </>
  );
};
