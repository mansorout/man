import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData, getDataWithoutToken, postData, } from '../../Utils/api';
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
import { checkExpirationOfToken, formatDate, setUserNameAndEmailInLocalStorage, underAgeValidate } from '../../Utils/globalFunctions';
import { setTokenExpiredStatusAction } from '../../Store/Authentication/actions/auth-actions';
import moment from 'moment';
import './style.css'
import { apiResponse } from '../../Utils/globalTypes';
import { setEditProfileDataThunk } from '../../Store/Authentication/thunk/auth-thunk';
import { Calendar } from 'react-calendar';
import { getCityListThunk, getIncomeSlabListThunk, getPincodeListThunk, getStateListThunk } from '../../Store/Global/thunk/global-thunk';
import { enumActiveGender } from '../../Utils/globalConstant';

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
  placeofbirthstate_id: number,
  placeofbirthstate: string,
  placeofbirthcity: string,
  placeofbirthcity_id: number,
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
  // addressline2: boolean,
  pincode: boolean,
  city_id: boolean,
  state_id: boolean,
  placeofbirthstate_id: boolean,
  placeofbirthcity_id: boolean,
  countryofbirth_id: boolean,
  incomeslab_id: boolean,
  country_id: boolean,
  gender: boolean,
  // stateofbirth_id: boolean
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
  // placeofbirth_id: 0,
  // placeofbirth: "",
  // stateofbirth: "",
  // stateofbirth_id: 0,
  placeofbirthcity_id: 0,
  placeofbirthcity: "",
  placeofbirthstate: "",
  placeofbirthstate_id: 0,
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
  dateofbirth: false,
  addressline1: false,
  // addressline2: false,
  pincode: false,
  city_id: false,
  state_id: false,
  placeofbirthstate_id: false,
  placeofbirthcity_id: false,
  countryofbirth_id: false,
  incomeslab_id: false,
  country_id: false,
  gender: false,
  // stateofbirth_id: false,
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
  PLEASE_ENTER_GENDER: "Please enter gender",
  PLEASE_ENTER_AGE: "Please enter age",
  PLEASE_ENTER_VALID_DATE: "Please enter valid date"
}


const initialCountryList = [
  {
    country_id: 1,
    country: "INDIA"
  }
]

const NameRegex = /^[a-zA-Z ]{4,30}$/;
const regexDOB = /[0-9]{4,}(-[0-9]{2,}){2,}/;
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
    // marginLeft: "4%",
    width: "100%",
    // maxWidth: "400px",
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

  const g_profileData: any = useSelector((state: any) => state?.authReducer?.profile?.data);

  const [cityList, setCityList] = useState<any[]>([]);
  const [stateList, setStateList] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [allCityList, setAllCityList] = useState<any[]>([]);
  const [invalidDOB, setInvalidDOB] = useState<boolean>(false);
  const [isReadOnly, setIsReadOnly] = useState<boolean>(false);
  const [numberForView, setnumberForview] = useState<string>("")
  const [incomeSlabList, setIncomeSlabList] = useState<any[]>([]);
  const [countryList, setCountryList] = useState<any[]>([...initialCountryList]);
  const [formData, setFormData] = useState<formDataProps>({ ...initialFormData });
  const [activeGender, setActiveGender] = useState<string>(enumActiveGender.NOTHING);
  const [validateInputs, setValidateInputs] = useState<validateInputsProps>({ ...initialValidateinputsData });

  useEffect(() => {
    getCountryList();
    getStateList();
    getIncomeSlabList();
    if (g_profileData && !Object.keys(g_profileData).length) {
      navigate("/viewProfile");
    }
  }, []);

  useEffect(() => {
    if (g_profileData?.kycdetails?.ispannumberverified) {
      setIsReadOnly(g_profileData?.kycdetails?.ispannumberverified);
    }
  }, [g_profileData])

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
      handlePincodeLengthValidation(true);
    }
  }, [formData?.pincode]);

  useEffect(() => {
    setValidateInputs((prev: validateInputsProps) => ({
      ...prev,
      "dateofbirth": invalidDOB
    }))
  }, [invalidDOB]);

  const getCountryList = () => {
    // setCountryList([...countryList]);
  }

  const getStateList = async () => {
    let res: apiResponse = await getStateListThunk();
    setStateList(res?.data);
  }

  const getCityList = async (stateId: number, isAllCityListData: boolean) => {
    let res: apiResponse = await getCityListThunk(stateId);
    if (isAllCityListData === true) {
      setAllCityList(res?.data);
    } else {
      setCityList(res?.data);
    }
  }

  const getIncomeSlabList = async () => {
    let res: apiResponse = await getIncomeSlabListThunk();
    setIncomeSlabList(res?.data);
  }

  const getUserProfileData = () => {
    let objUserDetails = g_profileData?.userdetails;
    if (!g_profileData?.userdetails) {
      return;
    }

    setnumberForview(objUserDetails?.mobilenumber)

    getCityList(objUserDetails?.state_id, false);
    getCityList(objUserDetails?.placeofbirthstate_id, true);

    let date: string | undefined = formatDate(objUserDetails?.dateofbirth);

    setFormData((prev: formDataProps) => ({
      ...prev,
      firstname: objUserDetails?.firstname || "",
      middlename: objUserDetails?.middlename || "",
      lastname: objUserDetails?.lastname || "",
      emailaddress: objUserDetails?.emailaddress || "",
      mobilenumber: objUserDetails?.mobilenumber || "",
      gender: objUserDetails?.gender || "",
      addressline1: objUserDetails?.addressline1 || "",
      pincode: objUserDetails?.pincode || "",
      city_id: objUserDetails?.city_id,
      state_id: objUserDetails?.state_id,
      country_id: objUserDetails?.country_id,
      placeofbirthcity_id: objUserDetails?.placeofbirthcity_id,
      placeofbirthstate_id: objUserDetails?.placeofbirthstate_id,
      incomeslab_id: objUserDetails?.incomeslab_id,
      countryofbirth_id: 1,
      dateofbirth: date || ""
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

  const handlePincodeLengthValidation = async (b: boolean) => {
    let bFlag: boolean = false;

    if (formData.pincode) {
      if (formData.pincode.length < 7 && formData.pincode.length > 0) {
        console.log("formData.pincode < 6")
        let res: apiResponse = await getPincodeListThunk(formData.pincode);

        if (res?.error) {
          return bFlag;
        }

        let objCityData: { city_id: number, city: string } = res?.data[0];

        if (formData.city_id === objCityData?.city_id) {
          bFlag = false;
        } else {
          bFlag = true;
        }

        setValidateInputs((prev: validateInputsProps) => ({
          ...prev,
          "pincode": bFlag
        }))
      } else {
        console.log("formData.pincode > 6")
        bFlag = true;
      }
    }

    if (b) {
      setValidateInputs((prev: validateInputsProps) => ({
        ...prev,
        "pincode": bFlag
      }))
    }

    return bFlag;
  }

  const handleBlur = (e: any) => {
    const { name, value } = e.target;
    if (Object.keys(validateInputs).includes(name)) {
      if (name === "pincode") {
        handlePincodeLengthValidation(true);
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

  const throwErrorOnWrongField = async () => {
    let throwError: boolean = true;
    let arrFormDataKeys: any[] = [...Object.keys(validateInputs)];

    let objValidateInputs: validateInputsProps = { ...validateInputs };
    for (let i = 0; i < arrFormDataKeys.length; i++) {
      let key = arrFormDataKeys[i];
      if (key !== "middlename") {
        // @ts-ignore
        if (!formData[key]) {
          throwError = true;
        } else {
          throwError = false
        }
      }

      if (key === "pincode") {
        throwError = await handlePincodeLengthValidation(false);
      }

      //@ts-ignore
      objValidateInputs[key] = throwError;
    }

    await setValidateInputs((prev: validateInputsProps) => ({
      ...prev,
      ...objValidateInputs
    }))

    return objValidateInputs;
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

  const isAllFieldsValidated = async (func: () => void) => {
    // @ts-ignore
    let obj: validateInputsProps = await func();
    let arr: boolean[] = Object.values(obj).filter((item: boolean) => item === true);
    return arr ? arr.length : 0;
  }

  const handleSubmitForm = async (e: any) => {

    e.preventDefault();
    e.stopPropagation();

    await isAllFieldsValidated(throwErrorOnWrongField)
      .then(async (r: any) => {
        if (r) return;
        // if (invalidDOB) return;
        let objBody: formDataProps = { ...formData };
        if (regexValidate(emailRegex, 'emailaddress', formData.emailaddress)) {
          return;
        }

        if (regexValidate(mobileRegex, 'mobilenumber', formData.mobilenumber)) {
          return;
        }

        let date = moment(formData?.dateofbirth).format('DD-MM-YYYY,');
        objBody["dateofbirth"] = date;

        setLoading(true);

        let res: apiResponse = await setEditProfileDataThunk(objBody);
        setLoading(false);

        if (checkExpirationOfToken(res?.code)) {
          dispatchLocal(setTokenExpiredStatusAction(true));
          return;
        }

        if (res?.error) {
          return;
        }

        console.log("profile saved");
        let objUserDetail: any = res?.data?.userdetails;
        localStorage.setItem(siteConfig.USER_INFO, JSON.stringify(res?.data));
        setUserNameAndEmailInLocalStorage(objUserDetail);
        navigate('/viewprofile');

      }).catch(err => {
        console.log(err);
      })



  }

  // const detectUserLiveLocation = () => {
  //   navigator.geolocation.watchPosition(
  //     position => {
  //       console.log(position);
  //       const { latitude, longitude } = position.coords;
  //       this.setState({
  //         latitude, longitude
  //       },
  //         error => console.log(error),
  //         {
  //           enableHighAccuracy: true,
  //           timeout: 20000,
  //           maximumAge: 1000,
  //           distanceFilter: 10
  //         }
  //       );
  //     }

  return (
    <>
      <Box sx={{
        padding: { xs: "10px", sm: "29px" },
        borderRadius: "8px",
        marginBottom: "-15px",
      }}
      >
        <SprintMoneyLoader loadingStatus={loading} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} >
            <Paper className='profileEditbox'
              sx={{
                p: { xs: "5px", sm: "2" },
                bgcolor: 'background.paper', borderRadius: "8px",
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
                      inputProps={
                        {
                          readOnly: isReadOnly,
                          sx: {
                            color: isReadOnly ? "var(--uiDarkGreyColor)" : "var(--gradientColorBlack)"
                          }
                        }
                      }
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

                />
                <TextField
                  type='text'
                  label="Last Name"
                  name="lastname"
                  onBlur={handleBlur}
                  value={formData?.lastname}
                  onChange={handlechange}
                  inputProps={
                    {
                      readOnly: isReadOnly,
                      sx: {
                        color: isReadOnly ? "var(--uiDarkGreyColor)" : "var(--gradientColorBlack)"
                      }
                    }
                  }
                  sx={{
                    color: "rgba(0, 0, 0, 0.6)",
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
                  type="text"
                  name="mobilenumber"
                  value={numberForView}
                  onChange={handlechange}
                  fullWidth
                  inputProps={
                    {
                      readOnly: isReadOnly,
                      sx: {
                        color: isReadOnly ? "var(--uiDarkGreyColor)" : "var(--gradientColorBlack)"
                      }
                    }
                  }
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
                    <Grid item xs={12} >
                      <CustomSelectBox
                        name={"countryofbirth_id"}
                        labelKey={'country'}
                        valueKey={'country_id'}
                        options={countryList}
                        inpurLabelValue={"Country of birth *"}
                        isReadOnly={true}
                        inputLabelSX={{
                          color: "rgba(0, 0, 0, 0.6)",
                          fontSize: "15px",
                          fontWeight: "normal",
                          top: "1px",
                          background: "#fff"
                        }}
                        // selectSX={{
                        //   boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                        // }}
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
                        name={"placeofbirthstate_id"}
                        labelKey={'state'}
                        valueKey={'state_id'}
                        options={stateList}
                        inpurLabelValue={"State of birth"}
                        inputLabelSX={{
                          color: "rgba(0, 0, 0, 0.6)",
                          fontSize: "15px",
                          fontWeight: "normal",
                          top: "1px",
                          background: "#fff"
                        }}
                        // selectSX={{
                        //   boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                        // }}
                        value={formData?.placeofbirthstate_id}
                        onChange={(val: any) => {
                          getCityList(val, true);
                          customSelectBoxOnChange("placeofbirthstate_id", val)
                        }}
                        onBlur={handleBlur}
                        error={!formData?.placeofbirthstate_id ? validateInputs?.placeofbirthstate_id : false}
                        formHelperText={!formData?.placeofbirthstate_id ? (validateInputs?.placeofbirthstate_id ? enumErrorMsg.PLEASE_ENTER_STATE : "") : ""}
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <CustomSelectBox
                        // pagination={true}
                        name={"placeofbirthcity_id"}
                        labelKey={'city'}
                        valueKey={'city_id'}
                        options={allCityList}
                        // placeholder={'Select your City'}
                        inpurLabelValue={"City of birth "}
                        inputLabelSX={{
                          color: "rgba(0, 0, 0, 0.6)",
                          fontSize: "15px",
                          fontWeight: "normal",
                          top: "1px",
                          background: "#fff"
                        }}
                        // selectSX={{
                        //   boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                        // }}
                        value={formData?.placeofbirthcity_id}
                        onChange={(val: any) => {
                          customSelectBoxOnChange("placeofbirthcity_id", val)
                        }}
                        onBlur={handleBlur}
                        error={!formData.placeofbirthcity_id ? validateInputs?.placeofbirthcity_id : false}
                        formHelperText={!formData.placeofbirthcity_id ? (validateInputs?.placeofbirthcity_id ? enumErrorMsg.PLEASE_ENTER_STATE : "") : ""}
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6} className="gridMarginBottom20">
            <Paper className='profileEditbox'
              sx={{
                p: { xs: "5px", sm: "2" },
                bgcolor: 'background.paper',
                borderRadius: "8px",
                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                marginLeft: "-1px"
              }}
            >
              <Typography className='textGender' sx={{ color: "#6c63ff", }}>Gender</Typography>
              <Stack m={2} spacing={2}>
                <Grid container spacing={2} sx={{
                  maxHeight: "100%",
                }}>
                  <Grid item xs={12} >
                    <Box
                    // sx={{
                    //   '& button': { m: "3px 5px" },
                    //   textAlign: "left"
                    // }}
                    // className='wholedivbuttons'
                    >
                      <Button
                        id={"male"}
                        className="icongenderredius"
                        name="gender"
                        onClick={() => {
                          setActiveGender(enumActiveGender.MALE);
                          setFormData(prev => ({ ...prev, gender: enumActiveGender.MALE }))
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
                          style={{ width: "24px", height: "24px", borderRadius: "12px", }}
                        />
                        <Typography sx={{ color: "#7b7b9d", fontSize: "16px" }} className="fontstyle">
                          Male</Typography>
                      </Button>
                      <Button
                        name="gender"
                        value={"female"}
                        className="icongenderredius"
                        onClick={() => {
                          setActiveGender(enumActiveGender.FEMALE);
                          setFormData({ ...formData, gender: enumActiveGender.FEMALE })
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
                        <img src={girlicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", borderRadius: "12px", }} />
                        <Typography sx={{ color: "#7b7b9d", fontSize: "16px" }} className="fontstyle">  Female</Typography>
                      </Button>
                      <Button
                        id={"transgender"}
                        className="icongenderredius"
                        name="gender" onClick={() => {
                          setActiveGender(enumActiveGender.TRANS);
                          setFormData({ ...formData, gender: enumActiveGender.TRANS })
                          setValidateInputs(prev => ({ ...prev, gender: false }))
                        }}
                        style={{
                          cursor: "pointer",
                          border: `1px solid ${activeGender === enumActiveGender.TRANS ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`,
                          borderRadius: "8px",
                          backgroundColor: `${activeGender === enumActiveGender.TRANS ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign: "center", padding: "12px 14px"
                        }}
                        variant="outlined" size="large" sx={{ backgroundColor: " #fff", borderRadius: "8px", boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05)", height: " 42px", padding: " 6px 10px 6px 6px" }}>
                        <img src={girliconicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", borderRadius: "12px", }} />
                        <Typography sx={{ color: "#7b7b9d", fontSize: "16px" }} className="fontstyle">Transgender</Typography>
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
                      fullWidth
                      type="date"
                      name="dateofbirth"
                      label="Date of Birth"
                      // placeholder="DD-MM-YYYY"
                      // inputProps={
                      //   {
                      //     readOnly: isReadOnly,
                      //     sx: {
                      //       color: isReadOnly ? "var(--uiDarkGreyColor)" : "var(--gradientColorBlack)"
                      //     }
                      //   }
                      // }
                      sx={{
                        color: "#919eb1",
                        fontSize: "17px",
                        marginTop: "4%",
                        marginRight: "6%",
                      }}
                      // onClick={() => setIsCalendarOpen(true)}
                      // format={'DD/MM/YYYY'}
                      onBlur={(e: any) => {
                        // setIsCalendarOpen(false);
                        handleBlur(e);
                      }}
                      onChange={(e: any) => {
                        if (underAgeValidate(e.target.value)) {
                          // setInvalidDOB(false);
                          handlechange(e);
                        } 
                        // else {
                        //   setInvalidDOB(true);
                        // }
                      }}
                      InputLabelProps={{ shrink: true }}
                      defaultValue={formData?.dateofbirth}
                      // value={formData?.dateofbirth || "DD-MM-YYYY"}
                      value={formData?.dateofbirth}
                      // value={"2023-09-09"}
                      error={validateInputs?.dateofbirth}
                      helperText={invalidDOB === true ? enumErrorMsg.PLEASE_ENTER_VALID_DATE : (validateInputs?.dateofbirth ? enumErrorMsg.PLEASE_ENTER_AGE : "")}
                    >
                      {/* {
                        isCalendarOpen ?
                          <Calendar
                            showNeighboringMonth={false}
                            showNavigation={false}
                            // @ts-ignore
                            onChange={(val, e) => {
                              let date = moment(val).format("L") ? moment(val).format("L").split("/")[1] : "";
                              let obj = { name: "dateofbirth", value: date };
                              // setSipStartDay(date);
                            }}
                          // onChange={(e: any) => {
                          //   if (underAgeValidate(e.target.value)) {
                          //     setInvalidDOB(false);
                          //     handlechange(e);
                          //   } else {
                          //     setInvalidDOB(true);
                          //   }
                          // }}
                          // onBlur={handleBlur}
                          /> : null
                      } */}

                    </TextField>
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
                            <img src={Mylocationicon} width="22px" alt="location" style={{ position: "absolute", right: "1px", padding: "10px", width: "20px", background: "#fff", cursor: "pointer" }} />
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
                      inpurLabelValue={"State *"}
                      inputLabelSX={{
                        color: "rgba(0, 0, 0, 0.6)",
                        fontSize: "15px",
                        fontWeight: "normal",
                        top: "1px",
                        background: "#fff"
                      }}
                      // selectSX={{
                      //   boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                      // }}
                      value={formData?.state_id}
                      onChange={(val: any) => {
                        getCityList(val, false);
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
                      inpurLabelValue={"City of Residence *"}
                      inputLabelSX={{
                        color: "rgba(0, 0, 0, 0.6)", fontSize: "15px",
                        fontWeight: "normal",
                        top: "1px",
                        background: "#fff"
                      }}
                      // selectSX={{
                      //   boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                      // }}
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
                        onBlur={handleBlur}
                        value={formData.pincode}
                        onChange={(e) => {
                          handlechange(e);

                          // handlePincodeLengthValidation();
                        }}
                        // inputProps={
                        //   {
                        //     readOnly: isReadOnly,
                        //     sx: {
                        //       color: isReadOnly ? "var(--uiDarkGreyColor)" : "var(--gradientColorBlack)"
                        //     }
                        //   }
                        // }
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
                      inpurLabelValue={"Country *"}
                      inputLabelSX={{
                        color: "rgba(0, 0, 0, 0.6)",
                        fontSize: "15px",
                        fontWeight: "normal",
                        top: "1px",
                        background: "#fff"
                      }}
                      // selectSX={{
                      //   boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                      // }}
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
                      inpurLabelValue={"Income Slab *"}
                      inputLabelSX={{
                        color: "rgba(0, 0, 0, 0.6)",
                        fontSize: "15px",
                        fontWeight: "normal",
                        top: "1px",
                        background: "#fff",
                        // width: "100%"
                      }}
                      // selectSX={{
                      //   boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)"
                      // }}
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
      </Box>
    </>
  )
}

export default EditprofileCard