
import React, { useEffect, useRef, useState } from 'react'
// import './Portfolio.css'
import '../../Components/Portfolio/Portfolio.css'
import { Box, styled } from '@mui/system'
import { Grid, ImageListItem, MenuList, Typography } from '@mui/material'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, MenuRounded, NavigateNext, PowerSettingsNew, Search } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support } from '@mui/icons-material';
import { AppBar, Button, Divider, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Logo, Profile } from '../../Assets/index'
import { useLocation, useNavigate } from 'react-router-dom'
import { chart, meria } from '../../Assets/index'
import Navbar from '../CommonComponents/Navbar'
import Sidebar from '../CommonComponents/Sidebar'
import HoldingCards from '../../Modules/CustomCard/HoldingCards'
import { AllHolding } from '../../Modal/AllHoldingCards'
import { InvestButton } from '../../Modules/Buttons/InvestButton'

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
  title: "One-time Lumsome ",
  cardDetails: {
    heading: "Looking for convenient investment options?",
    subHeading: "",
    description: "Sit back after investing in lumpsum and grow your money over a period of time or in long run."
  },
  advantages: {
    heading: "Advantages of Lump sum investment",
    features: [{
      heading: "Convenience",
      description: "Investing via a one-time investment plan is relatively more convenient than a SIP as you pay only once and your investment can grow. hat said, the auto-debit availability makes a SIP investment easier to invest too. . The difference is probably psychological.",
      img: ""
    },
    {
      heading: "Capital appreciation over time",
      description: "With the one-time investment plan, the chances of appreciation of wealth increases as the investment has time to adjust to market corrections and grow significantly.",
      img: ""
    }, {
      heading: "Low Charges",
      description: "Another advantage of lump sum investment is that it results in lower transaction costs as such investments are generally made for longer durations. Short- term investments often attract exit load and higher taxation liabilities.",
      img: ""
    }],
    cards: [
      {
        heading: "Get ₹1.75 Lac after 5 years",
        subHeading: "Invest ₹1 Lac One time",
        description: "100% guaranteed return with tax saving options",
        price: "",
        className: "lsAdvantageCardOne"
      },
      {
        heading: "TAX SAVING",
        subHeading: "becomes easier",
        description: "Click to save tax upto",
        price: "₹45,000",
        className: "lsAdvantageCardTwo"
      },
    ]
  },
  disadvantages: {
    heading: "Disadvantage of Lump Sum Investment",
    features: [
      {
        heading: "Undisciplined Investment",
        description: "Lump sum investment plan does not encourage investment discipline.",
        img: "",
      },
      {
        heading: "No investment adjustment",
        description: "With the one-time investment plan, an investor cannot spread his/her investment over the highs and lows of the stock market. Thus, he/she is exposed to a greater degree of risk of not being able to bounce back from an investment decision made at a wrong time (during bullish runs when they buy lesser units due to higher prices).",
        img: "",
      },
    ],
    cards: [{
      heading: "Know where to invest,",
      subHeading: "Lump sum or SIP",
      className: "lsDisdvantageCardOne"
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
    description: "Our experts will help you choosing the right plan for your financial planning."
  },
  advantages: {
    heading: "Advantages of Monthly Investment",
    features: [{
      heading: "Financial Discipline",
      description: "Investing via a one-time investment plan is relatively more convenient than a SIP as you pay only once and your investment can grow. hat said, the auto-debit availability makes a SIP investment easier to invest too. . The difference is probably psychological.",
      img: ""
    },
    {
      heading: "Pocket-friendly",
      description: "With the one-time investment plan, the chances of appreciation of wealth increases as the investment has time to adjust to market corrections and grow significantly.",
      img: ""
    }, {
      heading: "Compounding effect",
      description: "Another advantage of lump sum investment is that it results in lower transaction costs as such investments are generally made for longer durations. Short- term investments often attract exit load and higher taxation liabilities.",
      img: ""
    },
    {
      heading: "Rupee cost averaging",
      description: "The biggest benefit of systematic investment plans is the rupee cost averaging. In simple terms, it means that when the NAV is high, your installment amount is able to acquire lesser units.",
      img: ""
    }],
    cards: [
      {
        heading: "financial freedom",
        subHeading: "Give Your family a lifetime",
        description: "start with just",
        price: "2,500 per month",
        className: "miAdvantageCardOne"
      },
      {
        heading: "Achieve Much More",
        subHeading: "Dream more",
        description: "Invest ₹500 every month to create wealth in long run.",
        price: "",
        className: "miAdvantageCardTwo"
      },
    ],

  },
  disadvantages: {
    heading: "Disadvantage of Monthly Investment",
    features: [
      {
        heading: "Unsuitable for irregular income flow",
        description: "This method is not suitable for investors who do not have reliable and regular cash flow as the investment is to be made at predetermined intervals.",
        img: "",
      },
      {
        heading: "Uniform investment through ups & downs",
        description: "An investor cannot immediately change the amount being invested in response to the ups and downs in the market. This keeps the investor from taking advantage of the upswings.",
        img: "",
      },
      {
        heading: "Insufficient funds",
        description: "AIf an investor fails to maintain adequate balance in the bank on the day of debit of SIP, the PDC or ECS, as opted, will return dishonoured. This means that the investment will not happen that month.",
        img: "",
      },
    ],
    cards: [{
      heading: "Invest ₹5000 monthly,",
      subHeading: "Get ₹1 Crore after 25 years",
      description: "100% guaranteed returnwith tax saving options",
      className: "miDisadvantageCardOne"
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

  const cardType = location.state.cardType;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>()
  const [moreAnchorEl, setMoreAnchorEl] = useState<null | HTMLElement>()
  const [holding, setHolding] = useState<any>([])
  const [activeButton, setActiveButton] = useState<number>(enumType.ONE_TIME_LUMSOM);



  useEffect(() => {
    setHolding(AllHolding);
    if (cardType) {
      if (cardType === "startAnSip") {
        setActiveButton(enumType.MONTHLY_INCOME);
      } else if (cardType === "investNow") {
        setActiveButton(enumType.ONE_TIME_LUMSOM);
      }
    }
  }, []);


  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    anchorEl ?
      setAnchorEl(null) :
      setAnchorEl(event.currentTarget)
  };

  const handleMoreIcon = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    moreAnchorEl ?
      setMoreAnchorEl(null) :
      setMoreAnchorEl(event.currentTarget)
  }


  return (
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>


          <Grid container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}>
            <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 0, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll" } }} item xs={13}>
              <Toolbar />
              <Grid container>
                <Grid item xs={12} sx={{ padding: 2 }}>
                  <Box style={{ padding: "15px", borderRadius: "8px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", backgroundColor: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "90%", maxWidth: "600px", flexWrap: "wrap", gap: "20px" }}>
                      <Box style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <Typography style={activeButton === enumType.ONE_TIME_LUMSOM ? style.activeBtn : style.nonActiveBtn} onClick={() => setActiveButton(enumType.ONE_TIME_LUMSOM)}>{objLumSomeInvestmentData?.title}</Typography>
                        {
                          activeButton === enumType.ONE_TIME_LUMSOM ?
                            <Box style={{ position: "absolute", bottom: "0px", padding: "1px", backgroundColor: "#23db7b", width: "106%" }}></Box>
                            : null
                        }
                      </Box>
                      <Typography style={activeButton === enumType.MONTHLY_INCOME ? style.activeBtn : style.nonActiveBtn} onClick={() => setActiveButton(enumType.MONTHLY_INCOME)}>{objMonthlyInvestmentData?.title}</Typography>
                      {
                        activeButton === enumType.MONTHLY_INCOME ?
                          <Box style={{ position: "absolute", bottom: "0px", padding: "1px", backgroundColor: "#23db7b", width: "106%" }}></Box>
                          : null
                      }
                    </Box>
                  </Box>
                </Grid>

                <Grid container>
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
      margin: "15px",
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
      backgroundColor: "blue"
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
    }
  }
))

const MultipleInvestmentHandling = (props: IProps) => {
  const classes = useStyles();


  return (
    <>
      <Grid item xs={12} sx={{ padding: 2 }}>
        <Box className={classes.firstContainer}>
          <Typography component="h4" className={classes.typography + " " + classes.relative} style={{ top: "10px", color: "#3c3e42" }}>{props?.data?.title}</Typography>
          {/* <Button variant="contained" className={classes.button} style={{ position: "absolute", right: "40px", backgroundColor: "#23db7b", }} fullWidth> */}
          <Button variant="contained" className={classes.button} style={{ backgroundColor: "#23db7b" }} fullWidth>
            <Typography component="span" className={classes.text} >Get Started Now</Typography>
          </Button>
        </Box>

        <Box style={{
          position: "relative", display: "flex", flexDirection: "column", alignItems: "center", height: "100vh"
        }}>

          {/* handle box */}
          < Box className={classes.borderRadius + " " + classes.boxShadow} style={{ backgroundColor: "blue", marginTop: "10px", padding: "10px", width: "96%" }}>
            <Typography component="span" className={classes.text} >{props?.data?.cardDetails?.subHeading}</Typography>
            <Typography component="h4" className={classes.text + " " + classes.typography} >{props?.data?.cardDetails?.heading}</Typography>
            <Typography component="span" className={classes.text} >{props?.data?.cardDetails?.description}</Typography>
            <div className={classes.flex + " " + classes.flexColumn} style={{ alignItems: "flex-start", marginTop: "5px" }}>
              <Button variant="contained" className={classes.button} style={{ backgroundColor: "#23db7b", height: "30px" }} fullWidth>Invest Now</Button>
            </div>
          </Box>

          {/* advantage */}
          <Box className={classes.borderRadius + " " + classes.boxShadow} style={{ backgroundColor: "white", margin: "10px", padding: "10px", width: "96%" }}>
            <Typography>{props?.data?.advantages?.heading}</Typography>
            {
              props?.data?.advantages?.features?.length && props?.data?.advantages?.features?.map((featureItem: any, featureIndex: any) => {
                return (
                  <Box key={featureIndex} style={{ padding: "10px", margin: "10px" }}>
                    <div className={classes.flex + " " + classes.flexColumn} style={{ alignItems: "flex-start" }}>
                      {/* <ImageListItem>
                        <img
                          src={featureItem?.img}
                          srcSet={featureItem?.img}
                          alt={"not loaded"}
                          loading="lazy"
                        />
                      </ImageListItem> */}
                    </div>
                    <div>
                      <Typography component="h3" className={classes.typography} style={{ color: "black", }} >{featureItem?.heading}</Typography>
                      <Typography component="span" className={classes.typography} style={{ color: "grey", }} >{featureItem?.description}</Typography>
                    </div>
                  </Box>
                )
              })
            }
            {
              props?.data?.advantages?.cards?.length && props?.data?.advantages?.cards?.map((cardItem: any, cardIndex: number) => {
                return (
                  <Box key={cardIndex} className={cardItem?.className}>
                    {/* <Box key={cardIndex} > */}
                    <Typography component="h3" className={classes.text} >{cardItem?.subHeading}</Typography>
                    <Typography component="h3" className={classes.text} >{cardItem?.heading}</Typography>
                    <Typography component="span" className={classes.text} >{cardItem?.description}</Typography>
                    <Typography component="span" className={classes.text} >{cardItem?.price}</Typography>
                  </Box>
                )
              })
            }
          </Box>

          {/* disadvantage */}
          <Box className={classes.borderRadius + " " + classes.boxShadow} style={{ backgroundColor: "white", margin: "10px", padding: "10px", width: "96%" }}>
            <Typography>{props?.data?.disadvantages?.heading}</Typography>
            {
              props?.data?.disadvantages?.features?.length && props?.data?.disadvantages?.features?.map((featureItem: any, featureIndex: any) => {
                return (
                  <Box key={featureIndex} style={{ padding: "10px", margin: "10px" }}>
                    {/* <ImageListItem>
                      <img
                        src={featureItem?.img}
                        srcSet={featureItem?.img}
                        alt={"not loaded"}
                        loading="lazy"
                      />
                    </ImageListItem> */}
                    <div>
                      <Typography component="h3" className={classes.typography} style={{ color: "black", }} >{featureItem?.heading}</Typography>
                      <Typography component="span" className={classes.typography} style={{ color: "grey", }} >{featureItem?.description}</Typography>
                    </div>
                  </Box>
                )
              })
            }
            {
              props?.data?.disadvantages?.cards?.length && props?.data?.disadvantages?.cards?.map((cardItem: any, cardIndex: number) => {
                return (
                  <Box key={cardIndex} className={cardItem?.className}>
                    {/* <Box key={cardIndex} > */}
                    <Typography component="h3" className={classes.text} >{cardItem?.subHeading}</Typography>
                    <Typography component="h3" className={classes.text} >{cardItem?.heading}</Typography>
                    <Typography component="span" className={classes.text} >{cardItem?.description}</Typography>
                    <Typography component="span" className={classes.text} >{cardItem?.price}</Typography>
                  </Box>
                )
              })
            }
          </Box>

          {/* factor box */}
          <Box className={classes.borderRadius + " " + classes.boxShadow} style={{ backgroundColor: "white", padding: "10px", margin: "10px", width: "96%" }}>
            <Typography component="h4" className={classes.typography} style={{ color: "black", }}  >{props?.data?.factors?.heading}</Typography>
            <Typography component="span" className={classes.typography} style={{ color: "grey", }} >{props?.data?.factors?.description}</Typography>
            {
              props?.data?.factors?.features?.length && props?.data?.factors?.features?.map((factorItem: any, factorIndex: number) => {
                return (
                  <Box key={factorIndex} style={{ padding: "10px", margin: "10px" }}>
                    <Typography component="h3" className={classes.typography} style={{ color: "black", }} >{factorItem?.heading}</Typography>
                    <Typography component="span" className={classes.typography} style={{ color: "grey", }} >{factorItem?.description}</Typography>
                    <div style={{ marginTop: "10px" }}>
                      <Typography component="span" className={classes.typography} style={{ color: "grey", }} >{factorItem?.subDescription}</Typography>
                    </div>
                  </Box>
                )
              })
            }
          </Box>

          <Box style={{ paddingBottom: "50px", paddingTop: "20px" }}>
            <Button variant="contained" className={classes.button} style={{ backgroundColor: "#23db7b", width: "100%" }} fullWidth>
              <Typography component="span" className={classes.text} >Get Started Now</Typography>
            </Button>
          </Box>

        </Box>
      </Grid >
    </>
  )
}

export default StartInvestment