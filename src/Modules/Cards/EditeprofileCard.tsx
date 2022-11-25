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
import Radio from '@mui/material/Radio';

// import FormControlLabel from '@mui/material/FormControlLabel';
// import MenuItem from '@mui/material/MenuItem';

// import { makeStyles, createStyles } from "@material-ui/core/styles";






const langs = [{ name: "English", code: "en" }, { name: "German", code: "de" }];
const country = [{ name: "Delhi", code: "de" }, { name: "kanpur" }]
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
  const useStyles = makeStyles((theme:any) =>
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
  const handlechange = (e: any) => {

    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value

    })


  }
  const dispatch = useDispatch()
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');

  const navigate = useNavigate();
  function handleSubmit() {
    // addUserDEtails("")
    store.dispatch(submituserdetails({ 'userdata': formData }))

    navigate('/completedview');


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
      transform: "translate(8px, -23px)"


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
        width: "118vh", backgroundColor: '#ffffff',
        padding: '29px',
        borderRadius:"8px",
        marginBottom: "-15px" 
        
      }}>
        <Grid container spacing={3}>


          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}
              sx={{
                p: 1,
                width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "-27px", borderRadius: "8px",
                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                marginLeft: "-25px"
              }}
            >
              <Stack m={2} spacing={6}>

                <TextField
                  label="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handlechange}
                  fullWidth
                  id='First Name'
                  sx={{ color:"rgba(0, 0, 0, 0.6)", 
                  boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                  width:"440px", fontSize: "15px", fontWeight: "normal",marginTop: "-20px" }}
                >


                </TextField>
                <TextField label="Middle Name"
                  name="middleName"
                  value={formData.middleName} onChange={handlechange} fullWidth
                  sx={{ color:"rgba(0, 0, 0, 0.6)",boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)",width:"440px", fontSize: "15px", fontWeight: "normal", marginTop: "-5px" }} >


                </TextField>
                <TextField label="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handlechange} fullWidth
                  sx={{ color:"rgba(0, 0, 0, 0.6)",boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)",width:"440px", fontSize: "15px", fontWeight: "normal", marginTop: "-5px" }} >


                </TextField>
                <TextField label="Mobile Number"
                  name="mobilenumber" value={formData.mobilenumber}
                  onChange={handlechange} fullWidth
                  sx={{ color:"rgba(0, 0, 0, 0.6)",boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)",width:"440px", fontSize: "15px", fontWeight: "normal", marginTop: "-5px" }}

                >


                </TextField>
                <TextField label="Email Address"
                  name="emailaddress"
                  sx={{ color:"rgba(0, 0, 0, 0.6)",boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", width:"440px", fontSize: "15px", fontWeight: "normal", marginTop: "-5px" }}
                  value={formData.emailaddress} onChange={handlechange} fullWidth >


                </TextField>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '194px', marginTop: "20px" }
                  }} >
                  <div style={{ position: "relative", top: "-9px" }}>

                    <FormControl sx={{ width: "198px" }}>
                      <InputLabel id="demo-simple-select-label" sx={{ color:"rgba(0, 0, 0, 0.6)",
                       fontSize: "15px",
                        fontWeight: "normal",
                         }}>country</InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formData.CountrySecond}
                        onChange={handlechange}
                        name="CountrySecond"
                        sx={{boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                      >
                        {country.map((l: any) => (
                          <MenuItem value={l}>
                            {l.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl sx={{ width: "198px" }}>
                      <InputLabel id="demo-simple-select-label"
                       sx={{ color:"rgba(0, 0, 0, 0.6)" , 
                       fontSize: "15px",
                        fontWeight: "normal",
                        }}>State</InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formData.StateOfBirth}
                        onChange={handlechange}
                        name="StateOfBirth"
                        sx={{boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                      >
                        {State.map((l: any) => (
                          <MenuItem value={l}>
                            {l.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>

                </Box>


              </Stack>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}  >
            <Paper className={classes.paper}
              sx={{
                p: 1,
                width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "-27px", borderRadius: "8px",
                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                marginLeft: "9px"
              }}
            >

              <Typography sx={{ color: "#6c63ff", marginLeft: "-72%" }}>Gender</Typography>
              <Box sx={{ '& button': { m: 1} }}>

               <div style={{marginLeft:"-45px"}}>

                
                  <Button value={formData.gender}
                    name="gender" 
                    onChange={handlechange}
                    variant="outlined"
                    size="small"
                    sx={{ backgroundColor: " #fff",
                     borderRadius: "8px",
                      boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05) ",
                       height: " 42px", padding: " 6px 10px 6px 6px" }}>

                    <img src={manicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "-9px" }} />
                    {/* <Radio {...controlProps('a')} size="small" sx={{ width: "2px", height: "2px" }} /> */}

                    <Typography sx={{ marginLeft: "2px",color:"#7b7b9d" }}>  Male</Typography>
                  </Button>
                  <Button variant="outlined"  size="medium" sx={{ backgroundColor: " #fff", borderRadius: "8px", boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05)", height: " 42px", padding: " 6px 10px 6px 6px" }}>
                    <img src={girlicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "2px" }} />
                    {/* <Radio   {...controlProps('b')} sx={{ width: "2px", height: "2px" }} /> */}
                    <Typography sx={{ marginLeft: "2px",color:"#7b7b9d" }}>  Female</Typography>
                  </Button>
                  <Button variant="outlined" size="large" sx={{ backgroundColor: " #fff", borderRadius: "8px", boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05)", height: " 42px", padding: " 6px 10px 6px 6px" }}>
                    <img src={girliconicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "2px" }} />
                    {/* <Radio {...controlProps('c')} sx={{
                      '& .MuiSvgIcon-root': { fontSize: 28, },
                      height: "2px", width: "2px",


                    }}
                    /> */}
                    <Typography sx={{ marginLeft: "2px",color:"#7b7b9d" }}>Transgender</Typography>
                  </Button>
                </div>
              </Box>



              <Stack m={2} spacing={6}>
                <TextField label="Address"
                 name="addressline1" 
                 value={formData.addressline1} 
                 onChange={handlechange} 
                 sx={{ fontSize: "16px",  color:"rgba(0, 0, 0, 0.6)",boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)" }} 
                 placeholder="Enter your street address" >


                </TextField>
                <img src={Mylocationicon} width="24px" height="24" alt="Google Logo" style={{ position: "relative", top: "-90px", left: "92%" }} />
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '194px', height:"16px", },
                    marginTop: "-69%",

                  }}




                >
                  <div style={{ position: "relative", top: "-86px" }}>
                    <FormControl sx={{ width: "198px" }}>
                      <InputLabel id="demo-simple-select-label" 
                      sx={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "15px", 
                      fontWeight: "normal", }}>City of Residence</InputLabel>
                       <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formData.CityofResidence}
                        onChange={handlechange}
                        name="CityofResidence"
                        sx={{boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                      >
                        {Cityofresidence.map((l: any) => (
                          <MenuItem value={l}>
                            {l.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                     &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl sx={{ width: "198px" }}>
                      <InputLabel id="demo-simple-select-label" 
                      sx={{ color: "rgba(0, 0, 0, 0.6)", 
                      fontSize: "15px", 
                      fontWeight: "normal",}}>State</InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formData.State}
                        onChange={handlechange}
                        name="State"
                        sx={{boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                      >
                        {State.map((l: any) => (
                          <MenuItem value={l}>
                            {l.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                  </div>
               <div style={{ position: "relative", top: "-46px" }}>
                    <FormControl sx={{ width: "198px" }}>
                      <InputLabel
                        id="demo-simple-select-label"
                        sx={{ color: "rgba(0, 0, 0, 0.6)",
                         fontSize: "15px",
                          fontWeight: "normal",
                           }}>pincode</InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formData.pincode}
                        label="Age"
                        onChange={handlechange}
                        name="pincode"
                        sx={{boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                      >
                        {pincode.map((l: any) => (
                          <MenuItem value={l}>
                            {l.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                    <FormControl sx={{ width: "198px" }}>
                      <InputLabel
                        id="demo-simple-select-label"
                        sx={{ color: "rgba(0, 0, 0, 0.6)", 
                        fontSize: "15px", 
                        fontWeight: "normal", }}>country</InputLabel>

                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={formData.CountryFirst}
                        label="Age"
                        onChange={handlechange}
                        name="CountryFirst"
                        sx={{boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                      >
                        {country.map((l: any) => (
                          <MenuItem value={l}>
                            {l.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>


                  </div>
                </Box>
                      <TextField label="Income Slab" name="IncomeSlab"
                       value={formData.IncomeSlab}
                        onChange={handlechange} 
                        sx={{ position: "relative", top: "-50px",boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)" }} />
                <Button variant="contained" style={style.button} onClick={handleSubmit} fullWidth >
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

