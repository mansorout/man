import { Box, Breadcrumbs, Button, FormControl, FormControlLabel, FormLabel, Grid, Link, Radio, RadioGroup, TextField, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { store } from '../../Store/Store';
//import './BankAccountDetails.css';
import { bankuserdetails } from "../../Store/Reducers/action";
import { submitPostuserdetails } from '../../Store/Reducers/action'
import { useNavigate } from 'react-router-dom';
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";

const BankAccountDetails = () => {

    const navigate = useNavigate();
    function handleSubmit() {
        // addUserDEtails("")
        store.dispatch(submitPostuserdetails({ 'userdata': bankformData }))

        navigate('/completedview');


    }

    const style = {
        main: {
            boxSizing: "border-box",
            backgroundColor: "#f9f9f9",
            height: "100vh"
        } as React.CSSProperties,
    };

    //  const [postUserdetails,setPostUserdetails] = useState<any>({

    //     EnterIFSCcode:""
    //  })
    const [bankformData, setBankFormData] = useState<any>({
        EnterIFSCcode: "",
        accounttype: "",
        accountnumber: "",


        // firstName: "",
        // middleName: "",
        // lastName: "",
        // emailaddress: "",
        // mobilenumber: "",
        // dateofbirth: "",
        // pincode: "",
        // gender: "Female",
        // CountrySecond: "",
        // StateOfBirth: "",
        // city: "",
        // CityofResidence: "",
        // IncomeSlab: "",
        // CountryofBirth: "",
        // Placeofbirth: "",
        // addressline1: "",
        // CountryFirst: "",
        // state: "",



    })
    const handleChange = (e: any) => {
        const value = e.target.value;
        setBankFormData({ bankformData, [e.target.name]: value })

        // 




    }
    if (bankformData.EnterIFSCcode?.length === 10) {
        store.dispatch(bankuserdetails({ 'bankuserdata': bankformData }))
    }
    console.log(bankformData.EnterIFSCcode?.length)

    return (
        <Box style={{ width: "100vw" }}>
            <Navbar />
            <Box sx={style.main}>
                <Grid container spacing={0} >
                    <Grid item xs={0} sm={1} md={2}>
                        <Toolbar />

                        <Sidebar />
                    </Grid>
                    <Grid container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}>
                        <Toolbar />
                        <Box component="form" sx={{
                            width: '100%',
                            maxWidth: '500px',
                            gap: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            padding: '1.5rem',
                            borderRadius: '0.5rem',
                            boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
                            backgroundColor: '#fff',
                            fontFamily: 'Roboto',
                            fontSize: '14px',
                            marginTop: '6vw'
                        }}>
                            <Breadcrumbs sx={{
                                fontSize: '12px',
                                color: '#6c63ff',
                                marginBottom: '3vw',
                            }}>
                                <Link href="/home">Home</Link>
                                <Link href="/vp">View Profile</Link>
                                <Typography sx={{
                                    fontSize: '12px',
                                    color: '#373e42'
                                }}>Bank Account</Typography>
                            </Breadcrumbs>
                            <Typography sx={{
                                fontSize: '14px',
                                fontWeight: 500,
                                color: '#3c3e42',

                            }}>Add Bank Account Details</Typography>

                            <FormControl>
                                <FormLabel sx={{
                                    fontSize: '14px',
                                    fontWeight: 500,
                                    color: '#6c63ff',
                                }}>Select your account type</FormLabel>
                                <RadioGroup defaultValue="savings">
                                    <FormControlLabel control={<Radio />} label="Savings"
                                        value={bankformData.accounttype}
                                        onChange={handleChange}

                                    />
                                    <FormControlLabel control={<Radio />} label="Current"
                                        value={bankformData.accounttype}
                                        onChange={handleChange}
                                    />
                                </RadioGroup>
                            </FormControl>

                            <FormControl>
                                <TextField
                                    required id="outlined-ifsc-code"
                                    label="Enter IFSC code"
                                    value={bankformData.EnterIFSCcode}
                                    onChange={handleChange}
                                    name="EnterIFSCcode"

                                />
                            </FormControl>

                            <FormControl>
                                <TextField type="password"
                                    id="outlined-bank-acc-no"
                                    required label="Bank Account Number"
                                    value={bankformData.accountnumber}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl>
                                <TextField required
                                    id="confirmed-bank-acc-no"
                                    label="Confirm Bank Account Number"
                                    value={bankformData.ConfirmaccountNumber}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl>
                                <TextField required
                                    label="Account Holder's Name"
                                    value={bankformData.AccountHoldersName}
                                    onChange={handleChange}
                                />
                            </FormControl>

                            <FormControl>
                                <Button variant="contained" sx={{
                                    borderRadius: '0.5rem',
                                    boxShadow: '0 0.25rem 0.5rem 0 rgba(35, 219, 123, 0.4)',
                                    backgroundColor: '#23db7b',
                                    padding: '1rem',
                                    textTransform: 'capitalize',

                                }}
                                    onClick={handleSubmit}
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
