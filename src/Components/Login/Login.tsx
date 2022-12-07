
import { InputAdornment,FormControl } from "@mui/material";
import {
  Box,
  TextField,
  Typography,
} from "@mui/material";
import NavigationBar from "../../Modules/NavigationBar/NavigationBar";
import "./Login.css";
import ContinueWithMobile from "../../Modules/Buttons/ContinueWithMobile";
import ConnectWithGoogle from "../../Modules/Buttons/ConnectWithGoogle";
import React, { useEffect, useState } from "react";
import { ContactError, MonoLogo, validMobile } from "../../Assets";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../Modules/Footer/Footer";
import LoginWithGoogle from "../loginwithgoogle/LoginWithGoogle";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Store";
import {login} from "../../Store/Reducers/action"
import {store} from "../../Store/Store"
import { useDispatch } from "react-redux"

export const Login = () => {

  const style = {
    background : {
      height : "100vh",
      width: "100vw",
      display:"flex",
      flexDirection:"column",
      boxSizing:"border-box",
      justifyContent:"flex-end",
      alignItems:"center",
    } as React.CSSProperties,

    container : {
      backgroundColor: "white",
      width: "100%",
      maxWidth: "500px",
      padding: "10px 0px",
      borderRadius: "20px 20px 0px 0px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    } as React.CSSProperties,

    logo : {
      width: "50px",
      padding: "20px 0px",
    } as React.CSSProperties,

    contactInput : {
      width:"90%",
      maxWidth:"400px",
      marginTop: "20px"
    } as React.CSSProperties,

    divider : {
      margin:"10px",
      width : "90%",
      maxWidth : "400px",
      color : "#7b7b9d",
      display:"flex",
      alignItems:"center",
      justifyContent:"space-between"
    },

    dividerBox : {
      width:"45%",
      height:".5px",
      padding:".5px",
      backgroundColor:"#7b7b9d"
    },

    errorText : {
      width:"100%",
      maxWidth:"400px",
      height: "15px",
      marginBottom:'10px'
    } as React.CSSProperties
  }

  const error : string[] = useSelector((state : any) => state.error)
  const dispatch = useDispatch()
  const { addError, removeError, addContactNumber } = bindActionCreators(ActionCreators, dispatch)

  const [focus, setFocus] = useState<boolean>(false);
  const [number, setNumber] = useState<string>("")
  const navigate = useNavigate();

  const handleMobile = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    
    setNumber(e.target.value)
    if(e.target.value.length !== 10){
      addError("Login_Contact")
  }else{
      removeError("Login_Contact")
     
    
  }

  }

  
 

  return (
    
            <Box className="background" style={style.background}>
        <NavigationBar />
        <Box className="LoginContainer" style={style.container}>
          <img alt="Money Sprint" src={MonoLogo} style={style.logo} />
          <Typography variant="h1" align="center">
            Login with Mobile
          </Typography>
          <Typography variant="h5" align="center">
            Enter your mobile number to continue
          </Typography>
        
          <TextField
            sx={{
              "& .MuiInputLabel-root": {color: '#acb4bf'},
              "& .MuiOutlinedInput-root": {
                "& > fieldset": { borderColor: error?.includes("Login_Contact") ? "#ff5300" : "#dddfe2" },
                "&:hover > fieldset": { borderColor: error?.includes("Login_Contact") ? "#ff5300" : "#dddfe2" },
                "&.Mui-focused > fieldset": { borderColor: error?.includes("Login_Contact") ? "#ff5300" : "#4b7bec", borderWidth: "1px", boxShadow: "0 4px 8px 0 rgba(75, 123, 236, 0.2)" },
              },
            }}
           
            autoComplete="off"
            style={style.contactInput}
            margin="normal"
            label="Mobile number"
            InputProps = {{
              startAdornment: focus ? <InputAdornment position="start"> +91 - </InputAdornment> : "",
              endAdornment :  error?.includes("Login_Contact") ? <InputAdornment position="end"> <img src={ContactError} width="22px" alt="Cross"/> </InputAdornment> : "",
              // endAdornmentt :  error?.includes("Login_Contact") ? <InputAdornment position="end"> <img src={validMobile} width="22px" alt="Cross"/> </InputAdornment> : ""
            }}
            onKeyPress={e => /[^(?!0\.00)\d{1,3}(,\d{3})*(\.\d\d)?$]$/.test(e.key) && e.preventDefault()}
            placeholder="98989 98989"
            onChange={handleMobile}
            onFocus={()=>setFocus(true)}
            
            
          />
          



          <Typography style={style.errorText} className="error">{error?.includes("Login_Contact") ? "Please enter a valid phone number" : ""}</Typography>
          <ContinueWithMobile  number={number}/>
          <Box style={style.divider}>
            <Box style={style.dividerBox}></Box>
            <Typography className="subTitle2">OR</Typography>
            <Box style={style.dividerBox}></Box>
          </Box>
          <ConnectWithGoogle />
          <Footer/>
        </Box>
      </Box>
  );
};
