import React, { useState, useEffect } from 'react'
import { Grid, Modal, Theme, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import InputAdornment from "@mui/material/InputAdornment";
import Button from '@mui/material/Button';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { useDispatch, useSelector } from 'react-redux';
import {
    SaveTaxInvestmentLumpsumAction,
    SaveTaxInvestmentMonthlyAction,
    SaveTaxInvestmentAmount,
    LUMPSUM,
    MONTHLY
} from '../../Store/Duck/SaveTaxInvestmentType'
import {isMultipleofNumber} from '../../Utils/globalFunctions';


const useStyles: any = makeStyles((theme: Theme) => ({
    recommendationsHeaderBox: {
        backgroundColor: 'var(--ui1Color)',
        // padding: '15px',
        margin: '0px -16px',
        color: 'var(--uiWhite)',
        position: 'relative',
    },
    inputWrapper: {
        position: 'absolute',
        top: '-100%',
        padding: '15px',
        backgroundColor: 'var(--uiWhite)',
        boxShadow: 'var(--themeShadow)',
        borderRadius: '4px',
        left: '50%',
        transition: 'all 0.3s ease-in-out',
        transform: 'translate(-50%, 0px)',
        '& button': {
            fontSize: 'var(--subTitleFontSize)',
            minWidth: '110px',
        }
    },
    inputWrapperActiveState: {
        top: '100%',
    },
    headerSelect: {
        margin: '0px !important',
        padding: '0px 15px !important',
        '& label': {
            color: 'var(--uiWhite)',
        },
        '& svg': {
            color: 'var(--uiWhite)',
        },
        '& .MuiSelect-select.MuiInput-input': {
            color: 'var(--uiWhite)',
        },
        '& .MuiInputBase-root.MuiInput-root ::after': {
            content: 'none',
        },
        '& .MuiInputBase-root.MuiInput-root::before': {
            content: 'none',
        }
    },
    headerInvestmentTypeInput: {
        '& label': {
            color: 'var(--uiWhite)',
        },
        '& svg': {
            color: 'var(--uiWhite)',
        },
        '& input': {
            color: 'var(--uiWhite)',
            border: 'none'
        },
        '& fieldset': {
            border: 'none',
        }
    }
}))

interface RecommendationsHeaderPropsType {
    selectTextLabel: string;
    selectArray: string[];
    selectChoosedValue: string;
    changeSelectEvent: (event: SelectChangeEvent) => void;
    investmentTypeLabel: string;
    // investmentTypeStartIcon: React.ReactElement<any>;
    // investmentTypeEndIcon: React.ReactElement<any>;
    // changeInvestmentTypeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void;
    boxInputLabelText: string;
    boxInputShow:boolean;
    boxInputShowHandleChange: () => void;
    boxInputHideHandleChange: () => void;
    // boxInputStartIcon: React.ReactElement<any>;
    boxInputButtonText: string;
    // boxInputInvestmentAmount: string;
    // boxInputHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RecommendationsHeader = (props:RecommendationsHeaderPropsType) => {
    const classes = useStyles();
    const dispatch: any = useDispatch();
    const { investmentType, investmentAmount } = useSelector((state: any) => state.SaveTaxInvestmentType)

    // const [premiumPaymentTerm, setPremiumPaymentTerm] = useState<string>('5')
    // const [investmentAmount, setInvestmentAmount] = useState<string>('')
    const [amount, setAmount] = useState<string>('')
    // const [inputFeildShow, setInputFeildShow] = useState<boolean>(false)


    // const handleChange = (event: SelectChangeEvent) => {
    //     setPremiumPaymentTerm(event.target.value);
    // };

    // const handleInvestmentAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setInvestmentAmount(event.target.value);
    // }

    // useEffect(() => {
    //     handleInvestmentAmount()
    // }, [amount])
    
    const handleInvestmentAmount = () => {
        if (investmentType === LUMPSUM) {
            if (isMultipleofNumber(parseInt(amount), 100)) {
                dispatch(SaveTaxInvestmentAmount(amount))
                props.boxInputHideHandleChange()
            }else {
                alert('Enter amount multiple of 100!')
            }
        } else {
            dispatch(SaveTaxInvestmentAmount(amount))
        }
    }

    return (
        <Box className={classes.recommendationsHeaderBox}>
            <Grid container>
                <Grid xs={6} item sx={{ display: 'flex', justifyContent: 'flex-end', borderRight: '1px solid #fff6', padding: '15px' }}>
                    <FormControl variant="standard" sx={{ maxWidth: 220 }} className={classes.headerSelect} fullWidth>
                        <InputLabel id="demo-simple-select-standard-label">{props.selectTextLabel}</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={props.selectChoosedValue}
                            onChange={props.changeSelectEvent}
                            label="Age"
                        >
                            {props.selectArray.map((item,index) => (
                                <MenuItem value={item} key={index}>{item} Years</MenuItem>
                            ))}
                            {/* <MenuItem value={5}>5 Years</MenuItem>
                            <MenuItem value={7}>7 Years</MenuItem>
                            <MenuItem value={10}>10 Years</MenuItem> */}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={6} item sx={{ padding: '15px' }}>
                    <Box>
                        <TextField
                            label={props.investmentTypeLabel}
                            id="outlined-start-adornment"
                            value={investmentAmount}
                            type='number'
                            InputProps={{
                                startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} />,
                                endAdornment: <CreateOutlinedIcon sx={{ cursor: 'pointer' }} onClick={props.boxInputShowHandleChange} />,
                                // readOnly: investmentType === 'monthly' ? false : true,
                            }}
                            className={classes.headerInvestmentTypeInput}
                        />
                    </Box>
                </Grid>
            </Grid>
            <Box className={`${classes.inputWrapper} ${props.boxInputShow ? classes.inputWrapperActiveState : ''}`} sx={{ width: { xs: '90%', sm: '35%' } }}>
                <TextField
                    label="Amount I want to invest monthly"
                    id="outlined-start-adornment"
                    value={amount}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setAmount(event.target.value)}
                    type='number'
                    InputProps={{
                        endAdornment: <Button onClick={handleInvestmentAmount} disabled={investmentAmount === '' && true} variant="contained">{props.boxInputButtonText}</Button>,
                        startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} />,
                        // readOnly: investmentType === 'monthly' ? false : true,
                    }}
                    className={classes.textField}
                    fullWidth
                />
            </Box>
        </Box >
    )
}

export default RecommendationsHeader