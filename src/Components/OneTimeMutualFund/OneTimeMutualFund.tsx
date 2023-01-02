import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Breadcrumbs,
  Button,
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
import { globalConstant } from "../../Utils/globalConstant";
import { useSelector } from "react-redux";

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
    height: "48px",
    boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
    backgroundColor: "#23db7b",
    transform: "translate(8px, -23px)",
    color: "#fff",
    width: 350,
    marginTop: 21,
    marginLeft: -8,
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
  } as React.CSSProperties,
};

const OneTimeMutualFund = () => {
  const navigate: any = useNavigate();
  const classes = useStyles();

  const [mfCards, setMfCards] = useState<any[]>([]);
  const [activeScreen, setActiveScreen] = useState<number>(
    enumActiveScreen.CLOSE_MODAL
  );

  const g_investment: any = useSelector(
    (state: any) => state?.investmentReducer?.investment
  );

  useEffect(() => {
    setMfCards(data);
  }, []);
  const handlePrice = (value: any) => {
    if (value === 12.3) {
      navigate("/funddetails");
    }
  };

  const handleNavigation = (strRoute: string) => {
    navigate(strRoute);
  };
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
              marginTop: "4%",
              justifyContent: "center",
            }}
            xs={13}
            sm={11}
            md={10}
          >
            <Toolbar />
            <Box
              sx={{
                padding: 0,
                margin: "2.5vw",
                fontFamily: "Roboto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                  {/* <Breadcrumbs
                    // sx={{
                    //   fontSize: "12px",
                    //   color: "#6c63ff",
                    // }}
                    sx={{
                      fontSize: "12px",
                      color: "#6c63ff",
                      marginBottom: "1vw",
                    }}
                  >
                    <Link href="/home">Home</Link>
                    <Link href="/startInvestment">Investment</Link>
                    <Link href="/startAnSip">One-time Investment </Link>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        color: "#373e42",
                      }}
                    >
                      Mutual Fund Recommendation
                    </Typography>
                  </Breadcrumbs> */}

                  <Breadcrumbs
                    sx={{
                      fontSize: "12px",
                      color: "#6c63ff",
                    }}
                  >
                    <Link href="/home">Home</Link>
                    <Link
                      onClick={() =>
                        handleNavigation(
                          g_investment?.type === globalConstant.SIP_INVESTMENT
                            ? "/sipInvestment"
                            : "/oneTimeInvestment"
                        )
                      }
                    >
                      Investment
                    </Link>
                    <Link
                      onClick={() =>
                        handleNavigation(
                          g_investment?.type === globalConstant.SIP_INVESTMENT
                            ? "/startAnSip"
                            : "/investNow"
                        )
                      }
                    >
                      {g_investment?.type === globalConstant.SIP_INVESTMENT
                        ? "monthly investment"
                        : "one time lumpsum"}
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
                </Grid>
              </Grid>

              <Box
                className="header"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box className="heading_main">
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
                    Monthly investment of ₹5,000
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
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
                      fontSize: "16px",
                      fontWeight: 500,
                      textAlign: "right",
                      color: "#6c63ff",
                    }}
                  >
                    Know Why
                  </Typography>
                </Box>
              </Box>
              <Box>
                {mfCards.map((mfCard) => (
                  <Box
                    sx={{ marginTop: "1.25vw" }}
                    onClick={() => handlePrice(mfCard.oneYearReturn)}
                  >
                    <OneTimeMutualFundCard2 {...mfCard} />
                  </Box>
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "3vw",
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
                width: "83.75vw",
                height: "6.1vw",
                marginTop: "8vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 0 6px 0 rgba(0, 0, 0, 0.16)",
                backgroundColor: "#fff",
              }}
            >
              <FooterWithButton2
                btnText="BUY NOW"
                btnClick={() =>
                  navigate("/netbanking", {
                    state: { cardType: globalConstant.LUMPSUM_INVESTMENT },
                    replace: true,
                  })
                }
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
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
