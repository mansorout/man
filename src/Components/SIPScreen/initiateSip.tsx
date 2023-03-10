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
import { checkExpirationOfToken, isMultipleofNumber, numDifferentiation } from '../../Utils/globalFunctions';
import { globalConstant, investmentTypeValues } from '../../Utils/globalConstant';
import { getData, postData } from '../../Utils/api';
import siteConfig from '../../Utils/siteConfig';
import { setTokenExpiredStatusAction } from '../../Store/Authentication/actions/auth-actions';

//style and mui imports
import '../InvestNowScreen/InvestNowScreen.css'
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
      color: "#fff",
      backgroundColor: "rgb(111 121 239 / 40%) !important",
    },
    "&:hover": {
      color: "#fff",
      backgroundColor: "rgb(111 121 239 / 40%) !important",
    },
  },
  btn: {
    "&:hover": {
      backgroundColor: "rgb(111 121 239 / 40%) !important",
    }
  }
}));


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

type IProps = {
  cardType: string;
  heading: string;
};

type expectedReturnProps = {
  years: number,
  investedvalue: string,
  projectedvalue: number
}

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

const enumPriceTag = {
  THOUSAND: 'Thousand',
  LAC: "Lac",
  CRORE: "Cr"
}

const arrPriceList = [1000, 5000, 10000];


const enumDefaultAmount = {
  // INVESTED_VALUE: 1000
  INVESTED_VALUE: 5000
}


const InitiateSip = (props: IProps) => {

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
  const [amount, setAmount] = useState<any>();
  const [investedValue, setInvestedValue] = useState<any>(0)
  const [projectedValue, setProjectedValue] = useState<number>(0);
  const [activePriceAmount, setActivePriceAmount] = useState<string>(enumPriceList.ZERO);
  const [expectedReturns, setExpectedReturns] = useState<expectedReturnProps[]>([initialExpectedReturns]);
  const [chartActiveIndex, setChartActiveIndex] = useState(2)

  const filterChartData = (arr: any[]) => {
    return arr.filter((item: expectedReturnProps) =>
      item?.years < 5 ?
        item?.years % 2 !== 0
        :
        item?.years % 5 === 0
    )
  }

  const chartDataDetails: any = useMemo(() => {

    const tempInitialVal = expectedReturns.filter((item: any) => item?.years === 5)[0];
    setInvestedValue(tempInitialVal?.investedvalue)
    setProjectedValue(tempInitialVal?.projectedvalue)
    return {
      labels: filterChartData(expectedReturns).map((item => item['years'])), //x
      datasets: [
        {
          label: "Projected Value",
          data: filterChartData(expectedReturns).map((item) => item["projectedvalue"]),
          fill: true,
          borderColor: "#742774"
        },
      ]
    };
  }, [expectedReturns]);

  useEffect(() => {
    if (!g_investment?.type) {
      let strCardType: string | null = localStorage.getItem(siteConfig.SIP_CARD_TYPE);
      dispatch(setInvestmentCardTypeAction(strCardType));
    }

    // saveMutualFundGenerate(12, "/SipComparison")
    // handleActivePriceAmount(enumPriceList.FIVE_THOUSAND, arrPriceList[0])
    // dispatch(setInvestmentCardTypeAction(strCardType));

    dispatch(setInvestmentCardTypeAction(globalConstant.SIP_INVESTMENT));
    setAmount(enumDefaultAmount.INVESTED_VALUE)
    getExpectedFundReturnList(enumDefaultAmount.INVESTED_VALUE);
  }, []);

  const handleNavigation = () => {
    navigate("/sipInvestment", {
      state: {
        cardType: globalConstant.SIP_INVESTMENT
      }
    })
  }

  // const handleActivePriceAmount = (strAmount: string, nAmount: number) => {
  //   setActivePriceAmount(strAmount);
  //   setAmount((prev: number) => prev + nAmount);
  //   let val = amount + nAmount;
  //   handleTimer(getExpectedFundReturnList, val);
  // }

  const handleActivePriceAmount = async (strAmount: string, nAmount: number) => {
    setError("");
    setActivePriceAmount(strAmount);
    setAmount((prev: any) => {
      console.log(prev);
      let val: number = 0;
      if (prev) {
        val = parseInt(prev) + nAmount;

        if (!isMultipleofNumber(val, 100)) {
          setError("Amount should be multiple of 100.");
          handleTimer(getExpectedFundReturnList, 0);
          return val;
        }

        handleTimer(getExpectedFundReturnList, val);
        return val;
      }

      handleTimer(getExpectedFundReturnList, nAmount);
      return nAmount;
    }
    );
    let val = amount + nAmount;
  }

  const handleTimer = (cb: any | void, a: any) => {
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      cb(a);
    }, 200);
  }

  // const handleOnChangeAmount = (e: any) => {
  //   let { value } = e?.target;

  //   setAmount(value && value.length ? parseInt(value) : null);

  //   // if (amount  > arrPriceList[0] - 1) {
  //   //   setError("Amount should be more than ???5000");
  //   //   return;
  //   // }

  //   if (!isMultipleofNumber(value, 100)) {
  //     setError("Amount should be multiple of 100.")
  //   }
  //   else {
  //     setError("");
  //     handleTimer(getExpectedFundReturnList, value);
  //   }
  // }

  const handleOnChangeAmount = (e: any) => {
    let { value } = e?.target;

    if (value && value.length) {
      value = parseInt(value)
      if (!value) return; //for handling NaN value
      if (value < 0) return; // for handling less than zero amount??
      setAmount(value);

    } else {
      value = 0;
      setAmount("");
    }

    //check input number is multiple of 100 or not!
    if (!isMultipleofNumber(value, 100)) {
      setError("Amount should be multiple of 100.");
      handleTimer(getExpectedFundReturnList, value);
      return;
    }

    //get graph data from api wrt input amount!
    handleTimer(getExpectedFundReturnList, value);

    //check that input amount is less than 5000 for lumpsum!
    if (value < 1000) {
      setError("Amount should not be less than 1000!");
      return;
    }

    setError("");
  }

  const getExpectedFundReturnList = (amount: number) => {
    let strUrl: string = siteConfig.RECOMMENDATION_FUND_RETURN + `?investmenttype_id=12&amount=${amount}`;
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
        let arrExpectedReturnList: expectedReturnProps[] = data?.data;
        if (arrExpectedReturnList && arrExpectedReturnList.length) {
          setExpectedReturns(arrExpectedReturnList);
          setProjectedValue(arrExpectedReturnList[0]?.projectedvalue);
          console.log("arrExpectedReturnList :", arrExpectedReturnList)
          localStorage.setItem(siteConfig.SIP_USER_AMOUNT, amount?.toString());
        }
      })
      .catch(err => {
        setExpectedReturns([]);
        setProjectedValue(0);
        console.log(err);
      });
  }


  const chartOptions = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: true //this will remove only the label
        }
      },
      y: {
        border: {
          color: '#fff'
        },
        grid: {
          display: false,
        },
        ticks: {
          display: false //this will remove only the label
        },
        gridLines: {
          display: false,
          drawBorder: false,
        },
        // 'dataset.maxBarThickness': 5,
      },
    },
    interaction: {
      mode: 'nearest'
    },
    elements: {
      point: {
        radius: customRadius,
        display: true
      }
    },
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

  function customRadius(context: any) {
    // debugger
    let index = context.dataIndex;
    let value = context.dataset.data[index];
    // return index === 3 || value >= 8 ? 10 : 2;
    // console.log("customRadius :", index, value)
    return index === chartActiveIndex ? 10 : 4;
  }

  const saveMutualFundGenerate = (id: number, path: string) => {
    if (!amount) {
      setError("Please enter amount!");
      return;
    }

    // if (amount < 1000) {
    //   setError("Amount should be more than 1000!");
    //   return;
    // }

    if (error && error.length) {
      return;
    }

    postData(
      { investmenttype_id: id, amount: amount || enumDefaultAmount?.INVESTED_VALUE },
      siteConfig.RECOMMENDATION_MUTUALFUND_GENERATE,
      siteConfig.CONTENT_TYPE_APPLICATION_JSON,
      siteConfig.RECOMENDATION_API_ID
    ).then(res => res.json())
      .then((data: any) => {
        if (checkExpirationOfToken(data?.code)) {
          dispatch(setTokenExpiredStatusAction(true));
          return;
        }

        if (data?.error === true) {
          return;
        }
        // localStorage.setItem(siteConfig.INVESTMENT_USER_AMOUNT, amount?.toString());
        // localStorage.setItem(siteConfig.SIP_USER_AMOUNT, amount?.toString());
        localStorage.setItem(siteConfig.INVESTMENT_USER_AMOUNT, amount?.toString());
        navigate(path);
      }).catch(err => {

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
            <Grid item xs={12} sm={10} md={10} sx={{
              height: "100vh",
              overflow: "scroll",
              width: "100%",
              display: "block",
              justifyContent: "center",
            }} className="ScrollBarStyle22">
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
                      <Typography className='burgerText' >Start an SIP</Typography>
                    </Link>
                  </Breadcrumbs>
                </Box>
              </Grid>
              <Box className="BoxPadding" >
                <Grid container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="investWholeStyle">
                  <Grid item md={6} xs={12}>
                    <Card sx={{ minWidth: { xs: "100%", sm: "275" }, borderRadius: "8px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", backgroundColor: "#ffffff" }}
                      className="InvestStylepadview">
                      <CardContent>
                        <Stack m={2} spacing={6}>
                          <b
                            style={{
                              width: "100%",
                              // margin: "-4% 303px 25px 0",
                              margin: "6px 12px 18px 0px",
                              textAlign: "left",
                              color: "#3c3e42"
                            }}
                          >
                            Start an SIP
                          </b>

                          <List>
                            <TextField
                              label="I want to invest"
                              name="middleName"
                              // type="number"
                              type="tel"
                              fullWidth
                              InputProps={{
                                startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} sx={{ fontSize: "16px" }} />,
                              }}
                              placeholder="1,00,000"
                              // name="amount"
                              value={amount}
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
                                    margin: "-8px 1px 0 1px",
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
                                  You can start small, starting from ???1,000
                                </Typography>
                            }
                            <Stack direction="row" spacing={1.5} sx={{ marginTop: "14px" }} className="ButtonStyleInvest">
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
                              // cardType={props?.cardType}
                              cardType={globalConstant.SIP_INVESTMENT}
                              saveMutualFundGenerate={(id, path) => saveMutualFundGenerate(id, path)}
                            />
                            <Grid container spacing={2} textAlign="center">
                              <Grid item xs={12} md={12} onClick={() => {
                                navigate("/oneTimeInvestment", { state: { cardType: globalConstant.SIP_INVESTMENT } })
                                dispatch(setInvestmentCardTypeAction(globalConstant.SIP_INVESTMENT));
                                // getinvestmentTypeListDataWrtLookupId(investmentTypeValues.LUMPSUM);
                                localStorage.setItem(siteConfig.INVESTMENT_CARD_TYPE, globalConstant.SIP_INVESTMENT)
                              }}>

                                <Typography sx={{ fontSize: "11px", fontWeight: "500", textAlign: "center", color: "#6c63ff" }}>
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
                            onClick={(data) => {
                              let objData: any = 0;
                              if (expectedReturns && expectedReturns.length) {
                                objData = expectedReturns.filter((item: any) => item?.projectedvalue === data?.value)[0];
                                const activeIndex = filterChartData(expectedReturns).findIndex((item) => item?.projectedvalue === data?.value)
                                setChartActiveIndex(activeIndex);
                                console.log(objData?.investedvalue, "nInvestedValue", activeIndex);
                                setInvestedValue(objData?.investedvalue);
                                setProjectedValue(data?.value ? data?.value : 0)
                              }
                            }}
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
                              {/* ???{numDifferentiation(amount > arrPriceList[0] - 1 ? getExactPriceWithTag(amount) : 0)} kp */}
                              {/* ???{amount > arrPriceList[0] - 1 ? numDifferentiation(amount) : 0} */}
                              {/* ???{investedValue > arrPriceList[0] - 1 ? numDifferentiation(investedValue) : numDifferentiation(enumDefaultAmount?.INVESTED_VALUE)} */}
                              ???{investedValue > arrPriceList[0] - 1 ? numDifferentiation(investedValue) : 0}
                            </b>
                          </Grid>
                          <Grid item xs={6} sx={{
                            width: " 87px", height: "24px", paddingTop: "17px",
                            fontFamily: " Roboto", fontWeight: "500", textAlign: "right",

                          }}>
                            <b style={{ color: " #23db7b", fontSize: "20px", }}>
                              ???{projectedValue ? numDifferentiation(projectedValue) : 0}
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
                            <Typography sx={{ fontSize: { xs: "10px", sm: "12px" }, color: "#7b7b9d" }}  > *Anytime Withdraw</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Grid container>
                              <Grid item xs={4} sm={5} sx={{ paddingLeft: "0px" }}>
                                <Box className="imageRightBox" style={{ float: "right" }}>
                                  <Avatar alt="" src={lockinlogo} style={style.ca} />
                                </Box>
                              </Grid>
                              <Grid item xs={8} sm={7} sx={{ paddingTop: "9px", paddingLeft: "5px" }}>
                                <Typography sx={{ fontSize: { xs: "10px", sm: "12px" }, color: "#7b7b9d" }}> *No Lock-in Period</Typography>
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

export default InitiateSip

function PinModalHomeCloseActon(): any {
  throw new Error('Function not implemented.');
}

function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}

