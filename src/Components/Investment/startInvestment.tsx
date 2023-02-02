
import React, { useEffect, useRef, useState } from 'react'
// import './Portfolio.css'

import '../../Components/Portfolio/Portfolio.css'
import { Box, styled } from '@mui/system'
import { Breadcrumbs, Grid, ImageListItem, Link, MenuList, Typography } from '@mui/material'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, Image, MenuRounded, NavigateNext, PowerSettingsNew, Search } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support } from '@mui/icons-material';
import { AppBar, Button, Divider, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Logo, Profile } from '../../Assets/index'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { chart, meria } from '../../Assets/index'
import Navbar from '../CommonComponents/Navbar'
import Sidebar from '../CommonComponents/Sidebar'
import HoldingCards from '../../Modules/CustomCard/HoldingCards'
import { AllHolding } from '../../Modal/AllHoldingCards'
import { InvestButton } from '../../Modules/Buttons/InvestButton'
import { useDispatch } from 'react-redux'
// import { setInvestmentCardTypeAction } from '../../Store/Action-Creators'
import { bannerSectionValues, globalConstant, investmentTypeValues, lookUpMasterKeys } from '../../Utils/globalConstant'
import { setInvestmentCardTypeAction } from '../../Store/Recommendations/actions/recommendations-action'
import { getLookUpIdWRTModule } from '../../Utils/globalFunctions'
import { getData, getDataWithoutToken } from '../../Utils/api'
import siteConfig from '../../Utils/siteConfig'
import { ClassNames } from '@emotion/react'

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

const enumType = {
  ONE_TIME_LUMSOM: 1,
  MONTHLY_INCOME: 2
}

const objLumSomeInvestmentData = Object.freeze({
  title: "One-time lumpsum",
  cardDetails: {
    heading: "Looking for convenient investment options?",
    subHeading: "",
    description: "Sit back after investing in lumpsum and grow your money over a period of time or in long run.",
    img: "/assets/images/ManSIp.svg"
  },
  advantages: {
    heading: "Advantages of Lump sum investment",
    features: [{
      heading: "Convenience",
      description: "Investing via a one-time investment plan is relatively more convenient than a SIP as you pay only once and your investment can grow. hat said, the auto-debit availability makes a SIP investment easier to invest too. . The difference is probably psychological.",
      img: "./assets/images/ic_convinience.svg"
    },
    {
      heading: "Capital appreciation over time",
      description: "With the one-time investment plan, the chances of appreciation of wealth increases as the investment has time to adjust to market corrections and grow significantly.",
      img: "./assets/images/ic_money_returns.svg"
    }, {
      heading: "Low Charges",
      description: "Another advantage of lump sum investment is that it results in lower transaction costs as such investments are generally made for longer durations. Short- term investments often attract exit load and higher taxation liabilities.",
      img: "./assets/images/ic_low_charges.svg"
    }],
    cards: [
      {
        heading: "Get ₹1.75 Lac after 5 years",
        subHeading: "Invest ₹1 Lac One time",
        description: "100% guaranteed return with tax saving options",
        price: "",
        className: "lsAdvantageCardOne",
        img: "./assets/images/Group_5224.svg"
      },
      {
        heading: "TAX SAVING",
        subHeading: "becomes easier",
        description: "Click to save tax upto",
        price: "₹45,000",
        className: "lsAdvantageCardTwo",
        img: "./assets/images/Group_5234.svg"
      },
    ]
  },
  disadvantages: {
    heading: "Disadvantage of Lump sum investment",
    features: [
      {
        heading: "Undisciplined Investment",
        description: "Lump sum investment plan does not encourage investment discipline.",
        img: "./assets/images/ic_No_investment_adjustment.svg",
      },
      {
        heading: "No investment adjustment",
        description: "With the one-time investment plan, an investor cannot spread his/her investment over the highs and lows of the stock market. Thus, he/she is exposed to a greater degree of risk of not being able to bounce back from an investment decision made at a wrong time (during bullish runs when they buy lesser units due to higher prices).",
        img: "./assets/images/ic_undisciplined_investment.svg",
      },
    ],
    cards: [{
      heading: "Know where to invest",
      subHeading: "Lump sum or SIP",
      className: "lsDisdvantageCardOne",
      img: "./assets/images/piggy.svg",
      button:"see comparison",
      // img:"./assets/images/lumpsum-ad-banner-3.svg"
    }]
  },
  factors: {
    heading: "Factors to consider before investing in lump sum investment",
    description: "Lump sum investments take large amounts at once; hence most investors often find it difficult to let go of the amount. Nevertheless, it becomes easier when you have considered certain factors beforehand for easy steering.",
    features: [
      {
        heading: "Patience",
        description: "Patience is the key to handling any situation. This is what remarkably distinguishes the investors from the traditional traders. Investing and then waiting for money to grow over a period of time requires patience and perseverance.",
        subDescription: "The temptation to exit from the scheme is quite high, but only patience will help you sail through the down trend of the market condition.",
      },
      {
        heading: "Market Valuation",
        description: "Attaining a perfect market valuation is an arduous task overall; yet you can get hold of the same if you look into the past records closely. Before investing, you can look out for the P/E ratio of various market indices.",
        subDescription: "A closer look the past three to four quarters will give you a clear idea about the current market scenario.",
      }
    ]
  }

})

const objMonthlyInvestmentData = Object.freeze({
  title: "Monthly Investment",
  cardDetails: {
    heading: "Wondering how much you should start investing monthly?",
    subHeading: "Small Steps to BIG Returns",
    description: "Our experts will help you choosing the right plan for your financial planning.",
    img: "/assets/images/ManSIp.svg"
  },
  advantages: {
    heading: "Advantages of Monthly Investment",
    features: [{
      heading: "Financial Discipline",
      description: "Investing via a one-time investment plan is relatively more convenient than a SIP as you pay only once and your investment can grow. hat said, the auto-debit availability makes a SIP investment easier to invest too. . The difference is probably psychological.",
      img: "./assets/images/ic_Financial_discipline.svg"
    },
    {
      heading: "Pocket-friendly",
      description: "With the one-time investment plan, the chances of appreciation of wealth increases as the investment has time to adjust to market corrections and grow significantly.",
      img: "./assets/images/ic_Pocket-friendly.svg"
    }, {
      heading: "Compounding effect",
      description: "Another advantage of lump sum investment is that it results in lower transaction costs as such investments are generally made for longer durations. Short- term investments often attract exit load and higher taxation liabilities.",
      img: "./assets/images/ic_Compounding_effect.svg"
    },
    {
      heading: "Rupee cost averaging",
      description: "The biggest benefit of systematic investment plans is the rupee cost averaging. In simple terms, it means that when the NAV is high, your installment amount is able to acquire lesser units.",
      img: "./assets/images/ic_Rupee_cost_averaging.svg"
    }],
    cards: [
      {
        heading: "financial freedom",
        subHeading: "Give Your family a lifetime",
        description: "start with just",
        price: "2,500 per month",
        className: "miAdvantageCardOne",
        img: "./assets/images/Woman.svg"
      },
      {
        heading: "Achieve Much More",
        subHeading: "Dream more",
        description: "Invest ₹500 every month to create wealth in long run.",
        price: "",
        className: "miAdvantageCardTwo",
        img: "./assets/images/Group_5244.svg"
      },
    ],
  },
  disadvantages: {
    heading: "Disadvantage of Monthly Investment",
    features: [
      {
        heading: "Unsuitable for irregular income flow",
        description: "This method is not suitable for investors who do not have reliable and regular cash flow as the investment is to be made at predetermined intervals.",
        img: "./assets/images/ic_income.svg",
      },
      {
        heading: "Uniform investment through ups & downs",
        description: "An investor cannot immediately change the amount being invested in response to the ups and downs in the market. This keeps the investor from taking advantage of the upswings.",
        img: "./assets/images/ic_investment.svg",
      },
      {
        heading: "Insufficient funds",
        description: "AIf an investor fails to maintain adequate balance in the bank on the day of debit of SIP, the PDC or ECS, as opted, will return dishonoured. This means that the investment will not happen that month.",
        img: "./assets/images/ic_Insufficient_funds.svg",
      },
    ],
    cards: [{
      heading: "Invest ₹5000 monthly,",
      subHeading: "Get ₹1 Crore after 25 years",
      description: "100% guaranteed returnwith tax saving options",
      className: "miDisadvantageCardOne",
      img: "./assets/images/Group_5243.svg"
    }]
  },
  factors: {
    heading: "Factors to consider before investing in lump sum investment",
    description: "Lump sum investments take large amounts at once; hence most investors often find it difficult to let go of the amount. Nevertheless, it becomes easier when you have considered certain factors beforehand for easy steering.",
    features: [
      {
        heading: "Patience",
        description: "Patience is the key to handling any situation. This is what remarkably distinguishes the investors from the traditional traders. Investing and then waiting for money to grow over a period of time requires patience and perseverance.",
        subDescription: "The temptation to exit from the scheme is quite high, but only patience will help you sail through the down trend of the market condition.",
      },
      {
        heading: "Market Valuation",
        description: "Attaining a perfect market valuation is an arduous task overall; yet you can get hold of the same if you look into the past records closely. Before investing, you can look out for the P/E ratio of various market indices.",
        subDescription: "A closer look the past three to four quarters will give you a clear idea about the current market scenario.",
      }
    ]
  }
})

const StartInvestment = () => {

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
    logo: {
      width: "50px",
      padding: "20px 0px",
    } as React.CSSProperties,
    button2: {
      height: "48px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
      backgroundColor: "#23db7b",
      width: "100%",
      marginTop: "40px"
    } as React.CSSProperties,
    text: {
      color: "white"
    },
    activeBtn: {
      color: "#3c3e42",
      fontWeight: "500",
      fontSize: "16px",
      cursor: "pointer",
    },
    nonActiveBtn: {
      color: "#919eb1",
      fontWeight: "500",
      fontSize: "16px",
      cursor: "pointer"
    }
  }

  const refContainer = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cardType = location?.state?.cardType;

  // @ts-ignore
  const arrInvestmentTypeData: any[] = localStorage.getItem(lookUpMasterKeys.INVESTMENT_TYPE) ? JSON.parse(localStorage.getItem(lookUpMasterKeys.INVESTMENT_TYPE)) : [];

  const [holding, setHolding] = useState<any>([]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();
  const [moreAnchorEl, setMoreAnchorEl] = useState<null | HTMLElement>();
  const [activeButton, setActiveButton] = useState<number>(enumType.ONE_TIME_LUMSOM);

  useEffect(() => {
    setHolding(AllHolding);
    if (cardType) {
      if (cardType === globalConstant.SIP_INVESTMENT) {
        setActiveButton(enumType.MONTHLY_INCOME);
        dispatch(setInvestmentCardTypeAction(globalConstant.SIP_INVESTMENT));
        getinvestmentTypeListDataWrtLookupId(investmentTypeValues.SIP);
        localStorage.setItem(siteConfig.INVESTMENT_CARD_TYPE, globalConstant.SIP_INVESTMENT);
      } else if (cardType === globalConstant.LUMPSUM_INVESTMENT) {
        setActiveButton(enumType.ONE_TIME_LUMSOM);
        dispatch(setInvestmentCardTypeAction(globalConstant.LUMPSUM_INVESTMENT));
        getinvestmentTypeListDataWrtLookupId(investmentTypeValues.LUMPSUM);
        localStorage.setItem(siteConfig.INVESTMENT_CARD_TYPE, globalConstant.LUMPSUM_INVESTMENT)
      }
    }
    //  else {
    //   setActiveButton(enumType.ONE_TIME_LUMSOM);
    //   dispatch(setInvestmentCardTypeAction(globalConstant.LUMPSUM_INVESTMENT));
    //   getinvestmentTypeListDataWrtLookupId(investmentTypeValues.LUMPSUM);
    // }
  }, []);


  const getinvestmentTypeListDataWrtLookupId = async (value: string) => {

    let nLookUpId: number = await getLookUpIdWRTModule(arrInvestmentTypeData, value);

    getDataWithoutToken(
      siteConfig.METADATA_BANNER_LIST + `?bannersection_id=${nLookUpId}`,
      siteConfig.CONTENT_TYPE_APPLICATION_JSON,
      siteConfig.METADATA_API_ID
    )
      .then(res => res.json())
      .then((data: any) => {
        if (data?.error === true) {
          return;
        }

        console.log(data?.data);
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    anchorEl ?
      setAnchorEl(null) :
      setAnchorEl(event.currentTarget)
  };

  const handleMoreIcon = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    moreAnchorEl ?
      setMoreAnchorEl(null) :
      setMoreAnchorEl(event.currentTarget)
  };

  const handleOnClick = (activeButtonType: number) => {
    setActiveButton(activeButtonType);
    if (activeButtonType === enumType.MONTHLY_INCOME) {
      navigate("/sipInvestment", {
        state: {
          cardType: globalConstant.SIP_INVESTMENT
        }
      });

      dispatch(setInvestmentCardTypeAction(globalConstant.SIP_INVESTMENT));
      localStorage.setItem(siteConfig.INVESTMENT_CARD_TYPE, globalConstant.SIP_INVESTMENT)
    } else if (activeButtonType === enumType.ONE_TIME_LUMSOM) {
      navigate("/oneTimeInvestment", {
        state: {
          cardType: globalConstant.LUMPSUM_INVESTMENT
        }
      });

      dispatch(setInvestmentCardTypeAction(globalConstant.LUMPSUM_INVESTMENT));
      localStorage.setItem(siteConfig.INVESTMENT_CARD_TYPE, globalConstant.LUMPSUM_INVESTMENT)
    }
  };

  return (
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>


          <Grid container xs={12} sm={11} md={10}>
            <Grid item xs={13}>
              <Toolbar />
              <Grid container>
                <Box role="presentation" className="boxBreadcrumb" sx={{ margin: "27px 0px 21px 25px" }}>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link color="#6495ED" underline="always" href='Home' >
                      <Typography className='burgerText'> Home</Typography>
                    </Link>
                    <Link underline="none" style={{ color: "grey" }}>
                      <Typography className='burgerText'>Investment</Typography>
                    </Link>
                  </Breadcrumbs>
                </Box>
                <Grid container>
                  <Grid item xs={12} className="BoxStartInvest">
                  <Box style={{ padding: "15px", borderRadius: "8px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box className="tabSecBox" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "90%", maxWidth: "600px", flexWrap: "wrap", gap: "20px" }}>
                      <Box style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography className="tabBoxSize" style={activeButton === enumType.ONE_TIME_LUMSOM ? style.activeBtn : style.nonActiveBtn} onClick={() => handleOnClick(enumType.ONE_TIME_LUMSOM)}>{objLumSomeInvestmentData?.title}</Typography>
                        {
                          activeButton === enumType.ONE_TIME_LUMSOM ?
                            <Box style={{ position: "absolute", bottom: "0px", padding: "1px", backgroundColor: "#23db7b", width: "100%" }}></Box>
                            : null
                        }
                      </Box>
                      <Box style={{ position: "relative" }}>

                        <Typography className="tabBoxSize" style={activeButton === enumType.MONTHLY_INCOME ? style.activeBtn : style.nonActiveBtn} onClick={() => handleOnClick(enumType.MONTHLY_INCOME)}>{objMonthlyInvestmentData?.title}</Typography>
                        {
                          activeButton === enumType.MONTHLY_INCOME ?
                            <Box style={{ position: "absolute", bottom: "0px", padding: "1px", backgroundColor: "#23db7b", width: "100%", right: "0px" }}></Box>
                            : null
                        }
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                </Grid>
                  <Grid item xs={12}>
                    <Box>
                      {
                        activeButton === enumType.ONE_TIME_LUMSOM ?
                          <>
                            <MultipleInvestmentHandling
                              type={enumType.ONE_TIME_LUMSOM}
                              data={objLumSomeInvestmentData}
                            />
                          </>
                          :
                          <>
                            <MultipleInvestmentHandling
                              type={enumType.MONTHLY_INCOME}
                              data={objMonthlyInvestmentData}
                            />
                          </>
                      }
                    </Box>
                  </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}


type IProps = {
  type: number;
  data: any
}

const useStyles = makeStyles((theme: any) => (
  {
    button: {
      // position: "absolute",
      // right: "48px",
      height: "48px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
      backgroundColor: "#23db7b",
      // margin: "15px",
      width: "90%",
      maxWidth: "280px",
    },
    text: {
      color: "white !important"
    },
    typography: {
      fontFamily: "Roboto",
      fontSize: "22px",
      fontWeight: "500",
      fontStretch: "normal",
      fontStyle: "normal",
      lineHeight: "normal",
      letterSpacing: "normal",
      textAlign: "left",
      // color: "#3c3e42",
    },
    firstContainer: {
      display: "flex",
      // backgroundColor: "",
      justifyContent: "space-between",
      padding: "10px",
      marginBottom: "25px",
      height: "50px"
    },
    relative: {
      position: "relative",
    },
    absolute: {
      position: "absolute"
    },
    flex: {
      display: "flex",
    },
    flexColumn: {
      flexDirection: "column"
    },
    flexRow: {
      flexDirection: "row"
    },
    boxShadow: {
      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
    },
    borderRadius: {
      borderRadius: "8px"
    },
    lsAdvantageCardOne: {
      backgroundColor: "black"

    },
    lsAdvantageCardTwo: {
      backgroundColor: "blue"
    },
    lsDisdvantageCardOne: {
      backgroundColor: "green"
    },
    miAdvantageCardOne: {
      backgroundColor: "blue"
    },
    miAdvantageCardTwo: {
      backgroundColor: "violet"
    },
    miDisadvantageCardOne: {
      backgroundColor: "blue"
    },
    img: {
      width: "40px !important",
      height: "40px !important",
      margin: "24px 16px 40px 0"
    },
    manImg: {
      width: "100px !important",
      height: "108px !important",
      position: "absolute",
      right: "1%",
      bottom: "2%"
    },
    cardsImg: {
      width: "33%",
      height: "85%",
      // marginRight: "2%",
      // marginTop: "3%"
    }
  }
))

const MultipleInvestmentHandling = (props: IProps) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const style = {
    container: {
      backgroundImage: "linear-gradient(109deg, #6c63ff 7%, #23db7b 107%)",
      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
      borderRadius: { xs: "0px", sm: "16px" },
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      margin: "0px 20px 20px 20px "
    },
  }



  const handleButtonOnClick = (type: number) => {
    if (type === enumType.MONTHLY_INCOME) {
      navigate("/startAnSip");
    } else if (type === enumType.ONE_TIME_LUMSOM) {
      navigate("/investNow");
    }
  }

  return (
    <>
      <Grid item xs={12} sx={{ padding: 2 }}>
        <Box className={classes.firstContainer +" "+ "HeadAndGetStartedNow"} sx={{ flexWrap: { xs: "wrap", sm: "no-wrap" }, alignItems: "center", justifyContent: { xs: "center !important", sm: "space-between !important" } }} textAlign="center" >
          <Typography component="h4" className={classes.typography + " " + classes.relative} style={{ color: "#3c3e42" }}>{props?.data?.title}</Typography>
          <Button variant="contained" className={classes.button +" "+ "btnGetStartedNow"} style={{ backgroundColor: "#23db7b" }} fullWidth onClick={() => handleButtonOnClick(props?.type)} sx={{ marginTop: { xs: "2%", sm: "unset" } }}>
            <Typography component="span" className={classes.text} >Get Started Now</Typography>
          </Button>
        </Box>
        <Box style={{
          position: "relative", display: "flex", flexDirection: "column", alignItems: "center",
        }} >
          {/* handle box */}
          < Box
            className={classes.borderRadius + " " + classes.boxShadow}
            style={{ backgroundColor: "#544ec8", padding: "10px", width: "96%", position: "relative" }}
            sx={{
              paddingBottom: { xs: "0% !important", sm: "4% !important" },
              marginTop: { xs: "5%", sm: "0%" }
            }}>
            <Typography style={{ color: "white", fontSize: "18px", margin: "10px", }} >{props?.data?.cardDetails?.subHeading}</Typography>
            <Typography style={{ color: "white", fontSize: "22px", fontWeight: "500", margin: "10px" }}>{props?.data?.cardDetails?.heading}</Typography>
            <Typography className='textDescCard' style={{ maxWidth: "70%", display: "flex", flexWrap: "wrap", color: "white", fontSize: "16px", margin: "10px" }}>{props?.data?.cardDetails?.description}</Typography>
            <Box className={classes.flex + " " + classes.flexColumn} style={{ alignItems: "flex-start", margin: "10px" }}>
            <Button variant="contained" className={classes.button} style={{ backgroundColor: "#23db7b" }} fullWidth sx={{ marginTop: { xs: "2%", sm: "unset" } }}>
            <Typography component="span" className={classes.text} >Invest Now</Typography>
          </Button>
              {/* <Button variant="contained" className={classes.button} sx={{ backgroundColor: "#000", height: "30px", }} fullWidth>Invest Now </Button> */}
            </Box>
            <ImageListItem className='CardImageinvest' sx={{
              display: { xs: "flex", sm: "block" },
              flexDirection: { xs: "column", sm: "none" },
              justifyContent: { xs: "center", sm: "none" },
              position: {
                xs: "unset !important",
                sm: "absolute"
              }
            }}>
              <img
                src={props?.data?.cardDetails?.img}
                srcSet={props?.data?.cardDetails?.img}
                alt={"not loaded"}
                loading="lazy"
                className={classes.manImg}
              />
            </ImageListItem>
          </Box>
          {/* advantage */}
          <Box className={classes.borderRadius + " " + classes.boxShadow + " " + "boxMarginTop"} style={{ backgroundColor: "white", padding: "10px", width: "96%",  marginTop: "30px" }}>
            <Typography component="h4" style={{ margin: "21px 0px -8px 14px" }}>{props?.data?.advantages?.heading}</Typography>
            {
              props?.data?.advantages?.features?.length && props?.data?.advantages?.features?.map((featureItem: any, featureIndex: any) => {
                return (
                  <Box key={featureIndex} style={{ display: "flex", alignItems: "center", padding: "10px", margin: "10px" }}>
                    <div className={classes.flex + " " + classes.flexColumn} style={{ alignItems: "flex-start" }}>
                      <ImageListItem >
                        <img
                          src={featureItem?.img}
                          srcSet={featureItem?.img}
                          alt={"not loaded"}
                          loading="lazy"
                          className={classes?.img}
                        />
                      </ImageListItem>
                    </div>
                    <div>
                      <Typography component="h4" className={classes.typography} style={{ color: "black", }} >{featureItem?.heading}</Typography>
                      <Typography component="span" className={classes.typography} style={{ color: "grey", }} >{featureItem?.description}</Typography>
                    </div>
                  </Box>
                )
              })
            }
            {
              props?.data?.advantages?.cards?.length && props?.data?.advantages?.cards?.map((cardItem: any, cardIndex: number) => {
                return (
                  <Box sx={style.container} key={cardIndex} className={cardItem?.className} >
                    <Box sx={{padding: { xs: "20px 10px", sm: "60px 30px" }}}>
                      {
                        cardItem?.className ==="lsAdvantageCardTwo"?<>
                        <Typography style={{ color: "white", fontSize: "18px" }}>{cardItem?.heading} </Typography>
                      <Typography style={{ color: "white", fontSize: "32px", fontWeight: "500" }}>{cardItem?.subHeading}</Typography>
                        </>:<>
                        <Typography style={{ color: "white", fontSize: "18px" }}>{cardItem?.subHeading} </Typography>
                      <Typography style={{ color: "white", fontSize: "32px", fontWeight: "500" }}>{cardItem?.heading}</Typography>
                        </>
                      }
                      <Typography style={{ color: "white", fontSize: "16px" }}>{cardItem?.description}</Typography>
                      <Typography style={{ color: "white", fontSize: "16px" }}>{cardItem?.price}</Typography>
                    </Box>
                    <Box sx={{
                      display: "flex",
                      marginRight: "2% !important",
                      marginBottom: "3% !important"
                    }}>
                      {/* <img style={{ padding: "0px 30px", }} src={homeConnect} alt='home' width="auto" height="170px" /> */}
                      <ImageListItem >
                        <img
                          src={cardItem?.img}
                          srcSet={cardItem?.img}
                          alt={"not loaded"}
                          loading="lazy"
                          className={classes?.cardsImg}
                        />
                      </ImageListItem>
                    </Box>
                  </Box>
                )
              })
            }
          </Box>
          {/* disadvantage */}
          <Box className={classes.borderRadius + " " + classes.boxShadow + " " + "boxMarginTop"} style={{ backgroundColor: "white", padding: "10px", width: "96%", marginTop: "30px" }}>
            <Typography component="h4" style={{ margin: "21px 0px -8px 14px" }}>{props?.data?.disadvantages?.heading}</Typography>
            {
              props?.data?.disadvantages?.features?.length && props?.data?.disadvantages?.features?.map((featureItem: any, featureIndex: any) => {
                return (
                  <Box key={featureIndex} style={{ display: "flex", alignItems: "center", padding: "10px", margin: "10px" }}>
                    <div className={classes.flex + " " + classes.flexColumn} style={{ alignItems: "flex-start" }}>

                      <ImageListItem>
                        <img
                          src={featureItem?.img}
                          srcSet={featureItem?.img}
                          alt={"not loaded"}
                          loading="lazy"
                          className={classes.img}
                        />
                      </ImageListItem>
                    </div>
                    <div>
                      <Typography component="h4" className={classes.typography} style={{ color: "black", }} >{featureItem?.heading}</Typography>
                      <Typography component="span" className={classes.typography} style={{ color: "grey", }} >{featureItem?.description}</Typography>
                    </div>
                  </Box>
                )
              })
            }
            {
              props?.data?.disadvantages?.cards?.length && props?.data?.disadvantages?.cards?.map((cardItem: any, cardIndex: number) => {
                return (
                  <Box sx={style.container} key={cardIndex} className={cardItem?.className}>
                    <Box sx={{padding: { xs: "20px 10px", sm: "60px 30px" }}}>
                      {cardItem?.className==="miDisadvantageCardOne"?<>
                      <Typography style={{ color: "white", fontSize: "18px" }}>{cardItem?.subHeading}</Typography>
                      <Typography style={{ color: "white", fontSize: "32px", fontWeight: "500" }}>{cardItem?.heading}</Typography>
                      </>:
                      <>
                       <Typography style={{ color: "white", fontSize: "18px" }}>{cardItem?.heading}</Typography>
                      <Typography style={{ color: "white", fontSize: "32px", fontWeight: "500" }}>{cardItem?.subHeading}</Typography>
                      </>
                      }
                      <Typography style={{ color: "white", fontSize: "16px" }}>{cardItem?.description}</Typography>
                      <Typography style={{ color: "white", fontSize: "16px" }}>{cardItem?.price} </Typography>
                      <Typography style={{ color: "white", fontSize: "16px" }}>{cardItem?.button?<><Button variant="contained" className={classes.button} style={{ backgroundColor: "#23db7b" }} fullWidth sx={{ marginTop:"10px" }}>
            <Typography component="span" className={classes.text} >{cardItem?.button}</Typography>
          </Button></>:null} </Typography>
                    </Box>
                    <Box sx={{
                      // display: { xs: "flex", sm: "none", md: "block" },
                      display: "flex",
                      marginRight: "2% !important",
                      marginBottom: "3% !important"
                    }}>
                      <ImageListItem >
                        <img
                          src={cardItem?.img}
                          srcSet={cardItem?.img}
                          alt={"not loaded"}
                          loading="lazy"
                          className={classes?.cardsImg}
                        />
                      </ImageListItem>
                      {/* <img style={{ padding: "0px 30px", }} src={homeConnect} alt='home' width="auto" height="170px" /> */}
                    </Box>
                  </Box>
                )
              })
            }
          </Box>

          {/* factor box */}
          <Box className={classes.borderRadius + " " + classes.boxShadow + " " + "boxMarginTop"} style={{ backgroundColor: "white", padding: "10px", width: "96%", marginTop: "30px" }}>
            {/* <Typography component="h4" className={classes.typography} style={{ color: "black", margin: "21px 0px -8px 14px" }}  >{props?.data?.factors?.heading}</Typography> */}

            <Box sx={{
              padding: "1%"
            }}>
              <Typography component="h4" className={classes.typography} style={{ color: "black" }}  >{props?.data?.factors?.heading}</Typography>
              <Typography component="span" className={classes.typography} style={{ color: "grey", }} >{props?.data?.factors?.description}</Typography>
            </Box>
            {
              props?.data?.factors?.features?.length && props?.data?.factors?.features?.map((factorItem: any, factorIndex: number) => {
                return (
                  <Box key={factorIndex} style={{ padding: "10px", margin: "10px" }}>
                    <Typography component="h4" className={classes.typography} style={{ color: "black", }} >{factorItem?.heading}</Typography>
                    <Typography component="span" className={classes.typography} style={{ color: "grey", }} >{factorItem?.description}</Typography>
                    <div style={{ marginTop: "10px" }}>

                      <Typography component="span" className={classes.typography} style={{ color: "grey", }} > {factorItem?.subDescription}</Typography>
                    </div>
                  </Box>
                )
              })
            }
          </Box>

          <Box sx={{ paddingBottom: "50px", paddingTop: "20px", width:{xs:"100%", sm:"98%"} }} onClick={() => handleButtonOnClick(props?.type)}>
            <Button variant="contained" className={classes.button} style={{ backgroundColor: "#23db7b", width: "100%", maxWidth: "100%" }} fullWidth>
              <Typography component="span" className={classes.text} >Get Started Now</Typography>
            </Button>
          </Box>

        </Box>
      </Grid >
    </>
  )
}

export default StartInvestment