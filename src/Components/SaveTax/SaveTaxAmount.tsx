import React, { useState, useEffect } from 'react'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import { Grid, Modal, Theme, Typography,Breadcrumbs, Link } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import { Toolbar } from '@mui/material'
import Banner from './Banner'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import FooterBtnWithBox from '../CommonComponents/FooterBtnWithBox';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import Divider from '@mui/material/Divider';
import { useDispatch, useSelector } from 'react-redux';
import {
    SaveTaxInvestmentLumpsumAction,
    SaveTaxInvestmentMonthlyAction,
    SaveTaxInvestmentAmount,
    LUMPSUM,
    MONTHLY,
    saveTaxPercentageAmountAction
} from '../../Store/Duck/InvestmentType';
import { isMultipleofNumber, remainingMonthsFinancialYear } from '../../Utils/globalFunctions';
import Dialog from '@mui/material/Dialog';
import { parse } from 'node:path/win32';


const useStyles: any = makeStyles((theme: Theme) => ({
    main: {
        boxSizing: "border-box",
        backgroundColor: "var(--bgLayoutColor)",
    },
    blueBoxWithoutBorder: {
        backgroundColor: 'var(--ui1Color)',
        padding: '15px',
        margin: '0px -25px',
        '@media(max-width: 500px)': {
            margin: '0px 0px',
        }
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
        boxShadow: 'var(--themeShadow)',
         paddingTop: '15px',
        borderRadius: '8px',
    },
    investmentField: {
        color: 'var(--ui1Color)',
        fontSize: 'var(--titleFontSize)',
        marginBottom: '15px',
        '& p': {
            fontWeight: 500,
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
                },
                '& span': {
                    color: '#8787a299 !important',
                }
            }
        },
        '& svg': {
            color: '#8787a266',
        }
    },
    radioStyle: {
        '& svg': {
            color: 'var(--primaryColor)',
        }
    },
    rupeesIcon: {
        fontSize: '16px !important',
        color: 'var(--typeLightBlackColor)',
    },
    modalTextButton: {
        boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
        backgroundColor: "var(--primaryColor) !important",
        color: 'var(--uiWhite) !important',
    },
    modalText: {
        padding: '20px'
    },
    footerStyle:{
        '&>div':{
            marginTop:'140px',
            '&>div':{
                position: 'static',
            }
        }
    }
}))

type moduleDefaultListObjectType = {
    key: string;
    value: string;
}

const enumAmount = Object.freeze({
    AMOUNT_LIMIT: 150000,
})

function roundToMultipleOf10(value : number) {
    if (value % 10 === 0) {
        return value;
    } else {
        return Math.round(value / 10) * 10;
    }
}

const SaveTaxAmount = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch: any = useDispatch()
    // const {SaveTaxInvestmentLumpsumAction} = useSelector((state:any) => state.SaveTaxInvestmentType)
    // const {SaveTaxInvestmentMonthlyAction} = useSelector((state:any) => state.SaveTaxInvestmentType)
    const { moduleDefaultList, saveTaxCalculatedAmount } = useSelector((state: any) => state.saveTaxReducer)
    const [investmentType, setInvestmentType] = useState<string>(LUMPSUM)
    const [lumpsumAmount, setLumpsumAmount] = useState<any>()
    const [monthlyAmount, setMonthlyAmount] = useState('')
    const [saveTaxPercentageAmount, setSaveTaxPercentageAmount] = useState<string>('');
    const [validationAlertDialog, setValidationAlertDialog] = useState({
        msg: '',
        bool: false,
    })
    const [saveTaxUPTO, setSaveTaxUPTO] = useState<number>(0);
    const [saveTaxUPTOMon, setSaveTaxUPTOMon] = useState<number>(0);
    const [monthlylum, setMonthlyLum] = useState<any>();
    const {state} = useLocation();


    let monthCalAmount: any = 0;
    console.log(lumpsumAmount)
    console.log(saveTaxUPTO)
    console.log(state);

    let GlobalCond:any =  state?.title


    const moduleDefaultListkeys = Object.freeze({
        financial_year_start: 'financial_year_start',
        employee_pf_info: 'employee_pf_info',
        ppf_info: 'ppf_info',
        homeloan_info: 'homeloan_info',
        postoffice_info: 'postoffice_info',
        insurance_info: 'insurance_info',
        taxsaving_fd_info: 'taxsaving_fd_info',
        taxsaving_percentage: 'taxsaving_percentage',
        financial_year_end: 'financial_year_end',
        savetax_amount: 'savetax_amount',
    })

    const monthlyAmount2 = (key: any) => {
        let afterCalc = parseInt(key) / 12
        console.log(key)
        console.log(afterCalc)
        setMonthlyLum(Math.round(afterCalc))


    }


    useEffect(() => {

        if (moduleDefaultList.length === 0 || moduleDefaultList.length === undefined) {
            navigate('/saveTax')
        }
        console.log("moduleDefaultList: ", moduleDefaultList)
        moduleDefaultList.length > 0 && moduleDefaultList.map((item: moduleDefaultListObjectType) => {
            let afterCalc:any = parseInt(item?.value) / 12
            let roundup:any =Math.round(afterCalc)

            if (item?.key === moduleDefaultListkeys?.taxsaving_percentage) setSaveTaxPercentageAmount(item?.value)

            if (item?.key === moduleDefaultListkeys?.savetax_amount)setLumpsumAmount(item?.value) 
            if (item?.key === moduleDefaultListkeys?.savetax_amount)setMonthlyAmount(roundup) 

            if (item?.key === moduleDefaultListkeys?.savetax_amount) {
                setLumpsumAmount(item?.value)
                monthCalAmount = (item?.value)
                console.log(monthCalAmount)
                monthlyAmount2(monthCalAmount)

            }
            // if(item?.key === moduleDefaultListkeys?.savetax_amount) setMonthlyAmount(item?.value)


        })

        if(saveTaxCalculatedAmount){
            setLumpsumAmount(enumAmount.AMOUNT_LIMIT - saveTaxCalculatedAmount)
        }


    }, [moduleDefaultList])


useEffect(() => {
  const temp = lumpsumAmount / remainingMonthsFinancialYear();
  setMonthlyAmount(`${roundToMultipleOf10(temp)}`)
  console.log('lumpsumAmount :', roundToMultipleOf10(temp))
}, [lumpsumAmount])





  useEffect(()=>{
    const temp = parseInt(lumpsumAmount) * parseInt(saveTaxPercentageAmount) / 100;
    const temp2 = parseInt(monthlyAmount) * parseInt(saveTaxPercentageAmount) / 100;
    setSaveTaxUPTO(temp)
    setSaveTaxUPTOMon(temp2)

  })


    useEffect(() => {
        console.log("saveTaxPercentageAmount :", saveTaxPercentageAmount)
    }, [setSaveTaxPercentageAmount])



    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInvestmentType((event.target as HTMLInputElement).value);
    };

    const handleLumpsum = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SaveTaxInvestmentLumpsumAction(event.target.value));
        setLumpsumAmount(event.target.value);
        console.log()

        const temp = parseInt(event.target.value) * parseInt(saveTaxPercentageAmount) / 100;
        setSaveTaxUPTO(temp)
        setMonthlyAmount('')
    };

    const handleMonthly = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SaveTaxInvestmentMonthlyAction(event.target.value));
        setMonthlyAmount(event.target.value);

        const temp = (parseInt(event.target.value) * parseInt(saveTaxPercentageAmount) / 100) / 12;
        setSaveTaxUPTO(temp)
        setLumpsumAmount('')
    };

    const handleNavigationFlow = () => {
        
       
        let breadcrumforInvestmentType:any =""; 

        if(GlobalCond){
            breadcrumforInvestmentType = "taxcansave"
            
        }
        else{
            breadcrumforInvestmentType = "investmenttax"
        } 
        
        if (investmentType === LUMPSUM && parseInt(lumpsumAmount) > 0) {
            if (parseInt(lumpsumAmount) > enumAmount.AMOUNT_LIMIT) {
                setValidationAlertDialog({
                    msg: `Amount should be less than ${enumAmount.AMOUNT_LIMIT}`,
                    bool: true,
                })
                return
            }
            if (isMultipleofNumber(parseInt(lumpsumAmount), 100) === true) {
                dispatch(SaveTaxInvestmentLumpsumAction(LUMPSUM));
                dispatch(SaveTaxInvestmentAmount(lumpsumAmount))
                dispatch(saveTaxPercentageAmountAction(saveTaxUPTO))
                navigate('/saveTax/saveTaxInvestmentType', {
                    state: {
        
                        breadcrumforInvestmentType
                    },
                });
            } else {
                // alert('Enter amount multiple of 100!')
                setValidationAlertDialog({
                    msg: 'Enter amount multiple of 100!',
                    bool: true,
                })
            }
        } else if (investmentType === MONTHLY && parseInt(monthlyAmount) > 0) {
            if (parseInt(monthlyAmount) < 15000) {
                // alert('alert')
                setValidationAlertDialog({
                    msg: 'Amount should be more than 15,000',
                    bool: true,
                })
                return
            }
            dispatch(SaveTaxInvestmentMonthlyAction(MONTHLY));
            dispatch(SaveTaxInvestmentAmount(monthlyAmount))
            dispatch(saveTaxPercentageAmountAction(saveTaxUPTO))
            navigate('/saveTax/saveTaxInvestmentType')
        }
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
                    <Box role="presentation" className="boxBreadcrumb" sx={{ margin: "27px 0px 21px 25px" }}>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link color="#6495ED" underline="always" href='/home' >
                      <Typography className='burgerText'> Home</Typography>
                    </Link>
                    <Link color="#6495ED" underline="always" onClick={() => navigate('/saveTax')} >
                      <Typography className='burgerText'> Save Tax</Typography>
                    </Link>
                    {
                        state?.title ?   <Link color="#6495ED" underline="always" onClick={() => navigate('/saveTax')} >
                        <Typography className='burgerText'>How Much Tax Can I Save</Typography>
                      </Link> : ""
                    }
                    
                    <Link underline="none" color="#878782" sx={{ fontSize: "12px", width: "100%" }}>
                      <Typography className='burgerText'>Amount</Typography>
                    </Link>
                  </Breadcrumbs>
                </Box>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid xs={12} sm={12} md={12}>
                    <Box className="BoxMarginLeftRight textBoxAmount">
                    <Typography component='h4' sx={{margin: { xs: '5px 0px 5px 1px', sm: '-12px 0px 12px 0px' }, position:"relative"}} >My Tax Liability</Typography>
                        <Box className={`${classes.blueBoxWithoutBorder} ${classes.BlueBoxCustom}`}>
                            <Box className={classes.blueBoxIconBox}>
                                <img src={process.env.PUBLIC_URL + '/assets/images/save-tax-wealth.svg'} alt="" />
                            </Box>
                            <Typography component='p'>
                                Amount I want to invest in current F.Y
                                {
                                    moduleDefaultList.length > 0 && moduleDefaultList.map((item: moduleDefaultListObjectType) => (
                                        item?.key === moduleDefaultListkeys?.financial_year_start ? ` ${item?.value} - ` : item?.key === moduleDefaultListkeys?.financial_year_end ? item?.value : null
                                    )
                                    )
                                }
                            </Typography>
                        </Box>

                        <Box className={classes.investmentType} sx={{ width: { sm: '90%', md: '50%' }, marginTop: '30px', margin: { xs: '15px 0px', sm: '0px' } }}>

                            <RadioGroup
                                aria-labelledby="demo-controlled-radio-buttons-group"
                                name="controlled-radio-buttons-group"
                                value={investmentType}
                                onChange={handleRadioChange}
                            // style={{ backgroundColor: '#8787a2' }} 
                            >
                                <Box className={classes.investmentField}>
                                    <Typography component='p'>Lumpsum investment</Typography>

                                    <TextField
                                        onKeyDown={event => {
                                            if (event.key == "." || event.key === "-" || event.key === "e") {
                                                event.preventDefault();
                                            }
                                        }}
                                        label="Enter Amount"
                                        id="outlined-start-adornment"
                                        value={lumpsumAmount}
                                        placeholder="Lumpsum investment"
                                        onChange={handleLumpsum}
                                        type='number'
                                        InputProps={{
                                            endAdornment: <InputAdornment position="start">
                                                <FormControlLabel value={LUMPSUM} control={<Radio className={investmentType === LUMPSUM ? classes.radioStyle : ''} />} label={<Box sx={{color:"#8787a2"}}>Lumpsum</Box>} />
                                            </InputAdornment>,
                                            startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} />,
                                            readOnly: investmentType === LUMPSUM ? false : true,
                                        }}
                                        className={classes.textField}
                                        fullWidth
                                    />
                                    <Typography component='span'>This will be a lumpsum one-time investment for Current F.Y
                                        {
                                            moduleDefaultList.length > 0 && moduleDefaultList.map((item: moduleDefaultListObjectType) => (
                                                item?.key === moduleDefaultListkeys?.financial_year_start ? ` ${item?.value} - ` : item?.key === moduleDefaultListkeys?.financial_year_end ? item?.value : null
                                            )
                                            )
                                        }
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Divider sx={{ width: '30%' }} />
                                    <Typography component='span' sx={{ padding: '0px 15px', color: 'var(--typeIndigoColor)', fontSize: 'var(--titleFontSize)', fontWeight: 500 }}>OR</Typography>
                                    <Divider sx={{ width: '30%' }} />
                                </Box>

                                <Box className={classes.investmentField}>
                                    <Typography component='p'>Monthly investment</Typography>

                                    <TextField
                                    onKeyDown={event => {
                                        if (event.key == "." || event.key === "-" || event.key === "e") {
                                            event.preventDefault();
                                        }
                                    }}
                                        label="Monthly investment"
                                        
                                        id="outlined-start-adornment"
                                        value={monthlyAmount}
                                        onChange={handleMonthly}
                                        placeholder="Monthly investment"
                                        type='number'
                                        InputProps={{
                                            endAdornment: <InputAdornment position="start">
                                                <FormControlLabel value={MONTHLY} control={<Radio className={investmentType === MONTHLY ? classes.radioStyle : ''} />} label={<Box sx={{color:"#8787a2"}}>Monthly</Box>} />
                                            </InputAdornment>,
                                            startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} />,
                                            // readOnly: investmentType === MONTHLY ? false : true,
                                            readOnly: true,
                                        }}
                                        className={classes.textField}
                                        fullWidth
                                    />
                                    <Typography component='span'>This will be a monthly investment for remaining months in
                                        Current F.Y
                                        {
                                            moduleDefaultList.length > 0 && moduleDefaultList.map((item: moduleDefaultListObjectType) => (
                                                item?.key === moduleDefaultListkeys?.financial_year_start ? ` ${item?.value} - ` : item?.key === moduleDefaultListkeys?.financial_year_end ? item?.value : null
                                            )
                                            )
                                        }
                                    </Typography>
                                </Box>
                            </RadioGroup>
                        </Box>

<Box className={classes.footerStyle}>
                        <FooterBtnWithBox
                            boxIcon={<ThumbUpAltOutlinedIcon />}
                            boxText='Great! You`ll save taxes upto'
                            boxAmount={investmentType === LUMPSUM ? `₹${lumpsumAmount === '' ? '0' :saveTaxUPTO }` :  `₹${monthlyAmount === '' ? '0' : saveTaxUPTOMon}`}
                            // boxAmount={`₹ ${saveTaxUPTO}`}
                            btnText='Continue'
                            btnClick={handleNavigationFlow}
                            btnDisable={lumpsumAmount === '' && monthlyAmount === '' ? true : false}
                        />
                    </Box>
                    </Box>
                    </Grid>
                </Grid>
            </Grid>
          </Grid>
          </Box>
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
    )
}

export default SaveTaxAmount
