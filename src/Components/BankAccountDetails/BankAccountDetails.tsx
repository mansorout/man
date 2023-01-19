import { Box, Breadcrumbs, Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, InputAdornment, Link, Radio, RadioGroup, TextField, Toolbar, Typography } from "@mui/material";
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
import { postData } from "../../Utils/api";
import { useDispatch, useSelector } from "react-redux";
import SprintMoneyLoader from "../CommonComponents/sprintMoneyLoader";
import { SprintMoneyMessanger } from "../CommonComponents/SprintMoneyMessanger";



type addbankaccountdataprops = {
    ifsc: any,
    accounttype: any
    accountnumber :any



}


const initialbankData: addbankaccountdataprops = {
    ifsc: "",
    accounttype: "",
    accountnumber : ""

}

type addbankaccountdatapropsnonmand = {
    
    confirmbankaccount: any
    accountHolder :any



}

const initialbankDatanonmand: addbankaccountdatapropsnonmand = {
   
    confirmbankaccount: "",
    accountHolder : ""

}

const activeAccountType = {
    SAVINGS: 'savings',
    CURRENT: 'current',
}




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
    const [passwordsMatch, setPasswordsMatch] = useState(false);
    const [shouldButtonDisable, setShouldButtonDisable] = useState<boolean>(false);
    const [dialog, setShowDialog] = useState<boolean>(false);
    const [succesmsg, setSuccesMsg] = useState<string>("");
    const [errorMsg, setErrorMsg] = useState("");
    const [bankdetails, setBankDetails] = useState<addbankaccountdataprops>({ ...initialbankData });
    const [bankdetailsnonmand, setBankDetailsnonmand] = useState<addbankaccountdatapropsnonmand>({ ...initialbankDatanonmand });

    const [error, setError] = useState<boolean>(false)
    const [accountType, setAccountType] = useState<any>(activeAccountType);

    // regexpression validation

    let ifscreg = /[A-Z|a-z]{4}[0][a-zA-Z0-9]{6}$/;
    const userData: any = useSelector(
        (state: any) => state?.authReducer?.profile?.data?.kycdetails?.bankdetails);

    console.log(userData?.accountholdername)

    useEffect(()=>{
        setBankDetails((prev: addbankaccountdataprops) => ({
            ...prev,
            ifsc: userData?.ifsc,
            accountnumber: userData?.accountnumber,
            
        
    
        }))

        setBankDetailsnonmand((prev: addbankaccountdatapropsnonmand) => ({
            ...prev,
            accountHolder: userData?.accountholdername
        }))
        
    },[])


    const handlechange = (e: any) => {
        e.preventDefault();
        let { name, value } = e.target;

        setBankDetails({
            ...bankdetails,
            [name]: value

        })
    }

    const handlechangenonmand = (e: any) => {
        e.preventDefault();
        let { name, value } = e.target;

        setBankDetailsnonmand({
            ...bankdetailsnonmand,
            [name]: value

        })
    }



    // console.log(accountType)

    console.log(bankdetails)

    // console.log(bankdetailsnonmand)

    function handleSubmit(event: any) {
        //store.dispatch(submitPostuserdetails({ 'userdata': bankformData }));


        // bankdetails.confirmbankaccount !== '' &&
        if (bankdetails.ifsc !== '' && bankdetails.accounttype !== '' && bankdetails.accountnumber !== '') {
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
                .catch(err => {
                    console.log(err)
                })
        } else {
            {
                bankdetails.ifsc !== '' ? setIfscError(false) : setIfscError(true)
            }
            {
                bankdetails.accountnumber  !== '' ? setBankAcNoError(false) : setBankAcNoError(true)
            }
            {
                bankdetails.accounttype !== '' ? setAccountTypeError(false) : setAccountTypeError(true)
            }
            {
                bankdetailsnonmand.accountHolder !== '' ? setAccountHolderError(false) : setAccountHolderError(true)
            }
            {
                bankdetailsnonmand.confirmbankaccount  !== '' ? setConfirmBankAcNoError(false) : setConfirmBankAcNoError(true)
            }

        }
    }

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


    const handleAccountTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAccountType((event.target as HTMLInputElement).value);
        setAccountTypeHelperText('');
        setAccountTypeError(false);
    }




    const handleIFSCChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let reg = /[A-Z|a-z]{4}[0][a-zA-Z0-9]{6}$/;
        const value = e.target.value;
        setIfscCode(value);
        if (value.match(reg)) {
            console.log("Correct IFSC Code")

            setIfscError(false);
        }
        else {
            console.log("Wront Ifsc");
            setIfscError(true);



        }

    }




    const bankAcNoPattern = /^[A-Z0-9]+$/;

    const handleBankAcNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setBankAcNo(value);
        if (!bankAcNoPattern.test(value) && e.target.value.trim().length != 10) {
            setBankAcNoError(true)
        } else {
            setBankAcNoError(false);
        }
    }

    const handleConfirmBankAcNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setConfirmBankAcNo(value);

        if (!bankAcNoPattern.test(value)) {
            setConfirmBankAcNoError(true)
        } else {
            setConfirmBankAcNoError(false);
        }

        if (value === bankAcNo) {
            setPasswordsMatch(true);
        } else {
            setPasswordsMatch(false);
        }
    }

    const handleAccountHolderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setAccountHolder(value);
        const pattern = /[A-Za-z]+/;
        if (!pattern.test(value)) {
            setAccountHolderError(true);
        } else {
            setAccountHolderError(false);

        }
    }

    const handlechange1 = () => {
        console.log("nooo")
    }


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
                                        value={accountType}
                                        onChange={handleAccountTypeChange}
                                    >
                                        <FormControlLabel

                                            control={<Radio defaultChecked
                                                sx={{
                                                    color: "#3D70B2"[800],
                                                    "&.Mui-checked": {
                                                        color: "#09b85d"
                                                    }
                                                }} />}
                                            label="Savings"
                                            onChange={() => {
                                                setAccountType('savings');
                                                setBankDetails({ ...bankdetails, accounttype: 'savings' })
                                            }}
                                            value="savings"
                                        />
                                        <FormControlLabel
                                            control={<Radio defaultChecked
                                                sx={{
                                                    color: "#3D70B2"[800],
                                                    "&.Mui-checked": {
                                                        color: "#09b85d"
                                                    }
                                                }} />}
                                            label="Current"
                                            onChange={() => {
                                                setAccountType('current'); setBankDetails({ ...bankdetails, accounttype: 'current' })

                                            }}
                                            value="current"
                                        />
                                    </RadioGroup>
                                    <FormHelperText sx={{
                                        color: '#d32f2f',
                                        fontSize: '0.75rem'
                                    }}>{accountTypeError ? "Select Type" : ''}</FormHelperText>
                                </FormControl>

                                <FormControl>
                                    <TextField
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
                                        required
                                        // id="outlined-ifsc-code"
                                        label="Enter IFSC code"
                                        value={bankdetails.ifsc}
                                        onChange={handlechange}
                                        name="ifsc"
                                        error={ifscError}
                                        helperText={ifscError ? "Please enter a valid IFSC Code" : ""}
                                        inputProps={{
                                            maxLength: 11,
                                        }}
                                    />
                                </FormControl>

                                <FormControl >
                                    <TextField
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        type="password"
                                        id="outlined-bank-acc-no"
                                        required
                                        label="Bank Account Number"
                                        onKeyPress={(e) =>
                                            /[^(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$]$/.test(e.key) &&
                                            e.preventDefault()
                                        }
                                        value={bankdetails.accountnumber}
                                        name="accountnumber"
                                        onChange={handlechange}
                                        error={bankAcNoError}
                                        helperText={bankAcNoError ? "Please enter a valid Account Number" : ""}
                                        InputProps={{
                                            endAdornment: passwordsMatch ? <InputAdornment position="end"><img src={ContactTick} width="22px" alt="Tick" /></InputAdornment> : '',
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
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onKeyPress={(e) =>
                                            /[^(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$]$/.test(e.key) &&
                                            e.preventDefault()
                                        }

                                        required
                                        name="confirmbankaccount"
                                        label="Confirm Bank Account Number"
                                        value={bankdetails.accountnumber}
                                        onChange={handlechangenonmand}
                                        error={confirmBankAcNoError}
                                        helperText={confirmBankAcNoError ? "Bank Account Number do not match" : ""}
                                        InputProps={{
                                            endAdornment: passwordsMatch ? <InputAdornment position="end"><img src={ContactTick} width="22px" alt="Tick" /></InputAdornment> : '',
                                        }}
                                        inputProps={{
                                            maxLength: 16,
                                        }}
                                    />
                                </FormControl>

                                <FormControl >
                                    <TextField
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onKeyPress={e => !/^[a-zA-Z_ ]*$/.test(e.key) && e.preventDefault()}

                                        required
                                        label="Account Holder's Name"
                                        name="accountholdername"
                                        value={bankdetailsnonmand.accountHolder}
                                        onChange={handlechangenonmand}
                                        error={accountHolderError}
                                        helperText={accountHolderError ? "Please enter a valid Name" : ""}
                                        inputProps={{
                                            maxLength: 35,
                                        }}
                                    />
                                </FormControl>

                                <FormControl>
                                    <Button

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
