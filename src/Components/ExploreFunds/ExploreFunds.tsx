
import './Portfolio.css'
import { Box, styled } from '@mui/system'
import { Avatar, Chip, Grid, IconButton, InputBase, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Drawer as DrawerList,  List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Close, ErrorOutline, Filter, FilterAlt, FilterAltOutlined, Home as HomeIcon, MenuRounded, PowerSettingsNew, Search, SearchOutlined, TaskAltOutlined, WrongLocationOutlined } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support } from '@mui/icons-material';
import { AppBar, Button, Divider,  Theme} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {Logo, meria, Profile, Star} from '../../Assets/index'
import { useNavigate } from 'react-router-dom'
import Navbar from '../CommonComponents/Navbar'
import Sidebar from '../CommonComponents/Sidebar'

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
 
function ExploreFunds() {

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
  const [openMandateModal, setOpenMandateModal] = useState<boolean>(false)
  const [openPendingModal, setOpenPendingModal] = useState<boolean>(false)

  const menuActions = React.useRef<MenuUnstyledActions>(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>()

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    anchorEl ? 
    setAnchorEl(null) :
    setAnchorEl(event.currentTarget)
  };

  const classes = useStyles()

  const refContainer = useRef();

  const navigate = useNavigate();

  return (
      <Box style={{width: "100vw"}} ref={refContainer}>
        <Navbar/>
          <Box  sx={style.main}>
          <Grid container spacing={0} >
          <Grid  item xs={0} sm={1} md={2}>
              <Toolbar/>
              <Sidebar/>
            </Grid>
            <Grid container sx={{width:"100%", height:"100vh", overflow:"scroll"}} xs={13} sm={11} md={10}>
              <Grid sx={{height: { xs: "auto", sm: "inherit"}, padding:2, overflow:{ sx: "auto", sm: "scroll"}}} item xs={12}>
                <Toolbar/>
                <Box style={{display:"flex", alignItems:'start', justifyContent:"space-between", flexWrap:'wrap'}}>
                    <Box padding={2} style={{display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:'wrap'}}>
                        <Box>
                            <Typography style={{fontSize:"12px", color:"#8787a2"}}>Choose Funds to Invest</Typography>
                            <Typography style={{fontSize:"18px", color:"#3c3e42", fontWeight:"500"}}>Explore Funds</Typography>
                            <Typography style={{fontSize:"12px", color:"#8787a2", marginTop:"20px"}}>3 funds found</Typography>
                        </Box>
                    </Box>
                    <Box padding={2}>
                        <Box style={{border:"1px solid #dddfe2", boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.05)", borderRadius:"4px", display:"flex", alignItems:"center", marginBottom:"10px", padding:"5px 14px"}}>
                            <SearchOutlined style={{color:"#7b7b9d"}}/>
                            <InputBase placeholder='Search Transactions' style={{color:"#7b7b9d", minWidth:"250px"}}></InputBase>
                            <IconButton >
                                <FilterAltOutlined style={{color:"#09b85d"}}/>
                            </IconButton>
                        </Box>
                        <Box style={{marginBottom:"20px", display:"flex", gap:"15px", alignItems:"center"}}>
                            <Box style={{border:"1px solid #23db7b", borderRadius:"8px", backgroundColor:"#dff7ea", textAlign:"center", padding:"12px 14px"}}>
                                <Typography style={{fontWeight:"500", color:"#09b85d", fontSize:"14px"}}>All</Typography>
                            </Box>
                            <Box style={{border:"1px solid rgba(123, 123, 157, 0.3)", borderRadius:"8px", backgroundColor:"rgba(255, 255, 255, 0)", textAlign:"center", padding:"12px 14px"}}>
                                <Typography style={{fontWeight:"500", color:"#7b7b9d", fontSize:"14px"}}>Equity</Typography>
                            </Box>
                            <Box style={{border:"1px solid rgba(123, 123, 157, 0.3)", borderRadius:"8px", backgroundColor:"rgba(255, 255, 255, 0)", textAlign:"center", padding:"12px 14px"}}>
                                <Typography style={{fontWeight:"500", color:"#7b7b9d", fontSize:"14px"}}>Debt</Typography>
                            </Box>
                            <Box style={{border:"1px solid rgba(123, 123, 157, 0.3)", borderRadius:"8px", backgroundColor:"rgba(255, 255, 255, 0)", textAlign:"center", padding:"12px 14px"}}>
                                <Typography style={{fontWeight:"500", color:"#7b7b9d", fontSize:"14px"}}>Balanced</Typography>
                            </Box>
                        </Box>
                        
                    </Box>
                </Box>
                <Box style={{ gap:"20px", flexWrap:"wrap", overflowX:"scroll", marginBottom:"15px",display:"flex", backgroundColor:"white", borderRadius:"8px", justifyContent:"space-between", alignItems:"center", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", padding:"10px 20px"}}>
                    <Box style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
                        <Box style={{overflow:"hidden",height:"32px", width:"32px", border:"1px solid #d1d6dd", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:'center'}}>
                            <img src={meria} width="100%" alt='mirae'></img>
                        </Box>
                        <Box>
                            <Typography style={{marginBottom:"10px", color:"#3c3e42", fontSize:"16px", fontWeight:"500", lineHeight:"1.19"}}>Mirae Asset Dynamic Bond Fund Direct Growth</Typography>
                            <Box style={{display:"flex", gap:"10px"}}>
                            <Box style={{padding:"4px 5px", backgroundColor:"rgba(123, 123, 157, 0.16)"}}>
                                <Typography style={{color:"#7b7b9d", fontSize:"12px"}}>Large Cap</Typography>
                            </Box>
                            <Box style={{padding:"4px 5px", backgroundColor:"rgba(123, 123, 157, 0.16)"}}>
                                <Typography style={{color:"#7b7b9d", fontSize:"12px"}}>Equity</Typography>
                            </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box style={{padding:"4px 8px", backgroundColor:"#d6d5ef", borderRadius:"2px"}}>
                        <Typography style={{color:"#6c63ff", fontSize:"16px", fontWeight:"500"}}>₹30,000</Typography>
                    </Box>
                    <Chip style={{borderRadius:"0px", backgroundColor:"#fef4d6"}} avatar={<Avatar alt="star" src={ Star } />}  label={ 5 + '.0' } />
                    <Box style={{display:"flex", gap:"30px", flexWrap:"wrap"}}>
                        <Box>
                            <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>Invested Value</Typography>
                            <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹1,25,000</Typography>
                        </Box>
                        <Box>
                            <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>Current Value</Typography>
                            <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹1,46,625</Typography>
                        </Box>
                        <Box>
                            <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>5 yrs return</Typography>
                            <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹21,625 <span style={{color:'#23db7b'}}>(+17.36%)</span></Typography>
                        </Box>
                    </Box>
                </Box>
                <Box style={{ gap:"20px", flexWrap:"wrap", overflowX:"scroll", marginBottom:"15px",display:"flex", backgroundColor:"white", borderRadius:"8px", justifyContent:"space-between", alignItems:"center", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", padding:"10px 20px"}}>
                    <Box style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
                        <Box style={{overflow:"hidden",height:"32px", width:"32px", border:"1px solid #d1d6dd", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:'center'}}>
                            <img src={meria} width="100%" alt='mirae'></img>
                        </Box>
                        <Box>
                            <Typography style={{marginBottom:"10px", color:"#3c3e42", fontSize:"16px", fontWeight:"500", lineHeight:"1.19"}}>Mirae Asset Dynamic Bond Fund Direct Growth</Typography>
                            <Box style={{display:"flex", gap:"10px"}}>
                            <Box style={{padding:"4px 5px", backgroundColor:"rgba(123, 123, 157, 0.16)"}}>
                                <Typography style={{color:"#7b7b9d", fontSize:"12px"}}>Large Cap</Typography>
                            </Box>
                            <Box style={{padding:"4px 5px", backgroundColor:"rgba(123, 123, 157, 0.16)"}}>
                                <Typography style={{color:"#7b7b9d", fontSize:"12px"}}>Equity</Typography>
                            </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box style={{padding:"4px 8px", backgroundColor:"#d6d5ef", borderRadius:"2px"}}>
                        <Typography style={{color:"#6c63ff", fontSize:"16px", fontWeight:"500"}}>₹30,000</Typography>
                    </Box>
                    <Chip style={{borderRadius:"0px", backgroundColor:"#fef4d6"}} avatar={<Avatar alt="star" src={ Star } />}  label={ 5 + '.0' } />
                    <Box style={{display:"flex", gap:"30px", flexWrap:"wrap"}}>
                        <Box>
                            <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>Invested Value</Typography>
                            <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹1,25,000</Typography>
                        </Box>
                        <Box>
                            <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>Current Value</Typography>
                            <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹1,46,625</Typography>
                        </Box>
                        <Box>
                            <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>5 yrs return</Typography>
                            <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹21,625 <span style={{color:'#23db7b'}}>(+17.36%)</span></Typography>
                        </Box>
                    </Box>
                </Box>
                <Box style={{ gap:"20px", flexWrap:"wrap", overflowX:"scroll", marginBottom:"15px",display:"flex", backgroundColor:"white", borderRadius:"8px", justifyContent:"space-between", alignItems:"center", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", padding:"10px 20px"}}>
                    <Box style={{display:"flex", gap:"10px", flexWrap:"wrap"}}>
                        <Box style={{overflow:"hidden",height:"32px", width:"32px", border:"1px solid #d1d6dd", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:'center'}}>
                            <img src={meria} width="100%" alt='mirae'></img>
                        </Box>
                        <Box>
                            <Typography style={{marginBottom:"10px", color:"#3c3e42", fontSize:"16px", fontWeight:"500", lineHeight:"1.19"}}>Mirae Asset Dynamic Bond Fund Direct Growth</Typography>
                            <Box style={{display:"flex", gap:"10px"}}>
                            <Box style={{padding:"4px 5px", backgroundColor:"rgba(123, 123, 157, 0.16)"}}>
                                <Typography style={{color:"#7b7b9d", fontSize:"12px"}}>Large Cap</Typography>
                            </Box>
                            <Box style={{padding:"4px 5px", backgroundColor:"rgba(123, 123, 157, 0.16)"}}>
                                <Typography style={{color:"#7b7b9d", fontSize:"12px"}}>Equity</Typography>
                            </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box style={{padding:"4px 8px", backgroundColor:"#d6d5ef", borderRadius:"2px"}}>
                        <Typography style={{color:"#6c63ff", fontSize:"16px", fontWeight:"500"}}>₹30,000</Typography>
                    </Box>
                    <Chip style={{borderRadius:"0px", backgroundColor:"#fef4d6"}} avatar={<Avatar alt="star" src={ Star } />}  label={ 5 + '.0' } />
                    <Box style={{display:"flex", gap:"30px", flexWrap:"wrap"}}>
                        <Box>
                            <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>Invested Value</Typography>
                            <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹1,25,000</Typography>
                        </Box>
                        <Box>
                            <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>Current Value</Typography>
                            <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹1,46,625</Typography>
                        </Box>
                        <Box>
                            <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>5 yrs return</Typography>
                            <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹21,625 <span style={{color:'#23db7b'}}>(+17.36%)</span></Typography>
                        </Box>
                    </Box>
                </Box>
            </Grid>
          </Grid>
          </Grid>
          </Box>
      </Box>
  )
}

export default ExploreFunds