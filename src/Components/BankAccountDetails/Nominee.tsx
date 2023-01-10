import React, { useEffect, useState } from "react";
import { Box, Breadcrumbs, Button, FormControl, Grid, InputLabel, inputLabelClasses, Link, MenuItem, Select, TextField, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from 'react-router-dom';
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import { getData, postData } from "../../Utils/api";
import { checkExpirationOfToken } from "../../Utils/globalFunctions";
import { setTokenExpiredStatusAction } from "../../Store/Authentication/actions/auth-actions";
import { useDispatch } from "react-redux";
import siteConfig from "../../Utils/siteConfig";
import SprintMoneyLoader from "../CommonComponents/sprintMoneyLoader";
import { SprintMoneyMessanger } from "../CommonComponents/SprintMoneyMessanger";
import { getUserProfileDataThunk } from "../../Store/Authentication/thunk/auth-thunk";
import { store } from "../../Store/Store";


const enumErrorMsg = {
    PLEASE_ENTER_PAN: "Pan Number Required",

}


const Nominee = () => {

    const navigate = useNavigate();
    const dispatchLocal = useDispatch();
    const [shouldButtonDisable, setShouldButtonDisable] = useState<boolean>(false);

    const [nomineename, setNomineeName] = useState('');
    const [nomineeRelation, setNomineeRelation] = useState('');
    

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
    const [formdata, setFormdata] = useState<any>({
        name: "",
        dateOfBirth: "",
        relation: ""

    });
    // const [formData, setFormData] = useState<formDataProps>({ ...initialFormData });






    /*
        const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value.trim();
            setName(value);
            const pattern = /^[A-Za-z\s\.]+$/;
            if (!pattern.test(value)) {
                setNameError(true);
            } else {
                setNameError(false);
                
            }
        }
    */
    // const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    //     setNameError(false);
    //     const value = e.target.value;
    //     setName(value);

    //     const pattern = /[A-Za-z]+/;
    //     if (!pattern.test(value)) {
    //         setNameError(true);
    //     } else {
    //         setNameError(false);

    //     }
    // }

   


    const handlechange = (e: any) => {
        e.preventDefault();
        let { name, value } = e.target;


        setFormdata({
            ...formdata,
            [name]: value
        })
    }


    useEffect(() => {
        if (formdata.name !== '' && formdata.dateOfBirth !== '' && formdata.relation!== ''  ) {

            setDisablenomineeButton(false)
        }
        console.log(formdata.name)
        console.log(formdata.dateOfBirth)
        console.log(formdata.relation)
    }, [formdata])

    const formData = {
        fullname: formdata.name,
        dateofbirth: formdata.dateOfBirth,
        relation_id: formdata.relation

    }

    // useEffect(()=>{

    //    console.log(name)
    //    console.log(dateOfBirth)
    //    console.log(relation)
    // },[])

   
    // console.log(name)
    // console.log(dateOfBirth)
    // console.log(relation)





    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        //    if(userDetails.userdetails?.customer_id != 0){

        //    }
        //    else{

        //    }

        // if (name === '') {
        //     setNameError(true);
        // } else if (dateOfBirth === '') {
        //     setDobError(true);
        // } else if (relation === '') {
        //     setRelationError(true);
        //     setSelectErrorMsg('Please select a relation');
        // }

        // else {
        //     // navigate('/viewprofile');
        // }
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

                // console.log("profile saved");
                setShowDialog(true)
                // navigate('/viewprofile');
            })
            .catch(err => {
                // console.log(err)
            })
        setShowDialog(true)


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
                    dispatch(setTokenExpiredStatusAction(true));
                    return;
                }

                if (data?.error === true) {
                    return;
                }
                const response = data?.data
                // console.log(data.kycDetails?.ischequeavailable)
                // console.log(response)
                // console.log(response.userdetails.customer_id)

                if (response.userdetails?.customer_id != 0) {
                    setUserDetails(response);
                    setNomineeName(response.kycdetails?.nomineedetails?.nominee_name)
                    setNomineeRelation(response.kycdetails?.nomineedetails?.relation)
                    // console.log(response.kycdetails?.nomineedetails?.relation)
                }




            })
            .catch(err => {
                // console.log(err);
            })

        store.dispatch(getUserProfileDataThunk());

    }

    // console.log(userDetails?.userdetails?.customer_id)
    // console.log(userDetails?.kycdetails?.pannumber)

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
                            <Link href="/viewprofile">View Profile</Link>
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
                                    value={formdata.name}
                                    name="name"
                                    onChange={handlechange}
                                    error={nameError}
                                    helperText={nameError ? "Please enter Full Name" : ''}
                                />
                            </FormControl>

                            <FormControl>
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
                                    onKeyPress={(e) =>
                                        /[^(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$]$/.test(e.key) &&
                                        e.preventDefault()
                                    }
                                    required
                                    type="date"
                                    // label="Date of Birth"
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
                                    value={formdata.relation}
                                    onChange={handlechange}
                                    error={relationError}
                                    name="relation"
                                >
                                    <MenuItem value="9">Doughter</MenuItem>
                                    <MenuItem value="8">Son</MenuItem>
                                    <MenuItem value="7">Wife</MenuItem>
                                    <MenuItem value="6">Husband</MenuItem>
                                    <MenuItem value="5">Mother</MenuItem>
                                    <MenuItem value="4">Father</MenuItem>

                                </Select>
                                <Box component="span" className="select-box" sx={{
                                    color: 'red',
                                    fontSize: '12px',
                                    marginTop: '2px',
                                }}>{relationError ? selectErrorMsg : ''}</Box>
                            </FormControl>

                            <FormControl>
                                <Button disabled={disablenomineeButton} variant="contained"
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
            <SprintMoneyMessanger open={dialog} btnText={"Back to View Profile"} btnClick={() => navigate('/viewprofile')} errorText={errorMsg} succesText={succesmsg} />
        </Box>
    )
};

export default Nominee;
function dispatch(arg0: { type: string; payload: any; }) {
    throw new Error("Function not implemented.");
}

