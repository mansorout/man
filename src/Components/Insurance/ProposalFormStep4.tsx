import React, { useEffect, useRef, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, styled } from "@mui/system";
import {
  CardHeader,
  Checkbox,
  Grid,
  LinearProgress,
  Modal,
  Switch,
  Theme,
  Typography,
} from "@mui/material";
import Navbar from "../CommonComponents/Navbar";
import Sidebar from "../CommonComponents/Sidebar";
import {
  Drawer as DrawerList,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Slider from "react-slick";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import InsuranceTerms from "./InsuranceTerms";
import GetInsurance from "./GetInsurance";
import { useSelector, useDispatch } from "react-redux";
import { InsuranceTermConditionAction } from "../../Store/Duck/InsuranceTermCondition";
import BannerSlider from "../CommonComponents/BannerSlider";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import FooterBtnWithBox from "../CommonComponents/FooterBtnWithBox";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";

import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import {
  LocalizationProvider,
  DesktopDatePicker,
  DatePicker,
} from "@mui/x-date-pickers";

import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

import Paper, { PaperProps } from "@mui/material/Paper";
import Draggable from "react-draggable";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { string } from "yup";
import { useNavigate } from "react-router-dom";
import LoopIcon from "@mui/icons-material/Loop";
import FooterWithBtn from "../CommonComponents/FooterWithBtn";
import Card from "@mui/material/Card";
import { InsuranceCard, SelectGender } from "../../Modal/InsuranceCard";
import LinearProgressBar from "../CommonComponents/LinearProgressBar";
import "./insurance.css";
import CardWithImage from "../CommonComponents/CardWithImage";
import { hdfcErgo, manicon, SuccessFullOtp } from "../../Assets";
import CardWithImageAndCount from "../CommonComponents/CardWithImageAndCount";
import ProposalFormCard from "../CommonComponents/ProposalFormCard";
import TextWithSwitch from "../CommonComponents/TextWithSwitch";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ConfirmationModal from "./ConfirmationModal";
import CompleteModal from "./CompleteModal";
import HdfcModal from "./HdfcModal";
import CertifyModal from "./CertifyModal";
import ClearIcon from "@mui/icons-material/Clear";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
const style = {
  main: {
    boxSizing: "border-box",
    backgroundColor: "#f9f9f9",
    height: "100vh",
  } as React.CSSProperties,
  continueBtn: {
    width: "100%",
    margin: "auto",
    // height: "100vh"
  } as React.CSSProperties,
  logo: {
    width: "120px",
    margin: "20px -36px",
  } as React.CSSProperties,
};

const useStyles: any = makeStyles((theme: Theme) => ({
  flexCommon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  termInsuranceCard: {
    backgroundColor: "var(--uiWhite)",
    boxShadow: "var(--themeShadow)",
    padding: "20px 15px",
    borderRadius: "8px",
  },
  quickSelectWrapper: {
    padding: "0px",
    margin: "0px",
    display: "flex",
    flexWrap: "wrap",
    "& li": {
      listStyleType: "none",
      padding: "8px 10px",
      backgroundColor: "var(--blueColorOpacity)",
      margin: "5px 6px",
      borderRadius: "2px",
      color: "var(--ui1Color)",
      fontWeight: 500,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "var(--ui1Color)",
        color: "var(--uiWhite)",
      },
    },
  },
  premiumAmountFooter: {
    backgroundColor: "var(--uiWhite)",
    boxShadow: "var(--themeShadow)",
    padding: "15px",
    marginBottom: "-16px",
    marginLeft: "-16px",
    marginRight: "-16px",
  },
  premiumAmountBox: {
    backgroundColor: "var(--lightGreenColor)",
    padding: "45px 15px",
    // paddingTop: '45px',
    position: "absolute",
    top: "calc(-100% - 38px)",
    zIndex: "-1",
    borderRadius: "20px",
    textAlign: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  insuranceCardIcon: {
    backgroundColor: "var(--primaryColor)",
    color: "var(--uiWhite)",
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "-18px",
  },
  popHeading: {
    textAlign: "center",
  },

  radioGroup: {
    marginBottom: "24px !important",
    "& label": {
      "@media(max-width: 400px)": {
        width: "100%",
        display: "block",
        margin: "5px 0px",
        "&>*": {
          width: "100%",
        },
      },
    },
  },
  genderBtn: {
    "&:hover": {
      border: "1px solid var(--primaryColor) !important",
      backgroundColor: "rgba(35, 219, 123, 0.12) !important",
      color: "var(--primaryColor) !important",
    },
  },
  showPlanBtn: {
    backgroundColor: "var(--primaryColor) !important",
    color: "var(--uiWhite) !important",
    borderRadius: "5px !important",
  },
  showPlanThankuDetail: {
    textAlign: "center",
    "& p": {
      margin: "3px 0px",
    },
  },
  noClickBackdrop: {
    pointerEvents: "none",
  },
  borderAndTextErrorColor: {
    borderColor: "#d32f2f !important",
    color: "#d32f2f !important",
  },
  borderAndTextErrorColorRemove: {
    border: "1px solid var(--primaryColor) !important",
    backgroundColor: "rgba(35, 219, 123, 0.12) !important",
    color: "var(--primaryColor) !important",
  },
}));
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

interface genderProp {
  prop: string;
  errorShow: boolean;
  selectoin: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  errorRemove: React.Dispatch<React.SetStateAction<boolean>>;
  selectedItem: string;
}

const RadioCmp = (props: genderProp) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        variant="outlined"
        style={{
          color: "var(--typeIndigoColor)",
          fontSize: "var(--fontSize14)",
          border: "1px solid var(--typeLighterGrey)",
          boxShadow: "var(--themeShadow)",
          padding: "6px 5px",
          lineHeight: "1.4",
          margin: "0px 6px",
          borderRadius: "8px",
          width: "100%",
        }}
        className={`${classes.genderBtn} ${
          props.errorShow && classes.borderAndTextErrorColor
        } ${
          props.value === props.selectedItem
            ? classes.borderAndTextErrorColorRemove
            : ""
        }`}
        onClick={() => {
          console.log(props);
          props.errorRemove(false);
          props.selectoin(props.value);

          debugger;
        }}
      >
        {props?.prop}
      </Button>
    </div>
  );
};

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}



const ProposalFormStep4 = () => {
  const classes = useStyles();
  const theme = useTheme();
  const navigate = useNavigate();
  const [insuranceAmount, setInsuranceAmount] = useState<string>("");
  // const [insuranceAmountError, setInsuranceAmountError] = useState<boolean>(false)
  const [dob, setDob] = React.useState<Dayjs | null>(null);
  const [dobError, setDobError] = useState<boolean>(false);
  const [quickPickAmount, setQuickPickAmount] = useState<string[]>([
    "500000",
    "700000",
    "1000000",
  ]);
  const [showPlanDetailSubmit, setShowPlanDetailSubmit] =
    useState<boolean>(false);
  const [genderSelect, setGenderSelect] = useState<string>("");
  const [me, setMe] = useState<boolean>(false);
  const [spouse, setSpouse] = useState<boolean>(false);
  const [daughter, setDaughter] = useState<boolean>(false);
  const [daughterCount, setDaughterCount] = useState<number>(1);
  const [son, setSon] = useState<boolean>(false);
  const [sonCount, setSonCount] = useState<number>(1);
  const [father, setFather] = useState<boolean>(false);
  const [mother, setMother] = useState<boolean>(false);
  const [genderSelectError, setGenderSelectError] = useState<boolean>(false);
  const [tobaccoSelect, setTobaccoSelect] = useState<string>("");
  const [tobaccoSelectError, setTobaccoSelectError] = useState<boolean>(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const [value, setValue] = React.useState<Date | null>(
    new Date("2022-11-24T21:11:54")
  );
  const [samePostalAddress, setSamePostalAddress] = useState<boolean>(false);
  const [sameNomineeAddress, setSameNomineeAddress] = useState<any>({
    proposer: false,
    gurdian: false,
  });
  const [open, setOpen] = React.useState(false);
  const [count, setCount] = React.useState(1);
  useEffect(() => {
    setTimeout(() => {
      setCount(2);
    }, 5000);
  }, []);

  const [openConfirmationModal, setOpenConfirmationModal] =
    React.useState(false);
  const [openCompleteModal, setOpenCompleteModal] = React.useState(false);
  const [openHdfcModal, setOpenHdfcModal] = React.useState(false);
  const [openTakeItEasyModal, setOpenTakeItEasyModal] = React.useState(false);

  const handleClickOpen = () => {
    setDob(null);
    setGenderSelect("");
    setTobaccoSelect("");
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // const handleChange = (event: SelectChangeEvent) => {
  //     setInsuranceAmount(event.target.value as string);
  // };

  const selectFromQuickPick = (item: string) => {
    // console.log("quickPickValue: ", e.target)
    setInsuranceAmount(item as string);
  };
  const handleGenderSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    debugger;
    setGenderSelectError(false);
    setGenderSelect((event.target as HTMLInputElement).value);
  };

  const handleTobaccoSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    debugger;
    setTobaccoSelectError(false);
    setTobaccoSelect((event.target as HTMLInputElement).value);
  };

  const feildValidation = (props: any) => {
    if (props !== "" && props !== null && props !== undefined) {
      return true;
    } else {
      return false;
    }
  };

  const handlesubmitDetail = () => {
    if (
      feildValidation(dob) &&
      feildValidation(genderSelect) &&
      feildValidation(tobaccoSelect)
    ) {
      setShowPlanDetailSubmit(true);
      setTimeout(() => {
        navigate("/explorePlan");
      }, 1000);
    } else {
      !feildValidation(dob) && setDobError(true);
      !feildValidation(genderSelect) && setGenderSelectError(true);
      !feildValidation(tobaccoSelect) && setTobaccoSelectError(true);
    }
  };
  const dispatch: any = useDispatch();
  const refContainer = useRef();
  const [insuranceTermCondition, setInsuranceTermCondition] =
    useState<boolean>(false);
  const [nominee, setNominee] = useState<any>({
    name: "",
    dob: new Date("2022-11-24T21:11:54"),
    relationship: "",
    gurdianName: "",
    gurdianRelation: "",
  });
  const handleChange = (attribute: string, value: any) => {
    setNominee({
      ...nominee,
      [attribute]: value,
    });
  };
  const [addressGuardian, setAddressGuardian] = useState<any>({
    postal: "",
    pincode: "",
    state: "",
    city: "",
  });
  const handleAddressGuardianChange = (attribute: string, value: string) => {
    setAddressGuardian({
      ...addressGuardian,
      [attribute]: value,
    });
  };
  const [addressPostal, setAddressPostal] = useState<any>({
    postal: "",
    pincode: "",
    state: "",
    city: "",
  });
  const handleAddressPostalChange = (attribute: string, value: string) => {
    setAddressPostal({
      ...addressPostal,
      [attribute]: value,
    });
  };
  const { insuranceTermConditionState } = useSelector(
    (state: any) => state.InsuranceTermConditionReducer
  );

  useEffect(() => {
    dispatch(InsuranceTermConditionAction(false));
  }, []);

  useEffect(() => {
    setInsuranceTermCondition(insuranceTermConditionState);
  }, [insuranceTermConditionState]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderDetails = [
    {
      topHeading: "SprintMoney offers",
      topSubHeading: "a family health protection",
      heading: "Get ₹5 Lac",
      subHeading: "Health Insurance Cover @ ₹1490/day",
      bgColor: "var(--ui1Color)",
      imgUrl: "/assets/images/insurance-banner-img.png",
      btnText: "Get Insured",
    },
    {
      topHeading: "SprintMoney offers",
      topSubHeading: "a family health protection",
      heading: "Get ₹5 Lac",
      subHeading: "Health Insurance Cover @ ₹1490/day",
      bgColor: "var(--ui1Color)",
      imgUrl: "/assets/images/insurance-banner-img.png",
      btnText: "Get Insured",
    },
    {
      topHeading: "SprintMoney offers",
      topSubHeading: "a family health protection",
      heading: "Get ₹5 Lac",
      subHeading: "Health Insurance Cover @ ₹1490/day",
      bgColor: "var(--ui1Color)",
      imgUrl: "/assets/images/insurance-banner-img.png",
      btnText: "Get Insured",
    },
  ];
  const [opencertify, setOpenCertify] = React.useState<boolean>(false);
  const [hdfcModalOpen, setHdfcModalOpen] = React.useState<boolean>(false);
  const [closeicon, setCloseIcon] = React.useState<boolean>(false);
  const [quicklyopen, setQuicklyopen] = React.useState<boolean>(false);
  const handleCertifymodal = () => {
    setOpenCertify(true);
  };
  const handlebyproceedbutton = () => {
   
    
    setHdfcModalOpen(true);
    setTimeout(()=>{
        setHdfcModalOpen(false)
        setQuicklyopen(true)
    },2000)
   
    
    setOpenCertify(false);
  };
 

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        <Box style={{ width: "100vw" }} ref={refContainer}>
          <Navbar />
          <Box sx={style.main}>
            <Toolbar />
            <Sidebar />
            <Grid container>
              <Grid
                sx={{
                  marginBottom: "60px",
                  backgroundColor: "#f9f9f9",
                  height: { xs: "auto", sm: "inherit" },
                  padding: 2,
                  boxSizing: "border-box",
                  overflow: { sx: "auto", sm: "scroll" },
                  paddingLeft: {
                    xs: "15px",
                    sm: "85px !important",
                    md: "245px !important",
                  },
                }}
                item
                xs={12}
              >
                <div className="progressContainer">
                  <p style={{ color: "#f9f9f9" }}>STEP 4/4</p>
                  <p style={{ color: "#ffffff" }}>
                    Help us with your contact details
                  </p>
                  <Box width="100%">
                    <LinearProgressBar value={80} />
                  </Box>
                </div>
                <div className="addressCard">
                  <TextField
                    type="text"
                    // onBlur={handleBlur}
                    label="Nominee Full Name"
                    name="Nominee Full Name"
                    value={nominee.name}
                    onChange={(e) => {
                      handleChange("name", e.target.value);
                    }}
                    fullWidth
                    // error={error}

                    id="Nominee Full Name"
                    sx={{
                      color: "rgba(0, 0, 0, 0.6)",
                      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                      width: "100%",
                      fontSize: "15px",
                      fontWeight: "normal",
                      margin: "15px 0",
                    }}
                    // helperText={error ? errorMessageFN : ""}
                  />
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Start Date"
                      inputFormat="dd/mm/yyyy"
                      value={value}
                      onChange={(newValue) => handleChange("dob", newValue)}
                      renderInput={(param: any) => (
                        <TextField sx={{ width: "100%" }} {...param} />
                      )}
                      components={{
                        OpenPickerIcon: CalendarTodayIcon,
                      }}
                    />
                  </LocalizationProvider>
                  <FormControl
                    fullWidth
                    sx={{
                      margin: "20px 0",
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Relationship with Proposer
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={nominee.relationship}
                      label="Occupation"
                      onChange={(e) => {
                        handleChange("relationship", e.target.value);
                      }}
                    >
                      <MenuItem value={"Wife"}>Wife</MenuItem>
                      <MenuItem value={"Daughter"}>Daughter</MenuItem>
                      <MenuItem value={"Son"}>Son</MenuItem>
                      <MenuItem value={"Niece"}>Niece</MenuItem>
                      <MenuItem value={"Nephew"}>Nephew</MenuItem>
                      <MenuItem value={"Uncle"}>Uncle</MenuItem>
                    </Select>
                  </FormControl>
                  <p className="fotterText">
                    Since the above nominee is a Minor, please provide the
                    details of guardian{" "}
                  </p>
                  <TextField
                    type="text"
                    // onBlur={handleBlur}
                    label="Name of the guardian"
                    name="Name of the guardian"
                    value={nominee.gurdianName}
                    onChange={(e) => {
                      handleChange("gurdianName", e.target.value);
                    }}
                    fullWidth
                    // error={error}

                    id="Name of the guardian"
                    sx={{
                      color: "rgba(0, 0, 0, 0.6)",
                      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                      width: "100%",
                      fontSize: "15px",
                      fontWeight: "normal",
                      margin: "15px 0",
                    }}
                    // helperText={error ? errorMessageFN : ""}
                  />
                  <FormControl
                    fullWidth
                    sx={{
                      margin: "20px 0",
                    }}
                  >
                    <InputLabel id="demo-simple-select-label">
                      Relationship with Guardian
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={nominee.gurdianRelation}
                      label="Relationship with Guardian"
                      onChange={(e) => {
                        handleChange("gurdianRelation", e.target.value);
                      }}
                    >
                      <MenuItem value={"Mother"}>Mother</MenuItem>
                      <MenuItem value={"Father"}>Father</MenuItem>
                    </Select>
                  </FormControl>
                  <TextWithSwitch text="Is the address of guardian and nominee and same as proposer?" />
                  <p className="purpleText">Address of Guardian</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Checkbox
                      onChange={(value) =>
                        setSamePostalAddress(!samePostalAddress)
                      }
                      checked={samePostalAddress}
                    />
                    <p>Same as proposer address</p>
                  </div>
                  {!samePostalAddress && (
                    <>
                      <TextField
                        type="text"
                        // onBlur={handleBlur}
                        label="Postal Address"
                        name="Postal address"
                        value={addressGuardian.postal}
                        onChange={(e) => {
                          handleAddressGuardianChange("postal", e.target.value);
                        }}
                        fullWidth
                        // error={error}

                        id="Postal Address"
                        sx={{
                          color: "rgba(0, 0, 0, 0.6)",
                          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                          width: "100%",
                          fontSize: "15px",
                          fontWeight: "normal",
                          margin: "15px 0",
                        }}
                        // helperText={error ? errorMessageFN : ""}
                      />
                      <TextField
                        type="text"
                        // onBlur={handleBlur}
                        label="Pincode"
                        name="pincode"
                        value={addressGuardian.pincode}
                        onChange={(e) => {
                          handleAddressGuardianChange(
                            "pincode",
                            e.target.value
                          );
                        }}
                        fullWidth
                        // error={error}

                        id="Pincode"
                        sx={{
                          color: "rgba(0, 0, 0, 0.6)",
                          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                          width: "100%",
                          fontSize: "15px",
                          fontWeight: "normal",
                          margin: "15px 0",
                        }}
                        // helperText={error ? errorMessageFN : ""}
                      />
                      <TextField
                        type="text"
                        // onBlur={handleBlur}
                        label="State"
                        name="state"
                        value={addressGuardian.state}
                        onChange={(e) => {
                          handleAddressGuardianChange("state", e.target.value);
                        }}
                        fullWidth
                        // error={error}

                        id="State"
                        sx={{
                          color: "rgba(0, 0, 0, 0.6)",
                          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                          width: "100%",
                          fontSize: "15px",
                          fontWeight: "normal",
                          margin: "15px 0",
                        }}
                        // helperText={error ? errorMessageFN : ""}
                      />
                      <TextField
                        type="text"
                        // onBlur={handleBlur}
                        label="City"
                        name="city"
                        value={addressGuardian.city}
                        onChange={(e) => {
                          handleAddressGuardianChange("city", e.target.value);
                        }}
                        fullWidth
                        // error={error}

                        id="City"
                        sx={{
                          color: "rgba(0, 0, 0, 0.6)",
                          boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                          width: "100%",
                          fontSize: "15px",
                          fontWeight: "normal",
                          margin: "15px 0",
                        }}
                        // helperText={error ? errorMessageFN : ""}
                      />
                    </>
                  )}

                  <p className="purpleText">Address of Nominee</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p>Same as</p>
                    <Checkbox
                      onChange={(value) =>
                        setSameNomineeAddress({
                          proposer: !sameNomineeAddress.proposer,
                          gurdian: sameNomineeAddress.gurdian,
                        })
                      }
                      checked={sameNomineeAddress.proposer}
                    />
                    <p>Proposer</p>
                    <Checkbox
                      onChange={(value) =>
                        setSameNomineeAddress({
                          gurdian: !sameNomineeAddress.gurdian,
                          proposer: sameNomineeAddress.proposer,
                        })
                      }
                      checked={sameNomineeAddress.guardian}
                    />
                    <p>Guardian</p>
                  </div>
                  {!sameNomineeAddress.proposer &&
                    !sameNomineeAddress.gurdian && (
                      <>
                        <TextField
                          type="text"
                          // onBlur={handleBlur}
                          label="Postal Address"
                          name="Postal address"
                          value={addressPostal.postal}
                          onChange={(e) => {
                            handleAddressPostalChange("postal", e.target.value);
                          }}
                          fullWidth
                          // error={error}

                          id="Postal Address"
                          sx={{
                            color: "rgba(0, 0, 0, 0.6)",
                            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                            width: "100%",
                            fontSize: "15px",
                            fontWeight: "normal",
                            margin: "15px 0",
                          }}
                          // helperText={error ? errorMessageFN : ""}
                        />
                        <TextField
                          type="text"
                          // onBlur={handleBlur}
                          label="Pincode"
                          name="pincode"
                          value={addressPostal.pincode}
                          onChange={(e) => {
                            handleAddressPostalChange(
                              "pincode",
                              e.target.value
                            );
                          }}
                          fullWidth
                          // error={error}

                          id="Pincode"
                          sx={{
                            color: "rgba(0, 0, 0, 0.6)",
                            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                            width: "100%",
                            fontSize: "15px",
                            fontWeight: "normal",
                            margin: "15px 0",
                          }}
                          // helperText={error ? errorMessageFN : ""}
                        />
                        <TextField
                          type="text"
                          // onBlur={handleBlur}
                          label="State"
                          name="state"
                          value={addressPostal.state}
                          onChange={(e) => {
                            handleAddressPostalChange("state", e.target.value);
                          }}
                          fullWidth
                          // error={error}

                          id="State"
                          sx={{
                            color: "rgba(0, 0, 0, 0.6)",
                            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                            width: "100%",
                            fontSize: "15px",
                            fontWeight: "normal",
                            margin: "15px 0",
                          }}
                          // helperText={error ? errorMessageFN : ""}
                        />
                        <TextField
                          type="text"
                          // onBlur={handleBlur}
                          label="City"
                          name="city"
                          value={addressPostal.city}
                          onChange={(e) => {
                            handleAddressPostalChange("city", e.target.value);
                          }}
                          fullWidth
                          // error={error}

                          id="City"
                          sx={{
                            color: "rgba(0, 0, 0, 0.6)",
                            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                            width: "100%",
                            fontSize: "15px",
                            fontWeight: "normal",
                            margin: "15px 0",
                          }}
                          // helperText={error ? errorMessageFN : ""}
                        />
                      </>
                    )}
                </div>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <CompleteModal
          open={openCompleteModal}
          setOpen={setOpenCompleteModal}
          onBtnPress={() => {
            navigate("/home");
          }}
        />
        <FooterWithBtn btnText="Continue" btnClick={handleCertifymodal} />
      </div>
      <div>
        <Modal open={opencertify}>
          <Box
            style={{
              maxWidth: "27%",
              minWidth: "20%",
              borderRadius: "10px",
              boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.2)",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
              overflow: "hidden",
              position: "absolute",
              top: "50%",
              left: "50%",
              // padding: "11px",
              transform: "translate(-50%,-50%)",
            }}
            className="smallmodal"
          >
            <div className="investInsidePading">
              <Grid
                container
                style={{ backgroundColor: "white", display: "flex" }}
              >
                <Grid item xs={12}>
                  <CardHeader
                    avatar={
                      <Box sx={{ paddingTop: "0%" }} textAlign="left">
                        <b
                          style={{
                            textAlign: "left",
                            paddingBottom: "1%",
                          }}
                        >
                          Certify your Information
                        </b>
                      </Box>
                    }
                    action={""}
                    title=""
                    subheader=""
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: "#3c3e42",
                    }}
                  />
                </Grid>

                <Box>
                  <Grid container sx={{marginTop: "5%"}}>
                    <Grid item xs={1} md={1}>
                      <Box  sx={{marginTop:"-21%"}}>
                        <Checkbox
                          id="topping"
                          name="topping"
                          {...label}
                          defaultChecked={false}
                          sx={{
                            color: "#3D70B2"[800],
                            "&.Mui-checked": {
                              color: "#09b85d",
                            },
                          }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={11} md={11} sx={{    paddingLeft: "2%" }}>
                      <Typography sx={{ color: "#3c3e42", fontSize: "16px" }}>
                        I hereby certify that the information provided by me is
                        complete, true and correct to the best of my knowledge.
                      </Typography>
                    </Grid>

                    <Grid
                      xs={12}
                      md={12}
                      textAlign="left"
                      sx={{ paddingLeft: "12px", marginTop: "4%" }}
                    >
                      <Typography
                        sx={{
                          color: "#7b7b9d",
                          fontSize: "14px",
                          fontWeight: "normal",
                        }}
                      >
                        You will now be redirected to partner site to complete
                        the payment process.
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
              <Box textAlign="center">
                <Button
                  // disabled={showSubmit}
                  fullWidth
                  onClick={handlebyproceedbutton}
                  sx={{
                    width: "158px",
                    height: "42px",
                    backgroundColor: "#23db7b",
                    marginTop: "9%",
                    ml: 1,
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#23db7b",
                    },
                    boxShadow: " 0 4px 8px 0 rgba(35, 219, 123, 0.4)",
                  }}
                >
                  <Typography
                    sx={{ fonSize: "14px", fontWeight: "500", color: "white" }}
                  >
                    {" "}
                    Proceed to Buy{" "}
                  </Typography>
                </Button>
                {/* <HdfcModal
                  open={openHdfcModal}
                  setOpen={setOpenHdfcModal}
                  close={() => setOpenHdfcModal(false)}
                /> */}
              </Box>
            </div>

            <Grid item xs={2}>
              <Box
                onClick={() => setOpenCertify(false)}
                sx={{
                  margin: "12px 0px 8px 81px",
                  opacity: " 0.54 ",
                  position: "absolute",
                  top: "1px",
                  right: "15px",
                }}
                className="closeIconStyle"
              >
                <ClearIcon />
              </Box>
            </Grid>
          </Box>
        </Modal>
      </div>
      <Modal open={hdfcModalOpen} >
        <Box
          style={{
            width: "90%",
            maxWidth: "330px",
            borderRadius: "8px",
            boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.2)",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            padding: "60px",
          }}
        >
          <Grid container>
            <Grid item xs={12} md={12}>
              <Box
                textAlign="right"
                sx={{ color: "#d1d6dd", marginTop: "-10%" }}
              >
                <ClearIcon />
              </Box>
            </Grid>
          </Grid>

          <Box
            my={2}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "148px",
              height: "180px",
              borderRadius: "50%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "39px",
              }}
            >
              <img
                src={hdfcErgo}
                alt="S__M"
                style={{ height: "148px", width: "148px" }}
              />
              <p
                style={{ fontWeight: "500", cursor: "pointer" }}
                // onClick={handleCongrates}
              >
                Loading...
              </p>
              {/* <CongratsModal
                open={showLogin}
                close={() => setShowLogin(false)}
              /> */}
            </div>
          </Box>
        </Box>
      </Modal>
      <div>
      <Modal open={quicklyopen}  sx={{ padding: "10px" }}>
        <Box
          style={{
            width: "100%",
            maxWidth: "431px",
            borderRadius: "8px",
            boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.2)",
            backgroundColor: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            overflow: "hidden",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        >
          <Box mb={2} style={{ display: "flex", gap: "20px" }}>
            <img alt="Money Sprint" src={SuccessFullOtp} style={style.logo} />
          </Box>
          <Typography
            mx={2}
            style={{
              fontSize: "20px",
              color: "#3c3e42",
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            Congrats! Your transaction is being processed{" "}
          </Typography>
          <Typography
            mx={2}
            mb={4}
            style={{
              fontSize: "14px",
              color: "#7b7b9d",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            <Typography sx={{marginTop:"8%"}}>
            We will notify you once we got confirmation from the insurance
            partner. You can track the status of <b>transaction</b> under your
            portfolio
            </Typography>
        
            <Grid container sx={{marginTop:"5%"}}>
            <Grid item xs={12} md={12} textAlign="center">
              <Button
                // disabled={showSubmit}
                fullWidth
                onClick={  ()=>navigate("/home")}
                sx={{
                  width: "75%",
                  padding: " 15px",
                  backgroundColor: "#23db7b",
                  marginTop: " 15px",
                  borderRadius: "10px 10px 10px 10px",
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#23db7b",
                  },
                }}
              >
                <Typography sx={{ fonSize: "18px", color: "white" }}>
                  {" "}
                  Back to Home{" "}
                </Typography>
              </Button>
            </Grid>
          </Grid>
          </Typography>
     
        </Box>
      </Modal>
      </div>
    </>
  );
};

export default ProposalFormStep4;
