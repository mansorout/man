
import './NETbanking.css'
import Avatar from '@mui/material/Avatar';

import { Box, styled } from '@mui/system'
import { Breadcrumbs, Container, Grid, Paper, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, MenuRounded, PowerSettingsNew, Search } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support, SupportOutlined } from '@mui/icons-material';
import { AppBar, Button, Divider, Menu, MenuItem, Theme, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { hdfclogo, Logo, Profile, Radiobutton, SIP, upilogo } from '../../Assets/index'
import ViewProfileCard from '../../Modules/Cards/ViewProfileCard'
import VviewprofileCard from '../../Modules/Cards/VviewprofileCard'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import IconButton from '@mui/material/IconButton';
import Radio from '@mui/material/Radio';
import { green } from '@mui/material/colors';
import { Navigate, useNavigate } from 'react-router-dom';
import MakepaymentNetbankingbutton from '../../Modules/Buttons/MakepaymentNetbankingbutton';
import Link from '@mui/material/Link'

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

function NETbanking() {

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
        divider: {
            width: "100%",
            height: ".2px",
            padding: ".2px",
            backgroundColor: "#d1d6dd",
            opacity: "0.34"
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

    const refContainer = useRef();
    const [selectedValue, setSelectedValue] = React.useState('a');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedValue(event.target.value);
    };
    const navigate = useNavigate()

    return (
        <Box style={{ width: "100vw" }} ref={refContainer}>

            <AppBar elevation={2} style={style.appBar} classes={classes.appBar}>
                <Toolbar style={style.toolbar}>
                    <Box>
                        <MenuRounded onClick={() => setOpen(!open)} sx={{ color: "#8787a2", display: { sx: "block", sm: "none" }, marginRight: "20px" }} />
                        <img src={Logo} alt="Sprint Money" style={style.image} />
                    </Box>
                    <Box onClick={handleClick} style={style.profileContainer}>
                        <img src={Profile} alt="image" style={style.profile} />
                        <Typography sx={{ fontSize: "16px", color: "white", display: { xs: "none", sm: "block" } }}>Hi, Rahul M.</Typography>
                        {anchorEl ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
                    </Box>
                    <MenuUnstyled
                        style={{ zIndex: 5000 }}
                        actions={menuActions}
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                        anchorEl={anchorEl}
                    >
                        <StyledMenuItem>
                            <Box style={style.menuContainer}>
                                <img src={Profile} alt="image" style={style.profileInter} />
                                <Typography className='mediumButtonText'>Rahul Malhotra</Typography>
                                <Typography className="caption">rahul.malhotra@gamil.com</Typography>
                                <Box style={style.menuButton}>
                                    <Typography style={style.menuText}>KYC PENDING</Typography>
                                    <Typography style={style.menuText2}>View Profile</Typography>
                                </Box>
                                <Divider style={{ margin: "15px 0px" }} />
                                <Button variant="contained" style={style.button} fullWidth startIcon={<Support style={style.menuIcon} />}>
                                    <Typography component="span" className="subTitle3">Help & Support</Typography>
                                </Button>
                            </Box>
                        </StyledMenuItem>
                    </MenuUnstyled>
                </Toolbar>
            </AppBar>
            <DrawerList sx={{
                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
                display: { xs: "block", sm: "none" },
                "& .MuiBackdrop-root": {
                    flexGrow: 0,
                }
            }}
                PaperProps={{ elevation: 0, sx: { width: "250px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)", } }}
                style={style.drawer} onClose={() => setOpen(false)} variant="temporary" open={open}>
                <Toolbar />
                <List sx={{ py: "30px" }}>
                    <ListItem disablePadding sx={{ background: "rgba(0, 0, 0, 0.05)" }}>
                        <ListItemButton
                            sx={{
                                minHeight: 48,
                                px: 2.5,
                                my: 2,
                                flexDirection: { sm: "column", md: "row" }
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: 1,
                                    justifyContent: 'center',
                                }}
                            >
                                <HomeIcon sx={{ color: "#23db7b" }} />
                            </ListItemIcon>
                            <ListItemText primary="Home" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 56,
                                px: 2.5,
                                my: 2,
                                flexDirection: { sm: "column", md: "row" }
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: 1,
                                    justifyContent: 'center',
                                }}
                            >
                                <Assessment sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary="Portfolio" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton
                            sx={{
                                minHeight: 56,
                                px: 2.5,
                                my: 2,
                                flexDirection: { sm: "column", md: "row" }
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: 1,
                                    justifyContent: 'center',
                                }}
                            >
                                <Search sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary="Explore Funds" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding sx={{ display: 'block', position: "fixed", width: { sx: "0%", sm: "8.333%", md: "16.666%" }, bottom: "0" }}>
                        <ListItemButton
                            sx={{
                                minHeight: 56,
                                px: 2.5,
                                my: 2,
                                flexDirection: { sm: "column", md: "row" }
                            }}
                        >
                            <ListItemIcon
                                sx={{
                                    minWidth: 0,
                                    mr: 1,
                                    justifyContent: 'center',
                                }}
                            >
                                <PowerSettingsNew sx={{ color: 'black' }} />
                            </ListItemIcon>
                            <ListItemText primary="Logout" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />

                        </ListItemButton>

                    </ListItem>
                </List>
            </DrawerList>
            <Box sx={style.main}>

                <Grid container spacing={0} sx={{height: "100vh", overflow: "hidden" }}>

                    <Grid sx={{ display: { xs: "none", sm: "block" }, backgroundColor: "white", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)", height: "auto", padding: 0, boxSizing: "border-box" }} item xs={0} sm={1} md={2}>
                        <Toolbar />

                        
                        <List sx={{ py: "30px", height: "inherit" }}>
                            <ListItem disablePadding sx={{ background: "rgba(0, 0, 0, 0.05)" }}>
                                <ListItemButton
                                  onClick={()=>navigate("/portfolio")}
                                    sx={{
                                        minHeight: 48,
                                        px: 2.5,
                                        my: 2,
                                        flexDirection: { sm: "column", md: "row" }
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: 1,
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <HomeIcon sx={{ color: "#23db7b" }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Home" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                onClick={()=>navigate("/portfolio")}
                                    sx={{
                                        minHeight: 56,
                                        px: 2.5,
                                        my: 2,
                                        flexDirection: { sm: "column", md: "row" }
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: 1,
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Assessment sx={{ color: 'black' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Portfolio" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding sx={{ display: 'block' }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 56,
                                        px: 2.5,
                                        my: 2,
                                        flexDirection: { sm: "column", md: "row" }

                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: 1,
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Search sx={{ color: 'black' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Explore Funds" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding sx={{ display: 'block', position: "fixed", width: { sx: "0%", sm: "8.333%", md: "16.666%" }, bottom: "0" }}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 56,
                                        px: 2.5,
                                        my: 2,
                                        flexDirection: { sm: "column", md: "row" }
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: 1,
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <PowerSettingsNew sx={{ color: 'black' }} />
                                    </ListItemIcon>
                                    <ListItemText primary="Logout" sx={{ color: "#3c3e42", fontSize: { sm: "10px", md: "16px" } }} />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid sx={{ height: "100vh", padding: 4, boxSizing: "border-box", overflow: "scroll" }} item xs={12} sm={8} md={8}>
                        <Toolbar />
                        <Box role="presentation">
                                <Breadcrumbs aria-label="breadcrumb">



                                    <Link color="#6495ED" underline="always" href='Home' sx={{fontSize:"12px",width:"100%"}} >
                                        <Typography className='burgerText'> Home</Typography>
                                    </Link>
                                 
                                       
 
                                    <Link  underline="always" sx={{fontSize:"12px",width:"100%"}} >
                                        <Typography className='burgerText' >Investment</Typography>
                                    
                                    </Link>
                                    
                                    <Link  underline="always" sx={{fontSize:"12px",width:"100%"}} href="/investnowscreen">
                                        <Typography className='burgerText'>One-time lumpsum</Typography>
                                    
                                    </Link>
                                    <Link  underline="always" sx={{fontSize:"12px",width:"100%"}} href="/mflist">
                                        <Typography className='burgerText'>Mutual Fund Recommendation</Typography>
                                    
                                    </Link>
                                    <Link  underline="always" sx={{fontSize:"12px",width:"100%"}}>
                                        <Typography className='burgerText'>Select a payment option</Typography>
                                    
                                    </Link>
                                </Breadcrumbs>
                            </Box>
                        <Card sx={{ maxWidth: 456, }}  >
                            <Typography style={{ marginLeft: "5%", fontSize: "16px", marginTop: "5%", fontWeight: "500", height: "19px" }} >Select a payment option</Typography>
                            <CardHeader
                                avatar={

                                    <img src={Radiobutton} alt="S__M" style={{ width: "18.3px", height: "18.3px" }} />

                                }
                                action={
                                    <Box onClick={() => navigate('/vp')}>
                                        <img src={hdfclogo} alt="sprint-money" style={{
                                            width: "29.1px",
                                            height: "29.4px",
                                            marginLeft: "-16px"


                                        }} />
                                    </Box>

                                }
                                title="Net Banking"
                                subheader="4825 ********** 25"
                                sx={{ fontSize: "14px", fontWeight: "500", color: "#3c3e42" }} />
                            <Box style={style.divider}></Box>
                            <CardHeader
                                avatar={
                                    <img src={Radiobutton} alt="S__M" style={{ width: "18.3px", height: "18.3px" }} />

                                }
                                action={
                                    <IconButton aria-label="UPILOGO" sx={{
                                        width: "44.1px",
                                        height: " 35px",

                                        padding: "0 0.4px 5.6px 14.6px",

                                        opacity: "0.45"
                                    }}>
                                        <img src={upilogo} alt="S__M" style={{
                                            width: "44px",
                                            height: "35px",
                                            marginLeft: "-16px"


                                        }} />
                                    </IconButton>
                                }
                                title="UPI "
                                subheader="Send UPI Options"
                                sx={{ color: "#7b7b9d", fontSize: "14px", fontWeight: "500" }}
                            />



                        </Card>
                        <MakepaymentNetbankingbutton />

                    
                    </Grid>
                </Grid>

            </Box>

        </Box>
    )
}

export default NETbanking
