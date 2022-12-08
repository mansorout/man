
import React, { useRef, useState } from 'react';
import "../Portfolio/Portfolio.css"
import { Box } from '@mui/system'
import { Grid, Typography } from '@mui/material'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom'
import Navbar from '../CommonComponents/Navbar'
import Sidebar from '../CommonComponents/Sidebar'
import { useDispatch } from 'react-redux'
import SipSuccessButton from '../../Modules/Buttons/SipSuccesssButton';
import TrackTransButton from '../../Modules/Buttons/TrackTransButton';
import { SuccessFullOtp } from '../../Assets';

const SipLastScreen = () => {

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
      width: "30%",
      padding: "20px 0px",
    } as React.CSSProperties,
    container: {
      position: "absolute",
      top: "205%",
      left: "42%",
      backgroundColor: "white",
      width: "46%",
      maxWidth: "100%",
      padding: "10px 0px",
      borderRadius: " 8px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.2)',
      transform: "translate(-50%, 0%)",
    } as React.CSSProperties,
    containerX: {
      position: "absolute",
      top: "205%",
      left: "82%",
      backgroundColor: "white",
      width: "33%",
      maxWidth: "100%",
      padding: "10px 0px",
      borderRadius: " 8px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.2)',
      transform: "translate(-50%, 0%)",
    } as React.CSSProperties,
  }

  const classes = useStyles();
  const refContainer = useRef();
  return (
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0} style={{ position: "relative" }}>
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>
          {/* <Grid container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}> */}
          <Grid container sx={{ overflow: "scroll" }} xs={12} sm={11} md={10}>
            <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 0, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll" } }} item xs={13} >
              <Toolbar />
            </Grid>
          </Grid>
          <Box style={style.container} sx={{
            top: { xs: "68% !important", sm: "199% !important", md: "205% !important" },
            left: { xs: "47% !important", md: "42% !important" },
            width: { xs: "65% !important", sm: "42% !important" }
          }}>
            <img alt="Money Sprint" src={SuccessFullOtp} style={style.logo} />
            <Typography mb={1} variant="h1" align="center" sx={{ marginTop: { xs: "5%" } }} className="SipSucessScreen">
              Your investment is in progress!
            </Typography>
            <Typography mb={2} style={{ maxWidth: "90%" }} className="VerificationOtp" align="center">
              We will notify you via email in 1 or 2 working days once the units are allotted.
              You can track status under transactions tab of your portfolio.
            </Typography>
          </Box>
          <Box style={style.containerX} sx={{
            top: { xs: "419% !important", sm: "803% !important", md: "205% !important" },
            left: { xs: "47% !important", sm: "47% !important", md: "82% !important" },
            width: { xs: "65% !important", sm: "42% !important", md: "33% !important" },
            marginBottom: { xs: "10% !important !important", md: "0% !important" }
          }}>
            <Box sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              backgroundColor: "var(--lightGreenColor)",
              borderRadius: "10px",
              margin: "9%",
              padding: "2%"
            }}>

              <Typography mb={2} style={{ maxWidth: "90%" }} className="VerificationOtp" align="center">
                We will notify you via email in 1 or 2 working days once the confirmation
                received. You can track status under transactions tab of your portfolio.
              </Typography>
              <Box sx={{
                // marginBottom: "0px"
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}>
                <SipSuccessButton />
                <TrackTransButton />
              </Box>
            </Box>
          </Box>

        </Grid>
      </Box>

    </Box>
  )
}

export default SipLastScreen;