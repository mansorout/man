import { useEffect, useRef, useState } from "react";
import { Box, Breadcrumbs, Button, Grid, Link, Modal, Toolbar, Typography, Theme, FormControl, FormControlLabel, RadioGroup, DialogContent } from "@mui/material";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import ULIPCoFundCard, { ULIPProp } from "../../Modules/Cards/ULIP/ULIPCoFundCard";
import ULIPRecommendationCard from '../../Modules/Cards/ULIP/ULIPRecommendationCard'
import ULIPHeader from "../../Modules/Cards/ULIP/ULIPHeader";
import ULIPFooter from "../../Modules/Cards/ULIP/ULIPFooter";
import ULIPBlueButton from "../../Modules/Buttons/ULIP/ULIPBlueButton";
import DateConfirmedDialog from "./DateConfirmedDialog";
import ThirdPartyRedirection from "./ThirdPartyRedirection";
import TransactionsDone from "./TransactionsDone";
import ThirdPartyHdfc from "./ThirdPartyHdfc";
import SelectUlipDateButton from "../../Modules/Buttons/ULIP/SelectUlipDateButton";
import CloseIcon from '@mui/icons-material/Close';

import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import '../../Assets/Css/Calendar.css'
import { tick } from "../../Assets";
import { useNavigate } from "react-router-dom";
import FooterWithBtn from "../CommonComponents/FooterWithBtn";
import RecommendationsHeader from '../CommonComponents/RecommendationsHeader';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import {
    LUMPSUM,
    MONTHLY,
    ULIP_LUMPSUM
} from '../../Store/Duck/InvestmentType'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import SearchCmp from "../CommonComponents/SearchCmp";
import { postUlipGenrateApi, getUlipListApi } from "../../Store/Insurance/thunk/insurance-thunk";
import { lookUpMasterKeys, bannerSectionValues } from "../../Utils/globalConstant";
import { customParseJSON, getLookUpIdWRTModule, numDifferentiation } from "../../Utils/globalFunctions";
import { getUlipListApiTypes } from "../../Store/Insurance/constants/types";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import LineChart from '../CommonComponents/Charts/LineChart';
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
import './insurance.css'

const enumActiveScreen = Object.freeze({
    CLOSE_MODAL: 0,
    OPEN_DATE_PICKER_MODAL: 1,
    OPEN_CONFIRMATION_MODAL: 2,
    OPEN_NET_BANKING: 3,
});

const useStyles: any = makeStyles((theme: Theme) => ({
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

type radioTypes = {
    value: number;
    label: string;
}
type sortTypes = {
    value: string;
    label: string;
}

type filterIndexesTypes = {
    key: 'string',
    keyValues: [
        {
            value: number | string,
            label: string
        }
    ]
}

const ULIPRecommendations = () => {
    const classes = useStyles();
    const refContainer = useRef();
    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    const { ulipInsuranceType, ulipInsuranceAmount } = useSelector((state: any) => state.InvestmentTypeReducers)
    const { ulipGenrateApiData, ulipListApiData } = useSelector((state: any) => state.insuranceReducer)
    const [open, setOpen] = useState(false);
    const [knowMoreDialog, setKnowMoreDialog] = useState<boolean>(false)
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [calenderValue, setCalenderValue] = useState(new Date())
    const [activeScreen, setActiveScreen] = useState<number>(enumActiveScreen.CLOSE_MODAL);
    const [value, setValue] = useState(new Date());
    const [openConfirmation, setOpenConfirmation] = useState<boolean>(false);
    const [recommendationHeaderSelectArr, setRecommendationHeaderSelectArr] = useState<any>([])
    const [recommendationHeaderSelectChoosed, setRecommendationHeaderSelectChoosed] = useState<string>('10')
    const [recommendationHeaderInputFeildShow, setRecommendationHeaderInputFeildShow] = useState<boolean>(false)
    const [recommendationHeaderInvestmentAmount, setRecommendationHeaderInvestmentAmount] = useState<string>('')
    const [customSortValue, setCustomSortValue] = useState<string>('second')
    const [policyTermValue, setPolicyTermValue] = useState<number | null>(null)
    const [lifeCoverValue, setLifeCoverValue] = useState<number | null>(null)

    // const [filterIndexes, setFilterIndexes] = useState<any>(
    //     [
    //         {
    //             key: 'Sort',
    //             keyValues: [
    //                 {
    //                     value: 'highToLowReturn',
    //                     label: 'Return - High to Low',
    //                 },
    //                 {
    //                     value: 'highToLowRating',
    //                     label: 'Rating - High to Low',
    //                 },
    //                 {
    //                     value: 'highToLowFundSize',
    //                     label: 'Fund Size - High to Low',
    //                 }
    //             ]
    //         },
    //         {
    //             key: 'Policy Term',
    //             keyValues: [
    //                 {
    //                     value: 5,
    //                     label: '5 Years',
    //                 },
    //                 {
    //                     value: 7,
    //                     label: '7 Years',
    //                 },
    //                 {
    //                     value: 10,
    //                     label: '10 Years',
    //                 },
    //                 {
    //                     value: 15,
    //                     label: '15 Years',
    //                 },
    //             ]
    //         },
    //         {
    //             key: 'Life Cover',
    //             keyValues: [
    //                 {
    //                     value: 500000,
    //                     label: '???5 Lacs',
    //                 },
    //                 {
    //                     value: 1500000,
    //                     label: '???15 Lacs',
    //                 },
    //                 {
    //                     value: 7500000,
    //                     label: '???75 Lacs',
    //                 },
    //                 {
    //                     value: 10000000,
    //                     label: '???1 Crore',
    //                 },
    //             ]
    //         }
    //     ]
    // )
    const ulipData: ULIPProp[] = [
        {
            logo: '/Miraelogo.svg',
            title: 'Mirae Asset Dynamic Bond Fund Direct Growth',
            projectedAmount: 4.75,
            topPerformingFundReturn: 14.38,
            lifeCoverAmount: 5,
            investedValueAmount: 2.5,
            taxSavings: 15000,
        },
        {
            logo: '/Miraelogo.svg',
            title: 'Mirae Asset Dynamic Bond Fund Direct Growth',
            projectedAmount: 4.75,
            topPerformingFundReturn: 14.38,
            lifeCoverAmount: 5,
            investedValueAmount: 2.5,
            taxSavings: 15000,
        },
    ];

    // useEffect(() => {
    //     console.log("ulipInsuranceAmount  :", ulipInsuranceAmount)
    //     if (parseInt(ulipInsuranceAmount) === 0) navigate('/ulip/investoptions')
    // }, [])
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


    useEffect(() => {
        if (parseInt(ulipInsuranceAmount) === 0) navigate('/ulip/investoptions')
        console.log("recommendationHeaderSelectChoosed :", recommendationHeaderSelectChoosed)
        const ulipTerm = customParseJSON(localStorage.getItem(lookUpMasterKeys.ULIP_TERM))
        const tempArr: any = [];
        ulipTerm.map((item: any) => {
            tempArr.push(item.value)
        })
        setRecommendationHeaderSelectArr(tempArr)
        const term_id = ulipTerm.filter((item: any) => item.value === parseInt(recommendationHeaderSelectChoosed))
        console.log("lookUPId ulipTerm :", ulipTerm, tempArr, term_id)
        // const lookUPId = getLookUpIdWRTModule(ulipTerm, bannerSectionValues.SAVE_TAX)
        const ulipGenrateBody = {
            amount: parseInt(ulipInsuranceAmount),
            frequencytype: ulipInsuranceType === ULIP_LUMPSUM ? 1 : 0,
            term_id: term_id[0].lookup_id //85
        }
        dispatch(postUlipGenrateApi(ulipGenrateBody))
    }, [ulipInsuranceAmount, recommendationHeaderSelectChoosed])

    useEffect(() => {
        ulipGenrateApiData?.recommendation_id && dispatch(getUlipListApi(ulipGenrateApiData?.recommendation_id))
    }, [ulipGenrateApiData])


    const style = {
        main: {
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
            height: "100vh",
        } as React.CSSProperties,
        modalText: {
            backgroundColor: '#FFF',
            width: 338,
            textAlign: 'center',
            marginLeft: '1px',
            padding: '5px',
            borderTopRightRadius: 4,
            borderTopLeftRadius: 4,
            fontWeight: '500',
            borderColor: '#fff'
        },
        modalText2: {
            backgroundColor: '#FFF',
            width: 338,
            textAlign: 'center',
            marginLeft: '1px',
            padding: '5px',
            borderTopRightRadius: 4,
            borderTopLeftRadius: 4,
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#6c63ff',
            borderColor: '#fff',
        },
        button: {
        
            height: "48px",
            boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
            backgroundColor: "#23db7b",
            transform: "translate(8px, -23px)",
            color: '#fff',
            width: 350,
            marginTop: 21,
            marginLeft: -8
        },
        buttons: {
            width: "fit-content",
            padding: '10px',
            borderRadius: '20px',
            border: "0px",
            '&:hover': {
                color: "red !important",
                backgoundColor: "red !important"
            }
        },
    };


    const handleULIPDate = () => {
        setOpen(true)
        // setActiveScreen(enumActiveScreen.OPEN_DATE_PICKER_MODAL)
    }

    const handleBuyNow = () => {
        // loading Com and after that payment screen
        navigate('/payusingnetbanking');
    }

    const handleCloseContinuePayment = (
        event: {},
        reason: "backdropClick" | "escapeKeyDown"
    ) => {
        if (reason === "backdropClick") {
            console.log(reason);
        } else {
            setOpenConfirmation(!openConfirmation)
        }
    };


    // const handleSortRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setCustomSortValue(event.target.value);
    //     console.log("sort :", event.target.value)
    // }

    // const handlePolicyTermRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setPolicyTermValue(parseInt(event.target.value));
    //     console.log("policy term :", event.target.value)
    // }
    // const handleLifeCoverRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setLifeCoverValue(parseInt(event.target.value));
    //     console.log("Life cover :", event.target.value)
    // }

    const handleFilterCB = (data: any) => {
        console.log("click value :", data,)
    }

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


    const handleKnowMoreDialog = (ulip_id?: number) => {
        // dispatch(getUlipSchemeDetailApi(ulip_id))
        console.log("Know MOre Acrion")
        setKnowMoreDialog(true)
    }


    return (
        // <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
        <Box style={{ width: "100vw" }} ref={refContainer}>
            <Navbar />
            <Box sx={{ width: "100%" }}>
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

                                    {/* <ULIPHeader /> */}
                                    <RecommendationsHeader
                                        selectTextLabel='Premium Payment Term'
                                        selectArray={recommendationHeaderSelectArr}
                                        selectChoosedValue={recommendationHeaderSelectChoosed}
                                        changeSelectEvent={(event: SelectChangeEvent) => {
                                            setRecommendationHeaderSelectChoosed(event.target.value);
                                        }}
                                        investmentTypeLabel='Investment Type'
                                        investmentType={ulipInsuranceType}
                                        investmentAmount={ulipInsuranceAmount}
                                        // changeInvestmentTypeEvent={handleChangeInvestmentTypeEvent}
                                        boxInputLabelText='Amount I want to invest monthly'
                                        boxInputButtonText='Update Plans'
                                        boxInputShow={recommendationHeaderInputFeildShow}
                                        boxInputShowHandleChange={() => setRecommendationHeaderInputFeildShow(true)}
                                        boxInputHideHandleChange={() => setRecommendationHeaderInputFeildShow(false)}
                                    />
                                  
                                    <Box role="presentation" className="boxBreadcrumb2" sx={{ margin: "7px 0px 7px 0px" }}>
                                        <Breadcrumbs aria-label="breadcrumb">

                                            <Link color="#6c63ff" underline="always" onClick={() => navigate('/insurance')} href='saveTax' >
                                                <Typography className='burgerText'>Get Insured</Typography>
                                            </Link>
                                            <Link onClick={() => navigate('/ulip/investoptions')} underline="always" color="#6c63ff" sx={{ fontSize: "12px", width: "100%" }}>
                                                <Typography className='burgerText'>ULIP</Typography>
                                            </Link>
                                            <Link underline="none" color="#8d8d8d" sx={{ fontSize: "12px", width: "100%" }}>
                                                <Typography className='burgerText'>SprintMoney Recommendation</Typography>
                                            </Link>
                                        </Breadcrumbs>
                                    </Box>

                                    <Box sx={{
                                        padding: 0,
                                        margin: '2.5vw',
                                        fontFamily: 'Roboto',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        gap: '1vw',
                                    }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                                            <Box>
                                                <Typography sx={{
                                                    fontSize: '12px',
                                                    color: '#8787a2',
                                                }}>This plan provide tax benefit of 80C</Typography>
                                              
                                                <Typography sx={{
                                                    fontSize: '18px',
                                                    fontWeight: 500,
                                                    color: '#3c3e42',
                                                }}>{ulipListApiData && ulipListApiData.length} ULIP Plan Found</Typography>
                                            </Box>
                                            {/* <Box>
                                                <SearchCmp
                                                    filtersOptions={filterIndexes}
                                                    // sort={customSort}
                                                    // policyTerm={policyTerm}
                                                    // lifeCover={lifeCover}
                                                    // sortValue={customSortValue}
                                                    // policyTermValue={policyTermValue}
                                                    // lifeCoverValue={lifeCoverValue}
                                                    searchKeysFun={(e) => console.log("search keys : ",e)}
                                                    searchBox={true}
                                                    handleCB={handleFilterCB}
                                                // sortCb={handleSortRadio}
                                                // policyTermCb={handlePolicyTermRadio}
                                                // lifeCoverCb={handleLifeCoverRadio}
                                                />
                                            </Box> */}
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            gap: '1.5vw',
                                        }}>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="female"
                                                    name="radio-buttons-group"
                                                >
                                                    {/* {

                                                                    ulipData?.map(data => <ULIPCoFundCard {...data} />)
                                                                } */}
                                                    {
                                                        ulipListApiData && ulipListApiData.length > 0 && ulipListApiData?.map((cardItem: getUlipListApiTypes) => (
                                                            <ULIPRecommendationCard
                                                                logoUrl={cardItem?.providerlogo}
                                                                companyName={cardItem?.ulipname}
                                                                projectedAmount={numDifferentiation(cardItem?.projectedvalue)}
                                                                topPerformingFund={`${cardItem?.topreturn}`}
                                                                lifeCover={numDifferentiation(cardItem?.lifecover)}
                                                                investedVlaue={numDifferentiation(cardItem?.investedvalue)}
                                                                taxSavingOnInvestment={cardItem?.taxsavingoninvestment + ' Every Year'}
                                                                knowMoreAction={() => handleKnowMoreDialog()}
                                                                downloadBrochuraAction={() => console.log("downloadBrochuraAction Acrion")}
                                                            />
                                                            
                                                        ))
                                                    }
                                                   
                                                </RadioGroup>
                                            </FormControl>
                                        </Box>
                                        {/* <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                            <Button variant="outlined" onClick={() => navigate("/ulip/options")}
                                                style={style.buttons} sx={{
                                                    backgroundColor: '#00b4ff',
                                                }}
                                            
                                                >
                                                <Typography sx={{ color: "white" }}>EXPLORE OTHER OPTIONS</Typography>
                                            </Button>
                                        </Box> */}
                                        {/*
                                                <Button onClick={ handleOpen }>Open dialog</Button>
                                                <ThirdPartyHdfc open={ open } handleClose={ handleClose } />
                                            */}
                                    </Box>


                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <FooterWithBtn
                // btnText='Select ULIP Date'
                // btnClick={() => setActiveScreen(enumActiveScreen.OPEN_DATE_PICKER_MODAL)}
                btnText={'Buy Now'}
                btnClick={handleBuyNow}
            />







            {/* <Modal sx={{ borderRadius: 8 }} open={activeScreen === enumActiveScreen.OPEN_DATE_PICKER_MODAL ? true : false} onClose={() => { setActiveScreen(enumActiveScreen.CLOSE_MODAL) }}>
                <Box alignItems='center' justifyContent='center' sx={{ marginLeft: { sm: '35%', xs: '8%', lg: '40%' }, marginTop: { xs: '50%', lg: '13%', md: '30%' } }}>
                    <Typography sx={style.modalText}>Select Monthly Instalment Date</Typography>
                    <Typography sx={style.modalText2}>{`${value.getDate()}`} of every month</Typography>
                    <Calendar value={value} onChange={setValue} />
                    <Button onClick={() => { setActiveScreen(enumActiveScreen.OPEN_CONFIRMATION_MODAL) }} variant='contained' style={style.button} sx={{
                        backgroundColor: 'rgba(123, 123, 157, 0.05)',
                        color: '#7b7b9d'
                    }}>
                        Confirm ULIP Date
                    </Button>
                </Box>
            </Modal> */}


            {/* <Modal sx={{ borderRadius: 8 }} open={activeScreen === enumActiveScreen.OPEN_CONFIRMATION_MODAL ? true : false} onClose={() => { setActiveScreen(enumActiveScreen.CLOSE_MODAL) }}>
                <>
                    <Box alignItems='center' justifyContent='center' sx={{ marginLeft: { sm: '35%', xs: '8%', lg: '40%' }, marginTop: { xs: '50%', lg: '13%', md: '30%' } }}>
                        <Box sx={{ backgroundColor: '#fff', width: 300, alignItems: 'center', padding: 3, textAlign: 'center' }}>
                            <Box><img style={{ height: 120, width: 120 }} src={tick} /></Box>
                            <Typography sx={{ marginTop: 1, fontWeight: '600' }} >Date confirmed!</Typography>
                            <Typography sx={{
                                marginTop: 1,
                                color: '#7b7b9d',
                                fontSize: '14px',
                                textAlign: 'center',
                            }}>
                                Your monthly ULIP date is {`${value.getDate()}`} of every month
                            </Typography>
                        </Box>
                        <Button onClick={() => { navigate("/ulip/txndone") }} variant='contained' style={style.button} sx={{
                            backgroundColor: 'rgba(123, 123, 157, 0.05)',
                            color: '#7b7b9d',
                            marginLeft: 8
                        }}>
                            Continue to Payment
                        </Button>
                    </Box>
                </>
            </Modal> */}

// date  modalTextButton

            {/* < Dialog onClose={() => setOpenConfirmation(!open)} open={open} >
                <CloseIcon className="closeIconulip" onClick={() => setOpen(false)} />
                <Typography sx={{ textAlign: "center", color: "#1d2634", fontWeight: "500", fontSize: "16px", padding: "7px 0px 5px 0px" }}>Select Monthly Instalment Date</Typography>
                <Calendar onChange={(value: any) => setCalenderValue(value)} value={calenderValue} />

                <Button onClick={() => { setOpen(!open); setOpenConfirmation(!openConfirmation) }} variant='contained' className={classes.modalTextButton} sx={{
                    backgroundColor: 'rgba(123, 123, 157, 0.05)',
                    color: '#7b7b9d'
                }}>
                    Confirm ULIP Date
                </Button>
            </Dialog > */}



// continue to payment dialog:::


            {/* <Dialog open={openConfirmation} onClose={handleCloseContinuePayment}>
                <Box sx={{ backgroundColor: '#fff', maxWidth: 300, alignItems: 'center', padding: 3, textAlign: 'center' }}>
                    <Box><img style={{ height: 'auto', maxWidth: 110 }} src={tick} /></Box>
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






// know more dialog






            < Dialog onClose={() => setKnowMoreDialog(false)} open={knowMoreDialog} >
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
                                        <Typography component='p'>???15,000 Every Year</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Grid container>
                                    <Grid item xs={12}>
                                        <Typography component='span'>Investment Type</Typography>
                                        <Typography component='p'>???7,200 pm</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography component='span'>Life Cover</Typography>
                                        <Typography component='p'>???5 Lac</Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography component='span'>Tax Saving on Maturity</Typography>
                                        <Typography component='p'>???1.5 Lac</Typography>
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
                                <Typography component='span' sx={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }}>A value for money investment option that match tax saving requirements!</Typography>
                            </Box>
                        </Box>
                        <Box>

                        </Box>
                    </Box>

                </DialogContent>
            </Dialog >


        </Box>

    )
};

export default ULIPRecommendations;
