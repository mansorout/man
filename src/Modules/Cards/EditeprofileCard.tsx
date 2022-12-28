import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDataWithoutToken, postData, } from '../../Utils/api';
import { Mylocationicon } from "../../Assets/index";
import { useNavigate } from 'react-router-dom';
import { store } from '../../Store/Store';
import { girlicon } from '../../Assets/index'
import { girliconicon } from '../../Assets/index'
import { manicon } from '../../Assets/index'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import { FormHelperText } from '@mui/material';
import '../../Components/EditProfile/Editprofilescreen.css'
import { Box, Grid, InputAdornment, Typography } from '@mui/material'
import Paper from "@mui/material/Paper";
import { makeStyles, createStyles } from "@mui/styles";
import '../../Components/EditProfile/Editprofilescreen.css'
import CustomSelectBox from '../../Components/Custom components/customSelectBox';
import siteConfig from '../../Utils/siteConfig';
import SprintMoneyLoader from '../../Components/CommonComponents/sprintMoneyLoader';
import { checkExpirationOfToken } from '../../Utils/globalFunctions';
import { array } from 'yup/lib/locale';
import { getUserProfileDataThunk } from '../../Store/Authentication/thunk/auth-thunk';
import './style.css'
import { setTokenExpiredStatusAction } from '../../Store/Authentication/actions/auth-actions';
import { getCityListThunk, getIncomeSlabListThunk, getStateListThunk } from '../../Store/Global/thunk/global-thunk';

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
  country: string,
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
  // dateofbirth: boolean,
  addressline1: boolean,
  // addressline2: boolean,
  pincode: boolean,
  city_id: boolean,
  state_id: boolean,
  placeofbirth_id: boolean,
  countryofbirth_id: boolean,
  incomeslab_id: boolean,
  country_id: boolean,
  gender: boolean
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
  country: "",
  uniqueid: "", //extra
  placeofbirth_id: 0,
  placeofbirth: "",
  incomeslab: "",
  incomecode: 0,
  incomeslab_id: 0,
  isnetbankingavailable: false,//extra
  isbseregistered: false,
  bankname: "",//extra
  countryofbirth_id: 0,
  countryofbirth: "",
}

const initialValidateinputsData: validateInputsProps = Object.freeze({
  firstname: false,
  lastname: false,
  emailaddress: false,
  mobilenumber: false,
  // dateofbirth: false,
  addressline1: false,
  // addressline2: false,
  pincode: false,
  city_id: false,
  state_id: false,
  placeofbirth_id: false,
  countryofbirth_id: false,
  incomeslab_id: false,
  country_id: false,
  gender: false
})

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
  PLEASE_ENTER_INCOME_SLAB: "Please enter income slab",
  PLEASE_ENTER_GENDER: "Please enter gender"
}

const enumActiveGender = {
  NOTHING: 'nothing',
  MALE: 'male',
  FEMALE: 'female',
  TRANS: 'transgender'
}

const initialCountryList = [
  {
    country_id: 1,
    country: "India"
  }
]

const NameRegex = /^[a-zA-Z ]{4,30}$/;
const mobileRegex = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const handleRegex = (regex: any, value: string) => regex.test(value);

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
    marginBottom: "-4%"

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

const EditprofileCard = () => {
  const classes = useStyles();
  const dispatchLocal = useDispatch();
  const navigate = useNavigate();

  const [cityList, setCityList] = useState<any[]>([]);
  const [stateList, setStateList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [incomeSlabList, setIncomeSlabList] = useState<any[]>([]);
  const [countryList, setCountryList] = useState<any[]>([...initialCountryList]);
  const [formData, setFormData] = useState<formDataProps>({ ...initialFormData });
  const [activeGender, setActiveGender] = useState<string>(enumActiveGender.NOTHING);
  const [validateInputs, setValidateInputs] = useState<validateInputsProps>({ ...initialValidateinputsData });

  const g_profileData: any = useSelector((state: any) => state?.authReducer?.profile?.data);
  const g_stateList: any = useSelector((state: any) => state?.globalReducer?.stateList);
  const g_cityList: any = useSelector((state: any) => state?.globalReducer?.cityList);
  const g_incomeSlabList: any = useSelector((state: any) => state?.globalReducer?.incomeSlabList);

  useEffect(() => {
    getCountryList();
    getStateList();
    getIncomeSlabList();
    if (g_profileData && !Object.keys(g_profileData).length) {
      navigate("/viewProfile");
      // store.dispatch(getUserProfileDataThunk());
    }
  }, []);

  // useEffect(() => {
  //   if (g_stateList && g_stateList.length) {
  //     setStateList(g_stateList);
  //   }
  // }, [g_stateList]);

  // useEffect(() => {
  //   if (g_cityList && g_cityList.length) {
  //     setCityList(g_cityList);
  //   }
  // }, [g_cityList]);

  // useEffect(() => {
  //   if (g_incomeSlabList && g_incomeSlabList.length) {
  //     setIncomeSlabList(g_incomeSlabList);
  //   }
  // }, [g_incomeSlabList]);

  useEffect(() => {
    if (g_profileData?.userdetails) getUserProfileData();
  }, [g_profileData?.userdetails]);

  useEffect(() => {
    if (formData.emailaddress && formData.emailaddress.length) {
      regexValidate(emailRegex, 'emailaddress', formData.emailaddress);
    }
  }, [formData.emailaddress])

  useEffect(() => {
    if (formData.mobilenumber && formData.mobilenumber.length) {
      regexValidate(mobileRegex, 'mobilenumber', formData.mobilenumber);
    }
  }, [formData.mobilenumber])

  useEffect(() => {
    if (formData?.pincode && formData?.pincode.length) {
      handlePincodeLengthValidation();
    }
  }, [formData?.pincode]);

  const getCountryList = () => {
    // setCountryList([...countryList]);
  }

  const getStateList = () => {
    // store.dispatch(getStateListThunk());
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

  const getCityList = (stateId: number) => {
    // store.dispatch(getCityListThunk(stateId));
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
  }

  const getIncomeSlabList = () => {
    // store.dispatch(getIncomeSlabListThunk());
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

  const getUserProfileData = () => {

    let objUserDetails = g_profileData?.userdetails;
    if (!g_profileData?.userdetails) {
      return;
    }

    getCityList(objUserDetails?.state_id);

    setFormData((prev: formDataProps) => ({
      ...prev,
      firstname: objUserDetails?.firstname,
      middlename: objUserDetails?.middlename,
      lastname: objUserDetails?.lastname,
      emailaddress: objUserDetails?.emailaddress,
      mobilenumber: objUserDetails?.mobilenumber,
      gender: objUserDetails?.gender,
      addressline1: objUserDetails?.addressline1,
      pincode: objUserDetails?.pincode,
      city_id: objUserDetails?.city_id,
      state_id: objUserDetails?.state_id,
      country_id: objUserDetails?.country_id,
      placeofbirth_id: objUserDetails?.placeofbirth_id,
      incomeslab_id: objUserDetails?.incomeslab_id,
      countryofbirth_id: 1,
    }))

    setActiveGender(objUserDetails?.gender);
  }

  const handlechange = (e: any) => {
    e.preventDefault();
    let { name, value } = e.target;
    if (name === "firstname" || name === "lastname" || name === "middlename") {
      value = value.replace(/[^a-z]/gi, '');
    }
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handlePincodeLengthValidation = () => {
    let bFlag: boolean = false;

    if (formData.pincode && formData.pincode.length < 7 && formData.pincode.length > 0) {
      console.log("formData.pincode < 6")
      bFlag = false;
    } else {
      console.log("formData.pincode > 6")
      bFlag = true;
    }

    setValidateInputs((prev: validateInputsProps) => ({
      ...prev,
      "pincode": bFlag
    }))
  }

  const handleBlur = (e: any) => {
    const { name, value } = e.target;
    if (Object.keys(validateInputs).includes(name)) {
      if (name === "pincode") {
        handlePincodeLengthValidation();
      } else if (name === "emailaddress") {
        regexValidate(emailRegex, name, value);
      } else if (name === "mobilenumber") {
        regexValidate(mobileRegex, name, value);
      } else {
        setValidateInputs((prev: validateInputsProps) => ({
          ...prev,
          [name]: !value ? true : false
        }))
      }
    }
  }

  const customSelectBoxOnChange = (strType: string, val: any) => {
    let objFormData: any = { ...formData };
    objFormData[strType] = val;
    setFormData(objFormData);
  }

  const throwErrorOnWrongField = () => {
    let throwError: boolean = true;
    let arrFormDataKeys: any[] = Object.keys(validateInputs);
    arrFormDataKeys.forEach((key: string, index: number) => {
      if (key !== "middlename") {
        // @ts-ignore
        if (!formData[key]) {
          throwError = true;
        } else {
          throwError = false
        }
      }

      setValidateInputs(prev => ({
        ...prev,
        [key]: throwError
      }))
    })

    return throwError;
  }

  const regexValidate = (regexType: any, name: string, value: string) => {
    let bFlag: boolean = false;

    if (!handleRegex(regexType, value)) {
      bFlag = true;
    } else {
      bFlag = false;
    }

    setValidateInputs(prev => ({ ...prev, [name]: bFlag }));
    return bFlag;
  }

  const isAllFieldsValidated = () => {
    let arr: boolean[] = Object.values(validateInputs).filter((item: boolean) => item === true);
    return arr ? arr.length : 0;
  }

  const handleSubmitForm = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (throwErrorOnWrongField()) {
      return;
    }

    if (isAllFieldsValidated()) {
      console.log("please validate all firlds")
      return;
    }


    if (regexValidate(emailRegex, 'emailaddress', formData.emailaddress)) {
      return;
    }

    if (regexValidate(mobileRegex, 'mobilenumber', formData.mobilenumber)) {
      return;
    }

    if (validateInputs)
      setValidateInputs({ ...initialValidateinputsData });

    setLoading(true);
    postData(
      formData,
      siteConfig.AUTHENTICATION_PROFILE_EDIT,
      siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
      siteConfig.AUTHENTICATION_API_ID
    )
      .then(res => res.json())
      .then((data) => {
        setLoading(false);

        if (checkExpirationOfToken(data?.code)) {
          dispatchLocal(setTokenExpiredStatusAction(true));
          return;
        }

        if (data?.error) {
          return;
        }
        
        console.log("profile saved");
        navigate('/viewprofile');
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <div style={{
        padding: '29px',
        borderRadius: "8px",
        marginBottom: "-15px",
      }}
      >
        <SprintMoneyLoader loadingStatus={loading} />
        <Grid container spacing={4}>
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
                      type='text'
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
                  type='text'
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
                  type='text'
                  label="Last Name"
                  name="lastname"
                  onBlur={handleBlur}
                  value={formData?.lastname}
                  onChange={handlechange}
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)",
                    //  boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                    width: "100%", fontSize: "15px",
                    fontWeight: "normal",
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
                    // '& .MuiTextField-root': { m: 1, width: '194px', marginTop: "-23px" } 
                  }}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <CustomSelectBox
                        name={"countryofbirth_id"}
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
                        error={!formData?.countryofbirth_id ? validateInputs?.countryofbirth_id : false}
                        formHelperText={!formData?.countryofbirth_id ? (validateInputs?.countryofbirth_id ? enumErrorMsg.PLEASE_ENTER_COUNTRY : "") : ""}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <CustomSelectBox
                        name={"placeofbirth_id"}
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
                        error={!formData.placeofbirth_id ? validateInputs?.placeofbirth_id : false}
                        formHelperText={!formData.placeofbirth_id ? (validateInputs?.placeofbirth_id ? enumErrorMsg.PLEASE_ENTER_STATE : "") : ""}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid
            item
            spacing={3}
            sx={{
              maxHeight: "100%",
              marginTop: "0%",
              // paddingLeft: { xs: "32px !important", sm: "19% !important", md: "32px !important" }
            }}
            className="paperstyle"
            xs={12} sm={6} lg={6}
          >
            <Paper className='paddingstyle'
              sx={{
                p: 2,
                width: '1',
                maxWidth: 460,
                bgcolor: 'background.paper',
                marginTop: "-23px",
                borderRadius: "8px",
                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                marginLeft: "-1px"
              }}
            >
              <Typography sx={{ color: "#6c63ff", }}>Gender</Typography>
              <Stack m={2} spacing={2}>
                <Grid container spacing={2} sx={{
                  maxHeight: "100%",
                }}>
                  <Grid item xs={12} >
                    <Box
                      sx={{
                        '& button': { m: 1 },
                        marginLeft: "4px",
                        textAlign: "left"
                      }}
                      className='wholedivbuttons'
                    >
                      <Button
                        id={"male"}
                        className="malestyle"
                        name="gender"
                        onClick={() => {
                          setActiveGender(enumActiveGender.MALE);
                          setFormData(prev => ({ ...prev, gender: "male" }))
                          setValidateInputs(prev => ({ ...prev, gender: false }))
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
                          setValidateInputs(prev => ({ ...prev, gender: false }))
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
                          setValidateInputs(prev => ({ ...prev, gender: false }))
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
                      {validateInputs?.gender ?
                        <Typography component='span' sx={{ color: "red" }}>
                          {enumErrorMsg.PLEASE_ENTER_GENDER}
                        </Typography>
                        : null}
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Address"
                      onBlur={handleBlur}
                      name="addressline1"
                      value={formData?.addressline1}
                      onChange={handlechange}
                      sx={{ fontSize: "16px", color: "rgba(0, 0, 0, 0.6)", width: "100% !important" }}
                      placeholder="Enter your street address"
                      error={validateInputs?.addressline1}
                      helperText={validateInputs?.addressline1 ? enumErrorMsg.PLEASE_ENTER_ADDRESS : ""}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="end">
                            <img src={Mylocationicon} width="22px" alt="location" style={{ position: "absolute", left: "86%" }} />
                          </InputAdornment>),
                      }}>
                    </TextField>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomSelectBox
                      name={"state_id"}
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
                      error={!formData.state_id ? validateInputs?.state_id : false}
                      formHelperText={!formData.state_id ? (validateInputs?.state_id ? enumErrorMsg.PLEASE_ENTER_STATE : "") : ""}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomSelectBox
                      name={"city_id"}
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
                      error={!formData.city_id ? validateInputs?.city_id : false}
                      formHelperText={!formData.city_id ? (validateInputs?.city_id ? enumErrorMsg.PLEASE_ENTER_CITY : "") : ""}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} >
                    <FormControl
                      className="pincodeClass">
                      <TextField
                        id='Pincode'
                        label="Pincode"
                        name="pincode"
                        type="number"
                        onBlur={handleBlur}
                        value={formData.pincode}
                        onChange={(e) => {
                          handlechange(e);
                          // handlePincodeLengthValidation();
                        }}
                        fullWidth
                        error={validateInputs?.pincode}
                        className="pincodestayle"
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
                  <Grid item xs={12} sm={6}  >
                    <CustomSelectBox
                      name={"country_id"}
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
                      error={!formData?.country_id ? validateInputs?.country_id : false}
                      formHelperText={!formData.country_id ? (validateInputs?.country_id ? enumErrorMsg.PLEASE_ENTER_COUNTRY : "") : ""}
                    />
                  </Grid>
                  <Grid item xs={12}  >
                    <CustomSelectBox
                      name={"incomeslab_id"}
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
                      error={!formData?.incomeslab_id ? validateInputs?.incomeslab_id : false}
                      formHelperText={!formData?.incomeslab_id ? (validateInputs?.incomeslab_id ? enumErrorMsg.PLEASE_ENTER_INCOME_SLAB : "") : ""}
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
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default EditprofileCard

