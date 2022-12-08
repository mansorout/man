import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Box, styled } from '@mui/system'
import { Grid, Modal, Theme, Typography } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FooterBtnWithBox from '../CommonComponents/FooterBtnWithBox'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';

import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { string } from 'yup';
import { useNavigate } from 'react-router-dom';
import LoopIcon from '@mui/icons-material/Loop';


const useStyles: any = makeStyles((theme: Theme) => ({
    flexCommon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    termInsuranceCard: {
        backgroundColor: 'var(--uiWhite)',
        boxShadow: 'var(--themeShadow)',
        padding: '20px 15px',
        borderRadius: '8px',
    },
    quickSelectWrapper: {
        padding: '0px',
        margin: '0px',
        display: 'flex',
        flexWrap: 'wrap',
        '& li': {
            listStyleType: 'none',
            padding: '8px 10px',
            backgroundColor: 'var(--blueColorOpacity)',
            margin: '5px 6px',
            borderRadius: '2px',
            color: 'var(--ui1Color)',
            fontWeight: 500,
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: 'var(--ui1Color)',
                color: 'var(--uiWhite)',
            }
        }
    },
    premiumAmountFooter: {
        backgroundColor: 'var(--uiWhite)',
        boxShadow: 'var(--themeShadow)',
        padding: '15px',
        marginBottom: '-16px',
        marginLeft: '-16px',
        marginRight: '-16px',
    },
    premiumAmountBox: {
        backgroundColor: 'var(--lightGreenColor)',
        padding: '45px 15px',
        // paddingTop: '45px',
        position: 'absolute',
        top: 'calc(-100% - 38px)',
        zIndex: '-1',
        borderRadius: '20px',
        textAlign: 'center',
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    insuranceCardIcon: {
        backgroundColor: 'var(--primaryColor)',
        color: 'var(--uiWhite)',
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '-18px',
    },
    popHeading: {
        textAlign: 'center'
    },
    radioGroup: {
        marginBottom: '24px !important',
        '& label': {
            '@media(max-width: 400px)': {
                width: '100%',
                display: 'block',
                margin: '5px 0px',
                '&>*': {
                    width: '100%'
                }
            },
        }
    },
    genderBtn: {
        '&:hover': {
            border: '1px solid var(--primaryColor) !important',
            backgroundColor: 'rgba(35, 219, 123, 0.12) !important',
            color: 'var(--primaryColor) !important'
        },
    },
    showPlanBtn: {
        backgroundColor: 'var(--primaryColor) !important',
        color: 'var(--uiWhite) !important',
        borderRadius: '0px !important'
    },
    showPlanThankuDetail: {
        textAlign: 'center',
        '& p': {
            margin: '3px 0px',
        }
    },
    noClickBackdrop: {
        pointerEvents: 'none'
    },
    borderAndTextErrorColor: {
        borderColor: '#d32f2f !important',
        color: '#d32f2f !important'
    },
    borderAndTextErrorColorRemove: {
        border: '1px solid var(--primaryColor) !important',
        backgroundColor: 'rgba(35, 219, 123, 0.12) !important',
        color: 'var(--primaryColor) !important'
    }
}))



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

interface genderProp {
    prop: string;
    errorShow: boolean;
    selectoin: React.Dispatch<React.SetStateAction<string>>;
    value: string;
    errorRemove: React.Dispatch<React.SetStateAction<boolean>>;
    selectedItem: string;
}

const RadioCmp = (props: genderProp) => {
    const classes = useStyles()
    return (
        <div>
            <Button variant="outlined" style={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--fontSize14)', border: '1px solid var(--typeLighterGrey)', boxShadow: 'var(--themeShadow)', padding: '6px 5px', lineHeight: '1.4', margin: '0px 6px', borderRadius: '8px', width: '100%' }} className={`${classes.genderBtn} ${props.errorShow && classes.borderAndTextErrorColor} ${props.value === props.selectedItem ? classes.borderAndTextErrorColorRemove : ''}`} onClick={() => {
                console.log(props)
                props.errorRemove(false)
                props.selectoin(props.value);

                debugger
            }}>{props?.prop}</Button>
        </div>
    )
}




function PaperComponent(props: PaperProps) {
    return (
        <Draggable
            handle="#draggable-dialog-title"
            cancel={'[class*="MuiDialogContent-root"]'}
        >
            <Paper {...props} />
        </Draggable>
    );
}


const InsuranceTerms = () => {
    const classes = useStyles()
    const theme = useTheme();
    const navigate = useNavigate();
    const [insuranceAmount, setInsuranceAmount] = useState<string>('')
    // const [insuranceAmountError, setInsuranceAmountError] = useState<boolean>(false)
    const [dob, setDob] = React.useState<Dayjs | null>(null);
    const [dobError, setDobError] = useState<boolean>(false)
    const [quickPickAmount, setQuickPickAmount] = useState<string[]>(['₹25 L', '₹75 L', '₹50 L', '₹1 Cr', '₹5 Cr', '₹10 Cr'])
    const [showPlanDetailSubmit, setShowPlanDetailSubmit] = useState<boolean>(false)
    const [genderSelect, setGenderSelect] = useState<string>('')
    const [genderSelectError, setGenderSelectError] = useState<boolean>(false)
    const [tobaccoSelect, setTobaccoSelect] = useState<string>('')
    const [tobaccoSelectError, setTobaccoSelectError] = useState<boolean>(false)
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setDob(null)
        setGenderSelect('');
        setTobaccoSelect('')
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: SelectChangeEvent) => {
        setInsuranceAmount(event.target.value as string);
    };

    const selectFromQuickPick = (e: any) => {
        console.log("quickPickValue: ", e.target)
    }
    const handleGenderSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        debugger
        setGenderSelectError(false)
        setGenderSelect((event.target as HTMLInputElement).value);
    };

    const handleTobaccoSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        debugger
        setTobaccoSelectError(false)
        setTobaccoSelect((event.target as HTMLInputElement).value);
    };

    const feildValidation = (props: any) => {
        if (props !== '' && props !== null && props !== undefined) {
            return true
        } else {
            return false
        }
    }

    const handlesubmitDetail = () => {
        if (feildValidation(dob) && feildValidation(genderSelect) && feildValidation(tobaccoSelect)) {
            setShowPlanDetailSubmit(true)
            setTimeout(() => {
                navigate('/explorePlan')
            }, 1000);
        } else {
            !feildValidation(dob) && setDobError(true)
            !feildValidation(genderSelect) && setGenderSelectError(true)
            !feildValidation(tobaccoSelect) && setTobaccoSelectError(true)
        }
    }

    return (
        <div>
            <Box sx={{ padding: '30px 7px', paddingTop: '60px', width: { xs: '100%', sm: '50%' } }}>
                <div className={classes.termInsuranceCard}>
                    <b style={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--subHeadingFontSize)', marginBottom: '15px', display: 'inline-block', fontWeight: 500, }}>Term Insurance</b>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">I want life cover of</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={insuranceAmount}
                            label="insuranceAmount"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                    <Box sx={{ paddingTop: '20px', }}>
                        <span style={{ fontSize: 'var(--subTitleFontSize)', color: 'var(--typeBlackColor),' }}>You can quickly choose from below cover option</span>
                        <ul className={classes.quickSelectWrapper}>
                            {
                                quickPickAmount.map((item, index) => (
                                    <li key={index} onClick={selectFromQuickPick}>{item}</li>
                                ))
                            }
                        </ul>
                    </Box>
                </div>
            </Box >

            <FooterBtnWithBox
                boxIcon={<ThumbUpOffAltIcon />}
                boxText='Monthly Premium'
                boxAmount='₹599'
                btnText='Show Me Exact Quote'
                btnClick={handleClickOpen}
            />


            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
                fullScreen={fullScreen}
                sx={{ width: { xs: '100%', sm: '400px', margin: 'auto' } }}
                disableEscapeKeyDown
                className={`${showPlanDetailSubmit && classes.noClickBackdrop}`}
            // disableBackdropClick
            >

                {
                    !showPlanDetailSubmit && (<DialogTitle style={{ cursor: 'move', textAlign: 'end', paddingBottom: '0px', paddingTop: '6px', paddingRight: '0px' }} id="draggable-dialog-title">
                        <Button style={{ color: 'var(--typeIndigoColor)' }} autoFocus onClick={handleClose}>
                            <CloseIcon />
                        </Button>
                    </DialogTitle>)
                }

                {/* <DialogActions>
                </DialogActions> */}
                <DialogContent>
                    {
                        !showPlanDetailSubmit ?
                            <div className={classes.showPlanDialogWrapper}>
                                <div className={classes.popHeading}>
                                    <b style={{ marginBottom: '0px', color: 'var(--typeLightBlackColor)', fontWeight: 500, }}>Fill Details</b>
                                    <p style={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--fontSize14)', marginTop: '5px' }}>Just the following details needed to get
                                        your exact quote</p>
                                </div>
                                <FormControl className={classes.radioGroup} fullWidth>
                                    <FormLabel id="demo-radio-buttons-group-label" style={{ color: 'var(--ui1Color)', fontSize: 'var(--subTitleFontSize)' }}>Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        style={{ justifyContent: 'center' }}
                                        onChange={handleGenderSelect}
                                    >
                                        <FormControlLabel control={<RadioCmp
                                            value="male"
                                            selectoin={setGenderSelect}
                                            errorShow={genderSelectError}
                                            errorRemove={setGenderSelectError}
                                            prop="Male"
                                            selectedItem={genderSelect}
                                        />} label="" />
                                        <FormControlLabel control={<RadioCmp
                                            value="female"
                                            selectoin={setGenderSelect}
                                            errorShow={genderSelectError}
                                            errorRemove={setGenderSelectError}
                                            prop="Female"
                                            selectedItem={genderSelect}
                                        />} label="" />
                                        <FormControlLabel control={<RadioCmp
                                            value="other"
                                            selectoin={setGenderSelect}
                                            errorShow={genderSelectError}
                                            errorRemove={setGenderSelectError}
                                            prop="Transgender"
                                            selectedItem={genderSelect}
                                        />} label="" />
                                    </RadioGroup>
                                </FormControl>

                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Date of Birth"
                                        value={dob}
                                        onChange={(newValue) => {
                                            setDob(newValue);
                                            setDobError(false)
                                        }}
                                        renderInput={(params) => <TextField {...params} style={{ marginBottom: '20px' }} error={dobError} fullWidth />}
                                    />
                                </LocalizationProvider>

                                <FormControl className={classes.radioGroup} fullWidth>
                                    <FormLabel id="demo-radio-buttons-group-label" style={{ color: 'var(--ui1Color)', fontSize: 'var(--subTitleFontSize)', marginBottom: '5px' }}>Do you smoke or chew tobacco?</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        onChange={handleTobaccoSelect}
                                    >
                                        <FormControlLabel control={<RadioCmp
                                            value="no"
                                            selectoin={setTobaccoSelect}
                                            errorShow={tobaccoSelectError}
                                            errorRemove={setTobaccoSelectError}
                                            prop="No"
                                            selectedItem={tobaccoSelect}
                                        />} label="" />
                                        <FormControlLabel control={<RadioCmp
                                            value="yes"
                                            selectoin={setTobaccoSelect}
                                            errorShow={tobaccoSelectError}
                                            errorRemove={setTobaccoSelectError}
                                            prop="Yes"
                                            selectedItem={tobaccoSelect}
                                        />} label="" />
                                    </RadioGroup>
                                </FormControl>
                            </div> :
                            <div className={classes.showPlanThankuDetail}>
                                <ThumbUpOffAltIcon style={{ color: 'var(--primaryColor)', fontSize: 'var(--headingFontSize)' }} />
                                <p style={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--subHeadingFontSize)' }}>Thank you for the details</p>
                                <p style={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }}>Please wait while we bring together best recommendations for you.</p>
                                <LoopIcon style={{ marginTop: '15px', color: 'var(--ui1Color)' }} />
                            </div>
                    }
                </DialogContent>
                {
                    !showPlanDetailSubmit && (<DialogActions style={{ padding: '0px' }}>
                        <Button autoFocus onClick={handlesubmitDetail} className={classes.showPlanBtn} fullWidth>
                            Show Me Plans
                        </Button>
                    </DialogActions>)
                }
            </Dialog>

        </div >
    )
}

export default InsuranceTerms