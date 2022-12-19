import React, { useEffect, useRef, useState } from 'react'
import { Box, styled } from '@mui/system'
import { Breadcrumbs, Grid, Link, Modal, Theme, Typography } from '@mui/material'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import Slider from "react-slick";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import { InsuranceTermConditionAction } from '../../Store/Duck/InsuranceTermCondition'
import BannerSlider from '../CommonComponents/BannerSlider'
import FundAmtCard from './FundAmtCart';
import { ExploreFundsList } from '../../Modal/ExploreFunds';
import FooterWithBtn from '../CommonComponents/FooterWithBtn';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { tick } from '../../Assets';
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const style = {
    main: {
        boxSizing: "border-box",
        backgroundColor: "#f9f9f9",
        // height: "100vh"
    } as React.CSSProperties,
    button: {
        height: "48px",
        boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
        backgroundColor: "#23db7b",
        transform: "translate(8px, -23px)",
        color: '#fff',
        width: 350,
        marginTop: 21,
        marginLeft: -8
    },
    modalText: {
        backgroundColor: '#FFF',
        width: 338,
        textAlign: 'center',
        marginLeft: '1px',
        padding: '5px',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        fontWeight: '500',
        borderColor: '#fff'
    }
}

const useStyles: any = makeStyles((theme: Theme) => ({
}));

const SelectedFunds = () => {
    const dispatch: any = useDispatch();
    const refContainer = useRef();
    const classes = useStyles()
    const [insuranceTermCondition, setInsuranceTermCondition] = useState<boolean>(false)
    const { insuranceTermConditionState } = useSelector((state: any) => state.InsuranceTermConditionReducer);


    useEffect(() => {
        dispatch(InsuranceTermConditionAction(false))
    }, [])

    useEffect(() => {
        setInsuranceTermCondition(insuranceTermConditionState)
    }, [insuranceTermConditionState])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const sliderDetails = [
        {
            topHeading: 'Protect your family',
            topSubHeading: 'from a life of compromises',
            heading: 'Get ₹1 Crore',
            subHeading: 'Term Insurance Cover @ 12*/day',
            bgColor: 'var(--ui1Color)',
            imgUrl: '/assets/images/insurance-banner-img.png',
            btnText: 'Get Free Quote',
        },
        {
            topHeading: 'Protect your family',
            topSubHeading: 'from a life of compromises',
            heading: 'Get ₹1 Crore',
            subHeading: 'Term Insurance Cover @ 12*/day',
            bgColor: 'var(--ui1Color)',
            imgUrl: '/assets/images/insurance-banner-img.png',
            btnText: 'Get Free Quote',
        },
        {
            topHeading: 'Protect your family',
            topSubHeading: 'from a life of compromises',
            heading: 'Get ₹1 Crore',
            subHeading: 'Term Insurance Cover @ 12*/day',
            bgColor: 'var(--ui1Color)',
            imgUrl: '/assets/images/insurance-banner-img.png',
            btnText: 'Get Free Quote',
        },
        {
            topHeading: 'Protect your family',
            topSubHeading: 'from a life of compromises',
            heading: 'Get ₹1 Crore',
            subHeading: 'Term Insurance Cover @ 12*/day',
            bgColor: 'var(--ui1Color)',
            imgUrl: '/assets/images/insurance-banner-img.png',
            btnText: 'Get Free Quote',
        },
    ]

    const [selected, setSelected] = useState<number>(1)
    const [fundList, setFundList] = useState<any[]>([])
    const [open, setOpen] = React.useState<boolean>(false);
    const [openConfirmation, setOpenConfirmation] = useState<boolean>(false);
    const [onetimeLumpsum, setOnetimeLumpsum] = useState<boolean>(true);

    const navigate = useNavigate()
    const handleClick = () => {
        setOpen(!open)
    }
    const handleClick2 = () => {
        navigate('/payusingnetbanking')
    }
    const handleDateChange = () => {
        console.log("Date is: ");
    };

    return (
        <Box style={{ width: "100vw" }} ref={refContainer}>
            <Navbar />
            <Box sx={style.main}>
                <Toolbar />
                <Sidebar />
                <Grid container>
                    <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '85px !important', md: '245px !important' } }} item xs={12}>
                        <Box role="presentation" sx={{ margin: "27px 0px 21px 25px" }} >
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link color="#6495ED" underline="always" href="/explorefunds">
                                    <Typography className='burgerText'>Explore Funds</Typography>
                                </Link>
                                <Link underline='none' color="#8787a2" aria-current="page">
                                    <Typography className='burgerText'>Selected Funds</Typography>
                                </Link>
                            </Breadcrumbs>
                        </Box>
                        <Box sx={{ margin: "27px 0px 21px 25px" }}>
                            <Typography style={{ fontSize: "18px", color: "#3c3e42", fontWeight: "500" }}>3 Funds Selected</Typography>
                        </Box>

                        <Grid container >
                            <Grid item >
                                <Box>
                                    <FundAmtCard heading={'Axis Small Cap Fund Regular Fund'} />
                                    <FundAmtCard heading={'PGIM India Midcap Opportunities Fund Growth'} />
                                    <FundAmtCard heading={'Quant Mid Cap Fund Growth'} />
                                </Box>
                                <Grid item xs={8}>
                                    <Button
                                        onClick={() =>
                                            alert("hiii")
                                        }
                                        sx={{
                                            backgroundColor: "#00b4ff",

                                            height: "45px",
                                            borderRadius: "32px",
                                            padding: "22px"
                                        }}
                                    >
                                        <Typography sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: "500" }}>
                                            ADD MORE FUNDS
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid item >
                                <Box sx={{ backgroundColor: '#fff', padding: 2, marginLeft: 2, borderRadius: 3, alignItems: 'start', width: '400px' }}>
                                    <Typography style={{ color: 'rgb(79, 70, 222)', marginBottom: 8, fontWeight: '500' }} >How would you like to invest ?</Typography>
                                    <Box style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                                        <Box onClick={() => { setSelected(1); setFundList(ExploreFundsList) }} style={{ cursor: "pointer", border: `1px solid ${selected == 1 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selected == 1 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "12px 14px" }}>
                                            <Typography style={{ fontWeight: "500", color: `${selected == 1 ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>One-Time Lump Sum</Typography>
                                        </Box>
                                        <Box onClick={() => { setOnetimeLumpsum(false); setSelected(2); setFundList(ExploreFundsList.filter((item) => item.type == 'Equity')) }} style={{ cursor: "pointer", border: `1px solid ${selected == 2 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selected == 2 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "12px 14px" }}>
                                            <Typography style={{ fontWeight: "500", color: `${selected == 2 ? "#09b85d" : "#7b7b9d"}`, fontSize: "14px" }}>Monthly SIP </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>


                        {
                            onetimeLumpsum ? <FooterWithBtn
                                btnText={selected == 1 ? `Buy Now` : `Select SIP Date`}
                                btnClick={handleClick2}
                            /> : <FooterWithBtn
                                btnText={selected == 1 ? `Buy Now` : `Select SIP Date`}
                                btnClick={handleClick}
                            />
                        }




                    </Grid>
                </Grid>
            </Box>
            <Modal sx={{ borderRadius: 8 }} open={open} onClose={() => { setOpen(!open) }}>
                <Box  >
                    <Typography sx={style.modalText}>SIP Instalment Date</Typography>
                    <Calendar />
                    <Button onClick={() => { setOpen(!open); setOpenConfirmation(!openConfirmation) }} variant='contained' style={style.button} sx={{
                        backgroundColor: 'rgba(123, 123, 157, 0.05)',
                        color: '#7b7b9d'
                    }}>
                        Confirm SIP Date
                    </Button>
                </Box>
            </Modal>
            
            <Modal sx={{ borderRadius: 8 }} open={openConfirmation} onClose={() => { setOpenConfirmation(!openConfirmation) }}>
                <>
                    <Box alignItems='center' justifyContent='center' sx={{ marginLeft: { sm: '35%', xs: '8%', lg: '40%' }, marginTop: { xs: '50%', lg: '20%', md: '30%' } }}>
                        <Box sx={{ backgroundColor: '#fff', width: 300, alignItems: 'center', padding: 3, textAlign: 'center' }}>
                            <Box><img style={{ height: 120, width: 120 }} src={tick} /></Box>
                            <Typography sx={{ marginTop: 1, fontWeight: '600' }} >Date confirmed!</Typography>
                            <Typography sx={{ marginTop: 1, color: '#8787a2' }} >Your Monthly SIP Date is 8th of every month</Typography>
                        </Box>
                        <Button onClick={() => { navigate('/payusingnetbanking') }} variant='contained' style={style.button} sx={{
                            backgroundColor: 'rgba(123, 123, 157, 0.05)',
                            color: '#7b7b9d',
                            marginLeft: 8
                        }}>
                            Continue to Payment
                        </Button>
                    </Box>

                </>
            </Modal>
        </Box>
    )
}

export default SelectedFunds