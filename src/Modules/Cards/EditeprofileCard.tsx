import { Box, Grid, InputAdornment, Typography } from '@mui/material'
import Paper from "@mui/material/Paper";
import { ContactError, Mylocationicon } from "../../Assets/index";
import { girlicon } from '../../Assets/index'
import { girliconicon } from '../../Assets/index'
import { manicon } from '../../Assets/index'
import { Editprofilebutton } from '../Buttons/Editprofilebutton'
// import EEditprofileCard from '../Buttons/EEditprofileCard'
// import { makeStyles,} from "@mui/styles";
import { makeStyles, createStyles } from "@mui/styles";
import clsx from "clsx";

import { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react'
import { height, padding } from '@mui/system'
import MenuItem from '@mui/material/MenuItem';

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
 
// import { useForm } from "react-hook-form";

// import FormControlLabel from '@mui/material/FormControlLabel';
// import MenuItem from '@mui/material/MenuItem';

// import { makeStyles, createStyles } from "@material-ui/core/styles";






const langs = [{ name: "English", code: "en" }, { name: "German", code: "de" }];
const country = ["delhi", "kanpur"]
const State = [{ name: "up", code: "de" }, { name: "mp" }]
const pincode = [{ name: "208025" }]
const Cityofresidence = [{ name: "117/N/112" }]


function EditprofileCard() {


  // const { register, handleSubmit, errors } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  // console.log(errors);




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
        // padding: theme.spacing(2),
        textAlign: 'center',
        // color: theme.palette.text.secondary,
      },
      root: {
        flexGrow: 1,
      },
    }),
  );


  const style = {
    containertwo: {
      backgroundColor: "#fff",
      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
      borderRadius: "8px",
      padding: "21px 40px",


    },

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
      margin: "16px",
      width: "90%",
      maxWidth: "400px",
      transform: "translate(10px, -60px)"


    },
    ca: {
      // borderRadius: "170px 175px 175px 163px",
      backgroundColor: "#64dbff",
      width: "20px",
      height: "20px",
      padding: "10px",
      opacity: "0.9",

      // width: '80px',
      // height: '80px',
      // margin: '0 54px 22px 34px',
      // padding: '20px',
      // boxShadow: '0 0 10px 0 rgb(0 0 0 / 8%)',
      // border: 'solid 1px rgba(0, 0, 0, 0.08)',
    } as React.CSSProperties,
    select :{
      color:"white",
      '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline' : {
        border:"1px solid white"
      },
      '& .css-hfutr2-MuiSvgIcon-root-MuiSelect-icon' : {
        color: "white !important"
      },
      '&svg' : {
        color: "white"
      }
    },
    text: {
      color: "white",

    }
   


  }
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
    state: "",



  })

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
      || formData.CityofResidence !== "" || formData.state !== "" || formData.pincode! == "" || formData.CountryFirst !== "" || formData.IncomeSlab !== "") {
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


      console.log(formData.firstName !== "" && formData.CountrySecond !== "" && formData.middleName !== "" && formData.mobilenumber.length <10
     && emailRegex.test(formData.emailaddress)  &&  formData.StateOfBirth! == "" && formData.addressline1! == "" && formData.pincode! == "" && formData.CityofResidence !== ""
     && formData.state !== "" &&  formData.CountryFirst !== "" && formData.IncomeSlab !== "" && formData.LastName !== ""
       )

    console.log(formData.firstName.length < 0 && formData.middleName.length < 0 && formData.LastName.length < 0)
  }, [formData])

  const areAllFieldsFilled = (formData.firstName != "") && (formData.lastName != "") && (mobileRegex.test(formData.mobilenumber)) &&
    (emailRegex.test(formData.emailaddress)) && (formData.StateOfBirth !== "") && (formData.addressline1 !== "") && (formData.pincode !== "") && (formData.CityofResidence !== "")
    && (formData.state !== "") && (formData.CountryFirst !== "") && (formData.IncomeSlab !== "") && (formData.LastName !== "")
  const dispatch = useDispatch()
 

  const navigate = useNavigate();
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    store.dispatch(submituserdetails({'formData': formData})) 
    
    
     navigate('/completedview')




  }
 

  const [errorfirstname, setErrorFirstName] = React.useState<any>("");
  const [errormiddlename, setErrorMiddleName] = React.useState<any>("");
  const [errorlastname, setErrorLastName] = React.useState<any>("");
  const [errormobilenumber, setErrorMobilenumber] = React.useState<any>("");
  const [erroremiladdress, setErrorEmailAdress] = React.useState<any>("");
  const [errorcountry, setErrorCountry] = React.useState<any>("");
  const [errorstate, setErrorState] = React.useState<any>("");
  const [erroraddresss, setErrorAddress] = React.useState<any>("");
  const [errorcityofresidence, setErrorcityofresidence] = React.useState<any>("");
  const [errorstatetwo, setErrorstatetwo] = React.useState<any>("");
  const [errorpincode, setErrorpincode] = React.useState<any>("");
  const [errorcountrytwo, setErrorcountrytwo] = React.useState<any>("");
  const [errorincomeslab, setErrorincomeslab] = React.useState<any>("");






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
    if (formData.lastName.length == "") {
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
    if (formData.pincode == "") {
      setErrorMessagePincode("Required")
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
        backgroundColor: '#ffffff',
        padding: '29px',
        borderRadius: "8px",
        marginBottom: "-15px"

      }}>
        <Grid container spacing={3}>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}
              sx={{
                p: 1,
                width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "-23px", borderRadius: "8px",
                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                marginLeft: "-25px"
              }}

            >
              <Stack m={2} spacing={2}>
                <Grid container spacing={2}>
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
                        }}>Country of Birth</InputLabel>

                        <Select
                     
                       
                          onBlur={handleBlurCountry}
                          fullWidth={true}
                          name="CountrySecond"
                          value={formData.CountrySecond}
                          onChange={handlechange}
                          error={countryError}

                        >
                          <MenuItem value="Delhi">India</MenuItem>
                          <MenuItem value="kanpur">Nepal</MenuItem>
                          <MenuItem value="Noida">China</MenuItem>
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

          <Grid item xs={12} sm={6}  >
            <Paper className={classes.paper}
              sx={{
                p: 1,
                width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "-22px", borderRadius: "-22px",
                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                marginLeft: "-18px"
              }} > <Typography sx={{ color: "#6c63ff", marginLeft: "-72%" }}>Gender</Typography>
              <Box sx={{ '& button': { m: 1 } }}>
                {/* onClick={() => { this.handleButton(60)}} */}
                <Button
                  id={"male"}
                  name="gender"
                  onClick={()=>{setFormData({...formData, gender:"male"})}}
                  variant="outlined"
                  size="small"

                  sx={{
                    backgroundColor: " #fff",
                    borderRadius: "8px",
                    boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05) ",
                    height: " 42px", padding: " 6px 10px 6px 6px"
                  }}
                ><img src={manicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "-3px" }} />
                  <Typography sx={{ marginLeft: "2px", color: "#7b7b9d" }}>Male</Typography>
                </Button>

                <Button
                  name="gender"
                  value={"female"}
                  onClick={()=>{setFormData({...formData, gender:"female"})}}
                  variant="outlined" size="medium" sx={{ backgroundColor: " #fff", borderRadius: "8px", boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05)", height: " 42px", padding: " 6px 10px 6px 6px" }}>
                  <img src={girlicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "2px" }} />

                  <Typography sx={{ marginLeft: "2px", color: "#7b7b9d" }}>  Female</Typography>
                </Button>


                <Button
                  id={"transgender"}
                  name="gender"
                  onClick={()=>{setFormData({...formData, gender:"transgender"})}}
                  variant="outlined" size="large" sx={{ backgroundColor: " #fff", borderRadius: "8px", boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05)", height: " 42px", padding: " 6px 10px 6px 6px" }}>
                  <img src={girliconicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "2px" }} />
                  {/* <Radio {...controlProps('c')} sx={{
                      '& .MuiSvgIcon-root': { fontSize: 28, },
                      height: "2px", width: "2px",


                    }}
                    /> */}
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
                            }}>City of Residence</InputLabel>
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
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <FormControl fullWidth={true}>
                          <InputLabel
                            id="demo-simple-select-label"
                            sx={{
                              color: "rgba(0, 0, 0, 0.6)",
                              fontSize: "15px",
                              fontWeight: "normal",
                            }}>Pincode</InputLabel>

                          <Select
                            fullWidth
                            onBlur={handleOnBlurpincode}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.pincode}
                            label="Age"
                            onChange={handlechange}
                            name="pincode"
                            sx={{ boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                            error={errorPincode}
                          >
                            <MenuItem value="208025">208025</MenuItem>
                            <MenuItem value="208024">208024</MenuItem>
                          </Select>
                          <FormHelperText sx={{ color: "red" }}>
                            {formData.pincode == "" ? errormessagepincode : ""}
                          </FormHelperText>
                        </FormControl>

                      </Grid>

                      <Grid item xs={12} md={6}  >
                        <FormControl fullWidth={true}>
                          <InputLabel
                            id="demo-simple-select-label"
                            sx={{
                              color: "rgba(0, 0, 0, 0.6)",
                              fontSize: "15px",
                              fontWeight: "normal",
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

                    {/* &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; */}



                  </div>
                </Box>
                {/* errormessageincomeslab */}

                <TextField label="Income Slab" name="IncomeSlab"
                  value={formData.IncomeSlab}
                  type="number"
                  onBlur={handleOnBlurIncomeSlab}
                  onChange={handlechange}
                  sx={{ position: "relative", width: "100%", top: "-78px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                  error={errorincomeslabs}
                  helperText={errorincomeslabs ? errormessageincomeslab : ""}
                />



                <div style={{ marginTop: "20px" }}>
                  <Button variant="contained" style={style.buttonbtn}
                    disabled={!areAllFieldsFilled}
                    onClick={handleClick} fullWidth >
                    <Typography component="span" style={style.text} className="largeButtonText" >Submit Details</Typography>
                  </Button>
                 
                </div>
              </Stack>

            </Paper>
          </Grid>


        </Grid>
      </div>




    </>


  )
}

export default EditprofileCard

