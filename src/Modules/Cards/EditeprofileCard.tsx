import { Box, Grid, Typography } from '@mui/material'
import Paper from "@mui/material/Paper";
import { Mylocationicon } from "../../Assets/index";
import { girlicon } from '../../Assets/index'
import { girliconicon } from '../../Assets/index'
import { manicon } from '../../Assets/index'
import { Editprofilebutton } from '../Buttons/Editprofilebutton'
// import EEditprofileCard from '../Buttons/EEditprofileCard'
// import { makeStyles,} from "@mui/styles";
import { makeStyles, createStyles } from "@material-ui/core/styles";
import { useState } from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react'
import { height, padding } from '@mui/system'
import MenuItem from '@mui/material/MenuItem';
import { useForm, Controller } from "react-hook-form";
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { makeStyles } from "@material-ui/core/styles";

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { transform } from 'typescript';
import { NoStroller } from '@mui/icons-material';
import { any } from 'underscore';
import { useNavigate } from 'react-router-dom';
import { store } from '../../Store/Store';
import { submituserdetails } from '../../Store/Reducers/action';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { ActionCreators } from '../../Store';


// import FormControlLabel from '@mui/material/FormControlLabel';
// import MenuItem from '@mui/material/MenuItem';

// import { makeStyles, createStyles } from "@material-ui/core/styles";






const langs = [{ name: "English", code: "en" }, { name: "German", code: "de" }];
function EditprofileCard() {

  const dispatch = useDispatch()

  const { addUserDEtails } = bindActionCreators(ActionCreators, dispatch)

  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');

  const navigate = useNavigate();
  function handleSubmit() {
    addUserDEtails("")
    store.dispatch(submituserdetails({ 'userdata': "hiiiiiiii" }))

    //navigate('/vp');


  }



  const handleChange = (e: any) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    })
    setCity(e.target.value as string);


  };
  const handle = (e: any) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    })
    setState(e.target.value as string);
  }

  const useStyles = makeStyles((theme) =>
    createStyles({
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
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
    gender: "",
    Country: "",
    State: "",
    city: "",
    Cityofresidence: "",
    IncomeSlab: "",
    CountryofBirth: "",
    Placeofbirth: "",
    addressline1: ""


  })

  const [lang, setLang] = useState<any>("")
  const [langsform, setLangsform] = useState<any>("")
  const [langsformthree, setLangsformthree] = useState<any>("")
  const [langsformfour, setLangsformfour] = useState<any>("")
  const [langsformfive, setlangsformfive] = useState<any>("")
  const [langsformsix, setlangsformsix] = useState<any>("")






  const handlechange = (e: any) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value

    })

  }


  function handleDropdown(event: any) {
    const { value, name } = event.target;
    setLang(value);

  };

  function handledropdownform(event: any) {
    const { value, name } = event.target;
    setLangsform(value);

  };
  function handleDropdownthree(event: any) {
    const { value, name } = event.target;
    setLangsformthree(value);

  };

  function handleDropdownfour(event: any) {
    const { value, name } = event.target;
    setLangsformfour(value);

  };
  function handleDropdownfive(event: any) {
    const { value, name } = event.target;
    setlangsformfive(value);

  };
  function handleDropdownsix(event: any) {
    const { value, name } = event.target;
    setlangsformsix(value);

  };

  console.log(lang.name)
  console.log(langsform.name)
  console.log(langsformthree.name)
  console.log(langsformsix.name)
  console.log(langsformfive.name)

  console.log(langsformfour.name)

  console.log(formData.firstName)
  console.log(formData.lastName)

  console.log(formData.middleName)
  console.log(formData.emailaddress)
  console.log(formData.mobilenumber)
  console.log(formData.pincode)
  console.log(formData.Country)
  console.log(formData.State)
  console.log(formData.IncomeSlab)
  // console.log(formData.Placeofbirth)
  console.log(formData.addressline1)

  console.log(formData.city)




  // const data = new FormData(e.currentTarget);
  // const actualData = {
  //   firstName: data.get('name'),
  //   // email: data.get('email'),     
  //   // password: data.get('password'),
  //   // password_confirmation: data.get('password_confirmation'),
  //   // tc: data.get('tc'),
  // }
  // console.log(actualData);nnnnnnnnnnnnnnnnnnnnnnn
  //  const userdetails:any = new FormData(e.currentTarget)=>{

  //   }

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
      transform: "translate(8px, -78px)"


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
      color: "white"
    }
    // ellipse:{
    //     width:" 40px",
    //     height:" 40px",
    //     margin: "0 16px 0 0",
    //     padding: "10px",
    //     opacity: "0.3",
    //     background-color:" #64dbff",

    // } as React.CSSProperties,

  }
  const classes = useStyles();

  return (
    <>
      <div style={{
        width: "120vh", backgroundColor: '#ffffff',
        padding: '29px'
      }}>
        <Grid container spacing={3}  >


          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}
              sx={{
                p: 1,
                width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "30px", borderRadius: "8px",
                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                marginLeft: "-5px"
              }}
            >

              <form   style={{ margin: " -1", marginTop: "23px" }}>



                <Stack m={2} spacing={6}>

                  <TextField


                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handlechange}
                    fullWidth
                    id='First Name'
                    sx={{ color: "#3c3e42", fontSize: "15px", fontWeight: "normal" }}
                  >


                  </TextField>
                  <TextField label="Middle Name" name="middleName" value={formData.middleName} onChange={handlechange} fullWidth sx={{ color: "#3c3e42", fontSize: "15px", fontWeight: "normal", marginTop: "10px" }} >


                  </TextField>
                  <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handlechange} fullWidth sx={{ color: "#3c3e42", fontSize: "15px", fontWeight: "normal", marginTop: "10px" }} >


                  </TextField>
                  <TextField label="Mobile Number" name="mobilenumber" value={formData.mobilenumber} onChange={handlechange} fullWidth sx={{ color: "#3c3e42", fontSize: "15px", fontWeight: "normal", marginTop: "10px" }}

                  >


                  </TextField>
                  <TextField label="Email Address" name="emailaddress" sx={{ color: "#3c3e42", fontSize: "15px", fontWeight: "normal", marginTop: "10px" }} value={formData.emailaddress} onChange={handlechange} fullWidth >


                  </TextField>
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '194px', marginTop: "20px" },


                    }}




                  >
                    <div style={{ position: "relative", top: "-30px" }}>
      

                      <FormControl sx={{ width: "195px" }}>
                        <InputLabel id="demo-simple-select-label" sx={{ color: "#3c3e42", fontSize: "15px", fontWeight: "normal" }}>Country</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={lang}
                          onChange={handleDropdown}
                        >
                          {langs.map((l: any) => (
                            <MenuItem value={l}>
                              {l.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>

                      <FormControl sx={{ width: "196px", marginLeft: "15px" }}>
                        <InputLabel id="demo-simple-select-label" sx={{ color: "#3c3e42", fontSize: "15px", fontWeight: "normal" }}>State</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={langsform}
                          label="Age"
                          onChange={handledropdownform}
                        >
                          {langs.map((l: any) => (
                            <MenuItem value={l}>
                              {l.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>





                    </div>

                  </Box>


          </Stack>
                <Grid item xs={12} sm={6}>
                  <Paper className={classes.paper}
                    sx={{
                      p: 1,
                      width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "30px", borderRadius: "8px",
                      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                      marginLeft: "-5px"
                    }}
                  >

                    <Typography sx={{ color: "#6c63ff", marginLeft: "-72%" }}>Gender</Typography>
                    <Box sx={{ '& button': { m: 1 } }}>

                      <div>
                        <Button variant="outlined" size="small" sx={{ backgroundColor: " #fff", borderRadius: "8px", boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05) ", height: " 42px", padding: " 6px 10px 6px 6px" }}>
                          <img src={manicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "2px" }} />
                          <Typography sx={{ marginLeft: "2px" }} >Male</Typography>

                        </Button>
                        <Button variant="outlined" size="medium" sx={{ backgroundColor: " #fff", borderRadius: "8px", boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05)", height: " 42px", padding: " 6px 10px 6px 6px" }}>
                          <img src={girlicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "2px" }} />
                          <Typography sx={{ marginLeft: "2px" }}>  Female</Typography>
                        </Button>
                        <Button variant="outlined" size="large" sx={{ backgroundColor: " #fff", borderRadius: "8px", boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05)", height: " 42px", padding: " 6px 10px 6px 6px" }}>
                          <img src={girliconicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "2px" }} />
                          <Typography sx={{ marginLeft: "2px" }}>        Transgender</Typography>
                        </Button>
                      </div>
                    </Box>



                    <Stack m={2} spacing={6}>
                      <TextField label="Address" name="addressline1" value={formData.addressline1} onChange={handlechange} sx={{ fontSize: "16px", color: "#acb4bf" }} placeholder="Enter your street address" >



                      </TextField>
                      <img src={Mylocationicon} width="16px" height="22.6" alt="Google Logo" style={{ position: "relative", top: "-90px", left: "92%" }} />
                      <Box
                        component="form"
                        sx={{
                          '& .MuiTextField-root': { m: 1, width: '194px', marginTop: "" },
                          marginTop: "-69%",

                        }}




                      >
                        <div style={{ position: "relative", top: "-97px" }}>

                          <FormControl sx={{ width: "195px" }}>
                            <InputLabel id="demo-simple-select-label">City of residence</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={langsformthree}
                              onChange={handleDropdownthree}
                            >
                              {langs.map((l: any) => (
                                <MenuItem value={l}>
                                  {l.name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>

                          <FormControl sx={{ width: "195px" }}>
                            <InputLabel id="demo-simple-select-label">State</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={langsformfour}
                              onChange={handleDropdownfour}
                            >
                              {langs.map((l: any) => (
                                <MenuItem value={l}>
                                  {l.name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          {/* <TextField select label="City of residence"  name="Cityofresidence" value={formData.Cityofresidence} onChange={handlechange} sx={{ marginTop: "20px" }} /> */}
                          {/* <TextField select label="State"  name="State" value={formData.State} onChange={handlechange}  sx={{ marginTop: "20px" }} /> */}



                        </div >
                        <div style={{ position: "relative", top: "-80px" }}>
                          <FormControl sx={{ width: "195px" }}>
                            <InputLabel id="demo-simple-select-label">pincode</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={langsformfive}
                              onChange={handleDropdownfive}
                            >
                              {langs.map((l: any) => (
                                <MenuItem value={l}>
                                  {l.name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          <FormControl sx={{ width: "195px" }}>
                            <InputLabel id="demo-simple-select-label">country</InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={langsformsix}
                              onChange={handleDropdownsix}
                            >
                              {langs.map((l: any) => (
                                <MenuItem value={l}>
                                  {l.name}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                          {/* <TextField select label="Country"  name="Country" value={formData.Country} onChange={handlechange}  sx={{ marginTop: "50px" }} /> */}
                        </div>
                      </Box>
                      <TextField label="Income Slab" name="IncomeSlab" value={formData.IncomeSlab} onChange={handlechange} sx={{ position: "relative", top: "-90px" }} />
                      <Button variant="contained" style={style.button} onClick={handleSubmit}  fullWidth >
                        <Typography component="span" style={style.text} className="largeButtonText">Submit Details</Typography>
                      </Button>
      </Stack>

            </Paper>
                </Grid>
              </form>

            </Paper>
          </Grid>




        </Grid>
      </div>




    </>


  )
}

export default EditprofileCard

