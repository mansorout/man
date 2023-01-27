import React, { useEffect, useState } from "react";
import { Box, Breadcrumbs, Button, FormControl, FormHelperText, Grid, InputLabel, inputLabelClasses, Link, MenuItem, Select, TextField, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import { getData, postData } from "../../Utils/api";
import { checkExpirationOfToken } from "../../Utils/globalFunctions";
import { setTokenExpiredStatusAction } from "../../Store/Authentication/actions/auth-actions";
import { useDispatch, useSelector } from "react-redux";
import siteConfig from "../../Utils/siteConfig";
import SprintMoneyLoader from "../CommonComponents/sprintMoneyLoader";
import { SprintMoneyMessanger } from "../CommonComponents/SprintMoneyMessanger";
import { getUserProfileDataThunk } from "../../Store/Authentication/thunk/auth-thunk";
import { store } from "../../Store/Store";


const enumErrorMsg = {
    PLEASE_ENTER_PAN: "Pan Number Required",

}

type kycDataProps = {
    name: string,
    dateOfBirth: string,
    relation: string



}

const initialFormData: kycDataProps = {
    name: "",
    dateOfBirth: "",
    relation: ""

}


const Nominee = () => {

    const navigate = useNavigate();
    const dispatchLocal = useDispatch();
    const [shouldButtonDisable, setShouldButtonDisable] = useState<boolean>(false);

    const [nomineename, setNomineeName] = useState<string>('');
    const [nomineeRelation, setNomineeRelation] = useState<string>('');
    const [nomineeDob, setNomineeDob] = useState<string>('');


    const [selectErrorMsg, setSelectErrorMsg] = useState('');

    const [nameError, setNameError] = useState(false);
    const [dobError, setDobError] = useState(false);
    const [relationError, setRelationError] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);
    const [dialog, setShowDialog] = useState<boolean>(false);
    const [succesmsg, setSuccesMsg] = useState<string>("");
    const [errorMsg, setErrorMsg] = useState("");
    const [userDetails, setUserDetails] = useState<any>({});
    const [disablenomineeButton, setDisablenomineeButton] = useState<boolean>(true);
    const [kyc, setKycData] = useState<kycDataProps>({ ...initialFormData });

    const [formdata, setFormdata] = useState<kycDataProps>({
        ...initialFormData
    });

    //  data taking form edit profile api

    // const g_profileData: any = useSelector((state: any) => state?.authReducer?.profile?.data);

    // console.log(g_profileData)

    // useEffect(() => {
    //     if (g_profileData?.userdetails) getUserProfileData();
    //   }, [g_profileData?.userdetails]);

    //   console.log(g_profileData?.userdetails)





    const handlechange = (e: any) => {
        e.preventDefault();
        let { name, value } = e.target;

        formdata.name !== '' ? setNameError(false) : setNameError(true)
        formdata.dateOfBirth !== '' ? setDobError(false) : setDobError(true)
        formdata.relation !== '' ? setRelationError(false) : setRelationError(true)

        setFormdata({
            ...formdata,
            [name]: value
        })
    }

    // console.log(formdata)

    useEffect(() => {
        if (formdata.name !== '' && null && formdata.dateOfBirth !== '' && formdata.relation !== '') {

            setDisablenomineeButton(false)
        }

    }, [formdata])

    const formData = {
        fullname: formdata.name,
        dateofbirth: formdata.dateOfBirth,
        relation_id: formdata.relation

    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {

        if (formdata.name !== '' && formdata.dateOfBirth !== "NaN-NaN-NaN" && formdata.relation !== '') {

            setLoading(true);
            setShouldButtonDisable(true)
            postData(
                formData,
                siteConfig.AUTHENTICATION_NOMINEE_ADD,
                siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
                siteConfig.AUTHENTICATION_API_ID
            )
                .then(res => res.json())
                .then((data) => {
                    setShouldButtonDisable(false);
                    setSuccesMsg(data?.status?.message)
                    setLoading(false);
                    if (data.status === true) {
                        setSuccesMsg("Nominee Added Successfully")
                    }
                    else {
                        setErrorMsg("Something Went Wrong")
                    }




                    if (checkExpirationOfToken(data?.code)) {
                        dispatchLocal(setTokenExpiredStatusAction(true));
                        return;
                    }

                    if (data?.error) {
                        return;
                        setErrorMsg(data?.error)

                    }


                    setShowDialog(true)
                })
                .catch(err => {
                    // console.log(err)
                })
            setShowDialog(true)
        }


        else {

            {
                formdata.name !== '' ? setNameError(false) : setNameError(true)
            }
            {
                formdata.dateOfBirth !== "NaN-NaN-NaN" ? setDobError(false) : setDobError(true)
            }
            {
                formdata.relation > "1" ? setRelationError(false) : setRelationError(true)
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


    useEffect(() => {
        getUserProfileData();
        // getkycData()
    }, [])

    const getUserProfileData = () => {
        getData(
            siteConfig.AUTHENTICATION_PROFILE_VIEW,
            siteConfig.CONTENT_TYPE_APPLICATION_JSON,
            siteConfig.AUTHENTICATION_API_ID
        )
            .then(res => res.json())
            .then(data => {
                if (checkExpirationOfToken(data?.code)) {
                    dispatchLocal(setTokenExpiredStatusAction(true));
                    return;
                }

                if (data?.error === true) {
                    return;
                }
                const response = data?.data

                if (response.userdetails?.customer_id != 0) {
                    setUserDetails(response);
                    setNomineeName(response.kycdetails?.nomineedetails?.nominee_name)
                    setNomineeRelation(response.kycdetails?.nomineedetails?.relation)
                    setNomineeDob(response.kycdetails?.nomineedetails?.nominee_dob)
                    setFormdata((prev: kycDataProps) => ({
                        ...prev,
                        name: response.kycdetails?.nomineedetails?.nominee_name,
                        dateOfBirth: response.kycdetails?.nomineedetails?.nominee_dob,
                        relation: response.kycdetails?.nomineedetails?.relation_id,

                    }))
                }




            })
            .catch(err => {

            })



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
                    <Grid item xs={12} sm={11} md={10} sx={{
                        height: "100vh",
                        overflow: "scroll",
                        width: "100%",
                        display: "block",
                        justifyContent: "center",
                    }}>
                        <Toolbar />
                        <Breadcrumbs className="boxBreadcrumb" sx={{ margin: "27px 0px 21px 25px" }}>
                            <Link href="/home">Home</Link>
                            <Link onClick={() => { navigate('/viewprofile') }}>View Profile</Link>
                            <Typography sx={{
                                fontSize: '12px',
                                color: '#8787a2'
                            }}>Nominee & Declarations</Typography>
                        </Breadcrumbs>
                        <Box className="BoxPadding">
                            <Box component="form" sx={{
                                gap: { xs: '15px', sm: '26px', md: '17px', lg: '2vw' },
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
                                }}>Add Nominee & Declarations </Typography>

                                <FormControl>
                                    <TextField
                                        inputProps={{
                                            maxLength: 30,
                                        }}
                                        InputLabelProps={{
                                            shrink: true,
                                            sx: {
                                                color: "#3c3e42",
                                                [`&.${inputLabelClasses.shrink}`]: {
                                                    color: "#000000",
                                                    opacity: "0.6"

                                                }
                                            }
                                        }}
                                        onKeyPress={e => !/^[a-zA-Z_ ]*$/.test(e.key) && e.preventDefault()}
                                        // required
                                        label="Full Name"
                                        value={formData?.fullname}
                                        name="name"
                                        onChange={handlechange}
                                        error={nameError}
                                        helperText={nameError ? "Please enter Full Name" : ''}
                                    />

                                </FormControl>

                                <FormControl>
                                    <TextField

                                        placeholder="MM-DD-YYYY"
                                        InputLabelProps={{
                                            shrink: true,
                                            sx: {
                                                color: "#3c3e42",
                                                [`&.${inputLabelClasses.shrink}`]: {
                                                    color: "#000000",
                                                    opacity: "0.6"

                                                }
                                            }
                                        }}
                                        onKeyPress={(e) =>
                                            /[^(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$]$/.test(e.key) &&
                                            e.preventDefault()
                                        }
                                        required
                                        type="date"
                                        label="Date of Birth"
                                        value={formdata.dateOfBirth}
                                        name="dateOfBirth"
                                        onChange={handlechange}
                                        error={dobError}
                                        helperText={dobError ? "Please choose a date" : ''}
                                        inputProps={{
                                            max: "2023-01-01",
                                            min: "1950-01-01"
                                        }}
                                    />
                                </FormControl>

                                <FormControl>
                                    <InputLabel>Relation</InputLabel>
                                    <Select

                                        label={relationError ? "Please choose a relation" : "Relation"}
                                        value={formData.relation_id}
                                        onChange={handlechange}
                                        error={relationError}
                                        name="relation"
                                    >

                                        <MenuItem value="9">Daughter</MenuItem>
                                        <MenuItem value="8">Son</MenuItem>
                                        <MenuItem value="7">Wife</MenuItem>
                                        <MenuItem value="6">Husband</MenuItem>
                                        <MenuItem value="5">Mother</MenuItem>
                                        <MenuItem value="4">Father</MenuItem>

                                    </Select>
                                    <Box component="span" className="select-box" sx={{
                                        color: '#d32f2f',
                                        fontSize: '12px',
                                        padding: "8px 0px 0px 12px"
                                    }}>{relationError ? 'Please choose a relation' : ""}</Box>
                                    {/* <FormHelperText>Error</FormHelperText> */}
                                </FormControl>

                                <FormControl>
                                    <Button variant="contained"
                                        // disabled={disablenomineeButton}
                                        //  sx={{

                                        // }}

                                        style={style.button}
                                        onClick={handleClick}><Typography sx={{
                                            color: "white", fontSize: "16px",
                                            fontweight: "500"
                                        }}>Submit Details</Typography></Button>
                                </FormControl>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <SprintMoneyMessanger open={dialog} btnText={"Back to View Profile"} btnClick={() => navigate('/viewprofile')} errorText={errorMsg} succesText={succesmsg} handleClose={() => setShowDialog(false)} />
        </Box>
    )
};

export default Nominee;


