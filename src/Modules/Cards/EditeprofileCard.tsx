import { Box, Checkbox, Grid, IconButton, ListItemAvatar, Typography } from '@mui/material'
import { emaillogo } from '../../Assets/index'
import { cakelogo } from '../../Assets/index'
import { icbirthplacelogo } from '../../Assets/index'
import { locationlogo } from '../../Assets/index'
import { ic_income } from '../../Assets/index'
import { wclogo } from '../../Assets/index'
import { EditProfieButton } from '../Buttons/EditProfieButton'

import { useRef } from 'react';
import { cameraIcon } from '../../Assets/index'
import List from '@mui/material/List';

import ListItem from '@mui/material/ListItem';


import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work'
import Paper from "@mui/material/Paper";
import Item from "@mui/material/Paper";
import { Mylocationicon } from "../../Assets/index";
import { girlicon } from '../../Assets/index'
import { girliconicon } from '../../Assets/index'
import { manicon } from '../../Assets/index'
import { Editprofilebutton } from '../Buttons/Editprofilebutton'



import { useForm } from 'react-hook-form';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react'
import { makeStyles, createStyles } from "@material-ui/core/styles";




import React from 'react'
import { height, padding } from '@mui/system'

function EditprofileCard() {




  const useStyles = makeStyles((theme) =>
    createStyles({
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
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
    gender: "",
    email: "",



  })
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
    // ellipse:{
    //     width:" 40px",
    //     height:" 40px",
    //     margin: "0 16px 0 0",
    //     padding: "10px",
    //     opacity: "0.3",
    //     background-color:" #64dbff",

    // } as React.CSSProperties,

  }
  const classes = useStyles();

  return (
    <>
          <div style={{
        width: "120vh", backgroundColor: '#ffffff',
        padding: '29px'
      }}>
        <Grid container spacing={3}  >


          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}
              sx={{
                p: 1,
                width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "30px", borderRadius: "8px",
                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                marginLeft: "-5px"
              }}
            >

<form style={{margin: "-1" ,marginTop: "7px"}}>


              <Stack m={2} spacing={6}>
            
                  <TextField label="First Name" fullWidth >


                  </TextField>
                  <TextField label="Middle Name" fullWidth sx={{ marginTop: "-20px" }} >


                  </TextField>
                  <TextField label="Last Name" fullWidth sx={{ marginTop: "-20px" }} >


                  </TextField>
                  <TextField label="Mobile Number" fullWidth sx={{ marginTop: "-20px" }}  >


                  </TextField>
                  <TextField label="Email Address" fullWidth sx={{ marginTop: "10px" }}>


                  </TextField>
                  <Box
                    component="form"
                    sx={{
                      '& .MuiTextField-root': { m: 1, width: '194px', marginTop: "20px" },
                

                    }}




                  >
                    <div style={{ position: "relative", top: "-30px" }}>
                      <TextField select label="City of residence" sx={{ marginTop: "20px" }} />
                      <TextField select label="State" sx={{ marginTop: "20px" }} />



                    </div>

                  </Box>











              


              </Stack>

              </form>

            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}
              sx={{
                p: 1,
                width: '1', maxWidth: 460, bgcolor: 'background.paper', marginTop: "30px", borderRadius: "8px",
                boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.12)",
                marginLeft: "-5px"
              }}
            >

              <Typography sx={{ color: "#6c63ff", marginLeft: "-72%" }}>Gender</Typography>
              <Box sx={{ '& button': { m: 1 } }}>

                <div>
                  <Button variant="outlined" size="small" sx={{ backgroundColor: " #fff", borderRadius: "8px", boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05) ", height: " 42px", padding: " 6px 10px 6px 6px" }}>
                    <img src={manicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "2px" }} />
                    <Typography sx={{ marginLeft: "2px" }} >Male</Typography>

                  </Button>
                  <Button variant="outlined" size="medium" sx={{ backgroundColor: " #fff", borderRadius: "8px", boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05)", height: " 42px", padding: " 6px 10px 6px 6px" }}>
                    <img src={girlicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "2px" }} />
                    <Typography sx={{ marginLeft: "2px" }}>  Female</Typography>
                  </Button>
                  <Button variant="outlined" size="large" sx={{ backgroundColor: " #fff", borderRadius: "8px", boxShadow: " 0 1px 4px 0 rgba(0, 0, 0, 0.05)", height: " 42px", padding: " 6px 10px 6px 6px" }}>
                    <img src={girliconicon} alt="smallarrow Logo" style={{ width: "24px", height: "24px", backgroundColor: "#ffc300", borderRadius: "12px", marginLeft: "2px" }} />
                    <Typography sx={{ marginLeft: "2px" }}>        Transgender</Typography>
                  </Button>
                </div>
              </Box>



              <Stack m={2} spacing={6}>
                <TextField label="Address" sx={{ fontSize: "16px", color: "#acb4bf" }} placeholder="Enter your street address" >

                  <img src={Mylocationicon} width="16px" height="22.6" alt="Google Logo" />

                </TextField>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '194px', marginTop: "" },
                    marginTop: "-69%",

                  }}




                >
                  <div style={{ position: "relative", top: "-30px" }}>
                    <TextField select label="City of residence" sx={{ marginTop: "20px" }} />
                    <TextField select label="State" sx={{ marginTop: "20px" }} />

                    <TextField select label="Pincode" sx={{ marginTop: "50px" }} />
                    <TextField select label="Country" sx={{ marginTop: "50px" }} />

                  </div>

                </Box>

                {/* <Box
                      component="form"
                      sx={{
                        '& .MuiTextField-root': { m: 1, width: '190px' },
                        marginTop: "60px",

                      }}
                      noValidate
                      autoComplete="off"



                    >


                    </Box> */}





                <TextField label="Income Slab" sx={{ position: "relative", top: "-55px" }} />
                <Editprofilebutton />





              </Stack>



            </Paper>
          </Grid>


        </Grid>
      </div>




    </>


  )
}

export default EditprofileCard

