import React from 'react'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar'
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { calendarPickerSkeletonClasses } from '@mui/x-date-pickers';
import Switch from '@mui/material/Switch';
import IconWithBgColor from '../CommonComponents/IconWithBgColor'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import InsurancePlanCard from '../CommonComponents/InsurancePlanCard'
import FooterWithBtn from '../CommonComponents/FooterWithBtn'
import { useNavigate } from 'react-router-dom';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const style = {
    main: {
        boxSizing: "border-box",
        backgroundColor: "#f9f9f9",
        // height: "100vh"
    } as React.CSSProperties,
}

const useStyles: any = makeStyles((theme: Theme) => ({
    topHeading: {
        '& span': {
            fontSize: 'var(--subTitleFontSize)',
            color: 'var(--uiDarkGreyColor)',
        },
        '& p': {
            fontSize: 'var(--fontSize14)',
            color: 'var(--typeLightBlackColor)',
            marginTop: '4px'
        }
    },
    insurancePlanDetailsBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        flexWrap: 'wrap',
        '@media(max-width: 450px)': {
            alignItems: 'flex-start',
        },
    },
    insurancePlanDetails: {
        '&>p': {
            fontSize: 'var(--subHeadingFontSize)',
            color: 'var(--typeLightBlackColor)',
            marginBottom: '0px',
            fontWeight: 500,
        },
        '&>span': {
            fontSize: 'var(--fontSize14)',
            color: 'var(--uiDarkGreyColor)',
        }
    },
    payMonthlyAnnually: {
        '&>span': {
            fontSize: 'var(--fontSize14)',
            color: 'var(--typeLightBlackColor)',
        }
    },
    filterIconBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        '& span': {
            fontSize: 'var(--subTitleFontSize)',
            color: 'var(--uiDarkGreyColor)',
            display: 'inline-block',
            marginTop: '15px',
        }
    }
}));

const ExplorePlan = () => {
    const classes = useStyles()
    const navigate = useNavigate();

    const handleBuyNow = () => {
        navigate('/choosedPlanDetail')
    }

    return (
        <div>
            <Box style={{ width: "100vw" }}>
                <Navbar />
                <Box sx={style.main}>
                    <Toolbar />
                    <Sidebar />
                    <Grid container>
                        <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '85px !important', md: '245px !important' } }} item xs={12}>
                            <Box>
                                <Box className={classes.topHeading}>
                                    <span>Explore Plans</span>
                                    <p>Term Insurance Recommendations</p>
                                </Box>
                                <Box className={classes.insurancePlanDetailsBox}>
                                    <Box className={classes.insurancePlanDetails}>
                                        <p>Term Insurance Plans</p>
                                        <Box className={classes.payMonthlyAnnually}>
                                            <span>Pay Monthly</span>
                                            <Switch {...label} defaultChecked />
                                            <span>Annually</span>
                                        </Box>
                                        <span>5 Plans with annually investment of ₹50,000</span>
                                    </Box>
                                    <Box className={classes.filterIconBox} sx={{alignItems: {xs : 'flex-start', sm: 'flex-end'}}}>
                                        <IconWithBgColor
                                            icon={<FilterAltOutlinedIcon />}
                                            bgColor='var(--primaryColor)'
                                            iconColor='var(--uiWhite)'
                                        />
                                        <span>Prices inclusive of GST*</span>
                                    </Box>
                                </Box>
                                <InsurancePlanCard
                                    insuranceCompany='SBI Life Insurance eShield'
                                    medicalType='No Medical'
                                    companyLogo={`${process.env.PUBLIC_URL}/assets/images/insurance-sip-start.png`}
                                    lifeCover='1 Crore'
                                    coverUpto='65 Years'
                                    claimSettled='99.1%'
                                    planAmount='₹599 pm'
                                    amountType='Premium Amt.'
                                    planOffer='Buy online and Save up to 3.75%'
                                />
                                <InsurancePlanCard
                                    insuranceCompany='SBI Life Insurance eShield'
                                    medicalType='No Medical'
                                    companyLogo={`${process.env.PUBLIC_URL}/assets/images/insurance-sip-start.png`}
                                    lifeCover='1 Crore'
                                    coverUpto='65 Years'
                                    claimSettled='99.1%'
                                    planAmount='₹599 pm'
                                    amountType='Premium Amt.'
                                    planOffer='Buy online and Save up to 3.75%'
                                />
                                <InsurancePlanCard
                                    insuranceCompany='SBI Life Insurance eShield'
                                    medicalType='No Medical'
                                    companyLogo={`${process.env.PUBLIC_URL}/assets/images/insurance-sip-start.png`}
                                    lifeCover='1 Crore'
                                    coverUpto='65 Years'
                                    claimSettled='99.1%'
                                    planAmount='₹599 pm'
                                    amountType='Premium Amt.'
                                    planOffer='Buy online and Save up to 3.75%'
                                />
                                <InsurancePlanCard
                                    insuranceCompany='SBI Life Insurance eShield'
                                    medicalType='No Medical'
                                    companyLogo={`${process.env.PUBLIC_URL}/assets/images/insurance-sip-start.png`}
                                    lifeCover='1 Crore'
                                    coverUpto='65 Years'
                                    claimSettled='99.1%'
                                    planAmount='₹599 pm'
                                    amountType='Premium Amt.'
                                    planOffer='Buy online and Save up to 3.75%'
                                />
                            </Box>
                            <FooterWithBtn
                                btnText='Buy Now'
                                btnClick={handleBuyNow}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default ExplorePlan