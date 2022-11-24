
import './Portfolio.css'
import { Box, styled } from '@mui/system'
import { Grid, MenuList, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
import { Drawer as DrawerList,  List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import { Assessment, Home as HomeIcon, MenuRounded, NavigateNext, PowerSettingsNew, Search } from '@mui/icons-material'
import { MenuItemUnstyled, menuItemUnstyledClasses, MenuUnstyled, MenuUnstyledActions } from '@mui/base';
import { ExpandLessOutlined, ExpandMoreOutlined, Support } from '@mui/icons-material';
import { AppBar, Button, Divider,  Theme} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {Logo, Profile} from '../../Assets/index'
import { useNavigate } from 'react-router-dom'
import { chart, meria } from '../../Assets/index'

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
        <AppBar elevation={2} style={style.appBar} classes={classes.appBar}>
          <Toolbar style={style.toolbar}>
            <Box>
              <MenuRounded onClick={()=>setOpen(!open)} sx={{color: "#8787a2", display : {sx: "block", sm: "none"}, marginRight: "20px"}}/>
              <img onClick={()=>navigate("/home")} src={Logo} alt="Sprint Money" style={style.image} />
            </Box>
            <Box onClick={handleClick} style={style.profileContainer}>
              <img src={Profile} alt="image" style={style.profile} />
              <Typography sx={{fontSize: "16px", color: "white", display:{ xs: "none", sm: "block"}}}>Hi, Rahul M.</Typography>
              {anchorEl ? <ExpandLessOutlined/> : <ExpandMoreOutlined/>}
            </Box>
            <MenuUnstyled
              style={{zIndex:5000}}
              actions={menuActions}
              open={Boolean(anchorEl)}
              onClose={()=>setAnchorEl(null)}
              anchorEl={anchorEl}
            >
              <StyledMenuItem>
                <Box style={style.menuContainer}>
                  <img src={Profile} alt="image" style={style.profileInter} />
                  <Typography className='mediumButtonText'>Rahul Malhotra</Typography>
                  <Typography className="caption">rahul.malhotra@gamil.com</Typography>
                  <Box style={style.menuButton}>
                    <Typography style={style.menuText}>KYC PENDING</Typography>
                    <Typography style={style.menuText2}>View Profile</Typography>
                  </Box>
                  <Divider style={{margin:"15px 0px"}}/>
                  <Button variant="contained" style={style.button} fullWidth startIcon={<Support style={style.menuIcon}/>}>
                      <Typography component="span" className="subTitle3">Help & Support</Typography>
                  </Button> 
                </Box>
              </StyledMenuItem>
            </MenuUnstyled>
          </Toolbar>
        </AppBar>
        <DrawerList sx={{
            boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",
            display:{ xs: "block", sm : "none"},
            "& .MuiBackdrop-root" : {
              flexGrow : 0,
            }
          }}
          PaperProps={{elevation: 0, sx:{width: "250px", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",}}}
          style={style.drawer} onClose={()=>setOpen(false)} variant="temporary" open={open}>
            <Toolbar/>
            <List sx={{py:"30px"}}>
                <ListItem disablePadding>
                  <ListItemButton
                  onClick={()=>navigate('/home')}
                    sx={{
                      minHeight: 48,
                      px: 2.5,
                      my: 2,
                      flexDirection: { sm:"column", md: "row"},
                      
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 1,
                        justifyContent: 'center',
                      }}
                    >
                      <HomeIcon sx={{color:"black"}}/>
                    </ListItemIcon>
                    <ListItemText primary="Home" sx={{ color:"#3c3e42", fontSize:{sm:"10px", md:"16px"} }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    onClick={()=>navigate('/portfolio')}
                    sx={{
                      minHeight: 56,
                      px: 2.5,
                      my:2,
                      flexDirection: { sm:"column", md: "row"},
                      background:"rgba(0, 0, 0, 0.05)"
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 1,
                        justifyContent: 'center',
                      }}
                    >
                      <Assessment sx={{color:'#23db7b'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Portfolio" sx={{ color:"#3c3e42", fontSize:{sm:"10px", md:"16px"} }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 56,
                      px: 2.5,
                      my:2,
                      flexDirection: { sm:"column", md: "row"}
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 1,
                        justifyContent: 'center',
                      }}
                    >
                      <Search sx={{color:'black'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Explore Funds" sx={{ color:"#3c3e42", fontSize:{sm:"10px", md:"16px"} }} />
                  </ListItemButton>
                </ListItem>
                <ListItem  disablePadding sx={{ display: 'block',  position:"fixed", width:{ sx: "0%", sm: "8.333%", md : "16.666%"}, bottom:"0"}}>
                  <ListItemButton
                    onClick={()=>console.log("Clicked")}
                    sx={{
                      minHeight: 56,
                      px: 2.5,
                      my:2,
                      flexDirection: { sm:"column", md: "row"}
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 1,
                        justifyContent: 'center',
                      }}
                    >
                      <PowerSettingsNew sx={{color:'black'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Logout" sx={{ color:"#3c3e42", fontSize:{sm:"10px", md:"16px"} }} />
                  </ListItemButton>
                </ListItem>
              </List>
          </DrawerList>
          <Box  sx={style.main}>
          <Grid container spacing={0} sx={{height:"100vh", overflow:"hidden"}}>
          <Grid sx={{display: {xs: "none", sm: "block"},backgroundColor:"white", boxShadow: "0 1px 5px 0 rgba(0, 0, 0, 0.16)",  height: "auto", padding:0, boxSizing:"border-box"}} item xs={0} sm={1} md={2}>
              <Toolbar/>
              <List sx={{py:"30px", height:"inherit"}}>
                <ListItem disablePadding>
                  <ListItemButton
                  onClick={()=>navigate('/home')}
                    sx={{
                      minHeight: 48,
                      px: 2.5,
                      my: 2,
                      flexDirection: { sm:"column", md: "row"},
                      
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 1,
                        justifyContent: 'center',
                      }}
                    >
                      <HomeIcon sx={{color:"black"}}/>
                    </ListItemIcon>
                    <ListItemText primary="Home" sx={{ color:"#3c3e42", fontSize:{sm:"10px", md:"16px"} }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    onClick={()=>navigate('/portfolio')}
                    sx={{
                      minHeight: 56,
                      px: 2.5,
                      my:2,
                      flexDirection: { sm:"column", md: "row"},
                      background:"rgba(0, 0, 0, 0.05)"
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 1,
                        justifyContent: 'center',
                      }}
                    >
                      <Assessment sx={{color:'#23db7b'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Portfolio" sx={{ color:"#3c3e42", fontSize:{sm:"10px", md:"16px"} }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 56,
                      px: 2.5,
                      my:2,
                      flexDirection: { sm:"column", md: "row"}
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 1,
                        justifyContent: 'center',
                      }}
                    >
                      <Search sx={{color:'black'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Explore Funds" sx={{ color:"#3c3e42", fontSize:{sm:"10px", md:"16px"} }} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding sx={{ display: 'block',  position:"fixed", width:{ sx: "0%", sm: "8.333%", md : "16.666%"}, bottom:"0"}}>
                  <ListItemButton
                    sx={{
                      minHeight: 56,
                      px: 2.5,
                      my:2,
                      flexDirection: { sm:"column", md: "row"}
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: 1,
                        justifyContent: 'center',
                      }}
                    >
                      <PowerSettingsNew sx={{color:'black'}}/>
                    </ListItemIcon>
                    <ListItemText primary="Logout" sx={{ color:"#3c3e42", fontSize:{sm:"10px", md:"16px"} }} />
                  </ListItemButton>
                </ListItem>
              </List>
            </Grid>
            <Grid container sx={{height:"100vh", overflow:"scroll"}} xs={13} sm={11} md={10}>
              <Grid sx={{height: { xs: "auto", sm: "inherit"}, padding:0, boxSizing:"border-box", overflow:{ sx: "auto", sm: "scroll"}}} item xs={13}>
                <Toolbar/>
                <Grid container>
                  <Grid item xs={12} sx={{padding:2}}>
                    <Box style={{marginBottom:"20px", padding:"15px", borderRadius:"8px", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", backgroundColor:"white", display:"flex", alignItems:"center", justifyContent:"center", gap:"90px"}}>
                      <Box style={{position:"relative", display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <Typography style={{color:"#3c3e42", fontWeight:"500", fontSize:"16px", cursor:"pointer"}} onClick={()=>navigate('/holdings')}>Holdings</Typography>
                        <Box style={{position:"absolute", bottom:"-15px", padding:"1px", backgroundColor:"#23db7b", width:"106%"}}></Box>
                      </Box>
                      <Typography style={{color:"#919eb1", fontWeight:"500", fontSize:"16px", cursor:"pointer"}} onClick={()=>navigate('/transactions')}>Transactions</Typography>
                      <Typography style={{color:"#919eb1", fontWeight:"500", fontSize:"16px", cursor:"pointer"}} onClick={()=>navigate('/sips')}>SIPs</Typography>
                      <Typography style={{color:"#919eb1", fontWeight:"500", fontSize:"16px", cursor:"pointer"}} onClick={()=>navigate('/reports')}>Reports</Typography>
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
                                <Typography style={{color:"#7b7b9d", fontSize:"14px"}}>DEPT</Typography>
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
                              <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>Absolute Returne</Typography>
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
                      <Box style={{border:"1px solid #23db7b", borderRadius:"8px", backgroundColor:"#dff7ea", textAlign:"center", padding:"12px 14px"}}>
                        <Typography style={{fontWeight:"500", color:"#09b85d", fontSize:"14px"}}>All Funds (15)</Typography>
                      </Box>
                      <Box style={{border:"1px solid rgba(123, 123, 157, 0.3)", borderRadius:"8px", backgroundColor:"rgba(255, 255, 255, 0)", textAlign:"center", padding:"12px 14px"}}>
                        <Typography style={{fontWeight:"500", color:"#7b7b9d", fontSize:"14px"}}>Equity (8)</Typography>
                      </Box>
                      <Box style={{border:"1px solid rgba(123, 123, 157, 0.3)", borderRadius:"8px", backgroundColor:"rgba(255, 255, 255, 0)", textAlign:"center", padding:"12px 14px"}}>
                        <Typography style={{fontWeight:"500", color:"#7b7b9d", fontSize:"14px"}}>Debt (5)</Typography>
                      </Box>
                      <Box style={{border:"1px solid rgba(123, 123, 157, 0.3)", borderRadius:"8px", backgroundColor:"rgba(255, 255, 255, 0)", textAlign:"center", padding:"12px 14px"}}>
                        <Typography style={{fontWeight:"500", color:"#7b7b9d", fontSize:"14px"}}>Balanced (2)</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box style={{gap:"20px", flexWrap:"wrap", overflowX:"scroll", marginBottom:"15px",display:"flex", backgroundColor:"white", borderRadius:"8px", justifyContent:"space-between", alignItems:"center", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", padding:"10px 20px"}}>
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
                        <Box style={{padding:"4px 8px", backgroundColor:"#d6d5ef", borderRadius:"2px"}}>
                          <Typography style={{color:"#6c63ff", fontSize:"16px", fontWeight:"500"}}>₹30,000</Typography>
                        </Box>
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
                        <Box onClick={handleMoreIcon} style={{backgroundColor:"rgba(123, 123, 157, 0.16)", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"2px", width:"28px", height:"28px", borderRadius:"50%"}}>
                          <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                          <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                          <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                        </Box>
                      </Box>
                      <Box style={{gap:"20px", flexWrap:"wrap", overflowX:"scroll", marginBottom:"15px",display:"flex", backgroundColor:"white", borderRadius:"8px", justifyContent:"space-between", alignItems:"center", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", padding:"10px 20px"}}>
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
                        <Box style={{padding:"4px 8px", backgroundColor:"#d6d5ef", borderRadius:"2px"}}>
                          <Typography style={{color:"#6c63ff", fontSize:"16px", fontWeight:"500"}}>₹30,000</Typography>
                        </Box>
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
                        <Box onClick={handleMoreIcon} style={{backgroundColor:"rgba(123, 123, 157, 0.16)", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"2px", width:"28px", height:"28px", borderRadius:"50%"}}>
                          <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                          <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                          <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                        </Box>
                      </Box>
                      <Box style={{gap:"20px", flexWrap:"wrap", overflowX:"scroll", marginBottom:"15px",display:"flex", backgroundColor:"white", borderRadius:"8px", justifyContent:"space-between", alignItems:"center", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", padding:"10px 20px"}}>
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
                        <Box style={{padding:"4px 8px", backgroundColor:"#d6d5ef", borderRadius:"2px"}}>
                          <Typography style={{color:"#6c63ff", fontSize:"16px", fontWeight:"500"}}>₹30,000</Typography>
                        </Box>
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
                        <Box onClick={handleMoreIcon} style={{backgroundColor:"rgba(123, 123, 157, 0.16)", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"2px", width:"28px", height:"28px", borderRadius:"50%"}}>
                          <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                          <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                          <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                  <MenuUnstyled
                    style={{zIndex:5000}}
                    actions={menuActions}
                    open={Boolean(moreAnchorEl)}
                    onClose={()=>setMoreAnchorEl(null)}
                    anchorEl={moreAnchorEl}
                  >
                    <StyledMenuItem>
                      <Box style={style.menuContainer}>
                        <Box style={{display:"flex", justifyContent:"space-between"}}>
                          <MenuList style={{width:"100%", padding:"0px"}}>
                            <ListItemButton style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                              <Typography style={{fontSize:"16px", color:"rgba(0, 0, 0, 0.87)"}} onClick={()=>navigate("/redeemfund")}>Redeem Funds</Typography>
                              <NavigateNext style={{color:"#93a0b2"}}/>
                            </ListItemButton>
                            <ListItemButton style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                              <Typography style={{fontSize:"16px", color:"rgba(0, 0, 0, 0.87)"}}>Buy More Funds</Typography>
                              <NavigateNext style={{color:"#93a0b2"}}/>
                            </ListItemButton>
                            <ListItemButton style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                              <Typography style={{fontSize:"16px", color:"rgba(0, 0, 0, 0.87)"}}>Show Transaction History</Typography>
                              <NavigateNext style={{color:"#93a0b2"}}/>
                            </ListItemButton>
                            <ListItemButton style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                              <Typography style={{fontSize:"16px", color:"rgba(0, 0, 0, 0.87)"}}>View Fund Details</Typography>
                              <NavigateNext style={{color:"#93a0b2"}}/>
                            </ListItemButton>
                          </MenuList>
                        </Box>
                      </Box>
                    </StyledMenuItem>
                  </MenuUnstyled>
              </Grid>
            </Grid>
          </Grid>
          </Grid>
          </Box>
      </Box>
  )
}

export default Portfolio