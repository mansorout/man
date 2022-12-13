import { Box, Grid, InputAdornment, Typography } from '@mui/material'
import Paper from "@mui/material/Paper";
import { ContactError, Mylocationicon } from "../../Assets/index";
import { girlicon } from '../../Assets/index'
import { girliconicon } from '../../Assets/index'
import { manicon } from '../../Assets/index'

// import EEditprofileCard from '../Buttons/EEditprofileCard'
// import { makeStyles,} from "@mui/styles";
import { makeStyles, createStyles } from "@mui/styles";
import clsx from "clsx";
import '../../Components/EditProfile/Editprofilescreen.css'
import { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react'
import { height, padding } from '@mui/system'
import MenuItem from '@mui/material/MenuItem';
import './style.css'
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { makeStyles } from "@material-ui/core/styles";

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { Form, useNavigate } from 'react-router-dom';
import { store } from '../../Store/Store';
import { submituserdetails } from '../../Store/Reducers/action';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";

import { FormHelperText } from '@mui/material';
import '../../Components/EditProfile/Editprofilescreen.css'
import { getValue } from '@testing-library/user-event/dist/utils';
import { setSyntheticLeadingComments } from 'typescript';
const langs = [{ name: "English", code: "en" }, { name: "German", code: "de" }];
const country = ["delhi", "kanpur"]
const State = [{ name: "up", code: "de" }, { name: "mp" }]
const pincode = [{ name: "208025" }]
const Cityofresidence = [{ name: "117/N/112" }]
function EditprofileCard() {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  const useStyles = makeStyles((theme: any) =>
    createStyles({
      paper: {
         textAlign: 'center',
         }, root: {
        flexGrow: 1,
      },
    }),
  ); const style = {
    containertwo: {
      backgroundColor: "#fff",
      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
      borderRadius: "8px",
      padding: "21px 40px",},
       cameraIcon: {
      borderRadius: "170px 175px 175px 163px",
      backgroundColor: '#23db7b',
      width: '30px',
      height: '30px',
      marginLeft: "auto",
      marginRight: "auto",
      padding: '15px',
      boxShadow: '0 0 10px 0 rgb(0 0 0 / 8%)',
      border: 'solid 1px rgba(0, 0, 0, 0.08)',
      display: "block",
      marginTop: "20px",
      marginBottom: "30px"
    },
     emailIcon: {
      borderRadius: "170px 175px 175px 163px",
      backgroundColor: '#64dbff',
      width: '80px',
      height: '80px',
      margin: '0 54px 22px 34px',
      padding: '20px',
      boxShadow: '0 0 10px 0 rgb(0 0 0 / 8%)',
      border: 'solid 1px rgba(0, 0, 0, 0.08)',
    },
    buttonbtn: {
      height: "48px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
      backgroundColor: "#23db7b",
      marginTop:"-24px",
      marginRight:"12px",
      width: "90%",
      maxWidth: "400px",
      transform: "translate(10px, -35px)"
    },
    ca: {
      backgroundColor: "#64dbff",
      width: "20px",
      height: "20px",
      padding: "10px",
      opacity: "0.9",
     } as React.CSSProperties,
    select: {
      color: "white",
      '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
        border: "1px solid white"
      },
      '& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon': {
        color: "white !important"
      },
      '&svg': {
        color: "white"
      }
    },
    text: {
      color: "white",

    }}
  const [formData, setFormData] = useState<any>({
    firstName: "",
    middleName: "",
    lastName: "",
    emailaddress: "",
    mobilenumber: "",
    dateofbirth: "",
    pincode: "",
    gender: "",
    CountrySecond: "",
    StateOfBirth: "",
    city: "",
    CityofResidence: "",
    IncomeSlab: "",
    CountryofBirth: "",
    Placeofbirth: "",
    addressline1: "",
    CountryFirst: "",
    state: "",})
  const [lastNameError, setLastNameError] = useState(false)
  const [MidNameError, setMidNameError] = useState(false)
  const [errormobilenumberone, setErrormobilenumberone] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [addresserrorone, setAddressErrorOne] = useState(false)
  const [dropValuestateerror, setDropValuestateError] = useState(false)
  const [drapdownresidenseerror, setDrapdownresidenseError] = useState(false)
  const [errorrsstate, setErrorsstate] = useState(false)
  const [errorPincode, setErrorPincode] = useState(false)
  const [errorcountryFirst, setErrorCountryFirst] = useState(false)
  const [errorincomeslabs, setErrorincomeslabs] = useState(false)
  const [error, setError] = useState(false)
  const [countryError, setCountryError] = useState(false)
  const [errorMessageFN, setErrorMessageFN] = React.useState<any>("");
  const [errorMesagemiddleName, setErrorMessagemiddleName] = useState("")
  const [errorMesageCountry, setErrorMessageCountry] = useState("")
  const [errorMessagelastname, setErrorMessagelastname] = useState("")
  const [errorMessagemobilenumber, setErrorMessagemobilenumber] = useState<any>("")
  const [errorMessageemail, setErrorMessageemail] = useState<any>("")
  const [errormessageState, setErrorMessageState] = useState<any>("")
  const [errormessageaddress, setErrorMessageAddresss] = useState<any>("")
  const [errormessagecityofresi, setErrorMessagecityofersi] = useState<any>("")
  const [errormessageStatee, setErrorMessageStatee] = useState<any>("")
  const [errormessagepincode, setErrorMessagePincode] = useState<any>("")
  const [errormessagefirstcountry, setErrorMessagefirstcountry] = useState<any>("")
  const [errormessageincomeslab, setErrorMessageIncomeSlab] = useState<any>("")
  const [showSubmitDetails, setShowSubmitDetails] = useState(true)
  const [selected, setSelected] = useState<boolean>(false)
  const [selectedFemale, setSelectedFemale] = useState<boolean>(false)
  const [selectedTrans, setSelectedTrans] = useState<boolean>(false)
  const { register, formState: { errors } } = useForm();
  const NameRegex = /^[a-zA-Z ]{4,30}$/;

  const mobileRegex = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handlechange = (e: any) => {
    e.preventDefault();

    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value

    })


  }
  useEffect(() => {

    if (formData.firstName !== "" || formData.CountrySecond !== "" || formData.middleName !== "" || formData.LastName !== "" || formData.mobilenumber.length < 10 ||
      formData.emailaddress! == "" || formData.StateOfBirth! == "" || formData.addressline1! == ""
      || formData.CityofResidence !== "" || formData.state !== "" || formData.pincode.length <6 || formData.CountryFirst !== "" || formData.IncomeSlab !== "") {
      setDropValuestateError(false)
      setError(false)
      setCountryError(false)
      setMidNameError(false)
      setLastNameError(false)
      setErrormobilenumberone(false)
      setEmailError(false)
      setAddressErrorOne(false)
      setDrapdownresidenseError(false)
      setErrorsstate(false)
      setErrorPincode(false)
      setErrorCountryFirst(false)
      setErrorincomeslabs(false)
    }

    setTimeout(() => {
      setShowSubmitDetails(() => true);

    })



  }, [formData])


  const areAllFieldsFilled = (formData.firstName != "") && (NameRegex.test(formData.lastName)) && (mobileRegex.test(formData.mobilenumber)) &&
    (emailRegex.test(formData.emailaddress)) && (formData.StateOfBirth !== "") && (formData.addressline1 !== "") && (formData.pincode !== "") && (formData.CityofResidence !== "")
    && (formData.state !== "") && (formData.CountryFirst !== "") && (formData.IncomeSlab !== "") && (formData.LastName !== "")
  const dispatch = useDispatch()


  const navigate = useNavigate();
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    console.log(formData)
    store.dispatch(submituserdetails({ 'formData': formData }))
    navigate('/vp')
  }
  const [errorcountry, setErrorCountry] = React.useState<any>("");

  const handleBlur = () => {

    if (formData.firstName == "") {
      setError(true)


      setErrorMessageFN("Please Enter Name")
      setShowSubmitDetails(true)
    } else {
      setShowSubmitDetails(false)
      console.log("kkkk")
    }

  }
  const handleBlurCountry = () => {
    if (formData.CountrySecond == "") {
      setCountryError(true)
      setErrorMessageCountry("Required")

    }
  }




  const handleOnBlurmiddleName = () => {
    if (formData.middleName == "") {
      setErrorMessagemiddleName("Please Enter Middle Name")
      setMidNameError(true)
      setShowSubmitDetails(true)
    } else {
      setShowSubmitDetails(false)
      console.log("hhhh")
    }

  }
  const handleOnBlurlastName = () => {
    if (formData.lastName.length == "" || !NameRegex.test(formData.lastName)) {
      setErrorMessagelastname("Please Enter LastName")
      setLastNameError(true)
    }

  }

  const handleOnBlurmobilenumber = () => {

    if (formData.mobilenumber.length != 10) {

      setErrorMessagemobilenumber("Mobile number is invalid")
      setErrormobilenumberone(true)
    }

  }
  const handleOnBluremailaddress = () => {
    if (formData.emailaddress == "" || !emailRegex.test(formData.emailaddress)) {
      setErrorMessageemail("Email Address is Invalid")
      setEmailError(true)
    }


  }

  const handleOnBlurCountrySecond = () => {
    setErrorCountry("Required")
  }
  const handleOnBlurStateOfBirth = () => {
    if (formData.StateOfBirth == "") {
      setErrorMessageState("Required")
      setDropValuestateError(true)
    }

  }
  const handleOnBluraddressline1 = () => {
    if (formData.addressline1 <= 3) {
      setErrorMessageAddresss("Adresss is required")
      setAddressErrorOne(true)
    }

  }
  const handleOnBlurCityofResidence = () => {
    if (formData.CityofResidence == "") {
      setDrapdownresidenseError(true)
      setErrorMessagecityofersi("Required")
    }

  }
  const handleOnBlurstate = () => {
    if (formData.state == "") {
      setErrorMessageStatee("Required")
      setErrorsstate(true)
    }

  }
  const handleOnBlurpincode = () => {
    if (formData.pincode.length != 6) {
      setErrorMessagePincode("pincode is invalid")
      setErrorPincode(true)
    }

  }
  const handleOnBlurCountryFirst = () => {
    if (formData.CountryFirst == "") {
      setErrorCountryFirst(true)
      setErrorMessagefirstcountry("Required")
    }

  }
  const handleOnBlurIncomeSlab = () => {
    if (formData.IncomeSlab == '') {
      setErrorincomeslabs(true)
      setErrorMessageIncomeSlab("Required")
    }

  }


  const handleMaleGenderButton = (e: any, id: any) => {
    const value = e.target.id;
    setFormData({
      ...formData,
      [e.target.name]: id

    })
    console.log(formData.gender)

  }


  const classes = useStyles();
  console.log(formData)

  return (
    <>
      <div style={{
    
        padding: '29px',
        borderRadius: "8px",
        marginBottom: "-15px",
      

      }}>
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6} lg={6}>
            <Paper className={classes.paper}
              sx={{
                p: 1,
                width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "-23px", borderRadius: "8px",
                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                marginLeft: "-1px"
              }}

            >
              <Stack m={2} spacing={2}>
                <Grid container spacing={2} sx={{
                  maxHeight:"100%",

                }}>
                  <Grid item xs={12} md={12}>
                    <TextField
                      onBlur={handleBlur}
                      label="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handlechange}
                      fullWidth
                      error={error}

                      id='First Name'
                      sx={{
                        color: "rgba(0, 0, 0, 0.6)",
                        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                        width: "100%", fontSize: "15px", fontWeight: "normal",

                      }}
                      helperText={error ? errorMessageFN : ""}
                    />
                  </Grid>

                </Grid><TextField label="Middle Name"
                  name="middleName"
                  onBlur={handleOnBlurmiddleName}
                  value={formData.middleName} onChange={handlechange} fullWidth
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)",
                    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                    width: "100%", fontSize: "15px", fontWeight: "normal",

                  }}
                  error={MidNameError}
                  helperText={MidNameError ? errorMesagemiddleName : ""}
                /><TextField label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onBlur={handleOnBlurlastName}
                  onChange={handlechange}
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", width: "100%", fontSize: "15px",
                    fontWeight: "normal",


                  }}
                  error={lastNameError}
                  helperText={lastNameError ? errorMessagelastname : ""}
                />
                <TextField label="Mobile Number"
                  onBlur={handleOnBlurmobilenumber}
                  type="number"
                  name="mobilenumber"
                  value={formData.mobilenumber}
                  onChange={handlechange} fullWidth
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                    width: "100%", fontSize: "15px", fontWeight: "normal"
                  }}
                  error={errormobilenumberone}
                  helperText={errormobilenumberone ? errorMessagemobilenumber : ""}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                      +91
                    </InputAdornment>,
                  }}
                />
                <TextField label="Email Address"
                  onBlur={handleOnBluremailaddress}
                  name="emailaddress"
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", width: "100%",
                    fontSize: "15px", fontWeight: "normal"
                  }}
                  value={formData.emailaddress} onChange={handlechange} fullWidth
                  error={emailError}
                  helperText={emailError ? errorMessageemail : ""}
                /><Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '194px', marginTop: "-23px" }
                  }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" sx={{
                          color: "rgba(0, 0, 0, 0.6)",
                          fontSize: "15px",
                          fontWeight: "normal",
                          top: "-1px",
                          background: "#fff"
                        }}>Country of Birth</InputLabel>

                        <Select
                         onBlur={handleBlurCountry}
                          fullWidth={true}
                          name="CountrySecond"
                          value={formData.CountrySecond}
                          onChange={handlechange}
                          error={countryError} >
                          <MenuItem value="India">India</MenuItem>
                          <MenuItem value="Nepal">Nepal</MenuItem>
                          <MenuItem value="China">China</MenuItem>
                        </Select>
                        <FormHelperText sx={{ color: "red" }}>
                          {formData.CountrySecond == "" ? errorMesageCountry : ""}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label"
                          sx={{
                            color: "rgba(0, 0, 0, 0.6)",
                            fontSize: "15px",
                            fontWeight: "normal",
                            top: "-1px",
                            background: "#fff"
                          }}>Place of Birth</InputLabel>

                        <Select
                          fullWidth={true}
                          onBlur={handleOnBlurStateOfBirth}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={formData.StateOfBirth}
                          onChange={handlechange}
                          name="StateOfBirth"
                          sx={{ boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                          error={dropValuestateerror}
                        ><MenuItem value="Madhya Pradesh">Mumbai</MenuItem>
                          <MenuItem value="Uttarpradesh">Delhi </MenuItem>{/* {State.map((l: any) => (
                        <MenuItem value={l}>
                          {l.name}
                        </MenuItem>
                      ))} */}
                        </Select>
                        <FormHelperText sx={{ color: "red" }}>
                          {formData.StateOfBirth == "" ? errormessageState : ""}
                        </FormHelperText> </FormControl>
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </Paper>
          </Grid>
          
          <Grid item xs={12} sm={6} lg={6} sx={{
              maxHeight:"100%",
          }} >
            <Paper className={classes.paper}
              sx={{
                p: 1,
                width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "-22px", borderRadius: "-22px",
                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                marginLeft: "2px"
              }} > <Typography sx={{ color: "#6c63ff", marginLeft: "-72%" }}>Gender</Typography>
              <Box sx={{ '& button': { m: 1 }, marginRight:"-40px", marginLeft:"-8%"}}>
                <Button
                  id={"male"}
                  name="gender"
                  onClick={() => { setSelected(true); setSelectedFemale(false); setSelectedTrans(false); setFormData({ ...formData, gender: "male" }) }}
                  variant="outlined"
                  size="small"
                  sx={{ backgroundColor: " #fff", borderRadius: "8px", boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05) ", height: " 42px", padding: " 6px 10px 1px 6px" }}
                  style={{ cursor: "pointer", border: `1px solid ${selected ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selected ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "12px 14px" }}
                ><img src={manicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "-3px" }} />
                  <Typography sx={{ marginLeft: "2px", color: "#7b7b9d" }}>Male</Typography>
                </Button>
                <Button
                  name="gender"
                  value={"female"}
                  onClick={() => { setSelectedFemale(true); setSelected(false); setSelectedTrans(false); setFormData({ ...formData, gender: "female" }) }}
                  style={{ cursor: "pointer", border: `1px solid ${selectedFemale ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selectedFemale ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "12px 14px" }}
                  variant="outlined" size="medium" sx={{ backgroundColor: " #fff", borderRadius: "8px", boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05)", height: " 42px", padding: " 6px 10px 6px 6px" }}>
                  <img src={girlicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "2px" }} />
                  <Typography sx={{ marginLeft: "2px", color: "#7b7b9d" }}>  Female</Typography>
                </Button>
                <Button
                  id={"transgender"}
                  name="gender" onClick={() => { setSelectedTrans(true); setSelected(false); setSelectedFemale(false); setFormData({ ...formData, gender: "transgender" }) }}
                  style={{ cursor: "pointer", border: `1px solid ${selectedTrans ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius: "8px", backgroundColor: `${selectedTrans ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "12px 14px" }}
                  variant="outlined" size="large" sx={{ backgroundColor: " #fff", borderRadius: "8px", boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05)", height: " 42px", padding: " 6px 10px 6px 6px" }}>
                  <img src={girliconicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "2px" }} />
                  <Typography sx={{ marginLeft: "2px", color: "#7b7b9d" }}>Transgender</Typography>
                </Button>
              </Box>

               <Stack m={2} spacing={6}>
                <TextField label="Address"
                  onBlur={handleOnBluraddressline1}
                  name="addressline1"
                  value={formData.addressline1}
                  onChange={handlechange}
                  sx={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.6)", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                  placeholder="Enter your street address"
                  error={addresserrorone}
                  helperText={addresserrorone ? errormessageaddress : ""}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="end">
                        <img src={Mylocationicon} width="22px" alt="location" style={{ position: "absolute", left: "86%" }} />
                      </InputAdornment>),
                  }}>
                </TextField>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '194px', height: "16px", },
                    marginTop: "-69%",
                  }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <div style={{ position: "relative", top: "-51px" }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth={true} >
                          <InputLabel id="demo-simple-select-label"
                            sx={{
                              color: "rgba(0, 0, 0, 0.6)", fontSize: "15px",
                              fontWeight: "normal",
                              top: "-1px",
                              background: "#fff"
                            }}
                            className="Drapdownstyle"
                          >City of Residence</InputLabel>
                          <Select
                            fullWidth
                            onBlur={handleOnBlurCityofResidence}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.CityofResidence}
                            onChange={handlechange}
                            name="CityofResidence"
                            sx={{ boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                            error={drapdownresidenseerror}
                          >
                            <MenuItem value="Kanpur">Kanpur</MenuItem>
                            <MenuItem value="Delhi">Delhi</MenuItem>
                          </Select>
                          <FormHelperText sx={{ color: "red" }}>
                            {formData.CityofResidence == "" ? errormessagecityofresi : ""}
                          </FormHelperText>
                        </FormControl>
                         </Grid>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth={true} >
                          <InputLabel id="demo-simple-select-label"
                            sx={{
                              color: "rgba(0, 0, 0, 0.6)",
                              fontSize: "15px",
                              fontWeight: "normal",
                              top: "-1px",
                              background: "#fff"
                            }}>State</InputLabel>

                          <Select
                            fullWidth
                            onBlur={handleOnBlurstate}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.state}
                            onChange={handlechange}
                            name="state"
                            sx={{ boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                            error={errorrsstate}
                          >
                            <MenuItem value="Uttarpradesh">Uttarpradesh</MenuItem>
                            <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                          </Select>
                          <FormHelperText sx={{ color: "red" }}>
                            {formData.state == "" ? errormessageStatee : ""}
                          </FormHelperText>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </div>
                  &nbsp;
                  <div style={{ position: "relative", top: "-51px" }}>
                    <Grid container spacing={2} >
                      <Grid item xs={12} md={6} sm={12} >
                        <FormControl
                          className="pincodeClass">
                          <TextField
                            onBlur={handleOnBlurpincode}
                            label="Pincode"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handlechange}
                            fullWidth
                            error={errorPincode}
                            className="pincodestayle"
                            id='Pincode'
                            sx={{
                              color: "rgba(0, 0, 0, 0.6)",
                              // boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                              width: "100%", fontSize: "15px", fontWeight: "normal",
                              boxShadow: "none"
                            }} />
                        </FormControl>
                        <FormHelperText sx={{ color: "red" }} className="labelStyle">
                          {formData.pincode == "" ? errormessagepincode : ""}
                        </FormHelperText>
                      </Grid>
                      <Grid item xs={12} md={6}  >
                        <FormControl fullWidth={true}>
                          <InputLabel
                            id="demo-simple-select-label"
                            sx={{
                              color: "rgba(0, 0, 0, 0.6)",
                              fontSize: "15px",
                              fontWeight: "normal",
                              top: "-1px",
                              background: "#fff"
                            }}>Country</InputLabel>

                          <Select
                            fullWidth
                            onBlur={handleOnBlurCountryFirst}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.CountryFirst}
                            label="Age"
                            onChange={handlechange}
                            name="CountryFirst"
                            sx={{ boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                            error={errorcountryFirst}
                          >
                            <MenuItem value="Delhi">Delhi</MenuItem>
                            <MenuItem value="kanpur">kanpur</MenuItem>
                            <MenuItem value="Noida">Noida</MenuItem>
                            {country.map((l: any) => (
                              <MenuItem value={l}>
                                {l.name}
                              </MenuItem>
                            ))}
                          </Select>
                          <FormHelperText sx={{ color: "red" }}>
                            {formData.CountryFirst == "" ? errormessagefirstcountry : ""}
                          </FormHelperText>
                        </FormControl>
                      </Grid>
                    </Grid>
                  </div>
                </Box>
                <TextField label="Income Slab" name="IncomeSlab"
                  value={formData.IncomeSlab}
                  type="number"
                  onBlur={handleOnBlurIncomeSlab}
                  onChange={handlechange}
                  sx={{ position: "relative", width: "100%", top: "-78px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                  error={errorincomeslabs}
                  helperText={errorincomeslabs ? errormessageincomeslab : ""}
                />
             
                  <Button variant="contained" style={style.buttonbtn}
                    disabled={!areAllFieldsFilled}
                    onClick={handleClick} fullWidth >
                    <Typography component="span" style={style.text} className="largeButtonText" >Submit Details</Typography>
                  </Button>
           
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default EditprofileCard

