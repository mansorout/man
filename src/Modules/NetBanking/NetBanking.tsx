
import './NetBanking.css'
import Avatar from '@mui/material/Avatar';

import { Box, styled } from '@mui/system'
import { Breadcrumbs, Checkbox, Container, FormControlLabel, Grid, InputAdornment, Modal, Paper, TextField, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, ErrorOutline, Home as HomeIcon, InfoRounded, MenuRounded, PowerSettingsNew, RadioButtonChecked, RadioButtonUncheckedOutlined, Search } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support, SupportOutlined } from '@mui/icons-material';
import { AppBar, Button, Divider, Menu, MenuItem, Theme, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Active_Upi, hdfclogo, Logo, Profile, Radiobutton, SIP, upilogo } from '../../Assets/index'
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
import Sidebar from '../../Components/CommonComponents/Sidebar';
import Navbar from '../../Components/CommonComponents/Navbar';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ClearIcon from '@mui/icons-material/Clear';

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

function NetBanking() {


    const [timePeriodSelected, setTimePeriodSelected] = useState<boolean[]>([true, false, false, false])
    const [focus, setFocus] = useState<boolean>(false)
    console.log(focus);
    const [upiId, setUpiId] = useState<string>("")
    const [opneBankAccmodal, setOpenBankAccmodal] = useState<boolean>(false)

    // const handleupiid =(index:number)=>{
    //        index === 2 ?  setTimePeriodSelected([ false, false, true]) :""
    // }
    const handleTimePeriodChange = (index: number) => {
        index === 0 ?
            setTimePeriodSelected([true, false, false, false])
            : index === 1 ? setTimePeriodSelected([false, true, false, false])
                : index === 2 ? setTimePeriodSelected([false, false, true, false])
                    : setTimePeriodSelected([false, false, false, true])
    }

    const handleMobile = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

        setUpiId(e.target.value)

    }
    console.log(upiId)

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
                        <Grid sx={{ height: "100vh", padding: 4, boxSizing: "border-box", overflow: "scroll" }} item xs={13}
                            sm={11}
                            md={10}>
                            <Toolbar />
                            <Box role="presentation">
                                <Breadcrumbs aria-label="breadcrumb">



                                    <Link color="#6495ED" underline="always" href='Home' sx={{ fontSize: "12px", width: "100%" }} >
                                        <Typography className='burgerText'> Home</Typography>
                                    </Link>



                                    <Link underline="always" sx={{ fontSize: "12px", width: "100%" }} >
                                        <Typography className='burgerText' >Investment</Typography>

                                    </Link>

                                    <Link underline="always" sx={{ fontSize: "12px", width: "100%" }} href="/investnowscreen">
                                        <Typography className='burgerText'>One-time lumpsum</Typography>

                                    </Link>
                                    <Link underline="always" sx={{ fontSize: "12px", width: "100%" }} href="/mflist">
                                        <Typography className='burgerText'>Mutual Fund Recommendation</Typography>

                                    </Link>
                                    <Link underline="none" color="#878782" sx={{ fontSize: "12px", width: "100%" }}>
                                        <Typography className='burgerText'>Select a payment option</Typography>

                                    </Link>
                                </Breadcrumbs>
                            </Box>
                            <Card sx={{ maxWidth: 456, }}  >
                                <Typography style={{ marginLeft: "5%", fontSize: "16px", marginTop: "5%", fontWeight: "500", height: "19px" }} >Select a payment option</Typography>

                                <Box style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>



                                    <CardHeader
                                        avatar={

                                            <FormControlLabel sx={{}}
                                                control={<Checkbox onChange={() => handleTimePeriodChange(1)} checked={timePeriodSelected[1]} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label="" />

                                        }
                                        action={
                                            <Box onClick={() => navigate('/vp')}>
                                                <img src={hdfclogo} alt="sprint-money" style={{
                                                    width: "29.1px",
                                                    height: "29.4px",



                                                }} />
                                            </Box>

                                        }
                                        title="NEFT/RTGS"
                                        subheader="4825 ********** 25"
                                        sx={{ fontSize: "14px", fontWeight: "500", color: "#3c3e42" }} />
                                    <Box style={style.divider}></Box>


                                    {/* <Box style={{ paddingLeft: "16px" }}> */}
                                    <CardHeader
                                        avatar={

                                            <FormControlLabel sx={{}}
                                                control={<Checkbox onChange={() => handleTimePeriodChange(2)} checked={timePeriodSelected[2]} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label="" />

                                        }
                                        action={
                                            <Box onClick={() => setOpenBankAccmodal(true)}>
                                                <img src={hdfclogo} alt="sprint-money" style={{
                                                    width: "29.1px",
                                                    height: "29.4px",



                                                }} />
                                            </Box>

                                        }
                                        title="NEFT/RTGS"
                                        subheader="4825 ********** 25"
                                        sx={{ fontSize: "14px", fontWeight: "500", color: "#3c3e42" }} />
                                    <Box style={style.divider}></Box>






                                    <Box style={style.divider}></Box>

                                    <CardHeader


                                        avatar={
                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(3)} checked={timePeriodSelected[3]} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label="" />

                                        }
                                        action={
                                            <IconButton aria-label="UPILOGO" sx={{
                                                width: "44.1px",
                                                height: " 35px",




                                            }}>
                                                <img src={Active_Upi} alt="S__M" style={{
                                                    width: "44px",
                                                    height: "35px",
                                                    marginLeft: ""


                                                }} />
                                            </IconButton>
                                        }
                                        title="UPI "
                                        subheader="Saved UPI Options"
                                        sx={{ color: "#7b7b9d", fontSize: "14px", fontWeight: "500" }}




                                    />

                                    <Box sx={{ maxWidth: 256 }}  >
                                        <CardHeader
                                            avatar={

                                                <FormControlLabel sx={{}}
                                                    control={<Checkbox onChange={() => handleTimePeriodChange(2)} checked={timePeriodSelected[2]} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                    label="" />

                                            }
                                            action={
                                                <Box onClick={() => navigate('/vp')}>
                                                    < DeleteForeverIcon sx={{ color: "#ff5300" }} />




                                                </Box>

                                            }
                                            title="7979282819@upi"
                                            subheader=""
                                            sx={{ fontSize: "14px", fontWeight: "500", color: "#3c3e42" }} />
                                        <Box>
                                            <CardHeader

                                                avatar={

                                                    <FormControlLabel sx={{}}
                                                        control={<Checkbox onChange={() => handleTimePeriodChange(2)} checked={timePeriodSelected[2]} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                        label="" />

                                                }
                                                action={
                                                    <Box onClick={() => navigate('/vp')}>
                                                        < DeleteForeverIcon sx={{ color: "#ff5300" }} />
                                                        {/* width: "29.1px",
                                                height: "29.4px", */}



                                                    </Box>

                                                }
                                                title="9998998999@upi"
                                                subheader=""
                                                sx={{ fontSize: "14px", fontWeight: "500", color: "#3c3e42" }} />
                                        </Box>

                                    </Box>

                                    <Box sx={{ marginLeft: "20px" }}>

                                        <Typography sx={{ color: "#7b7b9d", fontSize: "12px", marginLeft: "4px" }}>
                                            Enter UPI ID
                                        </Typography>

                                        <TextField

                                            sx={{ paddingRight: "52px" }}



                                            autoComplete="off"
                                            // style={style.contactInput}
                                            margin="normal"
                                            label="Enter UPI ID"
                                            InputProps={{
                                                startAdornment: focus ? <InputAdornment position="start"></InputAdornment> : "",


                                            }}
                                            onKeyPress={e => /^[a-zA-Z0-9.-]{2, 256}@[a-zA-Z][a-zA-Z]{2, 64}$/.test(e.key) && e.preventDefault()}
                                            placeholder=" 9825098250@upi "
                                            onChange={handleMobile}
                                        // onFocus={() => setFocus(true)}
                                        />

                                    </Box>

                                </Box>



                                {/* <Box style={{ width: "248px" }}>



                                </Box> */}



                            </Card>
                            <MakepaymentNetbankingbutton />


                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Modal open={opneBankAccmodal} onClose={() => setOpenBankAccmodal(false)}>
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
                    <Grid container xs={12} style={{ backgroundColor: "white", width: "100%" }}>
                        <Grid item xs={8}>


                            <CardHeader
                                avatar={
                                    <Box onClick={() => navigate('/vp')}>
                                        <img src={hdfclogo} alt="sprint-money" style={{
                                            width: "29.1px",
                                            height: "29.4px",



                                        }} />
                                    </Box>

                                }
                                action={
                                    <Box >
                                        {/* <img src={hdfclogo} alt="sprint-money" style={{
                                            width: "29.1px",
                                            height: "29.4px",



                                        }} /> */}
                                    </Box>

                                }
                                title="NEFT/RTGS"
                                subheader="4825 ********** 25"
                                sx={{ fontSize: "14px", fontWeight: "500", color: "#3c3e42" }} />
                        </Grid>

                        {/* <Grid sx={{
                            display: "contents",
                            position:" absolute"
                        }} item xs={8}>
                            <ClearIcon />
                        </Grid> */}



                    </Grid>

                    <Box style={{ backgroundColor: "#6c63ff", width: "100%" }}>
                        <Typography style={{ fontSize: "14px", color: 'white', padding: "10px 20px" }}>Transfer ₹40,000 to below account</Typography>
                    </Box>
                    <Grid container xs={12} style={{ backgroundColor: "white", width: "100%" }}>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#7d7d9e', padding: "10px 20px" }}>Bank Name</Typography></Grid>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#3c3e42', padding: "10px 20px" }}>ICICI Bank</Typography></Grid>
                    </Grid>
                    <Grid container xs={12} style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", width: "100%" }}>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#7d7d9e', padding: "10px 20px" }}>Account Name</Typography></Grid>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#3c3e42', padding: "10px 20px" }}>ICICI Ltd.</Typography></Grid>
                    </Grid>
                    <Grid container xs={12} style={{ backgroundColor: "white", width: "100%" }}>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#7d7d9e', padding: "10px 20px" }}>Account Type</Typography></Grid>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#3c3e42', padding: "10px 20px" }}>Current Account</Typography></Grid>
                    </Grid>
                    <Grid container xs={12} style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", width: "100%" }}>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#7d7d9e', padding: "10px 20px" }}>Account Number</Typography></Grid>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#3c3e42', padding: "10px 20px" }}>000405103922</Typography></Grid>
                    </Grid>
                    <Grid container xs={12} style={{ backgroundColor: "white", width: "100%" }}>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#7d7d9e', padding: "10px 20px" }}>IFSC Code</Typography></Grid>
                        <Grid item xs={6}><Typography style={{ fontSize: "14px", fontWeight: "500", color: '#3c3e42', padding: "10px 20px" }}>ICICI0000104</Typography></Grid>
                    </Grid>
                    <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", padding: "10px 20px" }}>
                        <InfoRounded style={{ color: "#6c63ff", width: "20px" }}></InfoRounded>
                        <Typography style={{ fontSize: "10px", color: '#919eb1' }}>The transaction will be processed once BSE Star MF gets money from your bank. Your transaction will be cancelled if the money isn’t received within 5 working days.</Typography>
                    </Box>

                </Box>
            </Modal>

        </Box>
    )
}

export default NetBanking
