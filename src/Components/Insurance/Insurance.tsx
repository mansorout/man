import React, { useEffect, useRef, useState } from 'react'
import { Box, styled } from '@mui/system'
import { Grid, Modal, Theme, Typography, Breadcrumbs, Link } from '@mui/material'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import InsuranceTerms from './InsuranceTerms'
import GetInsurance from './GetInsurance'
import { useSelector, useDispatch } from 'react-redux';
import { InsuranceTermConditionAction } from '../../Store/Duck/InsuranceTermCondition'
import BannerSlider from '../CommonComponents/BannerSlider'
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const style = {
    main: {
        boxSizing: "border-box",
        backgroundColor: "#f9f9f9",
        // height: "100vh"
    } as React.CSSProperties,
}

const useStyles: any = makeStyles((theme: Theme) => ({
}));

const Insurance = () => {
    const dispatch: any = useDispatch();
    const refContainer = useRef();
    const navigate = useNavigate();
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

    return (
        <div>
            <Box style={{ width: "100vw" }}>
        <Navbar />
        <Box sx={{width:"100%"}}>
        <Grid container spacing={0}>
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />
          </Grid>
          <Grid sx={{ height: "100vh", boxSizing: "border-box", overflow: "scroll",padding:"16px" }} xs={12} sm={11} md={10}>
                <Grid container>
                    <Grid xs={12} sm={12} md={12} className="B_style">
                    <Toolbar />
                    <Box role="presentation" className="boxBreadcrumb" sx={{ margin: "27px 0px 21px 25px" }} >
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link color="#6495ED" underline="always" href='Home' >
                      <Typography className='burgerText'> Home</Typography>
                    </Link>
                    <Link color="#6495ED" underline="always" onClick={() => navigate('/insurance')} href='insurance' >
                      <Typography className='burgerText'> Get Insured</Typography>
                    </Link>
                    <Link underline="none" color="#878782" sx={{ fontSize: "12px", width: "100%" }}>
                      <Typography className='burgerText'>Term Insurance</Typography>
                    </Link>
                  </Breadcrumbs>
                </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid xs={12} sm={12} md={12}>
                    <Box className="BoxMarginLeftRight textBoxAmount">
                    <BannerSlider
                                sliderDetails={sliderDetails}
                                sliderSetting={settings}
                            />
                

                            <div>
                                {
                                    insuranceTermCondition ? <InsuranceTerms /> : <GetInsurance />
                                }

                            </div>
                    </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </Box>
        </Box>
        </div >
    )
}

export default Insurance