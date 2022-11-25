
import './RedeemFunds.css'
import { Box, styled } from '@mui/system'
import { Grid, Modal, Stack, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, MenuRounded, PowerSettingsNew, Search, TextFields } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support, SupportOutlined } from '@mui/icons-material';
import { AppBar, Button, Divider, Menu, MenuItem, Theme, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Ad1, Ad1_1, Ad1_2, Ad2, Logo, MonoLogo, Profile, Radiobutton, rupconvie, rupreturnlogo, SIP } from '../../Assets/index'
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
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import RedeemFundsCard from './RedeemFundsCard'
import TextField from '@mui/material/TextField';
import { runInContext } from 'vm'
import RedeemNowButtom from '../../Modules/Buttons/RedeemNowButton'
import Radio from '@mui/joy/Radio'

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

    const handleChange = (event: any) => {
        setSelectedValue(event.target.value);
    };

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
                    </Grid>
                    <Grid container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}>
                        <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 0, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll" } }} item xs={13} sm={7} md={12}>
                            <Toolbar />
                            <RedeemFundsCard />

                            <Grid container spacing={3} >

                                <Grid item xs={6}>

                                    <Card sx={{ maxWidth: 488, marginTop: "5%", marginLeft: "5%" }}>
                                        <CardActionArea>
                                            <Grid container sm >
                                                <Grid item xs={7}>
                                                    <Typography
                                                        sx={{

                                                            height: " 19px",
                                                            margin: " 5% 62px 27px 5%",
                                                            fontFamily: "Roboto",
                                                            fontSize: "18px",
                                                            fontWeight: " 500",
                                                            textAlign: " left",
                                                            color: " #3c3e42"
                                                        }}
                                                    >Redemption type</Typography>
                                                    <Typography sx={{
                                                        width: "90px",
                                                        height: " 16px",
                                                        margin: "5% 62px 27px 5%",

                                                        fontSize: " 14px",




                                                        textAlign: " left",
                                                        color: "#3c3e42"
                                                    }}>Redemption by</Typography>
                                                </Grid>

                                                <Grid item xs={5}>
                                                    <Button sx={{
                                                        color: "#09b85d",
                                                        width: " 79px",
                                                        height: " 35px",
                                                        padding: "10px 12px 9px",
                                                        borderRadius: "8px",
                                                        border: "solid 1px var(--seaweed)",
                                                        backgroundColor: "#dff7ea",
                                                        marginTop: "7%",
                                                        marginLeft: "-9%"

                                                    }}>PARTIAL</Button>
                                                    <Button sx={{
                                                        color: "#09b85d",
                                                        width: "56px",
                                                        height: "35px",
                                                        padding: "10px 12px 9px",
                                                        borderRadius: "8px",
                                                        border: "solid 1px rgba(123, 123, 157, 0.3)",
                                                        backgroundColor: "rgba(255, 255, 255, 0)",
                                                        marginTop: "7%",
                                                        marginLeft: "10%"
                                                    }}>Full</Button>

                                                </Grid>





                                            </Grid>
                                            <Grid container spacing={3} sx={{ marginLeft: "12%", marginTop: "1%" }}>
                                                <Grid item xs={6}>
                                                    <Typography  >
                                                        {/* <img src={Radiobutton} alt="image" style={style.RadioInter} /> */}
                                                        <Radio
                                                            checked={selectedValue === 'a'}
                                                            onChange={handleChange}
                                                            value="a"
                                                            name="radio-buttons"
                                                            componentsProps={{ input: { 'aria-label': 'A' } }}
                                                            sx={{color:"#23db7b"}}
                                                        />

                                                        Amount: ₹1,46,625

                                                    </Typography>


                                                </Grid>

                                                <Grid item xs={6}>
                                                    {/* <img src={Radiobutton} alt="image" style={style.RadioInter} /> */}
                                                    <Typography>
                                                        <Radio
                                                            checked={selectedValue === 'b'}
                                                            onChange={handleChange}
                                                            value="b"
                                                            name="radio-buttons"
                                                            componentsProps={{ input: { 'aria-label': 'B' } }}
                                                            sx={{color:"#23db7b"}}
                                                        />
                                                        Units: 750.762</Typography>
                                                </Grid>

                                            </Grid>


                                            {/* <img src={Radiobutton} alt="image" style={style.RInter} /> */}
                                            <TextField label="Amount"
                                                name="Amount"
                                                //   value={formData.lastName}
                                                sx={{
                                                    width: " 400px",
                                                    height: "56px",

                                                    borderRadius: "4px",
                                                    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)",
                                                    border: "solid 1px #dddfe2",
                                                    backgroundColor: "#fff",
                                                    marginLeft: "4%",
                                                    marginTop: "8%"
                                                }}

                                            >

                                            </TextField>

                                            <Grid container direction="column" >
                                                <Grid item xs={6}>
                                                    <Typography
                                                        sx={{
                                                            width: "304px",
                                                            height: "30px",
                                                            margin: "8px 135px 0 8%",
                                                            fontSize: " 12px",
                                                            textAlign: "left",
                                                            color: "#8787a2"



                                                        }}
                                                    >Minimum redemption amount ₹500 </Typography>
                                                </Grid>
                                                <Grid item xs={6} >
                                                    <Typography
                                                        sx={{
                                                            width: "304px",
                                                            height: "30px",
                                                            margin: "8px 135px 0 8%",
                                                            fontSize: " 12px",
                                                            textAlign: "left",
                                                            color: "#8787a2"
                                                        }}
                                                    >Maximum  redemption amount ₹25,000</Typography>
                                                </Grid>
                                            </Grid>






                                        </CardActionArea>

                                    </Card>

                                </Grid>
                                <Grid item xs={6}>
                                    <Card sx={{ maxWidth: 488, marginTop: "5%", marginLeft: "-3%", borderRadius: "8px" }}>
                                        <CardActionArea>
                                            <Typography sx={{
                                                width: "318px",
                                                height: "21px",
                                                margin: "5% 108px 22px 5%",
                                                fontFamily: "Roboto",
                                                fontSize: "18px",
                                                fontWeight: "500",
                                                fontStretch: "normal",
                                                fontStyle: "normal",
                                                lineHeight: "normal",
                                                letterSpacing: "normal",
                                                textAlign: "left",
                                                color: " #3c3e42"
                                            }}>Advantages of Lump sum investment</Typography>

                                            <Grid container spacing={1}>
                                                <Grid item xs={2}>
                                                    <img src={rupconvie} alt="image" style={style.RupConviestyle} />
                                                </Grid>
                                                <Grid item xs={10}>
                                                    <Typography sx={{
                                                        fontSize: "16px",


                                                    }}>Exit Load</Typography>
                                                    <Typography sx={{
                                                        width: "353px",
                                                        height: " 50px",
                                                        margin: " 4px 0 0 ",
                                                        fontSize: "14px",
                                                        fontWeight: "normal",
                                                        lineHeight: "1.21",
                                                        textAlign: " left",
                                                        color: "#7b7b9d"
                                                    }}>Exit load will be applicable if you are redeeming a fund within
                                                        365 days from the date of purchase. Exit load
                                                        is a percentage of the NAV of the fund.</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={1}>
                                                <Grid item xs={2}>
                                                    <img src={rupreturnlogo} alt="image" style={style.RupConviestyle} />
                                                </Grid>
                                                <Grid item xs={10}>
                                                    <Typography sx={{ fontSize: "16px", }}>Tax Implications</Typography>
                                                    <Typography
                                                        sx={{
                                                            width: "353px",
                                                            height: " 50px",
                                                            margin: " 4px 0 0 ",
                                                            fontFamily: " Roboto",
                                                            fontSize: "14px",
                                                            textAlign: " left",
                                                            color: "#7b7b9d"
                                                        }}
                                                    >Investors earn dividends and capital gains from liquid funds.
                                                        Investors do not pay any tax on dividend income from mutual funds.</Typography>
                                                </Grid>
                                            </Grid>
                                            <Grid container spacing={3}>
                                                <Grid item xs={12}>
                                                    <Typography sx={{
                                                        width: " 363px",
                                                        height: "31px",
                                                        margin: "19px 7px 19px 56px",
                                                        fontSize: " 12px",
                                                        fontWeight: "normal",
                                                        fontStyle: " normal",
                                                        lineHeight: "1.42",
                                                        letterSpacing: "normal",
                                                        textAlign: " center",
                                                        color: "#7b7b9d",


                                                    }}>  Final units or amount will depend on NAV
                                                        applicable at the time of actual redemption request.</Typography>
                                                </Grid>
                                                <Grid item xs={12} sx={{ marginTop: "-5%" }}>
                                                    <Typography
                                                        sx={{
                                                            width: " 363px",
                                                            height: "31px",
                                                            margin: "-4% 7px 19px 56px",
                                                            fontSize: " 12px",
                                                            fontWeight: "normal",
                                                            fontStyle: " normal",
                                                            lineHeight: "1.42",
                                                            letterSpacing: "normal",
                                                            textAlign: " center",
                                                            color: "#7b7b9d",
                                                        }}
                                                    >By continuing, you’re agreeing to SprintMoneyTM</Typography>
                                                    <Typography sx={{
                                                        width: " 363px",
                                                        height: "31px",
                                                        margin: "-5% 7px 19px 56px",
                                                        fontSize: " 12px",
                                                        fontWeight: "normal",
                                                        fontStyle: " normal",
                                                        lineHeight: "1.42",
                                                        letterSpacing: "normal",
                                                        textAlign: " center",
                                                        color: "#6c63ff",
                                                    }}>  Terms and conditions</Typography>
                                                </Grid>
                                            </Grid>
                                        </CardActionArea>
                                    </Card>

                                </Grid>

                            </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sx={{ textAlign: "center" }}>
                                <RedeemNowButtom />
                            </Grid>
                        </Grid>

                    </Grid>

                </Grid>
            </Box>

        </Box>
    )
}

export default RedeemFunds