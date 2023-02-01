import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Button,
  Dialog,
  Grid,
  Link,
  Modal,
  Toolbar,
  Typography,
} from "@mui/material";
import { HelpOutline, tick } from "../../Assets";
import MutualFundCard2, {
  MFProp,
} from "../../Modules/CustomCard/MutualFundCard2";
import SelectSipDateButton from "../../Modules/Buttons/SelectSipDateButton";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import { Calendar } from "react-calendar";
import { makeStyles } from "@mui/styles";
import FooterWithBtn from "../CommonComponents/FooterWithBtn";
import OneTimeMutualFundCard2 from "../../Modules/CustomCard/OneTimeMutualFundCard2";
import FooterWithButton2 from "../CommonComponents/FooterWithButton2";
import { enumPaymentModes, enumSpecificPurchaseAmount, globalConstant, paymentMethodKeys, paymentMethods } from "../../Utils/globalConstant";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import siteConfig from "../../Utils/siteConfig";
import { getData } from "../../Utils/api";
import { checkExpirationOfToken, getMutualFundRecommendationListWRTUserAmount, nth, validatePaymentModeWRTRules } from "../../Utils/globalFunctions";
import { setTokenExpiredStatusAction } from "../../Store/Authentication/actions/auth-actions";
import { setInvestmentCardTypeAction, setMutualFundListWrtUserAmountAction } from "../../Store/Recommendations/actions/recommendations-action";
import { apiResponse, MFFeatures } from "../../Utils/globalTypes";
import { store } from "../../Store/Store";
import { getMutualFundListWrtUserAmountThunk } from "../../Store/Recommendations/thunk/recommendations-thunk";
import { setOrderSipThunk, setPlaceLumpsumOrderThunk } from "../../Store/Payments/thunk/payments-thunk";
import { setInitialPaymentDataAction } from "../../Store/Payments/actions/payments-action";
import moment from "moment";

import './OnetimeM.css'
// const data = [
//   {
//     logo: "/Miraelogo.svg",
//     title: "Mirae Asset Dynamic Bond Fund Direct Growth",
//     fundType: "Equity",
//     price: 30000,
//     rating: 3.7,
//     morningStarLogo: true,
//     oneYearReturn: 12.3,
//     threeYearReturn: 18.76,
//     fiveYearReturn: 24.33,
//     checkbox: true,
//   },
//   {
//     logo: "/Miraelogo.svg",
//     title: "Mirae Asset Dynamic Bond Fund Direct Growth",
//     fundType: "Large Cap",
//     price: 30000,
//     rating: 3.7,
//     morningStarLogo: true,
//     oneYearReturn: 12.3,
//     threeYearReturn: 18.76,
//     fiveYearReturn: 24.33,
//     checkbox: true,
//   },
//   {
//     logo: "/Miraelogo.svg",
//     title: "Mirae Asset Dynamic Bond Fund Direct Growth",
//     fundType: "Balanced",
//     price: 30000,
//     rating: 3.7,
//     morningStarLogo: true,
//     oneYearReturn: 12.3,
//     threeYearReturn: 18.76,
//     fiveYearReturn: 24.33,
//     checkbox: true,
//   },
//   {
//     logo: "/Miraelogo.svg",
//     title: "Mirae Asset Dynamic Bond Fund Direct Growth",
//     fundType: "Equity",
//     price: 30000,
//     rating: 3.7,
//     morningStarLogo: true,
//     oneYearReturn: 12.3,
//     threeYearReturn: 18.76,
//     fiveYearReturn: 24.33,
//     checkbox: true,
//   },
//   {
//     logo: "/Miraelogo.svg",
//     title: "Mirae Asset Dynamic Bond Fund Direct Growth",
//     fundType: "Equity",
//     price: 30000,
//     rating: 3.7,
//     morningStarLogo: true,
//     oneYearReturn: 12.3,
//     threeYearReturn: 18.76,
//     fiveYearReturn: 24.33,
//     checkbox: true,
//   },
// ];

const data = [
  {
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: "Equity",
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    checkbox: false,
    buttons: false,
    isMutualFundScreen: true,
  },
  {
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: "Large Cap",
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    checkbox: false,
    buttons: false,
    isMutualFundScreen: true,
  },
  {
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: "Balanced",
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    checkbox: false,
    buttons: false,
    isMutualFundScreen: true,
  },
  {
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: "Equity",
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    checkbox: false,
    buttons: false,
    isMutualFundScreen: true,
  },
  {
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: "Equity",
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    checkbox: false,
    buttons: false,
    isMutualFundScreen: true,
  },
];

const initialMFData: MFFeatures = {
  showCheckbox: false,
  showButtons: false,
  isMutualFundScreen: true,
}

// showButtons: boolean;
// showCheckbox: boolean;
// isMutualFundScreen: boolean;
// onClick?: (data: any, type: any, element: string) => void | undefined;
// isChecked?: boolean

const enumActiveScreen = Object.freeze({
  CLOSE_MODAL: 0,
  OPEN_DATE_PICKER_MODAL: 1,
  OPEN_CONFIRMATION_MODAL: 2,
  OPEN_NET_BANKING: 3,
});

const useStyles: any = makeStyles((theme: any) => ({
  button: {
    "&:hover": {
      backgroundColor: "#00b4ff !important",
    },
  

  },
  myBtn: {
    "&:hover": {
      backgroundColor: "var(--uiDarkGreyColor)",
      "& span": {
        color: "var(--typeBlackColor)",
      },
    },
  },
}));

const style = {
  main: {
    boxSizing: "border-box",
    backgroundColor: "#f9f9f9",
    // height: "100vh",
  } as React.CSSProperties,
  button: {
  
    boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
    backgroundColor: "#23db7b",
    color: "#fff",
  
   
      height: "48px",
   
      width: 350,

    marginTop: "21",
    marginLeft: "-1px",
  } as React.CSSProperties,
  modalText: {
    backgroundColor: "#FFF",
    width: "100%",
    textAlign: "center",
    padding: "5px",
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    fontWeight: "500",
    borderColor: "#fff",
  } as React.CSSProperties,
};

const OneTimeMutualFund = () => {
  const classes = useStyles();
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();
  const location: any = useLocation();

  const g_investment: any = useSelector((state: any) => state?.recommendationsReducer?.investment);
  const g_mutualFundListWrtUserAmount = useSelector((state: any) => state?.recommendationsReducer?.mutaulFundListWrtUserAmount?.data, shallowEqual);

  const [sipStartDay, setSipStartDay] = useState<any>();
  const [mfCards, setMfCards] = useState<any[]>([initialMFData]);
  const [activeScreen, setActiveScreen] = useState<number>(enumActiveScreen.CLOSE_MODAL);

  const strCardType: string | null = localStorage.getItem(siteConfig.INVESTMENT_CARD_TYPE);
  // @ts-ignore
  const userAmount: number = useMemo(() => {
    if (strCardType === globalConstant.LUMPSUM_INVESTMENT) {
      return localStorage.getItem(siteConfig.INVESTMENT_USER_AMOUNT) ? parseInt(localStorage.getItem(siteConfig.INVESTMENT_USER_AMOUNT) || '{}') : 0
    } else {
      return localStorage.getItem(siteConfig.SIP_USER_AMOUNT) ? parseInt(localStorage.getItem(siteConfig.SIP_USER_AMOUNT) || '{}') : 0
    }
  }, []);


  useEffect(() => {
    console.log("onetimemutual.tsx mounted");
    initiate();
    return () => {
      console.log("onetimemutual.tsx unmounted")
    }
  }, []);

  useEffect(() => {
    handleCustomisePlanScreen();
  }, [g_mutualFundListWrtUserAmount]);

  const initiate = async () => {
    let strCardType: string | null = localStorage.getItem(siteConfig.INVESTMENT_CARD_TYPE);

    if (!g_investment?.type) {
      dispatch(setInvestmentCardTypeAction(strCardType));
    }

    if (!userAmount) {
      navigate(strCardType === globalConstant.LUMPSUM_INVESTMENT ? "/investNow" : "/startAnSip");
    } else {
      if (strCardType === globalConstant.LUMPSUM_INVESTMENT) {
        // let res: any = await getMutualFundListWrtUserAmountThunk(userAmount, strCardType === globalConstant.LUMPSUM_INVESTMENT ? 11 : 12, initialMFData)
        let res: any = await getMutualFundListWrtUserAmountThunk(userAmount, 11, initialMFData)
        if (res) handleResponse(res);
      } else {
        // let res: any = await getMutualFundListWrtUserAmountThunk(userAmount, 12, initialMFData) //Its not working from backend!!
        let res: any = await getMutualFundListWrtUserAmountThunk(userAmount, 12, initialMFData)
        if (res) handleResponse(res);
      }
    }
  }

  const handleResponse = async (data: apiResponse) => {
    if (checkExpirationOfToken(data?.code)) {
      dispatch(setTokenExpiredStatusAction(true));
      return;
    }

    if (data?.error === true) {
      return;
    }

    let res = data?.data;
    if (res && res.length) {
      let objMF: any = res.filter((item: any) => item?.recommendationtype === globalConstant.MUTUAL_FUND)[0];
      await dispatch(setMutualFundListWrtUserAmountAction(objMF));
      let arrRecomm = await getMutualFundRecommendationListWRTUserAmount(objMF ? objMF[globalConstant.RECOMMENDATIONS] : [], initialMFData);
      setMfCards(arrRecomm);
    }
  }

  const handleCustomisePlanScreen = async () => {
    if (!g_mutualFundListWrtUserAmount) {
      return;
    }

    if (g_mutualFundListWrtUserAmount[globalConstant.RECOMMENDATIONS] && g_mutualFundListWrtUserAmount[globalConstant.RECOMMENDATIONS].length) {
      let arrRecomm = await getMutualFundRecommendationListWRTUserAmount(g_mutualFundListWrtUserAmount[globalConstant.RECOMMENDATIONS], initialMFData)
      setMfCards(arrRecomm);
    } else {
      setMfCards([]);
      // navigate("/onetimemutualfundrecommendation");
    }
  }

  const handleNavigation = (strRoute: string) => {
    navigate(strRoute);
  }

  const handleNavigationOfFundDetails = (secid: string) => {
    if (secid) {
      navigate("/funddetails", { state: { secid: secid, parentRoute: "/onetimemutualfundrecommendation" } });
    } else {
      console.log(secid, "invalid secid");
    }
  }

  const getTotalRecomendedAmount = () => {
    let totalAmount = 0;
    if (mfCards && mfCards.length) {
      let arrAmount: number[] = mfCards.map((item: any) => item?.recommendedamount);
      console.log(arrAmount, "arrAmount");
      totalAmount = arrAmount.reduce((p, n) => p + n);
      console.log(totalAmount, "totalAmount");
      return ` ${totalAmount}`;
    }
  }

  // const handleOrderInvestment = async () => {

  //   let arrMappedMfCards: any[] = [];

  //   if (mfCards && mfCards.length) {
  //     arrMappedMfCards = mfCards.map((item: any) => {
  //       return { fund_id: item?.secid, amount: item?.recommendedamount }
  //     })
  //   }

  //   if (!arrMappedMfCards || !arrMappedMfCards.length) {
  //     return;
  //   }

  //   let objBody: any = {
  //     funds: arrMappedMfCards
  //   };

  //   let objDataForPaymentGateway: any = {};

  //   /** Setting total amount  */
  //   //@ts-ignore
  //   let totalAmount: number | undefined = parseInt(getTotalRecomendedAmount());
  //   objDataForPaymentGateway["totalAmount"] = totalAmount;

  //   /**Set payment modes according to this condition*/
  //   if (totalAmount <= enumSpecificPurchaseAmount.TEN_THOUSAND) {
  //     objDataForPaymentGateway["paymentModes"] = [enumPaymentModes.NETBANKING, 0, enumPaymentModes.UPI]
  //   } else if (totalAmount > enumSpecificPurchaseAmount.TEN_THOUSAND && totalAmount < enumSpecificPurchaseAmount.TWO_LACS) {
  //     objDataForPaymentGateway["paymentModes"] = [enumPaymentModes.NETBANKING]
  //   } else if (totalAmount > enumSpecificPurchaseAmount.TWO_LACS) {
  //     objDataForPaymentGateway["paymentModes"] = [enumPaymentModes.NETBANKING, enumPaymentModes.NEFT]

  //   }

  //   /**call Order api according to investment type */
  //   if (strCardType === globalConstant.SIP_INVESTMENT) {
  //     objBody["sipstartday"] = 0
  //     let res: apiResponse = await setOrderSipThunk(objBody);

  //   } else {

  //     objDataForPaymentGateway["orderId"] = "0000";
  //     dispatch(setInitialPaymentDataAction(objDataForPaymentGateway));

  //     let res: apiResponse = await setPlaceLumpsumOrderThunk(objBody);
  //     // if (res?.error) return;
  //     // objDataForPaymentGateway["orderId"]= res?.data?.order_id
  //     // dispatch(setInitialPaymentDataAction(objDataForPaymentGateway));
  //     // dispatch(setInitialPaymentDataAction({ orderId: res?.data?.order_id, paymentModes: [[paymentMethods[paymentMethodKeys.NET_BANKING]["id"], paymentMethods[paymentMethodKeys.NEFT_RTGS]]["id"]], totalAmount: siteConfig.INVESTMENT_USER_AMOUNT, }))
  //     // dispatch(setInitialPaymentDataAction({ orderId: res?.data?.order_id, paymentModes: [1, 2], totalAmount: siteConfig.INVESTMENT_USER_AMOUNT, }))
  //     // dispatch(setInitialPaymentDataAction({ orderId: res?.data?.order_id, paymentModes: [enumPaymentModes.NETBANKING, enumPaymentModes.NEFT], totalAmount: siteConfig.INVESTMENT_USER_AMOUNT, }))
  //     // navigate("/netbanking", {
  //     //   state: { cardType: globalConstant.LUMPSUM_INVESTMENT },
  //     //   replace: true,
  //     // })

  //   }

  //   navigate("/netbanking", {
  //     state: { cardType: globalConstant.LUMPSUM_INVESTMENT },
  //     replace: true,
  //   })
  // }


  const handleOrderInvestment = async () => {

    let arrMappedMfCards: any[] = [];

    if (mfCards && mfCards.length) {
      arrMappedMfCards = mfCards.map((item: any) => {
        return { fund_id: item?.secid, amount: item?.recommendedamount }
      })
    }

    if (!arrMappedMfCards || !arrMappedMfCards.length) {
      return;
    }

    let objBody: any = {
      funds: arrMappedMfCards
    };

    let objDataForPaymentGateway: any = {};

    /** Setting total amount  */
    //@ts-ignore
    let totalAmount: number | undefined = parseInt(getTotalRecomendedAmount());
    objDataForPaymentGateway["totalAmount"] = totalAmount;

    /**Set payment modes according to this condition*/
    objDataForPaymentGateway["paymentModes"] = validatePaymentModeWRTRules(totalAmount);

    // if (totalAmount <= enumSpecificPurchaseAmount.TEN_THOUSAND) {
    //   objDataForPaymentGateway["paymentModes"] = [enumPaymentModes.NETBANKING, enumPaymentModes.UPI]
    // } else if (totalAmount > enumSpecificPurchaseAmount.TEN_THOUSAND && totalAmount < enumSpecificPurchaseAmount.TWO_LACS) {
    //   objDataForPaymentGateway["paymentModes"] = [enumPaymentModes.NETBANKING]
    // } else if (totalAmount > enumSpecificPurchaseAmount.TWO_LACS) {
    //   objDataForPaymentGateway["paymentModes"] = [enumPaymentModes.NETBANKING, enumPaymentModes.NEFT]

    // }

    /**call Order api according to investment type */
    if (strCardType === globalConstant.SIP_INVESTMENT) {
      objBody["sipstartday"] = parseInt(sipStartDay);
      objDataForPaymentGateway["orderId"] = "0000";
      dispatch(setInitialPaymentDataAction(objDataForPaymentGateway));
      let res: apiResponse = await setOrderSipThunk(objBody);

    } else {

      objDataForPaymentGateway["orderId"] = "0000";
      dispatch(setInitialPaymentDataAction(objDataForPaymentGateway));

      let res: apiResponse = await setPlaceLumpsumOrderThunk(objBody);
      // if (res?.error) return;
      // objDataForPaymentGateway["orderId"]= res?.data?.order_id
      // dispatch(setInitialPaymentDataAction(objDataForPaymentGateway));
      // dispatch(setInitialPaymentDataAction({ orderId: res?.data?.order_id, paymentModes: [[paymentMethods[paymentMethodKeys.NET_BANKING]["id"], paymentMethods[paymentMethodKeys.NEFT_RTGS]]["id"]], totalAmount: siteConfig.INVESTMENT_USER_AMOUNT, }))
      // dispatch(setInitialPaymentDataAction({ orderId: res?.data?.order_id, paymentModes: [1, 2], totalAmount: siteConfig.INVESTMENT_USER_AMOUNT, }))
      // dispatch(setInitialPaymentDataAction({ orderId: res?.data?.order_id, paymentModes: [enumPaymentModes.NETBANKING, enumPaymentModes.NEFT], totalAmount: siteConfig.INVESTMENT_USER_AMOUNT, }))
      // navigate("/netbanking", {
      //   state: { cardType: globalConstant.LUMPSUM_INVESTMENT },
      //   replace: true,
      // })

    }

    navigate("/netbanking", {
      state: { cardType: globalConstant.LUMPSUM_INVESTMENT },
      replace: true,
    });
  }


  return (
    <Box style={{ width: "100vw", }}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>
          <Grid
            container
            sx={{
              height: "100vh",
              overflow: "scroll",
              width: "100%",
              display: "block",
              justifyContent: "center",
            }}
            xs={12}
            sm={11}
            md={10}
          >
            <Toolbar />
            <Grid container>
              <Box role="presentation" className="boxBreadcrumb" sx={{ margin: "27px 0px 21px 25px" }}>
                <Breadcrumbs
                  sx={{
                    fontSize: "12px",
                    color: "#6c63ff",
                  }}
                >
                  <Link href="/home">Home</Link>
                  <Link
                    onClick={() => handleNavigation(g_investment?.type === globalConstant.SIP_INVESTMENT ? "/sipInvestment" : "/oneTimeInvestment")}
                  >
                    Investment
                  </Link>
                  <Link
                    onClick={() => handleNavigation(g_investment?.type === globalConstant.SIP_INVESTMENT ? "/startAnSip" : "/investNow")}

                  >
                    {g_investment?.type === globalConstant.SIP_INVESTMENT ? "monthly investment" : "one time lumpsum"}
                  </Link>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#373e42",
                    }}
                  >
                    Mutual Fund Recommendation
                  </Typography>
                </Breadcrumbs>
              </Box>
            </Grid>
            <Box className="BoxPadding">
              <Box
                className="header"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      // fontWeight: 500,
                      color: "#7b7b9d",
                    }}
                  >
                    Explore Funds
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: 500,
                      color: "#3c3e42",
                    }}
                  >
                    {mfCards.length} Mutual Funds Found
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      color: "#7b7b9d",
                    }}
                  >
                    {/* {g_investment?.type === globalConstant.LUMPSUM_INVESTMENT ? "One-time Lumpsum" : "Monthly Investment"} of {userAmount ? userAmount : 0} */}
                    {g_investment?.type === globalConstant.LUMPSUM_INVESTMENT ? "One-time Lumpsum" : "Monthly Investment"} of ₹{getTotalRecomendedAmount()}

                  </Typography>
                </Box>

                {/* <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    width:{xs:"130px", sm:"200px"}
                  }}

                >
                  <img
                    src={HelpOutline}
                    width={22}
                    height={22}
                    style={{
                      margin: "0 4px 0 0",
                      objectFit: "contain",
                      opacity: 0.54,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize:{xs:"13px",sm:"16px"},
                      fontWeight: 500,
                      textAlign: "right",
                      color: "#6c63ff",
                    }}
                  >
                    Know Why
                  </Typography>
                </Box> */}
              </Box>
              <Box>
                {/* {mfCards &&
                  mfCards.length &&
                  mfCards.map((mfCard) => (
                    <Box
                      sx={{ marginTop: "1.25vw" }}
                      onClick={() => handlePrice(mfCard.oneYearReturn)}
                    >
                      <OneTimeMutualFundCard2 {...mfCard} />
                    </Box>
                  ))} */}

                {mfCards &&
                  mfCards.length &&
                  mfCards.map((mfCard, index: number) => (
                    <Box
                      key={index}
                      sx={{ marginTop: "1.25vw" }}
                    >
                      <MutualFundCard2
                        {...mfCard}
                        onCardClick={handleNavigationOfFundDetails}
                        cefType={true}
                      />
                    </Box>
                  ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "3vw",
                  marginBottom: "80px",
                }}
              >
                <Button
                  onClick={() => navigate("/customizemf")}
                  sx={{
                    width: "200px",
                    height: "44px",
                    padding: "13px 27px 12px 28px",
                    borderRadius: "32px",
                    backgroundColor: "#00b4ff",
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#fff",
                  }}
                  className={classes.button}
                >
                  Customize Plan
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                // width: "83.75vw",
                // height: "6.1vw",
                // marginTop: "8vw",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
                // boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.16)",
                // backgroundColor: "#fff",
              }}
            >

              <FooterWithButton2
                // btnText="BUY NOW"
                btnText={
                  g_investment?.type === globalConstant.SIP_INVESTMENT
                    ? "Select SIP Date"
                    : "Buy Now"
                }
                btnClick={async () => {
                  if (g_investment?.type === globalConstant.SIP_INVESTMENT) {
                    setActiveScreen(enumActiveScreen.OPEN_DATE_PICKER_MODAL);
                  } else {
                    handleOrderInvestment();
                  }
                }
                }
              />
            </Box>
          </Grid>
        </Grid>

        <Dialog
          sx={{ borderRadius: 8 }}
          open={
            activeScreen === enumActiveScreen.OPEN_DATE_PICKER_MODAL
              ? true
              : false
          }
          onClose={() => {
            setActiveScreen(enumActiveScreen.CLOSE_MODAL);
          }}
        >
          <Typography sx={style.modalText}>Monthly SIP Date </Typography>
          <Calendar
            showNeighboringMonth={false}
            showNavigation={false}
            // @ts-ignore
            onChange={(val, e) => {
              let date = moment(val).format("L") ? moment(val).format("L").split("/")[1] : ""
              setSipStartDay(date);
            }}
          />
          <Button
            onClick={() => {
              if (sipStartDay) {
                setActiveScreen(enumActiveScreen.OPEN_CONFIRMATION_MODAL);
              }
            }}
            variant="contained"
            style={style.button}
            sx={{
              backgroundColor: "rgba(123, 123, 157, 0.05)",
              color: "#7b7b9d",
            }}
          >
            Confirm SIP Date
          </Button>
        </Dialog>
        <Modal
          sx={{ borderRadius: 8 }}
          open={
            activeScreen === enumActiveScreen.OPEN_CONFIRMATION_MODAL
              ? true
              : false
          }
          onClose={() => {
            setActiveScreen(enumActiveScreen.CLOSE_MODAL);
          }}
          className="ModalStyleleftRight"
        >
          <>
            <Box
              alignItems="center"
              justifyContent="center"
              sx={{
                marginLeft: { sm: "35%", xs: "8%", lg: "40%" },
                marginTop: { xs: "50%", lg: "13%", md: "30%" },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#fff",
                  width: 300,
                  alignItems: "center",
                  padding: 3,
                  textAlign: "center",
                }}
              >
                <Box>
                  <img style={{ height: 120, width: 120 }} src={tick} />
                </Box>
                <Typography sx={{ marginTop: 1, fontWeight: "600" }}>
                  Date confirmed!
                </Typography>
                <Typography sx={{ marginTop: 1, color: "#8787a2" }}>
                  Your Monthly SIP Date is {sipStartDay}{nth(sipStartDay)} of every month
                </Typography>
              </Box>
              {/* <Button onClick={() => { setActiveScreen(enumActiveScreen.OPEN_NET_BANKING) }} variant='contained' style={style.button} sx={{ */}
              <Button
                onClick={() => {
                  handleOrderInvestment()
                }}
                variant="contained"
                style={style.button}
                sx={{
                  backgroundColor: "rgba(123, 123, 157, 0.05)",
                  color: "#7b7b9d",
                  marginLeft: 8,
                }}
              >
                Continue to Payment
              </Button>
            </Box>
          </>
        </Modal>

      </Box>
    </Box >
  );
};

export default OneTimeMutualFund;
/*
<Box sx={{
            width: '80.875vw',
            padding: 0,
            margin: '2.5vw',
            fontFamily: 'Roboto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        }}>
            <Box className="header" sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Box className="heading_main">
                    <Typography sx={{
                        fontSize: '18px',
                        fontWeight: 500,
                        color: '#3c3e42',
                    }}>
                        {mfCards.length} Mutual Funds Found
                    </Typography>
                    <Typography sx={{
                        fontSize: '14px',
                        color: '#7b7b9d',
                    }}>
                        One-time lumpsum investment of ₹1,00,000
                    </Typography>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}>
                    <img src={HelpOutline} width={22} height={22} style={{
                        margin: '0 4px 0 0',
                        objectFit: 'contain',
                        opacity: 0.54,
                    }}/>
                    <Typography sx={{
                        fontSize: '16px',
                        fontWeight: 500,
                        textAlign: 'right',
                        color: '#6c63ff',
                    }}>Know Why</Typography>
                </Box>
            </Box>
            <Box>
                {
                    mfCards.map(mfCard => 
                        <Box sx={{ marginTop: '1.25vw' }}>
                            <MutualFundCard2 {...mfCard} />
                        </Box>
                    )
                }
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '3vw',
            }}>
                <Button onClick={ () => navigate('/customizemf') } sx={{
                    width: '200px',
                    height: '44px',
                    padding: '13px 27px 12px 28px',
                    borderRadius: '32px',
                    backgroundColor: '#00b4ff',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#fff',
                }}>Customize Plan</Button>
            </Box>
        </Box>
        <Box sx={{
            width: '83.75vw',
            height: '6.1vw', 
            marginTop: '8vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.16)',
            backgroundColor: '#fff'
        }}>
            <SelectSipDateButton />
        </Box>
*/
