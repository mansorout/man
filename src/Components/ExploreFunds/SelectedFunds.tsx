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
                <Grid container spacing={0} sx={{ height: "100vh" }}>
                    <Grid item xs={0} sm={1} md={2}>
                        <Toolbar />
                        <Sidebar />
                    </Grid>
                    <Grid container xs={13} sm={11} md={10}>
                        <Grid sx={{ padding: 2 }} item xs={12}>
                            <Toolbar />
                            <Grid container>
                                <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px" } }} item xs={12}>
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

                                    <Grid container sx={{ display: "flex" }} >

                                        <Grid item xs={12} md={6} >
                                            <Box>
                                                <FundAmtCard heading={'Axis Small Cap Fund Regular Fund'} />
                                                <FundAmtCard heading={'PGIM India Midcap Opportunities Fund Growth'} />
                                                <FundAmtCard heading={'Quant Mid Cap Fund Growth'} />
                                            </Box>

                                            <Button
                                                onClick={() =>
                                                    alert("hiii")
                                                }
                                                sx={{
                                                    backgroundColor: "#00b4ff",

                                                    height: "45px",
                                                    borderRadius: "32px",
                                                    padding: "22px",
                                                    ml: 1,
                                                    "&.MuiButtonBase-root:hover": {
                                                        bgcolor: "#00b4ff"
                                                    }
                                                }}
                                            >
                                                <Typography sx={{ color: "#FFFFFF", fontSize: "14px", fontWeight: "500" }}>
                                                    ADD MORE FUNDS
                                                </Typography>
                                            </Button>



                                        </Grid>

                                        <Grid item xs={12} md={6} sx={{ textAlign: "center" }}>

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





                        </Grid>

                    </Grid>

                </Grid>
            </Box>

            <Modal sx={{ borderRadius: 8 }} open={open} onClose={() => { setOpen(!open) }}>
                <Box alignItems='center' justifyContent='center' sx={{ marginLeft: { sm: '35%', xs: '8%', lg: '40%' }, marginTop: { xs: '50%', lg: '20%', md: '30%' } }}>
                    <Typography sx={style.modalText}>Monthly SIP Date</Typography>
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






// <Grid container xs={13} sm={11} md={10}>
// <Grid sx={{ padding: 2 }} item xs={12}>
//     <Toolbar />
//     <Box role="presentation" sx={{ margin: "27px 0px 21px 25px" }} >
//         <Breadcrumbs aria-label="breadcrumb">
//             <Link color="#6495ED" underline="always" href="/home">
//                 <Typography className='burgerText'>Home</Typography>
//             </Link>
//             <Link color="#6495ED" underline="always" href="/investNow">
//                 <Typography className='burgerText'>Investment</Typography>
//             </Link>
//             <Link color="#6495ED" underline="always" href="/sipInvestment">
//                 <Typography className='burgerText'>Monthly Investment</Typography>
//             </Link>
//             <Link color="#6495ED" underline="always" href="/mflist">
//                 <Typography className='burgerText'> Mutual Fund Recommendation</Typography>
//             </Link>
//             <Link color="#6495ED" underline="always" href="/customizemf">
//                 <Typography className='burgerText'>Customize Plan </Typography>
//             </Link>
//             <Link color="#6495ED" underline="always" href="/replaceFunds">
//                 <Typography className='burgerText'>Choose Fund to Replace </Typography>
//             </Link>
//             <Link underline='none' color="#8787a2" aria-current="page">
//                 <Typography className='burgerText'>   Axis Small Cap Fund Regular Growth</Typography>
//             </Link>
//         </Breadcrumbs>
//     </Box>
//     {
//         FundCardsData.map((item, index) => {
//             return (
//                 <FundDetailCard
//                     key={index}
//                     logo={item.logo}
//                     name={item.name}
//                     cap={item.cap}
//                     type={item.type}
//                     year1={item.year1}
//                     year3={item.year3}
//                     year5={item.year5}
//                     rating={item.rating}
//                     morning_star_logo={item.morning_star_logo}
//                 />
//             )
//         })
//     }




//     <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//         <Grid item xs={12}>

//         </Grid>
//         <Grid item xs={12}>
//             <FundPerformance />
//         </Grid>
//     </Grid>

//     <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ paddingTop: "15px", paddingBottom: "56px" }}>
//         <Grid item xs={12} sm={6} >
//             <MinInvest />
//         </Grid>
//         <Grid item xs={12} sm={6} >
//             <SchemeDoc />
//         </Grid>
//         <Grid item xs={12} sm={6} >
//             <RiskoMeter />
//         </Grid>
//         <Grid item xs={12} sm={6}>
//             <LatestAssets />
//         </Grid>
//     </Grid>
// </Grid>
// <FooterWithBtn
//     btnText='Add This Fund to Plan'
//     btnClick={handleClick}
// />
// </Grid>