import React, { useEffect, useState } from "react";
import { Box, styled } from "@mui/system";
import moment from "moment";
import {
  Breadcrumbs,
  Button,
  Grid,
  Modal,
  Popover,
  TextField,
  Typography,
} from "@mui/material";
import {
  closelogo,
  GroupSaf,
  Logo,
  MonoLogo,
  Profile,
  SIP,
  sipiclogo,
  SuccessFullOtp,
  VerifyOtpLogo,
} from "../../Assets/index";
import Stack from "@mui/material/Stack";

import { useDispatch, useSelector } from "react-redux";
import SaveSipDetailsButton from "../../Modules/Buttons/SaveSipDetailsButton";

import set from "date-fns/fp/set/index.js";
import { Navigate, useNavigate } from "react-router-dom";
import { globalConstant } from "../../Utils/globalConstant";
import {
  CardContent,
  CardHeader,
  Checkbox,
  Drawer as DrawerList,
  FormControlLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { postData } from "../../Utils/api";
import siteConfig from "../../Utils/siteConfig";
import {
  checkExpirationOfToken,
  customParseJSON,
} from "../../Utils/globalFunctions";
import { setTokenExpiredStatusAction } from "../../Store/Authentication/actions/auth-actions";
import { fontWeight } from "@mui/joy/styles/styleFunctionSx";
import { Close } from "@mui/icons-material";

//  const emailRegex =
//    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//  const regexDOB = /[0-9]{4,}(-[0-9]{2,}){2,}/;
//  const [formData, setFormData] = useState<any>({
//        firstName: "",
//        lastName: "",
//        email: "",
//        DOB: "",
//      });
//      const g_investment: any = useSelector(
//            (state: any) => state?.investment?.investment
//          );
//  const [errorMessageFN, setErrorMessageFN] = React.useState<any>("");

const regexDOB = /[0-9]{4,}(-[0-9]{2,}){2,}/;
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const CongratsModal = (props: any) => {
  const navigate = useNavigate();
  const dispatchLocal = useDispatch();
  const style = {
    background: {
      backgroundColor: "#f9f9f9",
      height: "100vh",
      width: "100vw",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box",
      justifyContent: "flex-end",
      alignItems: "center",
    } as React.CSSProperties,

    container: {
      backgroundColor: "white",
      width: "96%",
      maxWidth: "500px",
      padding: "10px 0px",
      borderRadius: "20px 20px 0px 0px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.2)",
      transform: "translate(-50%, 0%)",
      left: "50%",
      bottom: "0px",
      position: "absolute",
    } as React.CSSProperties,

    logo: {
      width: "120px",
      margin: "20px -36px",
    } as React.CSSProperties,
  };
  const [openMandateModal, setOpenMandateModal] = useState<boolean>(false);
  const [openRealMandateModal, setOpenRealMandateModal] =
    useState<boolean>(false);
  const [openPaymentModal, setOpenPaymentModal] = useState<boolean>(false);
  const [openRealPaymentModal, setOpenRealPaymentModal] =
    useState<boolean>(false);

  const [moreAnchorEl, setMoreAnchorEl] = useState<null | HTMLElement>();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>();
  const [error, setError] = useState<boolean>(false);
  

  return (
    <div>
      <Modal open={props.open} onClose={props.close} sx={{ padding: "10px" }}>
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
                // onClick={handleClick}
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

      {/* <Modal open={props.open}>
        <Box
          style={{
            maxWidth: "30%",
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
            padding: "11px",
            transform: "translate(-50%,-50%)",
          }}
          className="smallmodal"
        >
          <div className="investInsidePading">
            <Grid
              container
              style={{ backgroundColor: "white", display: "flex" }}
            >
              <Grid item className="investModal" xs={12}>
                <CardHeader
                  avatar={
                    <Box sx={{ paddingTop: "0%" }} textAlign="center">
                      <img
                        alt="Money Sprint"
                        src={SuccessFullOtp}
                        style={style.logo}
                      />
                    </Box>
                  }
                  action={""}
                  title=""
                  subheader=""
                  sx={{ fontSize: "14px", fontWeight: "500", color: "#3c3e42" }}
                />
              </Grid>
              <Box
                textAlign="center"
                sx={{ padding: "3px 16px", width: "100%" }}
              >
                <b
                  style={{
                    textAlign: "center",
                    paddingBottom: "1%",
                    fontSize: "20px",
                    fontWeight: "500",
                    color: "#000000",
                  }}
                >
                  Congrats! Your transaction is{" "}
                </b>
                <Typography
                  textAlign="center"
                  sx={{
                    fontSize: "20px",
                    paddingLeft: "0",
                    color: "#000000",
                    fontWeight: "500",
                  }}
                >
                  being processed{" "}
                </Typography>
              </Box>
          
            </Grid>
            <Grid container>
                <Grid item xs={12} md={12} textAlign="center">
                  <Box>
                    <Typography>
                      We will notify you once we got confirmation from the
                    </Typography>
                    <Typography>
                      insurance partner. You can track the status of
                    </Typography>
                    <Typography>
                      {" "}
                      <b>transaction</b> under your portfolio
                    </Typography>
                  </Box>
                </Grid>
              </Grid>

            <Button
              // disabled={showSubmit}
              fullWidth
              // onClick={handleClick}
              sx={{
                padding: " 15px",
                backgroundColor: "#23db7b",
                marginTop: " 15px",
                borderRadius: "0px 0px 10px 10px",
                "&.MuiButtonBase-root:hover": {
                  bgcolor: "#23db7b",
                },
              }}
            >
              <Typography sx={{ fonSize: "18px", color: "white" }}>
                {" "}
                Save Details{" "}
              </Typography>
            </Button>
          </div>

          <Grid
            sx={
              {
                // display: "contents",
                // position: " absolute",
              }
            }
            item
            xs={2}
          >
            <Box
              onClick={props.close}
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
      </Modal> */}
    </div>
  );
};

export default CongratsModal;

// import React, { useEffect, useState } from "react";
// import { Box, styled } from "@mui/system";
// import {
//   Breadcrumbs,
//   Button,
//   Grid,
//   Modal,
//   Popover,
//   TextField,
//   Typography,
// } from "@mui/material";
// import {
//   closelogo,
//   Logo,
//   MonoLogo,
//   Profile,
//   SIP,
//   sipiclogo,
// } from "../../Assets/index";
// import { useDispatch, useSelector } from "react-redux";
// import SaveSipDetailsButton from "../../Modules/Buttons/SaveSipDetailsButton";
// import { useForm, Controller } from "react-hook-form";
// import set from "date-fns/fp/set/index.js";
// import { Navigate, useNavigate } from "react-router-dom";
// import { globalConstant } from "../../Utils/globalConstant";
// import './InvestNowScreen.css'

// function ModalInvestNow(props: any) {
//   const navigate = useNavigate();
//   const style = {
//     main: {
//       boxSizing: "border-box",
//       backgroundColor: "#f9f9f9",
//       height: "100vh",
//     } as React.CSSProperties,
//     drawer: {
//       zIndex: "500",
//       boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
//     } as React.CSSProperties,
//     image: {
//       width: "176px",
//     } as React.CSSProperties,
//     profileContainer: {
//       borderRadius: "8px",
//       border: "solid 1px #4f46de",
//       backgroundColor: "#6c63ff",
//       padding: "10px",
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       gap: "10px",
//       cursor: "pointer",
//     },
//     toolbar: {
//       display: "flex",
//       justifyContent: "space-between",
//     },
//     profile: {
//       width: "20px",
//       height: "20px",
//       borderRadius: "50%",
//       border: "1px solid white",
//     },
//     profileInter: {
//       width: "40px",
//       height: "40px",
//       border: "solid 1px rgba(75, 123, 236, 0.49)",
//       borderRadius: "50%",
//     },
//     menuContainer: {
//       boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.12)",
//       boxSizing: "border-box",
//       padding: "10px",
//       backgroundColor: "white",
//       marginRight: "20px",
//     } as React.CSSProperties,
//     menuButton: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       margin: "10px 0px",
//     } as React.CSSProperties,
//     menuText: {
//       color: "black",
//       fontSize: "10px",
//       fontWeight: "500",
//       padding: "5px 10px",
//       borderRadius: "4px",
//       backgroundColor: "#ffc300",
//       cursor: "pointer",
//     },
//     menuText2: {
//       padding: "6px 12px",
//       borderRadius: "4px",
//       border: "solid 1px #23db7b",
//       backgroundColor: "rgba(35, 219, 123, 0.12)",
//       fontSize: "12px",
//       fontWeight: "500",
//       color: "#09b85d",
//       cursor: "pointer",
//     },
//     modalContainer: {
//       borderRadius: "8px",
//       padding: "20px",
//       boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.2)",
//       backgroundColor: "#fff",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       flexDirection: "column",
//       position: "absolute",
//       top: "50%",
//       left: "50%",
//       transform: "translate(-50%,-50%)",
//     } as React.CSSProperties,
//     button: {
//       height: "48px",
//       borderRadius: "8px",
//       boxShadow: "none",
//       backgroundColor: "white",
//       textAlign: "left",
//       justifyContent: "flex-start",
//     } as React.CSSProperties,
//     menuIcon: {
//       color: "#6c63ff",
//       fontSize: "24px",
//     },
//     logo: {
//       width: "50px",
//       padding: "20px 0px",
//     } as React.CSSProperties,
//     appBar: {
//       backgroundColor: "white",
//     },
//   };

//   const btnstyle = {
//     button: {
//       height: "48px",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
//       backgroundColor: "#23db7b",
//       margin: "20px",
//       width: "100%",
//       maxWidth: "400px",
//     } as React.CSSProperties,
//     text: {
//       color: "white",
//     },
//   };
//   const [formData, setFormData] = useState<any>({
//     firstName: "",
//     lastName: "",
//     email: "",
//     DOB: "",
//   });

//   const g_investment: any = useSelector(
//     (state: any) => state?.investment?.investment
//   );
//   const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
//     null
//   );

//   const [errorMessageFN, setErrorMessageFN] = React.useState<any>("");
//   const [errorMessageLN, setErrorMessageLN] = React.useState<any>("");
//   const [errorMessageEM, setErrorMessageEM] = React.useState<any>("");
//   const [errorMessageDOB, setErrorMessageDOB] = React.useState<any>("");
//   const [showSubmit, setShowSubmit] = useState(true);
//   const [error, setError] = useState(false);

//   const [investmentData, setInvestmentData] = useState<any>({});

//   const emailRegex =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   const regexDOB = /[0-9]{4,}(-[0-9]{2,}){2,}/;

//   function handleChange(e: any) {
//     const value = e.target.value;
//     setFormData({
//       ...formData,
//       [e.target.name]: value,
//     });
//   }

//   function handleOnBlurFirstname(e: any) {
//     if (formData.firstName.length < 3) {
//       setError(true);
//       setErrorMessageFN("First Name is required");
//     }
//   }

//   function handleOnBlurLastname(e: any) {
//     if (formData.lastName.length < 3) {
//       setError(true);
//       setErrorMessageLN("Last Name is required");
//     }
//   }

//   function handleOnBlurEamil(e: any) {
//     if (!emailRegex.test(formData.email)) {
//       setError(true);
//       setErrorMessageEM("Please Enter Valid Email");
//     }
//   }

//   function handleOnBlurDOB() {
//     if (!regexDOB.test(formData.DOB)) {
//       setError(true);
//       setErrorMessageDOB("Please Enter Valid DOB");
//     }
//   }

//   useEffect(() => {
//     console.log(
//       formData.firstName.length > 3 &&
//       formData.lastName.length > 3 &&
//       emailRegex.test(formData.email) &&
//       regexDOB.test(formData.DOB)
//     );
//     setShowSubmit(true);

//     if (
//       formData.firstName.length > 3 &&
//       formData.lastName.length > 3 &&
//       emailRegex.test(formData.email) &&
//       regexDOB.test(formData.DOB)
//     ) {
//       setShowSubmit(false);
//     }
//   }, [formData]);

//   const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.stopPropagation();
//     if (g_investment.type === globalConstant.SIP_INVESTMENT) {
//       navigate("/mflist", {});
//     } else if (g_investment.type === globalConstant.LUMPSUM_INVESTMENT) {
//       navigate("/onetimemutualfundrecommendation", {});
//     }
//   };

//   return (
//     <>
//       <Modal
//         sx={{ backdropFilter: "blur(10px)" }}
//         keepMounted
//         open={props.open}
//         aria-labelledby="keep-mounted-modal-title"
//         aria-describedby="keep-mounted-modal-description"

//       >
//         <Box style={style.modalContainer}>
//           <Grid container spacing={1}>
//             <Grid item xs={12} textAlign="right">
//               <img
//                 alt="Money Sprint"
//                 src={closelogo}
//                 onClick={props.close}
//                 style={{ width: "24px", cursor: "pointer" }}
//               />
//             </Grid>
//           </Grid>

//           <img
//             alt="Money Sprint"
//             src={sipiclogo}
//             style={{
//               marginTop: "-9%",
//               width: " 38px",
//               height: "38px",
//             }}
//           />

//           <b style={{ textAlign: "center" }}>Help us know you better.</b>
//           <Typography textAlign="center" variant="h5" sx={{ fontSize: "14px" }}>
//             Share details below to view recommendations
//           </Typography>

//             <Grid container spacing={2}>
//               <Grid item xs={12} md={6} sm={12}>
//                 <TextField
//                   fullWidth
//                   label="FirstName"
//                   sx={{ color: "#919eb1", background:"#ffffff", fontSize: "17px" }}
//                   onBlur={handleOnBlurFirstname}
//                   onChange={handleChange}
//                   name="firstName"
//                   type="text"
//                   value={formData.firstName}
//                   helperText={
//                     formData.firstName.length < 3 ? (
//                       <label style={{ color: "red" }}>{errorMessageFN}</label>
//                     ) : (
//                       ""
//                     )
//                   }
//                 />
//               </Grid>
//               <Grid item xs={12} md={6} sm={12}>
//                 <TextField
//                   fullWidth
//                   sx={{ color: "#919eb1", fontSize: "17px" }}
//                   label="LastName*"
//                   onBlur={handleOnBlurLastname}
//                   onChange={handleChange}
//                   type="text"
//                   name="lastName"
//                   value={formData.lastName}
//                   helperText={
//                     formData.lastName.length < 3 ? (
//                       <label style={{ color: "red" }}>{errorMessageLN}</label>
//                     ) : (
//                       ""
//                     )
//                   }
//                 />

//               </Grid>
//             </Grid>

//             <Grid container spacing={2}>
//               <Grid item xs={12} md={12}>
//                 <TextField
//                   fullWidth
//                   sx={{
//                     color: "#919eb1",
//                     fontSize: "17px",
//                     marginTop: "2%",
//                     marginRight: "6%",
//                   }}
//                   label="Email Address"
//                   id="fullWidth"
//                   onBlur={handleOnBlurEamil}
//                   onChange={handleChange}
//                   type="text"
//                   name="email"
//                   value={formData.email}
//                   helperText={
//                     !emailRegex.test(formData.email) ? (
//                       <label style={{ color: "red" }}>{errorMessageEM}</label>
//                     ) : (
//                       ""
//                     )
//                   }
//                 />
//               </Grid>

//             </Grid>
//             <Grid container spacing={2}>
//               <Grid item xs={12} md={12}>
//                 <TextField
//                   type="date"
//                   placeholder="DD/MM/YY"
//                   sx={{
//                     color: "#919eb1",
//                     fontSize: "17px",
//                     marginTop: "4%",
//                     marginRight: "6%",
//                   }}
//                   fullWidth
//                   label="Date of Birth"
//                   onBlur={handleOnBlurDOB}
//                   onChange={handleChange}
//                   name="DOB"
//                   value={formData.DOB || "dd/mm/yyyy"}
//                   helperText={
//                     !regexDOB.test(formData.DOB) ? (
//                       <label style={{ color: "red" }}>{errorMessageDOB}</label>
//                     ) : (
//                       ""
//                     )
//                   }
//                 />
//               </Grid>
//             </Grid>

//               <Button
//               className="submitdetails"
//                 disabled={showSubmit}
//                 variant="contained"
//                 style={btnstyle.button}
//                 fullWidth
//                 onClick={handleClick}
//                 sx={{
//                   pointerEvents: "fill",
//                   marginRight:"12px"
//                 }}
//               >
//                 <Typography

//                   component="span"
//                   style={btnstyle.text}
//                   className="largeButtonText3"
//                 >
//                   Save Details
//                 </Typography>
//               </Button>

//         </Box>
//       </Modal>
//     </>
//   );
// }

// export default ModalInvestNow;
