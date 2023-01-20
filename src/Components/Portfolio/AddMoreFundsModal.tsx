import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, styled } from "@mui/system";
import {
  CircularProgress,
  Grid,
  Modal,
  Theme,
  Typography,
} from "@mui/material";

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FooterBtnWithBox from "../CommonComponents/FooterBtnWithBox";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";
import LoopIcon from "@mui/icons-material/Loop";
import Divider from "@mui/material/Divider";
import { maskgroup, SuccessLogo } from "../../Assets";
import { globalConstant } from "../../Utils/globalConstant";
import { checkExpirationOfToken, isMultipleofNumber } from "../../Utils/globalFunctions";
import { setOrderSipThunk, setPlaceLumpsumOrderThunk } from "../../Store/Payments/thunk/payments-thunk";
import { apiResponse } from "../../Utils/globalTypes";
import { useDispatch } from "react-redux";
import { setTokenExpiredStatusAction } from "../../Store/Authentication/actions/auth-actions";
import { setLoadingAction } from "../../Store/Global/actions/global-actions";

const style = {
  button3: {
    height: "48px",
    boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
    backgroundColor: "#23db7b",
    marginBottm: "10px",
    width: "100%",
    maxWidth: "400px",
  } as React.CSSProperties,

  text: {
    color: "white",
  },
};

const useStyles: any = makeStyles((theme: Theme) => ({
  flexCommon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  termInsuranceCard: {
    backgroundColor: "var(--uiWhite)",
    boxShadow: "var(--themeShadow)",
    padding: "20px 15px",
    borderRadius: "8px",
  },
  quickSelectWrapper: {
    padding: "0px",
    margin: "0px",
    display: "flex",
    flexWrap: "wrap",
    "& li": {
      listStyleType: "none",
      padding: "8px 10px",
      backgroundColor: "var(--blueColorOpacity)",
      margin: "5px 6px",
      borderRadius: "2px",
      color: "var(--ui1Color)",
      fontWeight: 500,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "var(--ui1Color)",
        color: "var(--uiWhite)",
      },
    },
  },
  premiumAmountFooter: {
    backgroundColor: "var(--uiWhite)",
    boxShadow: "var(--themeShadow)",
    padding: "15px",
    marginBottom: "-16px",
    marginLeft: "-16px",
    marginRight: "-16px",
  },
  premiumAmountBox: {
    backgroundColor: "var(--lightGreenColor)",
    padding: "45px 15px",

    position: "absolute",
    top: "calc(-100% - 38px)",
    zIndex: "-1",
    borderRadius: "20px",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  popHeading: {
    textAlign: "left",
  },
  radioGroup: {
    marginBottom: "24px !important",
    "& label": {
      "@media(max-width: 400px)": {
        width: "100%",
        display: "block",
        margin: "5px 0px",
        "&>*": {
          width: "100%",
        },
      },
    },
  },
  genderBtn: {
    "&:hover": {
      border: "1px solid var(--primaryColor) !important",
      backgroundColor: "rgba(35, 219, 123, 0.12) !important",
      color: "var(--primaryColor) !important",
    },
  },
  showPlanBtn: {
    backgroundColor: "var(--primaryColor) !important",
    color: "var(--uiWhite) !important",
    borderRadius: "0px !important",
  },
  showPlanThankuDetail: {
    textAlign: "center",

    "& p": {
      margin: "3px 0px",
    },
  },
  noClickBackdrop: {
    pointerEvents: "none",
  },
  borderAndTextErrorColor: {
    borderColor: "#d32f2f !important",
    color: "#d32f2f !important",
  },
  borderAndTextErrorColorRemove: {
    border: "1px solid var(--primaryColor) !important",
    backgroundColor: "rgba(35, 219, 123, 0.12) !important",
    color: "var(--primaryColor) !important",
  },
}));
interface genderProp {
  prop: string;
  errorShow: boolean;
  selectoin: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  errorRemove: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: string;
}

const RadioCmp = (props: genderProp) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="outlined"
        style={{
          color: "var(--typeIndigoColor)",
          fontSize: "var(--fontSize14)",
          border: "1px solid var(--typeLighterGrey)",
          boxShadow: "var(--themeShadow)",
          padding: "6px 5px",
          lineHeight: "1.4",
          margin: "0px 6px",
          borderRadius: "8px",
          width: "100%",
        }}
        className={`${classes.genderBtn} ${props.errorShow && classes.borderAndTextErrorColor
          } ${props.value === props.selectedItem
            ? classes.borderAndTextErrorColorRemove
            : ""
          }`}
        onClick={() => {
          console.log(props);
          props.errorRemove(false);
          props.selectoin(props.value);
        }}
      >
        {props?.prop}
      </Button>
    </div>
  );
};

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}


const AddMoreFundsModal = (props: any) => {
  const theme = useTheme();
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [sid, setSID] = React.useState<Dayjs | null>(null);
  const [sidError, setSidError] = useState<string>("");
  const [monthlyAmount, setMonthlyAmount] = useState<number>(0);
  const [oneTimeAmount, setOneTimeAmount] = useState<number>(0);
  const [dateConfirmModal, setDateConfirmedModal] = useState<boolean>(false);
  const [showPlanDetailSubmit, setShowPlanDetailSubmit] = useState<boolean>(false);
  const [quickPickAmount, setQuickPickAmount] = useState<number[]>([1000, 5000, 10000]);
  const [activeInvestmentType, setActiveInvestmentType] = useState<string>(globalConstant.LUMPSUM_INVESTMENT);

  useEffect(() => {
    setError("")
  }, [activeInvestmentType])


  const handleAmount = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    let { value, name } = e.target

    let nVal: number = parseFloat(value);

    setError("");

    if (!value) return;

    if (name === globalConstant.LUMPSUM_INVESTMENT) {
      setOneTimeAmount(nVal);
    } else {
      setMonthlyAmount(nVal);
    }

    if (!isMultipleofNumber(nVal, 100)) {
      setError("Amount should be multiple of 100")
    } else {
      setError("");
    }
  };

  const handleActivePriceAmount = (nAmount: number) => {
    setMonthlyAmount((prev: number) => prev + nAmount);
  }

  const handlesubmitDetail = () => {
    let objBody: any = {
      funds: [
        {
          fund_id: props?.fundId,
          amount: activeInvestmentType === globalConstant.LUMPSUM_INVESTMENT ? oneTimeAmount.toString() : monthlyAmount.toString()
        }
      ]
    }
    if (activeInvestmentType === globalConstant.LUMPSUM_INVESTMENT) {
      if (!oneTimeAmount) {
        setError("Please enter One-time lumpsum amount!");
        return;
      }

      handleOrderOneTimeInvestment(objBody);
    } else {
      if (!monthlyAmount) {
        setError("Please enter monthly investment amount!");
        return;
      }

      if (!sid) {
        setSidError("Please enter SIP date!");
        return;
      }

      objBody["sipstartday"] = 0
      handleOrderSipInvestment(objBody);
    }
  };

  const handleOrderOneTimeInvestment = async (objBody: any) => {
    setLoading(true);
    let res: apiResponse = await setPlaceLumpsumOrderThunk(objBody);

    if (handleApiResponse(res)) {
      setError("Internal Server Error!")
      return;
    }

    navigate("/payusingnetbanking");
  }


  const handleOrderSipInvestment = async (objBody: any) => {
    setLoading(true);
    let res: apiResponse = await setOrderSipThunk(objBody);

    if (handleApiResponse(res)) {
      setSidError("Internal Server Error!")
      return;
    }

    setDateConfirmedModal(true);
  }

  const handleApiResponse = (res: apiResponse) => {

    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (checkExpirationOfToken(res?.code)) {
      dispatch(setTokenExpiredStatusAction(true));
      return true;
    }

    if (res?.error) {
      return true;
    }

    return false;
  }


  return (
    <div>
      <Dialog
        open={props?.open}
        fullScreen={fullScreen}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
        sx={{ width: { xs: "100%", sm: "400px", margin: "auto" } }}
        className={`${showPlanDetailSubmit && classes.noClickBackdrop}`}
        disableEscapeKeyDown
      >
        {
          loading ?
            <div className={classes.showPlanThankuDetail}>
              <Box sx={{ display: "flex" }}>
                <CircularProgress />
                <p
                  style={{
                    color: "var(--typeIndigoColor)",
                    fontSize: "var(--subTitleFontSize)",
                  }}
                >
                  SprintMoney is processing your investment account...
                </p>
              </Box>
            </div> :
            <>
              <DialogTitle
                style={{
                  cursor: "move",
                  textAlign: "end",
                  paddingBottom: "0px",
                  paddingTop: "6px",
                  paddingRight: "0px",
                }}
                id="draggable-dialog-title"
              >
                <Button
                  style={{ color: "var(--typeIndigoColor)" }}
                  autoFocus
                  onClick={props?.close}
                >
                  <CloseIcon />
                </Button>
              </DialogTitle>
              <DialogContent>

                <div className={classes.showPlanDialogWrapper}>
                  <Grid container spacing={0}>
                    <Grid item xs={4}>
                      <Box
                        sx={{
                          height: "45px",
                          border: "solid 1px #d1d6dd",
                          width: "46px",
                          borderRadius: "50%",
                        }}
                      >
                        <img
                          style={{ height: "40px", width: "43px" }}
                          src={maskgroup}
                        />
                      </Box>
                    </Grid>

                    <Grid item xs={8}>
                      <div className={classes.popHeading}>
                        <b
                          style={{
                            fontSize: "9px",
                            marginBottom: "0px",
                            color: "#6c63ff",
                            textAlign: "left",
                          }}
                        >
                          Add More funds to{" "}
                        </b>
                        <br />
                        <b
                          style={{
                            color: "#3c3e42",
                            fontWeight: 500,
                            fontSize: "14px",
                            marginTop: "5px",
                            height: "34px",
                          }}
                        >
                          {/* Axis Small Cap Fund Regular Growth Fund */}
                          {props?.fundname}
                        </b>
                      </div>
                    </Grid>
                  </Grid>

                  <Divider sx={{ marginTop: "10px" }} />
                  <FormControl
                    sx={{ marginTop: "10px" }}
                    className={classes.radioGroup}
                    fullWidth
                  >
                    <Button
                      onClick={() => setActiveInvestmentType(globalConstant.LUMPSUM_INVESTMENT)}
                      style={{
                        cursor: "pointer",
                        border: `1px solid ${activeInvestmentType === globalConstant.LUMPSUM_INVESTMENT ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`,
                        borderRadius: "8px",
                        backgroundColor: `${activeInvestmentType === globalConstant.LUMPSUM_INVESTMENT ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`,
                        textAlign: "center",
                        padding: "12px 14px"
                      }}
                    >
                      <Typography style={{ fontWeight: "500", color: `${activeInvestmentType === globalConstant.LUMPSUM_INVESTMENT ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>
                        One-Time
                      </Typography>

                    </Button>
                    <Button
                      onClick={() => setActiveInvestmentType(globalConstant.SIP_INVESTMENT)}
                      style={{
                        cursor: "pointer",
                        border: `1px solid ${activeInvestmentType === globalConstant.SIP_INVESTMENT ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`,
                        borderRadius: "8px",
                        backgroundColor: `${activeInvestmentType === globalConstant.SIP_INVESTMENT ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`,
                        textAlign: "center",
                        padding: "12px 14px"
                      }}
                    >
                      <Typography style={{ fontWeight: "500", color: `${activeInvestmentType === globalConstant.SIP_INVESTMENT ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>
                        Monthly
                      </Typography>
                    </Button>
                  </FormControl>
                  <FormControl className={classes.radioGroup} fullWidth>
                    {
                      activeInvestmentType === globalConstant.LUMPSUM_INVESTMENT ?
                        <TextField
                          fullWidth
                          id="fullWidth"
                          name={globalConstant.LUMPSUM_INVESTMENT}
                          value={oneTimeAmount}
                          onChange={handleAmount}
                          sx={{ color: "#919eb1", fontSize: "17px" }}
                          label="Enter Lumpsum Investment Amount"
                          onKeyPress={(e) =>
                            /[^(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$]$/.test(e.key) &&
                            e.preventDefault()
                          }
                          inputProps={{
                            maxLength: 11,
                          }}
                        //  onChange={(newValue) => setTFValue(newValue.target.value)}
                        />
                        : <>
                          <TextField
                            fullWidth
                            id="fullWidth"
                            name={globalConstant.SIP_INVESTMENT}
                            value={monthlyAmount}
                            onChange={handleAmount}
                            sx={{ color: "#919eb1", fontSize: "17px" }}
                            label="Enter Monthly Amount"
                            onKeyPress={(e) =>
                              /[^(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$]$/.test(e.key) &&
                              e.preventDefault()
                            }
                            inputProps={{
                              maxLength: 11,
                            }}
                          //  onChange={(newValue) => setTFValue(newValue.target.value)}
                          />
                        </>
                    }

                    {
                      error ?
                        <Typography component="span" sx={{ color: "red", fontSize: "15px" }}>
                          {error}
                        </Typography>
                        : ""
                    }

                  </FormControl>
                  {
                    activeInvestmentType === globalConstant.SIP_INVESTMENT ?
                      <>
                        <Box sx={{ paddingTop: "0px" }}>
                          <ul className={classes.quickSelectWrapper}>
                            {quickPickAmount.map((item, index) => (
                              <li key={index} onClick={() => handleActivePriceAmount(item)} style={{ marginTop: "-7%" }}>
                                +{item}
                              </li>
                            ))}
                          </ul>
                        </Box>&nbsp;
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DatePicker
                            label="SIP Installment Date"
                            value={sid}
                            onChange={(newValue) => {
                              setSID(newValue);
                              setSidError("");
                            }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                style={{ marginBottom: "3%" }}
                                // error={sidError ? true : false}
                                fullWidth
                              />
                            )}
                          />
                        </LocalizationProvider>
                        {
                          sidError ?
                            <Typography component="span" sx={{ color: "red", fontSize: "12px", marginBottom: "3%" }}>
                              {sidError}
                            </Typography>
                            : ""
                        }
                      </> : null
                  }

                  <Button
                    sx={{ borderRadius: "8px !important" }}
                    autoFocus
                    onClick={handlesubmitDetail}
                    className={classes.showPlanBtn}
                    fullWidth
                  >
                    Buy Now
                  </Button>
                </div>
              </DialogContent>
            </>
        }
      </Dialog>


      {
        activeInvestmentType === globalConstant.SIP_INVESTMENT ?
          <Modal
            open={dateConfirmModal}
            onClose={() => setDateConfirmedModal(false)}
          >
            <Box
              style={{
                height: "-webkit-fill-available",
                width: "90%",
                maxWidth: "330px",
                borderRadius: "8px 8px 0px 0px",
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
              <Box
                my={2}
                style={{
                  paddingTop: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
              >
                <img
                  src={SuccessLogo}
                  style={{ width: "90px", color: "white", paddingTop: "29px" }}
                />
              </Box>
              <Typography
                style={{
                  paddingTop: "53px",
                  fontSize: "24px",
                  color: "#3c3e42",
                  fontWeight: "500",
                }}
              >
                Date Confirmed
              </Typography>
              <Typography
                mx={2}
                mb={4}
                style={{
                  fontSize: "12px",
                  color: "#7b7b9d",
                  textAlign: "center",
                  fontWeight: "500",
                }}
              >
                {/* Your monthly SIP date is 08th of every month. */}
                Your monthly SIP date is 08th of every month.
              </Typography>
              <Button
                variant="contained"
                style={style.button3}
                fullWidth
                onClick={() => {
                  navigate("/payusingnetbanking");
                }}
              >
                <Typography style={style.text} className="largeButtonText">
                  {" "}
                  Continue to Payment
                </Typography>
              </Button>
            </Box>
          </Modal>
          : null
      }
    </div>
  );
};

export default AddMoreFundsModal;
