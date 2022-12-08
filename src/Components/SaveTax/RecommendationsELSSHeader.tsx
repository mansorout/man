import React, { useState } from 'react'
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
            // border: 'none'
        },
        '& fieldset': {
            border: 'none !important',
        }
    },
}))
const RecommendationsELSSHeader = () => {
    const classes = useStyles();

    const [premiumPaymentTerm, setPremiumPaymentTerm] = useState<string>('5')
    const [investmentAmount, setInvestmentAmount] = useState<string>('')
    const [inputFeildShow, setInputFeildShow] = useState<boolean>(false)


    const handleChange = (event: SelectChangeEvent) => {
        setPremiumPaymentTerm(event.target.value);
    };

    const handleInvestmentAmount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInvestmentAmount(event.target.value);
    }

    return (
        <Box className={classes.recommendationsHeaderBox}>
            <Grid container>
                <Grid xs={6} item sx={{ display: 'flex', justifyContent: 'flex-end', borderRight: '1px solid #fff6', padding: '15px' }}>
                    <FormControl variant="standard" sx={{ maxWidth: 220 }} className={classes.headerSelect} fullWidth>
                        <InputLabel id="demo-simple-select-standard-label">Premium Payment Term</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={premiumPaymentTerm}
                            onChange={handleChange}
                            label="Age"
                        >
                            <MenuItem value={5}>5 Years</MenuItem>
                            <MenuItem value={7}>7 Years</MenuItem>
                            <MenuItem value={10}>10 Years</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid xs={6} item sx={{ padding: '15px' }}>
                    <Box>
                        <TextField
                            label="Investment Type"
                            id="outlined-start-adornment"
                            value={investmentAmount}
                            type='number'
                            InputProps={{
                                startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} />,
                                endAdornment: <CreateOutlinedIcon sx={{ cursor: 'pointer' }} onClick={() => setInputFeildShow(true)} />,
                                // readOnly: investmentType === 'monthly' ? false : true,
                            }}
                            className={classes.headerInvestmentTypeInput}
                        />
                    </Box>
                </Grid>
            </Grid>
            <Box className={`${classes.inputWrapper} ${inputFeildShow ? classes.inputWrapperActiveState : ''}`} sx={{ width: { xs: '90%', sm: '35%' } }}>
                <TextField
                    label="Amount I want to invest monthly"
                    id="outlined-start-adornment"
                    value={investmentAmount}
                    onChange={handleInvestmentAmount}
                    type='number'
                    InputProps={{
                        endAdornment: <Button onClick={() => setInputFeildShow(false)} disabled={investmentAmount === '' && true} variant="contained">Update Plans</Button>,
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

export default RecommendationsELSSHeader