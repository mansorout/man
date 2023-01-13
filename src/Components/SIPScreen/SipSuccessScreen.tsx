
import './Sipscreen.css'
import Avatar from '@mui/material/Avatar';

import { Box, styled } from '@mui/system'
import { Grid, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, MenuRounded, PowerSettingsNew, Search } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support, SupportOutlined } from '@mui/icons-material';
import { AppBar, Button, Divider, Menu, MenuItem, Theme, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Logo, Profile, SIP, SuccessFullOtp } from '../../Assets/index'
// import ViewProfileCard from '../../Modules/Cards/ViewProfileCard'
// import VviewprofileCard from '../../Modules/Cards/VviewprofileCard'
import EditprofileCard from '../../Modules/Cards/EditeprofileCard';

import IInvestNowScreenCard from '../../Modules/Cards/IIvestNowScreenCard';

import TrackTransButton from '../../Modules/Buttons/TrackTransButton';
import SipSuccessButton from '../../Modules/Buttons/SipSuccesssButton';
import Sidebar from '../CommonComponents/Sidebar';
import Navbar from '../CommonComponents/Navbar';
import { useNavigate } from 'react-router-dom';


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

function SipSuccessScreen() {

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
    buttonstwo: {
      height: "48px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
      backgroundColor: "#626468",
      margin: "15px",
      width: "90%",
      maxWidth: "400px",
      transform: "translate(0px, -6px)",
    } as React.CSSProperties,
    buttonone: {
      height: "48px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
      backgroundColor: "#23db7b",
      width: "90%",
      maxWidth: "400px",
    } as React.CSSProperties,

    menuIcon: {
      color: "#6c63ff",
      fontSize: "24px"
    },
    appBar: {
      backgroundColor: "white",
    },

    background: {
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      justifyContent: "flex-end",
      alignItems: "center",
    } as React.CSSProperties,

    container: {
      backgroundColor: "white",
      width: "100%",
      maxWidth: "500px",
      padding: "10px 0px",
      borderRadius: " 8px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.2)',
      transform: "translate(-50%, 0%)",
      left: "50%",

      position: "absolute"
    } as React.CSSProperties,
    textone: {
      color: "white",
    } as React.CSSProperties,

    logo: {
      width: "90px",
      margin: '30px 0px',
    } as React.CSSProperties

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
const navigate=useNavigate()
  const refContainer = useRef();

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
              <Grid container sx={{ display: "flex" }} wrap='nowrap'>
                <Grid item xs={6} sx={{ padding: { xs: 0, sm: 3 } }} >
                  <IInvestNowScreenCard />
                </Grid>


              </Grid>
             <Box className="SipSuccessBox">
                <img alt="Money Sprint" src={SuccessFullOtp} style={style.logo} />
                <Typography mb={1} variant="h1" align="center" className="SipSucessScreen">
                Your investment is in progress!
                </Typography>
                <Typography mb={2} style={{ maxWidth: "90%" }} className="VerificationOtp" align="center">
                  We will notify you via email in 1 or 2 working days once the confirmation
                  received. You can track status under <b style={{ color: "#6c63ff" }}>transactions</b> tab of your portfolio.
                  
                </Typography>
                <Grid container direction="column" textAlign="center" >
                  <Grid item xs={6} md={6}>
                  <SipSuccessButton/>
                  </Grid>
                  <Grid item xs={6} md={6} >
                  <TrackTransButton/> 
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

export default SipSuccessScreen
