import React, { useState } from 'react'
import { Box, styled } from '@mui/system'
import { Breadcrumbs, Grid, Modal, TextField, Typography } from '@mui/material'
import { closelogo, Logo, MonoLogo, Profile, SIP, sipiclogo } from '../../Assets/index'
import { useDispatch, useSelector } from 'react-redux'
import SaveSipDetailsButton from '../../Modules/Buttons/SaveSipDetailsButton'



function ModalInvestNow(props: any) {
 

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [Email, setEmail] = useState<any>("");
  const [date, setDate] = useState<any>("");
  const [errorMessage, setErrorMessage] = React.useState<any>("");
  // const[firstName,setFirstName]=<any>useState("")


  {/* const handleFirstName =(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement)=>{

    setFirstName(e.target.value)
  }
  */}

  const handldeFirstname = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setFirstName(e.target.value)
    if(firstName.length !=10){
      alert("hhhhh")
    }
  }

  console.log(firstName)

  const handldeLastName = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setLastName(e.target.value)
  }

  console.log(lastName)
  // handldeEmail
  const handldeEmail = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  console.log(Email)
  const handldeDate = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setDate(e.target.value)
  }

  console.log(date)



  const style = {
    main: {
      boxSizing: "border-box",
      backgroundColor: "#f9f9f9",
      height: "100vh"
    } as React.CSSProperties,
    drawer: {
      zIndex: "500",
      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)"
    } as React.CSSProperties,
    image: {
      width: '176px',
    } as React.CSSProperties,
    profileContainer: {
      borderRadius: "8px",
      border: "solid 1px #4f46de",
      backgroundColor: "#6c63ff",
      padding: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "10px",
      cursor: "pointer"
    },
    toolbar: {
      display: "flex",
      justifyContent: "space-between"
    },
    profile: {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      border: "1px solid white"
    },
    profileInter: {
      width: "40px",
      height: "40px",
      border: "solid 1px rgba(75, 123, 236, 0.49)",
      borderRadius: "50%"
    },
    menuContainer: {
      boxShadow: "0 10px 20px 0 rgba(0, 0, 0, 0.12)",
      boxSizing: "border-box",
      padding: "10px",
      backgroundColor: "white",
      marginRight: "20px"
    } as React.CSSProperties,
    menuButton: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "10px 0px"
    } as React.CSSProperties,
    menuText: {
      color: "black",
      fontSize: "10px",
      fontWeight: "500",
      padding: "5px 10px",
      borderRadius: "4px",
      backgroundColor: "#ffc300",
      cursor: "pointer"
    },
    menuText2: {
      padding: "6px 12px",
      borderRadius: "4px",
      border: "solid 1px #23db7b",
      backgroundColor: "rgba(35, 219, 123, 0.12)",
      fontSize: "12px",
      fontWeight: "500",
      color: "#09b85d",
      cursor: "pointer"
    },
    modalContainer: {
      borderRadius: "8px",
      padding: "20px",
      boxShadow: "0 24px 24px 0 rgba(0, 0, 0, 0.2)",
      backgroundColor: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)"
    } as React.CSSProperties,
    button: {
      height: "48px",
      borderRadius: "8px",
      boxShadow: "none",
      backgroundColor: "white",
      textAlign: "left",
      justifyContent: "flex-start",
    } as React.CSSProperties,
    menuIcon: {
      color: "#6c63ff",
      fontSize: "24px"
    },
    logo: {
      width: "50px",
      padding: "20px 0px",
    } as React.CSSProperties,
    appBar: {
      backgroundColor: "white",
    }
  }








  return (
    <>

      <Modal
        sx={{ backdropFilter: "blur(10px)" }}
        keepMounted
        open={props.open}

        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box style={style.modalContainer}>
          <Grid container spacing={1}>
            <Grid item xs={12} textAlign="right">
              <img alt="Money Sprint" src={closelogo} onClick={props.close} style={{ width: "24px", cursor: "pointer" }} />
            </Grid>
          </Grid>

          <img alt="Money Sprint" src={sipiclogo} style={{
            marginTop: "-9%",
            width: " 38px",
            height: "38px"
          }} />

          <b style={{ textAlign: "center" }}>Help us know you better.</b>
          <Typography textAlign="center" variant='h5' sx={{ fontSize: "14px" }}  >Share details below to view recommendations</Typography>
          <form>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 2, width: '19ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField label="FirstName"
                sx={{ color: "#919eb1", fontSize: "17px" }}
                onChange={handldeFirstname}
                type="text"
                // error={text.length >= MAX_LENGTH}
                // helperText={errorMessage}
                // value={text}





              />

              &nbsp;&nbsp;&nbsp;
              <TextField sx={{ color: "#919eb1", fontSize: "17px" }} label="LastName*"
                onChange={handldeLastName}
              />

            </Box>
            <Box sx={{ width: "95%", marginTop: "2%" }}>
              <TextField fullWidth sx={{ color: "#919eb1", fontSize: "17px", marginTop: "1%", marginLeft: "3%" }} label="Email Address" id="fullWidth"
                onChange={handldeEmail}
              />
            </Box>
            <Box sx={{ width: "95%", marginTop: "2%" }}>
              <TextField type="date" sx={{ color: "#919eb1", fontSize: "17px", marginTop: "4%", marginLeft: "3%" }} fullWidth label="Date of Birth"
                id="fullWidth"
                onChange={handldeDate}
              />
            </Box>


            <div style={{ width: "100%" }} >
              <SaveSipDetailsButton otp={''} />
            </div>
          </form>
        </Box>
      </Modal>
    </>
  )
}

export default ModalInvestNow