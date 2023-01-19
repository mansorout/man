import { useEffect, useMemo, useState } from "react";
import {
  Box,
  Breadcrumbs,
  Button,
  Grid,
  Link,
  Toolbar,
  Typography,
  Modal,
} from "@mui/material";
import { HelpOutline, tick } from "../../Assets";
import MutualFundCard2, {
  MFProp,
} from "../../Modules/CustomCard/MutualFundCard2";
import SelectSipDateButton from "../../Modules/Buttons/SelectSipDateButton";
import { useNavigate } from "react-router-dom";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { globalConstant } from "../../Utils/globalConstant";
import Calendar from "react-calendar";
import FooterWithBtn from "../CommonComponents/FooterWithBtn";
import { setInvestmentCardTypeAction, setMutualFundListWrtUserAmountAction, setSelectedFundsForInvestmentAction } from "../../Store/Recommendations/actions/recommendations-action";
import siteConfig from "../../Utils/siteConfig";
import OneTimeMutualFundCard2 from "../../Modules/CustomCard/OneTimeMutualFundCard2";
import { checkExpirationOfToken, getMutualFundRecommendationListWRTUserAmount } from "../../Utils/globalFunctions";
import { apiResponse } from "../../Utils/globalTypes";
import { getMutualFundListWrtUserAmountThunk, setAddMutualFundThunk, setUpdateMutualFundThunk } from "../../Store/Recommendations/thunk/recommendations-thunk";
import { setTokenExpiredStatusAction } from "../../Store/Authentication/actions/auth-actions";
import { postData } from "../../Utils/api";

const data = [
  {
    id: 1,
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: "Equity",
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    showCheckbox: false,
    showButtons: true,
    isMutualFundScreen: false,
  },
  {
    id: 2,
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: "Large Cap",
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    showCheckbox: false,
    showButtons: true,
    isMutualFundScreen: false,
  },
  {
    id: 3,
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: "Balanced",
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    showCheckbox: false,
    showButtons: true,
    isMutualFundScreen: false,
  },
  {
    id: 4,
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: "Equity",
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    showCheckbox: false,
    showButtons: true,
    isMutualFundScreen: false,
  },
  {
    id: 5,
    logo: "/Miraelogo.svg",
    title: "Mirae Asset Dynamic Bond Fund Direct Growth",
    fundType: "Equity",
    price: 30000,
    rating: 3.7,
    morningStarLogo: true,
    oneYearReturn: 12.3,
    threeYearReturn: 18.76,
    fiveYearReturn: 24.33,
    showCheckbox: false,
    showButtons: true,
    isMutualFundScreen: false,
  },
];

const enumActiveScreen = Object.freeze({
  CLOSE_MODAL: 0,
  OPEN_DATE_PICKER_MODAL: 1,
  OPEN_CONFIRMATION_MODAL: 2,
  OPEN_NET_BANKING: 3,
});

const style = {
  main: {
    boxSizing: "border-box",
    backgroundColor: "#f9f9f9",
    height: "100vh",
  } as React.CSSProperties,
  modalText: {
    backgroundColor: "#FFF",
    width: 338,
    textAlign: "center",
    marginLeft: "1px",
    padding: "5px",
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    fontWeight: "500",
    borderColor: "#fff",
  },
  button: {
    height: "48px",
    boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
    backgroundColor: "#23db7b",
    transform: "translate(8px, -23px)",
    color: "#fff",
    width: 350,
    marginTop: 21,
    marginLeft: -8,
  },
};

const initialMFData = {
  showCheckbox: false,
  showButtons: true,
  isMutualFundScreen: false,
}

const CustomizeMF = () => {
  const navigate: any = useNavigate();
  const dispatch = useDispatch();

  const [mfCards, setMfCards] = useState<any[]>([]);
  const [activeScreen, setActiveScreen] = useState<number>(enumActiveScreen.CLOSE_MODAL);
  const g_investment = useSelector((state: any) => state?.recommendationsReducer?.investment);
  const g_selectedFundsForInvestment = useSelector((state: any) => state?.recommendationsReducer?.selectedFundsForInvestment);
  const g_mutualFundListWrtUserAmount = useSelector((state: any) => state?.recommendationsReducer?.mutaulFundListWrtUserAmount?.data);
  const g_replaceFundActiveIndexForInvestment = useSelector((state: any) => state?.recommendationsReducer?.replaceFundActiveIndexForInvestment);


  //@ts-ignore
  const userAmount: number = useMemo(() => { return localStorage.getItem(siteConfig.INVESTMENT_USER_AMOUNT) ? parseInt(localStorage.getItem(siteConfig.INVESTMENT_USER_AMOUNT)) : 0 }, []);
  const strCardType: string | null = useMemo(() => { return localStorage.getItem(siteConfig.INVESTMENT_CARD_TYPE) }, []);

  useEffect(() => {
    if (!g_investment?.type) {
      dispatch(setInvestmentCardTypeAction(strCardType));
    }
  }, []);

  useEffect(() => {
    if (strCardType !== g_investment?.type) {
      console.log("investmenttype is different");
      return;
    }

    if (g_mutualFundListWrtUserAmount) {
      handleCustomisePlanScreen();
    } else {
      handleResponse();
    }
  }, [g_mutualFundListWrtUserAmount]);

  useEffect(() => {
    const { data } = g_selectedFundsForInvestment;
    if (!data) {
      console.log(g_selectedFundsForInvestment, "data undefined");
      return;
    }

    if (!data.length) return;

    let arrRecomm: any[] = g_mutualFundListWrtUserAmount[globalConstant.RECOMMENDATIONS];
    // let recommendedamount: number | null = arrRecomm[0] ? arrRecomm[0]["recommendedamount"] : null;
    let recommendation_id: number | null = g_mutualFundListWrtUserAmount ? g_mutualFundListWrtUserAmount["recommendation_id"] : null;
    let recommendationfund_id: number | null = arrRecomm[g_replaceFundActiveIndexForInvestment] ? arrRecomm[g_replaceFundActiveIndexForInvestment]["recommendationfund_id"] : null;

    if (data[0]["isChecked"] === false && data[0]["fundSelected"] && (data.length === 1 || data.length > 1)) {
      // this for add fund
      data.map((item: any) => {
        handleAddmutualFundApi({
          recommendation_id: recommendation_id,
          secid: item["secid"],
          // amount: recommendedamount
          amount: item?.userRecommendedAmount
        })
      })

    } else {
      // this is for replace fund
      let masterFund = data[0];
      let secid: string = masterFund["isChecked"] === true ? masterFund["secid"] : "";
      if (secid && recommendationfund_id) {
        let objBody = {
          recommendationfund_id: recommendationfund_id,
          secid: secid
        }

        handleUpdateMutualFundAPI(objBody);
      }
    }

    dispatch(setSelectedFundsForInvestmentAction([]));
  }, [g_selectedFundsForInvestment, g_replaceFundActiveIndexForInvestment])


  const handleUpdateMutualFundAPI = async (objBody: any) => {
    let res: apiResponse = await setUpdateMutualFundThunk(objBody);

    if (checkExpirationOfToken(res?.code)) {
      dispatch(setTokenExpiredStatusAction(true));
      return;
    }

    if (res?.error === true) {
      return;
    }

    handleResponse();
  }

  const handleAddmutualFundApi = async (objBody: any) => {
    let res: apiResponse = await setAddMutualFundThunk(objBody);

    if (checkExpirationOfToken(res?.code)) {
      dispatch(setTokenExpiredStatusAction(true));
      return;
    }

    if (res?.error === true) {
      return;
    }

    handleResponse();
  }

  const handleResponse = async () => {
    let data: apiResponse = await getMutualFundListWrtUserAmountThunk(userAmount, strCardType === globalConstant.LUMPSUM_INVESTMENT ? 11 : 12, initialMFData)
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
    console.log(g_mutualFundListWrtUserAmount, "g_mutualFundListWrtUserAmount");
    console.log(g_mutualFundListWrtUserAmount[globalConstant.RECOMMENDATIONS], "g_mutualFundListWrtUserAmount[globalConstant.RECOMMENDATIONS]");

    if (g_mutualFundListWrtUserAmount[globalConstant.RECOMMENDATIONS] && g_mutualFundListWrtUserAmount[globalConstant.RECOMMENDATIONS].length) {
      let arrRecomm = await getMutualFundRecommendationListWRTUserAmount(g_mutualFundListWrtUserAmount[globalConstant.RECOMMENDATIONS], initialMFData)
      setMfCards(arrRecomm);
    } else {
      setMfCards([]);
      navigate("/onetimemutualfundrecommendation");
    }
  }

  const handleNavigation = (strRoute: string) => {
    navigate(strRoute);
  }

  const handleNavigationOfFundDetails = (secid: string) => {
    if (secid) {
      navigate("/funddetails", { state: { secid: secid, parentRoute: "/customizemf" } });
    } else {
      console.log(secid, "invalid secid");
    }
  }

  const handleRemoveCard = (recommendationfund_id: number, secid: string) => {
    if (recommendationfund_id) {
      let objBody = {
        recommendationfund_id: recommendationfund_id,
        status_id: globalConstant.REMOVE_FUND_STATUS_ID
      }

      handleUpdateMutualFundAPI(objBody);
    } else {
      console.log("recommendationfund_id invalid")
    }
  }

  // const getTotalRecomendedAmount = (amount: number) => {
  const getTotalRecomendedAmount = () => {
    let totalAmount = 0;
    if (mfCards && mfCards.length) {
      let arrAmount: number[] = mfCards.map((item: any) => item?.recommendedamount);
      totalAmount = arrAmount.reduce((p, n) => p + n);
      console.log(totalAmount, "totalAmount")
      return ` ${totalAmount}`;
    }
  }

  return (
    <Box style={{ width: "100vw" }}>
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
                  <Link
                    // onClick={() => handleNavigation(g_investment?.type === globalConstant.SIP_INVESTMENT ? "/mflist" : "/onetimemutualfundrecommendation")}
                    onClick={() => handleNavigation(g_investment?.type === globalConstant.SIP_INVESTMENT ? "/onetimemutualfundrecommendation" : "/onetimemutualfundrecommendation")}
                  >
                    Mutual Fund Recommendation
                  </Link>
                  <Typography
                    sx={{
                      fontSize: "12px",
                      color: "#373e42",
                    }}
                  >
                    Customize Plan
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
                  alignItem: "flex-end",
                  marginBottom: { xs: "7%", sm: "0%" },
                }}
              >
                <Box className="heading_main">
                  <Typography
                    sx={{
                      fontSize: "12px",
                      fontWeight: "bold",
                      color: "#8787a2",
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
                    {/* Monthly investment of ₹5,000 */}
                    {/* {g_investment?.type === globalConstant.LUMPSUM_INVESTMENT ? "One-time Lumpsum" : "Monthly Investment"} of ₹{mfCards[0]?.recommendedamount ? getTotalRecomendedAmount(mfCards[0]?.recommendedamount) : " " + 0} */}
                    {g_investment?.type === globalConstant.LUMPSUM_INVESTMENT ? "One-time Lumpsum" : "Monthly Investment"} of ₹{getTotalRecomendedAmount()}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                >
                  <Button
                    // onClick={() => navigate("/addfunds")}
                    onClick={() => navigate('/explorefunds', { state: { status: globalConstant.CEF_ADD_FUND, parentRoute: "/explorefunds" } })}
                    sx={{
                      width: "200px",
                      height: "38px",
                      padding: "11px 36px",
                      borderRadius: "8px",
                      border: "solid 1px #23db7b",
                      backgroundColor: "#dff7ea",
                      textTransform: "capitalize",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#09b85d",
                    }}
                  >
                    Add More Funds
                  </Button>
                </Box>
              </Box>

              <Box>
                {mfCards &&
                  mfCards.length &&
                  mfCards.map((item, index) => (
                    <Box sx={{ marginTop: "1.25vw" }} key={index}>
                      <MutualFundCard2
                        {...item}
                        activeIndex={index}
                        onCardClick={handleNavigationOfFundDetails}
                        onRemoveCardClick={handleRemoveCard}
                        cefType={true}
                        isShowRemoveButton={mfCards && mfCards.length > 1 ? true : false}
                      />
                    </Box>
                  ))}

                {/* {mfCards &&
                  mfCards.length &&
                  mfCards.map((mfCard) => (
                    <Box
                      sx={{ marginTop: "1.25vw" }}
                    // onClick={() => handlePrice(mfCard.oneYearReturn)}
                    >
                      <OneTimeMutualFundCard2 {...mfCard} />
                    </Box>
                  ))} */}
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

                <FooterWithBtn
                  btnText={
                    g_investment?.type === globalConstant.SIP_INVESTMENT
                      ? "Select SIP Date"
                      : "Buy Now"
                  }
                  btnClick={() => {
                    if (
                      g_investment?.type === globalConstant.LUMPSUM_INVESTMENT
                    ) {
                      navigate("/netbanking", {
                        state: { cardType: globalConstant.LUMPSUM_INVESTMENT },
                        replace: true,
                      });
                      return;
                    }
                    setActiveScreen(enumActiveScreen.OPEN_DATE_PICKER_MODAL);
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Modal
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
          <Box
            alignItems="center"
            justifyContent="center"
            sx={{
              marginLeft: { sm: "35%", xs: "8%", lg: "40%" },
              marginTop: { xs: "50%", lg: "13%", md: "30%" },
            }}
          >
            <Typography sx={style.modalText}>Monthly SIP Date</Typography>
            <Calendar />
            <Button
              onClick={() => {
                setActiveScreen(enumActiveScreen.OPEN_CONFIRMATION_MODAL);
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
          </Box>
        </Modal>
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
                  Your Monthly SIP Date is 8th of every month
                </Typography>
              </Box>
              {/* <Button onClick={() => { setActiveScreen(enumActiveScreen.OPEN_NET_BANKING) }} variant='contained' style={style.button} sx={{ */}
              <Button
                onClick={() => {
                  navigate("/netbanking", {
                    state: { cardType: globalConstant.LUMPSUM_INVESTMENT },
                    replace: true,
                  });
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
    </Box>
  );
};

export default CustomizeMF;
