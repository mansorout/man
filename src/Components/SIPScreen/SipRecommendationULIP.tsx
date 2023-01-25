import React, { useState, useEffect } from 'react'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import { Grid, Modal, Theme, Typography, Breadcrumbs, Link } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import { Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import RecommendationsHeader from '../CommonComponents/RecommendationsHeader';
import Button from '@mui/material/Button';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FooterWithBtn from '../CommonComponents/FooterWithBtn'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from 'react-redux';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { tick } from '../../Assets';
import DialogContent from '@mui/material/DialogContent';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LineChart from '../CommonComponents/Charts/LineChart'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import {
    LUMPSUM,
    MONTHLY
} from '../../Store/Duck/InvestmentType'
import { getDataSaveTaxListApi } from '../../Store/Save Tax/thunk/save-tax-thunk';
import { lookUpMasterKeys, bannerSectionValues } from '../../Utils/globalConstant';
import { customParseJSON, getLookUpIdWRTModule, numDifferentiation } from '../../Utils/globalFunctions';
import { getUlipListApi, getUlipSchemeDetailApi, postUlipGenrateApi } from '../../Store/Insurance/thunk/insurance-thunk';
import { getUlipListApiTypes } from '../../Store/Insurance/constants/types';
import siteConfig from '../../Utils/siteConfig';


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
    btnGroup: {
        textAlign: 'right',
        '& button': {
            fontSize: 'var(--subTitleFontSize) !important',
            backgroundColor: 'rgba(123, 123, 157, 0.05) !important',
            color: 'var(--typeIndigoColor)',
            '&:hover': {
                backgroundColor: '#e3f6eb !important',
                color: 'var(--primaryColor)',
            }
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
    knowMoreDialog: {
        display: 'flex',
        position: 'relative',
    },
    knowMoreDialogImageWrapper: {
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        '& img': {
            width: '100%',
            height: 'auto',
        }
    },
    chartBox: {
        marginTop: '15px',
        padding: '15px 15px',
        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        borderRadius: '8px',
    },
    chartCmpName: {
        position: 'relative',
        padding: '15px 20px',
        '&::before': {
            content: '""',
            display: 'inline-block',
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: '#ffc300',
            position: 'absolute',
            top: '17px',
            left: '0'
        }
    },
    cmpInvestmentDetail: {
        marginTop: '15px',
        padding: '15px 15px',
        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        borderRadius: '8px',
        display: 'flex',
        '& span': {
            color: 'var(--typeIndigoColor)',
            fontSize: 'var(--subTitleFontSize)'
        },
        '& p': {
            color: 'var(--typeLightBlackColor)',
            fontSize: 'var(--titleFontSize)',
            marginBottom: '8px',
        }
    },
    featureBox: {
        marginTop: '15px',
        padding: '15px 15px',
        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        borderRadius: '8px',
    },
    featureText: {
        display: 'flex',
    },
    featureBoxImgWrapper: {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        backgroundColor: 'var(--secondaryColor)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: '15px',
    }
}))

const SipRecommendationsULIP = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch: any = useDispatch();
    // const { investmentType,investmentAmount } = useSelector((state: any) => state.InvestmentTypeReducers)
    const { ulipGenrateApiData, ulipListApiData } = useSelector((state: any) => state.insuranceReducer)
    const [open, setOpen] = React.useState<boolean>(false);
    const [openConfirmation, setOpenConfirmation] = useState<boolean>(false);
    const [knowMoreDialog, setKnowMoreDialog] = useState<boolean>(false)
    const [calenderValue, setCalenderValue] = useState(new Date())
    const [recommendationHeaderSelectArr, setRecommendationHeaderSelectArr] = useState<any[]>([])
    const [recommendationHeaderSelectChoosed, setRecommendationHeaderSelectChoosed] = useState<string>('10')
    const [recommendationHeaderInputFeildShow, setRecommendationHeaderInputFeildShow] = useState<boolean>(false)
    const strCardType:string | null = localStorage.getItem(siteConfig.INVESTMENT_CARD_TYPE)
    // const investmentType = useSelector((state: any) => state.InvestmentTypeReducers)
    // const [headerSelectArr, setHeaderSelectArr] = useState<string[]>([])

    useEffect(() => {
        // if(parseInt(investmentAmount) === 0) navigate('/saveTax')
        const ulipTerm = customParseJSON(localStorage.getItem(lookUpMasterKeys.ULIP_TERM))
        const tempArr: any= [];
        ulipTerm.map((item:any) => {
            tempArr.push(item.value)
        })
        setRecommendationHeaderSelectArr(tempArr)
        const term_id = ulipTerm.filter((item:any) => item.value === parseInt(recommendationHeaderSelectChoosed))
        console.log("lookUPId ulipTerm :", ulipTerm, tempArr,term_id)
        const ulipGenrateBody = {
            amount: localStorage.getItem(siteConfig?.SIP_USER_AMOUNT),
            frequencytype: 0, // 0 for monthly
            term_id: term_id[0].lookup_id //85 lookUPId giving 2
        }
        dispatch(postUlipGenrateApi(ulipGenrateBody))
    }, [localStorage.getItem(siteConfig?.SIP_USER_AMOUNT), recommendationHeaderSelectChoosed])
    
    useEffect(() => {
        ulipGenrateApiData?.recommendation_id && dispatch(getUlipListApi(ulipGenrateApiData?.recommendation_id))
    }, [ulipGenrateApiData])
    
    

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

    const handleChangeSelectEvent = () => {

    }

    const handleChangeInvestmentTypeEvent = () => {

    }

    const handleBoxInputHandleChange = () => {

    }


    ChartJS.register(
        Filler,
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
                display: false,
            },
            title: {
                display: false,
                text: 'Chart.js Line Chart',
            },
        },
    };

    const chartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 'july', "Aug"],
        datasets: [
            {
                label: "First dataset",
                data: [33, 530, 85, 120, 440, 65, 300, 700],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
        ]
    };

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

    const handleKnowMoreDialog = (ulip_id: number) => {
        dispatch(getUlipSchemeDetailApi(ulip_id))
        setKnowMoreDialog(true)
    }

    return (
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
                    
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid xs={12} sm={12} md={12} sx={{ marginTop:{xs:"-50px", sm:"0"} }}>
                    <Box className="BoxMarginLeftRight textBoxAmount">
                    <RecommendationsHeader
                            selectTextLabel='Premium Payment Term'
                            selectArray={recommendationHeaderSelectArr}
                            selectChoosedValue={recommendationHeaderSelectChoosed}
                            changeSelectEvent={(event: SelectChangeEvent) => {
                                setRecommendationHeaderSelectChoosed(event.target.value);
                            }}
                            investmentTypeLabel='Investment Type'
                            investmentType={`${strCardType}`}
                            investmentAmount={`${localStorage.getItem(siteConfig?.SIP_USER_AMOUNT)}`}
                            // changeInvestmentTypeEvent={handleChangeInvestmentTypeEvent}
                            boxInputLabelText='Amount I want to invest monthly'
                            boxInputButtonText='Update Plans'
                            boxInputShow={recommendationHeaderInputFeildShow}
                            boxInputShowHandleChange={() => setRecommendationHeaderInputFeildShow(true)}
                            boxInputHideHandleChange={() => setRecommendationHeaderInputFeildShow(false)}
                        />
                        <Box role="presentation" className="boxBreadcrumb2" sx={{ margin: "7px 0px 7px 0px" }}>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link color="#6495ED" underline="always" href='Home' >
                      <Typography className='burgerText'> Home</Typography>
                    </Link>
                    <Link color="#6495ED" underline="always" onClick={() => navigate('/saveTax')} >
                      <Typography className='burgerText'>Investment</Typography>
                    </Link>
                    <Link underline="always" color="#6495ED"  sx={{ fontSize: "12px", width: "100%" }} onClick={()=>navigate('/startAnSip#contained-buttons')} >
                      <Typography className='burgerText'>Start an SIP</Typography>
                    </Link>
                    <Link underline="none" color="#878782" sx={{ fontSize: "12px", width: "100%" }}>
                      <Typography className='burgerText'>Recommendation</Typography>
                    </Link>
                  </Breadcrumbs>

                


    


                  {/* <Breadcrumbs aria-label="breadcrumb">
                    <Link color="#6495ED" underline="always" href='Home' >
                      <Typography className='burgerText'> Home</Typography>
                    </Link>
                    <Link color="#6495ED" underline="always" onClick={() => navigate('/saveTax')} href='saveTax' >
                      <Typography className='burgerText'> Save Tax</Typography>
                    </Link>
                    <Link underline="none" color="#878782" sx={{ fontSize: "12px", width: "100%" }}>
                      <Typography className='burgerText'>Recommendations ULIP</Typography>
                    </Link>
                  </Breadcrumbs> */}
                </Box>
                        <Box className={classes.cmpHeading}>
                            <Typography component='p'>{ulipListApiData?.length && ulipListApiData.length} ULIP Plan Found</Typography>
                            <Typography component='span'>This plan provide tax benefit of 80C</Typography>
                        </Box>

                            {
                                ulipListApiData?.length > 0 && ulipListApiData?.map((cardItem:getUlipListApiTypes) => (
                                    <Box className={classes.cardStyle} key={cardItem?.ulip_id}>
                                        <Grid container>
                                            <Grid item sm={5} xs={12}>
                                                <Box className={classes.cardStyleCmpName}>
                                                    <Box className={classes.cardImgWrapper}>
                                                        <img style={{ width: '100%', height: 'auto' }} src={cardItem?.providerlogo} alt="" />
                                                    </Box>
                                                    <Box sx={{ margin: { sx: '0px', sm: '0px 8px' } }}>
                                                        <Typography component='p'>{cardItem?.ulipname}</Typography>
                                                        <Typography component='div' className={classes.cardBadge}>Large Cap</Typography>
                                                        <Typography component='div' className={classes.cardBadge}>Equity</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item sm={2} xs={12}>
                                                <Box className={classes.priceBadge} sx={{ margin: { xs: '6px 0px', sm: '0px', } }}>
                                                    <Typography component='div'>₹{numDifferentiation(cardItem?.projectedvalue)}</Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item sm={3} xs={12}>
                                                <Box sx={{ padding: { xs: '0px', sm: '0px 10px', } }}>
                                                    <Box className={classes.cardContent}>
                                                        <Typography component='span'>Top Performing Fund (10 Years)*</Typography>
                                                        <Typography component='p'>{cardItem?.topreturn}% Return</Typography>
                                                    </Box>
                                                    <Box className={classes.cardContent}>
                                                        <Typography component='span'>Invested Value</Typography>
                                                        <Typography component='p'>₹{numDifferentiation(cardItem?.investedvalue)} </Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                            <Grid item sm={2} xs={12}>
                                                <Box>
                                                    <Box className={classes.cardContent}>
                                                        <Typography component='span'>Life Cover</Typography>
                                                        <Typography component='p'>₹{numDifferentiation(cardItem?.lifecover)}</Typography>
                                                    </Box>
                                                    <Box className={classes.cardContent}>
                                                        <Typography component='span'>Tax Saving on Investment</Typography>
                                                        <Typography component='p'>₹{cardItem?.taxsavingoninvestment} {'Every Month'}</Typography>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                        <Box>
                                            <Box className={classes.btnGroup}>
                                                <Button variant="contained" onClick={() => handleKnowMoreDialog(cardItem?.ulip_id)} sx={{ width: { xs: '100%', sm: 'auto', }, margin: { xs: '6px 0px !important', sm: '0px 8px !important', } }}>
                                                    <HelpOutlineOutlinedIcon sx={{ margin: '0px 2px' }} />KNOW MORE
                                                </Button>
                                                <Button variant="contained" sx={{ width: { xs: '100%', sm: 'auto', }, margin: { xs: '6px 0px !important', sm: '0px 8px !important', } }}>
                                                    <LoopOutlinedIcon sx={{ margin: '0px 2px' }} />DOWNLOAD BROCHURE
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))
                            }

                        {/* <Box className={classes.exploreOtherOptionsBtn}>
                            <Button variant="contained" sx={{ width: { xs: '100%', sm: 'auto', }, margin: { xs: '6px 0px !important', sm: '0px 8px !important', } }}>
                                Explore other options
                            </Button>
                        </Box> */}

                        <FooterWithBtn
                            // btnText={investmentType === LUMPSUM ? 'Buy Now' : 'Select ULIP Date'}
                            // btnClick={investmentType === LUMPSUM ? handleBuyNow : handleULIPDate}
                            btnText={'Select ULIP Date'}
                            btnClick={handleULIPDate}
                        />
                    </Box>
                    </Grid>
                </Grid>
        </Grid>
    </Grid>
    </Box>



            {/* <Modal className={classes.dateModal} sx={{ borderRadius: 8 }} open={open} onClose={() => { setOpen(!open) }}>
                <Box alignItems='center' justifyContent='center'>
                    <Typography className={classes.modalText}>Monthly SIP Date</Typography>
                    <Calendar />
                    <Button onClick={() => { setOpen(!open); setOpenConfirmation(!openConfirmation) }} variant='contained' className={classes.modalTextButton} sx={{
                        backgroundColor: 'rgba(123, 123, 157, 0.05)',
                        color: '#7b7b9d'
                    }}>
                        Confirm SIP Date
                    </Button>
                </Box>
            </Modal> */}


            <Dialog open={open} onClose={() => setOpenConfirmation(!open)}>
                {/* <DialogTitle className={classes.modalText}>Set backup account</DialogTitle> */}
                <Typography className={classes.modalText}>Set backup account</Typography>
                <Calendar onChange={handleCalender} value={calenderValue} />
                <Button onClick={() => { setOpen(!open); setOpenConfirmation(!openConfirmation) }} variant='contained' className={classes.modalTextButton} sx={{
                    backgroundColor: 'rgba(123, 123, 157, 0.05)',
                    color: '#7b7b9d'
                }}>
                    Confirm SIP Date
                </Button>
            </Dialog>

            <Dialog  open={openConfirmation} onClose={handleCloseContinuePayment}>
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


            <Dialog onClose={() => setKnowMoreDialog(false)} open={knowMoreDialog}>
                <DialogTitle sx={{ boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)' }}>
                    <Box className={classes.knowMoreDialog}>
                        <Box className={classes.knowMoreDialogImageWrapper}>
                            <img src={process.env.PUBLIC_URL + '/assets/images/investment-cmp-logo.webp'} alt="" />
                        </Box>
                        <Box>
                            <Typography component='span' sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }} >Know More</Typography>
                            <Typography component='p' sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--fontSize14)' }} >Bajaj Allianz Future Gain</Typography>
                        </Box>
                        <CloseOutlinedIcon
                            onClick={() => setKnowMoreDialog(false)}
                            sx={{ position: 'absolute', right: '0px', top: '0px', cursor: 'pointer', color: '#d1d6dd' }}
                        />
                    </Box>
                </DialogTitle>
                <DialogContent className='large-2'>
                    <Box className={classes.chartBox}>
                        <Typography component='p' sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--fontSize14)', fontWeight: 500, }} >Fund Performance</Typography>
                        <LineChart optionsValues={chartOptions} dataValues={chartData} />

                        <Box className={classes.chartCmpName}>
                            <Typography component='p' sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)', fontWeight: 500, }} >BAJAJ</Typography>
                            <Typography component='b' sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--titleFontSize)', fontWeight: 500, }} >14.38%</Typography>
                            <Typography component='span' sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--subTitleFontSize)', }} >in 1 Year</Typography>
                        </Box>
                    </Box>

                    <Box className={classes.cmpInvestmentDetail}>
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography component='span'>Investment Term</Typography>
                                        <Typography component='p'>5 Years</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography component='span'>Top Performing Fund (10 Years)*</Typography>
                                        <Typography component='p'>14.38% Return</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography component='span'>Tax Saving on Investment</Typography>
                                        <Typography component='p'>₹15,000 Every Year</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography component='span'>Investment Type</Typography>
                                        <Typography component='p'>₹7,200 pm</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography component='span'>Life Cover</Typography>
                                        <Typography component='p'>₹5 Lac</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography component='span'>Tax Saving on Maturity</Typography>
                                        <Typography component='p'>₹1.5 Lac</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box className={classes.featureBox}>
                        <Box className={classes.featureText}>
                            <Box className={classes.featureBoxImgWrapper}>
                                <img src={process.env.PUBLIC_URL + '/assets/images/feature-icon.svg'} alt="" />
                            </Box>
                            <Box>
                                <Typography component='p' sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--titleFontSize)', fontWeight: 500, }}>Features</Typography>
                                <Typography component='span' sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }}>A value for money investment option that
                                    match tax saving requirements!</Typography>
                            </Box>
                        </Box>
                        <Box>

                        </Box>
                    </Box>

                </DialogContent>
            </Dialog>

        </Box >
    )
}

export default SipRecommendationsULIP