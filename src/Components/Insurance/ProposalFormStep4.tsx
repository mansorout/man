import React, { useEffect, useRef, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, styled } from '@mui/system'
import { Checkbox, Grid, LinearProgress, Modal, Switch, Theme, Typography } from '@mui/material'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import Slider from "react-slick";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import InsuranceTerms from './InsuranceTerms'
import GetInsurance from './GetInsurance'
import { useSelector, useDispatch } from 'react-redux';
import { InsuranceTermConditionAction } from '../../Store/Duck/InsuranceTermCondition'
import BannerSlider from '../CommonComponents/BannerSlider'
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FooterBtnWithBox from '../CommonComponents/FooterBtnWithBox'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { LocalizationProvider, DesktopDatePicker, DatePicker } from '@mui/x-date-pickers'

import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

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
import FooterWithBtn from '../CommonComponents/FooterWithBtn';
import Card from '@mui/material/Card';
import { InsuranceCard, SelectGender } from '../../Modal/InsuranceCard';
import LinearProgressBar from '../CommonComponents/LinearProgressBar';
import './insurance.css'
import CardWithImage from '../CommonComponents/CardWithImage';
import { manicon } from '../../Assets';
import CardWithImageAndCount from '../CommonComponents/CardWithImageAndCount';
import ProposalFormCard from '../CommonComponents/ProposalFormCard';
import TextWithSwitch from '../CommonComponents/TextWithSwitch';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ConfirmationModal from './ConfirmationModal';
import CompleteModal from './CompleteModal';
import HdfcModal from './HdfcModal';

const style = {
    main: {
        boxSizing: "border-box",
        backgroundColor: "#f9f9f9",
        height: "100vh"
    } as React.CSSProperties,
    continueBtn: {
        width: '100%',
        margin: 'auto',
        // height: "100vh"
    } as React.CSSProperties,
}

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
        borderRadius: '5px !important',

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
}));
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

const ProposalFormStep4 = () => {
    const classes = useStyles()
    const theme = useTheme();
    const navigate = useNavigate();
    const [insuranceAmount, setInsuranceAmount] = useState<string>('')
    // const [insuranceAmountError, setInsuranceAmountError] = useState<boolean>(false)
    const [dob, setDob] = React.useState<Dayjs | null>(null);
    const [dobError, setDobError] = useState<boolean>(false)
    const [quickPickAmount, setQuickPickAmount] = useState<string[]>(['500000', '700000', '1000000'])
    const [showPlanDetailSubmit, setShowPlanDetailSubmit] = useState<boolean>(false)
    const [genderSelect, setGenderSelect] = useState<string>('')
    const [me, setMe] = useState<boolean>(false)
    const [spouse, setSpouse] = useState<boolean>(false)
    const [daughter, setDaughter] = useState<boolean>(false)
    const [daughterCount, setDaughterCount] = useState<number>(1)
    const [son, setSon] = useState<boolean>(false)
    const [sonCount, setSonCount] = useState<number>(1)
    const [father, setFather] = useState<boolean>(false)
    const [mother, setMother] = useState<boolean>(false)
    const [genderSelectError, setGenderSelectError] = useState<boolean>(false)
    const [tobaccoSelect, setTobaccoSelect] = useState<string>('')
    const [tobaccoSelectError, setTobaccoSelectError] = useState<boolean>(false)
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const [value, setValue] = React.useState<Date | null>(
        new Date('2022-11-24T21:11:54'),
    );
    const [samePostalAddress, setSamePostalAddress] = useState<boolean>(false)
    const [sameNomineeAddress, setSameNomineeAddress] = useState<any>({
        proposer:false,
        gurdian:false
    })
    const [open, setOpen] = React.useState(false);
    const [count, setCount] = React.useState(1);
    useEffect(() => {
     setTimeout(()=>{setCount(2)},5000)
    }, [])
    
    const [openConfirmationModal, setOpenConfirmationModal] = React.useState(false);
    const [openCompleteModal, setOpenCompleteModal] = React.useState(false);
    const [openHdfcModal, setOpenHdfcModal] = React.useState(false);
    const [openTakeItEasyModal, setOpenTakeItEasyModal] = React.useState(false);

    const handleClickOpen = () => {
        setDob(null)
        setGenderSelect('');
        setTobaccoSelect('')
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // const handleChange = (event: SelectChangeEvent) => {
    //     setInsuranceAmount(event.target.value as string);
    // };

    const selectFromQuickPick = (item: string) => {
        // console.log("quickPickValue: ", e.target)
        setInsuranceAmount(item as string);
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
    const dispatch: any = useDispatch();
    const refContainer = useRef();
    const [insuranceTermCondition, setInsuranceTermCondition] = useState<boolean>(false)
    const [nominee, setNominee] = useState<any>({
        name: "",
        dob: new Date('2022-11-24T21:11:54'),
        relationship: "",
        gurdianName: "",
        gurdianRelation: ""
    })
    const handleChange = (attribute: string, value: any) => {
        setNominee({
            ...nominee,
            [attribute]: value

        })
    }
    const [addressGuardian, setAddressGuardian] = useState<any>({
        postal: "",
        pincode: "",
        state: "",
        city: "",
    })
    const handleAddressGuardianChange = (attribute: string, value: string) => {
        setAddressGuardian({
            ...addressGuardian,
            [attribute]: value

        })
    }
    const [addressPostal, setAddressPostal] = useState<any>({
        postal: "",
        pincode: "",
        state: "",
        city: "",
    })
    const handleAddressPostalChange = (attribute: string, value: string) => {
        setAddressPostal({
            ...addressPostal,
            [attribute]: value

        })
    }
    const { insuranceTermConditionState } = useSelector((state: any) => state.InsuranceTermConditionReducer);


    useEffect(() => {
        dispatch(InsuranceTermConditionAction(false))
    }, [])

    useEffect(() => {
        setInsuranceTermCondition(insuranceTermConditionState)
    }, [insuranceTermConditionState])


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const sliderDetails = [
        {
            topHeading: 'SprintMoney offers',
            topSubHeading: 'a family health protection',
            heading: 'Get ₹5 Lac',
            subHeading: 'Health Insurance Cover @ ₹1490/day',
            bgColor: 'var(--ui1Color)',
            imgUrl: '/assets/images/insurance-banner-img.png',
            btnText: 'Get Insured',
        },
        {
            topHeading: 'SprintMoney offers',
            topSubHeading: 'a family health protection',
            heading: 'Get ₹5 Lac',
            subHeading: 'Health Insurance Cover @ ₹1490/day',
            bgColor: 'var(--ui1Color)',
            imgUrl: '/assets/images/insurance-banner-img.png',
            btnText: 'Get Insured',
        },
        {
            topHeading: 'SprintMoney offers',
            topSubHeading: 'a family health protection',
            heading: 'Get ₹5 Lac',
            subHeading: 'Health Insurance Cover @ ₹1490/day',
            bgColor: 'var(--ui1Color)',
            imgUrl: '/assets/images/insurance-banner-img.png',
            btnText: 'Get Insured',
        },

    ]

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100vh' }}>
            <Box style={{ width: "100vw" }} ref={refContainer}>
                <Navbar />
                <Box sx={style.main}>
                    <Toolbar />
                    <Sidebar />
                    <Grid container>
                        <Grid sx={{ marginBottom: '60px', backgroundColor: '#f9f9f9', height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '85px !important', md: '245px !important' } }} item xs={12}>

                            <div className="progressContainer">
                                <p style={{ color: '#f9f9f9' }}>STEP 4/4</p>
                                <p style={{ color: '#ffffff' }}>Help us with your contact details</p>
                                <Box width="100%" >
                                    <LinearProgressBar value={80} />
                                </Box>
                            </div >
                            <div className="addressCard">
                                <TextField
                                    type="text"
                                    // onBlur={handleBlur}
                                    label="Nominee Full Name"
                                    name="Nominee Full Name"
                                    value={nominee.name}
                                    onChange={((e) => { handleChange('name', e.target.value) })}
                                    fullWidth
                                    // error={error}

                                    id='Nominee Full Name'
                                    sx={{
                                        color: "rgba(0, 0, 0, 0.6)",
                                        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                                        width: "100%", fontSize: "15px", fontWeight: "normal",
                                        margin: '15px 0'

                                    }}
                                // helperText={error ? errorMessageFN : ""}
                                />
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Start Date"
                                        inputFormat="dd/mm/yyyy"
                                        value={value}
                                        onChange={(newValue) => handleChange('dob', newValue)}
                                        renderInput={(param: any) => <TextField sx={{ width: "100%" }} {...param} />}
                                        components={{
                                            OpenPickerIcon: CalendarTodayIcon,
                                        }}
                                    />
                                </LocalizationProvider>
                                <FormControl fullWidth sx={{
                                    margin: '20px 0'

                                }}>
                                    <InputLabel id="demo-simple-select-label">Relationship with Proposer</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={nominee.relationship}
                                        label="Occupation"
                                        onChange={((e) => { handleChange('relationship', e.target.value) })}
                                    >
                                        <MenuItem value={'Wife'}>Wife</MenuItem>
                                        <MenuItem value={'Daughter'}>Daughter</MenuItem>
                                        <MenuItem value={"Son"}>Son</MenuItem>
                                        <MenuItem value={"Niece"}>Niece</MenuItem>
                                        <MenuItem value={"Nephew"}>Nephew</MenuItem>
                                        <MenuItem value={"Uncle"}>Uncle</MenuItem>
                                    </Select>
                                </FormControl>
                                <p className='fotterText'>Since the above nominee is a Minor, please provide the details of guardian </p>
                                <TextField
                                    type="text"
                                    // onBlur={handleBlur}
                                    label="Name of the guardian"
                                    name="Name of the guardian"
                                    value={nominee.gurdianName}
                                    onChange={((e) => { handleChange('gurdianName', e.target.value) })}
                                    fullWidth
                                    // error={error}

                                    id='Name of the guardian'
                                    sx={{
                                        color: "rgba(0, 0, 0, 0.6)",
                                        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                                        width: "100%", fontSize: "15px", fontWeight: "normal",
                                        margin: '15px 0'

                                    }}
                                // helperText={error ? errorMessageFN : ""}
                                />
                                <FormControl fullWidth sx={{
                                    margin: '20px 0'

                                }}>
                                    <InputLabel id="demo-simple-select-label">Relationship with Guardian</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={nominee.gurdianRelation}
                                        label="Relationship with Guardian"
                                        onChange={((e) => { handleChange('gurdianRelation', e.target.value) })}
                                    >
                                        <MenuItem value={'Mother'}>Mother</MenuItem>
                                        <MenuItem value={'Father'}>Father</MenuItem>

                                    </Select>
                                </FormControl>
                                <TextWithSwitch text="Is the address of guardian and nominee and same as proposer?" />
                                <p className='purpleText'>Address of Guardian</p>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <Checkbox onChange={(value)=>setSamePostalAddress(!samePostalAddress)} checked={samePostalAddress}/>
                                    <p>Same as proposer address</p>
                                </div>
                                {!samePostalAddress &&
                                <>
                                     <TextField
                                    type="text"
                                    // onBlur={handleBlur}
                                    label="Postal Address"
                                    name="Postal address"
                                    value={addressGuardian.postal}
                                    onChange={((e) => { handleAddressGuardianChange('postal', e.target.value) })}
                                    fullWidth
                                    // error={error}

                                    id='Postal Address'
                                    sx={{
                                        color: "rgba(0, 0, 0, 0.6)",
                                        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                                        width: "100%", fontSize: "15px", fontWeight: "normal",
                                        margin: '15px 0'

                                    }}
                                // helperText={error ? errorMessageFN : ""}
                                />
                                <TextField
                                    type="text"
                                    // onBlur={handleBlur}
                                    label="Pincode"
                                    name="pincode"
                                    value={addressGuardian.pincode}
                                    onChange={((e) => { handleAddressGuardianChange('pincode', e.target.value) })}
                                    fullWidth
                                    // error={error}

                                    id='Pincode'
                                    sx={{
                                        color: "rgba(0, 0, 0, 0.6)",
                                        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                                        width: "100%", fontSize: "15px", fontWeight: "normal",
                                        margin: '15px 0'

                                    }}
                                // helperText={error ? errorMessageFN : ""}
                                />
                                <TextField
                                    type="text"
                                    // onBlur={handleBlur}
                                    label="State"
                                    name="state"
                                    value={addressGuardian.state}
                                    onChange={((e) => { handleAddressGuardianChange('state', e.target.value) })}
                                    fullWidth
                                    // error={error}

                                    id='State'
                                    sx={{
                                        color: "rgba(0, 0, 0, 0.6)",
                                        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                                        width: "100%", fontSize: "15px", fontWeight: "normal",
                                        margin: '15px 0'

                                    }}
                                // helperText={error ? errorMessageFN : ""}
                                />
                                <TextField
                                    type="text"
                                    // onBlur={handleBlur}
                                    label="City"
                                    name="city"
                                    value={addressGuardian.city}
                                    onChange={((e) => { handleAddressGuardianChange('city', e.target.value) })}
                                    fullWidth
                                    // error={error}

                                    id='City'
                                    sx={{
                                        color: "rgba(0, 0, 0, 0.6)",
                                        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                                        width: "100%", fontSize: "15px", fontWeight: "normal",
                                        margin: '15px 0'

                                    }}
                                // helperText={error ? errorMessageFN : ""}
                                />
                                </>}
                           
                                <p className='purpleText'>Address of Nominee</p>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <p>Same as</p>
                                    <Checkbox onChange={(value)=>setSameNomineeAddress({ proposer:!sameNomineeAddress.proposer,gurdian:sameNomineeAddress.gurdian})} checked={sameNomineeAddress.proposer}/>
                                    <p>Proposer</p>
                                    <Checkbox onChange={(value)=>setSameNomineeAddress({ gurdian:!sameNomineeAddress.gurdian,proposer:sameNomineeAddress.proposer})} checked={sameNomineeAddress.guardian}/>
                                    <p>Guardian</p>
                                </div>
                                {!sameNomineeAddress.proposer && !sameNomineeAddress.gurdian
                                &&
                                <>
                                     <TextField
                                    type="text"
                                    // onBlur={handleBlur}
                                    label="Postal Address"
                                    name="Postal address"
                                    value={addressPostal.postal}
                                    onChange={((e) => { handleAddressPostalChange('postal', e.target.value) })}
                                    fullWidth
                                    // error={error}

                                    id='Postal Address'
                                    sx={{
                                        color: "rgba(0, 0, 0, 0.6)",
                                        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                                        width: "100%", fontSize: "15px", fontWeight: "normal",
                                        margin: '15px 0'

                                    }}
                                // helperText={error ? errorMessageFN : ""}
                                />
                                <TextField
                                    type="text"
                                    // onBlur={handleBlur}
                                    label="Pincode"
                                    name="pincode"
                                    value={addressPostal.pincode}
                                    onChange={((e) => { handleAddressPostalChange('pincode', e.target.value) })}
                                    fullWidth
                                    // error={error}

                                    id='Pincode'
                                    sx={{
                                        color: "rgba(0, 0, 0, 0.6)",
                                        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                                        width: "100%", fontSize: "15px", fontWeight: "normal",
                                        margin: '15px 0'

                                    }}
                                // helperText={error ? errorMessageFN : ""}
                                />
                                <TextField
                                    type="text"
                                    // onBlur={handleBlur}
                                    label="State"
                                    name="state"
                                    value={addressPostal.state}
                                    onChange={((e) => { handleAddressPostalChange('state', e.target.value) })}
                                    fullWidth
                                    // error={error}

                                    id='State'
                                    sx={{
                                        color: "rgba(0, 0, 0, 0.6)",
                                        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                                        width: "100%", fontSize: "15px", fontWeight: "normal",
                                        margin: '15px 0'

                                    }}
                                // helperText={error ? errorMessageFN : ""}
                                />
                                <TextField
                                    type="text"
                                    // onBlur={handleBlur}
                                    label="City"
                                    name="city"
                                    value={addressPostal.city}
                                    onChange={((e) => { handleAddressPostalChange('city', e.target.value) })}
                                    fullWidth
                                    // error={error}

                                    id='City'
                                    sx={{
                                        color: "rgba(0, 0, 0, 0.6)",
                                        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                                        width: "100%", fontSize: "15px", fontWeight: "normal",
                                        margin: '15px 0'

                                    }}
                                // helperText={error ? errorMessageFN : ""}
                                />

                                </>
                                }
                           
                            </div>
                           
                        </Grid>
                    </Grid>
                </Box>


            </Box>
            <ConfirmationModal open={openConfirmationModal} setOpen={setOpenConfirmationModal} onBtnPress={()=>{setOpenConfirmationModal(false);setOpenHdfcModal(true);setTimeout(()=>{setOpenCompleteModal(true)},2000)}}/>
            <HdfcModal open={openHdfcModal} setOpen={setOpenHdfcModal} />
            <CompleteModal open={openCompleteModal} setOpen={setOpenCompleteModal} onBtnPress={()=>{navigate('/home')}}/>
            <FooterWithBtn
                btnText='Continue'
                btnClick={() => { setOpenConfirmationModal(true) }}
            />
        </div >
    )
}

export default ProposalFormStep4