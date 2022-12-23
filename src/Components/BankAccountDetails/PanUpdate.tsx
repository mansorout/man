import React, { ChangeEvent, useState } from "react";
import { Box, Breadcrumbs, Button, FormControl, Grid, InputAdornment, Link, TextField, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ContactError } from "../../Assets";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";


const style = {
    button: {
        height: "48px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
        backgroundColor: "#23db7b",
        marginBottm: "10px",
        width: "100%",
        maxWidth: "30.5rem",
    } as React.CSSProperties,
    text: {
        color: "white"
    },
    main: {
        boxSizing: "border-box",
        backgroundColor: "#f9f9f9",
        height: "100vh"
    } as React.CSSProperties,
    footer: {
        fontSize: '12px',
        color: '#7b7b9d',
        textAlign: 'center',
        width: '23.28vw',
    } as React.CSSProperties,
};


const PanUpdate = () => {

    const [value, setValue] = useState("");
    const [error, setError] = useState(false);

    //const error: string[] = useSelector((state: any) => state.error)

    const dispatch = useDispatch();
    const { addError, removeError } = bindActionCreators(ActionCreators, dispatch);
    const navigate = useNavigate();

    const validate = (event: React.ChangeEvent<HTMLInputElement>) => {
        const res = event.target.value?.trim();
        setValue(res);
        const regex = /[A-Z]{5}\d{4}[A-Z]/;

        if (!regex.test(res)) {
            setError(true);
        } else {
            setError(false);
        }
    };

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (value === '' || error) {
            setError(true);
        } else {
            navigate('/viewprofile');
        }
    }

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
                        marginLeft: { xs: '4vw', sm: '12vw', md: '28vw' },
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
                            }}>PAN Update</Typography>
                        </Breadcrumbs>
                        <Box component="form" sx={{
                            gap: { xs: '1vw', sm: '1vw', md: '1.5vw', lg: '2vw' },
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
                            }}>Update PAN Details</Typography>


                            <FormControl>
                                <TextField
                                    required
                                    label="Enter your PAN number (AAAAA9999A format) "
                                    helperText={error ? "The PAN number you’ve entered is incorrect, please enter a valid PAN number." : "Your PAN will be used to verify your KYC"}
                                    value={value}
                                    error={error}
                                    onChange={validate}
                                    InputProps={{
                                        endAdornment: error ? <InputAdornment position="end"> <img src={ContactError} width="22px" alt="Cross" /> </InputAdornment> : "",
                                    }}
                                />
                            </FormControl>

                            <FormControl>
                                <Button variant="contained" style={style.button} fullWidth onClick={ handleClick } >
                                    <Typography style={style.text} className="largeButtonText">
                                        Continue
                                    </Typography>
                                </Button>
                            </FormControl>
                        </Box>

                    </Grid>
                    <Box sx={{
                        width: '83.75vw',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginLeft: '20vw',
                        backgroundColor: '#f9f9f9',
                    }}>
                        <Typography style={ style.footer }>
                            By submitting these details, you agree to share your details to BSE for
                            further transactions
                        </Typography>
                        <Typography style={ style.footer } sx={{
                            fontWeight: 500,
                            color: '#6c63ff',
                        }}>
                            <Link href="/termsandcondition">Terms and conditions</Link>
                        </Typography>
                    </Box>
                </Grid>
            </Box>
        </Box>
    )
};

export default PanUpdate;
