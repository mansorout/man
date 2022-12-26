import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Mylocationicon } from "../../Assets/index";
import { useNavigate } from 'react-router-dom';
import { store } from '../../Store/Store';
import { isConstructorDeclaration, setSyntheticLeadingComments } from 'typescript';
import { submituserdetails } from '../../Store/Reducers/action';
import { girlicon } from '../../Assets/index'
import { girliconicon } from '../../Assets/index'
import { manicon } from '../../Assets/index'
import { getValue } from '@testing-library/user-event/dist/utils';
import clsx from "clsx";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { height, padding } from '@mui/system'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import { FormHelperText } from '@mui/material';
import '../../Components/EditProfile/Editprofilescreen.css'
import { Box, Grid, InputAdornment, Typography } from '@mui/material'
import Paper from "@mui/material/Paper";
import { makeStyles, createStyles } from "@mui/styles";
import '../../Components/EditProfile/Editprofilescreen.css'
import './style.css'
import CustomSelectBox from '../../Components/Custom components/customSelectBox';
import { getData, getDataWithoutToken, postDataWithoutToken } from '../../Utils/api';
import siteConfig from '../../Utils/siteConfig';

type formDataProps = {
  customer_id?: number,
  firstname: string,
  middlename: string,
  lastname: string,
  emailaddress: string,
  isemailverified?: number,//extra
  mobilenumber: string,
  ismobileverified: number,//extra
  dateofbirth: string,
  image: string,
  gender: string,
  addressline1: string,
  addressline2: string,
  pincode: string,
  city_id: number,
  city: string,
  state_id: number,
  state: string,
  country_id: number,
  uniqueid?: string, //extra
  countryofbirth_id: number,
  countryofbirth: string,
  placeofbirth_id: number,
  placeofbirth: string,
  incomeslab: string,
  incomecode: number,
  incomeslab_id: number,
  isnetbankingavailable?: boolean,//extra
  isbseregistered: boolean,
  bankname?: string//extra
}

type validateInputsProps = {
  firstname: boolean,
  lastname: boolean,
  emailaddress: boolean,
  mobilenumber: boolean,
  dateofbirth: boolean,
  addressline1: boolean,
  addressline2: boolean,
  pincode: boolean,
  city: boolean,
  state: boolean,
  placeofbirth: boolean,
  countryofbirth: boolean,
  incomeslab: boolean,
  country: boolean
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
  buttonbtn: {
    height: "48px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
    backgroundColor: "#23db7b",
    // marginTop: "-60px",
    marginLeft: "4%",
    width: "100%",
    maxWidth: "400px",
    marginBottom: "3%"

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

  }
}

const useStyles = makeStyles((theme: any) =>
  createStyles({
    paper: {
      textAlign: 'center',
    }, root: {
      flexGrow: 1,
    }
  }),
);

const NameRegex = /^[a-zA-Z ]{4,30}$/;
const mobileRegex = /^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const enumErrorMsg = {
  PLEASE_ENTER_NAME: "Please Enter Name",
  PLEASE_ENTER_MIDDLE_NAME: "Please Enter Middle Name",
  PLEASE_ENTER_LAST_NAME: "Please Enter Last Name",
  MOBILE_NUMBER_IS_INVALID: "Mobile number is invalid",
  EMAIL_ADDRESS_IS_INVALID: "Email Address is Invalid",
  ADDRESS_IS_REQUIRED: "Adresss is required",
  PINCODE_IS_INVALID: "Pincode is invalid",
  PLEASE_ENTER_COUNTRY: "Please Enter Country",
  PLEASE_ENTER_STATE: "Please enter state",
  PLEASE_ENTER_ADDRESS: "Please Enter address",
  PLEASE_ENTER_CITY: "Please enter city",
  PLEASE_ENTER_INCOME_SLAB: "Please enter income slab"
}

const enumActiveGender = {
  NOTHING: 0,
  MALE: 1,
  FEMALE: 2,
  TRANS: 3
}

const initialFormData: formDataProps = {
  // customer_id: null,
  firstname: "",
  middlename: "",
  lastname: "",
  emailaddress: "",
  isemailverified: 0,//extra
  mobilenumber: "",
  ismobileverified: 0,//extra
  dateofbirth: "",
  image: "",
  gender: "",
  addressline1: "",
  addressline2: "",
  pincode: "",
  city_id: 0,
  city: "",
  state_id: 0,
  state: "",
  country_id: 0,
  uniqueid: "", //extra
  placeofbirth_id: 0,
  placeofbirth: "",
  incomeslab: "",
  incomecode: 0,
  incomeslab_id: 0,
  isnetbankingavailable: false,//extra
  isbseregistered: false,
  bankname: "",//extra
  countryofbirth_id: 1,
  countryofbirth: "India",
}

const initialValidateinputsData: validateInputsProps = {
  firstname: false,
  lastname: false,
  emailaddress: false,
  mobilenumber: false,
  dateofbirth: false,
  addressline1: false,
  addressline2: false,
  pincode: false,
  city: false,
  state: false,
  placeofbirth: false,
  countryofbirth: false,
  incomeslab: false,
  country: false
}

const initialCountryList = [
  {
    country_id: 1,
    country: "India"
  }
]


const handleRegex = (regex: any, mail: string) => regex.test(mail);

const EditprofileCard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [cityList, setCityList] = useState<any[]>([]);
  const [stateList, setStateList] = useState<any[]>([]);
  const [incomeSlabList, setIncomeSlabList] = useState<any[]>([]);
  const [countryList, setCountryList] = useState<any[]>([...initialCountryList]);
  const [formData, setFormData] = useState<formDataProps>({ ...initialFormData });
  const [activeGender, setActiveGender] = useState<number>(enumActiveGender.NOTHING);
  const [validateInputs, setValidateInputs] = useState<validateInputsProps>({ ...initialValidateinputsData });

  useEffect(() => {
    getCountryList();
    getStateList();
    getIncomeSlabList();
  }, [])

  const getCountryList = () => {
    // setCountryList([...countryList]);
  }

  const getStateList = () => {
    getDataWithoutToken(
      siteConfig.METADATA_STATE_LIST,
      siteConfig.CONTENT_TYPE_APPLICATION_JSON,
      siteConfig.METADATA_API_ID,
    )
      .then(res => res.json())
      .then((data: any) => {
        if (data?.error) {
          console.log("error ocuured")
          return;
        }

        setStateList(data?.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const getIncomeSlabList = () => {
    getDataWithoutToken(
      siteConfig.METADATA_INCOMESLAB_LIST,
      siteConfig.CONTENT_TYPE_APPLICATION_JSON,
      siteConfig.METADATA_API_ID,
    )
      .then(res => res.json())
      .then((data: any) => {
        if (data?.error) {
          console.log("error ocuured")
          return;
        }

        setIncomeSlabList(data?.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const getCityList = (stateId: number) => {
    getDataWithoutToken(
      siteConfig.METADATA_CITY_LIST + `?state_id=${stateId}`,
      siteConfig.CONTENT_TYPE_APPLICATION_JSON,
      siteConfig.METADATA_API_ID,
    )
      .then(res => res.json())
      .then((data: any) => {
        if (data?.error) {
          console.log("error ocuured");
          return;
        }

        setCityList(data?.data);
      })
      .catch(err => {
        console.log(err);
      })
    setCityList([]);
  }

  const areAllFieldsFilled = (formData.firstname != "") && (NameRegex.test(formData.lastname)) && (mobileRegex.test(formData.mobilenumber)) &&
    (emailRegex.test(formData.emailaddress)) && (formData.placeofbirth !== "") && (formData.addressline1 !== "") && (formData.pincode !== "") && (formData.city !== "")

  const handlechange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleBlur = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value, "handle blur")
    setValidateInputs((prev: validateInputsProps) => ({
      ...prev,
      [name]: !value ? true : false
    }))
  }

  const customSelectBoxOnChange = (strType: string, val: any) => {
    console.log(val, "customSelectBoxOnChange()")
    let objFormData: any = { ...formData };
    objFormData[strType] = val;
    setFormData(objFormData);
  }

  const handleSubmitForm = (e: any) => {
    console.log(formData, "handleSubmitForm()");
    e.preventDefault();
    e.stopPropagation();
    // store.dispatch(submituserdetails({ 'formData': formData }));
    // navigate('/viewprofile');
  }

  return (
    <>
      <div style={{
        padding: '29px',
        borderRadius: "8px",
        marginBottom: "-15px",
      }}
      >
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} lg={6} >
            <Paper className='paddingstyle'
              sx={{
                p: 2,
                width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "-23px", borderRadius: "8px",
                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                marginLeft: "-1px"
              }}
            >
              <Stack m={2} spacing={2}>
                <Grid container spacing={2} sx={{
                  maxHeight: "100%",

                }}>
                  <Grid item xs={12} md={12}>

                    <TextField
                      onBlur={handleBlur}
                      label="First Name"
                      name="firstname"
                      value={formData?.firstname}
                      onChange={handlechange}
                      fullWidth
                      error={validateInputs?.firstname}
                      id='First Name'
                      sx={{
                        color: "rgba(0, 0, 0, 0.6)",
                        // boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                        width: "100%", fontSize: "15px", fontWeight: "normal",

                      }}
                      helperText={validateInputs?.firstname ? enumErrorMsg.PLEASE_ENTER_NAME : ""}
                      required
                    />
                  </Grid>
                </Grid>
                <TextField
                  name="middlename"
                  label="Middle Name"
                  onBlur={handleBlur}
                  value={formData?.middlename}
                  onChange={handlechange}
                  fullWidth
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)",
                    // boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                    width: "100%", fontSize: "15px", fontWeight: "normal",

                  }}
                  // error={validateInputs?.middlename}
                  // helperText={validateInputs?.middlename ? enumErrorMsg.PLEASE_ENTER_MIDDLE_NAME : ""}
                  required
                />
                <TextField
                  label="Last Name"
                  name="lastname"
                  onBlur={handleBlur}
                  value={formData?.lastname}
                  onChange={handlechange}
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)",
                    //  boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                    width: "100%", fontSize: "15px",
                    fontWeight: "normal" ,
                  }}
                  error={validateInputs?.lastname}
                  helperText={validateInputs?.lastname ? enumErrorMsg.PLEASE_ENTER_LAST_NAME : ""}
                  required
                />
                <TextField
                  label="Mobile Number"
                  onBlur={handleBlur}
                  type="number"
                  name="mobilenumber"
                  value={formData?.mobilenumber}
                  onChange={handlechange}
                  fullWidth
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)",
                    //  boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                    width: "100%", fontSize: "15px", fontWeight: "normal"
                  }}
                  error={validateInputs?.mobilenumber}
                  helperText={validateInputs?.mobilenumber ? enumErrorMsg.MOBILE_NUMBER_IS_INVALID : ""}
                  InputProps={{
                    startAdornment: <InputAdornment position="start">
                      +91
                    </InputAdornment>,
                  }}
                  required
                />
                <TextField
                  label="Email Address"
                  onBlur={handleBlur}
                  name="emailaddress"
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)",
                    //  boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                    width: "100%",
                    fontSize: "15px", fontWeight: "normal"
                  }}
                  value={formData?.emailaddress}
                  onChange={handlechange} fullWidth
                  error={validateInputs?.emailaddress}
                  helperText={validateInputs?.emailaddress ? enumErrorMsg.EMAIL_ADDRESS_IS_INVALID : ""}
                  required
                />
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '194px', marginTop: "-23px" }
                  }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <CustomSelectBox
                        labelKey={'country'}
                        valueKey={'country_id'}
                        options={countryList}
                        inpurLabelValue={"Country of birth"}
                        inputLabelSX={{
                          color: "rgba(0, 0, 0, 0.6)",
                          fontSize: "15px",
                          fontWeight: "normal",
                          top: "-1px",
                          background: "#fff"
                        }}
                        selectSX={{
                          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                        }}
                        value={formData?.countryofbirth_id}
                        onChange={(val: any) => {
                          customSelectBoxOnChange("countryofbirth_id", val)
                        }}
                        onBlur={handleBlur}
                        error={validateInputs?.countryofbirth}
                        formHelperText={validateInputs?.countryofbirth ? enumErrorMsg.PLEASE_ENTER_COUNTRY : ""}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <CustomSelectBox
                        labelKey={'state'}
                        valueKey={'state_id'}
                        options={stateList}
                        placeholder={'Select your state'}
                        inpurLabelValue={"Place of birth"}
                        inputLabelSX={{
                          color: "rgba(0, 0, 0, 0.6)",
                          fontSize: "15px",
                          fontWeight: "normal",
                          top: "-1px",
                          background: "#fff"
                        }}
                        selectSX={{
                          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                        }}
                        value={formData?.placeofbirth_id}
                        onChange={(val: any) => {
                          customSelectBoxOnChange("placeofbirth_id", val)
                        }}
                        onBlur={handleBlur}
                        error={validateInputs?.state}
                        formHelperText={validateInputs?.state ? enumErrorMsg.PLEASE_ENTER_STATE : ""}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} sx={{
            maxHeight: "100%",
          }}
            className="paperstyle"
          >
            <Paper className='paddingstyle_style'
              sx={{
                p: 1,
                width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "-22px", borderRadius: "-22px",
                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                marginLeft: "12px"
              }} > <Typography sx={{ color: "#6c63ff", }}>Gender</Typography>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '194px', height: "16px", },
                  // marginTop: "-69%",
                }}
              >
                <Grid container spacing={3}>
                  <Grid item sm={6} md={12}>
                    <Box sx={{ '& button': { m: 1 }, marginLeft: "4px", textAlign: "left" }} className='wholedivbuttons'>
                      <Button
                        id={"male"}
                        className="malestyle"
                        name="gender"
                        onClick={() => {
                          setActiveGender(enumActiveGender.MALE);
                          setFormData(prev => ({ ...prev, gender: "male" }))
                        }}
                        variant="outlined"
                        size="small"
                        sx={{
                          backgroundColor: " #fff",
                          borderRadius: "8px",
                          boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05) ",
                          height: " 42px",
                          padding: " 6px 10px 1px 6px"
                        }}
                        style={{
                          cursor: "pointer",
                          border: `1px solid ${activeGender === enumActiveGender.MALE ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`,
                          borderRadius: "8px",
                          backgroundColor: `${activeGender === enumActiveGender.MALE ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`,
                          textAlign: "center",
                          padding: "12px 14px"
                        }}
                      >
                        <img
                          src={manicon}
                          alt="smallarrow Logo"
                          style={{ width: "24px", height: "24px", borderRadius: "12px", marginLeft: "-3px" }}
                        />
                        <Typography sx={{ marginLeft: "2px", color: "#7b7b9d", fontSize: "16px" }}>Male</Typography>
                      </Button>
                      <Button
                        name="gender"
                        value={"female"}
                        className="femalestyle"
                        onClick={() => {
                          setActiveGender(enumActiveGender.FEMALE);
                          setFormData({ ...formData, gender: "female" })
                        }}
                        style={{
                          cursor: "pointer",
                          border: `1px solid ${activeGender === enumActiveGender.FEMALE ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`,
                          borderRadius: "8px",
                          backgroundColor: `${activeGender === enumActiveGender.FEMALE ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`,
                          textAlign: "center",
                          padding: "12px 14px"
                        }}
                        variant="outlined"
                        size="medium"
                        sx={{ backgroundColor: " #fff", borderRadius: "8px", boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05)", height: " 42px", padding: " 6px 10px 6px 6px" }}
                      >
                        <img src={girlicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", borderRadius: "12px", marginLeft: "2px" }} />
                        <Typography sx={{ marginLeft: "2px", color: "#7b7b9d", fontSize: "16px" }}>  Female</Typography>
                      </Button>
                      <Button
                        id={"transgender"}
                        className="buttontransgender"
                        name="gender" onClick={() => {
                          setActiveGender(enumActiveGender.TRANS);
                          setFormData({ ...formData, gender: "transgender" })
                        }}
                        style={{
                          cursor: "pointer",
                          border: `1px solid ${activeGender === enumActiveGender.TRANS ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`,
                          borderRadius: "8px",
                          backgroundColor: `${activeGender === enumActiveGender.TRANS ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "12px 14px"
                        }}
                        variant="outlined" size="large" sx={{ backgroundColor: " #fff", borderRadius: "8px", boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05)", height: " 42px", padding: " 6px 10px 6px 6px" }}>
                        <img src={girliconicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", borderRadius: "12px", marginLeft: "2px" }} />
                        <Typography sx={{ marginLeft: "2px", color: "#7b7b9d", fontSize: "16px" }}>Transgender</Typography>
                      </Button>
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Address"
                      onBlur={handleBlur}
                      name="addressline1"
                      value={formData?.addressline1}
                      onChange={handlechange}
                      sx={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.6)", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)" }}
                      placeholder="Enter your street address"
                      error={validateInputs?.addressline1}
                      helperText={validateInputs?.addressline1 ? enumErrorMsg.PLEASE_ENTER_ADDRESS : ""}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="end">
                            <img src={Mylocationicon} width="22px" alt="location" style={{ position: "absolute", left: "86%",cursor:"pointer" }} />
                          </InputAdornment>),
                      }}>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CustomSelectBox
                      labelKey={'state'}
                      valueKey={'state_id'}
                      options={stateList}
                      inpurLabelValue={"State"}
                      inputLabelSX={{
                        color: "rgba(0, 0, 0, 0.6)",
                        fontSize: "15px",
                        fontWeight: "normal",
                        top: "-1px",
                        background: "#fff"
                      }}
                      selectSX={{
                        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                      }}
                      value={formData?.state_id}
                      onChange={(val: any) => {
                        getCityList(val);
                        customSelectBoxOnChange("state_id", val);
                      }}
                      onBlur={handleBlur}
                      error={validateInputs?.state}
                      formHelperText={validateInputs?.state ? enumErrorMsg.PLEASE_ENTER_STATE : ""}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CustomSelectBox
                      labelKey={'city'}
                      valueKey={'city_id'}
                      options={cityList}
                      className={"Drapdownstyle"}
                      inpurLabelValue={"City of Residence"}
                      inputLabelSX={{
                        color: "rgba(0, 0, 0, 0.6)", fontSize: "15px",
                        fontWeight: "normal",
                        top: "-1px",
                        background: "#fff"
                      }}
                      selectSX={{
                        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                      }}
                      value={formData?.city_id}
                      onChange={(val: any) => {
                        customSelectBoxOnChange("city_id", val)
                      }}
                      onBlur={handleBlur}
                      error={validateInputs?.city}
                      formHelperText={validateInputs?.city ? enumErrorMsg.PLEASE_ENTER_CITY : ""}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} >
                    <FormControl
                      className="pincodeClass">
                      <TextField
                        onBlur={handleBlur}
                        label="Pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handlechange}
                        fullWidth
                        error={validateInputs?.pincode}
                        className="pincodestayle"
                        id='Pincode'
                        sx={{
                          color: "rgba(0, 0, 0, 0.6)",
                          // boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                          width: "100% !important",
                          fontSize: "15px",
                          fontWeight: "normal",
                          boxShadow: "none"
                        }} />
                    </FormControl>
                    <FormHelperText sx={{ color: "red" }} className="labelStyle">
                      {validateInputs?.pincode ? enumErrorMsg.PINCODE_IS_INVALID : ""}
                    </FormHelperText>
                  </Grid>
                  <Grid item xs={12} md={6}  >
                    <CustomSelectBox
                      labelKey={'country'}
                      valueKey={'country_id'}
                      options={countryList}
                      inpurLabelValue={"Country"}
                      inputLabelSX={{
                        color: "rgba(0, 0, 0, 0.6)",
                        fontSize: "15px",
                        fontWeight: "normal",
                        top: "-1px",
                        background: "#fff"
                      }}
                      selectSX={{
                        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                      }}
                      value={formData?.country_id}
                      onChange={(val: any) => {
                        customSelectBoxOnChange("country_id", val)
                      }}
                      onBlur={handleBlur}
                      error={validateInputs?.country}
                      formHelperText={validateInputs?.country ? enumErrorMsg.PLEASE_ENTER_COUNTRY : ""}
                    />
                  </Grid>
                  <Grid item xs={12} >
                    <CustomSelectBox
                      labelKey={'incomeslab'}
                      valueKey={'incomeslab_id'}
                      options={incomeSlabList}
                      inpurLabelValue={"Income Slab"}
                      inputLabelSX={{
                        color: "rgba(0, 0, 0, 0.6)",
                        fontSize: "15px",
                        fontWeight: "normal",
                        top: "-1px",
                        background: "#fff",
                        // width: "100%"
                      }}
                      selectSX={{
                        boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                      }}
                      value={formData?.incomeslab_id}
                      onChange={(val: any) => {
                        customSelectBoxOnChange("incomeslab_id", val)
                      }}
                      onBlur={handleBlur}
                      error={validateInputs?.incomeslab}
                      formHelperText={validateInputs?.incomeslab ? enumErrorMsg.PLEASE_ENTER_INCOME_SLAB : ""}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      style={style.buttonbtn}
                      className="buttoncenterstyle"
                      // disabled={!areAllFieldsFilled}
                      onClick={handleSubmitForm}
                      fullWidth
                    >
                      <Typography component="span" style={style.text} className="largeButtonText" >Submit Details</Typography>
                    </Button>
                  </Grid>
                </Grid>

                {/* </div> */}
                {/* &nbsp; */}
                {/* <div style={{ position: "relative", top: "-51px" }}> */}
                {/* <Grid container spacing={2}  >
                    <Grid item xs={12} md={6}>
                      <CustomSelectBox
                        labelKey={'state'}
                        valueKey={'state_id'}
                        options={stateList}
                        inpurLabelValue={"State"}
                        inputLabelSX={{
                          color: "rgba(0, 0, 0, 0.6)",
                          fontSize: "15px",
                          fontWeight: "normal",
                          top: "-1px",
                          background: "#fff"
                        }}
                        selectSX={{
                          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                        }}
                        value={formData?.state_id}
                        onChange={(val: any) => {
                          getCityList(val);
                          customSelectBoxOnChange("state_id", val);
                        }}
                        onBlur={handleBlur}
                        error={validateInputs?.state}
                        formHelperText={validateInputs?.state ? enumErrorMsg.PLEASE_ENTER_STATE : ""}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <CustomSelectBox
                        labelKey={'city'}
                        valueKey={'city_id'}
                        options={cityList}
                        className={"Drapdownstyle"}
                        inpurLabelValue={"City of Residence"}
                        inputLabelSX={{
                          color: "rgba(0, 0, 0, 0.6)", fontSize: "15px",
                          fontWeight: "normal",
                          top: "-1px",
                          background: "#fff"
                        }}
                        selectSX={{
                          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                        }}
                        value={formData?.city_id}
                        onChange={(val: any) => {
                          customSelectBoxOnChange("city_id", val)
                        }}
                        onBlur={handleBlur}
                        error={validateInputs?.city}
                        formHelperText={validateInputs?.city ? enumErrorMsg.PLEASE_ENTER_CITY : ""}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} >
                      <FormControl
                        className="pincodeClass">
                        <TextField
                          onBlur={handleBlur}
                          label="Pincode"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handlechange}
                          fullWidth
                          error={validateInputs?.pincode}
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
                        {validateInputs?.pincode ? enumErrorMsg.PINCODE_IS_INVALID : ""}
                      </FormHelperText>
                    </Grid>
                    <Grid item xs={12} md={6}  >
                      <CustomSelectBox
                        labelKey={'country'}
                        valueKey={'country_id'}
                        options={countryList}
                        inpurLabelValue={"Country"}
                        inputLabelSX={{
                          color: "rgba(0, 0, 0, 0.6)",
                          fontSize: "15px",
                          fontWeight: "normal",
                          top: "-1px",
                          background: "#fff"
                        }}
                        selectSX={{
                          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                        }}
                        value={formData?.country_id}
                        onChange={(val: any) => {
                          customSelectBoxOnChange("country_id", val)
                        }}
                        onBlur={handleBlur}
                        error={validateInputs?.country}
                        formHelperText={validateInputs?.country ? enumErrorMsg.PLEASE_ENTER_COUNTRY : ""}
                      />
                    </Grid>
                    <Grid item xs={12} >
                      <CustomSelectBox
                        labelKey={'incomeslab'}
                        valueKey={'incomeslab_id'}
                        options={incomeSlabList}
                        inpurLabelValue={"Income Slab"}
                        inputLabelSX={{
                          color: "rgba(0, 0, 0, 0.6)",
                          fontSize: "15px",
                          fontWeight: "normal",
                          top: "-1px",
                          background: "#fff",
                          // width: "100%"
                        }}
                        selectSX={{
                          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                        }}
                        value={formData?.incomeslab_id}
                        onChange={(val: any) => {
                          customSelectBoxOnChange("incomeslab_id", val)
                        }}
                        onBlur={handleBlur}
                        error={validateInputs?.incomeslab}
                        formHelperText={validateInputs?.incomeslab ? enumErrorMsg.PLEASE_ENTER_INCOME_SLAB : ""}
                      />
                    </Grid>
                  </Grid> */}
                {/* </div> */}

              </Box>
              {/* </Stack> */}
            </Paper>
          </Grid>
          {/* </form> */}
        </Grid>
      </div>
    </>
  )
}

export default EditprofileCard

