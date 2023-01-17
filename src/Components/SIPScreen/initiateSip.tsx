import React, { useEffect, useRef, useState } from 'react'
import '../InvestNowScreen/InvestNowScreen.css'
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link'

import { Box, styled } from '@mui/system'
import { Breadcrumbs, Card, CardContent, Grid, Modal, Stack, TextField, Typography } from '@mui/material'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, MenuRounded, PowerSettingsNew, Search } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support, SupportOutlined } from '@mui/icons-material';
import { AppBar, Button, Divider, Menu, MenuItem, Theme, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { closelogo, ellipslogo, graphimage, lockinlogo, Logo, MonoLogo, Profile, SIP, sipiclogo, withdrawiclogo } from '../../Assets/index'
import { useDispatch, useSelector } from 'react-redux'
import InvestCard from '../../Modules/Cards/InvestCard';
import InvestSecondCard from '../../Modules/Cards/InvestSecondCard';
import { useNavigate } from 'react-router-dom';
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import PINVerifyButton from '../../Modules/Buttons/PINVerifyButton';
import OtpInput from 'react-otp-input'
import SaveSipDetailsButton from '../../Modules/Buttons/SaveSipDetailsButton';
import CloseIcon from '@mui/icons-material/Close';
import { globalConstant, investmentTypeValues } from '../../Utils/globalConstant';
import ModalInvestNow from '../InvestNowScreen/ModalInvestNow';
import { InvestButton } from '../../Modules/Buttons/InvestButton';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { setInvestmentCardTypeAction } from '../../Store/Recommendations/actions/recommendations-action';
import siteConfig from '../../Utils/siteConfig';

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
  ca_M: {
    backgroundColor: "#64dbff",
    width: "32px",
    height: "32px",

    opacity: "0.5",
  } as React.CSSProperties,
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
  ca: {

    backgroundColor: "#64dbff",
    width: "32px",
    height: "32px",

    opacity: "0.5",


  } as React.CSSProperties,
  logo: {
    width: "50px",
    padding: "20px 0px",
  } as React.CSSProperties,
  appBar: {
    backgroundColor: "white",
  }
}
type IProps = {
  cardType: string;
  heading: string;
};

const InitiateSip = (props: IProps) => {

  const classes = useStyles();
  const refContainer = useRef();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>()
  const error: string[] = useSelector((state: any) => state.error)
  const [mpin, setMpin] = useState<string | null>()
  const [openModal, setOpenModal] = useState<boolean>(true)
  const { openPin }: any = useSelector((state: any) => state.PinModalHome)
  const [OTP, setOTP] = useState<string>("");

  const handleModalClose = () => {
    dispatch(PinModalHomeCloseActon())
  }

  const handleOtpChange = (otp: any) => {
    setOTP(otp)
  }

  const handleNavigation = () => {
    navigate("/sipInvestment", {
      state: {
        cardType: globalConstant.SIP_INVESTMENT
      }
    });
  }


  return (
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <Box sx={style.main}>
        <Grid
          container
          spacing={0}
          sx={{ height: "100vh" }}
        >
          <Grid item xs={0} sm={1} md={2} >
            <Toolbar />
            <Sidebar />
          </Grid>
          <Grid item xs={12} sm={10} md={10}>
            <Grid item xs={12} sm={10} md={10} sx={{
              height: "100vh",
              overflow: "scroll",
              width: "100%",
              display: "block",
              justifyContent: "center",
            }}>
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
                      <Typography className='burgerText' >Monthly Investment</Typography>
                    </Link>
                  </Breadcrumbs>
                </Box>
              </Grid>
              <Box className="BoxPadding sss">
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
                              fullWidth
                              placeholder="₹1,00,000"
                              sx={{
                                margin: " -55px 0 20px",
                                boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)",
                                backgroundColor: " #fff",
                              }}
                            ></TextField>
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
                                color: "#8787a2",
                              }}
                            >
                              You can start small, starting from ₹5,000
                            </Typography>
                            <Stack direction="row" spacing={4} sx={{ marginTop: "14px" }} className="ButtonStyleInvest">
                              <Button
                                variant="contained"
                                disabled
                                sx={{
                                  BackgroundColor: "#6c63ff",
                                  borderRadius: "2px",

                                  width: "60px",
                                  height: "33px",
                                  margin: " 2.2 12px 0 0",
                                  padding: "10px 12px 9px",
                                }}
                              >
                                <b style={{ color: "#6c63ff" }}>+1000</b>
                              </Button>
                              <Button variant="contained" disabled
                                sx={{
                                  BackgroundColor: "#6c63ff",
                                  borderRadius: "2px",
                                  color: "#6c63ff",
                                  width: "64px",
                                  height: "35px",
                                  margin: " 2.2 12px 0 0",
                                  padding: "10px 12px 9px",
                                }}
                              >
                                <b style={{ color: "#6c63ff" }}>+5000</b>
                              </Button>
                              <Button variant="contained" href="#contained-buttons" disabled
                                sx={{
                                  BackgroundColor: "#6c63ff",
                                  borderRadius: "2px",
                                  color: "#6c63ff",
                                  width: "75px",
                                  height: "35px",
                                }}
                              > <b style={{ color: "#6c63ff" }}>  +10,000</b>
                              </Button>
                            </Stack>
                            <InvestButton cardType={props?.cardType} />
                            <Grid container spacing={2} textAlign="center">
                              <Grid item xs={12} md={12} onClick={() => {
                                navigate("/sipInvestment", {
                                  state: { cardType: globalConstant.SIP_INVESTMENT }
                                })
                                localStorage.setItem(siteConfig.INVESTMENT_CARD_TYPE, globalConstant.SIP_INVESTMENT);
                                dispatch(setInvestmentCardTypeAction(globalConstant.SIP_INVESTMENT));
                                // getinvestmentTypeListDataWrtLookupId(investmentTypeValues.SIP);
                              }}>

                                <Typography sx={{ fontSize: "11px", fontWeight: "500", textAlign: "center", color: "#6c63ff" }}>
                                  <b style={{ marginTop: "4%", color: "#6c63ff", position: 'relative', top: "8.4px", width: "16px", height: "16px" }}><HelpOutlineIcon /></b>
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
                          <img alt="Money Sprint" src={graphimage} style={{ width: " 100%", height: "67px", margin: "0 0 14px", }}></img>
                          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "-3%" }}> <Box>1Y</Box><Box>3Y</Box>
                            <Box sx={{ marginLeft: "11px" }}> <b style={{ color: "#6c63ff" }}>5Y</b>  <img alt="Money Sprint" src={ellipslogo} style={{
                              width: "14px", marginTop: "-80%", marginRight: "-50%", borderRadius: "30px", position: "relative", top: "-20px", left: "-18px",
                              fontSize: "12px", boxShadow: "0 3px 6px 0 rgba(75, 123, 236, 0.12)", backgroundColor: "#6c63ff",
                            }}></img></Box>
                            <Box sx={{ marginLeft: "-11px" }}>10Y</Box> <Box>15Y</Box> <Box>20Y</Box>
                          </Box>
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
                            <b style={{ color: " #3c3e42", fontSize: "20px" }}>₹1 Lac</b>
                          </Grid>
                          <Grid item xs={6} sx={{
                            width: " 87px", height: "24px", paddingTop: "17px",
                            fontFamily: " Roboto", fontWeight: "500", textAlign: "right",

                          }}>
                            <b style={{ color: " #23db7b", fontSize: "20px", }}>₹2.25 Lac</b>
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

