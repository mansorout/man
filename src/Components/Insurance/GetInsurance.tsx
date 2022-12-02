import React, { useEffect, useRef, useState } from 'react'
import { Box, styled } from '@mui/system'
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { Height, Margin } from '@mui/icons-material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { makeStyles } from '@mui/styles';


const useStyles: any = makeStyles((theme: Theme) => ({
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
        background: 'var(--gradientColorBlack)',
    }
}));

interface propsType {
    showInsuranceTerms: () => void
}

const GetInsurance = ({ showInsuranceTerms }: propsType) => {
    const classes = useStyles()
    return (
        <div>
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
                                <div className={classes.insuranceCardIcon} onClick={showInsuranceTerms}>
                                    <ArrowForwardIcon />
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default GetInsurance