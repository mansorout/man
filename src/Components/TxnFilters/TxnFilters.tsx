import { Box, styled } from '@mui/system'
import { Grid} from '@mui/material'
import React, {useRef, useState } from 'react'
import { List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material'

import { MenuItemUnstyled, menuItemUnstyledClasses,MenuUnstyledActions} from '@mui/base';

import {Theme} from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'


 
function Home() {

  const useStyles : any = makeStyles((theme: Theme) => ({
    appbar: {
      backgroundColor:"white",
      width:"100%",
      height:"64px",
      position:"fixed",
      zIndex: "3000",
    },
  }));

  

  const style = {
    main: {
      boxSizing:"border-box",
      backgroundColor:"#f9f9f9",
      height:"100vh"
    } as React.CSSProperties,
    drawer : {
      zIndex: "500",
      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)"
    }as React.CSSProperties,
    image : {
      width: '176px',
    } as React.CSSProperties,
    profileContainer : {
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
    toolbar : {
      display: "flex",
      justifyContent: "space-between"
    },
    profile : {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      border: "1px solid white"
    },
    profileInter : {
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
    }as React.CSSProperties,
    menuButton: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "10px 0px"
    }as React.CSSProperties,
    menuText : {
      color : "black",
      fontSize : "10px",
      fontWeight : "500",
      padding:"5px 10px",
      borderRadius : "4px",
      backgroundColor : "#ffc300",
      cursor:"pointer"
    },
    menuText2 : {
      padding: "6px 12px",
      borderRadius: "4px",
      border: "solid 1px #23db7b",
      backgroundColor: "rgba(35, 219, 123, 0.12)",
      fontSize: "12px",
      fontWeight: "500",
      color : "#09b85d",
      cursor : "pointer"
    },
    button : {
        height: "48px",
        borderRadius: "8px",
        boxShadow: "none",
        backgroundColor: "white",
        textAlign: "left",
        justifyContent: "flex-start",
    } as React.CSSProperties,
    menuIcon : {
      color : "#6c63ff",
      fontSize: "24px"
    },
    appBar: {
      backgroundColor : "white",
    },
    modalContainer : {
      borderRadius: "8px",
      padding:"20px",
      boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.2)",
      backgroundColor: "#fff",
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      position:"absolute",
      top:"50%",
      left:"50%",
      transform:"translate(-50%,-50%)"
    } as React.CSSProperties,
    logo : {
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

  const handleOtpChange = (otp:any) => {
    setOTP(otp)   
  }

  const error : string[] = useSelector((state : any) => state.error)
  const navigate = useNavigate()
  return (
      <Box style={{width: "100vw"}} ref={refContainer}>
        
         
        <Box  sx={style.main}>
          <Grid container spacing={0} sx={{height:"100vh", overflow:"hidden"}}>
            <Grid sx={{display: {xs: "none", sm: "block"},backgroundColor:"#dddfe2", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",  height: "auto", padding:0, boxSizing:"border-box"}} item xs={0} sm={1} md={2}>
              <Toolbar/>
              <List sx={{py:"30px", height:"inherit",backgroundColor:"white"}}>
                <ListItem disablePadding>
                  <ListItemButton
                  onClick={()=>navigate('/home')}
                    sx={{
                      minHeight: 48,
                      px: 2.5,
                      my: 2,
                      flexDirection: { sm:"column", md: "row"},
                      background:"rgba(0, 0, 0, 0.05)"
                    }}
                  >
                    
                    <ListItemText primary="Sort" sx={{ color:"#3c3e42", fontSize:{sm:"10px", md:"16px"} }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                  onClick={()=>navigate('/portfolio')}
                    sx={{
                      minHeight: 56,
                      px: 2.5,
                      my:2,
                      flexDirection: { sm:"column", md: "row"}
                    }}
                  >
                   
                    <ListItemText primary="Date Range" sx={{ color:"#3c3e42", fontSize:{sm:"10px", md:"16px"} }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 56,
                      px: 2.5,
                      my:2,
                      flexDirection: { sm:"column", md: "row"}
                    }}
                  >
                    
                    <ListItemText primary="Amount Range" sx={{ color:"#3c3e42", fontSize:{sm:"10px", md:"16px"} }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 56,
                      px: 2.5,
                      my:2,
                      flexDirection: { sm:"column", md: "row"}
                    }}
                  >
                    
                    <ListItemText primary="Transaction Type" sx={{ color:"#3c3e42", fontSize:{sm:"10px", md:"16px"} }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 56,
                      px: 2.5,
                      my:2,
                      flexDirection: { sm:"column", md: "row"}
                    }}
                  >
                    
                    <ListItemText primary="Transaction Status" sx={{ color:"#3c3e42", fontSize:{sm:"10px", md:"16px"} }} />
                  </ListItemButton>
                </ListItem>
               
              </List>
            </Grid>
          
          </Grid>
        </Box>
        
       
      </Box>
  )
}

export default Home