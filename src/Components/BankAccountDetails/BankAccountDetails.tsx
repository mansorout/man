import { Box, Breadcrumbs, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, InputAdornment, Link, Radio, RadioGroup, Stack, TextField, Toolbar, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { store } from '../../Store/Store';
import { bankuserdetails } from "../../Store/Reducers/action";
import { submitPostuserdetails } from '../../Store/Reducers/action'
import { useNavigate } from 'react-router-dom';
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import { ContactTick } from "../../Assets";
import siteConfig from "../../Utils/siteConfig";
import { checkExpirationOfToken } from "../../Utils/globalFunctions";
import { setTokenExpiredStatusAction } from "../../Store/Authentication/actions/auth-actions";
import { getDataWithoutToken, postData } from "../../Utils/api";
import { useDispatch, useSelector } from "react-redux";
import SprintMoneyLoader from "../CommonComponents/sprintMoneyLoader";
import { SprintMoneyMessanger } from "../CommonComponents/SprintMoneyMessanger";
import { RadioButtonChecked, RadioButtonUncheckedOutlined } from "@mui/icons-material";


const enumErrorMsg = {
    PLEASE_ENTER_VALID_IFSC: "Please enter a valid IFSC Code",
    INVALID_ACC_NUMBER: "Please enter a valid Account Number",
    ACC_NOT_MATCHED: "Account Number Not Matched",
    ACC_MATCHED: "Account Number Not Matched",
    ACC_HOLDER_NAME_REQUIRED: "Account Holder Name Required"

}


type addbankaccountdataprops = {
    ifsc: any,
    accounttype: any
    accountnumber: any
    confirmbankaccount: any
    accountHolder: any




}


const initialbankData: addbankaccountdataprops = {
    ifsc: "",
    accounttype: "",
    accountnumber: "",
    confirmbankaccount: "",
    accountHolder: "",

}

// type addbankaccountdatapropsnonmand = {

//     confirmbankaccount: any
//     accountHolder: any



// }

// const initialbankDatanonmand: addbankaccountdatapropsnonmand = {

//     confirmbankaccount: "",
//     accountHolder: ""

// }

// const activeAccountType = {
//     SAVINGS: 'savings',
//     CURRENT: 'current',
// }

type validateInputsProps = {
    ifsc: boolean,
    accountnumber: boolean,
    confirmbankaccount: boolean
    accountHolder: boolean


}
const initialValidateinputsData: validateInputsProps = Object.freeze({
    ifsc: false,
    accountnumber: false,
    confirmbankaccount: false,
    accountHolder: false
})



const BankAccountDetails = () => {


    const navigate = useNavigate();
    const dispatchLocal = useDispatch();

    const [ifscCode, setIfscCode] = useState('');
    const [bankAcNo, setBankAcNo] = useState('');
    const [confirmBankAcNo, setConfirmBankAcNo] = useState('');
    // const [accountType, setAccountType] = useState('');
    const [accountHolder, setAccountHolder] = useState('');


    const [ifscError, setIfscError] = useState(false);
    const [bankAcNoError, setBankAcNoError] = useState(false);
    const [confirmBankAcNoError, setConfirmBankAcNoError] = useState(false);
    const [accountHolderError, setAccountHolderError] = useState(false);
    const [accountTypeError, setAccountTypeError] = useState(false);

    const [accountTypeHelperText, setAccountTypeHelperText] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [shouldButtonDisable, setShouldButtonDisable] = useState<boolean>(false);
    const [dialog, setShowDialog] = useState<boolean>(false);
    const [succesmsg, setSuccesMsg] = useState<string>("");
    const [errorMsg, setErrorMsg] = useState("");
    const [bankdetails, setBankDetails] = useState<addbankaccountdataprops>({ ...initialbankData });
    // const [bankdetailsnonmand, setBankDetailsnonmand] = useState<addbankaccountdatapropsnonmand>({ ...initialbankDatanonmand });
    const [validateInputs, setValidateInputs] = useState<validateInputsProps>({ ...initialValidateinputsData });
    const [errorAcc, setErrorAcc] = useState<boolean>(false)
    const [cnfErrorAcc, setCnfErrorAcc] = useState<boolean>(false)
    // const [accountType, setAccountType] = useState<any>(activeAccountType);
    const [savingCheck, setSavingCheck] = useState(false)
    const [currentCheck, setCurrentCheck] = useState(false)
    const [disablecontinueButton, setdisablecontinueButton] = useState<boolean>(false)
    const [timePeriodSelected, setTimePeriodSelected] = React.useState<boolean[]>([true, false, false, false])
    const [adressFromApi, setadressFromApi] = useState("")
    const [bankNameFromApi, setbankNameFromApi] = useState("")
    const [hideBankDetails, sethideBankDetails] = useState(false)
    const [greenCheck, setGreenCheck] = useState<boolean>(false);

    // regexpression validation
    let ifscreg = /[A-Z|a-z]{4}[0][a-zA-Z0-9]{6}$/;
    let accRegex = /^(\d{10,16})$/
    const handleRegex = (regex: any, value: string) => regex.test(value);

    // let reg = /[A-Z|a-z]{4}[0][a-zA-Z0-9]{6}$/;
    const userData: any = useSelector(
        (state: any) => state?.authReducer?.profile?.data?.kycdetails?.bankdetails);

    // console.log(userData)

    useEffect(() => {
        if (userData) {
            setdisablecontinueButton(true)
            // console.log("disable button")
        }
        else {
            // console.log("enable disable button")
            setdisablecontinueButton(false)
        }
    }, [])

    const handleTimePeriodChange = (index: number) => {
        index === 0 ?
            setTimePeriodSelected([true, false])
            : index === 1 ? setTimePeriodSelected([false, true])
                : index === 2 ? setTimePeriodSelected([false, false, true, false])
                    : setTimePeriodSelected([false, false, false, true])
    }

    useEffect(() => {
        setBankDetails((prev: addbankaccountdataprops) => ({
            ...prev,
            ifsc: userData?.ifsc,
            accountnumber: userData?.accountnumber,
            accounttype: userData?.accounttype,
            accountHolder: userData?.accountholdername



        }))
    }, [])

    useEffect(() => {
        if (bankdetails?.accountnumber && bankdetails?.accountnumber.length) {
            regexValidate(accRegex, 'accountnumber', bankdetails.accountnumber);
        }
    }, [bankdetails?.accountnumber]);
    useEffect(() => {
        if (bankdetails?.confirmbankaccount && bankdetails?.confirmbankaccount.length) {
            confirmAcValidate('confirmbankaccount', bankdetails?.confirmbankaccount);
        }
    }, [bankdetails?.confirmbankaccount]);

    // console.log(validateInputs.accountnumber)

    const regexValidate = (regexType: any, name: string, value: string) => {
        let bFlag: boolean = false;

        if (!handleRegex(regexType, value)) {
            bFlag = true;
        } else {
            bFlag = false;
        }



        setValidateInputs(prev => ({ ...prev, [name]: bFlag }));
        return bFlag;
    }

    const confirmAcValidate = (name: string, value: string) => {
        let bFlag: boolean = false;

        if (value !== bankdetails.accountnumber) {
            setGreenCheck(false)
            bFlag = true;
        } else {
            setGreenCheck(true)
            bFlag = false;
        }



        setValidateInputs(prev => ({ ...prev, [name]: bFlag }));
        return bFlag;
    }

    const handlechange = (e: any) => {
        e.preventDefault();

        let { name, value } = e.target;
        // if (Object.keys(validateInputs).includes(name)){
        let isValid: boolean = false
        if (name === "ifsc") {
            regexValidate(ifscreg, name, value);
        } else if (name === "accountnumber") {
            regexValidate(accRegex, name, value);
        } else if (name === "confirmbankaccount") {
            confirmAcValidate(name, value);
        } else {
            setValidateInputs((prev: validateInputsProps) => ({
                ...prev,
                [name]: !value ? true : false
            }))
        }

        if (name === "accountHolder") {
            value = value.replace(/[^a-z]/gi, '');
        }



        setBankDetails({
            ...bankdetails,
            [name]: value


        })

        // console.log(name)
        // console.log(validateInputs.accountnumber)


    }
    const handleBlur = (e: any) => {

    }
    // console.log(bankdetails)

    // console.log(bankdetailsnonmand)

    // get account detail with ifsc number

    useEffect(() => {
        if (validateInputs?.ifsc === false) {
            getifscdetail(bankdetails.ifsc)
        }

    }, [bankdetails.ifsc])


    const getifscdetail = async (value: string) => {

        // let ifscnumber: number = await bankdetails.ifsc;

        getDataWithoutToken(
            siteConfig.AUTHENTICATION_IFSC_DETAILS + `?ifsc=${value}`,
            siteConfig.CONTENT_TYPE_APPLICATION_JSON,
            siteConfig.AUTHENTICATION_API_ID
        )
            .then(res => res.json())
            .then((data: any) => {
                if (data?.error === true) {
                    return;
                }

                
                setadressFromApi(data?.data?.address)
                
                if(data?.status != false ){
                    sethideBankDetails(true)
                }
                else{
                    sethideBankDetails(false)
                }
            

                setbankNameFromApi(data?.data?.bank)

            })
            .catch(err => {
                // console.log(err)
            })
    }
    const throwErrorOnWrongField = async () => {
        let throwError: boolean = true;
        let arrFormDataKeys: any[] = [...Object.keys(validateInputs)];

        let objValidateInputs: validateInputsProps = { ...validateInputs };
        for (let i = 0; i < arrFormDataKeys.length; i++) {
            let key = arrFormDataKeys[i];

            // @ts-ignore
            if (!bankdetails[key]) {
                throwError = true;
            } else {
                throwError = false
            }


            //@ts-ignore
            objValidateInputs[key] = throwError;
        }

        await setValidateInputs((prev: validateInputsProps) => ({
            ...prev,
            ...objValidateInputs
        }));
        return objValidateInputs;
    }

    const isAllFieldsValidated = async (func: () => void) => {
        // @ts-ignore
        let obj: validateInputsProps = await func();
        let arr: boolean[] = Object.values(obj).filter((item: boolean) => item === true);
        return arr ? arr.length : 0;
    }


    async function handleSubmit(event: any) {
        // console.log(validateInputs.accountnumber)
        // if (bankdetails.ifsc !== null && "" && bankdetails.accounttype !== null && "" && bankdetails.accountnumber !== null && "") {
        await isAllFieldsValidated(throwErrorOnWrongField)
            .then(res => {
                if (res) return;
                setShouldButtonDisable(true)
                postData(

                    bankdetails,
                    siteConfig.AUTHENTICATION_BANK_ADD,
                    siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
                    siteConfig.AUTHENTICATION_API_ID
                )
                    .then(res => res.json())
                    .then((data) => {
                        setShouldButtonDisable(false);
                        setShowDialog(true)
                        setSuccesMsg("Bank Details Saved")

                        if (checkExpirationOfToken(data?.code)) {
                            dispatchLocal(setTokenExpiredStatusAction(true));
                            return;
                        }

                        if (data?.error) {


                        }


                        setErrorMsg(data?.error)


                    })
            })

            .catch(err => {
                // console.log(err)
            })

    }

    // useEffect(() => {
    //     if (bankdetails.ifsc && bankdetails.ifsc.length) {
    //       regexValidate(emailRegex, 'emailaddress', formData.emailaddress);
    //     }
    //   }, [formData.emailaddress])

    const style = {
        button: {
            ml: 1,
            "&.MuiButtonBase-root:hover": {
                bgcolor: '#23db7b'
            },
            borderRadius: '0.5rem',
            boxShadow: '0 0.25rem 0.5rem 0 rgba(35, 219, 123, 0.4)',
            backgroundColor: '#23db7b',
            padding: '1rem',
            textTransform: 'capitalize'






        } as React.CSSProperties,
        main: {
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
            height: "100vh"
        } as React.CSSProperties,
    };


    // const handleAccountTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setAccountType((event.target as HTMLInputElement).value);
    //     setAccountTypeHelperText('');
    //     setAccountTypeError(false);
    // }

    // useEffect(() => {
    //     if (validateInputs?.confirmbankaccount === true) {

    //         setGreenCheck(false)
    //     }
    //     else {
    //         setGreenCheck(true)
    //     }
    // }, [validateInputs?.confirmbankaccount])



    return (
        <Box style={{ width: "100vw" }}>
            <Navbar />
            <SprintMoneyLoader loadingStatus={shouldButtonDisable} />
            <Box sx={style.main}>
                <Grid container spacing={0} >
                    <Grid item xs={0} sm={1} md={2}>
                        <Toolbar />
                        <Sidebar />
                    </Grid>
                    <Grid item xs={12} sm={11} md={10}>
                        <Toolbar />
                        <Breadcrumbs className="boxBreadcrumb" sx={{ margin: "27px 0px 21px 25px" }}>
                            <Link href="/home">Home</Link>
                            <Link onClick={() => { navigate('/viewprofile') }}>View Profile</Link>
                            <Typography sx={{
                                fontSize: '12px',
                                color: '#373e42'
                            }}>Bank Account</Typography>
                        </Breadcrumbs>
                        <Box className="BoxPadding">
                            <Box component="form" sx={{
                                gap: { xs: '15px', sm: '1.5vw', md: '1vw', lg: '1vw' },
                                width: '90%',
                                maxWidth: '488px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                padding: '20px',
                                borderRadius: '0.5vw',
                                boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
                                backgroundColor: '#fff',
                                fontFamily: 'Roboto',
                                fontSize: '14px',
                            }}>

                                <Typography sx={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    color: '#3c3e42',

                                }}>Add Bank Account Details</Typography>

                                <FormControl>
                                    <FormLabel id='account_type' sx={{
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        color: '#6c63ff',
                                    }}>Select your account type</FormLabel>
                                    <RadioGroup
                                        row
                                        name="accounttype"
                                        // value={accountType}
                                        onChange={handlechange}
                                    >
                                        <FormControlLabel

                                            control={<Checkbox onChange={() => { handleTimePeriodChange(0); setBankDetails({ ...bankdetails, accounttype: 'savings' }) }} checked={timePeriodSelected[0]} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                            label="Savings"

                                        // value="savings"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox onChange={() => { handleTimePeriodChange(1); setBankDetails({ ...bankdetails, accounttype: 'current' }) }} checked={timePeriodSelected[1]} icon={<RadioButtonUncheckedOutlined style={{ color: "#a5a5b9" }} />} checkedIcon={<RadioButtonChecked style={{ color: "#23db7b" }} />} />}
                                            label="Current"

                                        // value="current"
                                        />
                                    </RadioGroup>
                                    <FormHelperText sx={{
                                        color: '#d32f2f',
                                        fontSize: '0.75rem'
                                    }}>{accountTypeError ? "Select Type" : ''}</FormHelperText>
                                </FormControl>

                                <FormControl>
                                    <TextField
                                        inputProps={{
                                            maxLength: 11,
                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onKeyPress={(e) =>
                                            /[*|\":<>[\]{}`\\()';@&$]/im.test(e.key) &&
                                            e.preventDefault()
                                        }
                                        // onKeyPress={(e) =>
                                        //     /([A-Za-z]){4}([0-9]){4}([A-Za-z]){1}$/.test(e.key) &&
                                        //     e.preventDefault()
                                        // }

                                        label="Enter IFSC code"
                                        value={bankdetails.ifsc === "null" ? "" : bankdetails.ifsc}
                                        onChange={handlechange}
                                        onBlur={handleBlur}
                                        name="ifsc"
                                        error={validateInputs?.ifsc}
                                        helperText={validateInputs?.ifsc ? "Please enter a valid IFSC Code" : ""}
                                    />
                                    {hideBankDetails ?
                                        <Box sx={{ backgroundColor: "#dff7ea", borderRadius: { xs: "4px", sm: "4px" }, margin: " 10px 0px", padding: "10px" }}>
                                            <Typography sx={{ fontSize: "14px", fontWeight: "500" }} >
                                                {bankNameFromApi}
                                            </Typography>
                                            <Typography sx={{ fontSize: "12px" }}>
                                                {adressFromApi}
                                            </Typography>
                                        </Box> : ""
                                    }
                                </FormControl>


                                <FormControl >
                                    <TextField
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        // type="password"
                                        id="outlined-bank-acc-no"

                                        label="Bank Account Number"
                                        onKeyPress={(e) =>
                                            /[^(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$]$/.test(e.key) &&
                                            e.preventDefault()
                                        }
                                        value={bankdetails.accountnumber === "null" ? "" : bankdetails.accountnumber}
                                        name="accountnumber"
                                        onChange={handlechange}
                                        onBlur={handleBlur}
                                        error={validateInputs?.accountnumber}
                                        helperText={validateInputs?.accountnumber ? "Please enter a valid Account Number" : ""}
                                        InputProps={{
                                            endAdornment: greenCheck ? <InputAdornment position="end"><img src={ContactTick} width="22px" alt="Tick" /></InputAdornment> : "",
                                            // helperText={  bankAcNoError ? "Please enter a valid Account Number" : ""},
                                        }}
                                        inputProps={{
                                            maxLength: 16,
                                            minLength: 11,
                                        }}
                                    />
                                </FormControl>

                                <FormControl >
                                    <TextField

                                        // .css-1t7imh1-MuiFormControl-root-MuiTextField-root .MuiOutlinedInput-root {
                                        //     box-shadow: 0 1px 4px 0 rgb(35 219 123 / 74%);
                                        // }

                                        sx={{
                                            "& .MuiOutlinedInput-root": {
                                                "& > fieldset": {
                                                    borderColor: greenCheck
                                                        ? "#23db7b"
                                                        : "",
                                                },
                                            }
                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onKeyPress={(e) =>
                                            /[^(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$]$/.test(e.key) &&
                                            e.preventDefault()
                                        }

                                        name="confirmbankaccount"
                                        label="Confirm Bank Account Number"
                                        value={bankdetails.confirmbankaccount === "null" ? "" : bankdetails.confirmbankaccount}
                                        onChange={handlechange}
                                        onBlur={handleBlur}
                                        error={validateInputs?.confirmbankaccount}
                                        helperText={validateInputs?.confirmbankaccount ? "Account Number Not Matched" : ""}
                                        InputProps={{

                                            endAdornment: greenCheck ? <InputAdornment position="end"><img src={ContactTick} width="22px" alt="Tick" /></InputAdornment> : "",
                                        }}
                                        inputProps={{
                                            maxLength: 16,
                                            minLength: 11,
                                        }}
                                    />
                                </FormControl>

                                <FormControl >
                                    <TextField
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onKeyPress={e => !/^[a-zA-Z_ ]*$/.test(e.key) && e.preventDefault()}
                                        label="Account Holder's Name"
                                        name="accountHolder"
                                        value={bankdetails.accountHolder}
                                        onChange={handlechange}
                                        onBlur={handleBlur}
                                        error={validateInputs.accountHolder}
                                        helperText={validateInputs.accountHolder ? "Please enter a valid Name" : ""}
                                        inputProps={{
                                            maxLength: 35,
                                        }}
                                    />
                                </FormControl>

                                <FormControl>
                                    <Button
                                        disabled={disablecontinueButton}
                                        variant="contained"
                                        onClick={handleSubmit}

                                        style={style.button}
                                    ><Typography sx={{ color: "white", size: "16px", fontWeight: "500" }}>
                                            Continue</Typography></Button>
                                </FormControl>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <SprintMoneyMessanger open={dialog} btnText={"Back to View Profile"} btnClick={() => navigate('/viewprofile')} errorText={errorMsg} succesText={succesmsg} />
        </Box>
    )
};

export default BankAccountDetails;


