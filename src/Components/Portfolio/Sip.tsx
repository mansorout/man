
import './Portfolio.css'
import { Box, styled } from '@mui/system'
import { Grid, IconButton, InputBase, MenuList, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Drawer as DrawerList,  List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Close, ErrorOutline, FilterAltOutlined, Home as HomeIcon, MenuRounded, NavigateNext, PowerSettingsNew, Search, SearchOutlined, TaskAltOutlined } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support } from '@mui/icons-material';
import { AppBar, Button, Divider,  Theme} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {Logo, meria, Profile} from '../../Assets/index'
import { useNavigate } from 'react-router-dom'
import Navbar from '../CommonComponents/Navbar'
import Sidebar from '../CommonComponents/Sidebar'
import AllSIPCard from '../../Modules/CustomCard/AllSIPCard'
import { SIP } from '../../Modal/SIP'


 
function Sip() {

  const useStyles : any = makeStyles((theme: Theme) => ({
    appbar: {
      backgroundColor:"white",
      width:"100%",
      height:"64px",
      position:"fixed",
      zIndex: "3000",
    },
  }));

  

  const style = {
    main: {
      boxSizing:"border-box",
      backgroundColor:"#f9f9f9",
      height:"100vh"
    } as React.CSSProperties,
    drawer : {
      zIndex: "500",
      boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)"
    }as React.CSSProperties,
    image : {
      width: '176px',
    } as React.CSSProperties,
    profileContainer : {
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
    toolbar : {
      display: "flex",
      justifyContent: "space-between"
    },
    profile : {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      border: "1px solid white"
    },
    profileInter : {
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
    }as React.CSSProperties,
    menuButton: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "10px 0px"
    }as React.CSSProperties,
    menuText : {
      color : "black",
      fontSize : "10px",
      fontWeight : "500",
      padding:"5px 10px",
      borderRadius : "4px",
      backgroundColor : "#ffc300",
      cursor:"pointer"
    },
    menuText2 : {
      padding: "6px 12px",
      borderRadius: "4px",
      border: "solid 1px #23db7b",
      backgroundColor: "rgba(35, 219, 123, 0.12)",
      fontSize: "12px",
      fontWeight: "500",
      color : "#09b85d",
      cursor : "pointer"
    },
    button : {
        height: "48px",
        borderRadius: "8px",
        boxShadow: "none",
        backgroundColor: "white",
        textAlign: "left",
        justifyContent: "flex-start",
    } as React.CSSProperties,
    menuIcon : {
      color : "#6c63ff",
      fontSize: "24px"
    },
    appBar: {
      backgroundColor : "white",
    },
    logo : {
      width: "50px",
      padding: "20px 0px",
    } as React.CSSProperties,

  }

  const [open, setOpen] = useState<boolean>(false)
  const [sipData, setSIPData] = useState<any[]>([])

  useEffect(()=>{
    setSIPData(SIP)
  },[])

  const classes = useStyles()

  const refContainer = useRef();

  const navigate = useNavigate();

  const [selected, setSelected] = useState<number>(1)

  return (
      <Box style={{width: "100vw"}} ref={refContainer}>
        <Navbar/>
          <Box  sx={style.main}>
          <Grid container spacing={0} >
          <Grid item xs={0} sm={1} md={2}>
              <Toolbar/>
              <Sidebar/>
            </Grid>
            <Grid container sx={{height:"100vh", overflow:"scroll"}} xs={13} sm={11} md={10}>
              <Grid sx={{height: { xs: "auto", sm: "inherit"}, padding:0, boxSizing:"border-box", overflow:{ sx: "auto", sm: "scroll"}}} item xs={13}>
                <Toolbar/>
                <Grid container>
                  <Grid item xs={12} sx={{padding:2}}>
                  <Box style={{marginBottom:"20px", padding:"15px", borderRadius:"8px", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", backgroundColor:"white", display:"flex", alignItems:"center", justifyContent:"center"}}>
                      <Box style={{display:"flex", alignItems:"center", justifyContent:"space-between", width:"90%", maxWidth:"600px", flexWrap:"wrap", gap:"20px"}}>
                      
                      <Typography style={{color:"#919eb1", fontWeight:"500", fontSize:"16px", cursor:"pointer"}} onClick={()=>navigate('/holdings')}>Holdings</Typography>
                      <Typography style={{color:"#919eb1", fontWeight:"500", fontSize:"16px", cursor:"pointer"}} onClick={()=>navigate('/transactions')}>Transactions</Typography>
                      <Box style={{position:"relative", display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <Typography style={{color:"#3c3e42", fontWeight:"500", fontSize:"16px", cursor:"pointer"}} onClick={()=>navigate('/sips')}>SIPs</Typography>
                        <Box style={{position:"absolute", bottom:"0px", padding:"1px", backgroundColor:"#23db7b", width:"106%"}}></Box>
                      </Box>
                      <Typography style={{color:"#919eb1", fontWeight:"500", fontSize:"16px", cursor:"pointer"}} onClick={()=>navigate('/reports')}>Reports</Typography>
                    </Box>
                  </Box>
                  </Grid>
              </Grid>
              <Box padding={2} style={{display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:'wrap'}}>
                <Box style={{marginBottom:"20px", display:"flex", gap:"15px", alignItems:"center"}}>
                  <Box onClick={()=>{ setSelected(1); setSIPData(SIP)}} style={{cursor:"pointer", border:`1px solid ${ selected == 1 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius:"8px", backgroundColor:`${ selected == 1 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign:"center", padding:"12px 14px"}}>
                    <Typography style={{fontWeight:"500", color:`${ selected == 1 ? "#09b85d" : "#7b7b9d"}`, fontSize:"14px"}}>All SIP ({SIP.length})</Typography>
                  </Box>
                  <Box onClick={()=>{ setSelected(2); setSIPData(SIP.filter((item) => item.status == 'Active'))}} style={{cursor:"pointer", border:`1px solid ${ selected == 2 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius:"8px", backgroundColor:`${ selected == 2 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign:"center", padding:"12px 14px"}}>
                    <Typography style={{fontWeight:"500", color:`${ selected == 2 ? "#09b85d" : "#7b7b9d"}`, fontSize:"14px"}}>Active ({SIP.filter((item) => item.status == 'Active' || item.mandate).length})</Typography>
                  </Box>
                  <Box onClick={()=>{ setSelected(3); setSIPData(SIP.filter((item) => item.status == "Awaited"))}} style={{cursor:"pointer", border:`1px solid ${ selected == 3 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius:"8px", backgroundColor:`${ selected == 3 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign:"center", padding:"12px 14px"}}>
                    <Typography style={{fontWeight:"500", color:`${ selected == 3 ? "#09b85d" : "#7b7b9d"}`, fontSize:"14px"}}>Awaited ({SIP.filter((item) => item.status == "Awaited").length})</Typography>
                  </Box>
                  <Box onClick={()=>{ setSelected(4); setSIPData(SIP.filter((item) => item.status == "Stoped"))}} style={{cursor:"pointer", border:`1px solid ${ selected == 4 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius:"8px", backgroundColor:`${ selected == 4 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign:"center", padding:"12px 14px"}}>
                    <Typography style={{fontWeight:"500", color:`${ selected == 4 ? "#09b85d" : "#7b7b9d"}`, fontSize:"14px"}}>Stoped ({SIP.filter((item) => item.status == "Stoped").length})</Typography>
                  </Box>
                </Box>
                <Box style={{border:"1px solid #dddfe2", boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.05)", borderRadius:"4px", display:"flex", alignItems:"center", gap:"10px", padding:"5px 14px"}}>
                  <SearchOutlined style={{color:"#7b7b9d"}}/>
                  <InputBase placeholder='Search SIP' onChange={(e) => setSIPData(SIP.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase())))} style={{color:"#7b7b9d", minWidth:"250px"}}></InputBase>
                  <IconButton >
                    <FilterAltOutlined style={{color:"#09b85d"}}/>
                  </IconButton>
                </Box>
              </Box>
              
              <Box padding={2}>
                {
                  sipData.map((item, index) => {
                    return(
                      <AllSIPCard {...item} key={index}/>
                    )
                  })
                }
              </Box>
            </Grid>
          </Grid>
          </Grid>
          </Box>
      </Box>
  )
}

export default Sip