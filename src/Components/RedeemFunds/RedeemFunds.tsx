import './RedeemFunds.css'
import { Box, styled } from '@mui/system'



import React, { useEffect, useRef, useState } from 'react'
import { Breadcrumbs, Drawer as DrawerList, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
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
import Sidebar from '../CommonComponents/Sidebar'
import Navbar from '../CommonComponents/Navbar'
import { RedeemFundDatacardtwo } from './RedeemFundDatacardtwo'
import RedeemFundsCardtwo from './RedeemFundCardtwo'



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
    const [openFirstCard, setOpenFirstCard] = useState<boolean>(true)
    const [openSecondCard, setOpenSecondCard] = useState<boolean>(false)


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

    const showFirstCard = () => {
        setOpenFirstCard(true)
      


    }
    const showSecondCard = () => {
        setOpenFirstCard(false)
      

    }




    return (

        <>
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


                            <Grid container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}>



                                <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 0, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll" } }} item xs={13}>


                                    <Toolbar />















                                    <Box role="presentation" sx={{ margin: "27px 0px 21px 25px" }}>
                                        <Breadcrumbs aria-label="breadcrumb">



                                            <Link color="#6495ED" underline="always" href="/portfolio">
                                                <Typography className='burgerText'> Portfolio</Typography>
                                            </Link>



                                            <Link underline="always" >
                                                <Typography className='burgerText'>Reddem Fund</Typography>

                                            </Link>
                                        </Breadcrumbs>
                                    </Box>
                                    {openFirstCard ?
                                        <Box>
                                            {
                                                RedeemFundDatacardtwo.map((item:any, index) => {
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
                                        </Box> : <Box>
                                            {
                                                RedeemFundDatacardtwo.map((item, index) => {
                                                    return (
                                                        <RedeemFundsCardtwo
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
                                        </Box> 
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
                                    <button onClick={showFirstCard} >First Card</button>
                                    <button onClick={showSecondCard} >Second Card</button>
                                </Box>





                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

        </>
    )

}
export default RedeemFunds
