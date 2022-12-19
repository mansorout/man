
import './Portfolio.css'
import { Box, styled } from '@mui/system'
import { Grid, MenuList, Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import { Drawer as DrawerList,  List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, MenuRounded, NavigateNext, PowerSettingsNew, Search } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support } from '@mui/icons-material';
import { AppBar, Button, Divider,  Theme} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {Logo, Profile} from '../../Assets/index'
import { useNavigate } from 'react-router-dom'
import { chart, meria } from '../../Assets/index'
import Navbar from '../CommonComponents/Navbar'
import Sidebar from '../CommonComponents/Sidebar'
import HoldingCards from '../../Modules/CustomCard/HoldingCards'
import { AllHolding } from '../../Modal/AllHoldingCards'

const StyledMenuItem = styled(MenuItemUnstyled)(
  ({ theme: Theme }) => `
  list-style: none;
  border-radius: 8px;
  width: 300px;
  boxSizing: border-box;
  zIndex: 4000;
  &.${menuItemUnstyledClasses.focusVisible} {
    outline: none;
  }
  `,
);
 
function Portfolio() {

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
    button2 : {
        height: "48px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px 0 rgba(35, 219, 123, 0.4)",
        backgroundColor: "#23db7b",
        width:"100%",
        marginTop:"40px"
    } as React.CSSProperties,
    text : {
        color: "white"
    } 

  }

  const [open, setOpen] = useState<boolean>(false)

  const menuActions = React.useRef<MenuUnstyledActions>(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>()
  const [moreAnchorEl, setMoreAnchorEl] = useState<null | HTMLElement>()
  const [holding, setHolding] = useState<any>([])

  const [selected, setSelected] = useState<number>(1)

  useEffect(()=>{
    setHolding(AllHolding)
  },[])

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    anchorEl ? 
    setAnchorEl(null) :
    setAnchorEl(event.currentTarget)
  };

  const handleMoreIcon = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    moreAnchorEl ? 
    setMoreAnchorEl(null) :
    setMoreAnchorEl(event.currentTarget)
  }

  const classes = useStyles()

  const refContainer = useRef();

  const navigate = useNavigate();

  return (
      <Box style={{width: "100vw"}} ref={refContainer}>
        <Navbar/>
          <Box  sx={style.main}>
          <Grid container spacing={0}>
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
                        <Box style={{position:"relative", display:"flex", flexDirection:"column", alignItems:"center"}}>
                          <Typography style={{color:"#3c3e42", fontWeight:"500", fontSize:"16px", cursor:"pointer"}} onClick={()=>navigate('/holdings')}>Holdings</Typography>
                          <Box style={{position:"absolute", bottom:"0px", padding:"1px", backgroundColor:"#23db7b", width:"106%"}}></Box>
                        </Box>
                        <Typography style={{color:"#919eb1", fontWeight:"500", fontSize:"16px", cursor:"pointer"}} onClick={()=>navigate('/transactions')}>Transactions</Typography>
                        <Typography style={{color:"#919eb1", fontWeight:"500", fontSize:"16px", cursor:"pointer"}} onClick={()=>navigate('/sips')}>SIPs</Typography>
                        <Typography style={{color:"#919eb1", fontWeight:"500", fontSize:"16px", cursor:"pointer"}} onClick={()=>navigate('/reports')}>Reports</Typography>
                      </Box>
                    </Box>
                    <Box style={{marginBottom:"20px", padding:"15px", borderRadius:"8px", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", backgroundColor:"white"}}>
                      <Typography padding={2} style={{color:"#3c3e42", fontWeight:"500", fontSize:"16px", cursor:"pointer"}}>Asset Allocation</Typography>
                      <Grid container padding={2}>
                        <Grid item sm={5} xs={12} style={{display:"flex", alignItems:"center", gap:"40px", justifyContent:"center"}}>
                          <Box style={{display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap", gap:"20px"}}>
                            <img src={chart} alt="chart" width="240px"></img>
                            <Box>
                              <Box my={1} style={{display:"flex", gap:"10px", alignItems:"center"}}>
                                <Box style={{padding:"6px", backgroundColor:"#23db7b", borderRadius:"50%"}}></Box>
                                <Typography style={{color:"#7b7b9d", fontSize:"14px"}}>EQUITY</Typography>
                              </Box>
                              <Box my={1} style={{display:"flex", gap:"10px", alignItems:"center"}}>
                                <Box style={{padding:"6px", backgroundColor:"#fdc100", borderRadius:"50%"}}></Box>
                                <Typography style={{color:"#7b7b9d", fontSize:"14px"}}>DEBT</Typography>
                              </Box>
                              <Box my={1} style={{display:"flex", gap:"10px", alignItems:"center"}}>
                                <Box style={{padding:"6px", backgroundColor:"#4979e8", borderRadius:"50%"}}></Box>
                                <Typography style={{color:"#7b7b9d", fontSize:"14px"}}>BALANCED</Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid padding={2} item sm={1} xs={0}>
                          <Divider orientation="vertical"/>
                        </Grid>
                        <Grid container padding={2} item sm={5} xs={12} m={"auto"} >
                         <Box style={{display:"flex", flexWrap:"wrap", width:"100%",gap:"20px",  justifyContent:"space-between"}}>
                            <Box style={{ width:"40%", minWidth:"200px"}}>
                              <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>Invested Value</Typography>
                              <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹5,01,000</Typography>
                            </Box>
                            <Box style={{ width:"40%", minWidth:"200px"}}>
                              <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>Current Value</Typography>
                              <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹5,96,190</Typography>
                            </Box>
                            <Box style={{ width:"40%", minWidth:"200px"}}>
                              <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>Absolute Return</Typography>
                              <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹19,190</Typography>
                            </Box>
                         </Box>
                         <Button variant="contained" style={style.button2} fullWidth>
                            <Typography style={style.text} className="largeButtonText">Download Statement</Typography>
                        </Button> 
                        </Grid>
                      </Grid>
                    </Box>
                    <Typography style={{marginBottom:"20px", color:"#7b7b9d", fontSize:"21px"}}>Your Holdings</Typography>
                    <Box style={{marginBottom:"20px", display:"flex", gap:"15px", alignItems:"center"}}>
                      <Box onClick={()=>{ setSelected(1); setHolding(AllHolding)}} style={{cursor:"pointer", border:`1px solid ${ selected == 1 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius:"8px", backgroundColor:`${ selected == 1 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign:"center", padding:"12px 14px"}}>
                        <Typography style={{fontWeight:"500", color:`${ selected == 1 ? "#09b85d" : "#7b7b9d"}`, fontSize:"14px"}}>All Funds ({AllHolding.length})</Typography>
                      </Box>
                      <Box onClick={()=>{ setSelected(2); setHolding(AllHolding.filter((item) => item.type == 'Equity'))}} style={{cursor:"pointer", border:`1px solid ${ selected == 2 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius:"8px", backgroundColor:`${ selected == 2 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign:"center", padding:"12px 14px"}}>
                        <Typography style={{fontWeight:"500", color:`${ selected == 2 ? "#09b85d" : "#7b7b9d"}`, fontSize:"14px"}}>Equity ({AllHolding.filter((item) => item.type == 'Equity').length})</Typography>
                      </Box>
                      <Box onClick={()=>{ setSelected(3); setHolding(AllHolding.filter((item) => item.type == 'Debt'))}} style={{cursor:"pointer", border:`1px solid ${ selected == 3 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius:"8px", backgroundColor:`${ selected == 3 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign:"center", padding:"12px 14px"}}>
                        <Typography style={{fontWeight:"500", color:`${ selected == 3 ? "#09b85d" : "#7b7b9d"}`, fontSize:"14px"}}>Debt ({AllHolding.filter((item) => item.type == 'Debt').length})</Typography>
                      </Box>
                      <Box onClick={()=>{ setSelected(4); setHolding(AllHolding.filter((item) => item.type == 'Balanced'))}} style={{cursor:"pointer", border:`1px solid ${ selected == 4 ? '#23db7b' : "rgba(123, 123, 157, 0.3)"}`, borderRadius:"8px", backgroundColor:`${ selected == 4 ? '#dff7ea' : "rgba(255, 255, 255, 0)"}`, textAlign:"center", padding:"12px 14px"}}>
                        <Typography style={{fontWeight:"500", color:`${ selected == 4 ? "#09b85d" : "#7b7b9d"}`, fontSize:"14px"}}>Balanced ({AllHolding.filter((item) => item.type == 'Balanced').length})</Typography>
                      </Box>
                    </Box>
                    <Box>
                      {
                        holding.map((item:any, key:any)=>{
                          return(
                            <HoldingCards {...item} key={key} />
                          )
                        })
                      }
                    </Box>
                  </Grid>
                  
              </Grid>
            </Grid>
          </Grid>
          </Grid>
          </Box>
      </Box>
  )
}

export default Portfolio