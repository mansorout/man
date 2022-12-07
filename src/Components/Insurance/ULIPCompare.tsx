
import React, {  useEffect, useRef, useState } from 'react'
import './insurance.css'
import { Box} from '@mui/system'
import { FormControl, Grid, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Theme, Typography } from '@mui/material'
import { Toolbar } from '@mui/material'

import Navbar from '../CommonComponents/Navbar';
import Sidebar from '../CommonComponents/Sidebar';
import { ULIPList } from '../../Modal/ULIP'
import ULIPCard from '../../Modules/CustomCard/ULIPCard'
import { useSelector } from 'react-redux'

function ULIPCompare() {

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
    appBar: {
      backgroundColor: "white",
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
    logo: {
      width: "50px",
      padding: "20px 0px",
    } as React.CSSProperties,
    select :{
      color:"white",
      '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline' : {
        border:"1px solid white"
      }
    }
  }


  const refContainer = useRef();

  const { ULIPId }: any = useSelector((state: any) => state.ULIPCompare)

  useEffect(()=>{
    setCompany1(ULIPList.filter((item) => item.id == ULIPId[0])[0])
    setCompany2(ULIPList.filter((item) => item.id == ULIPId[1])[0])
  },[])

  const[company1, setCompany1] = useState<any>("")
  const[company2, setCompany2] = useState<any>("")

  const handleCompany1Change = (e : any) => {
    setCompany1(ULIPList.filter((item) => item.id == e.target.value)[0])
  }

  const handleCompany2Change = (e : any) => {
    setCompany2(ULIPList.filter((item) => item.id == e.target.value)[0])
  }

  return (
    <Box style={{ width: "100vw" }} ref={refContainer}>
      <Navbar />
      <Box sx={style.main}>
        <Grid container spacing={0} >
          <Grid item xs={0} sm={1} md={2}>
            <Toolbar />
            <Sidebar />


          </Grid>
          <Grid p={2} container sx={{ height: "100vh", overflow: "scroll" }} xs={13} sm={11} md={10}>
            <Grid sx={{ height: { xs: "auto", sm: "inherit" }, padding: 0, boxSizing: "border-box", overflow: { sx: "auto", sm: "scroll" } }} item xs={12}>
              <Toolbar/>
              <Grid item xs={12} p={2} borderRadius={2} style={{backgroundColor:"#6a63f6"}}>
              <Box p={1} style={{display:"flex", gap:"20px", flexWrap:'wrap', alignItems:"center", justifyContent:"center"}}>
                <Box>
                  <FormControl sx={{width:"300px"}} variant="outlined">
                    <InputLabel style={{color:"white"}}>Company 1</InputLabel>
                    <Select
                        style={style.select}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={company1?.name}
                        defaultValue={company1?.name}
                        label="insuranceAmount"
                        onChange={(e:any)=>handleCompany1Change(e)}
                    >
                        {
                          ULIPList.filter((item) => item.id !== company2).map((item,key) => {
                            return (
                              <MenuItem key={key} value={item.id}>{item.name}</MenuItem>
                            )
                          })
                        }
                    </Select>
                  </FormControl>
                  {
                    company1 != "" ? 
                      <Box style={{display:"flex", flexWrap:"wrap", gap:"15px", alignItems:"center", marginTop:"15px"}}>
                        <Box style={{padding:"4px 8px", backgroundColor:"#8882f8", borderRadius:"2px"}}>
                          <Typography style={{color:"white", fontSize:"14px", fontWeight:"500"}}>{company1?.anualEMI} P.A.</Typography>
                        </Box>
                        <Typography style={{color:"white", fontSize:"14px"}}>{company1?.monthEMI} P.M.</Typography>
                      </Box> : null
                  }
                </Box>
                <Box style={{backgroundColor:"#544ec8", padding:"5px",textAlign:"center", width:"20px", height:"20px", borderRadius:"50%"}}>
                  <Typography style={{color:"white", fontSize:"14px", fontWeight:"500"}}>VS</Typography>
                </Box>
                <Box>
                  <FormControl sx={{width:"300px"}} variant="outlined">
                    <InputLabel style={{color:"white"}}>Company 2</InputLabel>
                    <Select
                        style={style.select}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={company2?.name}
                        defaultValue={company2?.name}
                        label="insuranceAmount"
                        onChange={(e:any)=>handleCompany2Change(e)}
                    >
                      {
                        ULIPList.filter((item) => item.id !== company1).map((item,key) => {
                          return (
                            <MenuItem key={key} value={item.id}>{item.name}</MenuItem>
                          )
                        })
                      }
                    </Select>
                  </FormControl>
                  
                </Box>
              </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      
    </Box>
  )
}

export default ULIPCompare