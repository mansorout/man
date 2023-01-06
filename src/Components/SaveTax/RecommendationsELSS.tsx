import React, { useEffect, useState } from 'react'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import { Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import RecommendationsELSSHeader from './RecommendationsELSSHeader'
import FooterWithBtn from '../CommonComponents/FooterWithBtn'
import Button from '@mui/material/Button';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import { useDispatch, useSelector } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import { tick } from '../../Assets';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {
    getDataSaveTaxListApi,
    getDataSaveTaxInvestmentType,
    postSaveTaxGenrateApi
} from '../../Store/Save Tax/thunk/save-tax-thunk';
import { lookUpMasterKeys, bannerSectionValues, investmentTypeValues } from '../../Utils/globalConstant';
import { customParseJSON, getLookUpIdWRTModule } from '../../Utils/globalFunctions';
import RecommendationsHeader from '../CommonComponents/RecommendationsHeader';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
    SaveTaxInvestmentLumpsumAction,
    SaveTaxInvestmentMonthlyAction,
    SaveTaxInvestmentAmount,
    LUMPSUM,
    MONTHLY,
    saveTaxPercentageAmountAction
} from '../../Store/Duck/InvestmentType';


const useStyles: any = makeStyles((theme: Theme) => ({
    main: {
        boxSizing: "border-box",
        backgroundColor: "var(--bgLayoutColor)",
    },
    cmpHeading: {
        padding: '15px 0px',
        '& p': {
            color: 'var(--typeLightBlackColor)',
            fontSize: 'var(--subHeadingFontSize)',
            fontWeight: 500,
        },
        '& span': {
            color: 'var(--typeIndigoColor)',
            fontSize: 'var(--fontSize14)',
        },
    },
    cardStyle: {
        backgroundColor: 'var(--uiWhite)',
        // boxShadow: 'var(--themeShadow)',
        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        borderRadius: '8px',
        padding: '15px',
        marginBottom: '15px',
    },
    cardStyleCmpName: {
        display: 'flex',
        flexWrap: 'wrap',
        '& p': {
            color: 'var(--typeLightBlackColor)',
            fontSize: 'var(--titleFontSize)',
            fontWeight: 500,
        }
    },
    cardBadge: {
        padding: '4px 8px',
        backgroundColor: 'rgba(123, 123, 157, 0.16)',
        margin: '4px 8px !important',
        display: 'inline-block',
        borderRadius: '4px',
        color: 'var(--typeIndigoColor)',
        fontSize: 'var(--subTitleFontSize) !important',
        fontWeight: 500,
        '@media(max-width: 500px)': {
            marginLeft: '0px !important',
        }
    },
    cardImgWrapper: {
        width: '70px',
        height: '70px',
        borderRadius: '50%',
        border: '1px solid var(--typeIndigoColor)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px',
        boxSizing: 'border-box',
    },
    priceBadge: {
        borderRadius: '4px',
        padding: '4px 8px',
        color: 'var(--ui1Color)',
        fontSize: 'var(--titleFontSize) !important',
        backgroundColor: 'rgb(108 99 255 / 20%)',
        display: 'inline-block',
        fontWeight: 500,
    },
    cardContent: {
        marginBottom: '10px',
        '& span': {
            fontSize: 'var(--fontSize14)',
            color: 'var(--typeIndigoColor)',
        },
        '& p': {
            fontSize: 'var(--subHeadingFontSize)',
            color: 'var(--typeLightBlackColor)',
            fontWeight: 500,
        }
    },
    exploreOtherOptionsBtn: {
        textAlign: 'center',
        padding: '15px',
        '& button': {
            fontSize: 'var(--buttonFontSize) !important',
            backgroundColor: '#00b4ff !important',
            borderRadius: '20px',
        }
    },
    ratingBox: {
        '& div': {
            backgroundColor: 'rgb(255 195 0 / 30%)',
            display: 'inline-flex',
            padding: '4px',
            borderRadius: '4px',
            '& svg': {
                color: '#ffc300',
                marginRight: '3px',
            }
        }
    },
    ratingBoxImgWrapper: {
        backgroundColor: 'transparent !important',
    },

    modalText: {
        backgroundColor: 'var(--uiWhite)',
        // width: 338,
        textAlign: 'center',
        padding: '10px 0px',
        borderTopRightRadius: 4,
        borderTopLeftRadius: 4,
        fontWeight: 500,
        borderColor: 'var(--uiWhite)',
        fontsize: 'var(--titleFontSize),'
    },
    modalTextButton: {
        // height: "48px",
        boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
        backgroundColor: "var(--primaryColor) !important",
        color: 'var(--uiWhite) !important',
        // width: 350,
    },
    dateModal: {
        '&>.MuiBox-root': {
            display: 'inline-block !important   '
        }
    },
}))

const RecommendationsELSS = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch: any = useDispatch();
    const { investmentType, investmentAmount } = useSelector((state: any) => state.InvestmentTypeReducers)
    const { saveTaxListData,saveTaxGenrate } = useSelector((state: any) => state.saveTaxReducer)
    const [open, setOpen] = React.useState<boolean>(false);
    const [openConfirmation, setOpenConfirmation] = useState<boolean>(false);
    const [calenderValue, setCalenderValue] = useState(new Date())
    const [recommendationHeaderSelectArr, setRecommendationHeaderSelectArr] = useState<string[]>(['5', '10', '15', '20'])
    const [recommendationHeaderSelectChoosed, setRecommendationHeaderSelectChoosed] = useState<string>('')
    const [recommendationHeaderInputFeildShow, setRecommendationHeaderInputFeildShow] = useState<boolean>(false)


    useEffect(() => {
        if (parseInt(investmentAmount) === 0) navigate('/saveTax')
        const bannersectionArr = customParseJSON(localStorage.getItem(lookUpMasterKeys.INVESTMENT_TYPE))
        const lookUPIdLUMPSUM = getLookUpIdWRTModule(bannersectionArr, investmentTypeValues.LUMPSUM)
        const lookUPIdSIP = getLookUpIdWRTModule(bannersectionArr, investmentTypeValues.SIP)
        console.log("lookUPId :", bannersectionArr,lookUPIdLUMPSUM, lookUPIdSIP)
        const saveTavGenrateBody = {
            investmenttype_id: investmentType === LUMPSUM ? lookUPIdLUMPSUM : lookUPIdSIP,
            amount: parseInt(investmentAmount),
        }
        const temp = {
            investmenttype_id: investmentType === LUMPSUM ? lookUPIdLUMPSUM : lookUPIdSIP,
            amount: parseInt(investmentAmount),
        }
        
        // dispatch(getDataSaveTaxInvestmentType(investmentAmount))
        dispatch(postSaveTaxGenrateApi(saveTavGenrateBody))
        console.log("investmentAmount :", investmentAmount)
        dispatch(getDataSaveTaxListApi(temp))
    }, [investmentAmount])

    // useEffect(() => {
    //     const bannersectionArr = customParseJSON(localStorage.getItem(lookUpMasterKeys.INVESTMENT_TYPE))
    //     const lookUPId = getLookUpIdWRTModule(bannersectionArr, lookUpMasterKeys.INVESTMENT_TYPE)
    //     const temp = {
    //         investmenttype_id: lookUPId,
    //         amount: parseInt(investmentAmount),
    //     }
    //     saveTaxListData?.recommendation_id && dispatch(getDataSaveTaxListApi(temp))
    // }, [saveTaxGenrate])



    const handleULIPDate = () => {
        setOpen(true)
    }

    const handleBuyNow = () => {
        // loading Com and after that payment screen
        navigate('/payusingnetbanking');
    }

    const handleCalender = (value: any) => {
        setCalenderValue(value)
        console.log("calender value", value)
    }


    const handleCloseContinuePayment = (
        event: {},
        reason: "backdropClick" | "escapeKeyDown"
    ) => {
        if (reason === "backdropClick") {
            console.log(reason);
        } else {
            //   setOpen(false);
            setOpenConfirmation(!openConfirmation)
        }
    };

    return (
        <Box style={{ width: "100vw" }}>
            <Navbar />
            <Box className={classes.main}>
                <Toolbar />
                <Sidebar />
                <Grid container>
                    <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '105px !important', md: '245px !important' }, marginTop: '-15px', }} item xs={12}>
                        {/* <RecommendationsELSSHeader /> */}
                        <RecommendationsHeader
                            selectTextLabel='Premium Payment Term'
                            selectArray={recommendationHeaderSelectArr}
                            selectChoosedValue={recommendationHeaderSelectChoosed}
                            changeSelectEvent={(event: SelectChangeEvent) => {
                                setRecommendationHeaderSelectChoosed(event.target.value);
                            }}
                            investmentTypeLabel='Investment Type'
                            investmentType={investmentType}
                            investmentAmount={investmentAmount}
                            // changeInvestmentTypeEvent={handleChangeInvestmentTypeEvent}
                            boxInputLabelText='Amount I want to invest monthly'
                            boxInputButtonText='Update Plans'
                            boxInputShow={recommendationHeaderInputFeildShow}
                            boxInputShowHandleChange={() => setRecommendationHeaderInputFeildShow(true)}
                            boxInputHideHandleChange={() => setRecommendationHeaderInputFeildShow(false)}
                        />
                        <Box className={classes.cmpHeading}>
                            <Typography component='p'>{saveTaxListData?.recommendations && saveTaxListData.recommendations.length} ELSS Plan Found</Typography>
                            <Typography component='span'>This plan provide tax benefit of 80C</Typography>
                        </Box>

                        {
                            saveTaxListData?.recommendations && saveTaxListData.recommendations.map((cardData?: any) => {
                                return (<Box className={classes.cardStyle}>
                                    <Grid container>
                                        <Grid item xs={12} sm={5}>
                                            <Box className={classes.cardStyleCmpName}>
                                                <Box className={classes.cardImgWrapper}>
                                                    <img style={{ width: '100%', height: 'auto' }} src={cardData?.fundimage} alt="" />
                                                </Box>
                                                <Box sx={{ margin: { sx: '0px', sm: '0px 8px' } }}>
                                                    <Typography component='p'>{cardData?.fundname}</Typography>
                                                    <Typography component='div' className={classes.cardBadge}>{cardData?.category}</Typography>
                                                    <Typography component='div' className={classes.cardBadge}>{cardData?.categorygroup}</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={2}>
                                            <Box className={classes.priceBadge} sx={{ margin: { xs: '6px 0px', sm: '0px', } }}>
                                                <Typography component='div'>₹{cardData?.recommendedamount}</Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={3}>
                                            <Box sx={{ padding: { xs: '0px', sm: '0px 10px', } }}>
                                                <Box className={classes.cardContent}>
                                                    <Typography component='span'>1 yr return</Typography>
                                                    <Typography component='p'>{cardData?.return1yr}</Typography>
                                                </Box>
                                                <Box className={classes.cardContent}>
                                                    <Typography component='span'>5 yr return</Typography>
                                                    <Typography component='p'>{cardData?.return5yr}</Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={2}>
                                            <Box>
                                                <Box className={classes.cardContent}>
                                                    <Typography component='span'>3 yr return</Typography>
                                                    <Typography component='p'>{cardData?.return3yr}</Typography>
                                                </Box>
                                                <Box className={classes.ratingBox}>
                                                    <Typography component='div'>
                                                        <StarOutlinedIcon />
                                                        <Typography component='span'>{cardData?.ratingoverall}
                                                        </Typography>
                                                    </Typography>
                                                    <Box className={classes.ratingBoxImgWrapper}>
                                                        <img src={process.env.PUBLIC_URL + '/assets/images/rating-logo.webp'} alt="" />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                                )
                            })

                        }

                        <Box className={classes.exploreOtherOptionsBtn}>
                            <Button variant="contained" sx={{ width: { xs: '100%', sm: 'auto', }, margin: { xs: '6px 0px !important', sm: '0px 8px !important', } }}>
                                Explore other options
                            </Button>
                        </Box>

                        <FooterWithBtn
                            btnText={investmentType === 'lumpsum' ? 'Buy Now' : 'Select ELSS Date'}
                            btnClick={investmentType === 'lumpsum' ? handleBuyNow : handleULIPDate}
                        />
                    </Grid>
                </Grid>
            </Box>


            <Dialog open={open} onClose={() => (!open)}>
                {/* <DialogTitle className={classes.modalText}>Set backup account</DialogTitle> */}
                <Typography className={classes.modalText}>Set backup account</Typography>
                <Calendar onChange={handleCalender} value={calenderValue} />
                <Button onClick={() => { setOpen(!open); setOpenConfirmation(!openConfirmation) }} variant='contained' className={classes.modalTextButton} sx={{
                    backgroundColor: 'rgba(123, 123, 157, 0.05)',
                    color: '#7b7b9d'
                }}>
                    Confirm ELSS Date
                </Button>
            </Dialog>

            <Dialog open={openConfirmation} onClose={handleCloseContinuePayment}>
                {/* <DialogTitle className={classes.modalText}>Set backup account</DialogTitle> */}

                <Box sx={{ backgroundColor: '#fff', maxWidth: 300, alignItems: 'center', padding: 3, textAlign: 'center' }}>
                    <Box><img style={{ height: 'auto', maxWidth: 110 }} src={tick} /></Box>
                    <Typography sx={{ marginTop: 1, fontWeight: '600' }} >Date confirmed!</Typography>
                    <Typography sx={{ marginTop: 1, color: '#8787a2' }} >{`Your Monthly SIP Date is ${calenderValue} of every month`}</Typography>
                </Box>
                <Button onClick={() => {
                    setOpenConfirmation(!openConfirmation);
                    navigate('/payusingnetbanking');
                }} variant='contained' className={classes.modalTextButton} sx={{
                    backgroundColor: 'rgba(123, 123, 157, 0.05)',
                    color: '#7b7b9d'
                }}>
                    Continue to Payment
                </Button>
            </Dialog>

            {/* <Dialog onClose={() => setOpenConfirmation(!open)} open={open}>
                <Typography className={classes.modalText}>Set backup account</Typography>
                <Calendar onChange={handleCalender} value={calenderValue} />
                <Button onClick={() => { setOpen(!open); setOpenConfirmation(!openConfirmation) }} variant='contained' className={classes.modalTextButton} sx={{
                    backgroundColor: 'rgba(123, 123, 157, 0.05)',
                    color: '#7b7b9d'
                }}>
                    Confirm SIP Date
                </Button>
            </Dialog>

            <Dialog open={openConfirmation} onClose={() => { setOpenConfirmation(!openConfirmation) }}>

                <Box sx={{ backgroundColor: '#fff', width: 300, alignItems: 'center', padding: 3, textAlign: 'center' }}>
                    <Box><img style={{ height: 120, width: 120 }} src={tick} /></Box>
                    <Typography sx={{ marginTop: 1, fontWeight: '600' }} >Date confirmed!</Typography>
                    <Typography sx={{ marginTop: 1, color: '#8787a2' }} >Your Monthly SIP Date is 8th of every month</Typography>
                </Box>
                <Button onClick={() => {
                    setOpenConfirmation(!openConfirmation);
                    navigate('/payusingnetbanking');
                }} variant='contained' className={classes.modalTextButton} sx={{
                    backgroundColor: 'rgba(123, 123, 157, 0.05)',
                    color: '#7b7b9d'
                }}>
                    Continue to Payment
                </Button>
            </Dialog> */}

        </Box >
    )
}

export default RecommendationsELSS