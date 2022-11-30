import { ChangeEvent, useState } from "react";
import { Box, Breadcrumbs, Button, FormControl, Grid, InputAdornment, Link, TextField, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ContactError } from "../../Assets";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";

const PanUpdate = () => {

    const [value, setValue] = useState("");

    const error: string[] = useSelector((state: any) => state.error)

    const dispatch = useDispatch();
    const { addError, removeError } = bindActionCreators(ActionCreators, dispatch);
    const navigate = useNavigate();

    const validate = () => {
        const regex = /A-Za-z]{5}\d{4}[A-Za-z]/;
        if (!regex.test(value)) {
            addError('PAN_error')
        } else {
            removeError('PAN_error');
            navigate('/bad');
        }
    };

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
    };

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
                            width: '30.5rem',
                            gap: '2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            padding: '1.5rem',
                            borderRadius: '0.5rem',
                            boxShadow: '0 1px 5px 0 rgba(0, 0, 0, 0.12)',
                            backgroundColor: '#fff',
                            fontFamily: 'Roboto',
                            fontSize: '14px',
                            margin: '6vw',
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
                                }}>PAN Update</Typography>
                            </Breadcrumbs>
                            <Typography sx={{
                                fontSize: '14px',
                                fontWeight: 500,
                                color: '#3c3e42',
                            }}>Update PAN Details</Typography>


                            <FormControl>
                                <TextField
                                    required
                                    label="Enter your PAN number"
                                    helperText="Your PAN will be used to verify your KYC"
                                    value={value}
                                    sx={{
                                        "& .MuiInputLabel-root": { color: '#acb4bf' },
                                        "& .MuiOutlinedInput-root": {
                                            "& > fieldset": { borderColor: error?.includes("PAN") ? "#ff5300" : "#dddfe2" },
                                            "&:hover > fieldset": { borderColor: error?.includes("PAN") ? "#ff5300" : "#dddfe2" },
                                            "&.Mui-focused > fieldset": { borderColor: error?.includes("PAN") ? "#ff5300" : "#4b7bec", borderWidth: "1px", boxShadow: "0 4px 8px 0 rgba(75, 123, 236, 0.2)" },
                                        },
                                    }}
                                    InputProps={{
                                        endAdornment: error?.includes("PAN") ? <InputAdornment position="end"> <img src={ContactError} width="22px" alt="Cross" /> </InputAdornment> : "",
                                    }}
                                    inputProps={{ pattern: '[A-Za-z]{5}\d{4}[A-Za-z]' }}
                                    onChange={(e) => setValue(e.target.value)}
                                />
                            </FormControl>

                            <FormControl>
                                <Button variant="contained" style={style.button} fullWidth onClick={() => navigate("/completedview")} >
                                    <Typography style={style.text} className="largeButtonText">
                                        Continue
                                    </Typography>
                                </Button>
                            </FormControl>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
};

export default PanUpdate;   
