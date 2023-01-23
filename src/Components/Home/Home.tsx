
import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import { Box, styled } from '@mui/system'
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled } from '@mui/base';
import { makeStyles } from '@mui/styles';
import { Ad1, Ad1_1, Ad1_2, Ad2, MonoLogo } from '../../Assets/index'
import FinancialFreedom from '../../Modules/CustomCard/FinancialFreedom'
import StartInvestingCard from '../../Modules/CustomCard/StartInvestingCard'
import { investingCards } from '../../Modal/investingCards'
import { largeCards } from '../../Modal/largeCards'
import LargeCards from '../../Modules/CustomCard/LargeCards'
import CompanyFundCard from '../../Modules/CustomCard/CompanyFundCard'
import { companyCards } from '../../Modal/companyCards'
import { useNavigate } from 'react-router-dom'
import OtpInput from 'react-otp-input'
import { useDispatch, useSelector } from 'react-redux'
import PINVerifyButton from '../../Modules/Buttons/PINVerifyButton'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar'
import { PinModalHomeCloseAction } from '../../Store/Duck/PINModalHome'
import { globalConstant, lookUpMasterKeys } from '../../Utils/globalConstant'
import { getDataWithoutToken } from '../../Utils/api'
import siteConfig from '../../Utils/siteConfig'
import { setBannerSectionListAction, setMasterFundListAction } from '../../Store/Global/actions/global-actions'
import { getMasterFundListThunk } from '../../Store/Recommendations/thunk/recommendations-thunk'
import { checkExpirationOfToken } from '../../Utils/globalFunctions'
import { setTokenExpiredStatusAction } from '../../Store/Authentication/actions/auth-actions'
import { apiResponse } from '../../Utils/globalTypes'
import { setInvestmentCardTypeAction } from '../../Store/Recommendations/actions/recommendations-action'
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
  `,
);


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
  profileInter: {
    width: "40px",
    height: "40px",
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
  logo: {
    width: "50px",
    padding: "20px 0px",
  } as React.CSSProperties,

}

const useStyles: any = makeStyles((theme: Theme) => ({
  appbar: {
    backgroundColor: "white",
    width: "100%",
    height: "64px",
    position: "fixed",
    zIndex: "3000",
  },
}));

const Home = () => {
  const classes = useStyles();
  const refContainer = useRef();
  const dispatch: any = useDispatch();
  const navigate: any = useNavigate();

  const error: string[] = useSelector((state: any) => state.error);
  const { openPin }: any = useSelector((state: any) => state.PinModalHome);

  const [OTP, setOTP] = useState<string>("")
  const [open, setOpen] = useState<boolean>(false);
  const [mpin, setMpin] = useState<string | null>();
  const [openModal, setOpenModal] = useState<boolean>(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();

  const [largeCardsLocal, setLargeCardLocal] = useState<any[]>([...largeCards]);
  const [companyCardsLocal, setCompanyCardLocal] = useState<any[]>([...companyCards]);
  const [investingCardsLocal, setInvestingCardLocal] = useState<any[]>([...investingCards]);

  useEffect(() => {
    initiate();
  }, []);

  // FINANCIAL_YEAR: 'financialyear',
  // HEALTH_RECOMMENDATION_TYPE: 'healthrecommendationtype',
  // INVESTMENT_TERM: 'investmentterm',
  // INVESTMENT_TYPE: 'investmenttype',
  // MANDATE_STATUS: 'mandatestatus',
  // OCCUPATION: 'occupation',
  // ORDER_STATUS: 'orderstatus',
  // ORDER_TYPE: 'ordertype',
  // RECOMMENDATION_TYPE: 'recommendationtype',
  // RELATION_NAME: 'relationname',
  // SIP_STOP_REASON: 'sipstopreason',
  // STARTING_YEAR: 'startingyear',
  // SUM_INSURED: 'suminsured',
  // SUPPORT_TOPIC: 'supporttopic',
  // TERM_LIFE_COVER: 'termlifecover',
  // ULIP_FREQUENCY: 'ulip-frequency',
  // ULIP_PORT: 'ulip-ppt',
  // ULIP_TERM: 'ulip-term',

  const initiate = async () => {
    Object.keys(lookUpMasterKeys).forEach((lookupKey: string) => {
      getMasterKeyData(lookUpMasterKeys[lookupKey]);
    });

    getExploreFundList()
  }

  const getExploreFundList = async () => {
    let data: apiResponse = await getMasterFundListThunk(siteConfig.RECOMMENDATION_FUND_LIST + "?istop=true");
    if (checkExpirationOfToken(data?.code)) {
      dispatch(setTokenExpiredStatusAction(true));
      return;
    }

    if (data?.error === true) {
      return;
    }

    dispatch(setMasterFundListAction(data?.data));
    let exploreFundData: any[] = data?.data?.data
    if (exploreFundData && exploreFundData.length) {
      // let arrFilteredData: any[] = exploreFundData.filter((item: any, index: number) => index < 3);

      //   {
      //     "fundname": "DSP Midcap Reg Gr",
      //     "return1yr": "-4.35",
      //     "return3yr": "15.88",
      //     "return5yr": "9.42",
      //     "category": "Mid-Cap",
      //     "categorygroup": "Equity",
      //     "ratingoverall": 3,
      //     "returnytd": "-3.69",
      //     "secid": "F000000CBK",
      //     "fundimage": "https://sprintbeans-static-contents.s3.ap-south-1.amazonaws.com/logos/fundlogo1.svg",
      //     "aum": "1000.00",
      //     "providername": "DSP Investment Managers Private Limited",
      //     "issipenabled": 1,
      //     "islumpsumenabled": 1,
      //     "sipminamount": 500,
      //     "lumpsumminamount": 500
      // }
      let arrFilteredData: any[] = []
      exploreFundData.forEach((item: any, index: number) => {
        let obj = {};
        if (index < 3) {
          obj = {
            logo: item?.fundimage,
            name: item?.fundname,
            cap: item?.category,
            type: item?.categorygroup,
            price: item?.aum,
            year1: item?.return1yr,
            year3: item?.return3yr,
            year5: item?.return5yr,
            rating: item?.ratingoverall,
            secid: item?.secid
            // morning_star_logo?: string,
          }
          arrFilteredData.push(obj);
          // return obj;
        }
      });
      console.log(arrFilteredData, "arrFilteredData home.tsx")
      setCompanyCardLocal(arrFilteredData);
    }
  }


  const getMasterKeyData = (key: string) => {
    getDataWithoutToken(
      siteConfig.METADATA_LOOKUP_LIST + `?key=${key}`,
      siteConfig.CONTENT_TYPE_APPLICATION_JSON,
      siteConfig.METADATA_API_ID
    )
      .then(res => res.json())
      .then((data: any) => {
        if (data?.error === true) {
          return;
        }

        localStorage.setItem(key, JSON.stringify(data?.data));
      })
      .catch(err => {
        console.log(err);
      })
  };

  const handleOtpChange = (otp: any) => {
    setOTP(otp);
  };

  const handleModalClose = () => {
    dispatch(PinModalHomeCloseAction())
  };

  const handleNavigation = (strNavigationScreenName: string | undefined) => {

    if (!strNavigationScreenName) {
      return;
    }

    let objLocationData = {};
    // switch (strNavigationScreenName) {
    //   case "sipInvestment": {
    //     objLocationData = {
    //       cardType: globalConstant.SIP_INVESTMENT
    //     }
    //     break;
    //   }
    //   case "oneTimeInvestment": {
    //     objLocationData = {
    //       cardType: globalConstant.LUMPSUM_INVESTMENT
    //     }
    //     break;
    //   }
    //   default:
    //     break;
    // }
    switch (strNavigationScreenName) {
      case "startAnSip": {
        localStorage.setItem(siteConfig.INVESTMENT_CARD_TYPE, globalConstant.SIP_INVESTMENT);
        dispatch(setInvestmentCardTypeAction(globalConstant.SIP_INVESTMENT));
        break;
      }
      case "investNow": {
        dispatch(setInvestmentCardTypeAction(globalConstant.LUMPSUM_INVESTMENT));
        // getinvestmentTypeListDataWrtLookupId(investmentTypeValues.LUMPSUM);
        localStorage.setItem(siteConfig.INVESTMENT_CARD_TYPE, globalConstant.LUMPSUM_INVESTMENT)
        // objLocationData = {
        //   cardType: globalConstant.LUMPSUM_INVESTMENT
        // }
        break;
      }
      default:
        break;
    }



    navigate("../" + strNavigationScreenName, { state: objLocationData, replace: true });
  };

  const handleNavigationLargeCards = (navigation: string) => {
    navigate(navigation);
  };

  return (
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0} >
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>
          <Grid className="HomeBgHead" container sx={{ height: "100vh", overflow: "scroll" }} xs={12} sm={11} md={10}>
            <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 0, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll" } }} item xs={12} sm={6} md={7} lg={8}>
              <Toolbar />
              <Grid container sx={{ marginTop: { xs: "-50px", sm: "0px" } }}>
                <Grid item xs={12} sx={{ padding: { xs: 0, sm: 2 } }}>
                  <FinancialFreedom />
                </Grid>
                {
                  investingCardsLocal.map((item, index) => {
                    return (
                      <Grid key={index} onClick={() => handleNavigation(item?.Route)} item xs={6} sx={{ padding: 2 }}>
                        <StartInvestingCard BgColor={item.BgColor} Heading={item.Heading} Text={item.Text} Img={item.Img} />
                      </Grid>
                    )
                  })
                }
              </Grid>
              {
                largeCardsLocal.map((item, index) => {
                  return (
                    <Grid key={index} item xs={12} sx={{ padding: 2 }}>
                      <LargeCards
                        Heading={item.Heading}
                        Text={item.Text}
                        Img={item.Img}
                        navigationKey={item.navigationKey}
                        iconNavigation={(naviagtion: string) => handleNavigationLargeCards(naviagtion)}
                      />
                    </Grid>
                  )
                })
              }
            </Grid>
            <Grid sx={{ width: "inherit", height: { xs: "auto", sm: "inherit" }, padding: 0, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll" } }} item xs={12} sm={6} md={5} lg={4}>
              <Box sx={{ marginTop: { xs: "-50px", sm: "unset" } }}>
                <Toolbar />
              </Box>
              <Box sx={{ px: '1rem', mt: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography className='mediumButtonText'>Explore Top Rated Funds</Typography>
                <Typography onClick={() => navigate('/explorefunds', { state: { status: globalConstant.CEF_EXPLORE_FUND } })} style={{ cursor: "pointer" }} className='textLink' >View All</Typography>
              </Box>
              {
                companyCardsLocal &&
                  companyCardsLocal.length ?
                  <>
                    {
                      companyCardsLocal.map((item: any, index: number) => {
                        { console.log(item) }

                        return (
                          <Grid
                            onClick={() => {
                              // navigate("/funddetails")
                              // console.log(item, "home")
                              navigate("/funddetails", { state: { secid: item?.secid, parentRoute: "/home" } });
                            }}
                          >
                            <CompanyFundCard
                              key={index}
                              {...item}
                            // logo={item?.logo}
                            // name={item?.name}
                            // cap={item?.cap}
                            // type={item?.type}
                            // price={item?.price}
                            // year1={item?.year1}
                            // year3={item?.year3}
                            // year5={item?.year5}
                            // rating={item?.rating}
                            // morning_star_logo={item?.morning_star_logo}
                            />
                          </Grid>
                        )
                      })
                    }
                  </>
                  :
                  <Grid sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography component="h4" sx={{ color: "var(--uiDarkGreyColor)", fontSize: "12px" }}>No record found!</Typography>
                  </Grid>
              }


              <Grid spacing={1} container sx={{ px: "1rem" }}>
                <Grid item xs={12} sm={12} md={6} onClick={() => navigate("/saveTax")}  >
                  <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                    <img width="100%" src={Ad1} alt="Ad1" />
                  </Box>
                  <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
                    <img width="100%" src={Ad1_1} alt="Ad1" />
                  </Box>
                </Grid>
                <Grid onClick={() => navigate("/startAnSip")} item xs={12} sm={12} md={6}>
                  <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                    <img width="100%" src={Ad2} alt="Ad1" />
                  </Box>
                  <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
                    <img width="100%" src={Ad1_2} alt="Ad1" />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      <Modal open={openPin} onClose={handleModalClose}>
        <Box style={style.modalContainer}>
          <img alt="Money Sprint" src={MonoLogo} style={style.logo} />
          <Typography textAlign="center" variant='h5' >Hi, Rahul Malhotra</Typography>
          <Typography textAlign="center" variant='h4' >Verify 4-digit PIN</Typography>
          <OtpInput
            isInputNum={true}
            value={OTP}
            onChange={handleOtpChange}
            numInputs={4}
            shouldAutoFocus={true}
            hasErrored={error?.includes("Log_PIN")}
            containerStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "10px",
              color: "black"
            }}
            inputStyle={{
              border: "1px solid #dddfe2",
              borderRadius: "4px",
              padding: "10px",
              margin: "10px",
              width: "30px",
              height: "30px",
              color: "black",
              boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)"
            }}
            errorStyle={{
              border: "1px solid red",
            }}
          />
          <Typography textAlign="center" variant='caption' sx={{ color: " #8787a2" }} >Please enter PIN here</Typography>
          <div style={{ width: "90%" }} onClick={() => setOpenModal(false)}>
            <PINVerifyButton otp={OTP} />
          </div>
          <Typography sx={{ fontSize: "14px", color: " #7b7b9d" }}>
            <span onClick={() => navigate("/verifysec")} className="textLink" style={{ fontSize: "14px", cursor: "pointer", textDecoration: "underline" }} >Forgot PIN?</span></Typography>
        </Box>
      </Modal>
    </Box>
  )
}

export default Home