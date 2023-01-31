import React, { ChangeEvent, useState } from "react";
import { Box, Breadcrumbs, Button, FormControl, Grid, InputAdornment, inputLabelClasses, Link, TextField, Toolbar, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { ContactError } from "../../Assets";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import { getCommonApiMsg, setDisableButtonAction } from "../../Store/Global/actions/global-actions";
import { postData } from "../../Utils/api";
import siteConfig from "../../Utils/siteConfig";
import { checkExpirationOfToken } from "../../Utils/globalFunctions";
import { setTokenExpiredStatusAction } from "../../Store/Authentication/actions/auth-actions";
import SprintMoneyLoader from "../CommonComponents/sprintMoneyLoader";
import { SprintMoneyMessanger } from "../CommonComponents/SprintMoneyMessanger";
import './panupdate.css'


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
        width: '100%',
    } as React.CSSProperties,
    footer2: {
        fontSize: '12px',
        color: '#7b7b9d',
        textAlign: 'center',
        width: '34.28vw',
    } as React.CSSProperties,

    pan: {
        textTransform: " uppercase",
    }
};


const PanUpdate = () => {

    const [value, setValue] = useState("");
    const [error, setError] = useState(false);
    const dispatchLocal = useDispatch();
    const [loading, setLoading] = useState<boolean>(false);
    const [shouldButtonDisable, setShouldButtonDisable] = useState<boolean>(false);
    const [dialog, setShowDialog] = useState<boolean>(false);
    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [panButton, setPanButton] = useState(true);

    //const error: string[] = useSelector((state: any) => state.error)

    const dispatch = useDispatch();
    const { addError, removeError } = bindActionCreators(ActionCreators, dispatch);
    const navigate = useNavigate();

    const validate = (event: React.ChangeEvent<HTMLInputElement>) => {
        let reg = /([A-Za-z]){5}([0-9]){4}([A-Za-z]){1}$/;
        const res = event.target.value?.trim();
        setValue(res);

        if (res.match(reg)) {
            console.log("correct pan")
            setPanButton(false)
            setError(false);
            setLoading(true);
        }
        else {
            console.log("Wrong pan");
            setError(true);

        }



    };



    // dispatch(setDisableButtonAction(true));
    // let objBody = {
    //     pannumber: value,
    //     type: "auth",
    // };
    // setShouldButtonDisable(true);

    let objBody = {
        pannumber: value,

    };
    



    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (value === '' || error) {
            setError(true);
            setPanButton(false)
        }
        // else if () {

        //   }

        else {
            // navigate('/viewprofile');

            // alert(value)
            dispatch(setDisableButtonAction(true));

            setShouldButtonDisable(true)
            postData(
                objBody,
                siteConfig.AUTHENTICATION_PAN_VERIFICATION,
                siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
                siteConfig.AUTHENTICATION_API_ID
            )
                .then(res => res.json())
                .then((data) => {
                    setShouldButtonDisable(false)
                    
                    setShowDialog(true)
                    dispatch(getCommonApiMsg(data));
                    if (data.status === true) {
                        setSuccessMsg("Pan Added Successfully")
                    }

                    if (checkExpirationOfToken(data?.code)) {
                        dispatchLocal(setTokenExpiredStatusAction(true));
                        return;
                    }

                    if (data?.error) {
                        setShowDialog(true)
                        if(data?.error?.length > 42){
                            setErrorMsg("Invalid Pan")
                        }
                        else{
                            setErrorMsg(data?.error)
                        }
                        
                        

                    }



                })
                .catch(err => {
                    console.log(err)
                })
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
                    <Grid item xs={12} sm={11} md={10} sx={{height: "100vh", padding: 0, boxSizing: "border-box", overflow: "scroll",}}>
                        <Toolbar />
                        <Breadcrumbs className="boxBreadcrumb" sx={{ margin: "27px 0px 21px 25px" }}>
                            <Link href="/home">Home</Link>
                            <Link onClick={() => navigate('/viewprofile')}>View Profile</Link>
                            <Typography sx={{
                                fontSize: '12px',
                                color: '#373e42'
                            }}>PAN Update</Typography>
                        </Breadcrumbs>
                        <Box className="BoxPadding">
                            <Box component="form" sx={{
                                gap: { xs: '15px', sm: '26px', md: '17px', lg: '2vw' },
                                width: '90%',
                                maxWidth: '488px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                padding: { xs: "10px", sm: "20px" },
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


                                <FormControl sx={{ padding: "16px 0px 0px 0px" }}>
                                    <TextField
                                        InputLabelProps={{
                                            sx: {
                                                color: "#3c3e42",
                                                [`&.${inputLabelClasses.shrink}`]: {
                                                    color: "#000000",
                                                    opacity: "0.6"

                                                }
                                            }
                                        }}
                                        inputProps={{
                                            maxLength: 10,
                                            style: { textTransform: "uppercase" }

                                        }}
                                        onKeyPress={(e) =>
                                            /([A-Za-z]){5}([0-9]){4}([A-Za-z]){1}$/.test(e.key) &&
                                            e.preventDefault()
                                        }
                                        required
                                        label="Enter your PAN number"
                                        placeholder="AAAAA9999A"
                                        helperText={error ? "The PAN number you’ve entered is incorrect, please enter a valid PAN number." : "Your PAN will be used to verify your KYC"}
                                        value={value}

                                        // error={validateInputs?.mobilenumber}
                                        error={error}
                                        onChange={validate}
                                        InputProps={{
                                            endAdornment: error ? <InputAdornment position="end"> <img src={ContactError} width="22px" alt="Cross" /> </InputAdornment> : "",
                                        }}
                                    />
                                </FormControl>

                                <FormControl sx={{ padding: "18px 0px 17px 0px" }}>
                                    <Button variant="contained" style={style.button} fullWidth onClick={handleClick} >
                                        <Typography style={style.text} className="largeButtonText">
                                            Continue
                                        </Typography>
                                    </Button>

                                </FormControl>
                            </Box>

                            <Box sx={{
                                marginTop: "15%",
                                backgroundColor: '#f9f9f9',
                            }}
                            >
                                <Box sx={{
                                    margin: "auto",
                                    // width: "304px",
                                }}>
                                    <Typography style={style.footer}>
                                        By submitting these details, you agree to share your details to BSE for
                                        further transactions
                                    </Typography>
                                    <Typography style={style.footer} sx={{
                                        fontWeight: 500,
                                        color: '#6c63ff',
                                    }}>
                                        <Link onClick={() => navigate('/termsandcondition')}>Terms and conditions</Link>
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Box>

            <SprintMoneyMessanger open={dialog} btnText={"Back to View Profile"} btnClick={() => navigate('/viewprofile')} errorText={errorMsg} succesText={successMsg} handleClose={()=>setShowDialog(false)} />
        </Box>
    )
};

export default PanUpdate;


