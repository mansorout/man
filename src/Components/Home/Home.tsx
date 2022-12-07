
import './Home.css'
import { Box, styled } from '@mui/system'
import { Grid, Modal, Theme, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
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
import { globalConstant } from '../../Utils/globalConstant'
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

function Home() {

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

  const [open, setOpen] = useState<boolean>(false)

  const menuActions = React.useRef<MenuUnstyledActions>(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>()

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    anchorEl ?
      setAnchorEl(null) :
      setAnchorEl(event.currentTarget)
  };

  const classes = useStyles()

  const refContainer = useRef();



  const [mpin, setMpin] = useState<string | null>()
  const [openModal, setOpenModal] = useState<boolean>(true)

  const handleLoad = () => {
    setMpin(localStorage.getItem("mpin"));
    setOpen(true)
  }

  const [OTP, setOTP] = useState<string>("")

  const handleOtpChange = (otp: any) => {
    setOTP(otp)
  }


  const error: string[] = useSelector((state: any) => state.error)
  const navigate = useNavigate()
  const dispatch: any = useDispatch()
  const { openPin }: any = useSelector((state: any) => state.PinModalHome)
  console.log(openPin)
  console.log(typeof (openPin))

  const handleModalClose = () => {
    dispatch(PinModalHomeCloseAction())
  }

  const handleNavigation = (strNavigationScreenName: string | undefined) => {

    if (!strNavigationScreenName) {
      return;
    }

    let objLocationData = {};
    switch (strNavigationScreenName) {
      case "sipInvestment": {
        objLocationData = {
          cardType: globalConstant.SIP_INVESTMENT
        }
        break;
      }
      case "oneTimeInvestment": {
        objLocationData = {
          cardType: globalConstant.LUMPSUM_INVESTMENT
        }
        break;
      }

      default:
        break;
    }

    navigate("../" + strNavigationScreenName, { state: objLocationData, replace: true });
  }

  const handleNavigationLargeCards = (navigation: string) => {
    navigate(navigation)
  }

  return (
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0} >
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />


          </Grid>
          <Grid container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}>
            <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 0, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll" } }} item xs={13} sm={7} md={8}>
              <Toolbar />
              <Grid container>
                <Grid item xs={12} sx={{ padding: { xs: 0, sm: 2 } }}>
                  <FinancialFreedom />
                </Grid>
                {
                  investingCards.map((item, key) => {
                    return (
                      <Grid key={key} onClick={() => handleNavigation(item?.Route)} item xs={6} sx={{ padding: 2 }}>
                        <StartInvestingCard BgColor={item.BgColor} Heading={item.Heading} Text={item.Text} Img={item.Img} />
                      </Grid>
                    )
                  })
                }
              </Grid>
              {
                largeCards.map((item, key) => {
                  return (
                    <Grid item xs={12} sx={{ padding: 2 }}>
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
            <Grid sx={{ width: "inherit", height: { xs: "auto", sm: "inherit" }, padding: 0, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll" } }} item xs={13} sm={5} md={4}>
              <Toolbar />
              <Box sx={{ px: '1rem', mt: "1rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography className='mediumButtonText'>Explore Top Rated Funds</Typography>
                <Typography onClick={() => navigate('/explorefunds')} style={{ cursor: "pointer" }} className='textLink'>View All</Typography>
              </Box>
              {
                companyCards.map((item, index) => {
                  return (
                    <CompanyFundCard
                      key={index}
                      logo={item.logo}
                      name={item.name}
                      cap={item.cap}
                      type={item.type}
                      price={item.price}
                      year1={item.year1}
                      year3={item.year3}
                      year5={item.year5}
                      rating={item.rating}
                      morning_star_logo={item.morning_star_logo}
                    />
                  )
                })
              }
              <Grid spacing={1} container sx={{ px: "1rem" }}>
                <Grid item xs={12} sm={12} md={6}>
                  <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
                    <img width="100%" src={Ad1} alt="Ad1" />
                  </Box>
                  <Box sx={{ display: { xs: "block", sm: "block", md: "none" } }}>
                    <img width="100%" src={Ad1_1} alt="Ad1" />
                  </Box>
                </Grid>
                <Grid onClick={() => navigate("/investnowscreen")} item xs={12} sm={12} md={6}>
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
          <Typography textAlign="center" variant='caption' >Please enter PIN here</Typography>
          <div style={{ width: "90%" }} onClick={() => setOpenModal(false)}>
            <PINVerifyButton otp={OTP} />
          </div>
          <Typography sx={{ fontSize: "14px", color: " #7b7b9d" }}>
            <span onClick={() => navigate("/setnewpin")} className="textLink" style={{ fontSize: "14px", cursor: "pointer" }} >Forgot PIN?</span></Typography>
        </Box>
      </Modal>
    </Box>
  )
}

export default Home