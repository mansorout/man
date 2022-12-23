import React, { FormEvent, useState,useEffect } from 'react'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import { Toolbar } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import RecommendationsHeader from './RecommendationsHeader';
import Button from '@mui/material/Button';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import FooterWithBtn from '../CommonComponents/FooterWithBtn'
import { fontSize } from '@mui/joy/styles/styleFunctionSx';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import { Formik, useFormik, Form, Field, ErrorMessage,useFormikContext } from 'formik';
import * as Yup from 'yup';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import {getDataSaveTaxCalculateApi} from '../../Store/Save Tax/thunk/save-tax-thunk'
import { useDispatch } from 'react-redux';


const useStyles: any = makeStyles((theme: Theme) => ({
    main: {
        boxSizing: "border-box",
        backgroundColor: "var(--bgLayoutColor)",
    },
    blueBoxWithoutBorder: {
        backgroundColor: 'var(--ui1Color)',
        padding: '15px',
        margin: '15px 0px',
        borderRadius: '10px',
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
    },
    BlueBoxCustom: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    pageHeading: {
        '& p': {
            color: 'var(--typeLightBlackColor)',
            fontSize: 'var(--subHeadingFontSize)',
            fontWeight: 600,
            marginTop: '15px'
        }
    },
    blueBoxContent: {
        color: 'var(--uiWhite)',
        '& span': {
            color: '#fcf4f4'
        },
        '& p': {
            marginBottom: '2rem',
            fontSize: 'var(--subHeadingFontSize)',
        }
    },
    blueBoxCircle: {
        border: '4px solid #91f2c0',
        width: '110px',
        height: '110px',
        padding: '10px',
        boxSizing: 'border-box',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        '& span': {
            color: '#eaeaea',
            fontSize: 'var(--subTitleFontSize)',
        },
        '& p': {
            color: 'var(--uiWhite)',
            fontSize: 'var(--titleFontSize)',
        }
    },
    inputFeildContainer: {
        padding: '15px',
        backgroundColor: 'var(--uiWhite)',
        boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
        '&>span': {
            color: 'var(--typeIndigoColor)',
            fontSize: 'var(--fontSize14)',
        },
        '& input::-webkit-outer-spin-button': {
            WebkitAppearance: 'none',
            '-webkit-appearance': 'none !important',
                margin: '0'
        },
        '& input::-webkit-inner-spin-button':{
            WebkitAppearance: 'none',
            '-webkit-appearance': 'none !important',
                margin: '0'
        }
    },
    inputWrap: {
        marginBottom: '15px',
        '& .MuiFormControl-root.MuiTextField-root': {
            marginTop: '10px',
        }
    },
    lableAndIcon: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& label': {
            color: 'var(--ui1Color)',
            fontSize: 'var(--titleFontSize)',
            fontWeight: 500,
        },
        '& svg': {
            color: '#9995dd',
            cursor: 'pointer',
        }
    },
    popUpBtn: {
        width: '100%',
        backgroundColor: 'var(--primaryColor) !important',
        color: 'var(--uiWhite) !important',
        margin: ''
    },
    popUpContent: {
        padding: '15px',
        '& p': {
            color: 'var(--typeBlackColor)',
            fontSize: '21px',
            marginLeft: '10px',
            marginBottom: '10px',
        },
        '& span': {
            color: 'var(--typeIndigoColor)',
            fontSize: 'var(--fontSize14)',
        }
    },
    rupeesIcon:{
        fontSize: '16px !important',
    }
}))

const inputDetailPopUp = () => {
    // return(

    // )
}


// const FormObserver: React.FC = () => {
//     const { values } = useFormikContext();
//     useEffect(() => {
//       console.log("FormObserver::values", values);
//     }, [values]);
//     return null;
//   };

const TaxCanSave = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch:any = useDispatch();
    const [popState, setPopState] = useState<boolean>(false)
    const [alreadyInvesting, setAlreadyInvesting] = useState(0);

    const [formValues, setFormValues] = useState<any>({
        employeePF: 0,
        PPF: 0,
        homeLoan: 0,
        nscPost: 0,
        lifeInsurance: 0,
        taxSavinig: 0,
    })

    useEffect(() => {
        let amount = 0;
        for (var key in formValues) {
            if (formValues.hasOwnProperty(key)) {
                amount += formValues[key]
            }
        }  
        setAlreadyInvesting(amount)
        console.log("formValues",formValues)
    }, [formValues])

    const handleClose = () => {
        setPopState(false)
    };

    const handleContinue = () => {
        navigate('/saveTax/saveTaxAmount')
    }

    const initialValues = {
        employeePF: null,
        PPF: null,
        homeLoan: null,
        nscPost: null,
        lifeInsurance: null,
        taxSavinig: null,
    }


    const validate = Yup.object().shape({
        employeePF: Yup.number().positive("Must be more than 0")
   .integer("Must be more than 0").typeError('Required').required('Required'),
        PPF: Yup.number().positive("Must be more than 0")
   .integer("Must be more than 0").typeError('Required').required('Required'),
        homeLoan: Yup.number().positive("Must be more than 0")
   .integer("Must be more than 0").typeError('Required').required('Required'),
        nscPost: Yup.number().positive("Must be more than 0")
   .integer("Must be more than 0").typeError('Required').required('Required'),
        lifeInsurance: Yup.number().positive("Must be more than 0")
   .integer("Must be more than 0").typeError('Required').required('Required'),
        taxSavinig: Yup.number().positive("Must be more than 0")
   .integer("Must be more than 0").typeError('Required').required('Required'),
    })


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: initialValues,
        validationSchema: validate,
        // initialIsValid:initialIsValid ,
        onSubmit: (values: any) => {
            console.log('form values', values);
            dispatch(getDataSaveTaxCalculateApi(values))
            handleContinue();
        },

    });

    

    const handleFormOnChange = (event: FormEvent) => {
        console.log("form Event : ", parseInt((event.target as HTMLInputElement).value), alreadyInvesting, (event.target as HTMLInputElement).name)
        const temp = {...formValues}
        Object.keys(temp).forEach((key, index) => {
            if(key === (event.target as HTMLInputElement).name){
                temp[key] = parseInt((event.target as HTMLInputElement).value)
            }
          });
          setFormValues(temp)
    }


    return (
        <Box style={{ width: "100vw" }}>
            <Navbar />
            <Box className={classes.main}>
                <Toolbar />
                <Sidebar />
                <Grid container>
                    <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '85px !important', md: '245px !important', marginTop: '-15px', }, }} item xs={12}>

                        <Box className={classes.pageHeading}>
                            <Typography component='p'>How Much Tax Can I Save</Typography>
                        </Box>

                        <Box className={`${classes.blueBoxWithoutBorder} ${classes.BlueBoxCustom}`}>
                            <Box className={classes.blueBoxContent}>
                                <Typography component='span'>You can invest upto</Typography>
                                <Typography component='p'>₹1.5 Lacs under Section 80C.</Typography>
                                <Typography component='span'>Already Investing: ₹{alreadyInvesting}</Typography>
                            </Box>
                            <Box className={classes.blueBoxCircle}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Typography component='span'>ELIGIBLE <br />TO INVEST </Typography>
                                    <Typography component='p'>₹1.5 Lacs</Typography>
                                </Box>
                            </Box>
                        </Box>

                        {/* <Form>
                                <FormObserver /> 
                                
                        </Form> */}
                            <form onChange={handleFormOnChange} onSubmit={formik.handleSubmit} className={classes.form}>
                                <Box className={classes.inputFeildContainer} sx={{ width: { xs: '90%', sm: '50%' }, margin: { xs: 'auto', sm: '0px' }, borderRadius: '8px', }}>
                                    <Typography component='span'>Following are the steps to calculate your investment and show how much you can Save Tax.</Typography>
                                    <Box className={classes.inputWrap}>
                                        <Box className={classes.lableAndIcon}>
                                            <InputLabel htmlFor="outlined-adornment-password">Employee PF</InputLabel>
                                            <ErrorOutlineOutlinedIcon onClick={() => setPopState(true)} />
                                        </Box>
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter Amount"
                                            variant="outlined"
                                            name="employeePF"
                                            InputProps={{
                                                startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} />,
                                            }}
                                            type='number'
                                            fullWidth
                                            value={formik.values.employeePF}
                                            onChange={formik.handleChange}
                                            error={formik.touched.employeePF && Boolean(formik.errors.employeePF)}
                                            helperText={formik.touched.employeePF && formik.errors.employeePF}
                                        />
                                    </Box>
                                    <Box className={classes.inputWrap}>
                                        <Box className={classes.lableAndIcon}>
                                            <InputLabel htmlFor="outlined-adornment-password">PPF</InputLabel>
                                            <ErrorOutlineOutlinedIcon onClick={() => setPopState(true)} />
                                        </Box>
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter Amount"
                                            variant="outlined"
                                            name="PPF"
                                            InputProps={{
                                                startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} />,
                                            }}
                                            type='number'
                                            fullWidth
                                            value={formik.values.PPF}
                                            onChange={formik.handleChange}
                                            error={formik.touched.PPF && Boolean(formik.errors.PPF)}
                                            helperText={formik.touched.PPF && formik.errors.PPF}
                                        />
                                    </Box>
                                    <Box className={classes.inputWrap}>
                                        <Box className={classes.lableAndIcon}>
                                            <InputLabel htmlFor="outlined-adornment-password">Home Loan Principal</InputLabel>
                                            <ErrorOutlineOutlinedIcon onClick={() => setPopState(true)} />
                                        </Box>
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter Amount"
                                            variant="outlined"
                                            name="homeLoan"
                                            InputProps={{
                                                startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} />,
                                            }}
                                            type='number'
                                            fullWidth
                                            value={formik.values.homeLoan}
                                            onChange={formik.handleChange}
                                            error={formik.touched.homeLoan && Boolean(formik.errors.homeLoan)}
                                            helperText={formik.touched.homeLoan && formik.errors.homeLoan}
                                        />
                                    </Box>
                                    <Box className={classes.inputWrap}>
                                        <Box className={classes.lableAndIcon}>
                                            <InputLabel htmlFor="outlined-adornment-password">NSC / Post Office</InputLabel>
                                            <ErrorOutlineOutlinedIcon onClick={() => setPopState(true)} />
                                        </Box>
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter Amount"
                                            variant="outlined"
                                            name="nscPost"
                                            InputProps={{
                                                startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} />,
                                            }}
                                            type='number'
                                            fullWidth
                                            value={formik.values.nscPost}
                                            onChange={formik.handleChange}
                                            error={formik.touched.nscPost && Boolean(formik.errors.nscPost)}
                                            helperText={formik.touched.nscPost && formik.errors.nscPost}
                                        />
                                    </Box>
                                    <Box className={classes.inputWrap}>
                                        <Box className={classes.lableAndIcon}>
                                            <InputLabel htmlFor="outlined-adornment-password">Life Insurance Premium</InputLabel>
                                            <ErrorOutlineOutlinedIcon onClick={() => setPopState(true)} />
                                        </Box>
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter Amount"
                                            variant="outlined"
                                            name="lifeInsurance"
                                            InputProps={{
                                                startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} />,
                                            }}
                                            type='number'
                                            fullWidth
                                            value={formik.values.lifeInsurance}
                                            onChange={formik.handleChange}
                                            error={formik.touched.lifeInsurance && Boolean(formik.errors.lifeInsurance)}
                                            helperText={formik.touched.lifeInsurance && formik.errors.lifeInsurance}
                                        />
                                    </Box>
                                    <Box className={classes.inputWrap}>
                                        <Box className={classes.lableAndIcon}>
                                            <InputLabel htmlFor="outlined-adornment-password">Tax Saving FD</InputLabel>
                                            <ErrorOutlineOutlinedIcon onClick={() => setPopState(true)} />
                                        </Box>
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter Amount"
                                            variant="outlined"
                                            name="taxSavinig"
                                            InputProps={{
                                                startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} />,
                                            }}
                                            type='number'
                                            fullWidth
                                            value={formik.values.taxSavinig}
                                            onChange={formik.handleChange}
                                            error={formik.touched.taxSavinig && Boolean(formik.errors.taxSavinig)}
                                            helperText={formik.touched.taxSavinig && formik.errors.taxSavinig}
                                        />
                                    </Box>
                                </Box>
                                <FooterWithBtn
                                    btnText='Continue'
                                    btnClick={formik.handleSubmit}
                                />
                            </form>
                    </Grid>
                </Grid>
            </Box>


            <Dialog onClose={handleClose} open={popState} sx={{ maxWidth: { xs: '100%', sm: '350px' }, margin: 'auto' }}>
                {/* <DialogTitle>Set backup account</DialogTitle> */}
                <Box className={classes.popUpContent}>
                    <Box sx={{ display: 'flex', }}>
                        <ErrorOutlineOutlinedIcon />
                        <Typography component='p'>Employee PF</Typography>
                    </Box>
                    <Typography component='span'>Employee Provident Fund (EPF) is a retirement benefit scheme maintained by the Employees’ Provident Fund Organization (EPFO). The employee and the employer contribute to the EPF scheme on monthly basis in equal proportions of 12% of the basic salary and dearness allowance. Out of the employer’s contribution, 8.33% is directed towards the Employee Pension Scheme.</Typography>
                </Box>
                <DialogActions sx={{ padding: '0px' }}>
                    <Button onClick={handleClose} className={classes.popUpBtn}>Ok, Got It</Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default TaxCanSave