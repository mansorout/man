import React, { useState, useEffect } from 'react'
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
import { useDispatch, useSelector } from 'react-redux';
import { postTermPurchase } from '../../Store/Insurance/thunk/insurance-thunk'
import FormHelperText from '@mui/material/FormHelperText';
import { setTermDataSuccessAction } from '../../Store/Insurance/actions/insurance-actions';
import { lookUpMasterKeys, bannerSectionValues } from "../../Utils/globalConstant";
// import { lookUpMasterKeys, bannerSectionValues } from "../../globalConstant";
import { checkExpirationOfToken, customParseJSON, getLookUpIdWRTModule, numDifferentiation } from "../../Utils/globalFunctions";
import { json } from 'stream/consumers';
import siteConfig from '../../Utils/siteConfig';
import { setTokenExpiredStatusAction } from '../../Store/Authentication/actions/auth-actions';
import { setEditProfileDataThunk } from '../../Store/Authentication/thunk/auth-thunk';
import { apiResponse } from '../../Utils/globalTypes';
import moment from 'moment';
import './insurance.css'


const useStyles: any = makeStyles((theme: Theme) => ({
    flexCommon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    termInsuranceCard: {
        backgroundColor: 'var(--uiWhite)',
        boxShadow: 'var(--themeShadow)',
        // padding: '20px 15px',
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
    quickSelectedAmount: {
        backgroundColor: 'var(--ui1Color) !important',
        color: 'var(--uiWhite) !important',
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
    },

    selectError: {
        color: 'red !important',
        '& fieldset': {
            borderColor: 'red',
        },
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
    imgUrl?: string;
}

const RadioCmp = (props: genderProp) => {
    const classes = useStyles()
    // useEffect(() => {
    //     props.selectoin("no");
    // }, []);
    return (
        <div>
            <Button variant="outlined" style={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--fontSize14)', border: '1px solid var(--typeLighterGrey)', boxShadow: 'var(--themeShadow)', padding: '6px 5px', lineHeight: '1.4', margin: '0px 6px', borderRadius: '8px', width: '100%' }} className={`${classes.genderBtn} ${props.errorShow && classes.borderAndTextErrorColor} ${props.value === props.selectedItem ? classes.borderAndTextErrorColorRemove : ''}`} onClick={() => {
                console.log(props)
                props.errorRemove(false)
                props.selectoin(props.value);
            }}>

                <img style={{ marginRight: '6px' }} src={props.imgUrl} alt="" />
                {props?.prop}
            </Button>
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

const addDate = (dt: any, amount: any, dateType: any) => {
    switch (dateType) {
        case 'days':
            return dt.setDate(dt.getDate() + amount) && dt;
        case 'weeks':
            return dt.setDate(dt.getDate() + (7 * amount)) && dt;
        case 'months':
            return dt.setMonth(dt.getMonth() + amount) && dt;
        case 'years':
            return dt.setFullYear(dt.getFullYear() + amount) && dt;
    }
}


const InsuranceTerms = () => {
    const classes = useStyles()
    const theme = useTheme();
    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    const [insuranceAmount, setInsuranceAmount] = useState<number>(0)
    const [insuranceAmountError, setInsuranceAmountError] = useState<boolean>(false)
    const [dob, setDob] = React.useState<any>(addDate(new Date(), -18, 'years'));
    const [dobError, setDobError] = useState<boolean>(false)
    const [termInsuranceSelecct, setTermInsuranceSelecct] = useState<number[]>()
    const [quickPickAmount, setQuickPickAmount] = useState<number[]>([])
    const [showPlanDetailSubmit, setShowPlanDetailSubmit] = useState<boolean>(false)
    const [genderSelect, setGenderSelect] = useState<string>('')
    const [genderSelectError, setGenderSelectError] = useState<boolean>(false)
    const [tobaccoSelectTag, setTobaccoSelectTag] = useState<boolean>(true)
    const [tobaccoSelect, setTobaccoSelect] = useState<string>('')
    const [tobaccoSelectError, setTobaccoSelectError] = useState<boolean>(false)
    const [profileValidationStatus, setProfileValidationStatus] = useState(false);
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
    // const {  termGenerateApiData } = useSelector((state: any) => state.insuranceReducer)

    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        profileValidate();
    }, [localStorage.getItem(siteConfig.USER_INFO)])


    // useEffect(() => {

    // }, [termGenerateApiData])
    useEffect(() => {
        const termlifecover = customParseJSON(localStorage.getItem(lookUpMasterKeys.TERM_LIFE_COVER))
        const tempArr: any = [];
        const tempQuickPick: any = [];
        termlifecover && termlifecover.length && termlifecover.map((item: any) => {
            tempArr.push(item.value)
            if (JSON.parse(termlifecover[0]?.metadata).isquickaccessenabled === 1) {
                tempQuickPick.push(item.value)
            }
        })
        console.log('useEffect insuranceAmount :', tempQuickPick, termlifecover, termlifecover[0].metadata, tempArr)
        console.log("termlifecover[0].metadata :", JSON.parse(termlifecover[0].metadata))
        setTermInsuranceSelecct(tempArr)
        setQuickPickAmount(tempQuickPick)
        // setQuickPickAmount
    }, [insuranceAmount])

    const profileValidate = async () => {
        let status: boolean = false;
        let objUserInfo: any = await customParseJSON(localStorage.getItem(siteConfig.USER_INFO));
        await ['gender', 'dateofbirth'].forEach((key: string) => {
            if (!objUserInfo?.userdetails[key]) {
                status = false;
            }
            if (key === "dateofbirth" || key === "gender") {
                if (!parseInt(objUserInfo?.userdetails[key])) {
                    status = false;
                } else {
                    status = true

                }
            }
        })
        setProfileValidationStatus(status);
        console.log("is validate term insurance :", status)
    }

    const handleClickOpen = () => {
        profileValidate()
        setDob(null)
        setGenderSelect('');
        setTobaccoSelect('')
        if (insuranceAmount) {
            setOpen(true);
        } else {
            setInsuranceAmountError(true)
        }
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event: SelectChangeEvent) => {
        setInsuranceAmount(parseInt(event.target.value) as number);
        setInsuranceAmountError(false)
    };

    const selectFromQuickPick = (item: number) => {
        console.log("quickPickValue: ", item)
        setInsuranceAmount(item);
        setInsuranceAmountError(false)
    }
    const handleGenderSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGenderSelectError(false)
        setGenderSelect((event.target as HTMLInputElement).value);
    };

    const handleTobaccoSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
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

    const handlesubmitDetail = async () => {

        if (!profileValidationStatus) {

            if (feildValidation(dob) && feildValidation(genderSelect) && feildValidation(tobaccoSelect)) {
                setShowPlanDetailSubmit(true)

                let res: apiResponse = await setEditProfileDataThunk({
                    gender: genderSelect || "",
                    // DOB: moment(objUserDetails?.userdetails?.dateofbirth, 'DD/MM/YYYY').format('DD-MM-YYYY'),
                    dateofbirth: moment(dob).format('DD-MM-YYYY') || '',
                })

                if (checkExpirationOfToken(res?.code)) {
                    dispatch(setTokenExpiredStatusAction(true));
                    return;
                }

                if (res?.error) {
                    return;
                }

                console.log("res :", res)

                if (res?.data) {
                    localStorage.setItem(siteConfig.USER_INFO, JSON.stringify(res?.data))
                }
                const data = {
                    lifecover: insuranceAmount,
                    frequencytype: 1,
                    issmoker: tobaccoSelect === 'yes' ? 1 : 0,
                }
                dispatch(setTermDataSuccessAction(data))
                navigate('/explorePlan')
            } else {
                !feildValidation(dob) && setDobError(true)
                !feildValidation(genderSelect) && setGenderSelectError(true)
                !feildValidation(tobaccoSelect) && setTobaccoSelectError(true)
            }

        } else if (feildValidation(tobaccoSelect)) {
            const data = {
                lifecover: insuranceAmount,
                frequencytype: 1,
                issmoker: tobaccoSelect === 'yes' ? 1 : 0,
            }
            dispatch(setTermDataSuccessAction(data))
            navigate('/explorePlan')
        } else {
            !feildValidation(dob) && setDobError(true)
            !feildValidation(genderSelect) && setGenderSelectError(true)
            !feildValidation(tobaccoSelect) && setTobaccoSelectError(true)
        }

    }



    return (
        <div>
             <Box sx={{ padding: '23px 23px',boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",marginTop:"35px", borderRadius:"8px", paddingTop: '11px', width: { xs: '100%', sm: '50%' } }} className="TreminsuraceBox">
    
                <div className={classes.termInsuranceCard}>
                    <b style={{ color: 'var(--typeLightBlackColor)', fontSize: 'var(--subHeadingFontSize)', marginBottom: '15px', display: 'inline-block', fontWeight: 500, }}>Term Insurance</b>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" className={insuranceAmountError && classes.selectError}>I want life cover of</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={`${insuranceAmount}`}
                            label="insuranceAmount"
                            onChange={handleChange}
                            className={insuranceAmountError && classes.selectError}
                        >
                            {/* {
                            console.log("termInsuranceSelecct :", termInsuranceSelecct)
                            } */}
                            {
                                termInsuranceSelecct && termInsuranceSelecct?.length && termInsuranceSelecct.map((item, index) => (
                                    <MenuItem value={item} key={index}>₹ {item}</MenuItem>
                                ))
                            }
                            {/* <MenuItem value={2500000}>₹ 2500000</MenuItem>
                            <MenuItem value={7500000}>₹ 7500000</MenuItem>
                            <MenuItem value={5000000}>₹ 5000000</MenuItem>
                            <MenuItem value={10000000}>₹ 10000000</MenuItem>
                            <MenuItem value={50000000}>₹ 50000000</MenuItem>
                            <MenuItem value={100000000}>₹ 100000000</MenuItem> */}
                        </Select>
                        {insuranceAmountError && <FormHelperText style={{ color: 'red' }}>This is required!</FormHelperText>}
                    </FormControl>
                    <Box sx={{ paddingTop: '20px', }} className="YoncanQuicky">
                        <span style={{ fontSize: 'var(--subTitleFontSize)', color: 'var(--typeBlackColor),' }} className="YoncanQuicky">You can quickly choose from below cover option</span>
                        <ul className={classes.quickSelectWrapper + " " + "uiclassScroll"}>
                        
                            {
                                quickPickAmount && quickPickAmount.length && quickPickAmount.map((item, index) => (
                                    <li
                                        key={index}
                                        onClick={() => {
                                            setInsuranceAmount(item);
                                            setInsuranceAmountError(false);
                                        }}
                                        className={insuranceAmount === item ? classes.quickSelectedAmount : ''}
                                    >
                                        <div className='uiclassScroll2'>
                                        {`₹${numDifferentiation(item)}`}
                                        </div>
                                     
                                    </li>
                                ))
                            }
                        </ul>
                    </Box>
                </div>
            </Box >

            <FooterBtnWithBox
                boxIcon={<ThumbUpOffAltIcon />}
                boxText='Monthly Premium'
                boxAmount={`${numDifferentiation(insuranceAmount)}`}
                btnText='Show Me Exact Quote'
                btnClick={handleClickOpen}
            />


            <Dialog
                open={open}
                onClose={handleClose}
                PaperComponent={PaperComponent}
                aria-labelledby="draggable-dialog-title"
                fullScreen={fullScreen}
                sx={{ width: { xs: '100%', sm: '480px', margin: 'auto' } }}
                // disableEscapeKeyDown
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
                        <div className={classes.showPlanDialogWrapper}>
                            <div className={classes.popHeading}>
                                <b style={{ marginBottom: '0px', color: 'var(--typeLightBlackColor)', fontWeight: 500, }}>Fill Details</b>
                                <p style={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--fontSize14)', marginTop: '5px' }}>Just the following details needed to get
                                    your exact quote</p>
                            </div>
                            {
                                !profileValidationStatus ? (
                                    <Box>
                                        <FormControl className={classes.radioGroup} fullWidth>
                                            <FormLabel id="demo-radio-buttons-group-label" style={{ color: 'var(--ui1Color)', fontSize: 'var(--subTitleFontSize)' }}
                                            >Gender</FormLabel>
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
                                                    imgUrl={`${process.env.PUBLIC_URL}/assets/images/male-icon.svg`}
                                                />} label=""
                                                />
                                                <FormControlLabel control={<RadioCmp
                                                    value="female"
                                                    selectoin={setGenderSelect}
                                                    errorShow={genderSelectError}
                                                    errorRemove={setGenderSelectError}
                                                    prop="Female"
                                                    selectedItem={genderSelect}
                                                    imgUrl={`${process.env.PUBLIC_URL}/assets/images/female-icon.svg`}
                                                />} label=""
                                                />
                                                <FormControlLabel control={<RadioCmp
                                                    value="other"
                                                    selectoin={setGenderSelect}
                                                    errorShow={genderSelectError}
                                                    errorRemove={setGenderSelectError}
                                                    prop="Transgender"
                                                    selectedItem={genderSelect}
                                                    imgUrl={`${process.env.PUBLIC_URL}/assets/images/transgender-icon.svg`}
                                                />} label=""
                                                />
                                            </RadioGroup>
                                        </FormControl>

                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                            <DatePicker
                                                className='datePickerIcon'
                                                label="Date of Birth"
                                                value={dob || addDate(new Date(), -18, 'years')}
                                                inputFormat="DD-MM-YYYY"
                                                // minDate={moment().subtract(500, "years")}
                                                // maxDate={moment().subtract(18, "years")}
                                                maxDate={addDate(new Date(), -18, 'years')}
                                                onChange={(newValue) => {
                                                    setDob(newValue);
                                                    setDobError(false)
                                                }}
                                                renderInput={(params) => <TextField {...params} style={{ marginBottom: '20px' }} error={dobError} fullWidth
                                                />}
                                            />
                                        </LocalizationProvider>
                                    </Box>
                                ) : null
                            }
                            <FormControl className={classes.radioGroup} fullWidth>
                                <FormLabel id="demo-radio-buttons-group-label" style={{ color: 'var(--ui1Color)', fontSize: 'var(--subTitleFontSize)', marginBottom: '5px' }}>Do you smoke or chew tobacco?</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    onChange={handleTobaccoSelect}
                                >
                                    <FormControlLabel className={`${classes.borderAndTextErrorColor}`}
                                        control={<RadioCmp
                                            value="no"
                                            selectoin={setTobaccoSelect}
                                            errorShow={tobaccoSelectError}
                                            errorRemove={setTobaccoSelectError}
                                            prop="No"
                                            selectedItem={tobaccoSelect}
                                        />} label=""
                                    // className={tobaccoSelectTag===true?'NoButton':null}
                                    />
                                    <FormControlLabel control={<RadioCmp
                                        value="yes"
                                        selectoin={setTobaccoSelect}
                                        errorShow={tobaccoSelectError}
                                        errorRemove={setTobaccoSelectError}
                                        prop="Yes"
                                        selectedItem={tobaccoSelect}
                                    />} label=""
                                    />
                                </RadioGroup>
                            </FormControl>
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