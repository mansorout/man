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
import GetInsurance from './GetInsurance'
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
    slideContentWrapper: {
        backgroundColor: "var(--ui1Color)",
        color: 'var(--uiWhite)',
        width: 'calc(100%) - 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: '15px',
        borderRadius: '15px',
        '@media(max-width: 485px)': {
            flexDirection: 'column-reverse',
            alignItems: 'flex-start',
            '& b': {
                marginTop: '15px',
                display: 'inline-block'
            },
            '& p': {
                margin: '10px 0px'
            }
        }
    },
    slideImage: {
        paddingRight: '30px',
        margin: '0px 15px',
        '@media(max-width: 767px)': {
            marginTop: '15px'
        }
    },
    flexCommon: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
}));

const Insurance = () => {

    const refContainer = useRef();
    const classes = useStyles()
    const [insuranceTermCondition, setInsuranceTermCondition] = useState<boolean>(false)

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Box style={{ width: "100vw" }} ref={refContainer}>
                <Navbar />
                <Box sx={style.main}>
                    <Toolbar />
                    <Sidebar />
                    <Grid container>
                        <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '85px !important', md: '245px !important' } }} item xs={12}>
                            <Slider {...settings}>
                                <div>
                                    <div className={classes.slideContentWrapper}>
                                        <div className="slideContent">
                                            <b style={{ fontSize: '14px', fontWeight: '500' }}>Protect your family</b>
                                            <p style={{ fontSize: '12px', margin: '3px 0px' }}>from a life of compromises</p>
                                            <p style={{ color: 'var(--uiWhite)', fontSize: '24px', marginBottom: '0px' }}>Get ₹1 Crore</p>
                                            <p style={{ color: 'var(--uiWhite)', fontSize: '12px', marginTop: '7px' }}>Term Insurance Cover @ 12*/day</p>
                                            <Button variant="contained" style={{ backgroundColor: 'var(--primaryColor)', color: 'var(--uiWhite)', fontWeight: '500' }}>Get Free Quote</Button>
                                        </div>
                                        <div className={classes.slideImage} >
                                            <img src={process.env.PUBLIC_URL + '/assets/images/insurance-banner-img.png'} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={classes.slideContentWrapper}>
                                        <div className="slideContent">
                                            <b style={{ fontSize: '14px', fontWeight: '500' }}>Protect your family</b>
                                            <p style={{ fontSize: '12px', margin: '3px 0px' }}>from a life of compromises</p>
                                            <p style={{ color: 'var(--uiWhite)', fontSize: '24px', marginBottom: '0px' }}>Get ₹1 Crore</p>
                                            <p style={{ color: 'var(--uiWhite)', fontSize: '12px', marginTop: '7px' }}>Term Insurance Cover @ 12*/day</p>
                                            <Button variant="contained" style={{ backgroundColor: 'var(--primaryColor)', color: 'var(--uiWhite)', fontWeight: '500' }}>Get Free Quote</Button>
                                        </div>
                                        <div className={classes.slideImage} >
                                            <img src={process.env.PUBLIC_URL + '/assets/images/insurance-banner-img.png'} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={classes.slideContentWrapper}>
                                        <div className="slideContent">
                                            <b style={{ fontSize: '14px', fontWeight: '500' }}>Protect your family</b>
                                            <p style={{ fontSize: '12px', margin: '3px 0px' }}>from a life of compromises</p>
                                            <p style={{ color: 'var(--uiWhite)', fontSize: '24px', marginBottom: '0px' }}>Get ₹1 Crore</p>
                                            <p style={{ color: 'var(--uiWhite)', fontSize: '12px', marginTop: '7px' }}>Term Insurance Cover @ 12*/day</p>
                                            <Button variant="contained" style={{ backgroundColor: 'var(--primaryColor)', color: 'var(--uiWhite)', fontWeight: '500' }}>Get Free Quote</Button>
                                        </div>
                                        <div className={classes.slideImage} >
                                            <img src={process.env.PUBLIC_URL + '/assets/images/insurance-banner-img.png'} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className={classes.slideContentWrapper}>
                                        <div className="slideContent">
                                            <b style={{ fontSize: '14px', fontWeight: '500' }}>Protect your family</b>
                                            <p style={{ fontSize: '12px', margin: '3px 0px' }}>from a life of compromises</p>
                                            <p style={{ color: 'var(--uiWhite)', fontSize: '24px', marginBottom: '0px' }}>Get ₹1 Crore</p>
                                            <p style={{ color: 'var(--uiWhite)', fontSize: '12px', marginTop: '7px' }}>Term Insurance Cover @ 12*/day</p>
                                            <Button variant="contained" style={{ backgroundColor: 'var(--primaryColor)', color: 'var(--uiWhite)', fontWeight: '500' }}>Get Free Quote</Button>
                                        </div>
                                        <div className={classes.slideImage} >
                                            <img src={process.env.PUBLIC_URL + '/assets/images/insurance-banner-img.png'} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Slider>

                            <div>
                                {
                                    insuranceTermCondition ? <InsuranceTerms /> : <GetInsurance showInsuranceTerms={() => setInsuranceTermCondition(true)} />
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