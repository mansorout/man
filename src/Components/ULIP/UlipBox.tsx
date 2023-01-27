import { SetStateAction, useEffect, useRef, useState } from "react";
import {
    Box,
    Breadcrumbs,
    Divider,
    FormControl,
    FormControlLabel,
    Grid,
    InputAdornment,
    InputLabel,
    Link,
    MenuItem,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Theme,
    Toolbar,
    Typography,
    Dialog,
} from "@mui/material";
import UlipCard from "../../Modules/Cards/ULIP/UlipCard";
import UlipPlanPerformanceCard from "../../Modules/Cards/ULIP/UlipPlanPerformanceCard";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import ULIPFooter from "../../Modules/Cards/ULIP/ULIPFooter";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import "./UlipBox.css";
import FooterWithBtn from "../CommonComponents/FooterWithBtn";
import BannerSlider from "../CommonComponents/BannerSlider";
import Button from '@mui/material/Button';
import {
    SaveTaxInvestmentAmount,
    ULIP_LUMPSUM,
    ULIP_MONTHLY,
    ULIP_INSURANCE_AMOUNT,
    insuranceUlipLumpsumAction,
    insuranceUlipMonthlyAction,
    insuranceUlipAmount,
} from "../../Store/Duck/InvestmentType";
import {
    customParseJSON,
    getLookUpIdWRTModule,
    isMultipleofNumber,
    numDifferentiation,
} from "../../Utils/globalFunctions";
import LineChart from "../CommonComponents/Charts/LineChart";
import { getUlipReturnApi } from "../../Store/Insurance/thunk/insurance-thunk";
import {
    getUlipReturnApiTypes,
    ulipReturnApiParamsTypes,
} from "../../Store/Insurance/constants/types";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";
import { Terminal } from "@mui/icons-material";
import {
    bannerSectionValues,
    defaultListGetInsured,
    lookUpMasterKeys,
    moduleList,
} from "../../Utils/globalConstant";
import { width } from "@mui/system";
import { getDefaultList } from "../../Store/Global/thunk/global-thunk";
import siteConfig from "../../Utils/siteConfig";
import { parse } from "node:path/win32";
// import './UlipBox.css'

const useStyles: any = makeStyles((theme: Theme) => ({
    main: {
        boxSizing: "border-box",
        backgroundColor: "var(--bgLayoutColor)",
    },
    blueBoxWithoutBorder: {
        backgroundColor: "var(--ui1Color)",
        padding: "15px",
        margin: "0px -16px",
    },
    blueBoxIconBox: {
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "var(--bgColor)",
        margin: "0px 15px",
        "@media(max-width: 500px)": {
            width: "45px",
            height: "45px",
        },
    },
    BlueBoxCustom: {
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        "& p": {
            color: "var(--uiWhite)",
            fontSize: "var(--subHeadingFontSize)",
        },
    },
    investmentType: {
        backgroundColor: "var(--uiWhite)",
        // backgroundColor: '#000',
        padding: "15px",
        borderRadius: "8px",
    },
    investmentFieldSelected: {
        color: "var(--ui1Color)",
        fontSize: "var(--titleFontSize)",
        marginBottom: "15px",
        "& p": {
            fontweight: 500,
        },
        "& span": {
            color: "var(--primaryColor)",
            fontSize: "var(--fontSize14)",
        },
    },


    investmentField: {
        color: "var(--ui1Color)",
        fontSize: "var(--titleFontSize)",
        marginBottom: "15px",
        "& p": {
            fontweight: 500,
        },
        "& span": {
            color: "var(--typeIndigoColor)",
            fontSize: "var(--fontSize14)",
        },
    },
    textField: {
        margin: "10px 0px !important",
        display: "block",
        position: "relative",
        "& .MuiOutlinedInput-root.MuiInputBase-fullWidth": {
            "& label": {
                backgroundColor: "rgb(135 135 162 / 20%)",
                position: "absolute",
                right: "0px",
                padding: "7px",
                margin: "0px !important",
                "@media(min-width: 600px)": {
                    width: "140px !important",
                },
            },
        },
    },
    rupeesIcon: {
        fontSize: "16px !important",
        color: "var(--typeLightBlackColor)",
    },
    performanceGraphCard: {
        // "@media(min-width: 912px)": {
        //     width: "69vw !important",
        //   },
        height: "100%",
        boxSizing: "border-box",
        backgroundColor: "var(--uiWhite)",
        borderRadius: "8px",
        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
        padding: "15px",
    },
    
    modalTextButton: {
        boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
        backgroundColor: "var(--primaryColor) !important",
        color: 'var(--uiWhite) !important',
    },
    modalText: {
        padding: '20px'
    },
}));

const enumGraphKeys = Object.freeze({
    INVESTED_VALU : 'Invested Value',
    PROJECTED_VALUE :'Projected Value'
})

const enumDefaultKeysIndex = Object.freeze({
    DEFAULT_LUMPSUM: 0,
    DEFAULT_SIP: 1,
    MIN_LUMPSUM: 2,
    MIN_SIP: 3,
})

const enumDefaultKeys = Object.freeze({
    DEFAULT_LUMPSUM: "default_lumpsum",
    DEFAULT_SIP: "default_sip",
    MIN_LUMPSUM: "min_lumpsum",
    MIN_SIP: "min_sip",
})

const MAX_LENGTH = 10;
const UlipBox = (props: any) => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch: any = useDispatch();
    const refContainer = useRef();
    const timerRef: any = useRef();
    const [years, setYears] = useState("5");
    const [investmentType, setInvestmentType] = useState<string>(ULIP_LUMPSUM);
    const [lumpsumAmount, setLumpsumAmount] = useState(0);
    const [monthlyAmount, setMonthlyAmount] = useState(0);
    const [chartLabels, setChartLabels] = useState<string[] | null>(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);
    const [monthyshowerror, setMonthlyShowError] = useState("");
    const [merror, setMerror] = useState(false);
    const [ulipYears, setUlipYears] = useState<any>([]);
    const [handlelinechart, setHandlelinechart] = useState(0);
    const [greenline, setGreenline] = useState("");
    const [pinkline, setPinkline] = useState("");
    const [defaultData, setDefaultData] = useState<any>([])
    const [chartInvestedAmount, setChartInvestedAmount] = useState<
        number[] | null
    >(null);
    const [chartProjectedAmount, setChartProjectedAmount] = useState<
        number[] | null
    >(null);
    const { ulipReturnApiData } = useSelector(
        (state: any) => state.insuranceReducer
    );
    const { ulipInsuranceType, ulipInsuranceAmount } = useSelector(
        (state: any) => state.InvestmentTypeReducers
    );
    const [validationAlertDialog, setValidationAlertDialog] = useState({
        msg: '',
        bool: false,
    })

    const defaultDataSet = async () => {
        const listArr = customParseJSON(localStorage.getItem(siteConfig.MODULE_LIST))
        const filteredItem = listArr.filter(((item:any) => item?.module === moduleList.GETINSURED))[0]
        const res = await getDefaultList(siteConfig.METADATA_MODULE_LIST+ `/?parentmodule_id=${filteredItem?.module_id}`)

        if(res?.error){
            return
        }
        const {module_id} = res?.data.filter((item:any) => item?.module === defaultListGetInsured.ULIP)[0]
        const tempDefaultData = await getDefaultList(siteConfig.METADATA_MODULE_DEFAULTS_LIST + `/?module_id=${module_id}`)
        console.log("defaultDataSet :", filteredItem,res, module_id, tempDefaultData )
        if(tempDefaultData?.error){
            return
        }
        setDefaultData(tempDefaultData?.data)
    }

    useEffect(() => {
      if(defaultData && defaultData.length){
        setLumpsumAmount(defaultData[enumDefaultKeysIndex.DEFAULT_LUMPSUM].value)
        setMonthlyAmount(defaultData[enumDefaultKeysIndex.DEFAULT_SIP].value)
        dispatch(insuranceUlipLumpsumAction(investmentType));
        handleTimer(insuranceUlipAmount, defaultData[enumDefaultKeysIndex.DEFAULT_LUMPSUM].value);
      }
    }, [defaultData])
    
    
    // const bannersectionArr = customParseJSON(localStorage.getItem(lookUpMasterKeys.INVESTMENT_TYPE))
    // const lookUPIdLUMPSUM = getLookUpIdWRTModule(bannersectionArr, investmentTypeValues.LUMPSUM)

    const handleTimer = (cb: any | void, a: any) => {
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            dispatch(cb(a));
        }, 550);
    };

    
    useEffect(() => {
        defaultDataSet()
        const lookup__id_Arr = customParseJSON(
            localStorage.getItem(lookUpMasterKeys.ULIP_TERM)
        );
        const ulip: any = customParseJSON(localStorage.getItem(lookUpMasterKeys.ULIP_TERM));
        console.log(typeof ulip);
        console.log("ULIP_TERM", ulip);
        // setUlipYears(ulip);
    }, []);
    
    useEffect(() => {
        dispatch(insuranceUlipLumpsumAction(investmentType));
    }, []);
    

    useEffect(() => {
        const urlTemp: ulipReturnApiParamsTypes = {
            frequencytype: investmentType === ULIP_MONTHLY ? "0" : "1",
            amount: ulipInsuranceAmount,
        };
        console.log(urlTemp);
        
        // dispatch(setUlipReturnSuccessAction(data?.data))
        dispatch(getUlipReturnApi(urlTemp));
    }, [ulipInsuranceAmount]);



    useEffect(() => {

        if (ulipReturnApiData && ulipReturnApiData.length) {

            console.log("labels = ulipReturnApiData :", ulipReturnApiData?.filter((item: any) => item?.years >= 10))
            const labels = ulipReturnApiData?.filter((item: any) => item?.years >= 10)?.map(
                (item: getUlipReturnApiTypes) => item.years + "Y"
            )
            // const labels = ulipReturnApiData?.map(
            //     (item: getUlipReturnApiTypes) => item.years + "Y"
            // );
            const selectValues = ulipReturnApiData?.filter((item: any) => item?.years >= 10).map(
                (item: getUlipReturnApiTypes) => item.years
            );
            const investedamount = ulipReturnApiData?.filter((item: any) => item?.years >= 10).map(
                (item: getUlipReturnApiTypes) => item.investedamount
            );
            const projectedamount = ulipReturnApiData?.filter((item: any) => item?.years >= 10).map(
                (item: getUlipReturnApiTypes) => item.projectedamount
            );

            setChartLabels(labels);
            setUlipYears(selectValues)
            setChartInvestedAmount(investedamount);
            setChartProjectedAmount(projectedamount);

            setGreenline(investedamount[0]);
            setPinkline(projectedamount[0]);
            localStorage.getItem(ulipReturnApiData);
            console.log(ulipReturnApiData);
        }
    }, [ulipReturnApiData]);

    const filterChartData = (arr: any[]) => {
        return arr.filter((item: any) =>
          item?.years < 5 ?
            item?.years % 2 !== 0
            :
            item?.years % 5 === 0
        )
      }


    const getfilterInvetedAmount = () => {
        if(ulipReturnApiData && ulipReturnApiData?.length){
           return ulipReturnApiData?.filter((item:any) => item?.years >= 10).map(
                (item: getUlipReturnApiTypes) => item.investedamount
            );
        }
    }

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("handleRadioChange :",(event.target as HTMLInputElement).value)
        setInvestmentType((event.target as HTMLInputElement).value);
        if((event.target as HTMLInputElement).value === ULIP_LUMPSUM) {
            // setLumpsumAmount(0)
            
            handleTimer(insuranceUlipLumpsumAction, (event.target as HTMLInputElement).value);
        handleTimer(insuranceUlipAmount, lumpsumAmount);
        }else{
            // setMonthlyAmount(0)
        handleTimer(insuranceUlipMonthlyAction, (event.target as HTMLInputElement).value);
        handleTimer(insuranceUlipAmount, monthlyAmount);
        } 
    };

    const handleLumpsum = (event: any) => {
        dispatch(insuranceUlipLumpsumAction(investmentType));
        // dispatch(insuranceUlipAmount(event.target.value));
        handleTimer(insuranceUlipAmount, event.target.value);
        let conNumber = Number(event.target.value);
        setLumpsumAmount(conNumber);
        console.log(Number(conNumber));
        console.log("typeof conNumber:", defaultData);
        if (conNumber < defaultData[enumDefaultKeysIndex.MIN_LUMPSUM].value) {
            setErrorMessage(`please fill min. ${defaultData[enumDefaultKeysIndex.MIN_LUMPSUM].value} amount`);
            setError(true);
        } else {
            setErrorMessage("");
            setError(false);
        }
    };
    const handleMonthly = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(insuranceUlipMonthlyAction(investmentType));
        dispatch(insuranceUlipAmount(event.target.value));
        // handleTimer(insuranceUlipMonthlyAction, event.target.value);
        let monNumber = Number(event.target.value);
        setMonthlyAmount(monNumber);
        console.log(Number(monNumber));
        console.log(typeof monNumber);
        if (monNumber <  defaultData[enumDefaultKeysIndex.MIN_SIP].value) {
            setMonthlyShowError(`please fill min. ${defaultData[enumDefaultKeysIndex.MIN_SIP].value} amount`);
            setMerror(true);
        } else {
            setMonthlyShowError("");
            setMerror(false);
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

    
    

    const style = {
        main: {
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
            height: "100vh",
        } as React.CSSProperties,
    };

    const chartOptions = {
        responsive: true,
        scales: {
          x: {
            grid: {
              display: false,
            },
            ticks: {
              display: true //this will remove only the label
          }
          },
          y: {
            border: {
              color: '#fff'
            },
            grid: {
              display: false,
            },
            ticks: {
              display: false //this will remove only the label
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
          // 'dataset.maxBarThickness': 5,
          },
        },
        plugins: {
            legend: {
                position: "bottom" as const,
                display: true,
            },
           
        },
    };

    const chartData = {
        labels: chartLabels,
        datasets: [
            // {
            //     label: "Invested Value",
            //     data: chartInvestedAmount,
            //     fill: true,
            //     backgroundColor: "rgba(75,192,192,0.2)",
            //     borderColor: "rgba(75,192,192,1)",
            // },
            {
                label: "Projected Value",
                data: chartProjectedAmount,
                fill: true,
                borderColor: "#742774",
            },
        ],
    };

    console.log(chartData?.datasets);

    const handleNavigationFlow = () => {
        if (investmentType === ULIP_LUMPSUM && lumpsumAmount > 0) {
            if (isMultipleofNumber(lumpsumAmount, 100) === true) {
                dispatch(insuranceUlipLumpsumAction(ULIP_LUMPSUM));
                dispatch(SaveTaxInvestmentAmount(lumpsumAmount));
                navigate("/ulip/recommendations");
            } else {
                // alert("Enter amount multiple of 100!");
                setValidationAlertDialog({
                    msg: 'Enter amount multiple of 100!',
                    bool: true,
                })
            }
        } else if (investmentType === ULIP_MONTHLY && monthlyAmount > 0) {
            dispatch(insuranceUlipMonthlyAction(ULIP_MONTHLY));
            dispatch(SaveTaxInvestmentAmount(monthlyAmount));
            navigate("/ulip/recommendations");
            // navigate('/saveTax/saveTaxInvestmentType')
        }
    };
    const handleYear = (e: { target: { value: SetStateAction<string> } }) => {
        setYears(e.target.value);

        const filteredItem = ulipReturnApiData?.filter((item : any) => item.years === e.target.value)

        setGreenline(filteredItem[0].investedamount);
        setPinkline(filteredItem[0].projectedamount);
        console.log("years value :", e.target.value, ulipReturnApiData, filteredItem)
    };
    const hadleLineChart = (e: any,) => {
        
        const filteredItem = ulipReturnApiData?.filter((item:any) => item?.projectedamount === e?.value)[0]
        console.log('lineLabel :',e, ulipReturnApiData, filteredItem)

        setGreenline(filteredItem?.investedamount);
        setPinkline(filteredItem?.projectedamount);
        // if(e?.lineLabel === enumGraphKeys.INVESTED_VALU){
        // }else{
        // }
        setHandlelinechart(handlelinechart);
    };

    return (

        <Box style={{ width: "100vw" }}>
            <Navbar />
            
            <Box sx={{ width: "100%", }}>
                <Grid container spacing={0}>
                    <Grid item xs={0} sm={1} md={2}>
                        <Toolbar />
                        <Sidebar />
                    </Grid>
                    <Grid sx={{ height: "100vh", padding: 0, boxSizing: "border-box", overflow: "scroll",backgroundColor: "var(--bgLayoutColor)"  }} xs={12} sm={11} md={10}>
                        <Grid container>
                            <Grid xs={12} sm={12} md={12}>
                                <Toolbar />

                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid xs={12} sm={12} md={12} sx={{ marginTop: { xs: "-50px", sm: "0" } }}>
                                <Box className="BoxMarginLeftRight">
                                    {/* <RecommendationsELSSHeader /> */}

                                    <Box role="presentation" className="boxBreadcrumb2" sx={{ margin: "7px 0px 7px 0px" }}>
                                        <Breadcrumbs aria-label="breadcrumb">
                                            <Link color="#6495ED" underline="always" href='/home' >
                                                <Typography className='burgerText'> Home</Typography>
                                            </Link>
                                            <Link color="#6495ED" underline="always" onClick={() => navigate('/ulip/home')}>
                                                <Typography className='burgerText'>Get Insured</Typography>
                                            </Link>
                                            <Link underline="none" color="#878782" sx={{ fontSize: "12px", width: "100%" }}>
                                                <Typography className='burgerText'>ULIP</Typography>
                                            </Link>
                                        </Breadcrumbs>
                                    </Box>

                                    <Grid container item sx={{ overflow: "scroll" }} xs={12}>
                                        <Grid
                                            container
                                            item
                                            className="headerulipbox"
                                            spacing={2}
                                            xs={12}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "flex-start",
                                            }}
                                        >
                                            <Grid item xs={12} md={6} className="Ulippaddingleft" >
                                                <div className="Ulippaddingleft">
                                                    <Box
                                                        className={classes.investmentType}
                                                        sx={{
                                                            display: "flex",
                                                            flexDirection: "column",
                                                            gap: "20px",
                                                            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                                                            backgroundColor: "#fff",
                                                        }}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                fontSize: "18px",
                                                                fontWeight: 500,
                                                                color: "#3c3e42",
                                                            }}
                                                        >
                                                            ULIP
                                                        </Typography>

                                                        <RadioGroup
                                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                                            name="controlled-radio-buttons-group"
                                                            value={investmentType}
                                                            onChange={handleRadioChange}
                                                        >
                                                            <Box
                                                                className={
                                                                    investmentType === ULIP_MONTHLY
                                                                        ? classes.investmentField
                                                                        : classes.investmentFieldSelected
                                                                }
                                                            >
                                                                <div className="M_stylfe_textfield">
                                                                    <TextField
                                                                        error={error}
                                                                        label="I want to invest"
                                                                        id="outlined-start-adornment"
                                                                        value={lumpsumAmount}
                                                                        onChange={handleLumpsum}
                                                                        helperText={errorMessage}
                                                                        onKeyPress={(e) =>
                                                                            /[^(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$]$/.test(
                                                                                e.key
                                                                            ) && e.preventDefault()
                                                                        }
                                                                        InputProps={{
                                                                            endAdornment: (
                                                                                <InputAdornment position="start">
                                                                                    <FormControlLabel
                                                                                        value={ULIP_LUMPSUM}
                                                                                        control={<Radio />}
                                                                                        label="Annually"
                                                                                    />
                                                                                </InputAdornment>
                                                                            ),
                                                                            startAdornment: (
                                                                                <CurrencyRupeeIcon
                                                                                    className={classes.rupeesIcon}
                                                                                />
                                                                            ),
                                                                            readOnly:
                                                                                investmentType === ULIP_LUMPSUM
                                                                                    ? false
                                                                                    : true,
                                                                        }}
                                                                        className={classes.textField}
                                                                        fullWidth
                                                                    />
                                                                </div>

                                                            </Box>

                                                            <Box
                                                                sx={{
                                                                    display: "flex",
                                                                    justifyContent: "center",
                                                                    alignItems: "center",


                                                                }}
                                                                className="OR_style"
                                                            >
                                                                <Divider sx={{ width: "30%" }} />
                                                                <Typography
                                                                    component="span"
                                                                    sx={{
                                                                        padding: "0px 15px",
                                                                        color: "var(--typeIndigoColor)",
                                                                        fontSize: "var(--titleFontSize)",
                                                                    }}
                                                                >
                                                                    OR
                                                                </Typography>
                                                                <Divider sx={{ width: "30%" }} />
                                                            </Box>

                                                            <Box
                                                                className={
                                                                    investmentType === ULIP_LUMPSUM
                                                                        ? classes.investmentField
                                                                        : classes.investmentFieldSelected
                                                                }

                                                            >
                                                                <div className="upperStyle">
                                                                    <TextField
                                                                        label="I want to invest"
                                                                        id="outlined-start-adornment"
                                                                        value={monthlyAmount}
                                                                        error={merror}
                                                                        helperText={monthyshowerror}
                                                                        onChange={handleMonthly}
                                                                        InputProps={{
                                                                            endAdornment: (
                                                                                <InputAdornment position="start">
                                                                                    <FormControlLabel
                                                                                        value={ULIP_MONTHLY}
                                                                                        control={<Radio />}
                                                                                        label={<Box sx={{ paddingRight: "11px" }}>Monthly</Box>}

                                                                                    />
                                                                                </InputAdornment>
                                                                            ),
                                                                            startAdornment: (
                                                                                <CurrencyRupeeIcon
                                                                                    className={classes.rupeesIcon}
                                                                                />
                                                                            ),
                                                                            readOnly:
                                                                                investmentType === ULIP_MONTHLY
                                                                                    ? false
                                                                                    : true,
                                                                        }}
                                                                        className={classes.textField}
                                                                        fullWidth
                                                                    />
                                                                </div>

                                                            </Box>
                                                        </RadioGroup>
                                                        {/* <FormControl fullWidth
                                                            className="MultiUpperStyle"
                                                        >
                                                            <InputLabel id="demo-simple-select-label">
                                                                For next
                                                            </InputLabel>
                                                            <Select
                                                                labelId="demo-simple-select-label"
                                                                id="demo-simple-select"
                                                                value={years || ulipYears[0] + 'Years'}
                                                                label="For next"
                                                                onChange={handleYear}
                                                            >
                                                                {ulipYears.map((item: any) => {
                                                                    return (
                                                                        <MenuItem value={item}>
                                                                            {item} Year
                                                                        </MenuItem>
                                                                    );
                                                                })}
                                                            </Select>
                                                        </FormControl> */}
                                                    </Box>
                                                </div>

                                            </Grid>
                                            <Grid
                                                item
                                                xs={12}
                                                md={6}
                                                style={{}}
                                                className="Ulippaddingright"
                                            >
                                                {/* <UlipPlanPerformanceCard /> */}
                                                <Box className={classes.performanceGraphCard}>
                                                    <Typography
                                                        component="p"
                                                        sx={{
                                                            paddingBottom: "10px",
                                                            color: "var(--typeLightBlackColor)",
                                                            fontSize: "var(--titleFontSize)",
                                                            fontWeight: 500,
                                                        }}
                                                    >
                                                        ULIP Plan Performance
                                                    </Typography>
                                                    <LineChart
                                                        optionsValues={chartOptions}
                                                        dataValues={chartData}
                                                        onClick={hadleLineChart}
                                                    />
                                                    <Box
                                                        sx={{
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                        }}
                                                    >
                                                        <Box>
                                                            <Typography
                                                                component="p"
                                                                sx={{
                                                                    paddingBottom: "10px",
                                                                    color: "var(--typeIndigoColor)",
                                                                    fontSize: "var(--fontSize14)",
                                                                }}
                                                            >
                                                                Invested Value{" "}
                                                            </Typography>
                                                            <Typography
                                                                component="span"
                                                                sx={{
                                                                    color: "var(--typeLightBlackColor)",
                                                                    fontSize: "var(--subHeadingFontSize)",
                                                                }}
                                                            >
                                                                ₹{numDifferentiation(parseInt(greenline))}
                                                            </Typography>
                                                        </Box>
                                                        <Box>
                                                            <Typography
                                                                component="p"
                                                                sx={{
                                                                    paddingBottom: "10px",
                                                                    color: "var(--typeIndigoColor)",
                                                                    fontSize: "var(--fontSize14)",
                                                                }}
                                                            >
                                                                Projected Value
                                                            </Typography>
                                                            <Typography
                                                                component="span"
                                                                sx={{
                                                                    color: "var(--primaryColor)",
                                                                    fontSize: "var(--subHeadingFontSize)",
                                                                }}
                                                            >
                                                                ₹{numDifferentiation(parseInt(pinkline))}{" "}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                    </Grid>


                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>


            <FooterWithBtn
                btnText="Show Me Recommendations"
                btnDisable={lumpsumAmount < 5000 && monthlyAmount < 1000 ? true : false}
                btnClick={handleNavigationFlow}
            />

<Dialog open={validationAlertDialog.bool} onClose={() => setValidationAlertDialog({ ...validationAlertDialog, bool: false })}>
                {/* <DialogTitle className={classes.modalText}>Set backup account</DialogTitle> */}
                <Typography className={classes.modalText}>{validationAlertDialog.msg}</Typography>
                <Button onClick={() => setValidationAlertDialog({ ...validationAlertDialog, bool: false })} variant='contained' className={classes.modalTextButton} sx={{
                    backgroundColor: 'var(--primaryColor)',
                    color: '#7b7b9d'
                }}>
                    OK
                </Button>
            </Dialog>

        </Box >



    );
};

export default UlipBox;
// div#myRedDIV {order: 2;}
// div#myBlueDIV {order: 4;}
// div#myGreenDIV {order: 3;}
// div#myPinkDIV {order: 1;}