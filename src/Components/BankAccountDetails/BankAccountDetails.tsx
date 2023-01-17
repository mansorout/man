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
import { useDispatch } from "react-redux";
import SprintMoneyLoader from "../CommonComponents/sprintMoneyLoader";
import { SprintMoneyMessanger } from "../CommonComponents/SprintMoneyMessanger";


const BankAccountDetails = () => {

    const navigate = useNavigate();
    const dispatchLocal = useDispatch();

    const [ifscCode, setIfscCode] = useState('');
    const [bankAcNo, setBankAcNo] = useState('');
    const [confirmBankAcNo, setConfirmBankAcNo] = useState('');
    const [accountType, setAccountType] = useState('');
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
    const [disablenomineeButton, setDisablenomineeButton] = useState<boolean>(true);
    console.log(bankAcNo.length)

    // useEffect(() => {
    //     if (bankAcNo.length  < 11) {
    //         setBankAcNoError(true)
    //         console.log(bankAcNoError)
    //     }
        
    // }, [bankAcNo])


    function handleSubmit(event: any) {
        //store.dispatch(submitPostuserdetails({ 'userdata': bankformData }));

        // if (accountType === '') {
        //     setAccountTypeHelperText('Please select an option');
        //     setAccountTypeError(true);
        // } else if (ifscCode === '') {
        //     setIfscError(true);
        // } else if (bankAcNo === '') {
        //     setBankAcNoError(true);
        // } else if (confirmBankAcNo === '') {
        //     setConfirmBankAcNoError(true);
        // } else if (accountHolder === '') {
        //     setAccountHolderError(true);
        // }





        // else {
        //     navigate('/viewprofile');
        // }

        const formData = {
            ifsc: ifscCode,
            accountnumber: confirmBankAcNo,
            accounttype: accountType

        }

        console.log(formData)

        setShouldButtonDisable(true)
        postData(
            formData,
            siteConfig.AUTHENTICATION_BANK_ADD,
            siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
            siteConfig.AUTHENTICATION_API_ID
        )
            .then(res => res.json())
            .then((data) => {
                setShouldButtonDisable(false);
                setShowDialog(true)
                setSuccesMsg("hiii")

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
        // if () {
        //     setBankAcNoError(true)
        //     console.log(bankAcNoError)
        // }!bankAcNoPattern.test(value) && e.target.value.trim().length != 10 &&

        if (bankAcNo.length  < 10  ) {
            setBankAcNoError(true)
            console.log("check")
        } else {
            setBankAcNoError(false);
        }
    }



    const handleConfirmBankAcNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setConfirmBankAcNo(value);
        // !bankAcNoPattern.test(value)
        console.log(bankAcNo !== confirmBankAcNo)
        console.log(bankAcNo.length === confirmBankAcNo.length )
        console.log(confirmBankAcNo)
        

        if (bankAcNo !== value) {
            setConfirmBankAcNoError(true)
            console.log("not matched")
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
                            <Link onClick={()=>navigate('/viewprofile')}>View Profile</Link>
                            <Typography sx={{
                                fontSize: '12px',
                                color: '#373e42'
                            }}>Bank Account</Typography>
                        </Breadcrumbs>
                        <Box className="BoxPadding">
                            <Box component="form" sx={{
                                gap: { xs: '15px', sm: '1vw', md: '1vw', lg: '1vw' },
                                width: '90%',
                                maxWidth: '488px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                padding: { xs: "12px", sm: '20px' },
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
                                            onChange={() => setAccountType('savings')}
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
                                            onChange={() => setAccountType('current')}
                                            value="current"
                                        />
                                    </RadioGroup>
                                    <FormHelperText sx={{
                                        color: 'red',
                                        fontSize: '12px'
                                    }}>{accountTypeError ? accountTypeHelperText : ''}</FormHelperText>
                                </FormControl>

                                <FormControl>
                                    <TextField
                                        onKeyPress={(e) =>
                                            /[*|\":<>[\]{}`\\()';@&$]/im.test(e.key) &&
                                            e.preventDefault()
                                        }
                                        // onKeyPress={(e) =>
                                        //     /([A-Za-z]){4}([0-9]){4}([A-Za-z]){1}$/.test(e.key) &&
                                        //     e.preventDefault()
                                        // }
                                        required
                                        id="outlined-ifsc-code"
                                        label="Enter IFSC code"
                                        value={ifscCode}
                                        onChange={handleIFSCChange}
                                        name="EnterIFSCcode"
                                        error={ifscError}
                                        helperText={ifscError ? "Please enter a valid IFSC Code" : ""}
                                        inputProps={{
                                            maxLength: 11,
                                        }}
                                    />
                                </FormControl>

                                <FormControl >
                                    <TextField
                                        type="password"
                                        id="outlined-bank-acc-no"
                                        required
                                        label="Bank Account Number"
                                        onKeyPress={(e) =>
                                            /[^(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$]$/.test(e.key) &&
                                            e.preventDefault()
                                        }
                                        value={bankAcNo}
                                        onChange={handleBankAcNoChange}
                                        error={bankAcNoError}
                                        helperText={bankAcNoError ? <p>Please enter a valid Account Number</p> : ""}
                                        InputProps={{
                                            endAdornment: passwordsMatch ? <InputAdornment position="end"><img src={ContactTick} width="22px" alt="Tick" /></InputAdornment> : '',

                                        }}
                                        inputProps={{
                                            maxLength: 16,
                                            minLength: 11,
                                        }}
                                    />
                                </FormControl>

                                <FormControl >
                                    <TextField
                                        onKeyPress={(e) =>
                                            /[^(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$]$/.test(e.key) &&
                                            e.preventDefault()
                                        }

                                        required
                                        id="confirmed-bank-acc-no"
                                        label="Confirm Bank Account Number"
                                        value={confirmBankAcNo}
                                        onChange={handleConfirmBankAcNoChange}
                                        error={confirmBankAcNoError || bankAcNoError}
                                        helperText={confirmBankAcNoError || bankAcNoError ? "Bank Account Number do not match" : ""}
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
                                        onKeyPress={e => !/^[a-zA-Z_ ]*$/.test(e.key) && e.preventDefault()}

                                        required
                                        label="Account Holder's Name"
                                        value={accountHolder}
                                        onChange={handleAccountHolderChange}
                                        error={accountHolderError}
                                        helperText={accountHolderError ? "Please enter a valid Name" : ""}
                                        inputProps={{
                                            maxLength: 35,
                                        }}
                                    />
                                </FormControl>

                                <FormControl>
                                    <Button
                                        disabled={disablenomineeButton}
                                        variant="contained"
                                        onClick={handleSubmit}
                                        // sx={{
                                        //     ml: 1,
                                        //     "&.MuiButtonBase-root:hover": {
                                        //         bgcolor: '#23db7b'
                                        //     },
                                        //     borderRadius: '0.5rem',
                                        //     boxShadow: '0 0.25rem 0.5rem 0 rgba(35, 219, 123, 0.4)',
                                        //     backgroundColor: '#23db7b',
                                        //     padding: '1rem',
                                        //     textTransform: 'capitalize',
                                        // }}
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
