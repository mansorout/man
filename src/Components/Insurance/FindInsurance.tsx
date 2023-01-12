import React, { useEffect, useRef, useState } from 'react'
import { Box, styled } from '@mui/system'
import { Grid, LinearProgress, Modal, Switch, Theme, Typography } from '@mui/material'
import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar'
import { Drawer as DrawerList, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import Slider from "react-slick";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import InsuranceTerms from './InsuranceTerms'
import GetInsurance from '../ULIP/GetInsurance'
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
import FooterWithBtn from '../CommonComponents/FooterWithBtn';
import Card from '@mui/material/Card';
import { InsuranceCard, SelectGender } from '../../Modal/InsuranceCard';
import LinearProgressBar from '../CommonComponents/LinearProgressBar';
import './insurance.css'
import CardWithImage from '../CommonComponents/CardWithImage';
import { manicon } from '../../Assets';
import CardWithImageAndCount from '../CommonComponents/CardWithImageAndCount';

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

const FindInsurance = () => {
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
                    <Grid container className="SideBarStyle">
                        <Grid sx={{ marginBottom: '60px', backgroundColor: '#f9f9f9', height: { xs: "auto", sm: "inherit" }, padding: 2, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll", }, paddingLeft: { xs: "15px", sm: '105px !important', md: '245px !important' } }} item xs={12}>
                            <p style={{paddingLeft:"3%"}} >Let’s find right Insurance</p>
                            <div className='Progress__BarStyle'>
                            <div className="progressContainer">
                                <p style={{ color: '#f9f9f9' }}>STEP 1/2</p>
                                <p style={{ color: '#ffffff' }}>Help us to select the members you want to insure</p>
                                <Box width="100%" >
                                    <LinearProgressBar value={10} />
                                </Box>
                            </div>
                            </div>
                       
                     <div className="widthStyleHalfbar">
                        <div style={{display:'flex', justifyContent:'center',width:"100%"}} className="halfStepStyle">
                                <div className='genderSelect'>
                                    <p className='purpleText'>I'm a </p>
                                    <div className='genderContainer'>
                                        {SelectGender.map((item, index) => {
                                            return (
                                                <CardWithImage text={item.desc} headIcon={item.logo} isSelected={genderSelect == item.desc} btnClick={() => { setGenderSelect(item.desc)}} />
                                            )
                                        })}
                                        </div>
                                    <p className='purpleText' id="purpletexttwo">I want health cover for</p>
                                    <CardWithImageAndCount text={'Me'} headIcon={manicon} isSelected={me} btnClick={() => { setMe(!me)}} />
                                    <CardWithImageAndCount text={'Spouse'} headIcon={manicon} isSelected={spouse} btnClick={() => { setSpouse(!spouse)}} />
                                    <CardWithImageAndCount text={'Daughter'} headIcon={manicon} isSelected={daughter} btnClick={() => {setDaughter(!daughter) }} inc={() => {setDaughterCount(daughterCount+1) }} dec={() => {daughterCount && setDaughterCount(daughterCount-1) }} isCount={true} count={daughterCount} />
                                    <CardWithImageAndCount text={'Son'} headIcon={manicon} isSelected={son} btnClick={() => { setSon(!son)}} inc={() => {setSonCount(sonCount+1) }} dec={() => {sonCount && setSonCount(sonCount-1)}} isCount={true} count={sonCount} />
                                    <CardWithImageAndCount text={'Father'} headIcon={manicon} isSelected={father} btnClick={() => {setFather(!father) }} />
                                    <CardWithImageAndCount text={'Mother'} headIcon={manicon} isSelected={mother} btnClick={() => {setMother(!mother) }} />

                                </div>
                            </div>
                               </div>
                      
                        </Grid>
                    </Grid>
                </Box>


            </Box>
            <FooterWithBtn
                btnText='Continue'
                btnClick={() => { navigate('/healthInsurance/findInsurance2')}}
            />
        </div >
    )
}

export default FindInsurance