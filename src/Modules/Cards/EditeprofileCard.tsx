import { Box, Grid, Typography } from '@mui/material'
import Paper from "@mui/material/Paper";
import { Mylocationicon } from "../../Assets/index";
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

import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";

import { FormHelperText } from '@mui/material';
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

  const [formData, setFormData] = useState<any>({
    firstName: "",
    middleName: "",
    lastName: "",
    emailaddress: "",
    mobilenumber: "",
    dateofbirth: "",
    pincode: "",
    gender: "Female",
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
  const [firstNameError, setFirstNameError] = useState(false)
  const [lastNameError, setLastNameError] = useState(false)
  const [MidNameError, setMidNameError] = useState(false)
  const [mobileNumberError, setMobileNumberError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [countryError, setCountryError] = useState(false)


  const [addresserror, setaddressError] = useState(false)
  const [incomeslaberror, setIncomeslabError] = useState(false)
  const [checkValue, setCheckValue] = useState(true)
  const [submitError, setSubmitError] = useState(true)
  const [showMessage, setShowMessage] = useState(false)

  const [dropValueresidence, setDropValueresidence] = useState(false)
  const [dropValue, setDropValue] = useState(false)
  const [dropValuestate, setDropValuestate] = useState(false)
  const [drapdownresidense, setDrapdownresidense] = useState(false)
  const [dropdownfieldstate, setDropdownfieldstate] = useState(false)
  const [dropownstate, setDropownState] = useState(false)
  const [error, setError] = useState(false)
  const [dropdownpincode,setDropdownpincode]=useState(false)

const [dropdowncountryFirst,setDropdowncountryFirst]=useState(false)
  const { register, formState: { errors } } = useForm();
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const handlechange = (e: any) => {
    e.preventDefault();
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value

    })
    if (firstNameError) {
      setError(true)
    }


    if (formData.firstName.length > 0) {
      setFirstNameError(true)

    } if (formData.middleName.length > 0) {
      setMidNameError(true)


    } if (formData.lastName.length > 0) {

      setLastNameError(true)

    } if (formData.mobilenumber.length > 0) {
      setMobileNumberError(true)
      // setCheckValue(false)
    } if (formData.emailaddress.length > 0) {
      setEmailError(true)
      // setCheckValue(false)
    } if (formData.CountrySecond > 0) {
      setCountryError(true)
      // setCheckValue(false)
    }
    if (formData.addressline1.length > 0) {
      setaddressError(true)
      // setCheckValue(false)
    }
    if (formData.IncomeSlab.length > 0) {
      setIncomeslabError(true)
      // setCheckValue(false)
    }
    console.log(firstNameError)

  }

  useEffect(() => {


    if (formData.firstName.length > 3 && formData.lastName.length > 3 && emailRegex.test(formData.emailaddress) !== false

      && formData.mobilenumber.length === 10 && formData.addressline1.length > 3 && formData.IncomeSlab.length > 9) {
      setSubmitError(false)
      setDropValue(true)
      setDropownState(true)
      setDropValueresidence(true)
      setDrapdownresidense(true)
      setDropdownfieldstate(true)
      setDropdownpincode(true)
      setDropdowncountryFirst(true)

      console.log('input value should not be empty');
    }

  })


  const dispatch = useDispatch()
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');

  const navigate = useNavigate();
  function handleClick() {
    alert("h")




  }


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
    button: {
      height: "48px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
      backgroundColor: "#23db7b",
      margin: "16px",
      width: "90%",
      maxWidth: "400px",
      transform: "translate(8px, -5px)"


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
    text: {
      color: "white",

    }


  }
  const classes = useStyles();

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
                  type="text"
              
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handlechange}
                  fullWidth

                  helperText
                  id='First Name'
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)",
                    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                    width: "100%", fontSize: "15px", fontWeight: "normal",

                  }}

                />
                  </Grid>

                </Grid>
         

                {firstNameError && formData.firstName.length <= 3 ?
                  <label style={{
                    color: "red", marginTop: "2%",
                    marginLeft: "-25%",
                    fontSize:"13px"
                  }} >First Name should be required</label> : ""}

                <TextField label="Middle Name"
                  name="middleName"

                  value={formData.middleName} onChange={handlechange} fullWidth
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)",
                    boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                    width: "100%", fontSize: "15px", fontWeight: "normal",

                  }} >
                  {MidNameError && formData.middleName.length <= 3 ?
                    <label style={{
                      color: "red", marginTop: "2%",
                      marginLeft: "-32%",
                      fontSize:"13px"
                    }} >Middle Name should be required</label> : ""}

                </TextField>

                <TextField label="Last Name"
                  name="lastName"
                  value={formData.lastName}

                  onChange={handlechange}
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", width: "100%", fontSize: "15px",
                    fontWeight: "normal",


                  }} >
                </TextField>
                {lastNameError && formData.lastName.length <= 3 ?
                  <label style={{ color: "red", marginLeft:"-27%",  fontSize:"13px"}}>last Name should be required</label> : ""}


                <TextField label="Mobile Number"
                  name="mobilenumber" value={formData.mobilenumber}
                  onChange={handlechange} fullWidth
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                    width: "100%", fontSize: "15px", fontWeight: "normal"
                  }}

                >

                </TextField>
                {mobileNumberError && (formData.mobilenumber.length < 10 || formData.mobilenumber.length > 10 ?
                  <label style={{
                    color: "red", marginTop: "2%",
                    marginLeft: "-14%",
                    fontSize:"13px"
                  }}>Mobile Number should be 10 digits</label> : "")}

                <TextField label="Email Address"
                  name="emailaddress"
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)", width: "100%",
                    fontSize: "15px", fontWeight: "normal"
                  }}
                  value={formData.emailaddress} onChange={handlechange} fullWidth>




                </TextField>
                {emailError && emailRegex.test(formData.emailaddress) == false ?
                  <label style={{
                    color: "red", marginTop: "2%",
                    marginLeft: "-32%",
                    fontSize:"13px"
                  }}>Email should be required</label> : ""}
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '194px', marginTop: "-23px" }
                  }} >



                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" sx={{
                          color: "rgba(0, 0, 0, 0.6)",
                          fontSize: "15px",
                          fontWeight: "normal",
                        }}>country</InputLabel>

                        <Select
                          fullWidth={true}
                          name="CountrySecond"
                          value={formData.CountrySecond}
                          onChange={handlechange}

                        >
                          <MenuItem value="hai">Delhi</MenuItem>
                          <MenuItem value="olivier">kanpur</MenuItem>
                          <MenuItem value="kevin">Noida</MenuItem>
                        </Select>
                        {dropValue && formData.CountrySecond == "" ?
                          <label style={{
                            fontSize: "15px",
                            width: "100%",
                            maxWidth: "400px",
                            height: "15px",
                            color: " red",
                            marginBottom: "10px",
                            display: "flex",
                            marginLeft: "50 %"
                          }}>Required</label> : ""}
                      </FormControl>
                    </Grid>




                    <Grid item xs={12} md={6}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label"
                          sx={{
                            color: "rgba(0, 0, 0, 0.6)",
                            fontSize: "15px",
                            fontWeight: "normal",
                          }}>State</InputLabel>

                        <Select
                          fullWidth={true}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={formData.StateOfBirth}
                          onChange={handlechange}
                          name="StateOfBirth"
                          sx={{ boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                        >
                          <MenuItem value="hai">Uttarpradesh</MenuItem>
                          <MenuItem value="olivier">Madhya Pradesh</MenuItem>
                   
                          {/* {State.map((l: any) => (
                        <MenuItem value={l}>
                          {l.name}
                        </MenuItem>
                      ))} */}
                        </Select>
                        {dropownstate && formData.StateOfBirth == "" ?
                          <label style={{
                            fontSize: "15px",
                            width: "100%",
                            maxWidth: "400px",
                            height: "15px",
                            color: " red",
                            marginBottom: "10px",
                            display: "flex",
                            marginLeft: "50 %"
                          }}>Required</label> : ""}
                      </FormControl>


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
                width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "-16px", borderRadius: "-22px",
                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                marginLeft: "-18px"
              }}
            >

              <Typography sx={{ color: "#6c63ff", marginLeft: "-72%" }}>Gender</Typography>
              <Box sx={{ '& button': { m: 1 } }}>




                <Button value={formData.gender}
                  name="gender"
                  onChange={handlechange}
                  variant="outlined"
                  size="small"
                  sx={{
                    backgroundColor: " #fff",
                    borderRadius: "8px",
                    boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05) ",
                    height: " 42px", padding: " 6px 10px 6px 6px"
                  }}>

                  <img src={manicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "-3px" }} />
                  {/* <Radio {...controlProps('a')} size="small" sx={{ width: "2px", height: "2px" }} /> */}

                  <Typography sx={{ marginLeft: "2px", color: "#7b7b9d" }}>  Male</Typography>
                </Button>
                <Button variant="outlined" size="medium" sx={{ backgroundColor: " #fff", borderRadius: "8px", boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05)", height: " 42px", padding: " 6px 10px 6px 6px" }}>
                  <img src={girlicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "2px" }} />
                  {/* <Radio   {...controlProps('b')} sx={{ width: "2px", height: "2px" }} /> */}
                  <Typography sx={{ marginLeft: "2px", color: "#7b7b9d" }}>  Female</Typography>
                </Button>
                <Button variant="outlined" size="large" sx={{ backgroundColor: " #fff", borderRadius: "8px", boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05)", height: " 42px", padding: " 6px 10px 6px 6px" }}>
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
                  name="addressline1"
                  value={formData.addressline1}
                  onChange={handlechange}
                  sx={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.6)", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                  placeholder="Enter your street address" >


                </TextField>

                {addresserror && formData.addressline1.length <= 5 ?
                  <label style={{
                    color: "red", marginTop: "2%",
                    marginLeft: "-32%",
                    fontSize:"13px"
                  }} >Address should not  be Empty</label> : ""}
                <img src={Mylocationicon} width="24px" height="24" alt="Google Logo" style={{ position: "relative", top: "-88px", left: "88%" }} />

                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '194px', height: "16px", },
                    marginTop: "-69%",

                  }}




                >

                  <div style={{ position: "relative", top: "-86px" }}>
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
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.CityofResidence}
                            onChange={handlechange}
                            name="CityofResidence"
                            sx={{ boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                          >
                             {/* <MenuItem value="hai"></MenuItem>
                          <MenuItem value="olivier"></MenuItem> */}
                            {Cityofresidence.map((l: any) => (
                              <MenuItem value={l}>
                                {l.name}
                              </MenuItem>
                            ))}
                          </Select>
                          {drapdownresidense && formData.CityofResidence == "" ?
                          <label style={{
                            fontSize: "15px",
                            width: "100%",
                            maxWidth: "400px",
                            height: "15px",
                            color: " red",
                            marginBottom: "10px",
                            display: "flex",
                            marginLeft: "50 %"
                          }}>Required</label> : ""}
                        </FormControl>
                        {/* const [dropdownfieldstate, setDropdownfieldstate] = useState(false) */}


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
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.state}
                            onChange={handlechange}
                            name="State"
                            sx={{ boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                          >
                            {State.map((l: any) => (
                              <MenuItem value={l}>
                                {l.name}
                              </MenuItem>
                            ))}
                          </Select>
                          {dropdownfieldstate && formData.state == "" ?
                          <label style={{
                            fontSize: "15px",
                            width: "100%",
                            maxWidth: "400px",
                            height: "15px",
                            color: " red",
                            marginBottom: "10px",
                            display: "flex",
                            marginLeft: "50 %"
                          }}>Required</label> : ""}
                        </FormControl>
                      </Grid>
                    </Grid>
                  </div>





                  <div style={{ position: "relative", top: "-46px" }}>
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
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.pincode}
                            label="Age"
                            onChange={handlechange}
                            name="pincode"
                            sx={{ boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                          >

                          </Select>
                          {dropdownpincode && formData.pincode == "" ?
                          <label style={{
                            fontSize: "15px",
                            width: "100%",
                            maxWidth: "400px",
                            height: "15px",
                            color: " red",
                            marginBottom: "10px",
                            display: "flex",
                            marginLeft: "50 %"
                          }}>Required</label> : ""}
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={6}>
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
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={formData.CountryFirst}
                            label="Age"
                            onChange={handlechange}
                            name="CountryFirst"
                            sx={{ boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                          >
                                    <MenuItem value="hai">Delhi</MenuItem>
                          <MenuItem value="olivier">kanpur</MenuItem>
                          <MenuItem value="kevin">Noida</MenuItem>
                            {country.map((l: any) => (
                              <MenuItem value={l}>
                                {l.name}
                              </MenuItem>
                            ))}
                          </Select>
                          {dropdowncountryFirst && formData.CountryFirst == "" ?
                          <label style={{
                            fontSize: "15px",
                            width: "100%",
                            maxWidth: "400px",
                            height: "15px",
                            color: " red",
                            marginBottom: "10px",
                            display: "flex",
                            marginLeft: "50 %"
                          }}>Required</label> : ""}
                        </FormControl>
                      </Grid>
                    </Grid>

                    {/* &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; */}



                  </div>
                </Box>
                <TextField label="Income Slab" name="IncomeSlab"
                  value={formData.IncomeSlab}
                  onChange={handlechange}
                  sx={{ position: "relative", width: "100%", top: "-50px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)" }} />
                {incomeslaberror && formData.IncomeSlab.length <= 9 ?
                  <label style={{
                    color: "red", marginTop: "-12%",
                    marginLeft: "-7%",
                    fontSize:"13px"
                   
                  }} >IncomeSlab Should not be empty</label> : ""}

                <Button variant="contained"   style={style.button}
                  disabled={submitError}
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

