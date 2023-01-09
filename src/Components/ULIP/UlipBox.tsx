import { useEffect, useRef, useState } from "react";
import { Box, Breadcrumbs, Divider, FormControl, FormControlLabel, Grid, InputAdornment, InputLabel, Link, MenuItem, Radio, RadioGroup, Select, TextField, Theme, Toolbar, Typography } from "@mui/material";
import UlipCard from "../../Modules/Cards/ULIP/UlipCard";
import UlipPlanPerformanceCard from "../../Modules/Cards/ULIP/UlipPlanPerformanceCard";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import ULIPFooter from "../../Modules/Cards/ULIP/ULIPFooter";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import './UlipBox.css';
import FooterWithBtn from "../CommonComponents/FooterWithBtn";
import BannerSlider from "../CommonComponents/BannerSlider";
import {
    SaveTaxInvestmentAmount,
    ULIP_LUMPSUM,
    ULIP_MONTHLY,
    ULIP_INSURANCE_AMOUNT,
    insuranceUlipLumpsumAction,
    insuranceUlipMonthlyAction,
    insuranceUlipAmount,
} from '../../Store/Duck/InvestmentType';
import { isMultipleofNumber } from '../../Utils/globalFunctions'
import LineChart from "../CommonComponents/Charts/LineChart";
import { getUlipReturnApi } from "../../Store/Insurance/thunk/insurance-thunk";
import { getUlipReturnApiTypes, ulipReturnApiParamsTypes } from "../../Store/Insurance/constants/types";
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



const useStyles: any = makeStyles((theme: Theme) => ({
    main: {
        boxSizing: "border-box",
        backgroundColor: "var(--bgLayoutColor)",
    },
    blueBoxWithoutBorder: {
        backgroundColor: 'var(--ui1Color)',
        padding: '15px',
        margin: '0px -16px',
    },
    blueBoxIconBox: {
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--bgColor)',
        margin: '0px 15px',
        '@media(max-width: 500px)': {
            width: '45px',
            height: '45px',
        }
    },
    BlueBoxCustom: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        '& p': {
            color: 'var(--uiWhite)',
            fontSize: 'var(--subHeadingFontSize)',
        }
    },
    investmentType: {
        backgroundColor: 'var(--uiWhite)',
        // backgroundColor: '#000',
        padding: '15px',
        borderRadius: '8px',
    },
    investmentFieldSelected: {
        color: 'var(--ui1Color)',
        fontSize: 'var(--titleFontSize)',
        marginBottom: '15px',
        '& p': {
            fontweight: 500,
        },
        '& span': {
            color: 'var(--primaryColor)',
            fontSize: 'var(--fontSize14)',
        },
    },

    investmentField: {
        color: 'var(--ui1Color)',
        fontSize: 'var(--titleFontSize)',
        marginBottom: '15px',
        '& p': {
            fontweight: 500,
        },
        '& span': {
            color: 'var(--typeIndigoColor)',
            fontSize: 'var(--fontSize14)',
        },
    },
    textField: {
        margin: '10px 0px !important',
        display: 'block',
        position: 'relative',
        '& .MuiOutlinedInput-root.MuiInputBase-fullWidth': {
            '& label': {
                backgroundColor: 'rgb(135 135 162 / 20%)',
                position: 'absolute',
                right: '0px',
                padding: '7px',
                margin: '0px !important',
                '@media(min-width: 600px)': {
                    width: '140px !important',
                }
            }
        }
    },
    rupeesIcon: {
        fontSize: '16px !important',
        color: 'var(--typeLightBlackColor)',
    },
    performanceGraphCard: {
        height: '100%',
        boxSizing: 'border-box',
        backgroundColor: 'var(--uiWhite)',
        borderRadius: '8px',
        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        padding: '15px',
    }
}))

const UlipBox = () => {

    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch: any = useDispatch()
    const refContainer = useRef();
    const timerRef: any = useRef();
    const [years, setYears] = useState('5');
    const [investmentType, setInvestmentType] = useState<string>(ULIP_LUMPSUM)
    const [lumpsumAmount, setLumpsumAmount] = useState('')
    const [monthlyAmount, setMonthlyAmount] = useState('')
    const [chartLabels, setChartLabels] = useState<string[] | null>(null)
    const [chartInvestedAmount, setChartInvestedAmount] = useState<number[] | null>(null)
    const [chartProjectedAmount, setChartProjectedAmount] = useState<number[] | null>(null)
    const { ulipReturnApiData } = useSelector((state: any) => state.insuranceReducer)
    const { ulipInsuranceType, ulipInsuranceAmount } = useSelector((state: any) => state.InvestmentTypeReducers)

    const handleTimer = (cb: any | void, a: any) => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            dispatch(cb(a));
        }, 550);
    }

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInvestmentType((event.target as HTMLInputElement).value);
        investmentType === ULIP_LUMPSUM ? setLumpsumAmount('') : setMonthlyAmount('');
    };

    const handleLumpsum = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(insuranceUlipLumpsumAction(investmentType));
        // dispatch(insuranceUlipAmount(event.target.value));
        handleTimer(insuranceUlipAmount, event.target.value);
        setLumpsumAmount(event.target.value);
    };

    const handleMonthly = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(insuranceUlipMonthlyAction(investmentType));
        // dispatch(insuranceUlipAmount(event.target.value));
        handleTimer(insuranceUlipAmount, event.target.value);
        setMonthlyAmount(event.target.value);
    };

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
        dispatch(insuranceUlipLumpsumAction(investmentType))
    }, [])

    useEffect(() => {
        const urlTemp: ulipReturnApiParamsTypes = {
            frequencytype: investmentType === ULIP_MONTHLY ? '0' : '1',
            amount: ulipInsuranceAmount,
        }
        dispatch(getUlipReturnApi(urlTemp))
    }, [ulipInsuranceAmount])

    useEffect(() => {
        const labels = ulipReturnApiData?.map((item: getUlipReturnApiTypes) => item.years + 'Y')
        const investedamount = ulipReturnApiData?.map((item: getUlipReturnApiTypes) => item.investedamount)
        const projectedamount = ulipReturnApiData?.map((item: getUlipReturnApiTypes) => item.projectedamount)

        setChartLabels(labels)
        setChartInvestedAmount(investedamount)
        setChartProjectedAmount(projectedamount)
    }, [ulipReturnApiData])



    const style = {
        main: {
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
            height: "100vh"
        } as React.CSSProperties,
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
                display: true,
            },
            // title: {
            //     display: true,
            //     text: 'Chart.js Line Chart',
            // },
        },
    };

    const chartData = {
        labels: chartLabels,
        datasets: [
            {
                label: "Invested Value",
                data: chartInvestedAmount,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Projected Value",
                data: chartProjectedAmount,
                fill: true,
                borderColor: "#742774"
            }
        ]
    };


    const handleNavigationFlow = () => {
        // navigate('/ulip/recommendations')
        if (investmentType === ULIP_LUMPSUM && parseInt(lumpsumAmount) > 0) {
            if (isMultipleofNumber(parseInt(lumpsumAmount), 100) === true) {
                dispatch(insuranceUlipLumpsumAction(ULIP_LUMPSUM));
                dispatch(SaveTaxInvestmentAmount(lumpsumAmount))
                navigate('/ulip/recommendations')
            } else {
                alert('Enter amount multiple of 100!')
            }
        } else if (investmentType === ULIP_MONTHLY && parseInt(monthlyAmount) > 0) {
            dispatch(insuranceUlipMonthlyAction(ULIP_MONTHLY));
            dispatch(SaveTaxInvestmentAmount(monthlyAmount))
            navigate('/ulip/recommendations')
            // navigate('/saveTax/saveTaxInvestmentType')
        }
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
            <Box style={{ width: "100vw" }} ref={refContainer}>
                <Navbar />
                <Box sx={style.main}>
                    <Toolbar />
                    <Sidebar />
                    <Grid container>
                        <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '85px !important', md: '245px !important' } }} item xs={12}>

                            <div>
                                <Grid item rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    <Grid container spacing={0} >
                                        <Grid container item sx={{ overflow: "scroll" }} xs={12}>

                                            <Box
                                                sx={{
                                                    padding: 0,
                                                    width: "100%",
                                                    margin: '2vw',
                                                    fontFamily: 'Roboto',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center'
                                                }}>
                                                <Breadcrumbs sx={{
                                                    fontSize: '12px',
                                                    color: '#6c63ff',
                                                    marginBottom: '20px',
                                                }}>
                                                    <Link href="/">Home</Link>
                                                    <Link href="/ulip/home">Get Insured</Link>
                                                    <Typography sx={{
                                                        fontSize: '12px',
                                                        color: '#373e42'
                                                    }}>ULIP</Typography>
                                                </Breadcrumbs>

                                                <Grid container item className="header" spacing={2} xs={12} sx={{
                                                    display: 'flex',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'flex-start',
                                                }}>
                                                    <Grid item xs={12} md={6}>
                                                        <Box className={classes.investmentType} sx={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: "20px",
                                                            boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
                                                            backgroundColor: '#fff',
                                                        }}>

                                                            <Typography sx={{
                                                                fontSize: '18px',
                                                                fontWeight: 500,
                                                                color: '#3c3e42',
                                                            }}>ULIP</Typography>

                                                            <RadioGroup
                                                                aria-labelledby="demo-controlled-radio-buttons-group"
                                                                name="controlled-radio-buttons-group"
                                                                value={investmentType}
                                                                onChange={handleRadioChange}
                                                            >
                                                                <Box className={investmentType === ULIP_MONTHLY ? classes.investmentField : classes.investmentFieldSelected}>
                                                                    <TextField
                                                                        label="I want to invest"
                                                                        id="outlined-start-adornment"
                                                                        value={lumpsumAmount}
                                                                        onChange={handleLumpsum}
                                                                        onKeyPress={e => /[^(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$]$/.test(e.key) && e.preventDefault()}
                                                                        InputProps={{
                                                                            endAdornment: <InputAdornment position="start">
                                                                                <FormControlLabel value={ULIP_LUMPSUM} control={<Radio />} label="Lumpsum" />
                                                                            </InputAdornment>,
                                                                            startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} />,
                                                                            readOnly: investmentType === ULIP_LUMPSUM ? false : true,
                                                                        }}
                                                                        className={classes.textField}
                                                                        fullWidth
                                                                    />

                                                                </Box>

                                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Divider sx={{ width: '30%' }} />
                                                                    <Typography component='span' sx={{ padding: '0px 15px', color: 'var(--typeIndigoColor)', fontSize: 'var(--titleFontSize)' }}>OR</Typography>
                                                                    <Divider sx={{ width: '30%' }} />
                                                                </Box>

                                                                <Box className={investmentType === ULIP_LUMPSUM ? classes.investmentField : classes.investmentFieldSelected}>

                                                                    <TextField
                                                                        label="I want to invest"
                                                                        id="outlined-start-adornment"
                                                                        value={monthlyAmount}
                                                                        onChange={handleMonthly}
                                                                        InputProps={{
                                                                            endAdornment: <InputAdornment position="start">
                                                                                <FormControlLabel value={ULIP_MONTHLY} control={<Radio />} label="Monthly" />
                                                                            </InputAdornment>,
                                                                            startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} />,
                                                                            readOnly: investmentType === ULIP_MONTHLY ? false : true,
                                                                        }}
                                                                        className={classes.textField}
                                                                        fullWidth
                                                                    />

                                                                </Box>
                                                            </RadioGroup>
                                                            <FormControl fullWidth>
                                                                <InputLabel id="demo-simple-select-label">For next</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-label"
                                                                    id="demo-simple-select"
                                                                    value={years}
                                                                    label="For next"
                                                                    onChange={(e) => setYears(e.target.value)}
                                                                >
                                                                    <MenuItem value={5}>5 Years</MenuItem>
                                                                    <MenuItem value={10}>10 Years</MenuItem>
                                                                    <MenuItem value={15}>15 Years</MenuItem>
                                                                    <MenuItem value={20}>20 Years</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} md={6} style={{ height: '100%' }}>
                                                        {/* <UlipPlanPerformanceCard /> */}
                                                        <Box className={classes.performanceGraphCard}>
                                                            <Typography component='p' sx={{ paddingBottom: '10px', color: 'var(--typeLightBlackColor)', fontSize: 'var(--titleFontSize)', fontWeight: 500, }}>ULIP Plan Performance</Typography>
                                                            <LineChart
                                                             optionsValues={chartOptions}
                                                              dataValues={chartData}
                                                              onClick={(e) => console.log("click values :", e )}
                                                              />
                                                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                                                <Box>
                                                                    <Typography component='p' sx={{ paddingBottom: '10px', color: 'var(--typeIndigoColor)', fontSize: 'var(--fontSize14)', }}>Invested Value</Typography>
                                                                    <Typography component='span' sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--subHeadingFontSize)', }}>₹2.5 Lac</Typography>
                                                                </Box>
                                                                <Box>
                                                                    <Typography component='p' sx={{ paddingBottom: '10px', color: 'var(--typeIndigoColor)', fontSize: 'var(--fontSize14)', }}>Projected Value</Typography>
                                                                    <Typography component='span' sx={{ color: 'var(--primaryColor)', fontSize: 'var(--subHeadingFontSize)', }}>₹4.75 Lac</Typography>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>

                                    </Grid>
                                </Grid>
                            </div >
                        </Grid>
                    </Grid>
                </Box>


            </Box>
            <FooterWithBtn
                btnText='Show Me Recommendations'
                btnDisable={lumpsumAmount === '' && monthlyAmount === '' ? true : false}
                btnClick={handleNavigationFlow}
            />
        </div >
    )
};

export default UlipBox;
