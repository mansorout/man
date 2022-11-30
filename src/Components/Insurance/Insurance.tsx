import React, { useEffect, useRef, useState } from 'react'
import { Box, styled } from '@mui/system'
import { Grid, Modal, Theme, Typography } from '@mui/material'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import Slider from "react-slick";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { Height, Margin } from '@mui/icons-material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
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
    },
    slideImage: {
        paddingRight: '30px',
        margin: '0px 15px',
    },
    flexCommon: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    insuranceCard: {
        backgroundColor: 'var(--uiWhite)',
        padding: '15px 15px',
        borderRadius: '8px',
        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.1)',
        height: 'calc(100% - 15px)',
        '@media(max-width: 767px)': {
            margin: '0px -7px',
        }
    },
    insuranceCardHead: {
    },
    insuranceCardImage: {
        alignItems: 'flex-end'
    },
    insuranceCardIcon: {
        backgroundColor: 'var(--primaryColor)',
        color: 'var(--uiWhite)',
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '15px',
        cursor: 'pointer',
    },
    termInsuranceCard: {
        display: 'flex',
        paddingBottom: '0px',
    },
    insuranceTextSaving: {
        background: 'var(--gradientColor)',
        padding: '30px 15px',
        position: 'relative',
        // paddingBottom: '160px',
        height: 'calc(100% - 75px)',
        borderRadius: '8px'
    },
    insuranceTextSavingImage: {
        position: 'absolute',
        bottom: '-5px',
        right: '0px',
        maxWidth: '100%',
        overflow: 'hidden',
        borderRadius: '8px'
    },
    insuranceStartSip: {
        background: 'var(--typeLightBlackColor)',
    }
}));

const Insurance = () => {

    const refContainer = useRef();
    const classes = useStyles()

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
                        <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '245px !important' } }} item xs={12}>
                            <Slider {...settings}>
                                <div style={{ backgroundColor: '#ddd' }}>
                                    <div className={classes.slideContentWrapper}>
                                        <div className="slideContent">
                                            <b style={{ fontSize: '14px', fontWeight: '500' }}>Protect your family</b>
                                            <p style={{ fontSize: '12px', margin: '3px 0px' }}>from a life of compromises</p>
                                            <p style={{ color: 'var(--uiWhite)', fontSize: '24px', marginBottom: '0px' }}>Get ₹1 Crore</p>
                                            <p style={{ color: 'var(--uiWhite)', fontSize: '12px', marginTop: '7px' }}>Term Insurance Cover @ 12*/day</p>
                                            <Button variant="contained" style={{ backgroundColor: 'var(--primaryColor)', color: 'var(--uiWhite)', fontWeight: '500' }}>Get Free Quote</Button>
                                        </div>
                                        <div className={classes.slideImage} >
                                            <img src={process.env.PUBLIC_URL + '/assets/images/ulip.svg'} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: '#ddd' }}>
                                    <h3>2</h3>
                                </div>
                                <div style={{ backgroundColor: '#ddd' }}>
                                    <h3>3</h3>
                                </div>
                                <div style={{ backgroundColor: '#ddd' }}>
                                    <h3>4</h3>
                                </div>
                            </Slider>
                            <Grid container sx={{ paddingTop: '30px' }}>
                                <Grid sx={{}} item xs={12} sm={8}>
                                    {/* <div className={classes.insuranceCardWrapper}></div> */}

                                    <Grid container>
                                        <Grid item xs={12} md={6} sx={{ padding: '0px 14px', margin: '15px 0px' }}>
                                            <div className={classes.insuranceCard}>
                                                <div className={`${classes.insuranceCardHead} ${classes.flexCommon}`}>
                                                    <h5 style={{ margin: '0px', }}>ULIP</h5>
                                                    <ErrorOutlineIcon style={{ color: 'var(--ui1Color)' }} />
                                                </div>
                                                <p style={{ color: 'var(--typeIndigoColor)', fontSize: '14px', }}>Unit linked insurance plans Invest and insure!</p>
                                                <div className={`${classes.insuranceCardImage} ${classes.flexCommon}`}>
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/ulip.svg'} alt="" />
                                                    <div className={classes.insuranceCardIcon}>
                                                        <ArrowForwardIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ padding: '0px 14px', margin: '15px 0px' }}>
                                            <div className={classes.insuranceCard}>
                                                <div className={`${classes.insuranceCardHead} ${classes.flexCommon}`}>
                                                    <h5 style={{ margin: '0px', }}>Health Insurance</h5>
                                                    <ErrorOutlineIcon style={{ color: 'var(--ui1Color)' }} />
                                                </div>
                                                <p style={{ color: 'var(--typeIndigoColor)', fontSize: '14px', }}>Be financially prepared for any medical emergencies!</p>
                                                <div className={`${classes.insuranceCardImage} ${classes.flexCommon}`}>
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/health-insurance.svg'} alt="" />
                                                    <div className={classes.insuranceCardIcon}>
                                                        <ArrowForwardIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                    <Grid container>
                                        <Grid item xs={12} md={6} sx={{ padding: '0px 14px', margin: '15px 0px' }}>
                                            <div className={classes.insuranceCard}>
                                                <div className={`${classes.insuranceCardHead} ${classes.flexCommon}`}>
                                                    <h5 style={{ margin: '0px', }}>Vehicle Insurance</h5>
                                                    <ErrorOutlineIcon style={{ color: 'var(--ui1Color)' }} />
                                                </div>
                                                <p style={{ color: 'var(--typeIndigoColor)', fontSize: '14px', }}>Get the best car and bike insurance quotes from us</p>
                                                <div className={`${classes.insuranceCardImage} ${classes.flexCommon}`}>
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/vehicle-insurance.svg'} alt="" />
                                                    <div className={classes.insuranceCardIcon}>
                                                        <ArrowForwardIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ padding: '0px 14px', margin: '15px 0px' }}>
                                            <div className={classes.insuranceCard}>
                                                <div className={`${classes.insuranceCardHead} ${classes.flexCommon}`}>
                                                    <h5 style={{ margin: '0px', }}>Travel Insurance</h5>
                                                    <ErrorOutlineIcon style={{ color: 'var(--ui1Color)' }} />
                                                </div>
                                                <p style={{ color: 'var(--typeIndigoColor)', fontSize: '14px', }}>Get the best travel insurance quotes from us</p>
                                                <div className={`${classes.insuranceCardImage} ${classes.flexCommon}`}>
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/travel-insurance.svg'} alt="" />
                                                    <div className={classes.insuranceCardIcon}>
                                                        <ArrowForwardIcon />
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid sx={{}} item xs={12} sm={4}>
                                    <Grid container sx={{ margin: '15px 0px', height: '100%' }}>
                                        <Grid item xs={12} md={6} sx={{ padding: '0px 7px' }}>
                                            <div className={classes.insuranceTextSaving}>
                                                <p style={{ color: 'var(--uiWhite)', fontSize: '24px', marginBottom: '0px', fontWeight: 400, }}>Tax saving</p>
                                                <p style={{ color: 'var(--uiWhite)', fontSize: '12px', marginTop: '7px', marginBottom: '40px', }}>Term Insurance Cover @ 12*/day</p>
                                                <p style={{ color: 'var(--uiWhite)', fontSize: '12px', marginBottom: '0px' }}>Click to Save tax up to</p>
                                                <p style={{ color: 'var(--uiWhite)', fontSize: '24px', marginTop: '0px', fontWeight: 400, }}>₹45,000</p>

                                                <div className={classes.insuranceTextSavingImage}>
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/insurance-text-saving.png'} alt="" />
                                                </div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ padding: '0px 7px' }}>
                                            <div className={`${classes.insuranceTextSaving} ${classes.insuranceStartSip}`}>
                                                <p style={{ color: 'var(--uiWhite)', fontSize: '24px', marginBottom: '0px', fontWeight: 400, }}>Start an SIP</p>
                                                <p style={{ color: 'var(--uiWhite)', fontSize: '12px', marginTop: '7px', marginBottom: '40px', }}>Investing for</p>
                                                <p style={{ color: 'var(--uiWhite)', fontSize: '12px', marginBottom: '0px' }}>Start with small steps</p>
                                                <p style={{ color: 'var(--primaryColor)', fontSize: '24px', marginTop: '0px', fontWeight: 400, }}>₹500</p>

                                                <div className={classes.insuranceTextSavingImage}>
                                                    <img src={process.env.PUBLIC_URL + '/assets/images/insurance-sip-start.png'} alt="" />
                                                </div>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid container>
                                <Grid item xs={12} sx={{ padding: '20px 14px' }} >
                                    <div className={`${classes.insuranceCard} ${classes.termInsuranceCard}`}>
                                        <div>
                                            <img src={process.env.PUBLIC_URL + '/assets/images/term-insurance.svg'} alt="" />
                                        </div>
                                        <div style={{ width: '100%', margin: '0px 15px', }}>
                                            <div className={`${classes.insuranceCardHead} ${classes.flexCommon}`}>
                                                <h5 style={{ margin: '0px', }}>ULIP</h5>
                                                <ErrorOutlineIcon style={{ color: 'var(--ui1Color)' }} />
                                            </div>
                                            <div className={`${classes.insuranceCardImage} ${classes.flexCommon}`}>
                                                <p style={{ color: 'var(--typeIndigoColor)', fontSize: '14px', }}>Unit linked insurance plans Invest and insure!</p>
                                                <div className={classes.insuranceCardIcon}>
                                                    <ArrowForwardIcon />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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