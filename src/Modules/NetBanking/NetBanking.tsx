
import './NetBanking.css'
import Avatar from '@mui/material/Avatar';

import { Box, styled } from '@mui/system'
import { Breadcrumbs, Checkbox, Container, FormControlLabel, Grid, InputAdornment, Modal,Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Toolbar } from '@mui/material'
import { Assessment, ErrorOutline, Home as HomeIcon, InfoRounded,RadioButtonChecked, RadioButtonUncheckedOutlined, Search } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled } from '@mui/base';
import { AppBar, Button, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Active_Upi, hdfclogo, Logo, Profile, Radiobutton, SIP, upilogo } from '../../Assets/index'

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
import UpiMainCom from './Upi/UpiMainCom';
import NetBankingButton from '../Buttons/NetBankingButton';

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
                        <Grid sx={{ height: "100vh", boxSizing: "border-box", overflow: "scroll", paddingLeft: "4%", paddingTop: "7px" }} item xs={13}
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
                            <Card sx={{ maxWidth: 456, marginTop: "10px" }}  >
                                <Typography style={{ marginLeft: "5%", fontSize: "16px", marginTop: "5%", fontWeight: "500", height: "19px" }} >Select a payment option</Typography>

                                <Box style={{ display: "flex", flexDirection: "column", marginBottom: "10px" }}>



                                    <CardHeader
                                        avatar={
                                            <FormControlLabel sx={{}}
                                                control={<Checkbox onChange={() => handleTimePeriodChange(1)} checked={timePeriodSelected[1]} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label="NEFT/RTGS" />
                                        }
                                        action={
                                            <Box onClick={() => navigate('/vp')}>
                                                <img src={hdfclogo} alt="sprint-money" style={{
                                                    width: "29.1px",
                                                    height: "29.4px",
                                                    marginTop: "15px"
                                                }} />
                                            </Box>}
                                        sx={{ fontSize: "14px", fontWeight: "500", color: "#3c3e42" }} />
                                    <p style={{ marginLeft: "10%", marginTop: "-5.5%" }}>4825 ********** 25</p>
                                    <Box style={style.divider}></Box>


                                    {/* <Box style={{ paddingLeft: "16px" }}> */}
                                    <CardHeader
                                        avatar={
                                            <FormControlLabel sx={{}}
                                                control={<Checkbox onChange={() => handleTimePeriodChange(2)} checked={timePeriodSelected[2]} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label="NEFT/RTGS" />
                                        }
                                        action={
                                            <Box >
                                                <img src={hdfclogo} alt="sprint-money" style={{
                                                    width: "29.1px",
                                                    height: "29.4px",
                                                    marginTop: "15px"
                                                }} />
                                            </Box>
                                        }
                                        sx={{ fontSize: "14px", fontWeight: "500", color: "#3c3e42" }}
                                    />
                                    <p style={{ marginLeft: "10%", marginTop: "-5.5%" }}>4825 ********** 25</p>
                                    <Box style={style.divider}></Box>






                                    <Box style={style.divider}></Box>

                                    <CardHeader
                                        avatar={
                                            <FormControlLabel
                                                control={<Checkbox onChange={() => handleTimePeriodChange(3)} checked={timePeriodSelected[3]} icon={<RadioButtonUncheckedOutlined style={{ color: "#23db7b" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                label="UPI" />
                                        }
                                        action={
                                            <IconButton aria-label="UPILOGO" sx={{
                                                width: "44.1px",
                                                height: " 35px",

                                            }}>
                                                <img src={Active_Upi} alt="S__M" style={{
                                                    width: "44px",
                                                    height: "35px",
                                                    marginTop: "15px"
                                                }} />
                                            </IconButton>
                                        }

                                        sx={{ color: "#7b7b9d", fontSize: "14px", fontWeight: "500" }}




                                    />

                                    <p style={{ marginLeft: "10%", marginTop: "-5.5%" }}>Saved UPI Options</p>

                                    <Box sx={{ marginLeft: "20px" }}>




                                        <UpiMainCom />


                                    </Box>

                                </Box>



                                {/* <Box style={{ width: "248px" }}>



                                </Box> */}



                            </Card>
                            <Box onClick={() => setOpenBankAccmodal(true)}>
                                <NetBankingButton />
                            </Box>


                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Modal open={opneBankAccmodal} >
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
                    <Grid container xs={12} style={{ backgroundColor: "white", width: "100%", display: "flex" }}>
                        <Grid item xs={8}>


                            <CardHeader
                                avatar={
                                    <Box onClick={() => navigate('/processingpayments')}>
                                        <img src={hdfclogo} alt="sprint-money" style={{
                                            width: "29.1px",
                                            height: "29.4px",



                                        }} />
                                    </Box>

                                }
                                action={""}
                                title="NEFT/RTGS"
                                subheader="4825 ********** 25"
                                sx={{ fontSize: "14px", fontWeight: "500", color: "#3c3e42" }} />
                        </Grid>

                        <Grid sx={{
                            display: "contents",
                            position: " absolute"
                        }} item xs={4}>
                            <Box sx={{ margin: "12px 0px 8px 73px" }} onClick={() => setOpenBankAccmodal(false)}>
                                <ClearIcon />
                            </Box>
                        </Grid>



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

                    <Grid container spacing={0}>
                        {/* <Grid item xs={6}>

                            <Typography>
                                Pay ₹5,000
                            </Typography>

                        </Grid> */}

                        <Grid xs={12} sx={{textAlign: "center"}}>

                            <Button fullWidth onClick={()=>navigate('/processingpayments')} sx={{
                                backgroundColor: " #23db7b",
                               
                               
                                padding: "10px 32px 9px",
                                borderRadius: " 4px"
                            }}>
                                <Typography sx={{color:"white"}}>
                                    Proceed
                                </Typography>
                            </Button>

                        </Grid>

                    </Grid>

                </Box>




            </Modal>




        </Box>
    )
}

export default NetBanking
