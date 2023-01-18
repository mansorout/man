import React, { useEffect, useRef, useState } from "react";
import { Box, styled } from "@mui/system";
import {
  FormHelperText,
  Grid,
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
import GetInsurance from "../ULIP/GetInsurance";
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
import { Breadcrumbs, Link } from "@mui/material";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

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
import { InsuranceCard } from "../../Modal/InsuranceCard";
import ModalGotit from "./ModalGotit";
import "./insurance.css";

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

const HealthInsurance = () => {
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
  const [genderSelectError, setGenderSelectError] = useState<boolean>(false);
  const [tobaccoSelect, setTobaccoSelect] = useState<string>("");
  const [tobaccoSelectError, setTobaccoSelectError] = useState<boolean>(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setDob(null);
    setGenderSelect("");
    setTobaccoSelect("");
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setInsuranceAmount(event.target.value as string);
    console.log(event.target.value);
    if (event.target.value !== "") {
      setError(false);
      setAmountErrorText("");
    }
  };

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
  const [checked, setChecked] = React.useState(false);
  const [showGotit, setShowGotit] = useState(false);

  const [error, setError] = React.useState<boolean>(false);
  const [amountErrorText, setAmountErrorText] = React.useState<any>("");

  const handleGotit = () => {
    if (checked === true) {
      setShowGotit(true);
    }
    if (insuranceAmount === "") {
      setError(true);
      setAmountErrorText("please enter valid input");
    } else {
      navigate("/healthInsurance/findInsurance");
    }
  };

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  console.log(checked);
  const hanldeClickHealthSinput = () => {};
  return (
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
          <Grid container sx={{ padding: "9px" }}>
            <Grid
              sx={{
             
                paddingLeft: {
                  xs: "15px",
                  sm: "105px !important",
                  md: "245px !important",
                },
                height: "100vh",
                padding: 0,
                boxSizing: "border-box",
                overflow: "scroll",
              }}
              item
              xs={12}
            >
              <Box sx={{ paddingLeft: "30px" }}>
                <Box role="presentation" sx={{ marginTop: "0%" }}>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Link color="#6495ED" underline="always" href="Home">
                      <Typography className="burgerText"> Home</Typography>
                    </Link>
                    <Link underline="always" href="/explorefunds">
                      <Typography color="#6495ED" className="burgerText">
                        Get Insured{" "}
                      </Typography>
                    </Link>
                    <Link
                      underline="none"
                      color="#878782"
                      sx={{ fontSize: "12px", width: "100%" }}
                    >
                      <Typography color="#6495ED" className="burgerText">
                        Health Insurance
                      </Typography>
                    </Link>
                  </Breadcrumbs>
                </Box>
                {/* <BannerSlider
                  sliderDetails={sliderDetails}
                  sliderSetting={settings}
                /> */}
              </Box>
              <Box sx={{width:"95", marginLeft:"2%"}} className="bannerslider">
              <BannerSlider
                  sliderDetails={sliderDetails}
                  sliderSetting={settings}
                />
              </Box>
       

              <div className="LeftRightmarginStyle">
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  sx={{ paddingLeft: "30px", marginTop: "-3%" }}
                  className="healthinsuranceStyle"
                >
                  <Grid item xs={12} sm={6}>
                    <Box
                      sx={{
                        padding: "30px -8px",
                        paddingTop: "60px",
                        width: "100%",
                        marginTop: "-1px",
                      }}
                    >
                      <div className={classes.termInsuranceCard}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <p style={{ color: "#6c63ff" }}>
                            Do you have any existing health plan?
                          </p>
                          <div style={{ width: "150px" }}>
                            <span>No</span>
                            <span>
                              <Switch
                                checked={checked}
                                onChange={handleChecked}
                                color="primary"
                              />
                            </span>
                            <span>Yes</span>
                          </div>
                        </div>
                        <b
                          style={{
                            color: "#6c63ff",
                            fontSize: "var(--subHeadingFontSize)",
                            marginBottom: "15px",
                            display: "inline-block",
                            fontWeight: 500,
                          }}
                          className="WhitwSpace_remove"
                        >
                          Term Insurance
                        </b>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Term Insurance
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={insuranceAmount}
                            label="insuranceAmount"
                            onChange={handleChange}
                            error={error}
                          >
                            <MenuItem value={300000}>₹ 3,00,000</MenuItem>
                            <MenuItem value={500000}>₹ 5,00,000</MenuItem>
                            <MenuItem value={700000}>₹ 7,00,000</MenuItem>
                            <MenuItem value={1000000}>₹ 10,00,000</MenuItem>
                          </Select>
                          <FormHelperText sx={{ color: "red" }}>
                            {amountErrorText}
                          </FormHelperText>
                        </FormControl>
                        <Box sx={{ paddingTop: "20px" }}>
                          <span
                            style={{
                              fontSize: "var(--subTitleFontSize)",
                              color: "var(--typeBlackColor),",
                            }}
                          >
                            You can quickly choose from below cover option
                          </span>
                          <ul className={classes.quickSelectWrapper}>
                            {quickPickAmount.map((item, index) => (
                              <li
                                key={index}
                                onClick={() => selectFromQuickPick(item)}
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </Box>
                      </div>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} className="SecHealthStyleBox">
                    <Box
                      sx={{
                        padding: "30px 7px",
                        paddingTop: "60px",
                        width: "100%",
                      }}
                    >
                      <div
                        className={classes.termInsuranceCard}
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        {InsuranceCard.map((item, index) => {
                          return (
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              <div
                                style={{
                                  borderRadius: "76px",
                                  height: "76px",
                                  width: "76px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  backgroundColor: "#67d8fb",
                                }}
                              >
                                <img
                                  style={{ padding: "0px 30px" }}
                                  src={item.logo}
                                  alt={item.desc}
                                  width="auto"
                                  height="40px"
                                />
                              </div>
                              <p style={{ color: "#7b7b9d", fontSize: "12px" }}>
                                {item.desc}
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </Box>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <FooterWithBtn
        btnText="Continue"
        btnClick={handleGotit}
        // onClick={onSubmit}

        // btnClick={() => { navigate('/healthInsurance/findInsurance')}}
      />
      <ModalGotit open={showGotit} close={() => setShowGotit(false)} />
    </div>
  );
};

export default HealthInsurance;
