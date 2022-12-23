import { Box, Breadcrumbs, Button, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, InputAdornment, Link, Radio, RadioGroup, TextField, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { store } from '../../Store/Store';
import { bankuserdetails } from "../../Store/Reducers/action";
import { submitPostuserdetails } from '../../Store/Reducers/action'
import { useNavigate } from 'react-router-dom';
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import { ContactTick } from "../../Assets";


const BankAccountDetails = () => {

    const navigate = useNavigate();

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


    function handleSubmit(event: any) {
        //store.dispatch(submitPostuserdetails({ 'userdata': bankformData }));

        if (accountType === '') {
            setAccountTypeHelperText('Please select an option');
            setAccountTypeError(true);
        } else if (ifscCode === '') {
            setIfscError(true);
        } else if (bankAcNo === '') {
            setBankAcNoError(true);
        } else if (confirmBankAcNo === '') {
            setConfirmBankAcNoError(true);
        } else if (accountHolder === '') {
            setAccountHolderError(true);
        } else {
            navigate('/viewprofile');
        }
    }

    const style = {
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
        const value = e.target.value;
        setIfscCode(value);
        const pattern = /[A-Z]{4}0\d{6}/;
        if (!pattern.test(value)) {
            setIfscError(true);
        } else {
            setIfscError(false);
        }
    }

    const bankAcNoPattern = /^[A-Z0-9]+$/;

    const handleBankAcNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        setBankAcNo(value);
        if (!bankAcNoPattern.test(value)) {
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
    /*
        if (bankformData.EnterIFSCcode?.length === 10) {
            store.dispatch(bankuserdetails({ 'bankuserdata': bankformData }))
        }
        console.log(bankformData.EnterIFSCcode?.length)
    
        const validate = (event: React.ChangeEvent<HTMLInputElement>) => {
            const res = event.target.value;
            setValue(res);
            const regex = /[A-Za-z]{5}\d{4}[A-Za-z]/;
            console.log('res', res);
    
            if (res.length === 10 && !regex.test(res)) {
                const text = document.querySelector('.MuiFormHelperText-root');
                if (text) {
                    text.innerHTML = 'The PAN number you’ve entered is incorrect, please enter a valid PAN number.';
                }
                setError(true);
            } else if (res.length === 10) {
                
                navigate('/completedview');
            }
        };
    */
    return (
        <Box style={{ width: "100vw" }}>
            <Navbar />
            <Box sx={style.main}>
                <Grid container spacing={0} >
                    <Grid item xs={0} sm={1} md={2}>
                        <Toolbar />
                        <Sidebar />
                    </Grid>
                    <Grid container item xs={12} sm={11} md={10} sx={{ 
                        height: "100vh", 
                        overflow: "scroll",
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: { xs: '5vw', sm: '12vw', md: '28vw' }, 
                    }}>
                        <Toolbar />
                        <Breadcrumbs sx={{
                            fontSize: '12px',
                            color: '#6c63ff',
                            marginBottom: '3vw',
                        }}>
                            <Link href="/home">Home</Link>
                            <Link href="/viewprofile">View Profile</Link>
                            <Typography sx={{
                                fontSize: '12px',
                                color: '#373e42'
                            }}>Bank Account</Typography>
                        </Breadcrumbs>
                        <Box component="form" sx={{
                            gap: { xs: '1vw', sm: '1vw', md: '1vw', lg: '1vw' },
                            width: '90%',
                            maxWidth: '488px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            padding: '1.5vw',
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
                                        control={<Radio />}
                                        label="Savings"
                                        onChange={() => setAccountType('savings')}
                                        value="savings"
                                    />
                                    <FormControlLabel
                                        control={<Radio />}
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
                                    required
                                    id="outlined-ifsc-code"
                                    label="Enter IFSC code"
                                    value={ifscCode}
                                    onChange={handleIFSCChange}
                                    name="EnterIFSCcode"
                                    error={ifscError}
                                    helperText={ifscError ? "Please enter a valid IFSC Code" : ""}
                                />
                            </FormControl>

                            <FormControl>
                                <TextField
                                    type="text"
                                    id="outlined-bank-acc-no"
                                    required
                                    label="Bank Account Number"
                                    value={bankAcNo}
                                    onChange={handleBankAcNoChange}
                                    error={bankAcNoError}
                                    helperText={bankAcNoError ? "Please enter a valid Password" : ""}
                                    InputProps={{
                                        endAdornment: passwordsMatch ? <InputAdornment position="end"><img src={ContactTick} width="22px" alt="Tick" /></InputAdornment> : '',
                                    }}
                                />
                            </FormControl>

                            <FormControl>
                                <TextField
                                    required
                                    id="confirmed-bank-acc-no"
                                    label="Confirm Bank Account Number"
                                    value={confirmBankAcNo}
                                    onChange={handleConfirmBankAcNoChange}
                                    error={confirmBankAcNoError}
                                    helperText={confirmBankAcNoError ? "Passwords do not match" : ""}
                                    InputProps={{
                                        endAdornment: passwordsMatch ? <InputAdornment position="end"><img src={ContactTick} width="22px" alt="Tick" /></InputAdornment> : '',
                                    }}
                                />
                            </FormControl>

                            <FormControl>
                                <TextField
                                    required
                                    label="Account Holder's Name"
                                    value={accountHolder}
                                    onChange={handleAccountHolderChange}
                                    error={accountHolderError}
                                    helperText={accountHolderError ? "Please enter a valid Name" : ""}
                                />
                            </FormControl>

                            <FormControl>
                                <Button
                                    variant="contained"
                                    onClick={handleSubmit}
                                    sx={{
                                        borderRadius: '0.5rem',
                                        boxShadow: '0 0.25rem 0.5rem 0 rgba(35, 219, 123, 0.4)',
                                        backgroundColor: '#23db7b',
                                        padding: '1rem',
                                        textTransform: 'capitalize',
                                    }}
                                >Continue</Button>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
};

export default BankAccountDetails;
