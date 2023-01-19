import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import RedeemFundsCard from './RedeemFundsCard';
import { RedeemFundData } from './RedeemFundData'
import Sidebar from '../CommonComponents/Sidebar'
import Navbar from '../CommonComponents/Navbar'
import FullAmountCard from './FullAmountCard'
import SimpleModal from '../CommonModals/SimpleModal'
import RedeemNowButton from '../../Modules/Buttons/RedeemNowButton'
import FooterWithBtn from '../CommonComponents/FooterWithBtn'

import { rupconvie, rupreturnlogo } from '../../Assets/index'

import Link from '@mui/material/Link';
import { Box, styled } from '@mui/system'
import { Assessment, Home as HomeIcon, MenuRounded, PowerSettingsNew, RadioButtonChecked, RadioButtonUncheckedOutlined, Search, TextFields } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled } from '@mui/base';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { Breadcrumbs, Card, CardContent, Checkbox, Drawer as DrawerList, FormControlLabel, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'

import './RedeemFunds.css'
import { apiResponse, holdingList } from '../../Utils/globalTypes';
import { checkExpirationOfToken, isMultipleofNumber } from '../../Utils/globalFunctions';
import { setOrderToRedeemFundWrtUserInputThunk } from '../../Store/Payments/thunk/payments-thunk';
import { setTokenExpiredStatusAction } from '../../Store/Authentication/actions/auth-actions';
import { setOrderRedeemDataAction } from '../../Store/Payments/actions/payments-action';

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
    height: "100vh"
  } as React.CSSProperties,
  drawer: {
    zIndex: "500",
    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)"
  } as React.CSSProperties,
  image: {
    width: '176px',
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
    cursor: "pointer"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  profile: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "1px solid white"
  },
  RupConviestyle: {
    width: "40px",
    height: "40px",


  },

  RadioInter: {
    width: "22px",
    height: "22px",
    border: "solid 1px rgba(75, 123, 236, 0.49)",
    borderRadius: "50%",
    marginTop: "-40%"

  },
  RInter: {
    color: "#ffffff",
    width: "22px",
    height: "22px",
    border: "solid 1px rgba(75, 123, 236, 0.49)",
    borderRadius: "50%"
  },
  menuContainer: {
    boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.12)",
    boxSizing: "border-box",
    padding: "10px",
    backgroundColor: "white",
    marginRight: "20px"
  } as React.CSSProperties,
  menuButton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0px"
  } as React.CSSProperties,
  menuText: {
    color: "black",
    fontSize: "10px",
    fontWeight: "500",
    padding: "5px 10px",
    borderRadius: "4px",
    backgroundColor: "#ffc300",
    cursor: "pointer"
  },
  menuText2: {
    padding: "6px 12px",
    borderRadius: "4px",
    border: "solid 1px #23db7b",
    backgroundColor: "rgba(35, 219, 123, 0.12)",
    fontSize: "12px",
    fontWeight: "500",
    color: "#09b85d",
    cursor: "pointer"
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
    fontSize: "24px"
  },
  appBar: {
    backgroundColor: "white",
  },

  modalContainer: {
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  } as React.CSSProperties,
  logoIc: {
    width: "50px",
    padding: "20px 0px",
  },
  logoclose: {
    width: " 14px",
    height: "14px",
    // backgroundColor: "#8787a2",
    textAlign: "right",
    inlineSize: ""
  } as React.CSSProperties,

}

const enumRedeemPaymentMethod = {
  PARTIAL: 1,
  FULL: 2
}

const enumPartialSubType = {
  AMOUNT: 1,
  UNIT: 2
}

const initialReddemFundData: holdingList = {
  fundname: "",
  folio: "",
  fund_id: "",
  investedvalue: 0,
  XIRR: "",
  units: "",
  nav: "",
  currentvalue: "",
  absolutereturn: "",
  absolutereturninpercent: "",
  category: "",
  categorygroup: "",
  fundimage: "",
  rating: "",
  navdate: "",
  minredemptionqty: "",
  maxredemptionqty: "",
  minredemptionamount: "",
  maxredemptionamount: "",
  mobileno: "",
  email: ""
}

const RedeemFunds = () => {
  const classes = useStyles();
  const refContainer = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const selectedFundId: string = useMemo(() => { return location?.state?.selctedFundId }, []);
  const g_portfolioListDataInHoldings = useSelector((state: any) => state?.paymentsReducer?.portfolioListDataInHoldings?.data);

  const [error, setError] = useState<string>("");
  const [redeemUnits, setRedeemUnits] = useState<number>(0);
  const [bankModal, setBankModal] = useState<boolean>(false);
  const [redeemAmount, setRedeemAmount] = useState<number>(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [redeemFundDetails, setRedeemFundDetails] = useState<holdingList>(initialReddemFundData);
  const [activeRedeemType, setActiveRedeemType] = useState<number>(enumRedeemPaymentMethod.PARTIAL);
  const [activePartialSubType, setActivePartialSubType] = useState<number>(enumPartialSubType.AMOUNT);

  const objRedeemMinMaxData: any = useMemo(() => {
    return {
      minAmount: parseFloat(redeemFundDetails?.minredemptionamount),
      // maxAmount: parseFloat(redeemFundDetails?.maxredemptionamount),
      // maxAmount: parseFloat(redeemFundDetails?.currentvalue),
      maxAmount: redeemFundDetails?.investedvalue,
      minUnit: parseFloat(redeemFundDetails?.minredemptionqty),
      // maxUnit: parseFloat(redeemFundDetails?.maxredemptionqty)
      maxUnit: parseFloat(redeemFundDetails?.units)
    }
  }, [redeemFundDetails]);

  useEffect(() => {
    if (!g_portfolioListDataInHoldings) return;

    let { holdinglist } = g_portfolioListDataInHoldings;

    if (holdinglist && holdinglist.length) {
      let obj: holdingList = holdinglist.filter((item: holdingList) => item?.fund_id === selectedFundId)[0];
      if (obj) {
        setRedeemFundDetails(obj);
        setRedeemUnits(obj?.minredemptionqty ? parseFloat(obj?.minredemptionqty) : 0);
        setRedeemAmount(obj?.minredemptionamount ? parseFloat(obj?.minredemptionamount) : 0);
      } else setRedeemFundDetails(initialReddemFundData);
    } else {
      setRedeemFundDetails(initialReddemFundData);
    }

  }, [g_portfolioListDataInHoldings]);

  useEffect(() => {
    if (activeRedeemType === enumRedeemPaymentMethod.FULL) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [activeRedeemType]);

  useEffect(() => {
    setError("");
  }, [activePartialSubType]);

  useEffect(() => {
    // if (error && error.length) {
    //   setIsButtonDisabled(true);
    // } 

    // setIsButtonDisabled(false);

    //  else if (activePartialSubType === enumPartialSubType.AMOUNT) {
    //   if (redeemAmount) {
    //     setIsButtonDisabled(false);
    //   } else {
    //     setIsButtonDisabled(true);
    //   }
    // } else if (activePartialSubType === enumPartialSubType.UNIT) {
    //   if (redeemUnits) {
    //     setIsButtonDisabled(false);
    //   } else {
    //     setIsButtonDisabled(true);
    //   }
    // } else {
    //   setIsButtonDisabled(true);
    // }

  }, [error]);

  const handleOnChangeInputOfPartialSubType = (e: any) => {
    let { value, name } = e?.target;

    // if (!value) return;

    value = parseFloat(value);

    if (value < 0) return;

    if (name === "Amount") {
      setRedeemAmount(value);
    } else {
      setRedeemUnits(value);
    }

    setError("");
    // if(checkValidationWRTMinMaxValue()){

    // }else{

    // }
    // if (!isMultipleofNumber(value, 100)) {
    //   setError("Amount should be multiple of 100.");
    //   setIsButtonDisabled(true)
    //   return;
    // }
    // if (activePartialSubType === enumPartialSubType.AMOUNT) {
    //   if (value < objRedeemMinMaxData?.minAmount && value > objRedeemMinMaxData?.maxAmount) {
    //     setError("Invalid Amount");
    //   }
    // } else if (activePartialSubType === enumPartialSubType.UNIT) {
    //   if (value < objRedeemMinMaxData?.minUnit && value > objRedeemMinMaxData?.maxUnit) {
    //     setError("Invalid Unit");
    //   }
    // } else {
    //   // setIsButtonDisabled(false);
    // }

    // setIsButtonDisabled(false);
    // setError("");
  }

  const checkValidationWRTMinMaxValue = () => {
    // let bFlag = false;
    // if (activePartialSubType === enumPartialSubType.AMOUNT) {
    //   if (redeemAmount < objRedeemMinMaxData?.minAmount && redeemAmount > objRedeemMinMaxData?.maxAmount) {
    //     setError("Invalid Amount");
    //     bFlag = true;
    //   }

    // } else if (activePartialSubType === enumPartialSubType.UNIT) {
    //   if (redeemUnits < objRedeemMinMaxData?.minUnit && redeemUnits > objRedeemMinMaxData?.maxUnit) {
    //     setError("Invalid Unit");
    //     bFlag = true;
    //   }
    // } else {
    //   setIsButtonDisabled(false);
    //   setError("");
    //   bFlag = false;
    // }

    // return bFlag;


    let bFlag = false;
    if (activePartialSubType === enumPartialSubType.AMOUNT) {

      if (redeemAmount < objRedeemMinMaxData?.minAmount) {
        setError("Amount less than minimum redemption amount can not be redeemed.");
        bFlag = true;
      } else if (redeemAmount > objRedeemMinMaxData?.maxAmount) {
        setError("Amount more than maximum redemption amount can not be redeemed.");
        bFlag = true;
      }


    } else if (activePartialSubType === enumPartialSubType.UNIT) {

      if (redeemUnits < objRedeemMinMaxData?.minUnit) {
        setError("Unit less than minimum redemption unit can not be redeemed.");
        bFlag = true;
      }

      if (redeemUnits > objRedeemMinMaxData?.maxUnit) {
        setError("Can not redeem more than invested units.");
        bFlag = true;
      }

    }

    // else {
    //   setIsButtonDisabled(false);
    //   setError("");
    //   bFlag = false;
    // }

    return bFlag;
  }

  const handleSubmit = () => {
    if (checkValidationWRTMinMaxValue()) {
      return;
    };

    setBankModal(true);
  }

  const initiateRedeemFund = async () => {
    let objBody: any = {
      folionumber: redeemFundDetails?.folio,
      allredeem: false,
      fund_id: redeemFundDetails?.fund_id
    }
    if (activeRedeemType === enumRedeemPaymentMethod.PARTIAL) {
      if (activePartialSubType === enumPartialSubType.AMOUNT) {
        objBody["amount"] = redeemAmount;
      } else {
        objBody["units"] = redeemUnits;
      }
    }

    dispatch(setOrderRedeemDataAction(objBody));

    // let res: apiResponse = await setOrderToRedeemFundWrtUserInputThunk(objBody);

    // if (checkExpirationOfToken(res?.code)) {
    //   dispatch(setTokenExpiredStatusAction(true));
    //   return;
    // }

    // if (res?.error == true) {
    //   return;
    // }

    let objUserAuthData = {
      number: redeemFundDetails?.mobileno,
      email: redeemFundDetails?.email
    }

    navigate('/verifyoncheckout', { state: { userAuthData: objUserAuthData } });
  }

  return (
    <>
      <Box style={{ width: "100vw" }} ref={refContainer}>
        <Navbar />
        <Box sx={style.main}>
          <Grid container spacing={0} sx={{ height: "100vh" }}>
            <Grid item xs={0} sm={1} md={2}>
              <Toolbar />
              <Sidebar />
            </Grid>
            <Grid container xs={13} sm={11} md={10}>
              <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 0, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll" } }} item xs={13}>
                <Toolbar />

                {/* Breadcrumbs */}
                <Box role="presentation" sx={{ margin: "27px 0px 21px 25px" }}>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link color="#6495ED" underline="always" onClick={() => navigate('/portfolio')}>
                      <Typography className='burgerText'> Portfolio</Typography>
                    </Link>
                    <Link color="#919eb1" underline="none" >
                      <Typography className='burgerText'>Redeem Fund</Typography>
                    </Link>
                  </Breadcrumbs>
                </Box>

                {/* Large Cards */}
                {
                  redeemFundDetails &&
                    Object.keys(redeemFundDetails).length ?
                    <FullAmountCard
                      logo={redeemFundDetails?.fundimage}
                      name={redeemFundDetails?.fundname}
                      cap={redeemFundDetails?.category}
                      type={redeemFundDetails?.categorygroup}
                      absoluteValue={redeemFundDetails?.absolutereturn}
                      absoluteValueInPercentage={redeemFundDetails?.absolutereturninpercent}
                      currentValue={redeemFundDetails?.currentvalue}
                      investedValue={redeemFundDetails?.investedvalue}
                      units={redeemFundDetails?.units}
                      rating={redeemFundDetails?.rating}
                    />
                    : null
                }


                {/* Small Card */}
                <Box sx={{ width: '100%' }}>
                  <Grid sx={{ padding: "0px 9px !important" }} container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item md={6} xs={12}>
                      {
                        activeRedeemType === enumRedeemPaymentMethod.PARTIAL ?
                          <Card>
                            <CardContent>
                              <Box>
                                <Grid container spacing={0}>
                                  <Grid item xs={5} sm={9}>
                                    <Typography
                                      sx={{
                                        fontSize: "16px",
                                        fontWeight: "500",
                                        marginTop: "10px",
                                        height: " 19px",
                                        fontFamily: "Roboto",
                                        textAlign: " left",
                                        color: " #3c3e42"
                                      }}
                                    >Redemption Type</Typography>
                                  </Grid>
                                  <Grid item xs={7} sm={3}
                                    sx={{
                                      textAlign: " center",
                                      justifyContent: "flex-start",
                                      alignItems: "flex-start",
                                      flexWrap: "wrap"
                                    }}
                                    className="twinButton"
                                  >
                                    <Box style={{ marginBottom: "20px", display: "flex", gap: "15px", alignItems: "center" }}>
                                      <Box onClick={() => { setActiveRedeemType(enumRedeemPaymentMethod.PARTIAL) }} style={{ cursor: "pointer", border: `1px solid ${activeRedeemType == enumRedeemPaymentMethod.PARTIAL ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${activeRedeemType == enumRedeemPaymentMethod.PARTIAL ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: " 10px 16px 9px" }}>
                                        <Typography style={{ fontWeight: "500", color: `${activeRedeemType == enumRedeemPaymentMethod.PARTIAL ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>Partial </Typography>
                                      </Box>
                                      <Box onClick={() => { setActiveRedeemType(enumRedeemPaymentMethod.FULL); }} style={{ cursor: "pointer", border: `1px solid ${activeRedeemType == enumRedeemPaymentMethod.FULL ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${activeRedeemType == enumRedeemPaymentMethod.FULL ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "10px 16px 9px" }}>
                                        <Typography style={{ fontWeight: "500", color: `${activeRedeemType == enumRedeemPaymentMethod.FULL ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>Full </Typography>
                                      </Box>
                                    </Box>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Typography sx={{
                                      height: " 16px", fontSize: " 14px", textAlign: " left", color: "#3c3e42"
                                    }}>Redemption By</Typography>
                                  </Grid>
                                  <Grid item xs={12} sx={{ display: "flex", marginTop: "8px" }}>
                                    <Box sx={{
                                      justifyContent: "center", alignItems: "center",
                                    }}>
                                      <FormControlLabel
                                        control={<Checkbox onChange={() => setActivePartialSubType(enumPartialSubType.AMOUNT)} checked={activePartialSubType === enumPartialSubType.AMOUNT ? true : false} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                        label={<Box><span style={{ fontSize: "14px", color: `${activePartialSubType === enumPartialSubType.AMOUNT ? '#3c3e42' : "#7b7b9d"}` }}>Amount:</span> <span style={{ fontSize: "14px", fontWeight: "bold", color: `${activePartialSubType === enumPartialSubType.AMOUNT ? '#7b7b9d' : "#3c3e42"}` }}>₹{redeemFundDetails?.currentvalue}</span>  </Box>} />

                                      <FormControlLabel
                                        control={<Checkbox onChange={() => setActivePartialSubType(enumPartialSubType.UNIT)} checked={activePartialSubType === enumPartialSubType.UNIT ? true : false} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                        label={<Box><span style={{ fontSize: "14px", color: `${activePartialSubType === enumPartialSubType.UNIT ? '#3c3e42' : "#7b7b9d"}` }}>Units:</span> <span style={{ fontSize: "14px", fontWeight: "bold", color: `${activePartialSubType === enumPartialSubType.UNIT ? '#3c3e42' : "#7b7b9d"}` }}>{redeemFundDetails?.units}</span>  </Box>} />
                                    </Box>
                                  </Grid>
                                  <Grid item xs={12}>
                                    <Box>
                                      {
                                        activePartialSubType === enumPartialSubType.UNIT ?
                                          <TextField
                                            label="No. of Units"
                                            name="Unit"
                                            value={redeemUnits}
                                            type="number"
                                            onKeyPress={(e) =>
                                              /[^(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$]$/.test(e.key) &&
                                              e.preventDefault()
                                            }
                                            onChange={handleOnChangeInputOfPartialSubType}
                                            sx={{
                                              width: "100%",
                                              borderRadius: "4px",
                                              boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)",
                                              backgroundColor: "#fff",
                                              marginTop: "5%"
                                            }}
                                            inputProps={{
                                              maxLength: 11,
                                            }}
                                          >
                                          </TextField> :
                                          <TextField
                                            label="Amount"
                                            name="Amount"
                                            value={redeemAmount}
                                            type="number"
                                            onKeyPress={(e) =>
                                              /[^(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$]$/.test(e.key) &&
                                              e.preventDefault()
                                            }
                                            sx={{
                                              width: "100%",
                                              borderRadius: "4px",
                                              boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)",
                                              backgroundColor: "#fff",
                                              marginTop: "5%"
                                            }}
                                            inputProps={{
                                              maxLength: 11,
                                            }}
                                            onChange={handleOnChangeInputOfPartialSubType}
                                          >
                                          </TextField>
                                      }

                                      {
                                        error ?
                                          <Typography component="span" sx={{ color: "red", fontSize: "15px" }}>
                                            {error}
                                          </Typography>
                                          : ""
                                      }
                                    </Box>
                                  </Grid>
                                  <Grid item xs={12} sx={{ paddingTop: "5px" }}>
                                    {
                                      activePartialSubType === enumPartialSubType.AMOUNT ?
                                        <Box >
                                          <Typography
                                            sx={{
                                              width: "304px",
                                              height: "30px",
                                              fontSize: " 12px",
                                              textAlign: "left",
                                              color: "#8787a2"
                                            }}
                                          >Minimum redemption amount ₹{redeemFundDetails.minredemptionamount} </Typography>
                                          <Typography
                                            sx={{
                                              width: "304px",
                                              height: "30px",
                                              marginTop: "-8px",
                                              fontSize: " 12px",
                                              textAlign: "left",
                                              color: "#8787a2"
                                            }}
                                          >Maximum  redemption amount ₹{redeemFundDetails.maxredemptionamount}</Typography>
                                        </Box> : <Box >
                                          <Typography
                                            sx={{
                                              width: "304px",
                                              height: "30px",
                                              fontSize: " 12px",
                                              textAlign: "left",
                                              color: "#8787a2"
                                            }}
                                          >Minimum redemption Unit {redeemFundDetails.minredemptionqty} </Typography>
                                          <Typography
                                            sx={{
                                              width: "304px",
                                              height: "30px",
                                              marginTop: "-8px",
                                              fontSize: " 12px",
                                              textAlign: "left",
                                              color: "#8787a2"
                                            }}
                                          >Maximum  redemption Units {redeemFundDetails.maxredemptionamount}</Typography>
                                        </Box>
                                    }
                                  </Grid>
                                </Grid>
                              </Box>
                            </CardContent>
                          </Card> :
                          <Card >
                            <CardContent>
                              <Grid container spacing={0}>
                                <Grid item xs={5} sm={9}>
                                  <Typography
                                    sx={{
                                      fontSize: "16px",
                                      fontWeight: "500",
                                      marginTop: "10px",
                                      height: " 19px",
                                      fontFamily: "Roboto",
                                      textAlign: " left",
                                      color: " #3c3e42"
                                    }}
                                  >Redemption Type</Typography>
                                </Grid>
                                <Grid item xs={7} sm={3} className="twinButton">
                                  <Box style={{ marginBottom: "20px", display: "flex", gap: "15px", alignItems: "center" }}>
                                    <Box onClick={() => { setActiveRedeemType(enumRedeemPaymentMethod.PARTIAL) }} style={{ cursor: "pointer", border: `1px solid ${activeRedeemType == enumRedeemPaymentMethod.PARTIAL ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${activeRedeemType == enumRedeemPaymentMethod.PARTIAL ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: " 10px 16px 9px" }}>
                                      <Typography style={{ fontWeight: "500", color: `${activeRedeemType == enumRedeemPaymentMethod.PARTIAL ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>Partial </Typography>
                                    </Box>
                                    <Box onClick={() => { setActiveRedeemType(enumRedeemPaymentMethod.FULL); }} style={{ cursor: "pointer", border: `1px solid ${activeRedeemType == enumRedeemPaymentMethod.FULL ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${activeRedeemType == enumRedeemPaymentMethod.FULL ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "10px 16px 9px" }}>
                                      <Typography style={{ fontWeight: "500", color: `${activeRedeemType == enumRedeemPaymentMethod.FULL ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>Full </Typography>
                                    </Box>
                                  </Box>
                                </Grid>
                                <Grid container spacing={3}>
                                  <Grid item xs={6}>
                                    <Typography sx={{ color: "#7b7b9d", fontSize: "14px", fontWeight: "normal", }}>Invested Value</Typography>
                                  </Grid>
                                  <Grid item xs={6}>
                                    <Typography sx={{ color: "#7b7b9d", fontSize: "14px", fontWeight: "normal" }}>Current Value</Typography>
                                  </Grid>
                                  <Grid item xs={6} >
                                    <Typography className='amountValue' sx={{ color: "#3c3e42", fontSizeL: "18px" }}>₹{redeemFundDetails.investedvalue}</Typography>
                                  </Grid>
                                  <Grid item xs={6} >
                                    <Typography className='amountValue' sx={{}}>₹{redeemFundDetails.currentvalue}</Typography>
                                  </Grid>
                                </Grid>
                              </Grid>
                              <Box>
                              </Box>
                            </CardContent>
                          </Card>
                      }
                    </Grid>

                    {/* lumpsum card */}
                    <Grid item md={6} xs={12}>
                      <Card sx={{ borderRadius: "8px", marginBottom: "5px" }}>

                        <CardContent>
                          <Box sx={{ padding: "14px 0px 16px 0px" }}>
                            <Typography sx={{

                              fontFamily: "Roboto",
                              fontSize: "18px",
                              fontWeight: "500",
                              fontStretch: "normal",
                              fontStyle: "normal",
                              lineHeight: "normal",
                              letterSpacing: "normal",
                              textAlign: "left",
                              color: " #3c3e42"
                            }}>Advantages of Lump sum investment</Typography>
                          </Box>


                          <Grid container columnSpacing={0} sx={{ paddingBottom: "16px" }}>
                            <Grid xs={2} sx={{ display: "contents" }}>
                              <Box>
                                <img src={rupconvie} alt="image" style={style.RupConviestyle} />
                              </Box>
                            </Grid>
                            <Grid xs={10} sx={{ paddingLeft: "13px" }}>
                              <Box>
                                <Typography sx={{
                                  fontSize: "16px",
                                  fontWeight: 500


                                }}>Exit Load</Typography>
                                <Typography sx={{
                                  width: "100%",
                                  height: " 50px",
                                  margin: " 4px 0 0 ",
                                  fontSize: "14px",
                                  fontWeight: "normal",
                                  lineHeight: "1.21",
                                  textAlign: " left",
                                  color: "#7b7b9d"
                                }}>Exit load will be applicable if you are redeeming a fund within
                                  365 days from the date of purchase. Exit load
                                  is a percentage of the NAV of the fund.</Typography>
                              </Box>
                            </Grid>
                          </Grid>
                          <Grid container spacing={0} className="taximp">
                            <Grid xs={2} sx={{ display: "contents" }}>
                              <Box>
                                <img src={rupreturnlogo} alt="image" style={style.RupConviestyle} />
                              </Box>
                            </Grid>
                            <Grid xs={10} sx={{ paddingLeft: "13px" }}>
                              <Box >
                                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>Tax Implications</Typography>
                                <Typography
                                  sx={{
                                    width: "100%",
                                    height: " 50px",

                                    fontFamily: " Roboto",
                                    fontSize: "14px",
                                    textAlign: " left",
                                    color: "#7b7b9d"
                                  }}
                                >Investors earn dividends and capital gains from liquid funds.
                                  Investors do not pay any tax on dividend income from mutual funds.</Typography>
                              </Box>

                            </Grid>

                          </Grid>

                          <Grid container rowSpacing={2} sx={{
                            paddingLeft: "25px",
                            maxWidth: "fit-content",
                            margin: "1rem", display: "flex", flexDirection: "column"
                          }}>
                            <Grid item xs={12} sx={{

                              padding: "15px 0px 0px 0px"
                            }}>
                              <Box sx={{ textAlign: " center", paddingTop: "15px" }}>
                                <Typography sx={{
                                  texAlign: " center",
                                  fontSize: " 12px",
                                  fontWeight: "normal",
                                  fontStyle: " normal",
                                  lineHeight: "1.42",
                                  letterSpacing: "normal",

                                  color: "#7b7b9d"


                                }}>  Final units or amount will depend on NAV
                                  applicable at the time of actual redemption request.</Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12}>
                              <Box sx={{ textAlign: " center" }}>
                                <Typography sx={{



                                  fontSize: " 12px",
                                  fontWeight: "normal",
                                  fontStyle: " normal",
                                  lineHeight: "1.42",
                                  letterSpacing: "normal",

                                  color: "#7b7b9d",
                                }}>
                                  By continuing, you’re agreeing to SprintMoneyTM

                                </Typography>
                              </Box>
                            </Grid>
                            <Grid item xs={12}>
                              <Box sx={{ textAlign: " center" }}>
                                <Typography sx={{

                                  textDecoration: 'underline',
                                  cursor: "pointer",
                                  fontSize: " 12px",
                                  fontWeight: "normal",
                                  fontStyle: " normal",
                                  lineHeight: "1.42",
                                  letterSpacing: "normal",

                                  color: "#6c63ff",
                                }}>     Terms and conditions</Typography>
                              </Box>
                            </Grid>
                          </Grid>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <FooterWithBtn
                btnText='Redeem Now'
                btnClick={handleSubmit}
                // btnDisable={isButtonDisabled}
                btnDisable={false}
              />
              <SimpleModal
                open={bankModal}
                close={() => setBankModal(false)}
                onClickContinue={() => initiateRedeemFund()}
                redeemFundDetails={redeemFundDetails}

              />
            </Grid>

          </Grid>
        </Box>
      </Box >

    </>
  )

}
export default RedeemFunds


// {
//   activeRedeemType === enumRedeemPaymentMethod.PARTIAL ?
//     <Box>
//       {
//         redeemFundDetails &&
//           Object.keys(redeemFundDetails).length ?
//           <RedeemFundsCard
//             logo={redeemFundDetails?.fundimage}
//             name={redeemFundDetails?.fundname}
//             cap={redeemFundDetails?.category}
//             type={redeemFundDetails?.categorygroup}
//             absoluteValue={redeemFundDetails?.absolutereturn}
//             absoluteValueInPercentage={redeemFundDetails?.absolutereturninpercent}
//             // aum={activePartialSubType === enumPartialSubType.UNIT ? redeemFundDetails?.nav : redeemFundDetails?.absolutereturn}
//             // aumPercentage={activePartialSubType === enumPartialSubType.UNIT ? redeemFundDetails?.nav : redeemFundDetails?.absolutereturninpercent}
//             currentValue={redeemFundDetails?.currentvalue}
//             investedValue={redeemFundDetails?.investedvalue}
//             units={redeemFundDetails?.units}
//             rating={redeemFundDetails?.rating}
//           /> : null
//       }

//     </Box> :
//     <Box>
//       {/* {
//         redeemFundDetails &&
//           Object.keys(redeemFundDetails).length ?
//           <FullAmountCard
//             logo={redeemFundDetails?.fundimage}
//             name={redeemFundDetails?.fundname}
//             cap={redeemFundDetails?.category}
//             type={redeemFundDetails?.categorygroup}
//             absoluteValue={redeemFundDetails?.absolutereturn}
//             absoluteValueInPercentage={redeemFundDetails?.absolutereturninpercent}
//             // aum={activePartialSubType === enumPartialSubType.UNIT ? redeemFundDetails?.nav : redeemFundDetails?.absolutereturn}
//             // aumPercentage={activePartialSubType === enumPartialSubType.UNIT ? redeemFundDetails?.nav : redeemFundDetails?.absolutereturninpercent}
//             currentValue={redeemFundDetails?.currentvalue}
//             investedValue={redeemFundDetails?.investedvalue}
//             units={redeemFundDetails?.units}
//             rating={redeemFundDetails?.rating}
//           />
//           : null
//       } */}
//     </Box>
// }