
import './RedeemFunds.css'

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';


import { CardActionArea } from '@mui/material';
import { cameraIcon, ellipslogo, GroupSaf, Mylocationicon } from "../../Assets/index";

import { Box, styled } from '@mui/system'
import { Breadcrumbs, Grid, Modal, Stack, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, InfoRounded, MenuRounded, PowerSettingsNew, Search, TextFields } from '@mui/icons-material'
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
import RedeemNowButton from '../../Modules/Buttons/RedeemNowButton';
import FundTable from '../FundDetails/FundTable';
import BankDetailTable from './BankDetailTable';
import FooterBtnWithBox from '../CommonComponents/FooterBtnWithBox';




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

    const [openModalNew, setOpenModalNew] = useState(true);
    const [partial, setPartial] = useState(true);
    const [full, setFull] = useState(true)

    const useStyles: any = makeStyles((theme: Theme) => ({
        appbar: {
            backgroundColor: "white",
            width: "100%",
            height: "64px",
            position: "fixed",
            zIndex: "3000",
        },
        showPlanBtn: {
            backgroundColor: 'var(--primaryColor) !important',
            color: 'var(--uiWhite) !important',
            borderRadius: '0px !important'
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


    const [selected, setSelected] = useState<number>(1)
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
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const showPlan = () => {
        navigate('/verifyoncheckout')
    }





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
                                    onClick={() => navigate("/home")}
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
                                    onClick={() => navigate("/portfolio")}
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



                                    <Link color="#6495ED" underline="always" href="/portfolio">
                                        <Typography className='burgerText'> Portfolio</Typography>
                                    </Link>



                                    <Link underline="always">
                                        <Typography className='burgerText'>Reddem Fund</Typography>

                                    </Link>
                                </Breadcrumbs>
                            </Box>


                            {
                                partial ? RedeemFundData.map((item, index) => {
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
                                }) : ""
                            }

                            {
                                partial ? "" :  RedeemFundData.map((item, index) => {
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
                                    <Box>


                                        <Card sx={{ maxWidth: 488, maxHeight: 268, marginTop: "25px", marginLeft: "3%" }}>
                                            <CardContent>
                                                <Box>
                                                    <Typography
                                                        sx={{

                                                            height: " 19px",
                                                            // margin: " 5% 62px 27px 5%",
                                                            fontFamily: "Roboto",
                                                            fontSize: "18px",
                                                            fontWeight: " 500",
                                                            textAlign: " left",
                                                            color: " #3c3e42"
                                                        }}
                                                    >Redemption type</Typography>
                                                    &nbsp;       &nbsp;       &nbsp;
                                                    <Typography sx={{

                                                        height: " 16px",
                                                        // margin: "5% 62px 27px 5%",

                                                        fontSize: " 14px",




                                                        textAlign: " left",
                                                        color: "#3c3e42"
                                                    }}>Redemption by</Typography>
                                                </Box>
                                                <Box sx={{ textAlign: "right", marginTop: "-23%", marginLeft: "2%" }}>
                                                    <Button
                                                        onClick={() => {
                                                            setPartial(true)
                                                        }}
                                                        sx={{

                                                            color: "#09b85d",
                                                            width: " 79px",
                                                            height: " 35px",
                                                            padding: "10px 12px 9px",
                                                            borderRadius: "8px",

                                                            border: "solid 1px rgba(123, 123, 157, 0.3)",
                                                            marginTop: "7%",
                                                            marginLeft: "-9%",


                                                        }}>PARTIAL</Button>

                                                    <Button onClick={() => {
                                                        setPartial(false)
                                                    }} sx={{
                                                        color: "#09b85d",
                                                        width: "56px",
                                                        height: "35px",
                                                        padding: "10px 12px 9px",
                                                        borderRadius: "8px",
                                                        border: "solid 1px rgba(123, 123, 157, 0.3)",
                                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                                        marginTop: "7%",
                                                        marginLeft: "1%"
                                                    }}>Full</Button>
                                                    &nbsp; &nbsp;

                                                </Box>

                                                {/* <Box style={{ marginBottom: "20px", display: "flex", gap: "15px", alignItems: "center" }}>
                                                    <Box onClick={() => { setSelected(2) }} style={{ cursor: "pointer", border: `1px solid ${selected == 2 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selected == 2 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "12px 14px" }}>
                                                        <Typography style={{ fontWeight: "500", color: `${selected == 2 ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>PARTIAL </Typography>
                                                    </Box>
                                                    <Box onClick={() => { setSelected(3) }} style={{ cursor: "pointer", border: `1px solid ${selected == 3 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selected == 3 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "12px 14px" }}>
                                                        <Typography style={{ fontWeight: "500", color: `${selected == 3 ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>FULL</Typography>
                                                    </Box>
                                                </Box> */}

                                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "10%" }}>
                                                    <Typography sx={{ fontSize: "14px" }} >

                                                        <Radio

                                                            sx={{ color: "#23db7b", marginLeft: "-7%" }}
                                                        />

                                                        Amount: ₹1,46,625

                                                    </Typography>
                                                    &nbsp; &nbsp;
                                                    <Typography sx={{ fontSize: "14px" }}>

                                                        <Radio
                                                            checked={selectedValue === 'b'}
                                                            onClick={() => navigate('/redeemfund')}
                                                            // onChange={handleChange}
                                                            value="b"
                                                            name="radio-buttons"
                                                            //componentsProps={{ input: { 'aria-label': 'B' } }}
                                                            sx={{ color: "#23db7b", marginLeft: "-15%", marginTop: "-6%" }}

                                                        />
                                                        Units: 750.762</Typography>
                                                </Box>
                                                <Box>
                                                    <TextField label="Amount"
                                                        name="Amount"
                                                        //   value={formData.lastName}
                                                        sx={{
                                                            width: " 100%",
                                                            height: "56px",

                                                            borderRadius: "4px",
                                                            boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)",
                                                            border: "solid 1px #dddfe2",
                                                            backgroundColor: "#fff",

                                                            marginTop: "5%"
                                                        }}

                                                    >

                                                    </TextField>
                                                </Box>

                                                <Box>
                                                    <Typography
                                                        sx={{
                                                            width: "304px",
                                                            height: "30px",
                                                            // margin: "8px 135px 0 8%",
                                                            fontSize: " 12px",
                                                            textAlign: "left",
                                                            color: "#8787a2"



                                                        }}
                                                    >Minimum redemption amount ₹500 </Typography>

                                                    <Typography
                                                        sx={{
                                                            width: "304px",
                                                            height: "30px",
                                                            marginTop: "-8px",
                                                            fontSize: " 12px",
                                                            textAlign: "left",
                                                            color: "#8787a2"
                                                        }}
                                                    >Maximum  redemption amount ₹25,000</Typography>
                                                </Box>

                                            </CardContent>

                                        </Card>

                                    </Box>

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
                            <Box onClick={handleOpen}>

                                <RedeemNowButton />
                            </Box>

                        </Box>


                        {/* <Grid container spacing ={2}>
                            <Grid item xs={12} md={12} >
                                <FooterBtnWithBox boxIcon={''} boxText={''} boxAmount={''} btnText={'Redeem Now'} btnClick={handleOpen} />
                            </Grid>
                          </Grid> */}


                    </Grid>

                </Grid>

            </Box>
            <Modal
                sx={{ backdropFilter: "blur(10px)" }}
                keepMounted
                open={open}
                onClose={() => setOpenModal(false)}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box style={{
                    width: "90%",
                    maxWidth: "330px",
                    borderRadius: "8px",
                    boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.2)",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    overflow: "hidden",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)"
                }}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} textAlign="right">
                            <Box onClick={()=>setOpen(false)}>
                                <img alt="Money Sprint" src={closelogo} style={style.logoclose} />
                            </Box>
                        </Grid>
                    </Grid>

                    <img alt="Money Sprint" src={GroupSaf} style={style.logoIc} />


                    <Typography mb={2} style={{ fontSize: "24px", color: "#3c3e42", fontWeight: "500" }}>Confirm Bank Details</Typography>


                    <Box style={{ backgroundColor: "#6c63ff", width: "100%" }}>
                        <Typography style={{ fontSize: "14px", color: 'white', padding: "10px 20px" }}>The money will be credited to the bank account details mentioned in your folio</Typography>
                    </Box>



                    <Box
                        sx={{

                            width: "95%",
                            marginTop: "2%"
                        }}
                    >

                    </Box>
                    <Box
                        sx={{

                            width: "95%",
                            marginTop: "2%"
                        }}
                    >

                    </Box>




                    <BankDetailTable />
                    <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "10px 20px" }}>
                        <InfoRounded style={{ color: "#6c63ff", width: "20px" }}></InfoRounded>
                        <Typography style={{ fontSize: "10px", color: '#919eb1' }}>By continuing, a verification code will be sent will be sent to your registered mobile number and email address to verify it's you..</Typography>
                    </Box>

                    <Button onClick={showPlan} autoFocus className={classes.showPlanBtn} fullWidth>
                        Continue
                    </Button>

                </Box>


            </Modal>

        </Box>
    )
}

export default RedeemFunds
