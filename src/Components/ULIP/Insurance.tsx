import React, { useEffect, useRef, useState } from 'react'
import { Box, styled } from '@mui/system'
import { Grid, Modal, Theme, Typography } from '@mui/material'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import Slider from "react-slick";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import InsuranceTerms from './InsuranceTerms'
import GetInsurance from '../ULIP/GetInsurance'
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
            <Box style={{ width: "100vw" }} ref={refContainer}>
                <Navbar />
                <Box sx={style.main}>
                    <Toolbar />
                    <Sidebar />
                    <Grid container>
                        <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '105px !important', md: '245px !important' } }} item xs={12}>
                            <BannerSlider
                                sliderDetails={sliderDetails}
                                sliderSetting={settings}
                            />

                            <div>
                                {
                                    insuranceTermCondition ? <InsuranceTerms /> : <GetInsurance />
                                }

                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div >
    )
}

export default Insurance