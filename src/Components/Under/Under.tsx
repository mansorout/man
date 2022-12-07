
import './Under.css'
import { Box, styled } from '@mui/system'
import { Button, Grid, Modal, Theme, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled } from '@mui/base';
import { makeStyles } from '@mui/styles';
import { Ad1, Ad1_1, Ad1_2, Ad2, Logo, MonoLogo, Profile, SIP } from '../../Assets/index'
import FinancialFreedom from '../../Modules/CustomCard/FinancialFreedom'
import StartInvestingCard from '../../Modules/CustomCard/StartInvestingCard'
import { investingCards } from '../../Modal/investingCards'
import { largeCards } from '../../Modal/largeCards'
import LargeCards from '../../Modules/CustomCard/LargeCards'
import CompanyFundCard from '../../Modules/CustomCard/CompanyFundCard'
import { companyCards } from '../../Modal/companyCards'
import { useNavigate } from 'react-router-dom'
import OtpInput from 'react-otp-input'
import { useSelector } from 'react-redux'
import PINVerifyButton from '../../Modules/Buttons/PINVerifyButton'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar'
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

function Under() {

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

  return (
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0} >
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />

            
          </Grid>
        
        </Grid>
      </Box>

      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box style={style.modalContainer}>
        
       
      
<Typography  onClick={()=>navigate('/mflist')} sx={{color:"blue"}}>Under Devlopment</Typography>
          <Typography textAlign="center" variant='caption' onClick={()=>navigate('/under')} >Popup successfully</Typography>
        
         
        </Box>
    
      </Modal>
    </Box>
  )
}

export default Under