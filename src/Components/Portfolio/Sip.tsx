
import './Portfolio.css'
import { Box, styled } from '@mui/system'
import { Grid, IconButton, InputBase, MenuList, Typography } from '@mui/material'
import React, { useRef, useState } from 'react'
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

  const menuActions = React.useRef<MenuUnstyledActions>(null);
  const [moreAnchorEl, setMoreAnchorEl] = useState<null | HTMLElement>()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>()
  const [openMandateModal, setOpenMandateModal] = useState<boolean>(false)
  const [openPendingModal, setOpenPendingModal] = useState<boolean>(false)

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
                  <Box style={{border:"1px solid #23db7b", borderRadius:"8px", backgroundColor:"#dff7ea", textAlign:"center", padding:"12px 14px"}}>
                    <Typography style={{fontWeight:"500", color:"#09b85d", fontSize:"14px"}}>All</Typography>
                  </Box>
                  <Box style={{border:"1px solid rgba(123, 123, 157, 0.3)", borderRadius:"8px", backgroundColor:"rgba(255, 255, 255, 0)", textAlign:"center", padding:"12px 14px"}}>
                    <Typography style={{fontWeight:"500", color:"#7b7b9d", fontSize:"14px"}}>Pending</Typography>
                  </Box>
                  <Box style={{border:"1px solid rgba(123, 123, 157, 0.3)", borderRadius:"8px", backgroundColor:"rgba(255, 255, 255, 0)", textAlign:"center", padding:"12px 14px"}}>
                    <Typography style={{fontWeight:"500", color:"#7b7b9d", fontSize:"14px"}}>Successful</Typography>
                  </Box>
                  <Box style={{border:"1px solid rgba(123, 123, 157, 0.3)", borderRadius:"8px", backgroundColor:"rgba(255, 255, 255, 0)", textAlign:"center", padding:"12px 14px"}}>
                    <Typography style={{fontWeight:"500", color:"#7b7b9d", fontSize:"14px"}}>Rejected</Typography>
                  </Box>
                </Box>
                <Box style={{border:"1px solid #dddfe2", boxShadow:"0 1px 4px 0 rgba(0, 0, 0, 0.05)", borderRadius:"4px", display:"flex", alignItems:"center", gap:"10px", padding:"5px 14px"}}>
                  <SearchOutlined style={{color:"#7b7b9d"}}/>
                  <InputBase placeholder='Search Transactions' style={{color:"#7b7b9d", minWidth:"250px"}}></InputBase>
                  <IconButton >
                    <FilterAltOutlined style={{color:"#09b85d"}}/>
                  </IconButton>
                </Box>
              </Box>
              
              <Box padding={2}>
                <Box style={{gap:"20px", flexWrap:"wrap", overflowX:"scroll", marginBottom:"15px",display:"flex", backgroundColor:"white", borderRadius:"8px", justifyContent:"space-between", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", padding:"10px 20px"}}>
                  <Box style={{display:"flex",gap:"20px"}}>
                    <Box style={{overflow:"hidden",height:"32px", width:"32px", border:"1px solid #d1d6dd", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:'center'}}>
                      <img src={meria} width="100%" alt='mirae'></img>
                    </Box>
                    <Box>
                      <Typography style={{marginBottom:"10px", color:"#3c3e42", fontSize:"16px", fontWeight:"500", lineHeight:"1.19"}}>Mirae Asset Dynamic Bond Fund Direct Growth</Typography>
                      <Box style={{marginBottom:"10px", display:"flex",alignItems:"center"}}>
                        <Typography style={{color:"#7b7b9d", fontSize:"14px"}}>Order No: </Typography>
                        <Typography style={{color:"#7b7b9d", fontSize:"14px", fontWeight:"500"}}> INF209K01090</Typography>
                      </Box>
                      <Box style={{display:"flex", gap:"10px"}}>
                        <Box style={{padding:"2px 5px", backgroundColor:"rgba(123, 123, 157, 0.16)"}}>
                          <Typography style={{color:"#7b7b9d", fontSize:"12px"}}>Large Cap</Typography>
                        </Box>
                        <Box style={{padding:"2px 5px", backgroundColor:"rgba(123, 123, 157, 0.16)"}}>
                          <Typography style={{color:"#7b7b9d", fontSize:"12px"}}>Equity</Typography>
                        </Box>
                        <Box onClick={()=>setOpenMandateModal(true)} style={{display:"flex", cursor:"pointer"}}>
                          <Box style={{width:"25px",height:"25px", display:"flex", alignItems:"center", justifyContent:"center", backgroundColor:"#6c63ff"}}>
                              <ErrorOutline style={{color:"white", width:"15px"}}/>
                            </Box>
                          <Box style={{padding:"2px 5px", backgroundColor:"#e1e0ff"}}>
                            <Typography style={{color:"black", fontSize:"12px", fontWeight:"500"}}>Mandate Pending</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  
                  <Box>
                    <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>SIP Date</Typography>
                    <Typography style={{color:'#3c3e42', fontSize:"18px"}}>15th of every month</Typography>
                  </Box>
                  <Box>
                    <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>SIP Amount</Typography>
                    <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹2,000</Typography>
                  </Box>
                  <Box>
                    <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>Status</Typography>
                    <Box style={{padding:"2px 5px", backgroundColor:"#d2f8e3"}}>
                      <Typography style={{color:"black", fontSize:"14px", fontWeight:"500"}}>Active</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box onClick={handleMoreIcon} style={{backgroundColor:"rgba(123, 123, 157, 0.16)", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"2px", width:"28px", height:"28px", borderRadius:"50%"}}>
                      <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                      <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                      <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                    </Box>
                  </Box>
                </Box>
                <Box style={{gap:"20px", flexWrap:"wrap", overflowX:"scroll", marginBottom:"15px",display:"flex", backgroundColor:"white", borderRadius:"8px", justifyContent:"space-between", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", padding:"10px 20px"}}>
                  <Box style={{display:"flex",gap:"20px"}}>
                    <Box style={{overflow:"hidden",height:"32px", width:"32px", border:"1px solid #d1d6dd", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:'center'}}>
                      <img src={meria} width="100%" alt='mirae'></img>
                    </Box>
                    <Box>
                      <Typography style={{marginBottom:"10px", color:"#3c3e42", fontSize:"16px", fontWeight:"500", lineHeight:"1.19"}}>Mirae Asset Dynamic Bond Fund Direct Growth</Typography>
                      <Box style={{marginBottom:"10px", display:"flex",alignItems:"center"}}>
                        <Typography style={{color:"#7b7b9d", fontSize:"14px"}}>Order No: </Typography>
                        <Typography style={{color:"#7b7b9d", fontSize:"14px", fontWeight:"500"}}> INF209K01090</Typography>
                      </Box>
                      <Box style={{display:"flex", gap:"10px"}}>
                        <Box style={{padding:"2px 5px", backgroundColor:"rgba(123, 123, 157, 0.16)"}}>
                          <Typography style={{color:"#7b7b9d", fontSize:"12px"}}>Large Cap</Typography>
                        </Box>
                        <Box style={{padding:"2px 5px", backgroundColor:"rgba(123, 123, 157, 0.16)"}}>
                          <Typography style={{color:"#7b7b9d", fontSize:"12px"}}>Equity</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box>
                    <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>SIP Date</Typography>
                    <Typography style={{color:'#3c3e42', fontSize:"18px"}}>15th of every month</Typography>
                  </Box>
                  <Box>
                    <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>SIP Amount</Typography>
                    <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹2,000</Typography>
                  </Box>
                  <Box>
                    <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>Status</Typography>
                    <Box style={{padding:"2px 5px", backgroundColor:"#d2f8e3"}}>
                      <Typography style={{color:"black", fontSize:"14px", fontWeight:"500"}}>Active</Typography>
                    </Box>
                  </Box>
                  <Box>
                    <Box onClick={handleMoreIcon} style={{backgroundColor:"rgba(123, 123, 157, 0.16)", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"2px", width:"28px", height:"28px", borderRadius:"50%"}}>
                      <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                      <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                      <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                    </Box>
                  </Box>
                </Box>
                <Box style={{marginBottom:"20px"}}>
                  <Box style={{gap:"20px", flexWrap:"wrap", overflowX:"scroll",display:"flex", backgroundColor:"white", borderRadius:"8px", justifyContent:"space-between", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", padding:"10px 20px"}}>
                    <Box style={{display:"flex",gap:"20px"}}>
                      <Box style={{overflow:"hidden",height:"32px", width:"32px", border:"1px solid #d1d6dd", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:'center'}}>
                        <img src={meria} width="100%" alt='mirae'></img>
                      </Box>
                      <Box>
                        <Typography style={{marginBottom:"10px", color:"#3c3e42", fontSize:"16px", fontWeight:"500", lineHeight:"1.19"}}>Mirae Asset Dynamic Bond Fund Direct Growth</Typography>
                        <Box style={{marginBottom:"10px", display:"flex",alignItems:"center"}}>
                          <Typography style={{color:"#7b7b9d", fontSize:"14px"}}>Order No: </Typography>
                          <Typography style={{color:"#7b7b9d", fontSize:"14px", fontWeight:"500"}}> INF209K01090</Typography>
                        </Box>
                        <Box style={{display:"flex", gap:"10px"}}>
                          <Box style={{padding:"2px 5px", backgroundColor:"rgba(123, 123, 157, 0.16)"}}>
                            <Typography style={{color:"#7b7b9d", fontSize:"12px"}}>Large Cap</Typography>
                          </Box>
                          <Box style={{padding:"2px 5px", backgroundColor:"rgba(123, 123, 157, 0.16)"}}>
                            <Typography style={{color:"#7b7b9d", fontSize:"12px"}}>Equity</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    
                    <Box>
                      <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>SIP Date</Typography>
                      <Typography style={{color:'#3c3e42', fontSize:"18px"}}>15th of every month</Typography>
                    </Box>
                    <Box>
                      <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>SIP Amount</Typography>
                      <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹2,000</Typography>
                    </Box>
                    <Box>
                      <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>Status</Typography>
                      <Box style={{padding:"2px 5px", backgroundColor:"#fff2cc"}}>
                        <Typography style={{color:"black", fontSize:"14px", fontWeight:"500"}}>Awaited</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box onClick={handleMoreIcon} style={{backgroundColor:"rgba(123, 123, 157, 0.16)", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"2px", width:"28px", height:"28px", borderRadius:"50%"}}>
                        <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                        <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                        <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box style={{backgroundColor:"#e0f8ff", padding:"10px", borderRadius:"0px 0px 8px 8px"}}>
                    <Typography style={{color:"#544ec8", fontSize:"12px", fontWeight:"500", paddingLeft:"60px"}}>Requested to stop SIP on 25 Nov, 2020</Typography>
                  </Box>
                </Box>
                <Box style={{marginBottom:"20px"}}>
                  <Box style={{gap:"20px", flexWrap:"wrap", overflowX:"scroll",display:"flex", backgroundColor:"white", borderRadius:"8px", justifyContent:"space-between", boxShadow:"0 1px 5px 0 rgba(0, 0, 0, 0.12)", padding:"10px 20px", zIndex:"100"}}>
                    <Box style={{display:"flex",gap:"20px"}}>
                      <Box style={{overflow:"hidden",height:"32px", width:"32px", border:"1px solid #d1d6dd", borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:'center'}}>
                        <img src={meria} width="100%" alt='mirae'></img>
                      </Box>
                      <Box>
                        <Typography style={{marginBottom:"10px", color:"#3c3e42", fontSize:"16px", fontWeight:"500", lineHeight:"1.19"}}>Mirae Asset Dynamic Bond Fund Direct Growth</Typography>
                        <Box style={{marginBottom:"10px", display:"flex",alignItems:"center"}}>
                          <Typography style={{color:"#7b7b9d", fontSize:"14px"}}>Order No: </Typography>
                          <Typography style={{color:"#7b7b9d", fontSize:"14px", fontWeight:"500"}}> INF209K01090</Typography>
                        </Box>
                        <Box style={{display:"flex", gap:"10px"}}>
                          <Box style={{padding:"2px 5px", backgroundColor:"rgba(123, 123, 157, 0.16)"}}>
                            <Typography style={{color:"#7b7b9d", fontSize:"12px"}}>Large Cap</Typography>
                          </Box>
                          <Box style={{padding:"2px 5px", backgroundColor:"rgba(123, 123, 157, 0.16)"}}>
                            <Typography style={{color:"#7b7b9d", fontSize:"12px"}}>Equity</Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    
                    <Box>
                      <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>SIP Date</Typography>
                      <Typography style={{color:'#3c3e42', fontSize:"18px"}}>15th of every month</Typography>
                    </Box>
                    <Box>
                      <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>SIP Amount</Typography>
                      <Typography style={{color:'#3c3e42', fontSize:"18px"}}>₹2,000</Typography>
                    </Box>
                    <Box>
                      <Typography style={{color:'#7b7b9d', fontSize:"14px"}}>Status</Typography>
                      <Box style={{padding:"2px 5px", backgroundColor:"#ffdccc"}}>
                        <Typography style={{color:"black", fontSize:"14px", fontWeight:"500"}}>Stoped</Typography>
                      </Box>
                    </Box>
                    <Box>
                      <Box onClick={handleMoreIcon} style={{backgroundColor:"rgba(123, 123, 157, 0.16)", display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column", gap:"2px", width:"28px", height:"28px", borderRadius:"50%"}}>
                        <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                        <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                        <Box style={{backgroundColor:"#6c63ff", width:"4px", height:"4px", borderRadius:"50%"}}></Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box style={{zIndex:"99", backgroundColor:"#e0f8ff", padding:"10px", borderRadius:"0px 0px 8px 8px"}}>
                    <Typography style={{color:"#544ec8", fontSize:"12px", fontWeight:"500", paddingLeft:"60px"}}>Stopped SIP on 12 Oct, 2020</Typography>
                  </Box>
                </Box>
              </Box>
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
                              <Typography style={{fontSize:"16px", color:"rgba(0, 0, 0, 0.87)"}}>Stop SIP</Typography>
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
          </Box>
      </Box>
  )
}

export default Sip