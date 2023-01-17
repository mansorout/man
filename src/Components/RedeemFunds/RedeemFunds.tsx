import './RedeemFunds.css'
import { Box, styled } from '@mui/system'



import React, { useEffect, useRef, useState } from 'react'
import { Breadcrumbs, Card, CardContent, Checkbox, Drawer as DrawerList, FormControlLabel, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { Assessment, Home as HomeIcon, MenuRounded, PowerSettingsNew, RadioButtonChecked, RadioButtonUncheckedOutlined, Search, TextFields } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions, PopperUnstyled } from '@mui/base';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { rupconvie, rupreturnlogo } from '../../Assets/index'

import { useNavigate } from 'react-router-dom'
import Link from '@mui/material/Link';
import { useSelector } from 'react-redux'

import RedeemFundsCard from './RedeemFundsCard'
import TextField from '@mui/material/TextField';



import { RedeemFundData } from './RedeemFundData'
import Sidebar from '../CommonComponents/Sidebar'
import Navbar from '../CommonComponents/Navbar'
import FullAmountCard from './FullAmountCard'
import SimpleModal from '../CommonModals/SimpleModal'
import RedeemNowButton from '../../Modules/Buttons/RedeemNowButton'
import FooterWithBtn from '../CommonComponents/FooterWithBtn'



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

    const [amount, setAmount] = useState<boolean>(true)

    const [bankModal, setBankModal] = useState<boolean>(false)




    const showPlan = () => {
        setBankModal(true)
    }




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

    const handleOptChange = (index: number) => {
        index === 0 ?
            setOptSelected([true, false, false, false])
            : index === 1 ? setOptSelected([false, true, false, false])
                : index === 2 ? setOptSelected([false, false, true, false])
                    : setOptSelected([false, false, false, true])
    }
    const [optSelected, setOptSelected] = useState<boolean[]>([true, false, false, false])


    const [selected, setSelected] = useState<number>(1)
    const [partial, setPartial] = useState<boolean>(true)
    const [full, setFull] = useState<boolean>(false)

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






                            <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 0, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll" } }} item xs={13}>


                                <Toolbar />















                                <Box role="presentation" sx={{ margin: "27px 0px 21px 25px" }}>
                                    <Breadcrumbs aria-label="breadcrumb">



                                        <Link color="#6495ED" underline="always" onClick={()=>navigate('/portfolio')}>
                                            <Typography className='burgerText'> Portfolio</Typography>
                                        </Link>



                                        <Link color="#919eb1" underline="none" >
                                            <Typography className='burgerText'>Redeem Fund</Typography>

                                        </Link>
                                    </Breadcrumbs>
                                </Box>
                                {
                                    partial ? <Box>
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
                                    </Box> :
                                        <Box>
                                            {
                                                RedeemFundData.map((item, index) => {
                                                    return (
                                                        <FullAmountCard
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

                                <Box sx={{ width: '100%' }}>
                                    <Grid sx={{ padding: "0px 9px !important" }} container rowSpacing={{ xs: 1, sm: 2, md: 3 }} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                        <Grid item md={6} xs={12}>
                                            {
                                                partial ? <Card>
                                                    <CardContent>

                                                        <Box>
                                                            <Grid container spacing={0}>
                                                                <Grid item xs={5} sm={9}>
                                                                    <Typography
                                                                        sx={{

                                                                            fontSize: "16px",
                                                                            fontWeight: "500",
                                                                            marginTop: "10px",
                                                                            height: " 19px",
                                                                            // margin: " 5% 62px 27px 5%",
                                                                            fontFamily: "Roboto",
                                                                            textAlign: " left",
                                                                            color: " #3c3e42"
                                                                        }}
                                                                    >Redemption Type</Typography>
                                                                </Grid>
                                                                <Grid item xs={7} sm={3} sx={{
                                                                    textAlign: " center",

                                                                    justifyContent: "flex-start",
                                                                    alignItems: "flex-start",
                                                                    flexWrap: "wrap"
                                                                }} className="twinButton">
                                                                    <Box style={{ marginBottom: "20px", display: "flex", gap: "15px", alignItems: "center" }}>
                                                                        <Box onClick={() => { setSelected(2); }} style={{ cursor: "pointer", border: `1px solid ${selected == 2 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selected == 2 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: " 10px 16px 9px" }}>
                                                                            <Typography style={{ fontWeight: "500", color: `${selected == 2 ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>Partial </Typography>
                                                                        </Box>
                                                                        <Box onClick={() => { setSelected(3); setPartial(false) }} style={{ cursor: "pointer", border: `1px solid ${selected == 3 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selected == 3 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "10px 16px 9px" }}>
                                                                            <Typography style={{ fontWeight: "500", color: `${selected == 3 ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>Full </Typography>
                                                                        </Box>

                                                                    </Box>
                                                                </Grid>

                                                                <Grid item xs={6}>
                                                                    <Typography sx={{
                                                                        height: " 16px", fontSize: " 14px", textAlign: " left", color: "#3c3e42"
                                                                    }}>Redemption By</Typography>
                                                                </Grid>

                                                                <Grid item xs={12} sx={{ display: "flex", marginTop: "8px" }}>


                                                                    <Box sx={{
                                                                        justifyContent: "center", alignItems: "center",

                                                                    }}>


                                                                        <FormControlLabel
                                                                            control={<Checkbox onChange={() => handleOptChange(0)} checked={optSelected[0]} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                                            label={<Box><span style={{ fontSize: "14px", color: `${optSelected[0] ? '#3c3e42' : "#7b7b9d"}` }}>Amount:</span> <span style={{ fontSize: "14px", fontWeight: "bold", color: `${optSelected[1] ? '#7b7b9d' : "#3c3e42"}` }}>₹1,46,625</span>  </Box>} />



                                                                        <FormControlLabel
                                                                            control={<Checkbox onChange={() => handleOptChange(1)} checked={optSelected[1]} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                                                            label={<Box><span style={{ fontSize: "14px", color: `${optSelected[1] ? '#3c3e42' : "#7b7b9d"}` }}>Units:</span> <span style={{ fontSize: "14px", fontWeight: "bold", color: `${optSelected[1] ? '#3c3e42' : "#7b7b9d"}` }}>750.762</span>  </Box>} />




                                                                    </Box>

                                                                </Grid>

                                                                <Grid item xs={12}>
                                                                    <Box>
                                                                        <TextField label="No. of Units"
                                                                            name="Amount"
                                                                            onKeyPress={(e) =>
                                                                                /[^(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$]$/.test(e.key) &&
                                                                                e.preventDefault()
                                                                            }

                                                                            sx={{
                                                                                width: " 100%",


                                                                                borderRadius: "4px",
                                                                                boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)",

                                                                                backgroundColor: "#fff",

                                                                                marginTop: "5%"
                                                                            }}
                                                                            inputProps={{
                                                                                maxLength: 11,
                                                                            }}

                                                                        >

                                                                        </TextField>
                                                                    </Box>
                                                                </Grid>

                                                                <Grid item xs={12} sx={{ paddingTop: "5px" }}>

                                                                    {
                                                                        amount === true ? <Box >
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
                                                                        </Box> : <Box >
                                                                            <Typography
                                                                                sx={{
                                                                                    width: "304px",
                                                                                    height: "30px",
                                                                                    // margin: "8px 135px 0 8%",
                                                                                    fontSize: " 12px",
                                                                                    textAlign: "left",
                                                                                    color: "#8787a2"



                                                                                }}
                                                                            >Minimum redemption Unit 750.762 </Typography>



                                                                            <Typography
                                                                                sx={{
                                                                                    width: "304px",
                                                                                    height: "30px",
                                                                                    marginTop: "-8px",
                                                                                    fontSize: " 12px",
                                                                                    textAlign: "left",
                                                                                    color: "#8787a2"
                                                                                }}
                                                                            >Maximum  redemption Units 750.762</Typography>
                                                                        </Box>
                                                                    }

                                                                </Grid>

                                                            </Grid>
                                                        </Box>
                                                    </CardContent>
                                                </Card> : <Card >
                                                    <CardContent>
                                                        <Grid container spacing={0}>
                                                            <Grid item xs={5} sm={9}>
                                                                <Typography
                                                                    sx={{

                                                                        fontSize: "16px",
                                                                        fontWeight: "500",
                                                                        marginTop: "10px",
                                                                        height: " 19px",
                                                                        // margin: " 5% 62px 27px 5%",
                                                                        fontFamily: "Roboto",
                                                                        textAlign: " left",
                                                                        color: " #3c3e42"
                                                                    }}
                                                                >Redemption type</Typography>
                                                            </Grid>
                                                            <Grid item xs={7} sm={3} className="twinButton">
                                                                <Box style={{ marginBottom: "20px", display: "flex", gap: "15px", alignItems: "center" }}>
                                                                    <Box onClick={() => { setSelected(2); setPartial(true) }} style={{ cursor: "pointer", border: `1px solid ${selected == 2 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selected == 2 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: " 10px 16px 9px" }}>
                                                                        <Typography style={{ fontWeight: "500", color: `${selected == 2 ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>Partial </Typography>
                                                                    </Box>
                                                                    <Box onClick={() => { setSelected(3) }} style={{ cursor: "pointer", border: `1px solid ${selected == 3 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selected == 3 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "10px 16px 9px" }}>
                                                                        <Typography style={{ fontWeight: "500", color: `${selected == 3 ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>Full </Typography>
                                                                    </Box>

                                                                </Box>
                                                            </Grid>

                                                            <Grid container spacing={3}>
                                                                <Grid item xs={6}>
                                                                    <Typography sx={{ color: "#7b7b9d", fontSize: "14px", fontWeight: "normal", }}>Invested Value</Typography>
                                                                </Grid>
                                                                <Grid item xs={6}>
                                                                    <Typography sx={{ color: "#7b7b9d", fontSize: "14px", fontWeight: "normal" }}>Current Value</Typography>
                                                                </Grid>
                                                                <Grid item xs={6} >
                                                                    <Typography className='amountValue' sx={{ color: "#3c3e42", fontSizeL: "18px" }}>₹1,25,000</Typography>
                                                                </Grid>
                                                                <Grid item xs={6} >
                                                                    <Typography className='amountValue' sx={{}}>₹1,46,625</Typography>

                                                                </Grid>

                                                            </Grid>
                                                        </Grid>



                                                        <Box>



                                                        </Box>







                                                    </CardContent>

                                                </Card>
                                            }
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            <Card sx={{ borderRadius: "8px", marginBottom: "5px" }}>

                                                <CardContent>
                                                    <Box sx={{ padding: "14px 0px 16px 0px" }}>
                                                        <Typography sx={{

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
                                                    </Box>


                                                    <Grid container columnSpacing={0} sx={{ paddingBottom: "16px" }}>
                                                        <Grid xs={2} sx={{ display: "contents" }}>
                                                            <Box>
                                                                <img src={rupconvie} alt="image" style={style.RupConviestyle} />
                                                            </Box>
                                                        </Grid>
                                                        <Grid xs={10} sx={{ paddingLeft: "13px" }}>
                                                            <Box>
                                                                <Typography sx={{
                                                                    fontSize: "16px",
                                                                    fontWeight: 500


                                                                }}>Exit Load</Typography>
                                                                <Typography sx={{
                                                                    width: "100%",
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
                                                            </Box>
                                                        </Grid>

                                                    </Grid>



                                                    <Grid container spacing={0} className="taximp">
                                                        <Grid xs={2} sx={{ display: "contents" }}>
                                                            <Box>
                                                                <img src={rupreturnlogo} alt="image" style={style.RupConviestyle} />
                                                            </Box>
                                                        </Grid>
                                                        <Grid xs={10} sx={{ paddingLeft: "13px" }}>
                                                            <Box >
                                                                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>Tax Implications</Typography>
                                                                <Typography
                                                                    sx={{
                                                                        width: "100%",
                                                                        height: " 50px",

                                                                        fontFamily: " Roboto",
                                                                        fontSize: "14px",
                                                                        textAlign: " left",
                                                                        color: "#7b7b9d"
                                                                    }}
                                                                >Investors earn dividends and capital gains from liquid funds.
                                                                    Investors do not pay any tax on dividend income from mutual funds.</Typography>
                                                            </Box>

                                                        </Grid>

                                                    </Grid>

                                                    <Grid container rowSpacing={2} sx={{
                                                        paddingLeft: "25px",
                                                        maxWidth: "fit-content",
                                                        margin: "1rem", display: "flex", flexDirection: "column"
                                                    }}>
                                                        <Grid item xs={12} sx={{

                                                            padding: "15px 0px 0px 0px"
                                                        }}>
                                                            <Box sx={{ textAlign: " center", paddingTop: "15px" }}>
                                                                <Typography sx={{
                                                                    texAlign: " center",
                                                                    fontSize: " 12px",
                                                                    fontWeight: "normal",
                                                                    fontStyle: " normal",
                                                                    lineHeight: "1.42",
                                                                    letterSpacing: "normal",

                                                                    color: "#7b7b9d"


                                                                }}>  Final units or amount will depend on NAV
                                                                    applicable at the time of actual redemption request.</Typography>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Box sx={{ textAlign: " center" }}>
                                                                <Typography sx={{



                                                                    fontSize: " 12px",
                                                                    fontWeight: "normal",
                                                                    fontStyle: " normal",
                                                                    lineHeight: "1.42",
                                                                    letterSpacing: "normal",

                                                                    color: "#7b7b9d",
                                                                }}>
                                                                    By continuing, you’re agreeing to SprintMoneyTM

                                                                </Typography>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Box sx={{ textAlign: " center" }}>
                                                                <Typography sx={{

                                                                    textDecoration: 'underline',
                                                                    cursor: "pointer",
                                                                    fontSize: " 12px",
                                                                    fontWeight: "normal",
                                                                    fontStyle: " normal",
                                                                    lineHeight: "1.42",
                                                                    letterSpacing: "normal",

                                                                    color: "#6c63ff",
                                                                }}>     Terms and conditions</Typography>
                                                            </Box>
                                                        </Grid>

                                                    </Grid>


                                                </CardContent>
                                            </Card>
                                        </Grid>

                                    </Grid>
                                </Box>



                            </Grid>

                            <FooterWithBtn
                                btnText='Redeem Now'
                                btnClick={showPlan}
                            />



                            <SimpleModal open={bankModal} close={() => setBankModal(false)} />
                        </Grid>

                    </Grid>
                </Box>
            </Box >

        </>
    )

}
export default RedeemFunds
