import { SetStateAction, useEffect, useRef, useState } from "react";
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
import { customParseJSON, getLookUpIdWRTModule, isMultipleofNumber } from '../../Utils/globalFunctions'
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
import { Terminal } from "@mui/icons-material";
import { bannerSectionValues, lookUpMasterKeys } from "../../Utils/globalConstant";



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

const enumLabels = {
    INVESTED_VALUE:'Invested Value',
    PROJECTED_VALUE:'Projected Value',
}

const MAX_LENGTH = 10;
const UlipBox = (props:any) => {

    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch: any = useDispatch()
    const refContainer = useRef();
    const timerRef: any = useRef();
    const [years, setYears] = useState('5');
    const [investmentType, setInvestmentType] = useState<string>(ULIP_LUMPSUM)
    const [lumpsumAmount, setLumpsumAmount] = useState(0)
    const [monthlyAmount, setMonthlyAmount] = useState(0)
    const [chartLabels, setChartLabels] = useState<string[] | null>(null)
    const [chartInvestedAmount, setChartInvestedAmount] = useState<number[] | null>(null)
    const [chartProjectedAmount, setChartProjectedAmount] = useState<number[] | null>(null)
    const { ulipReturnApiData } = useSelector((state: any) => state.insuranceReducer)
    const { ulipInsuranceType, ulipInsuranceAmount } = useSelector((state: any) => state.InvestmentTypeReducers)
    const [errorMessage, setErrorMessage] = useState("")
    const [error,setError] = useState(false)
    const [monthyshowerror, setMonthlyShowError] = useState("")
    const [merror,setMerror] = useState(false)
    const [ulipYears,setUlipYears] = useState<any>([])
    const [handlelinechart,setHandlelinechart]= useState(0)
    const [greenline,setGreenline] = useState<any>("")
    const [pinkline,setPinkline] = useState<any>("")

    const handleTimer = (cb: any | void, a: any) => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            dispatch(cb(a));
        }, 550);
    }

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInvestmentType((event.target as HTMLInputElement).value);
        investmentType === ULIP_LUMPSUM ? setLumpsumAmount(0) : setMonthlyAmount(0);
    };

    const handleLumpsum = (event:any) => {
        dispatch(insuranceUlipLumpsumAction(investmentType));
        // dispatch(insuranceUlipAmount(event.target.value));
        handleTimer(insuranceUlipAmount, event.target.value);
        let conNumber = Number(event.target.value)
        setLumpsumAmount(conNumber);
        console.log(Number(conNumber))
        console.log(typeof(conNumber))
        setPinkline(conNumber)
        setGreenline(conNumber)
        if(conNumber < 5000)
        {
          setErrorMessage("please fill min. 5000 amount")
          setError(true)
        }else{
            setErrorMessage("")  
            setError(false)
        }
    };
    const handleMonthly = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(insuranceUlipMonthlyAction(investmentType));
        // dispatch(insuranceUlipAmount(event.target.value));
        handleTimer(insuranceUlipAmount, event.target.value);
        let monNumber = Number(event.target.value)
        setMonthlyAmount(monNumber);
        console.log(Number(monNumber))
        console.log(typeof(monNumber))
        setPinkline(monNumber)
        setGreenline(monNumber)
      if(monNumber < 1000){
        setMonthlyShowError("please fill min. 1000 amount")
        setMerror(true)
      }
      else{
        setMonthlyShowError("")
        setMerror(false)
      }
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
        console.log(urlTemp)
        dispatch(getUlipReturnApi(urlTemp))
    }, [ulipInsuranceAmount])

    useEffect(() => {
        const labels = ulipReturnApiData?.map((item: getUlipReturnApiTypes) => item.years + 'Y')
        const investedamount = ulipReturnApiData?.map((item: getUlipReturnApiTypes) => item.investedamount)
        const projectedamount = ulipReturnApiData?.map((item: getUlipReturnApiTypes) => item.projectedamount)

        setChartLabels(labels)
        setChartInvestedAmount(investedamount)
        setChartProjectedAmount(projectedamount)
        localStorage.getItem(ulipReturnApiData)
        console.log(ulipReturnApiData)
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
                label: enumLabels?.INVESTED_VALUE,
                data: chartInvestedAmount,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: enumLabels?.PROJECTED_VALUE,
                data: chartProjectedAmount,
                fill: true,
                borderColor: "#742774"
            
            }
        ]
    };
    
    console.log(chartData?.datasets)


    const handleNavigationFlow = () => {
        // navigate('/ulip/recommendations')
        if (investmentType === ULIP_LUMPSUM && lumpsumAmount > 0) {
            if (isMultipleofNumber(lumpsumAmount, 100) === true) {
                dispatch(insuranceUlipLumpsumAction(ULIP_LUMPSUM));
                dispatch(SaveTaxInvestmentAmount(lumpsumAmount))
                navigate('/ulip/recommendations')
            } else {
                alert('Enter amount multiple of 100!')
            }
        } else if (investmentType === ULIP_MONTHLY && (monthlyAmount) > 0) {
            dispatch(insuranceUlipMonthlyAction(ULIP_MONTHLY));
            dispatch(SaveTaxInvestmentAmount(monthlyAmount))
            navigate('/ulip/recommendations')
            // navigate('/saveTax/saveTaxInvestmentType')
        }
    }
    const handleYear = (e: { target: { value: SetStateAction<string>; }; })=>{
         setYears(e.target.value)
    }
    useEffect(() => {
        const lookup__id_Arr = customParseJSON(localStorage.getItem(lookUpMasterKeys.ULIP_TERM))
         const ulip:any = customParseJSON(localStorage.getItem("ulip-term"))
         console.log(typeof(ulip))
         console.log(ulip)
         setUlipYears(ulip)
       
    }, [])
    const hadleLineChart=(e:any)=>{
    
        if(e?.lineLabel === enumLabels?.INVESTED_VALUE){
            setGreenline(e.value)
        }else{
            setPinkline(e.value)
        }
      
        console.log(e)
        // value.datasets.map(( item : any)=> 
        // {
        //     return (
        //         console.log(item.label)
                
        //     )
        // } 
        // )
        console.log(greenline)
        // console.log(pinkline)
      
     setHandlelinechart(handlelinechart)
     
   
     
    }
const handleShowhover=(e:any)=>{
console.log(e)
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
                                                                      error={error}
                                                                        label="I want to invest"
                                                                        id="outlined-start-adornment"
                                                                        value={lumpsumAmount}
                                                                        onChange={handleLumpsum}
                                                                        helperText={errorMessage}
                                                                       
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
                                                                        error={merror}
                                                                        helperText={monthyshowerror}
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
                                                                    onChange={handleYear}
                                                                >
                                                                    {ulipYears.map((item:any)=>{
                                                                        return <MenuItem value={item.value}>{item.value} year</MenuItem>
                                                                    })}
                                                                    
                                                                    
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
                                                           onClick={hadleLineChart}
                                                     
                                        
                                                              />
                                                            <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                                                                <Box>
                                                                    <Typography component='p' sx={{ paddingBottom: '10px', color: 'var(--typeIndigoColor)', fontSize: 'var(--fontSize14)', }}>Invested Value   </Typography>
                                                                    <Typography component='span' sx={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--subHeadingFontSize)', }}>₹{greenline}</Typography>
                                                                </Box>
                                                                <Box>
                                                                    <Typography component='p' sx={{ paddingBottom: '10px', color: 'var(--typeIndigoColor)', fontSize: 'var(--fontSize14)', }}>Projected Value</Typography>
                                                                    <Typography component='span' sx={{ color: 'var(--primaryColor)', fontSize: 'var(--subHeadingFontSize)', }}>₹{pinkline} </Typography>
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
                btnDisable={lumpsumAmount < 5000  && monthlyAmount < 1000 ? true : false}
                btnClick={handleNavigationFlow}
            />
        </div >
    )
};

export default UlipBox;
