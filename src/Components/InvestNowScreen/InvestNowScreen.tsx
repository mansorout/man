import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import OtpInput from 'react-otp-input';

//component imports
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import InvestCard from '../../Modules/Cards/InvestCard';
import { InvestButton } from '../../Modules/Buttons/InvestButton';
import PINVerifyButton from '../../Modules/Buttons/PINVerifyButton';
import InvestSecondCard from '../../Modules/Cards/InvestSecondCard';
import LineChart from "../../Components/CommonComponents/Charts/LineChart";
import SaveSipDetailsButton from '../../Modules/Buttons/SaveSipDetailsButton';

//chart imports
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';

//global function and constants imports
import { checkExpirationOfToken, isMultipleofNumber } from '../../Utils/globalFunctions';
import { globalConstant, investmentTypeValues } from '../../Utils/globalConstant';
import { getData, postData } from '../../Utils/api';
import siteConfig from '../../Utils/siteConfig';
import { setTokenExpiredStatusAction } from '../../Store/Authentication/actions/auth-actions';

//style and mui imports
import './InvestNowScreen.css'
import Link from '@mui/material/Link'
import { makeStyles } from '@mui/styles';
import Avatar from '@mui/material/Avatar';
import CloseIcon from '@mui/icons-material/Close';
import { Box, fontSize, styled } from '@mui/system'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { AppBar, Button, Divider, Menu, MenuItem, Theme, useTheme } from '@mui/material';
import { ExpandLessOutlined, ExpandMoreOutlined, Support, SupportOutlined } from '@mui/icons-material';
import { Assessment, Home as HomeIcon, MenuRounded, PowerSettingsNew, Search } from '@mui/icons-material'
import { Breadcrumbs, Card, CardContent, Grid, Modal, Stack, TextField, Typography } from '@mui/material'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled } from '@mui/base';
import { closelogo, ellipslogo, graphimage, lockinlogo, Logo, MonoLogo, Profile, rightsign, SIP, sipiclogo, withdrawiclogo } from '../../Assets/index'
import { setInvestmentCardTypeAction } from '../../Store/Recommendations/actions/recommendations-action';
import { onetimeLumpsumamount, ONE_TIME_LUMPSUM_AMOUNT } from '../../Store/Duck/InvestmentType';
import { getUlipReturnApi } from "../../Store/Insurance/thunk/insurance-thunk";
import { ulipReturnApiParamsTypes } from '../../Store/Insurance/constants/types';
// const { ulipInsuranceType, onetypeLumpsumAmount } = useSelector((state: any) => state.InvestmentTypeReducers)
import {
  SaveTaxInvestmentAmount,
  ULIP_LUMPSUM,
  ULIP_MONTHLY,
  ULIP_INSURANCE_AMOUNT,
  insuranceUlipLumpsumAction,
  insuranceUlipMonthlyAction,
  insuranceUlipAmount,
} from '../../Store/Duck/InvestmentType';
type IProps = {
  cardType: string;
  heading: string;
};

type chartDataProps = {
  labels: string
  expectedValues: any,
  projectedValues: any,
}

type expectedReturnProps = {
  years: number,
  investedvalue: string,
  projectedvalue: number
}

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
    // height: "100vh"
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
  ca: {

    backgroundColor: "#64dbff",
    width: "32px",
    height: "32px",

    opacity: "0.5",


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

  dividerBox: {
    width: "100%",
    height: "1px",
    backgroundColor: "#acb4bf",

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
  ca_M: {
    backgroundColor: "#64dbff",
    width: "32px",
    height: "32px",

    opacity: "0.5",
  } as React.CSSProperties,

  appBar: {
    backgroundColor: "white",
  },
  rupeesIcon: {
    fontSize: '16px !important',
  }
}

const useStyles: any = makeStyles((theme: Theme) => ({
  appbar: {
    backgroundColor: "white",
    width: "100%",
    height: "64px",
    position: "fixed",
    zIndex: "3000",
  },
  actibeBtn: {
    "&:focus": {
      backgroundColor: "rgb(111 121 239 / 40%) !important",
    },
  },
  btn: {
    "&:hover": {
      backgroundColor: "rgb(111 121 239 / 40%) !important",
    }
  }
}));

const initialExpectedReturns = {
  years: 0,
  investedvalue: "0",
  projectedvalue: 0
}

const enumPriceList = {
  ZERO: "0",
  ONE_THOUSAND: "+1000",
  FIVE_THOUSAND: "+5000",
  TEN_THOUSAND: "+10,000"
}

const arrPriceList = [1000, 5000, 10000];

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom' as const,
      display: true,
    },
    title: {
      display: true,
      // text: 'Chart.js Line Chart',
    },
  },
};


const enumPriceTag = {
  // THOUSAND: 'Thousand',
  THOUSAND: '',
  LAC: "Lac",
  CRORE: "Cr"
}

function InvestNowScreen(props: IProps) {

  const classes = useStyles();
  const refContainer = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  ChartJS.register(Filler, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

  const timerRef: any = useRef();

  const g_investment = useSelector(
    (state: any) => state?.recommendationsReducer?.investment
  );
  
  const [error, setError] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [projectedValue, setProjectedValue] = useState<number>(0);
  const [activePriceAmount, setActivePriceAmount] = useState<string>(enumPriceList.ZERO);
  const [expectedReturns, setExpectedReturns] = useState<expectedReturnProps[]>([initialExpectedReturns]);
  const [amountMutipleofH, setAmountMutipleofH] = useState<any>()
  const chartDataDetails: any = useMemo(() => {
    return {
      labels: expectedReturns.map((item: expectedReturnProps) => item["years"]), //x
      datasets: [
        {
          label: "Projected Value",
          data: expectedReturns.map((item: expectedReturnProps) => item["projectedvalue"]),
          fill: true,
          borderColor: "#742774"
        },
      ]
    };
  }, [expectedReturns]);
  
  useEffect(() => {
    if(!g_investment?.type){
      let strCardType:string | null = localStorage.getItem(siteConfig.INVESTMENT_CARD_TYPE);
      dispatch(setInvestmentCardTypeAction(strCardType));
    }  
  }, []);

  const handleNavigation = () => {
    navigate("/oneTimeInvestment", {
      state: {
        cardType: globalConstant.LUMPSUM_INVESTMENT
      }
    })
  }

  const handleActivePriceAmount = (strAmount: string, nAmount: number) => {
    setActivePriceAmount(strAmount);
    setAmount((prev: number) => prev + nAmount);
    let val = amount + nAmount;
    handleTimer(getExpectedFundReturnList, val);
  }

  const handleTimer = (cb: any | void, a: any) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => { 
      cb(a);
    }, 200);
  }

  const handleOnChangeAmount = (e: any) => {
    setAmountMutipleofH(e.target.value)
    console.log(amountMutipleofH)
    let { value } = e?.target;
    
    setAmount(value && value.length ? parseInt(value) : 0);

    if (!isMultipleofNumber(value, 100)) { 
      setError("Amount should be multiple of 100.")
    }
    else {
      setError("");
      handleTimer(getExpectedFundReturnList, value);
    }
  }

  const getExpectedFundReturnList = (amount: number) => {
    let strUrl: string = siteConfig.RECOMMENDATION_FUND_RETURN + `?investmenttype_id=11&amount=${amount}`;
    getData(
      strUrl,
      siteConfig.CONTENT_TYPE_APPLICATION_JSON,
      siteConfig.RECOMENDATION_API_ID
    ).then(res => res.json())
      .then((data: any) => {
        if (checkExpirationOfToken(data?.code)) {
          dispatch(setTokenExpiredStatusAction(true));
          return;
        }

        if (data?.error === true) return;
        let arrExpectedReturnList :expectedReturnProps[] = data?.data;
        if(arrExpectedReturnList && arrExpectedReturnList.length ){
          setExpectedReturns(arrExpectedReturnList);
          setProjectedValue(arrExpectedReturnList[0]?.projectedvalue);
        }
        })
      .catch(err => {
        setExpectedReturns([]);
        setProjectedValue(0);
        console.log(err);
      });
  }

  const getExactPriceWithTag = (price: number) => {
    if (!price) return "";
    if (price > 999 && price < 100000) return price +" "+ enumPriceTag.THOUSAND;
    else if (price > 100000 && price < 10000000 ) return price +" "+ enumPriceTag.LAC;
    else if (price > 10000000 && price < 100000000000000) return price +" "+ enumPriceTag.CRORE;
    else return price;
  }

  const saveMutualFundGenerate = (id:number, path:string)=>{
    if(!amount){
      setError("Please enter amount!");
      return;
      
    }

    if(amount < 5000){
      setError("Amount should be more than 5000!");
      return;
    }

    postData(
      {investmenttype_id: id, amount: amount},
      siteConfig.RECOMMENDATION_MUTUALFUND_GENERATE,
      siteConfig.CONTENT_TYPE_APPLICATION_JSON,
      siteConfig.RECOMENDATION_API_ID
    ).then(res=>res.json())
    .then((data:any)=>{
      if(checkExpirationOfToken(data?.code)){
        dispatch(setTokenExpiredStatusAction(true));
        return;
      }

      if(data?.error === true){
        return;
      }
      localStorage.setItem(siteConfig.INVESTMENT_USER_AMOUNT, amount?.toString());
      navigate(path);
    }).catch(err=> {

      console.log(err);
    })
  }

  return (
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <Box sx={style.main}>
        <Grid
          container
          spacing={0}
        >
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>
          <Grid container xs={13} sm={11} md={10} >
            <Grid item xs={12} sm={10} md={10} sx={{ height: "100vh",
            overflow: "scroll",
            width: "100%",
            display: "block",
            justifyContent: "center", }} className="ScrollBarStyle22">
              <Toolbar />
              <Grid container>
              <Box role="presentation" className="boxBreadcrumb" sx={{ margin: "27px 0px 21px 25px" }}>
                <Breadcrumbs aria-label="breadcrumb">
                  <Link color="#6495ED" underline="always" href='Home' >
                    <Typography className='burgerText'> Home</Typography>
                  </Link>
                  <Link underline="always" onClick={() => handleNavigation()}>
                    <Typography className='burgerText'>Investment</Typography>
                  </Link>
                  <Link underline="none" color="#878782"  >
                    <Typography className='burgerText' >One-time lumpsum</Typography>
                  </Link>
                </Breadcrumbs>
              </Box>
              </Grid>
              <Box className="BoxPadding" >
                <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="investWholeStyle">
                  <Grid item md={6} xs={12}>
                    <Card sx={{ minWidth: 275, borderRadius: "8px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", backgroundColor: "#ffffff" }}
                      className="InvestStylepadview">
                      <CardContent>
                        <Stack m={2} spacing={6}>
                          <b
                            style={{
                              width: "100%",
                              // margin: "-4% 303px 25px 0",
                              margin:"6px 12px 18px 0px",
                              textAlign: "left",
                              color: "#3c3e42"
                            }}
                          >
                            One-time lumpsum
                          </b>

                          <List>
                            <TextField
                              label="I want to invest"
                              name="middleName"
                              fullWidth
                              InputProps={{
                                startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} sx={{ fontSize: "16px" }} />,
                              }}
                              placeholder="1,00,000"
                              // name="amount"
                              value={amount || amountMutipleofH || ""}
                              onChange={handleOnChangeAmount}
                              sx={{
                                margin: " -55px 0 20px",
                                boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)",
                                backgroundColor: " #fff",
                              }}
                            ></TextField>

                            {
                              error && error.length ?
                                <Typography
                                  sx={{
                                    width: "304px",
                                    height: "14px",
                                    margin: "-8px 135px 0 1px",
                                    fontSize: "12px",
                                    fontWeight: "normal",
                                    fontStretch: "normal",
                                    fontStyle: "normal",
                                    lineHeight: " 1.33",
                                    letterSpacing: "normal",
                                    textAlign: " left",
                                    color: "var(--errorColor)",
                                  }}
                                >
                                  {error}
                                </Typography>
                                : <Typography
                                  sx={{
                                    width: "304px",
                                    height: "14px",
                                    margin: "-8px 135px 0 1px",
                                    fontSize: "12px",
                                    fontWeight: "normal",
                                    fontStretch: "normal",
                                    fontStyle: "normal",
                                    lineHeight: " 1.33",
                                    letterSpacing: "normal",
                                    textAlign: " left",
                                    color: "#8787a2",
                                  }}
                                >
                                  You can start small, starting from ₹5,000
                                </Typography>
                            }
                            <Stack direction="row" spacing={4} sx={{ marginTop: "14px" }} className="ButtonStyleInvest">
                              <Button
                                variant="contained"
                                // disabled
                                className={activePriceAmount === enumPriceList.ONE_THOUSAND ? classes.actibeBtn : classes.btn}
                                sx={{
                                  // BackgroundColor: "#6c63ff",
                                  color: "rgba(0, 0, 0, 0.26)",
                                  boxShadow: "none",
                                  backgroundColor: "rgba(0, 0, 0, 0.12)",
                                  // BackgroundColor: "var(--typeIndigoColor) !important",
                                  borderRadius: "2px",
                                  width: "60px",
                                  height: "33px",
                                  margin: " 2.2 12px 0 0",
                                  padding: "10px 12px 9px",
                                  
                                }}
                                onClick={() => (handleActivePriceAmount(enumPriceList.ONE_THOUSAND, arrPriceList[0]))}
                              >
                                <b style={{ color: "#6c63ff" }}>{enumPriceList.ONE_THOUSAND}</b>
                              </Button>
                              <Button
                                variant="contained"
                                className={activePriceAmount === enumPriceList.FIVE_THOUSAND ? classes.actibeBtn : classes.btn}
                                // disabled
                                sx={{
                                  // BackgroundColor: "#6c63ff",
                                  color: "rgba(0, 0, 0, 0.26)",
                                  boxShadow: "none",
                                  backgroundColor: "rgba(0, 0, 0, 0.12)",
                                  borderRadius: "2px",
                                  // color: "#6c63ff",
                                  width: "64px",
                                  height: "35px",
                                  margin: " 2.2 12px 0 0",
                                  padding: "10px 12px 9px",
                                }}
                                onClick={() => (handleActivePriceAmount(enumPriceList.FIVE_THOUSAND, arrPriceList[1]))}
                              >
                                <b style={{ color: "#6c63ff" }}>{enumPriceList.FIVE_THOUSAND}</b>
                              </Button>
                              <Button
                                variant="contained"
                                href="#contained-buttons"
                                className={activePriceAmount === enumPriceList.TEN_THOUSAND ? classes.actibeBtn : classes.btn}
                                // disabled
                                sx={{
                                  // BackgroundColor: "#6c63ff",
                                  color: "rgba(0, 0, 0, 0.26)",
                                  boxShadow: "none",
                                  backgroundColor: "rgba(0, 0, 0, 0.12)",
                                  borderRadius: "2px",
                                  // color: "#6c63ff",
                                  width: "75px",
                                  height: "35px",
                                }}
                                onClick={() => (handleActivePriceAmount(enumPriceList.TEN_THOUSAND, arrPriceList[2]))}
                              > <b style={{ color: "#6c63ff" }}>{enumPriceList.TEN_THOUSAND}</b>
                              </Button>
                            </Stack>
                            <InvestButton 
                              cardType={props?.cardType}
                              saveMutualFundGenerate={(id, path)=> saveMutualFundGenerate(id, path)}
                              lumpsumPrice={amountMutipleofH}
                          
                             />
                            <Grid container spacing={2} textAlign="center">
                              <Grid item xs={12} md={12} onClick={()=> {
                                navigate("/oneTimeInvestment", {state:{cardType: globalConstant.LUMPSUM_INVESTMENT}})
                                dispatch(setInvestmentCardTypeAction(globalConstant.LUMPSUM_INVESTMENT));
                                // getinvestmentTypeListDataWrtLookupId(investmentTypeValues.LUMPSUM);
                                localStorage.setItem(siteConfig.INVESTMENT_CARD_TYPE, globalConstant.LUMPSUM_INVESTMENT)
                                }}>

                                <Typography sx={{ fontSize: "11px", fontWeight: "500", textAlign: "center", color: "#6c63ff" }} >
                                  <b style={{ marginTop: "4%", color: "#6c63ff", position: 'relative', top: "8.4px", width: "16px", height: "16px" }}><HelpOutlineIcon /></b>&nbsp;
                                  KNOW MORE ABOUT INVESTMENT</Typography>
                              </Grid>
                            </Grid>
                          </List>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Card sx={{ borderRadius: "8px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", backgroundColor: "#ffffff", }}>
                      <CardContent >
                        <b style={{ color: "#3c3e42", }}>Expected returns</b>
                        <Typography sx={{ marginTop: "-2%" }}>
                          {/* <img alt="Money Sprint" src={graphimage} style={{ width: " 100%", height: "67px", margin: "0 0 14px", }}></img> */}
                          <LineChart
                            optionsValues={chartOptions}
                            dataValues={chartDataDetails}
                            onClick={(data) => setProjectedValue(data?.value ? data?.value : 0)}
                          />
                        </Typography>
                        <Grid container spacing={1} sx={{}}>
                          <Grid item xs={6} sx={{
                            width: " 84px", height: "14px", fontFamily: " Roboto", fontSize: "12px",
                            textAlign: "left", color: " #7b7b9d", paddingLeft: "0px"
                          }}>
                            Invested Value
                          </Grid>
                          <Grid item xs={6} sx={{
                            width: " 84px", height: "14px", fontFamily: " Roboto", fontSize: "12px", fontWeight: "normal",
                            textAlign: "right", color: " #7b7b9d"
                          }}>
                            Projected Value
                          </Grid>
                        </Grid>
                        <Grid container spacing={1} sx={{ paddingTop: "15px", paddingLeft: '2%' }}>
                          <Grid item xs={6} sx={{
                            width: " 57px", height: "24px", fontFamily: " Roboto",
                            fontWeight: "300", textAlign: "left",
                          }}>
                            <b style={{ color: " #3c3e42", fontSize: "20px" }}>
                              ₹{amount > arrPriceList[0] - 1 ? getExactPriceWithTag(amount) : 0}
                            </b>
                          </Grid>
                          <Grid item xs={6} sx={{
                            width: " 87px", height: "24px", paddingTop: "17px",
                            fontFamily: " Roboto", fontWeight: "500", textAlign: "right",

                          }}>
                            <b style={{ color: " #23db7b", fontSize: "20px", }}>
                            ₹{projectedValue ? getExactPriceWithTag(projectedValue) : 0}
                            </b>
                          </Grid>
                        </Grid>
                        {/* <Box style={style.dividerBox}/> */}
                        <div style={{ paddingTop: "5%" }}>
                          <Divider />
                        </div>
                        <Grid container columnSpacing={0} sx={{ paddingTop: '23px' }}>
                          <Grid item xs={1} sx={{ paddingLeft: "0px" }}>
                            <Avatar alt="" src={withdrawiclogo} style={style.ca_M} />
                          </Grid>
                          <Grid item xs={5} sx={{ paddingTop: "10px", paddingLeft: "5px" }}>
                            <Typography sx={{ fontSize: {xs:"10px", sm:"12px"}, color: "#7b7b9d" }}  > *Anytime Withdraw</Typography>
                          </Grid>
                          <Grid item xs={6}>
                              <Grid container>
                              <Grid item xs={4} sm={5} sx={{ paddingLeft: "0px" }}>
                              <Box className="imageRightBox" style={{float: "right"}}>
                              <Avatar alt="" src={lockinlogo} style={style.ca} />
                              </Box>
                          </Grid>
                          <Grid item xs={8} sm={7} sx={{ paddingTop: "9px", paddingLeft: "5px" }}>
                            <Typography sx={{ fontSize:{xs:"10px", sm:"12px"}, color: "#7b7b9d" }}> *No Lock-in Period</Typography>
                          </Grid>
                              </Grid>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default InvestNowScreen

function PinModalHomeCloseActon(): any {
  throw new Error('Function not implemented.');
}

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}

//  {/* < Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "-3%" }}> <Box>1Y</Box><Box>3Y</Box>
//                             <Box sx={{ marginLeft: "11px" }}> <b style={{ color: "#6c63ff" }}>5Y</b>  <img alt="Money Sprint" src={ellipslogo} style={{
//                               width: "14px", marginTop: "-80%", marginRight: "-50%", borderRadius: "30px", position: "relative", top: "-20px", left: "-18px",
//                               fontSize: "12px", boxShadow: "0 3px 6px 0 rgba(75, 123, 236, 0.12)", backgroundColor: "#6c63ff",
//                             }}></img></Box>
//                             <Box sx={{ marginLeft: "-11px" }}>10Y</Box> <Box>15Y</Box> <Box>20Y</Box>
//                           </Box> */}


//  {/* 
//       <Modal
//         sx={{ backdropFilter: "blur(10px)" }}
//         keepMounted

//         onClose={() => setOpenModal(false)}
//         aria-labelledby="keep-mounted-modal-title"
//         aria-describedby="keep-mounted-modal-description"
//         open={openModal} >
//         <Box style={style.modalContainer}>
//           <Grid container spacing={1}>
//             <Grid item xs={12} textAlign="right">
//               <img alt="Money Sprint" src={closelogo} style={{ width: "24px" }} />
//             </Grid>
//           </Grid>

//           <img alt="Money Sprint" src={sipiclogo} style={{
//             marginTop: "-9%",
//             width: " 38px",
//             height: "38px"
//           }} />

//           <b style={{ textAlign: "center" }}>Help us know you better.</b>
//           <Typography textAlign="center" variant='h5' sx={{ fontSize: "14px" }}  >Share details below to view recommendations</Typography>
//           <form>
//           <Box
//             component="form"
//             sx={{
//               '& > :not(style)': { m: 2, width: '19ch' },
//             }}
//             noValidate
//             autoComplete="off"
//           >
//             <TextField label="FirstName" 
//             sx={{ color: "#919eb1", fontSize: "17px"
           
//           }}
             
//             />
//             &nbsp;&nbsp;&nbsp;
//             <TextField sx={{ color: "#919eb1", fontSize: "17px"}} label="LastName" />
//           </Box>
//           <Box sx={{ width: "95%", marginTop: "2%" }}>
//             <TextField fullWidth sx={{ color: "#919eb1", fontSize: "17px", marginTop: "1%",marginLeft:"3%" }} label="Email Address" id="fullWidth" />
//           </Box>
//           <Box sx={{ width: "95%", marginTop: "2%" }}>
//             <TextField type="date" sx={{ color: "#919eb1", fontSize: "17px", marginTop: "4%", marginLeft:"3%"}} fullWidth label="Date of Birth" id="fullWidth" />
//           </Box>


//           <div style={{ width: "100%" }} onClick={() => setOpenModal(false)}>
//             <SaveSipDetailsButton otp={OTP}  />
//           </div>
//           </form>
//         </Box>
//       </Modal> */}