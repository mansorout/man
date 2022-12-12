import React, { useEffect, useRef, useState } from 'react'
import { Box, styled } from '@mui/system'
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { Height, Margin } from '@mui/icons-material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { makeStyles } from '@mui/styles';
import BoxCard from '../CommonComponents/BoxCard'
import LongCard from '../CommonComponents/LongCard'
import HorizontalImgIconLongcard from '../CommonComponents/HorizontalImgIconLongcard';
import { InsuranceTermConditionAction } from '../../Store/Duck/InsuranceTermCondition'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const GetInsurance = () => {
    const dispatch: any = useDispatch();
    const navigate = useNavigate();

    const handleInsuranceTermCondition = () => {
        dispatch(InsuranceTermConditionAction(true))
    }
    return (
        <div>
            <Grid container sx={{ paddingTop: '30px' }}>
                <Grid sx={{}} item xs={12} sm={8}>
                    {/* <div className={classes.insuranceCardWrapper}></div> */}
                    <Grid container>
                        <Grid item xs={12} md={6} sx={{ padding: '0px 14px', margin: '15px 0px' }}>
                            <BoxCard
                                heading='ULIP'
                                headIcon={<ErrorOutlineIcon style={{ color: 'var(--ui1Color)' }} />}
                                detailText='Unit linked insurance plans Invest and insure!'
                                bottomImageUrl={`${process.env.PUBLIC_URL}/assets/images/ulip.svg`}
                                bottomNavigationIcon={<ArrowForwardIcon />}
                                btnClick={()=>{}}
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ padding: '0px 14px', margin: '15px 0px' }}>
                            <BoxCard
                                heading='Health Insurance'
                                headIcon={<ErrorOutlineIcon style={{ color: 'var(--ui1Color)' }} />}
                                detailText='Be financially prepared for any medical emergencies!'
                                bottomImageUrl={`${process.env.PUBLIC_URL}/assets/images/health-insurance.svg`}
                                bottomNavigationIcon={<ArrowForwardIcon />}
                                btnClick={()=>{navigate('/healthInsurance');}}
                            />
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={12} md={6} sx={{ padding: '0px 14px', margin: '15px 0px' }}>
                            <BoxCard
                                heading='Vehicle Insurance'
                                headIcon={<ErrorOutlineIcon style={{ color: 'var(--ui1Color)' }} />}
                                detailText='Get the best car and bike insurance quotes from us'
                                bottomImageUrl={`${process.env.PUBLIC_URL}/assets/images/vehicle-insurance.svg`}
                                bottomNavigationIcon={<ArrowForwardIcon />}
                                btnClick={()=>{}}
                                
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ padding: '0px 14px', margin: '15px 0px' }}>
                            <BoxCard
                                heading='Travel Insurance'
                                headIcon={<ErrorOutlineIcon style={{ color: 'var(--ui1Color)' }} />}
                                detailText='Get the best travel insurance quotes from us'
                                bottomImageUrl={`${process.env.PUBLIC_URL}/assets/images/travel-insurance.svg`}
                                bottomNavigationIcon={<ArrowForwardIcon />}
                                btnClick={()=>{}}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid sx={{}} item xs={12} sm={4}>
                    <Grid container sx={{ margin: '15px 0px', height: '100%' }}>
                        <Grid item xs={12} md={6} sx={{ padding: '0px 7px' }}>
                            <LongCard
                                heading='Tax saving'
                                subHeading='Term Insurance Cover @ 12*/day'
                                amountText='Click to Save tax up to'
                                amount='₹45,000'
                                imgUrl={`${process.env.PUBLIC_URL}/assets/images/insurance-text-saving.png`}
                                bgColor='var(--gradientColor)'
                            />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ padding: '0px 7px' }}>
                            <LongCard
                                heading='Start an SIP'
                                subHeading='Investing for'
                                amountText='Start with small steps'
                                amount='₹500'
                                imgUrl={`${process.env.PUBLIC_URL}/assets/images/insurance-sip-start.png`}
                                bgColor='var(--gradientColorBlack)'
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12} sx={{ padding: '20px 14px' }} >
                    <HorizontalImgIconLongcard
                        heading='ULIP'
                        subHeading='Unit linked insurance plans Invest and insure!'
                        imgUrl={`${process.env.PUBLIC_URL}/assets/images/term-insurance.svg`}
                        headIcon={<ErrorOutlineIcon style={{ color: 'var(--ui1Color)' }} />}
                        navigatIcon={<ArrowForwardIcon />}
                        showInsuranceTerms={handleInsuranceTermCondition}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default GetInsurance