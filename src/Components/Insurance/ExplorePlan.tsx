import React,{useEffect, useState} from 'react'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar'
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Toolbar, Breadcrumbs, Link } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { calendarPickerSkeletonClasses } from '@mui/x-date-pickers';
import Switch from '@mui/material/Switch';
import IconWithBgColor from '../CommonComponents/IconWithBgColor'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import InsurancePlanCard from '../CommonComponents/InsurancePlanCard'
import FooterWithBtn from '../CommonComponents/FooterWithBtn'
import { useNavigate } from 'react-router-dom';
import { getTermListApi, postTermGenerate } from '../../Store/Insurance/thunk/insurance-thunk';
import { useDispatch, useSelector } from 'react-redux';
import { getTermListApiTypes } from '../../Store/Insurance/constants/types';
import SearchCmp from '../CommonComponents/SearchCmp';
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
        // '& span': {
        //     fontSize: 'var(--subTitleFontSize)',
        //     color: 'var(--uiDarkGreyColor)',
        //     display: 'inline-block',
        //     marginTop: '15px',
        // }
    }
}));

const ExplorePlan = () => {
    const classes = useStyles();
    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    const { termData, termListApiData, termGenerateApiData } = useSelector((state: any) => state.insuranceReducer)
    const [filterIndexes, setFilterIndexes] = useState<any>(
        [
            {
                key: 'Sort',
                keyValues: [
                    {
                        value: 'highToLowReturn',
                        label: 'Return - High to Low',
                    },
                    {
                        value: 'highToLowRating',
                        label: 'Rating - High to Low',
                    },
                    {
                        value: 'highToLowFundSize',
                        label: 'Fund Size - High to Low',
                    }
                ]
            },
            {
                key: 'Policy Term',
                keyValues: [
                    {
                        value: 5,
                        label: '5 Years',
                    },
                    {
                        value: 7,
                        label: '7 Years',
                    },
                    {
                        value: 10,
                        label: '10 Years',
                    },
                    {
                        value: 15,
                        label: '15 Years',
                    },
                ]
            },
            {
                key: 'Life Cover',
                keyValues: [
                    {
                        value: 500000,
                        label: '₹5 Lacs',
                    },
                    {
                        value: 1500000,
                        label: '₹15 Lacs',
                    },
                    {
                        value: 7500000,
                        label: '₹75 Lacs',
                    },
                    {
                        value: 10000000,
                        label: '₹1 Crore',
                    },
                ]
            }
        ]
    )
    



    useEffect(() => {
        dispatch(postTermGenerate(termData))
    }, [termData])


    useEffect(() => {
        termGenerateApiData?.recommendation_id && dispatch(getTermListApi(termGenerateApiData?.recommendation_id));
    }, [termGenerateApiData])
    
    

    const handleBuyNow = () => {
        navigate('/choosedPlanDetail')
    }

    const handleFilterCB = (data:any) => {
        console.log("click value :", data,)
    }


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
          <Grid sx={{ height: "100vh", padding: 0, boxSizing: "border-box", overflow: "scroll" }} xs={12} sm={11} md={10}>
                <Grid container>
                    <Grid xs={12} sm={12} md={12}>
                    <Toolbar />
                    <Box role="presentation" className="boxBreadcrumb" sx={{ margin: "27px 0px 21px 25px" }}>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link color="#6495ED" underline="always" href='Home' >
                      <Typography className='burgerText'> Home</Typography>
                    </Link>
                    <Link color="#6495ED" underline="always" onClick={() => navigate('/insurance')} href='insurance' >
                      <Typography className='burgerText'> Get Insured</Typography>
                    </Link>
                    <Link underline="none" color="#878782" sx={{ fontSize: "12px", width: "100%" }}>
                      <Typography className='burgerText'>Explore Plan</Typography>
                    </Link>
                  </Breadcrumbs>
                </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid xs={12} sm={12} md={12}>
                    <Box className="BoxMarginLeftRight">
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
                                        <span>{termListApiData?.length} Plans with annually investment of ₹{termData?.lifecover}</span>
                                    </Box>
                                    <Box className={classes.filterIconBox} sx={{ alignItems: { xs: 'flex-start', sm: 'flex-end', } }}>
                                        {/* <IconWithBgColor
                                            icon={<FilterAltOutlinedIcon />}
                                            bgColor='var(--primaryColor)'
                                            iconColor='var(--uiWhite)'
                                        /> */}
                                        <SearchCmp
                                            filtersOptions={filterIndexes}
                                            handleCB={handleFilterCB}
                                        />
                                        <Typography component='span' sx={{
                                            fontSize: 'var(--subTitleFontSize)',
                                            color: 'var(--uiDarkGreyColor)',
                                            display: 'inline-block',
                                            marginTop: '15px',
                                        }}>Prices inclusive of GST*</Typography>
                                    </Box>
                                </Box>
                                {
                                    termListApiData?.length > 0 && termListApiData.map((cardItem: getTermListApiTypes) => (
                                        <InsurancePlanCard
                                            insuranceCompany={cardItem.providername}
                                            medicalType={cardItem.ismedicalcheckrequire === 0 ? 'No Medical' : 'Medical'}
                                            // companyLogo={`${process.env.PUBLIC_URL}/assets/images/insurance-sip-start.png`}
                                            companyLogo={cardItem.providerlogo}
                                            lifeCover={cardItem.lifecover}
                                            coverUpto={`${cardItem.maxage} Years`}
                                            claimSettled={cardItem.claimsettlementratio}
                                            planAmount='₹599 pm'
                                            amountType='Premium Amt.'
                                            planOffer='Buy online and Save up to 3.75%'
                                        />
                                    ))
                                }
                                {/* <InsurancePlanCard
                                    insuranceCompany='SBI Life Insurance eShield'
                                    medicalType='No Medical'
                                    companyLogo={`${process.env.PUBLIC_URL}/assets/images/insurance-sip-start.png`}
                                    lifeCover={100000}
                                    coverUpto='65 Years'
                                    claimSettled='99.1%'
                                    planAmount='₹599 pm'
                                    amountType='Premium Amt.'
                                    planOffer='Buy online and Save up to 3.75%'
                                /> */}
                                {/* <InsurancePlanCard
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
                                /> */}
                            </Box>
                            <FooterWithBtn
                                btnText='Buy Now'
                                btnClick={handleBuyNow}
                            />
                    </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        </Box>
            </Box>
        </div>
    )
}

export default ExplorePlan