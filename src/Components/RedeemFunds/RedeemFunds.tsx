
import './RedeemFunds.css'
import { Box, styled } from '@mui/system'
import { Breadcrumbs, Grid, Modal, Stack, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, MenuRounded, PowerSettingsNew, Search, TextFields } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support, SupportOutlined } from '@mui/icons-material';
import { AppBar, Button, Divider, Menu, MenuItem, Theme, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Ad1, Ad1_1, Ad1_2, Ad2, closelogo, Logo, MonoLogo, Profile, Radiobutton, rupconvie, rupreturnlogo, SIP, sipiclogo } from '../../Assets/index'

import { useNavigate } from 'react-router-dom'
import Link from '@mui/material/Link';
import { useSelector } from 'react-redux'

import RedeemFundsCard from './RedeemFundsCard'
import TextField from '@mui/material/TextField';

import RedeemNowButtom from '../../Modules/Buttons/RedeemNowButton'
import Radio from '@mui/joy/Radio'
import SaveSipDetailsButton from '../../Modules/Buttons/SaveSipDetailsButton'

import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import RedeemFundCard from '../../Modules/Cards/RedeemFundCard'
import RedeemSecFundCard from '../../Modules/Cards/RedeemSecFundCard'

import { RedeemFundData } from './RedeemFundData'



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

function RedeemFunds() {


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
        RupConviestyle: {
            width: "40px",
            height: "40px",
            margin: "0 16px 33px 20%"

        },

        RadioInter: {
            width: "22px",
            height: "22px",
            border: "solid 1px rgba(75, 123, 236, 0.49)",
            borderRadius: "50%",
            marginTop: "-40%"

        },
        RInter: {
            color: "#ffffff",
            width: "22px",
            height: "22px",
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
        logoIc: {
            width: "50px",
            padding: "20px 0px",
        },
        logoclose: {
            width: " 14px",
            height: "14px",
            // backgroundColor: "#8787a2",
            textAlign: "right",
            inlineSize: ""
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

    const navigate = useNavigate();

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

    const [selectedValue, setSelectedValue] = React.useState('a');
    // const navigate = useNavigate();
    //     const handleChange = (event: any) => {
    //         navigate('/completedview')
    //         setSelectedValue(event.target.value);

    //     };
    // function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    //     event.preventDefault();
    //     console.info('You clicked a breadcrumb.');
    //   }

    // const [name, setName] = React.useState('Cat in the Hat');
    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   setName(event.target.value);




    return (
        <Box style={{ width: "100vw", }} ref={refContainer}>

            <AppBar elevation={2} style={style.appBar} classes={classes.appBar}>
                <Toolbar style={style.toolbar}>
                    <Box>
                        <MenuRounded onClick={() => setOpen(!open)} sx={{ color: "#8787a2", display: { sx: "block", sm: "none" }, marginRight: "20px" }} />
                        <img onClick={() => navigate("/home")} src={Logo} alt="Sprint Money" style={style.image} />
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
                                <img src={Profile} alt="image" style={style.RadioInter} />
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
                            onClick={() => console.log("Clicked")}
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
                <Grid container spacing={0} sx={{ height: "100vh", overflow: "hidden" }}>
                    <Grid sx={{ display: { xs: "none", sm: "block" }, backgroundColor: "white", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)", height: "auto", padding: 0, boxSizing: "border-box" }} item xs={0} sm={1} md={2}>
                        <Toolbar />

                        <List sx={{ py: "30px", height: "inherit" }}>
                            <ListItem disablePadding sx={{ background: "rgba(0, 0, 0, 0.05)" }}>
                                <ListItemButton
                                   onClick={()=>navigate("/home")}
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

                    <Grid container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}>



                        <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 0, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll" } }} item xs={13}>


                            <Toolbar />















                            <Box role="presentation" sx={{ margin: "27px 0px 21px 25px" }}>
                                <Breadcrumbs aria-label="breadcrumb">



                                    <Link color="#6495ED" underline="always"  href="/portfolio">
                                        <Typography className='burgerText'> Portfolio</Typography>
                                    </Link>
                                 
                                       
 
                                    <Link  underline="always">
                                        <Typography className='burgerText'>Reddem Fund</Typography>
                                    
                                    </Link>
                                </Breadcrumbs>
                            </Box>
                            {
                                RedeemFundData.map((item, index) => {
                                    return (
                                        <RedeemFundsCard
                                            key={index}
                                            logo={item.logo}
                                            name={item.name}
                                            cap={item.cap}
                                            type={item.type}
                                            year1={item.year1}
                                            year3={item.year3}
                                            year5={item.year5}
                                            year6={item.year6}
                                            rating={item.rating}
                                            morning_star_logo={item.morning_star_logo}
                                        />
                                    )
                                })
                            }


                            <Grid container spacing={1} >
                                <Grid item xs={12} sm={6} sx={{ padding: { xs: 0, sm: 3 }, display: "-webkit-inline-flex", }} >
                                    <RedeemFundCard />

                                </Grid>




                                <Grid item xs={12} sm={6} sx={{ padding: { xs: 5, sm: 3 }, display: "-webkit-inline-flex" }} >
                                    <RedeemSecFundCard />

                                </Grid>
                               


                            </Grid>




                        </Grid>

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
                            <RedeemNowButtom />
                        </Box>

                      



                    </Grid>

                </Grid>

            </Box>

            <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Box style={style.modalContainer}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} textAlign="right">
                            <img alt="Money Sprint" src={closelogo} style={style.logoclose} />
                        </Grid>
                    </Grid>

                    <img alt="Money Sprint" src={sipiclogo} style={style.logoIc} />

                    <Typography textAlign="center" variant='h5' sx={{ color: "#3c3e42" }} >Help us know you better.</Typography>
                    <Typography textAlign="center" variant='h5' sx={{ fontSize: "14px" }}  >Share details below to view recommendations</Typography>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 2, width: '19ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="outlined-name"
                            label="FirstName"
                            sx={{ color: "#919eb1", fontSize: "17px" }}
                        // value={name}
                        // onChange={handleChange}
                        />
                        <TextField
                            sx={{ color: "#919eb1", fontSize: "17px", marginTop: "3%" }}
                            label="LastName"

                        />

                    </Box>
                    <Box
                        sx={{

                            width: "95%",
                            marginTop: "2%"
                        }}
                    >
                        <TextField fullWidth sx={{ color: "#919eb1", fontSize: "17px", marginTop: "1%" }} label="Email Address" id="fullWidth" />
                    </Box>
                    <Box
                        sx={{

                            width: "95%",
                            marginTop: "2%"
                        }}
                    >
                        <TextField type="date" sx={{ color: "#919eb1", fontSize: "17px", marginTop: "4%", }} fullWidth label="Date of Birth" id="fullWidth" />
                    </Box>


                    <div style={{ width: "100%" }} onClick={() => setOpenModal(false)}>
                        <SaveSipDetailsButton otp={OTP} />
                    </div>
                    {/* <Typography sx={{ fontSize: "14px", color: " #7b7b9d" }}>
                        <span onClick={() => navigate("/setnewpin")} className="textLink" style={{ fontSize: "14px", cursor: "pointer" }} >Forgot PIN?</span></Typography> */}
                </Box>
            </Modal>

        </Box>
    )
}

export default RedeemFunds