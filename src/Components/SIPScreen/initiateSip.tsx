import React, { useRef, useState } from 'react'
import '../InvestNowScreen/InvestNowScreen.css'
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link'

import { Box, styled } from '@mui/system'
import { Breadcrumbs, Grid, Modal, TextField, Typography } from '@mui/material'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, MenuRounded, PowerSettingsNew, Search } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support, SupportOutlined } from '@mui/icons-material';
import { AppBar, Button, Divider, Menu, MenuItem, Theme, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { closelogo, Logo, MonoLogo, Profile, SIP, sipiclogo } from '../../Assets/index'
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
import { globalConstant } from '../../Utils/globalConstant';


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
  logo: {
    width: "50px",
    padding: "20px 0px",
  } as React.CSSProperties,
  appBar: {
    backgroundColor: "white",
  }
}

const InitiateSip = () => {

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
          <Grid
            item
            xs={0}
            sm={1}
            md={2}
          >
            <Toolbar />
            <Sidebar />
          </Grid>
          <Grid
            container
            xs={13}
            sm={11}
            md={10}
          >
            <Grid sx={{ height: "100vh", padding: 0, boxSizing: "border-box", overflow: "scroll" }} item xs={12} sm={10} md={10}>
              <Toolbar />
              <Box role="presentation" sx={{ margin: "27px 0px 21px 25px" }}>
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
              <Grid container >
                <Grid item xs={12} sm={6} sx={{ padding: { xs: 0, sm: 3 }, display: "-webkit-inline-flex" }} >
                  <InvestCard
                    cardType={globalConstant.SIP_INVESTMENT}
                    heading="Start an SIP"
                  />
                </Grid>
                <Grid item xs={12} sm={6} sx={{ padding: { xs: 0, sm: 3 }, display: "-webkit-inline-flex" }} >
                  <InvestSecondCard />
                </Grid>
              </Grid>
              <Box
                textAlign="center"
                sx={{
                  margin: "auto",
                  width: "304px",
                }}
              >
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>


      {/* 
      <Modal
        sx={{ backdropFilter: "blur(10px)" }}
        keepMounted
        onClose={() => setOpenModal(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        open={openModal} >
        <Box style={style.modalContainer}>
          <Grid container spacing={1}>
            <Grid item xs={12} textAlign="right">
              <img alt="Money Sprint" src={closelogo} style={{ width: "24px" }} />
            </Grid>
          </Grid>

          <img alt="Money Sprint" src={sipiclogo} style={{
            marginTop: "-9%",
            width: " 38px",
            height: "38px"
          }} />

          <b style={{ textAlign: "center" }}>Help us know you better.</b>
          <Typography textAlign="center" variant='h5' sx={{ fontSize: "14px" }}  >Share details below to view recommendations</Typography>
          <form>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 2, width: '19ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField label="FirstName" 
            sx={{ color: "#919eb1", fontSize: "17px"
           
          }}
             
            />
            &nbsp;&nbsp;&nbsp;
            <TextField sx={{ color: "#919eb1", fontSize: "17px"}} label="LastName" />
          </Box>
          <Box sx={{ width: "95%", marginTop: "2%" }}>
            <TextField fullWidth sx={{ color: "#919eb1", fontSize: "17px", marginTop: "1%",marginLeft:"3%" }} label="Email Address" id="fullWidth" />
          </Box>
          <Box sx={{ width: "95%", marginTop: "2%" }}>
            <TextField type="date" sx={{ color: "#919eb1", fontSize: "17px", marginTop: "4%", marginLeft:"3%"}} fullWidth label="Date of Birth" id="fullWidth" />
          </Box>


          <div style={{ width: "100%" }} onClick={() => setOpenModal(false)}>
            <SaveSipDetailsButton otp={OTP}  />
          </div>
          </form>
        </Box>
      </Modal> */}
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

