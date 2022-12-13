import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Breadcrumbs, Button, Grid, Link, Toolbar, Typography, Modal, Theme } from "@mui/material";
import { HelpOutline, tick } from "../../Assets";
import MutualFundCard2, { MFProp } from "../../Modules/CustomCard/MutualFundCard2";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import BUYNowButton from "../../Modules/Buttons/BUYNowButtton";
import OneTimeMutualFundCard from "../../Modules/CustomCard/OneTimeMutualFundCard";
import { useSelector } from "react-redux";
import { globalConstant } from "../../Utils/globalConstant";
import SelectSipDateButton from "../../Modules/Buttons/SelectSipDateButton";
import Calendar from 'react-calendar';
import { makeStyles } from "@mui/styles";

const enumActiveScreen = Object.freeze({
  CLOSE_MODAL: 0,
  OPEN_DATE_PICKER_MODAL: 1,
  OPEN_CONFIRMATION_MODAL: 2,
  OPEN_NET_BANKING: 3,
})

type  MFPropOneTime= {
  logo: string,
  title: string,
  fundType: string[],
  price: number,
  rating: number,
  morningStarLogo: boolean,
  oneYearReturn: number,
  threeYearReturn: number,
  fiveYearReturn: number,
  buttons?: boolean,
  checkbox?: boolean,
}


const OneTimeMutualFund = () => {
  const style = {
    main: {
      boxSizing: "border-box",
      backgroundColor: "#f9f9f9",
      height: "100vh"
    } as React.CSSProperties,
    modalText: {
      backgroundColor: '#FFF',
      width: 338,
      textAlign: 'center',
      marginLeft: '1px',
      padding: '5px',
      borderTopRightRadius: 4,
      borderTopLeftRadius: 4,
      fontWeight: '500',
      borderColor: '#fff'
    },
    button: {
      height: "48px",
      boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
      backgroundColor: "#23db7b",
      transform: "translate(8px, -23px)",
      color: '#fff',
      width: 350,
      marginTop: 21,
      marginLeft: -8
    },
  };

  const useStyles: any = makeStyles((theme: Theme) => ({
    myBtn: {
      "&:hover": {
        backgroundColor: "var(--uiDarkGreyColor)",
        "& span": {
          color: "var(--typeBlackColor)",
        }
      }
    }
  }));


  const classes = useStyles();

  const navigate:any = useNavigate();

  const [mfCards, setMfCards] = useState<MFPropOneTime[]>([]);

  const g_investment = useSelector((state: any) => state?.investment?.investment);
  const [activeScreen, setActiveScreen] = useState<number>(enumActiveScreen.CLOSE_MODAL);

  useEffect(() => {
    setMfCards([
      {

        logo: '/Miraelogo.svg',
        title: 'Mirae Asset Dynamic Bond Fund Direct Growth',
        fundType: ['Large Cap', 'Equity'],
        price: 30000,

        rating: 5.0,
        morningStarLogo: true,
        oneYearReturn: 12.3,
        threeYearReturn: 18.76,
        fiveYearReturn: 24.33,
      },
      {

        logo: '/SBIFundLogo.png',
        title: 'SBI Equity Hybrid Fund',
        fundType: ['Mid Cap', 'Debt'],
        price: 30000,
        rating: 4.0,

        morningStarLogo: true,
        oneYearReturn: 18.5,
        threeYearReturn: 27.49,
        fiveYearReturn: 35.38,
      },
      {

        logo: '/Miraelogo.svg',
        title: 'ICICI Prudential Fund',
        fundType: ['Small Cap', 'Balanced'],
        price: 40000,

        rating: 3.7,
        morningStarLogo: true,
        oneYearReturn: 12.57,
        threeYearReturn: 20.8,
        fiveYearReturn: 27.15,
      },
    ]);
  }, []);

  const handlePrice = (value: any) => {
    if (value === 12.3) {
      navigate('/funddetails')
    }
  }

  return (
    <Box style={{ width: "100vw" }}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0} >
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />

            <Sidebar />
          </Grid>
          <Grid container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}>
            <Toolbar />
            <Box sx={{
              padding: 0,
              margin: '2.5vw',
              fontFamily: 'Roboto',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <Breadcrumbs sx={{
                fontSize: '12px',
                color: '#6c63ff',
                marginBottom: '3vw',
              }}>
                <Link href="/home">Home</Link>
                <Link href={g_investment?.type === globalConstant.SIP_INVESTMENT ? "/sipInvestment" : "/oneTimeInvestment"}>Investment</Link>
                <Link href={g_investment?.type === globalConstant.SIP_INVESTMENT ? "/startAnSip" : "/investNow"}>{g_investment?.type === globalConstant.SIP_INVESTMENT ? "monthly investment" : "one time lumpsum"}</Link>
                <Typography sx={{
                  fontSize: '12px',
                  color: '#373e42'
                }}>Mutual Fund Recommendation</Typography>
              </Breadcrumbs>

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
                  }} />
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
                    <Box sx={{ marginTop: '1.25vw' }}
                      onClick={() => handlePrice(mfCard.oneYearReturn)}
                    >

                      <OneTimeMutualFundCard {...mfCard} />
                    </Box>
                  )
                }
              </Box>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '3vw',
              }}>

                <Button
                  onClick={() => navigate('/customizemf')}
                  sx={{
                    width: '200px',
                    height: '44px',
                    padding: '13px 27px 12px 28px',
                    borderRadius: '32px',
                    backgroundColor: '#00b4ff',
                    fontSize: '16px',
                    fontWeight: 500,
                    color: '#fff',
                  }}
                  className={classes.myBtn}
                >
                  <Typography component="span">
                    Customize Plan
                  </Typography>
                </Button>

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

              {
                g_investment.type === globalConstant.SIP_INVESTMENT ?
                  <>
                    <SelectSipDateButton
                      openModal={() => setActiveScreen(enumActiveScreen.OPEN_DATE_PICKER_MODAL)}
                    />
                  </> :
                  <>
                    <BUYNowButton />
                  </>
              }
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Modal sx={{ borderRadius: 8 }} open={activeScreen === enumActiveScreen.OPEN_DATE_PICKER_MODAL ? true : false} onClose={() => { setActiveScreen(enumActiveScreen.CLOSE_MODAL) }}>
        <Box alignItems='center' justifyContent='center' sx={{ marginLeft: { sm: '35%', xs: '8%', lg: '40%' }, marginTop: { xs: '50%', lg: '13%', md: '30%' } }}>
          <Typography sx={style.modalText}>Monthly SIP Date</Typography>
          <Calendar />
          <Button onClick={() => { setActiveScreen(enumActiveScreen.OPEN_CONFIRMATION_MODAL) }} variant='contained' style={style.button} sx={{
            backgroundColor: 'rgba(123, 123, 157, 0.05)',
            color: '#7b7b9d'
          }}>
            Confirm SIP Date
          </Button>
        </Box>
      </Modal>
      <Modal sx={{ borderRadius: 8 }} open={activeScreen === enumActiveScreen.OPEN_CONFIRMATION_MODAL ? true : false} onClose={() => { setActiveScreen(enumActiveScreen.CLOSE_MODAL) }}>
        <>
          <Box alignItems='center' justifyContent='center' sx={{ marginLeft: { sm: '35%', xs: '8%', lg: '40%' }, marginTop: { xs: '50%', lg: '13%', md: '30%' } }}>
            <Box sx={{ backgroundColor: '#fff', width: 300, alignItems: 'center', padding: 3, textAlign: 'center' }}>
              <Box><img style={{ height: 120, width: 120 }} src={tick} /></Box>
              <Typography sx={{ marginTop: 1, fontWeight: '600' }} >Date confirmed!</Typography>
              <Typography sx={{ marginTop: 1, color: '#8787a2' }} >Your Monthly SIP Date is 8th of every month</Typography>
            </Box>
            {/* <Button onClick={() => { setActiveScreen(enumActiveScreen.OPEN_NET_BANKING) }} variant='contained' style={style.button} sx={{ */}
            <Button onClick={() => { navigate("/netbanking",{cardType: globalConstant.LUMPSUM_INVESTMENT}) }} variant='contained' style={style.button} sx={{
              backgroundColor: 'rgba(123, 123, 157, 0.05)',
              color: '#7b7b9d',
              marginLeft: 8
            }}>
              Continue to Payment
            </Button>
          </Box>

        </>
      </Modal>


    </Box>
  )
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