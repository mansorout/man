import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import { Box, styled } from '@mui/system'
import { Grid, Modal, Theme, Typography } from '@mui/material'



import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import FooterBtnWithBox from '../CommonComponents/FooterBtnWithBox'

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



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

import CloseIcon from '@mui/icons-material/Close';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';
import LoopIcon from '@mui/icons-material/Loop';
import Divider from '@mui/material/Divider';
import { SuccessLogo } from '../../Assets';

const style = {
    button3: {
        height: "48px",
        boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
        backgroundColor: "#23db7b",
        marginBottm: "10px",
        width: "100%",
        maxWidth: "400px",
    } as React.CSSProperties,

    text: {
        color: "white"
    },
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

    popHeading: {
        textAlign: 'left'
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


const AddMoreFundsModal = (props: any) => {
    const [openRealPaymentModal, setOpenRealPaymentModal] = useState<boolean>(false)
    const [TFValue, setTFValue] = useState<any>("")
    const [showDatepicker, setshowDatepicker] = useState<boolean>(true);
    const [dateConfirmModal, setDateConfirmedModal] = useState<boolean>(false)
    const classes = useStyles()
    const theme = useTheme();
    const navigate = useNavigate();
    const [insuranceAmount, setInsuranceAmount] = useState<string>('')
    // const [insuranceAmountError, setInsuranceAmountError] = useState<boolean>(false)
    const [sid, setSID] = React.useState<Dayjs | null>(null);
    const [sidError, setsidError] = useState<boolean>(false)
    const [quickPickAmount, setQuickPickAmount] = useState<string[]>(['+1000 ', '+5000 ', '+10000 '])
    const [showPlanDetailSubmit, setShowPlanDetailSubmit] = useState<boolean>(false)
    const [amountSelect, setOneTimeAmount] = useState<string>('')
    const [setAmountError, setAmountSelectError] = useState<boolean>(false)

    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));


    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setSID(null)
        setOneTimeAmount('oneTime');
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

        setAmountSelectError(false)
        setOneTimeAmount((event.target as HTMLInputElement).value);
    };



    const feildValidation = (props: any) => {
        if (props !== '' && props !== null && props !== undefined) {
            return true
        } else {
            return false
        }
    }

    const handleAmount = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {

        setTFValue(e.target.value)
        setshowDatepicker(false)


    }

    const handlesubmitDetail = () => {
        if (feildValidation(sid) && feildValidation(amountSelect)) {
            setShowPlanDetailSubmit(true)
            setTimeout(() => {
                setDateConfirmedModal(true)
            }, 1000);
        } else {
            !feildValidation(sid) && setsidError(true)
            !feildValidation(amountSelect) && setAmountSelectError(true)

        }
    }

    console.log(TFValue)

    return (
        <div>





            <Dialog
                open={props.open}

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
                        <Button style={{ color: 'var(--typeIndigoColor)' }} autoFocus onClick={props.close}>
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
                                    <b style={{ fontSize: 'var(--fontSize5)', marginBottom: '0px', color: '#6c63ff', textAlign: "left" }}>Add More funds to </b><br />
                                    <b style={{ color: '#3c3e42', fontWeight: 500, fontSize: 'var(--fontSize14)', marginTop: '5px', height: "34px" }}>Axis Small Cap Fund Regular Growth Fund</b>
                                </div>
                                <Divider sx={{ marginTop: "10px" }} />
                                <FormControl sx={{ marginTop: "10px" }} className={classes.radioGroup} fullWidth>

                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        style={{ justifyContent: 'left' }}
                                        onChange={handleGenderSelect}
                                    >
                                        <FormControlLabel control={<RadioCmp
                                            value="onetime"
                                            selectoin={setOneTimeAmount}
                                            errorShow={setAmountError}
                                            errorRemove={setAmountSelectError}
                                            prop="One-Time"
                                            selectedItem={amountSelect}
                                        />} label="" />
                                        <FormControlLabel control={<RadioCmp
                                            value="mothly"
                                            selectoin={setOneTimeAmount}
                                            errorShow={setAmountError}
                                            errorRemove={setAmountSelectError}
                                            prop="Monthly"
                                            selectedItem={amountSelect}
                                        />} label="" />

                                    </RadioGroup>
                                </FormControl>



                                <FormControl className={classes.radioGroup} fullWidth>
                                    <TextField
                                        //  onChange={(newValue) => setTFValue(newValue.target.value)} 
                                        onChange={handleAmount}
                                        fullWidth sx={{ color: "#919eb1", fontSize: "17px" }} label="Enter Lumpsum Investment Amount" id="fullWidth" />
                                    <Box sx={{ paddingTop: '1px', }}>
                                        <ul className={classes.quickSelectWrapper}>
                                            {
                                                quickPickAmount.map((item, index) => (
                                                    <li key={index} onClick={selectFromQuickPick}>{item}</li>
                                                ))
                                            }
                                        </ul>
                                    </Box>
                                </FormControl>

                                {showDatepicker ? "" : <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="SIP Installment Date"
                                        value={sid}
                                        onChange={(newValue) => {
                                            setSID(newValue);
                                            setsidError(false)
                                        }}
                                        renderInput={(params) => <TextField {...params} style={{ marginBottom: '20px' }} error={sidError} fullWidth />}
                                    />
                                  

                                </LocalizationProvider>


                                }

                                <Button sx={{ borderRadius: "8px !important" }} autoFocus onClick={handlesubmitDetail} className={classes.showPlanBtn} fullWidth>
                                    Buy Now
                                </Button>



                            </div>
                            :
                            <div className={classes.showPlanThankuDetail}>

                                <p style={{ color: 'var(--typeIndigoColor)', fontSize: 'var(--subTitleFontSize)' }}>SprintMoney is processing your
                                    investment account...</p>
                                      {/* <LoopIcon style={{ marginTop: '15px', color: 'var(--ui1Color)' }} /> */}
                                

                            </div>
                       
                        

                       
                    }

                </DialogContent>

            </Dialog>

            <Modal open={dateConfirmModal} onClose={() => setDateConfirmedModal(false)}>
                <Box style={{
                    height: "-webkit-fill-available",
                    width: "90%",
                    maxWidth: "330px",
                    borderRadius: "8px 8px 0px 0px",
                    boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.2)",
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    overflow: "hidden",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)"
                }}>
                    <Box my={2} style={{     paddingTop: "20px", display: "flex", alignItems: "center", justifyContent: "center", width: "50px", height: '50px', borderRadius: "50%", }}>
                        <img src={SuccessLogo} style={{ width: "90px", color: "white", paddingTop: "29px" }} />
                    </Box>
                    <Typography style={{ paddingTop: "53px", fontSize: "24px", color: "#3c3e42", fontWeight: "500" }}>Date Confirmed</Typography>
                    <Typography mx={2} mb={4} style={{ fontSize: "12px", color: "#7b7b9d", textAlign: "center", fontWeight: "500" }}>Your monthly SIP date is 08th of every month.</Typography>
                    <Button variant="contained" style={style.button3} fullWidth onClick={() => { navigate('/payusingnetbanking')}} >
                        <Typography style={style.text} className="largeButtonText"> Continue to Payment</Typography>
                    </Button>
                </Box>
            </Modal>

        </div >
    )
}

export default AddMoreFundsModal