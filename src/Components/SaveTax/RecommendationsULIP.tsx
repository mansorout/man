import React, { useState, useEffect } from 'react'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import { Grid, Modal, Theme, Typography } from '@mui/material'
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
} from '../../Store/Duck/SaveTaxInvestmentType'
import { getDataSaveTaxListApi } from '../../Store/Save Tax/thunk/save-tax-thunk';
import { lookUpMasterKeys, bannerSectionValues } from '../../Utils/globalConstant';
import { customParseJSON, getLookUpIdWRTModule } from '../../Utils/globalFunctions';


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

const RecommendationsULIP = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch: any = useDispatch();
    const [open, setOpen] = React.useState<boolean>(false);
    const [openConfirmation, setOpenConfirmation] = useState<boolean>(false);
    const [knowMoreDialog, setKnowMoreDialog] = useState<boolean>(false)
    const { investmentType,investmentAmount } = useSelector((state: any) => state.SaveTaxInvestmentType)
    const [calenderValue, setCalenderValue] = useState(new Date())
    const [recommendationHeaderSelectArr, setRecommendationHeaderSelectArr] = useState<string[]>(['5','10','15','20'])
    const [recommendationHeaderSelectChoosed, setRecommendationHeaderSelectChoosed] = useState<string>('')
    const [recommendationHeaderInputFeildShow, setRecommendationHeaderInputFeildShow] = useState<boolean>(false)

    // const investmentType = useSelector((state: any) => state.SaveTaxInvestmentType)
    // const [headerSelectArr, setHeaderSelectArr] = useState<string[]>([])

    useEffect(() => {
        const bannersectionArr = customParseJSON(localStorage.getItem(lookUpMasterKeys.BANNER_SECTION))
        const lookUPId = getLookUpIdWRTModule(bannersectionArr, bannerSectionValues.SAVE_TAX)
        const temp = {
            investmenttype_id: lookUPId,
            amount: parseInt(investmentAmount),
        }
        dispatch(getDataSaveTaxListApi(temp))
    }, [])
    

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

    return (
        <Box style={{ width: "100vw" }}>
            <Navbar />
            <Box className={classes.main}>
                <Toolbar />
                <Sidebar />
                <Grid container>
                    <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '85px !important', md: '245px !important', marginTop: '-15px', }, }} item xs={12}>
                        <RecommendationsHeader
                            selectTextLabel='Premium Payment Term'
                            selectArray={recommendationHeaderSelectArr}
                            selectChoosedValue={recommendationHeaderSelectChoosed}
                            changeSelectEvent={(event: SelectChangeEvent) => {
                                setRecommendationHeaderSelectChoosed(event.target.value);
                            }}
                            investmentTypeLabel='Investment Type'
                            // changeInvestmentTypeEvent={handleChangeInvestmentTypeEvent}
                            boxInputLabelText='Amount I want to invest monthly'
                            boxInputButtonText='Update Plans'
                            boxInputShow={recommendationHeaderInputFeildShow}
                            boxInputShowHandleChange={() => setRecommendationHeaderInputFeildShow(true)}
                            boxInputHideHandleChange={() => setRecommendationHeaderInputFeildShow(false)}
                        />
                        <Box className={classes.cmpHeading}>
                            <Typography component='p'>1 ULIP Plan Found</Typography>
                            <Typography component='span'>This plan provide tax benefit of 80C</Typography>
                        </Box>

                        <Box className={classes.cardStyle}>
                            <Grid container>
                                <Grid item sm={5} xs={12}>
                                    <Box className={classes.cardStyleCmpName}>
                                        <Box className={classes.cardImgWrapper}>
                                            <img style={{ width: '100%', height: 'auto' }} src={process.env.PUBLIC_URL + '/assets/images/build_wealth.svg'} alt="" />
                                        </Box>
                                        <Box sx={{ margin: { sx: '0px', sm: '0px 8px' } }}>
                                            <Typography component='p'>Bajaj Allianz Future Gain</Typography>
                                            <Typography component='div' className={classes.cardBadge}>Large Cap</Typography>
                                            <Typography component='div' className={classes.cardBadge}>Equity</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item sm={2} xs={12}>
                                    <Box className={classes.priceBadge} sx={{ margin: { xs: '6px 0px', sm: '0px', } }}>
                                        <Typography component='div'>₹6.5 lacs</Typography>
                                    </Box>
                                </Grid>
                                <Grid item sm={3} xs={12}>
                                    <Box sx={{ padding: { xs: '0px', sm: '0px 10px', } }}>
                                        <Box className={classes.cardContent}>
                                            <Typography component='span'>Top Performing Fund (10 Years)*</Typography>
                                            <Typography component='p'>14.38% Return</Typography>
                                        </Box>
                                        <Box className={classes.cardContent}>
                                            <Typography component='span'>Tax Saving on Investment</Typography>
                                            <Typography component='p'>₹15,000 Every Year</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item sm={2} xs={12}>
                                    <Box>
                                        <Box className={classes.cardContent}>
                                            <Typography component='span'>Life Cover</Typography>
                                            <Typography component='p'>₹5 Lac</Typography>
                                        </Box>
                                        <Box className={classes.cardContent}>
                                            <Typography component='span'>Tax Saving on Maturity</Typography>
                                            <Typography component='p'>₹1.5 Lac</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                            <Box>
                                <Box className={classes.btnGroup}>
                                    <Button variant="contained" onClick={() => setKnowMoreDialog(true)} sx={{ width: { xs: '100%', sm: 'auto', }, margin: { xs: '6px 0px !important', sm: '0px 8px !important', } }}>
                                        <HelpOutlineOutlinedIcon sx={{ margin: '0px 2px' }} />KNOW MORE
                                    </Button>
                                    <Button variant="contained" sx={{ width: { xs: '100%', sm: 'auto', }, margin: { xs: '6px 0px !important', sm: '0px 8px !important', } }}>
                                        <LoopOutlinedIcon sx={{ margin: '0px 2px' }} />DOWNLOAD BROCHURE
                                    </Button>
                                </Box>
                            </Box>
                        </Box>

                        {/* <Box className={classes.exploreOtherOptionsBtn}>
                            <Button variant="contained" sx={{ width: { xs: '100%', sm: 'auto', }, margin: { xs: '6px 0px !important', sm: '0px 8px !important', } }}>
                                Explore other options
                            </Button>
                        </Box> */}

                        <FooterWithBtn
                            btnText={investmentType === LUMPSUM ? 'Buy Now' : 'Select ULIP Date'}
                            btnClick={investmentType === LUMPSUM ? handleBuyNow : handleULIPDate}
                        />
                    </Grid>
                </Grid >
            </Box >



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
                <DialogContent>
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

export default RecommendationsULIP