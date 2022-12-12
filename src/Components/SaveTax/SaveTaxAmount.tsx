import React, { useState } from 'react'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import { Toolbar } from '@mui/material'
import Banner from './Banner'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
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
import {SaveTaxInvestmentLumpsumAction,SaveTaxInvestmentMonthlyAction } from '../../Store/Duck/SaveTaxInvestmentType'


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
    },
    BlueBoxCustom: {
        display: 'flex',
        alignItems: 'center',
        '& p': {
            color: 'var(--uiWhite)',
            fontSize: 'var(--subHeadingFontSize)',
        }
    },
    investmentType: {
        backgroundColor: 'var(--uiWhite)',
        // backgroundColor: '#000',
        boxShadow: 'var(--themeShadow)',
        padding: '15px',
        margin: '15px',
        borderRadius: '8px',
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
        display: 'block'
    },
    rupeesIcon: {
        '& svg': {
            fontSize: 'var(--fontSize14)',
            color: 'var(--typeLightBlackColor)',
        }
    }
}))

const SaveTaxAmount = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatch: any = useDispatch()
    // const {SaveTaxInvestmentLumpsumAction} = useSelector((state:any) => state.SaveTaxInvestmentType)
    // const {SaveTaxInvestmentMonthlyAction} = useSelector((state:any) => state.SaveTaxInvestmentType)
    const [investmentType, setInvestmentType] = useState<string>('lumpsum')
    const [lumpsumAmount, setLumpsumAmount] = useState('')
    const [monthlyAmount, setMonthlyAmount] = useState('')

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInvestmentType((event.target as HTMLInputElement).value);
    };

    const handleLumpsum = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SaveTaxInvestmentLumpsumAction(event.target.value));
        setLumpsumAmount(event.target.value);
    };

    const handleMonthly = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(SaveTaxInvestmentMonthlyAction(event.target.value));
        setMonthlyAmount(event.target.value);
    };

    const handleNavigationFlow = () => {
        investmentType === 'lumpsum' ? dispatch(SaveTaxInvestmentLumpsumAction('lumpsum')) : dispatch(SaveTaxInvestmentMonthlyAction('monthly'));
        navigate('/saveTax/saveTaxInvestmentType')
    }

    return (
        <Box style={{ width: "100vw" }}>
            <Navbar />
            <Box className={classes.main}>
                <Toolbar />
                <Sidebar />
                <Grid container>
                    <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '85px !important', md: '245px !important' }, }} item xs={12}>
                        <h4>I Know My Tax Liability</h4>
                        <Box className={`${classes.blueBoxWithoutBorder} ${classes.BlueBoxCustom}`}>
                            <Box className={classes.blueBoxIconBox}>
                                <img src={process.env.PUBLIC_URL + '/assets/images/save-tax-wealth.svg'} alt="" />
                            </Box>
                            <Typography component='p'>Amount I want to invest in current F.Y 21-22</Typography>
                        </Box>

                        <Box className={classes.investmentType} sx={{ width: { sm: '90%', md: '50%' }, marginTop: '30px', }}>

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
                                        label="Enter Amount"
                                        id="outlined-start-adornment"
                                        value={lumpsumAmount}
                                        onChange={handleLumpsum}
                                        type='number'
                                        InputProps={{
                                            endAdornment: <InputAdornment position="start">
                                                <FormControlLabel value="lumpsum" control={<Radio />} label="Lumpsum" />
                                            </InputAdornment>,
                                            startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} />,
                                            readOnly: investmentType === 'lumpsum' ? false : true,
                                        }}
                                        className={classes.textField}
                                        fullWidth
                                    />
                                    <Typography component='span'>This will be a lumpsum one-time investment for Current F.Y 21-22</Typography>
                                </Box>

                                <Divider />

                                <Box className={classes.investmentField}>
                                    <Typography component='p'>Monthly investment</Typography>

                                    <TextField
                                        label="Monthly investment"
                                        id="outlined-start-adornment"
                                        value={monthlyAmount}
                                        onChange={handleMonthly}
                                        type='number'
                                        InputProps={{
                                            endAdornment: <InputAdornment position="start">
                                                <FormControlLabel value="monthly" control={<Radio />} label="Monthly" />
                                            </InputAdornment>,
                                            startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} />,
                                            readOnly: investmentType === 'monthly' ? false : true,
                                        }}
                                        className={classes.textField}
                                        fullWidth
                                    />
                                    <Typography component='span'>This will be a monthly investment for remaining months in
                                        Current F.Y 21-22</Typography>
                                </Box>
                            </RadioGroup>
                        </Box>

                        <FooterBtnWithBox
                            boxIcon={<ThumbUpAltOutlinedIcon />}
                            boxText='Great! Your total investment is'
                            boxAmount='₹15,000'
                            btnText='Continue'
                            btnClick={handleNavigationFlow}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box >
    )
}

export default SaveTaxAmount