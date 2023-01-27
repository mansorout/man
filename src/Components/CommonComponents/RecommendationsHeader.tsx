import React, { useState, useEffect, useRef } from 'react'
import { Dialog, Grid, Modal, Theme, Typography } from '@mui/material'
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
    MONTHLY,
    ULIP_LUMPSUM,
    ULIP_MONTHLY,
    insuranceUlipLumpsumAction,
    insuranceUlipMonthlyAction,
    insuranceUlipAmount
} from '../../Store/Duck/InvestmentType'
import { isMultipleofNumber, numDifferentiation } from '../../Utils/globalFunctions';
import siteConfig from '../../Utils/siteConfig';
import { globalConstant } from '../../Utils/globalConstant';
import './recommandation.css'

const useStyles: any = makeStyles((theme: Theme) => ({
    recommendationsHeaderBox: {
        backgroundColor: 'var(--ui1Color)',
        // padding: '15px',
        margin: '0px -25px',
        '@media(max-width: 500px)': {
            margin: '0px 0px',
        },
        color: 'var(--uiWhite)',
        position: 'relative',
    },
    rupeesIcon: {
        fontSize: "16px !important",
    },
    inputWrapper: {
        position: 'absolute',
        top: '-180%',
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
            background: "#0e0e0e2b",
            color: "#0000007d",
            boxShadow: "none",
        },
        '& button:hover': {
            fontSize: 'var(--subTitleFontSize)',
            minWidth: '110px',
            background: "#0e0e0e2b",
            color: "#0000007d",
            boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
        }
    },
    inputWrapperActiveState: {
        top: '100%',
    },
    headerSelect: {
        margin: '0px !important',
        padding: '0px 15px !important',
        '& label': {
            color: 'var(--uiWhite) !important',
            left: "16px",
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
            color: 'var(--uiWhite) !important',
        },
        '& svg': {
            color: 'var(--uiWhite)',
            fontSize: "16px !important"
        },
        '& input': {
            color: 'var(--uiWhite)',
            border: 'none'
        },
        '& fieldset': {
            border: 'none',
        },
        '& input::-webkit-outer-spin-button': {
            WebkitAppearance: 'none',
            '-webkit-appearance': 'none !important',
            margin: '0'
        },
        '& input::-webkit-inner-spin-button': {
            WebkitAppearance: 'none',
            '-webkit-appearance': 'none !important',
            margin: '0'
        }
    },
    modalTextButton: {
        boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
        backgroundColor: "var(--primaryColor) !important",
        color: 'var(--uiWhite) !important',
    },
    modalText: {
        padding: '20px'
    },
    updateBtn: {

    }
}))


function useOutsideAlerter(ref:any) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event:any) {
        if (ref.current && !ref.current.contains(event.target)) {
          alert("You clicked outside of me!");
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
interface RecommendationsHeaderPropsType {
    selectTextLabel: string;
    selectArray: any;
    selectChoosedValue: string;
    changeSelectEvent: (event: SelectChangeEvent) => void;
    investmentTypeLabel: string;
    // investmentTypeStartIcon: React.ReactElement<any>;
    // investmentTypeEndIcon: React.ReactElement<any>;
    investmentType: string;
    investmentAmount: string;
    // changeInvestmentTypeEvent: (event: React.ChangeEvent<HTMLInputElement>) => void;
    boxInputLabelText: string;
    boxInputShow: boolean;
    boxInputShowHandleChange: () => void;
    boxInputHideHandleChange: () => void;
    // boxInputStartIcon: React.ReactElement<any>;
    boxInputButtonText: string;
    // boxInputInvestmentAmount: string;
    // boxInputHandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const enumElss = Object.freeze({
    ELSS: 'ELSS'
})

const RecommendationsHeader = (props: RecommendationsHeaderPropsType) => {
    const classes = useStyles();
    const dispatch: any = useDispatch(); 
    const wrapperRef = useRef(null);
    // const { investmentType, investmentAmount } = useSelector((state: any) => state.SaveTaxInvestmentType)

    // const [premiumPaymentTerm, setPremiumPaymentTerm] = useState<string>('5')
    // const [investmentAmount, setInvestmentAmount] = useState<string>('')
    const [amount, setAmount] = useState<string>('')
    const [boxHideShow, setBoxHideShow] = useState(true)
    const [validationAlertDialog, setValidationAlertDialog] = useState({
        msg: '',
        bool: false,
    })
    // const [inputFeildShow, setInputFeildShow] = useState<boolean>(false)

    
    function handleClickOutside(event:any) {
        // @ts-ignore
            if (wrapperRef?.current && !wrapperRef?.current?.contains(event.target)) {
            //   alert("You clicked outside of me!");
            //   setBoxHideShow(false)
              props?.boxInputHideHandleChange()
            }
    }

    // useEffect(() => {
    //     /**
    //      * Alert if clicked on outside of element
    //      */
            
    //     function handleClickOutside(event:any) {
    //         // @ts-ignore
    //             if (wrapperRef?.current && !wrapperRef?.current?.contains(event.target)) {
    //               alert("You clicked outside of me!");
    //             }
    //     }
    //     // Bind the event listener
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //       // Unbind the event listener on clean up
    //       document.removeEventListener("mousedown", handleClickOutside);
    //     };
    //   }, [wrapperRef]);

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
        if (parseInt(amount) > 150000) {
            setValidationAlertDialog({
                msg: 'Amount should be less than 150000',
                bool: true,
            })
            return
        }

        if (props?.investmentType === LUMPSUM) {
            if (isMultipleofNumber(parseInt(amount), 100)) {
                dispatch(SaveTaxInvestmentAmount(amount))
                props?.boxInputHideHandleChange()
            } else {
                setValidationAlertDialog({
                    msg: 'Enter amount multiple of 100!',
                    bool: true,
                })
            }
        } else if (props?.investmentType === MONTHLY) {
            if (parseInt(amount) < 15000) {
                // alert('alert')
                setValidationAlertDialog({
                    msg: 'Amount should be more than 15,000',
                    bool: true,
                })
                return
            }
            dispatch(SaveTaxInvestmentAmount(amount))
        } else if (props?.investmentType === ULIP_LUMPSUM) {
            if (isMultipleofNumber(parseInt(amount), 100)) {
                dispatch(insuranceUlipAmount(amount))
                props?.boxInputHideHandleChange()
            } else {
                alert('Enter amount multiple of 100!')
            }
        } else if (props?.investmentType === ULIP_MONTHLY) {
            dispatch(insuranceUlipAmount(amount))
        } else {
            // if (isMultipleofNumber(parseInt(amount), 100)) {
                localStorage.setItem(siteConfig.SIP_USER_AMOUNT, amount?.toString());
                props?.boxInputHideHandleChange()
                console.log("props?.investmentAmount :", props?.investmentAmount)
                console.log("localStorage.getItem(siteConfig?.SIP_USER_AMOUNT) :", localStorage.getItem(siteConfig?.SIP_USER_AMOUNT))
            // } else {
            //     setValidationAlertDialog({
            //         msg: 'Enter amount multiple of 100!',
            //         bool: true,
            //     })
            // }
        }
    }

    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    });
   
//    according to width we can render class conditionally

    console.log(width)

    return (
        <div  className='Bannerside'>
              <Box className={classes.recommendationsHeaderBox}>
            <Grid container>
                {
                    props?.investmentType !== enumElss.ELSS ? (
                <Grid xs={7} sm={6} item sx={{ display: 'flex', justifyContent: 'flex-end', borderRight: '1px solid #fff6', padding: '15px' }}>
                    <FormControl variant="standard" sx={{ maxWidth: 220 }} className={classes.headerSelect + " " + "dropdownSlect"} fullWidth>
                        <InputLabel id="demo-simple-select-standard-label">{props?.selectTextLabel}</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            value={props?.selectChoosedValue}
                            onChange={props?.changeSelectEvent}
                            label="Age"
                        >
                            {props?.selectArray.map((item:any, index:number) => (
                                <MenuItem value={item} key={index}>{item} Years</MenuItem>
                            ))}
                            {/* <MenuItem value={5}>5 Years</MenuItem>
                            <MenuItem value={7}>7 Years</MenuItem>
                            <MenuItem value={10}>10 Years</MenuItem> */}
                        </Select>
                    </FormControl>
                </Grid>) :null
}
                <Grid xs={props?.investmentType !== enumElss.ELSS? 5 : 12} sm={props?.investmentType !== enumElss.ELSS? 6 : 12} item sx={{ padding: '15px' }}>
                    <Box sx={{textAlign: props?.investmentType !== enumElss.ELSS ? 'left' : 'center'}}>
                        <TextField
                            label={props?.investmentTypeLabel}
                            id="outlined-start-adornment"
                            value={props?.investmentAmount}
                            type='number'
                            InputProps={{
                                startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} />,
                                endAdornment: <Box sx={{display: 'flex' , color: 'var(--uiWhite)', alignItems: 'center'}}>
                                    {
                                        width < 468 ?  "" : props?.investmentType === LUMPSUM || props?.investmentType === ULIP_LUMPSUM ? 'Annually' : 'Monthly'
                                    }
                            
                                     <CreateOutlinedIcon sx={{ cursor: 'pointer', marginLeft: '10px' }} onClick={() => {
                                    props?.boxInputShowHandleChange()
                                    document.addEventListener("mousedown", handleClickOutside);
                                }} />
                                </Box>
                                // readOnly: investmentType === 'monthly' ? false : true,
                            }}
                            className={classes.headerInvestmentTypeInput + " " + "AnnullyStyle"}
                        />
                    </Box>
                </Grid>
            </Grid>
            <Box ref={wrapperRef} className={`${classes.inputWrapper} ${props?.boxInputShow ? classes.inputWrapperActiveState : ''}`} sx={{ width: { xs: '90%', sm: '35%' } }}>
                <TextField
                    label="Amount I want to invest monthly"
                    id="outlined-start-adornment"
                    value={amount}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>{
                        setAmount(event.target.value)
                    }
                    }
                    type='number'
                    InputProps={{
                        endAdornment: <Button disabled={false} className={classes.modalTextButton} onClick={handleInvestmentAmount} variant="contained">
                            {props?.boxInputButtonText} </Button>,
                        startAdornment: <CurrencyRupeeIcon className={classes.rupeesIcon} />,
                        // readOnly: investmentType === 'monthly' ? false : true,
                    }}
                    className={classes.textField}
                    fullWidth
                />
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
        </div>
      
    )
}

export default RecommendationsHeader;