import React, { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

//global constant and function imports
import siteConfig from "../../Utils/siteConfig";
import { apiResponse } from "../../Utils/globalTypes";
import { customParseJSON, hideNumbersWithStars } from "../../Utils/globalFunctions";
import { checkExpirationOfToken } from "../../Utils/globalFunctions";
import { enumPaymentModes, paymentMethodKeys, paymentMethods } from "../../Utils/globalConstant";
import { setTokenExpiredStatusAction } from "../../Store/Authentication/actions/auth-actions";
import { setMakePaymentThunk, setVerifyUpiIDThunk } from "../../Store/Payments/thunk/payments-thunk";

//CSS imports
import "./NetBanking.css";
import { Active_Upi, ContactError, hdfclogo, Logo, Profile, Radiobutton, SIP, upilogo, validMobile, } from "../../Assets/index";

//Components imports
import UpiMainCom from "./Upi/UpiMainCom";
import NetBankingButton from "../Buttons/NetBankingButton";
import MakepaymentNetbankingbutton from "../../Modules/Buttons/MakepaymentNetbankingbutton";

//MUI imports
import Card from "@mui/material/Card";
import Link from "@mui/material/Link";
import { TextField, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box, styled } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import { AppBar, Button, Theme } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled, } from "@mui/base";
import { Breadcrumbs, Checkbox, Container, FormControlLabel, Grid, InputAdornment, Modal, Typography, } from "@mui/material";
import { Assessment, ErrorOutline, Home as HomeIcon, InfoRounded, RadioButtonChecked, RadioButtonUncheckedOutlined, Search } from "@mui/icons-material";
import Sidebar from "../../Components/CommonComponents/Sidebar";
import Navbar from "../../Components/CommonComponents/Navbar";
import ClearIcon from "@mui/icons-material/Clear";

const StyledMenuItem = styled(MenuItemUnstyled)(
  ({ theme: Theme }) => `
  list-style: none;
  border-radius: 8px;
  width: 300px;
  boxSizing: border-box;
  zIndex: 4000;
  &.${menuItemUnstyledClasses.focusVisible} {
    outline: none;
  }
  `
);

const useStyles: any = makeStyles((theme: Theme) => ({
  appbar: {
    backgroundColor: "white",
    width: "100%",
    height: "64px",
    position: "fixed",
    zIndex: "3000",
  },
}));

const style = {
  main: {
    boxSizing: "border-box",
    backgroundColor: "#f9f9f9",
    height: "100vh",
  } as React.CSSProperties,
  drawer: {
    zIndex: "500",
    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
  } as React.CSSProperties,
  image: {
    width: "176px",
  } as React.CSSProperties,
  profileContainer: {
    borderRadius: "8px",
    border: "solid 1px #4f46de",
    backgroundColor: "#6c63ff",
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
    cursor: "pointer",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  profile: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "1px solid white",
  },
  profileInter: {
    width: "40px",
    height: "40px",
    border: "solid 1px rgba(75, 123, 236, 0.49)",
    borderRadius: "50%",
  },
  menuContainer: {
    boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.12)",
    boxSizing: "border-box",
    padding: "10px",
    backgroundColor: "white",
    marginRight: "20px",
  } as React.CSSProperties,
  menuButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0px",
  } as React.CSSProperties,
  menuText: {
    color: "black",
    fontSize: "10px",
    fontWeight: "500",
    padding: "5px 10px",
    borderRadius: "4px",
    backgroundColor: "#ffc300",
    cursor: "pointer",
  },
  menuText2: {
    padding: "6px 12px",
    borderRadius: "4px",
    border: "solid 1px #23db7b",
    backgroundColor: "rgba(35, 219, 123, 0.12)",
    fontSize: "12px",
    fontWeight: "500",
    color: "#09b85d",
    cursor: "pointer",
  },
  divider: {
    width: "100%",
    height: ".2px",
    padding: ".2px",
    backgroundColor: "#d1d6dd",
    opacity: "0.34",
  },
  button: {
    height: "48px",
    borderRadius: "8px",
    boxShadow: "none",
    backgroundColor: "white",
    textAlign: "left",
    justifyContent: "flex-start",
  } as React.CSSProperties,
  menuIcon: {
    color: "#6c63ff",
    fontSize: "24px",
  },
  appBar: {
    backgroundColor: "white",
  },
};

const initialPaymentModeStructure = [enumPaymentModes.NETBANKING, enumPaymentModes.NEFT, enumPaymentModes.UPI];

const NetBanking = () => {
  const classes = useStyles();
  const refContainer = useRef();
  const location: any = useLocation();
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const timerRef: any = useRef();

  const cardType: any = useMemo(() => { return location?.state?.cardType; }, []);
  const userInfo: any = useMemo(() => { return customParseJSON(localStorage.getItem(siteConfig.USER_INFO)) }, []);

  const g_initialPaymentData = useSelector((state: any) => state?.paymentsReducer?.initialPaymentData?.data);

  const [upiId, setUpiId] = useState<string>("");
  const [opneBankAccmodal, setOpenBankAccmodal] = useState<boolean>(false);
  const [shouldUPIVerified, setShouldUPIVerified] = useState<boolean>(false);
  const [activePaymentModes, setActivePaymentMode] = useState<number[]>(initialPaymentModeStructure);
  const [timePeriodSelected, setTimePeriodSelected] = useState<boolean[]>([true, false, false]);
  const [paymentMode, setPaymentMode] = useState<number>(paymentMethods[paymentMethodKeys.NET_BANKING]["id"]);

  // const bankDetails: any = useMemo(() => { return localStorage.getItem(siteConfig.USER_INFO)?.kycdetails?.bankdetails }, []);

  const g_userProfileData = useSelector((state: any) => state?.authReducer?.profile?.data);
  const objBankDetails: { bankname: string, accountholdername: string, accountnumber: string, ifsc: string, accounttype: string } = useMemo(() => {
    return {
      bankname: g_userProfileData?.userdetails?.bankname ? g_userProfileData?.userdetails?.bankname : "",
      accountholdername: g_userProfileData?.kycdetails?.bankdetails?.accountholdername ? g_userProfileData?.kycdetails?.bankdetails?.accountholdername : "",
      accountnumber: g_userProfileData?.kycdetails?.bankdetails?.accountnumber ? g_userProfileData?.kycdetails?.bankdetails?.accountnumber : "",
      ifsc: g_userProfileData?.kycdetails?.bankdetails?.ifsc ? g_userProfileData?.kycdetails?.bankdetails?.ifsc : "",
      accounttype: g_userProfileData?.kycdetails?.bankdetails?.accounttype ? g_userProfileData?.kycdetails?.bankdetails?.accounttype : ""
    }
  }, [g_userProfileData])

  useEffect(() => {
    console.log(g_initialPaymentData, "netbankng.tsx :: useeffect of g_initialPaymentData");
    if (g_initialPaymentData) {
      let { paymentModes } = g_initialPaymentData;
      if (paymentModes && paymentModes.length) {
        setActivePaymentMode(paymentModes);
      } else {
        setActivePaymentMode(initialPaymentModeStructure);
      }
    }
  }, [g_initialPaymentData]);

  useEffect(() => {
    if (upiId.length > 5) {
      setShouldUPIVerified(true);
    } else {
      setShouldUPIVerified(false);
    }
  }, [upiId])

  const handleMakePayment = async () => {
    console.log("handleMakePayment()");

    let objBody: any = {
      order_id: g_initialPaymentData?.orderId,
      paymentmode: paymentMode
    }

    if (upiId && upiId.length) {
      objBody["upiid"] = upiId;
    }



    let res: apiResponse = await setMakePaymentThunk(objBody);

    console.log(res);


  }

  const handleApiResponse = (res: apiResponse) => {
    if (checkExpirationOfToken(res?.code)) {
      dispatch(setTokenExpiredStatusAction(true));
      return;
    }

    if (res?.error === true) {
      return;
    }


  }

  const handleTimePeriodChange = (item: number) => {

    console.log(item);
    let arrTimePeriodSelected: boolean[] = [...timePeriodSelected];

    switch (item) {
      case enumPaymentModes.NETBANKING: {
        arrTimePeriodSelected = [true, false, false];
        setPaymentMode(paymentMethods[paymentMethodKeys.NET_BANKING]["id"]);
        break;
      }
      case enumPaymentModes.NEFT: {
        arrTimePeriodSelected = [false, true, false];
        setPaymentMode(paymentMethods[paymentMethodKeys.NEFT_RTGS]["id"]);
        break;
      }
      case enumPaymentModes.UPI: {
        arrTimePeriodSelected = [false, false, true];
        setPaymentMode(paymentMethods[paymentMethodKeys.UPI]["id"]);
        break;
      }
    }

    setTimePeriodSelected(arrTimePeriodSelected);
  };

  const verifyUPIIdFromApi = async (value: string) => {

    if (!value) return;
    let res: any = await setVerifyUpiIDThunk({
      "vpa": value
    })

    console.log(res);
  }

  const handleTimer = (cb: any | void, a: any) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      cb(a);
    }, 200);
  }

  return (
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0} sx={{ height: "100vh" }}>
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>
          <Grid container xs={13} sm={11} md={10} sx={{
            height: "100vh",
            overflow: "scroll",
            width: "100%",
            display: "block",
            justifyContent: "center",
          }}>
            <Toolbar />
            <Grid container>
              <Box role="presentation" className="boxBreadcrumb" sx={{ margin: "27px 0px 21px 25px" }}>
                {/* <Breadcrumbs aria-label="breadcrumb">
                  <Link
                    color="#6495ED"
                    underline="always"
                    href="Home"
                    sx={{ fontSize: "12px", width: "100%" }}
                  >
                    <Typography className="burgerText"> Home</Typography>
                  </Link>

                  <Link
                    underline="always"
                    sx={{ fontSize: "12px", width: "100%" }}
                  >
                    <Typography className="burgerText">Investment</Typography>
                  </Link>

                  <Link
                    underline="always"
                    sx={{ fontSize: "12px", width: "100%" }}
                    href="/investnowscreen"
                  >
                    <Typography className="burgerText">
                      One-time lumpsum
                    </Typography>
                  </Link>
                  <Link
                    underline="always"
                    sx={{ fontSize: "12px", width: "100%" }}
                    href="/mflist"
                  >
                    <Typography className="burgerText">
                      Mutual Fund Recommendation
                    </Typography>
                  </Link>
                  <Link
                    underline="none"
                    color="#878782"
                    sx={{ fontSize: "12px", width: "100%" }}
                  >
                    <Typography className="burgerText">
                      Select a payment option
                    </Typography>
                  </Link>
                </Breadcrumbs> */}
              </Box>
            </Grid>
            <Box className="BoxPadding" >
              <Card sx={{ maxWidth: 456, marginTop: "-28px", marginBottom: "60px" }}>
                <Typography
                  style={{
                    marginLeft: "5%",
                    fontSize: "16px",
                    marginTop: "5%",
                    fontWeight: "500",
                    height: "19px",
                  }}
                >
                  Select a payment option
                </Typography>

                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: "10px",
                  }}
                >
                  {
                    activePaymentModes &&
                      activePaymentModes.length ?
                      <>
                        {activePaymentModes[0] === enumPaymentModes.NETBANKING ?
                          <>
                            <CardHeader
                              avatar={
                                <FormControlLabel
                                  sx={{}}
                                  control={
                                    <Checkbox
                                      onChange={() => handleTimePeriodChange(enumPaymentModes.NETBANKING)}
                                      checked={timePeriodSelected[paymentMethods[paymentMethodKeys.NET_BANKING]["index"]]}
                                      icon={
                                        <RadioButtonUncheckedOutlined
                                          style={{ color: "#23db7b" }}
                                        />
                                      }
                                      checkedIcon={
                                        <RadioButtonChecked
                                          style={{ color: "#23db7b" }}
                                        />
                                      }
                                    />
                                  }

                                  label={paymentMethods[paymentMethodKeys.NET_BANKING]["title"]}
                                />
                              }
                              action={
                                <Box onClick={() => navigate("/vp")}>
                                  <img
                                    src={hdfclogo}
                                    alt="sprint-money"
                                    style={{
                                      width: "29.1px",
                                      height: "29.4px",
                                      marginTop: "15px",
                                    }}
                                  />
                                </Box>
                              }
                              sx={{
                                fontSize: "14px",
                                fontWeight: "500",
                                color: "#3c3e42",
                              }}
                            />
                            <p style={{ marginLeft: "10%", marginTop: "-5.5%" }}>
                              {hideNumbersWithStars(userInfo ? userInfo?.kycdetails?.bankdetails?.accountnumber : "")}
                            </p>
                            <Box style={style.divider}></Box>
                          </>
                          : null}

                        {

                          activePaymentModes[1] === enumPaymentModes.NEFT ?
                            <>
                              <CardHeader
                                avatar={
                                  <FormControlLabel
                                    sx={{}}
                                    control={
                                      <Checkbox
                                        onChange={() => handleTimePeriodChange(enumPaymentModes.NEFT)}
                                        // checked={timePeriodSelected[2]}
                                        checked={timePeriodSelected[paymentMethods[paymentMethodKeys.NEFT_RTGS]["index"]]}
                                        icon={
                                          <RadioButtonUncheckedOutlined
                                            style={{ color: "#23db7b" }}
                                          />
                                        }
                                        checkedIcon={
                                          <RadioButtonChecked
                                            style={{ color: "#23db7b" }}
                                          />
                                        }
                                      />
                                    }
                                    // label="NEFT/RTGS"
                                    label={paymentMethods[paymentMethodKeys.NEFT_RTGS]["title"]}
                                  />
                                }
                                action={
                                  <Box>
                                    <img
                                      src={hdfclogo}
                                      alt="sprint-money"
                                      style={{
                                        width: "29.1px",
                                        height: "29.4px",
                                        marginTop: "15px",
                                      }}
                                    />
                                  </Box>
                                }
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: "500",
                                  color: "#3c3e42",
                                }}
                              />
                              <p style={{ marginLeft: "10%", marginTop: "-5.5%" }}>
                                {/* 4825 ********** 25 */}
                                {hideNumbersWithStars(userInfo ? userInfo?.kycdetails?.bankdetails?.accountnumber : "")}
                              </p>
                              <Box style={style.divider}></Box>

                              <Box style={style.divider}></Box>
                            </>
                            : null
                        }

                        {

                          activePaymentModes[2] === enumPaymentModes.UPI ?
                            <>
                              <CardHeader
                                avatar={
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        onChange={() => handleTimePeriodChange(enumPaymentModes.UPI)}
                                        checked={timePeriodSelected[paymentMethods[paymentMethodKeys.UPI]["index"]]}
                                        icon={
                                          <RadioButtonUncheckedOutlined
                                            style={{ color: "#23db7b" }}
                                          />
                                        }
                                        checkedIcon={
                                          <RadioButtonChecked
                                            style={{ color: "#23db7b" }}
                                          />
                                        }
                                      />
                                    }
                                    // label="UPI"
                                    label={paymentMethods[paymentMethodKeys.UPI]["title"]}
                                  />
                                }
                                action={
                                  <IconButton
                                    aria-label="UPILOGO"
                                    sx={{
                                      width: "44.1px",
                                      height: " 35px",
                                    }}
                                  >
                                    <img
                                      src={Active_Upi}
                                      alt="S__M"
                                      style={{
                                        width: "44px",
                                        height: "35px",
                                        marginTop: "15px",
                                      }}
                                    />
                                  </IconButton>
                                }
                                sx={{
                                  color: "#7b7b9d",
                                  fontSize: "14px",
                                  fontWeight: "500",
                                }}
                              />
                              {
                                timePeriodSelected[paymentMethods[paymentMethodKeys.UPI]["index"]] === true ?
                                  <>
                                    <p style={{ marginLeft: "10%", marginTop: "-5.5%" }}>
                                      Saved UPI Options
                                    </p>

                                    <TextField
                                      value={upiId}
                                      onChange={(e: any) => {
                                        setUpiId(e.target.value);
                                        handleTimer(verifyUPIIdFromApi, e.target.value)
                                      }}
                                      InputProps={{
                                        endAdornment: shouldUPIVerified ? (
                                          <InputAdornment sx={{ paddingRight: "8px ! important" }} position="end">
                                            {" "}
                                            <img src={validMobile} width="22px" alt="Cross" />{" "}
                                          </InputAdornment>
                                        ) : (
                                          <InputAdornment sx={{ paddingRight: "8px ! important" }} position="end">
                                            {" "}
                                            <img src={ContactError} width="22px" alt="Cross" />{" "}
                                          </InputAdornment>
                                        ),
                                        // endAdornmentt :  error?.includes("Login_Contact") ? <InputAdornment position="end"> <img src={validMobile} width="22px" alt="Cross"/> </InputAdornment> : ""
                                      }}

                                      sx={{ width: "80%", margin: "5%" }}
                                    />
                                    {/* <Box sx={{ marginLeft: "20px" }}>
                          <UpiMainCom />
                        </Box> */}

                                  </>
                                  : null
                              }
                            </>
                            : null
                        }

                      </> : null
                  }
                  {/* <Box style={{ paddingLeft: "16px" }}> */}



                </Box>
              </Card>
              <Box>
                <NetBankingButton
                  totalAmount={g_initialPaymentData?.totalAmount ? g_initialPaymentData?.totalAmount : ""}
                  onClick={() => {
                    if (timePeriodSelected[paymentMethods[paymentMethodKeys.UPI]["index"]] === true) {
                      if (upiId && upiId.length && shouldUPIVerified) {
                        navigate("/processingpayments", {
                          state: { cardType: cardType },
                          replace: true,
                        });
                      }
                      return;
                    }
                    setOpenBankAccmodal(true);

                    handleMakePayment();
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>




      <Modal open={opneBankAccmodal}>
        <Box
          style={{
            width: "90%",
            maxWidth: "330px",
            borderRadius: "8px",
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
          <Grid
            container
            xs={12}
            style={{ backgroundColor: "white", width: "100%", display: "flex" }}
          >
            <Grid item xs={8}>
              <CardHeader
                avatar={
                  <Box
                    onClick={() => {
                      if (timePeriodSelected[paymentMethods[paymentMethodKeys.NET_BANKING]["index"]] === true) {
                        navigate("/sipsuccessscreen")
                        return;
                      }

                      navigate("/processingpayments", {
                        state: { cardType: cardType },
                        replace: true,
                      })
                    }
                    }
                  >
                    <img
                      src={hdfclogo}
                      alt="sprint-money"
                      style={{
                        width: "29.1px",
                        height: "29.4px",
                      }}
                    />
                  </Box>
                }
                action={""}
                title="NEFT/RTGS"
                subheader="4825 ********** 25"
                sx={{ fontSize: "14px", fontWeight: "500", color: "#3c3e42" }}
              />
            </Grid>

            <Grid
              sx={{
                display: "contents",
                position: " absolute",
              }}
              item
              xs={4}
            >
              <Box
                sx={{ margin: { xs: "12px 0px 8px 60px", sm: "12px 0px 8px 73px" } }}
                onClick={() => setOpenBankAccmodal(false)}
              >
                <ClearIcon />
              </Box>
            </Grid>
          </Grid>

          <Box style={{ backgroundColor: "#6c63ff", width: "100%" }}>
            <Typography
              style={{ fontSize: "14px", color: "white", padding: "10px 20px" }}
            >
              Transfer ₹{g_initialPaymentData?.totalAmount ? g_initialPaymentData?.totalAmount : ""} to below account
            </Typography>
          </Box>
          <Grid
            container
            xs={12}
            style={{ backgroundColor: "white", width: "100%" }}
          >
            <Grid item xs={6}>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#7d7d9e",
                  padding: "10px 20px",
                }}
              >
                Bank Name
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#3c3e42",
                  padding: "10px 20px",
                }}
              >
                {objBankDetails.bankname}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", width: "100%" }}
          >
            <Grid item xs={6}>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#7d7d9e",
                  padding: "10px 20px",
                }}
              >
                Account Name
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#3c3e42",
                  padding: "10px 20px",
                }}
              >
                {objBankDetails.accountholdername}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            style={{ backgroundColor: "white", width: "100%" }}
          >
            <Grid item xs={6}>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#7d7d9e",
                  padding: "10px 20px",
                }}
              >
                Account Type
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#3c3e42",
                  padding: "10px 20px",
                }}
              >
                {objBankDetails.accounttype} Account
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", width: "100%" }}
          >
            <Grid item xs={6}>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#7d7d9e",
                  padding: "10px 20px",
                }}
              >
                Account Number
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#3c3e42",
                  padding: "10px 20px",
                }}
              >
                {objBankDetails.accountnumber}
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            xs={12}
            style={{ backgroundColor: "white", width: "100%" }}
          >
            <Grid item xs={6}>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#7d7d9e",
                  padding: "10px 20px",
                }}
              >
                IFSC Code
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#3c3e42",
                  padding: "10px 20px",
                }}
              >
                {objBankDetails.ifsc}
              </Typography>
            </Grid>
          </Grid>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              padding: "10px 20px",
            }}
          >
            <InfoRounded
              style={{ color: "#6c63ff", width: "20px" }}
            ></InfoRounded>
            <Typography style={{ fontSize: "10px", color: "#919eb1" }}>
              The transaction will be processed once BSE Star MF gets money from
              your bank. Your transaction will be cancelled if the money isn’t
              received within 5 working days.
            </Typography>
          </Box>

          <Grid container spacing={0}>
            <Grid xs={12} sx={{ textAlign: "center" }}>
              <Button
                fullWidth
                onClick={() => {

                  if (timePeriodSelected[paymentMethods[paymentMethodKeys.NET_BANKING]["index"]] === true) {
                    navigate("/sipsuccessscreen")
                    return;
                  }

                  navigate("/processingpayments", {
                    state: { cardType: cardType },
                    replace: true,
                  })
                }
                }
                sx={{
                  backgroundColor: " #23db7b",
                  ml: 1,
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#23db7b",
                  },
                  padding: "10px 32px 9px",
                  borderRadius: " 4px",
                  marginLeft: "0px"

                }}
              >
                <Typography
                  sx={{
                    color: "white",

                  }}
                >
                  Proceed
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}

export default NetBanking;
