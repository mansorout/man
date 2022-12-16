
import './Editprofilescreen.css'
import Avatar from '@mui/material/Avatar';

import { Box, styled } from '@mui/system'
import { Breadcrumbs, Grid, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, MenuRounded, PowerSettingsNew, Search } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support, SupportOutlined } from '@mui/icons-material';
import { AppBar, Button, Divider, Menu, MenuItem, Theme, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Logo, Profile, SIP } from '../../Assets/index'
// import ViewProfileCard from '../../Modules/Cards/ViewProfileCard'
// import VviewprofileCard from '../../Modules/Cards/VviewprofileCard'
import EditprofileCard from '../../Modules/Cards/EditeprofileCard';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../CommonComponents/Sidebar';
import Navbar from '../CommonComponents/Navbar';



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

function Editprofilescreen() {

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
    }
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
  const navigate = useNavigate()
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


              <Box role="presentation" sx={{ margin: "27px 0px 21px 25px" }}>
                <Breadcrumbs aria-label="breadcrumb">



                  <Link color="#6495ED" underline="always" href='Home' >
                    <Typography className='burgerText'> Home</Typography>
                  </Link> <Link underline="always" href='/vp'>
                    <Typography className='burgerText'>View Profile</Typography>
                    </Link><Link underline="none" color="#878782" sx={{ fontSize: "12px", width: "100%" }}>
                    <Typography className='burgerText'>Edit Details</Typography>

                  </Link>
                </Breadcrumbs>
              </Box>
              
              <EditprofileCard />
              <Box
                textAlign="center"
                sx={{
                  margin: "auto",
                  width: "304px",
                }}
              >

                <Typography component="span" className="bottomContentText ">
                  By submitting these details, you are agree to share your details
                  to BSE for further transactions <br />
                </Typography>
                <Typography
                  component="span"
                  style={{ cursor: "pointer" }}
                  className="textLink"
                >
                  Terms and conditions
                </Typography>
              </Box>

            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>


  )
}

export default Editprofilescreen
