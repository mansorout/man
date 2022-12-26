import React, { useEffect, useState } from "react";
import { InputAdornment, FormControl } from "@mui/material";
import { Box, TextField, Typography } from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import "./Login.css";
import ContinueWithMobile from "../../Modules/Buttons/ContinueWithMobile";
import ConnectWithGoogle from "../../Modules/Buttons/ConnectWithGoogle";
import { ContactError, MonoLogo, validMobile } from "../../Assets";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../Modules/Footer/Footer";
import LoginWithGoogle from "../loginwithgoogle/LoginWithGoogle";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";
import { login } from "../../Store/Reducers/action";
import { store } from "../../Store/Store";
import { useDispatch } from "react-redux";
import { makeStyles } from "@mui/styles";
import { Grid, Modal, Theme } from "@mui/material";
import { postData, postDataBeforeAuth } from "../../Utils/api";
import siteConfig from "../../Utils/siteConfig";
import { setIsUserAuthenticatedAction } from "../../Store/Authentication/actions/auth-actions";
import { setDisableButtonAction } from "../../Store/Global/actions/global-actions";
import { globalConstant } from "../../Utils/globalConstant";

const useStyles: any = makeStyles((theme: Theme) => ({
  background: {
    paddingTop: "65px",
    "@media(max-width: 1200px)": {
      justifyContent: "center !important",
    },
  },
  containerRes: {
    marginTop: "30px",
    paddingTop: "15px !important",
    "@media(max-width: 600px)": {
      // marginTop: '0px',
      margin: "15px",
    },
    "@media(max-width: 1200px)": {
      marginTop: "0px",
      borderRadius: "20px !important",
    },
    "@media(min-width: 1400px)": {
      paddingTop: "30px !important",
    },
  },
}));

const style = {
  background: {
    minHeight: "100vh",
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
  } as React.CSSProperties,

  logo: {
    width: "50px",
    marginBottom: "15px",
  } as React.CSSProperties,

  contactInput: {
    width: "90%",
    maxWidth: "400px",
    marginTop: "35px",
  } as React.CSSProperties,

  divider: {
    margin: "10px",
    width: "64%",
    maxWidth: "400px",
    color: "",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  dividerBox: {
    width: "41%",
    height: ".5px",
    padding: ".5px",
    backgroundColor: "rgba(112, 112, 112, 0.26)"

  },

  errorText: {
    width: "100%",
    maxWidth: "400px",
    height: "15px",
  } as React.CSSProperties,
};

export const Login = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const error: string[] = useSelector((state: any) => state.error);
  const [shouldButtonDisable, setShouldButtonDisable] = useState<boolean>(false);

  const { addError, removeError, addContactNumber } = bindActionCreators(
    ActionCreators,
    dispatch
  );

  const [focus, setFocus] = useState<boolean>(false);
  const [number, setNumber] = useState<string>("");

  useEffect(() => {
    addContactNumber("");
  }, [])

  const handleMobile = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setNumber(e.target.value);
    if (e.target.value.length !== 10) {
      addError("Login_Contact");
    } else {
      removeError("Login_Contact");
    }
  };

  const doAuthentication = (number: string) => {
    if (number.length != 10) {
      addError("Login_Contact");
      return;
    }

    dispatch(setDisableButtonAction(true));
    let objBody = {
      mobilenumber: number,
      type: "auth",
    };
    setShouldButtonDisable(true);
    postDataBeforeAuth(
      objBody,
      siteConfig.AUTHENTICATION_OTP_SEND,
      siteConfig.CONTENT_TYPE_APPLICATION_X_WWW_FORM_URLENCODED,
      siteConfig.AUTHENTICATION_API_ID
    )
      .then(res => res.json())
      .then((data) => {
        dispatch(setDisableButtonAction(false));
        if (data?.error === true) {
          console.log("error true");
          return;
        }

        localStorage.setItem(siteConfig.CONTACT_NUMBER, number)

        removeError("Login_Contact");
        setShouldButtonDisable(false);
        addContactNumber(number);
        navigate("/termsandcondition");
      })
      .catch((err) => {
        setShouldButtonDisable(false);
        addError(globalConstant.ERROR_OCCURRED)
        console.log(err);
      });
  };

  return (
    <Box
      className={`${classes.background} background`}
      style={style.background}
    >
      <NavigationBar />
      <Box
        style={style.container}
        className={`${classes.containerRes} LoginContainer`}
      >
        <img alt="Money Sprint" src={MonoLogo} style={style.logo} />
        <Typography variant="h1" align="center">
          Login with Mobile
        </Typography>
        <Typography variant="h5" align="center">
          Enter your mobile number to continue
        </Typography>

        <TextField
       inputProps={{
        maxLength: 10,
      }}
          sx={{
            "& .MuiInputLabel-root": { color: "#acb4bf" },
            "&.Mui-focused >.MuiInputLabel-root": { color: "red" },
            "& .MuiOutlinedInput-root": {
              "& > fieldset": {
                borderColor: error?.includes("Login_Contact")
                  ? "#ff5300"
                  : "#dddfe2",
              },
              "&:hover > fieldset": {
                borderColor: error?.includes("Login_Contact")
                  ? "#ff5300"
                  : "#dddfe2",
              },
              "&.Mui-focused > fieldset": {
                borderColor: error?.includes("Login_Contact")
                  ? "#ff5300"
                  : "#4b7bec",
                borderWidth: "1px",
                boxShadow: "0 4px 8px 0 rgba(75, 123, 236, 0.2)",
              },
            },
          }}
          autoComplete="off"
          style={style.contactInput}
          margin="normal"
          label="Mobile number"
          InputProps={{
            startAdornment: focus ? (
              <InputAdornment position="start"> +91 - </InputAdornment>
            ) : (
              ""
            ),
            endAdornment: error?.includes("Login_Contact") ? (
              <InputAdornment sx={{ paddingRight: "8px ! important" }} position="end">
                {" "}
                <img src={ContactError} width="22px" alt="Cross" />{" "}
              </InputAdornment>
            ) : (
              ""
            ),
            // endAdornmentt :  error?.includes("Login_Contact") ? <InputAdornment position="end"> <img src={validMobile} width="22px" alt="Cross"/> </InputAdornment> : ""
          }}
          onKeyPress={(e) =>
            /[^(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$]$/.test(e.key) &&
            e.preventDefault()
          }
          placeholder="98989 98989"
          onChange={handleMobile}
          onFocus={() => setFocus(true)}
        />

        <Typography style={style.errorText} className="error">
          {error?.includes("Login_Contact")
            ? "Please enter a valid phone number"
            : ""}
        </Typography>

        <Typography style={style.errorText} className="error">
          {
            error?.includes(globalConstant.ERROR_OCCURRED)
              ? globalConstant.ERROR_OCCURRED
              : ""
          }
        </Typography>

        <ContinueWithMobile
          shouldButtonDisable={shouldButtonDisable}
          number={number}
          onClick={(val) => doAuthentication(val)}
        />
        <Box style={style.divider}>
          <Box style={style.dividerBox}></Box>
          <Typography sx={{ color: "#7b7b9d", fontSize: "16px" }}>OR</Typography>
          <Box style={style.dividerBox}></Box>
        </Box>
        <ConnectWithGoogle />
        <Footer />
      </Box>
    </Box>
  );
};
